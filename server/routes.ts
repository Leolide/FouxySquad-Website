import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertEventSchema, 
  insertCommunityStatsSchema, 
  insertGalleryImageSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Events routes
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const event = await storage.getEvent(id);
      
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json(event);
    } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  app.post("/api/events", async (req, res) => {
    try {
      const eventData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(eventData);
      res.status(201).json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(400).json({ message: "Invalid event data" });
    }
  });

  // Community stats routes
  app.get("/api/community-stats", async (req, res) => {
    try {
      const stats = await storage.getCommunityStats();
      
      if (!stats) {
        return res.status(404).json({ message: "Community stats not found" });
      }
      
      res.json(stats);
    } catch (error) {
      console.error("Error fetching community stats:", error);
      res.status(500).json({ message: "Failed to fetch community stats" });
    }
  });

  app.put("/api/community-stats", async (req, res) => {
    try {
      const statsData = insertCommunityStatsSchema.parse(req.body);
      const stats = await storage.updateCommunityStats(statsData);
      res.json(stats);
    } catch (error) {
      console.error("Error updating community stats:", error);
      res.status(400).json({ message: "Invalid stats data" });
    }
  });

  // Gallery routes
  app.get("/api/gallery", async (req, res) => {
    try {
      const images = await storage.getAllGalleryImages();
      res.json(images);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
      res.status(500).json({ message: "Failed to fetch gallery images" });
    }
  });

  app.post("/api/gallery", async (req, res) => {
    try {
      const imageData = insertGalleryImageSchema.parse(req.body);
      const image = await storage.createGalleryImage(imageData);
      res.status(201).json(image);
    } catch (error) {
      console.error("Error creating gallery image:", error);
      res.status(400).json({ message: "Invalid image data" });
    }
  });

  // Luma integration endpoint (placeholder)
  app.get("/api/luma/events", async (req, res) => {
    try {
      // In a real implementation, this would fetch from Luma API
      // For now, return our local events with Luma URLs
      const events = await storage.getAllEvents();
      const lumaEvents = events.filter(event => event.lumaUrl);
      res.json(lumaEvents);
    } catch (error) {
      console.error("Error fetching Luma events:", error);
      res.status(500).json({ message: "Failed to fetch Luma events" });
    }
  });

  // QR Code generation endpoint
  app.post("/api/qr-code", async (req, res) => {
    try {
      const { text, type } = req.body;
      
      // In a real implementation, this would use a QR code library
      // For now, return a placeholder response
      const qrData = {
        text: text || "https://chat.fouxy-squad.com",
        type: type || "group-chat",
        generated: true,
        timestamp: new Date().toISOString()
      };
      
      res.json(qrData);
    } catch (error) {
      console.error("Error generating QR code:", error);
      res.status(500).json({ message: "Failed to generate QR code" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real implementation, this would send an email or save to database
      console.log("Contact form submission:", { name, email, message });
      
      res.json({ 
        message: "Thank you for your message! We'll get back to you soon.",
        success: true 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
