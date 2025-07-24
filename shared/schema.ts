import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  participants: integer("participants").default(0),
  isOnline: boolean("is_online").default(false),
  lumaUrl: text("luma_url"),
  status: text("status").notNull().default("upcoming"), // upcoming, completed, cancelled
});

export const communityStats = pgTable("community_stats", {
  id: serial("id").primaryKey(),
  totalMembers: integer("total_members").notNull().default(0),
  totalEvents: integer("total_events").notNull().default(0),
  instagramFollowers: integer("instagram_followers").notNull().default(0),
  linkedinConnections: integer("linkedin_connections").notNull().default(0),
  activeChatMembers: integer("active_chat_members").notNull().default(0),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const galleryImages = pgTable("gallery_images", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  altText: text("alt_text").notNull(),
  eventId: integer("event_id").references(() => events.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export const insertCommunityStatsSchema = createInsertSchema(communityStats).omit({
  id: true,
  updatedAt: true,
});

export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertCommunityStats = z.infer<typeof insertCommunityStatsSchema>;
export type CommunityStats = typeof communityStats.$inferSelect;

export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;
export type GalleryImage = typeof galleryImages.$inferSelect;
