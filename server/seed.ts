import { db } from "./db";
import { events, communityStats, galleryImages, type InsertEvent, type InsertCommunityStats, type InsertGalleryImage } from "@shared/schema";

async function seedDatabase() {
  console.log("Seeding database...");

  // Seed community stats
  const statsData: InsertCommunityStats = {
    totalMembers: 200,
    totalEvents: 9,
    instagramFollowers: 2500,
    linkedinConnections: 1800,
    activeChatMembers: 190,
  };

  await db.insert(communityStats).values(statsData).onConflictDoNothing();

  // Seed events
  const sampleEvents: InsertEvent[] = [
    {
      title: "Fouxy Squad Founded",
      description: "The beginning of our amazing design community journey",
      date: new Date("2025-02-01"),
      participants: 0,
      isOnline: false,
      status: "completed"
    },
    {
      title: "First Meetup",
      description: "Our inaugural community event",
      date: new Date("2025-03-15"),
      participants: 20,
      isOnline: false,
      status: "completed"
    },
    {
      title: "Second Meetup",
      description: "Growing community with amazing energy",
      date: new Date("2025-04-20"),
      participants: 30,
      isOnline: false,
      status: "completed"
    },
    {
      title: "Design Picnic",
      description: "Outdoor creativity and networking",
      date: new Date("2025-05-10"),
      participants: 40,
      isOnline: false,
      status: "completed"
    },
    {
      title: "London UX/UI Designers - Online Mini Social",
      description: "Virtual networking event for London-based designers",
      date: new Date("2025-03-29"),
      participants: 20,
      isOnline: true,
      status: "completed"
    },
    {
      title: "London UX/UI Designer Picnic - Third Edition",
      description: "Parliament Hill Viewpoint picnic meetup",
      date: new Date("2025-05-18"),
      participants: 30,
      isOnline: false,
      status: "completed"
    },
    {
      title: "London UX/UI RoundTable Online",
      description: "Interactive online discussion on design methodologies and trends",
      date: new Date("2025-06-28"),
      participants: 40,
      isOnline: true,
      status: "completed"
    },
    {
      title: "Vibe Coding for Designers",
      description: "Bridging design and development skills",
      date: new Date("2025-07-30"),
      participants: 0,
      isOnline: false,
      lumaUrl: "https://lu.ma/user/FouxySquad",
      status: "completed"
    },
    {
      title: "From Sketch to Reality: AIGC Creative Workflows",
      description: "How AI image and video generation are reshaping creative workflows across industries. Talks, workshop, pitch & prizes. Speakers from SOM and more. All attendees receive 1 month free Fotor membership.",
      date: new Date("2026-01-24"),
      participants: 0,
      isOnline: false,
      lumaUrl: "https://lu.ma/9di2vrvp",
      status: "completed"
    },
    {
      title: "Navigating the 2026 UK Design Ecosystem",
      description: "An honest, practical conversation about how the UK design market actually works — CVs, portfolios, hiring, startups vs corporates, and common blind spots for international designers. Speaker: Veron, Head of Design with 20+ years experience.",
      date: new Date("2026-03-18"),
      participants: 0,
      isOnline: false,
      lumaUrl: "https://lu.ma/msr75avl",
      status: "upcoming"
    },
    {
      title: "Design Mode: ON | London Designers Chat Night",
      description: "A conversation-first evening for designers and creatives. No slides, no stage — just good people, food, drinks, and honest conversations about design judgment, taste, and AI. Sponsored by Replit.",
      date: new Date("2026-03-25"),
      participants: 0,
      isOnline: false,
      lumaUrl: "https://lu.ma/ua1wxepb",
      status: "upcoming"
    }
  ];

  await db.insert(events).values(sampleEvents).onConflictDoNothing();

  // Seed gallery images
  const sampleGalleryImages: InsertGalleryImage[] = [
    {
      title: "Design Picnic Event",
      description: "Design picnic event with community members",
      imageUrl: "/attached_assets/design picnic_1753397105236.avif",
      altText: "Design picnic event with community members",
      eventId: null,
    },
    {
      title: "Community Roundtable",
      description: "Community roundtable discussion",
      imageUrl: "/attached_assets/Roundtable_1753397105237.avif",
      altText: "Community roundtable discussion",
      eventId: null,
    },
    {
      title: "Vibe Coding Session",
      description: "Vibe coding session with designers",
      imageUrl: "/attached_assets/vibe coding_1753397105238.avif",
      altText: "Vibe coding session with designers",
      eventId: null,
    },
    {
      title: "Community Gathering",
      description: "Community gathering outdoors",
      imageUrl: "/attached_assets/oucbuc _1753397105237.avif",
      altText: "Community gathering outdoors",
      eventId: null,
    },
    {
      title: "Event Screenshot",
      description: "Event screenshot from community meetup",
      imageUrl: "/attached_assets/Screenshot 2025-07-25 at 00.11.18_1753398680095.png",
      altText: "Event screenshot from community meetup",
      eventId: null,
    },
    {
      title: "Community Documentation",
      description: "Community event documentation",
      imageUrl: "/attached_assets/Screenshot 2025-07-25 at 00.13.21_1753398802657.png",
      altText: "Community event documentation",
      eventId: null,
    },
    {
      title: "Event Highlights",
      description: "Event highlights and moments",
      imageUrl: "/attached_assets/Screenshot 2025-07-25 at 00.24.58_1753399500501.png",
      altText: "Event highlights and moments",
      eventId: null,
    },
    {
      title: "Recent Gathering",
      description: "Recent community gathering",
      imageUrl: "/attached_assets/Screenshot 2025-07-26 at 23.57.24_1753570646501.png",
      altText: "Recent community gathering",
      eventId: null,
    },
    {
      title: "Latest Event",
      description: "Latest event documentation",
      imageUrl: "/attached_assets/Screenshot 2025-07-26 at 23.59.31_1753570773735.png",
      altText: "Latest event documentation",
      eventId: null,
    }
  ];

  await db.insert(galleryImages).values(sampleGalleryImages).onConflictDoNothing();

  console.log("Database seeded successfully!");
}

seedDatabase().catch(console.error);
