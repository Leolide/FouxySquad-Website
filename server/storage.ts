import { 
  users, 
  events, 
  communityStats, 
  galleryImages,
  type User, 
  type InsertUser,
  type Event,
  type InsertEvent,
  type CommunityStats,
  type InsertCommunityStats,
  type GalleryImage,
  type InsertGalleryImage
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Event methods
  getAllEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined>;
  
  // Community stats methods
  getCommunityStats(): Promise<CommunityStats | undefined>;
  updateCommunityStats(stats: InsertCommunityStats): Promise<CommunityStats>;
  
  // Gallery methods
  getAllGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImage(id: number): Promise<GalleryImage | undefined>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private events: Map<number, Event>;
  private communityStats?: CommunityStats;
  private galleryImages: Map<number, GalleryImage>;
  private currentUserId: number;
  private currentEventId: number;
  private currentGalleryId: number;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.galleryImages = new Map();
    this.currentUserId = 1;
    this.currentEventId = 1;
    this.currentGalleryId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Initialize community stats
    this.communityStats = {
      id: 1,
      totalMembers: 200,
      totalEvents: 9,
      instagramFollowers: 2500,
      linkedinConnections: 1800,
      activeChatMembers: 190,
      updatedAt: new Date(),
    };

    // Initialize authentic events (chronologically ordered)
    const sampleEvents: InsertEvent[] = [
      {
        title: "UX/UI Product Designer Pub Meetup V.1",
        description: "Our first official pub meetup bringing together UX/UI designers for networking and casual conversations about design trends and career insights.",
        date: new Date("2025-02-15"),
        participants: 15,
        isOnline: false,
        lumaUrl: null,
        status: "completed",
        imageUrl: "/attached_assets/20250628_1848_Fox's Cozy Workspace_simple_compose_01jyvtg4hff0ttts08jc2ghdpp_1755554373238.gif"
      },
      {
        title: "UX/UI Product Designer Pub Meetup V.2",
        description: "Second edition of our popular pub meetup series, featuring more designers and deeper discussions about product design challenges.",
        date: new Date("2025-03-22"),
        participants: 35,
        isOnline: false,
        lumaUrl: null,
        status: "completed",
        imageUrl: "/attached_assets/ChatGPT Image Jun 8, 2025, 02_17_38 PM_1755554354646.png"
      },
      {
        title: "London UX/UI Designers - Online Mini Social",
        description: "Virtual networking session for designers who couldn't make it to in-person events. Interactive discussions and breakout rooms for focused conversations.",
        date: new Date("2025-04-12"),
        participants: 35,
        isOnline: true,
        lumaUrl: null,
        status: "completed",
        imageUrl: "/attached_assets/IMG_6646_1755554212717.jpg"
      },
      {
        title: "London UX/UI Designer Picnic - Third Edition",
        description: "Outdoor design picnic bringing the community together in a relaxed park setting. Perfect for networking while enjoying good weather.",
        date: new Date("2025-05-18"),
        participants: 30,
        isOnline: false,
        lumaUrl: "https://lu.ma/tiw20xlj",
        status: "completed",
        imageUrl: "/attached_assets/cf9bb2ca-5ec7-4898-be85-5657ea462cde_1755554298693.avif"
      },
      {
        title: "London UX/UI Designer Picnic - Forth Edition",
        description: "Fourth edition of our popular outdoor picnic series. Join fellow designers for networking, games, and creative conversations in the park.",
        date: new Date("2025-06-14"),
        participants: 40,
        isOnline: false,
        lumaUrl: "https://lu.ma/du0m4rgp",
        status: "completed"
      },
      {
        title: "London UX/UI RoundTable Online",
        description: "Interactive online roundtable discussion focusing on current UX/UI challenges and industry best practices. Structured networking with experienced designers.",
        date: new Date("2025-06-28"),
        participants: 40,
        isOnline: true,
        lumaUrl: "https://lu.ma/tiw20xlj",
        status: "completed"
      },
      {
        title: "Vibe Coding for Designers",
        description: "Coding session specifically designed for designers who want to learn development skills. Collaborative environment focusing on design-to-code workflows.",
        date: new Date("2025-07-12"),
        participants: 85,
        isOnline: false,
        lumaUrl: "https://lu.ma/ngu7l1lq",
        status: "completed"
      },
      {
        title: "UX/UI Designer Picnic Meetup V.5 @Battersea Park",
        description: "Fifth edition of our designer picnic series, this time at the beautiful Battersea Park. Join us for networking, design discussions, and outdoor activities.",
        date: new Date("2025-08-16"),
        participants: 65,
        isOnline: false,
        lumaUrl: "https://lu.ma/otw38ocu",
        status: "completed",
        imageUrl: "/attached_assets/ChatGPT Image Jul 22, 2025, 11_33_01 PM_1755554252997.png"
      },
      {
        title: "AI × Design Playground",
        description: "Interactive workshop exploring the intersection of AI and design. Hands-on sessions, creative experiments, and collaborative projects combining artificial intelligence with design thinking.",
        date: new Date("2025-10-18"),
        participants: 80,
        isOnline: false,
        lumaUrl: "https://lu.ma/req7gpl0",
        status: "completed",
        imageUrl: "/attached_assets/ChatGPT Image Sep 27, 2025, 06_23_36 PM_1760891514894.png"
      }
    ];

    sampleEvents.forEach(event => {
      const id = this.currentEventId++;
      this.events.set(id, { 
        ...event, 
        id,
        status: event.status || "upcoming",
        participants: event.participants || 0,
        isOnline: event.isOnline || false,
        lumaUrl: event.lumaUrl || null,
        imageUrl: event.imageUrl || null
      });
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Event methods
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { 
      ...insertEvent, 
      id,
      status: insertEvent.status || "upcoming",
      participants: insertEvent.participants || 0,
      isOnline: insertEvent.isOnline || false,
      lumaUrl: insertEvent.lumaUrl || null,
      imageUrl: insertEvent.imageUrl || null
    };
    this.events.set(id, event);
    return event;
  }

  async updateEvent(id: number, eventUpdate: Partial<InsertEvent>): Promise<Event | undefined> {
    const existingEvent = this.events.get(id);
    if (!existingEvent) {
      return undefined;
    }
    
    const updatedEvent: Event = { ...existingEvent, ...eventUpdate };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }

  // Community stats methods
  async getCommunityStats(): Promise<CommunityStats | undefined> {
    return this.communityStats;
  }

  async updateCommunityStats(stats: InsertCommunityStats): Promise<CommunityStats> {
    this.communityStats = {
      id: 1,
      totalMembers: stats.totalMembers || 0,
      totalEvents: stats.totalEvents || 0,
      instagramFollowers: stats.instagramFollowers || 0,
      linkedinConnections: stats.linkedinConnections || 0,
      activeChatMembers: stats.activeChatMembers || 0,
      updatedAt: new Date(),
    };
    return this.communityStats;
  }

  // Gallery methods
  async getAllGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getGalleryImage(id: number): Promise<GalleryImage | undefined> {
    return this.galleryImages.get(id);
  }

  async createGalleryImage(insertImage: InsertGalleryImage): Promise<GalleryImage> {
    const id = this.currentGalleryId++;
    const image: GalleryImage = { 
      ...insertImage, 
      id, 
      eventId: insertImage.eventId || null,
      createdAt: new Date() 
    };
    this.galleryImages.set(id, image);
    return image;
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllEvents(): Promise<Event[]> {
    const allEvents = await db.select().from(events);
    return allEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  async getEvent(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event || undefined;
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const [event] = await db
      .insert(events)
      .values(insertEvent)
      .returning();
    return event;
  }

  async updateEvent(id: number, eventUpdate: Partial<InsertEvent>): Promise<Event | undefined> {
    const [event] = await db
      .update(events)
      .set(eventUpdate)
      .where(eq(events.id, id))
      .returning();
    return event || undefined;
  }

  async getCommunityStats(): Promise<CommunityStats | undefined> {
    const [stats] = await db.select().from(communityStats).limit(1);
    return stats || undefined;
  }

  async updateCommunityStats(stats: InsertCommunityStats): Promise<CommunityStats> {
    const [updatedStats] = await db
      .insert(communityStats)
      .values({ ...stats, updatedAt: new Date() })
      .onConflictDoUpdate({
        target: communityStats.id,
        set: { ...stats, updatedAt: new Date() }
      })
      .returning();
    return updatedStats;
  }

  async getAllGalleryImages(): Promise<GalleryImage[]> {
    const images = await db.select().from(galleryImages);
    return images.sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getGalleryImage(id: number): Promise<GalleryImage | undefined> {
    const [image] = await db.select().from(galleryImages).where(eq(galleryImages.id, id));
    return image || undefined;
  }

  async createGalleryImage(insertImage: InsertGalleryImage): Promise<GalleryImage> {
    const [image] = await db
      .insert(galleryImages)
      .values({ ...insertImage, createdAt: new Date() })
      .returning();
    return image;
  }
}

export const storage = new MemStorage();
