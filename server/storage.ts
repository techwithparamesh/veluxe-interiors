import { 
  users, 
  consultationBookings,
  contactMessages,
  type User, 
  type InsertUser,
  type ConsultationBooking,
  type InsertConsultationBooking,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createConsultationBooking(booking: InsertConsultationBooking): Promise<ConsultationBooking>;
  getAllConsultationBookings(): Promise<ConsultationBooking[]>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

// In-memory storage implementation for development
export class InMemoryStorage implements IStorage {
  private users: User[] = [];
  private consultationBookings: ConsultationBooking[] = [];
  private contactMessages: ContactMessage[] = [];
  private userIdCounter = 1;
  private bookingIdCounter = 1;
  private messageIdCounter = 1;

  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: (this.userIdCounter++).toString(),
      ...insertUser,
    };
    this.users.push(user);
    return user;
  }

  async createConsultationBooking(booking: InsertConsultationBooking): Promise<ConsultationBooking> {
    const created: ConsultationBooking = {
      id: (this.bookingIdCounter++).toString(),
      ...booking,
      notes: booking.notes ?? null,
      createdAt: new Date(),
    };
    this.consultationBookings.push(created);
    return created;
  }

  async getAllConsultationBookings(): Promise<ConsultationBooking[]> {
    return [...this.consultationBookings];
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const created: ContactMessage = {
      id: (this.messageIdCounter++).toString(),
      ...message,
      createdAt: new Date(),
    };
    this.contactMessages.push(created);
    return created;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return [...this.contactMessages];
  }
}

// Database storage implementation (commented out for now)
// Uncomment this and comment out InMemoryStorage when ready to use database
/*
import { db } from "./db";

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
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

  async createConsultationBooking(booking: InsertConsultationBooking): Promise<ConsultationBooking> {
    const [created] = await db
      .insert(consultationBookings)
      .values(booking)
      .returning();
    return created;
  }

  async getAllConsultationBookings(): Promise<ConsultationBooking[]> {
    return await db.select().from(consultationBookings);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [created] = await db
      .insert(contactMessages)
      .values(message)
      .returning();
    return created;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }
}
*/

// Use InMemoryStorage for development, switch to DatabaseStorage when ready
export const storage = new InMemoryStorage();
