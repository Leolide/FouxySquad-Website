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
      totalEvents: 6,
      instagramFollowers: 2500,
      linkedinConnections: 1800,
      activeChatMembers: 190,
      updatedAt: new Date(),
    };

    // Initialize sample events
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
        title: "First Online Meetup",
        description: "Connecting virtually from around the world",
        date: new Date("2025-05-25"),
        participants: 30,
        isOnline: true,
        status: "completed"
      },
      {
        title: "June Meetups",
        description: "Two amazing events with record attendance",
        date: new Date("2025-06-15"),
        participants: 100,
        isOnline: false,
        status: "completed"
      },
      {
        title: "Vibe Coding for Designers",
        description: "Bridging design and development skills",
        date: new Date("2025-07-30"),
        participants: 0,
        isOnline: false,
        lumaUrl: "https://lu.ma/user/FouxySquad",
        status: "upcoming"
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
        lumaUrl: event.lumaUrl || null
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
      lumaUrl: insertEvent.lumaUrl || null
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

export const storage = new MemStorage();
