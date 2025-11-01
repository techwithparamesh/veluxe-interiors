import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationBookingSchema, insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Consultation booking endpoint
  app.post("/api/consultation-bookings", async (req, res) => {
    try {
      const validated = insertConsultationBookingSchema.parse(req.body);
      const booking = await storage.createConsultationBooking(validated);
      res.json(booking);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        console.error("Error creating consultation booking:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get all consultation bookings
  app.get("/api/consultation-bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllConsultationBookings();
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching consultation bookings:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Contact message endpoint
  app.post("/api/contact-messages", async (req, res) => {
    try {
      const validated = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validated);
      res.json(message);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get all contact messages
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
