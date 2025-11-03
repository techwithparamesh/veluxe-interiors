import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertConsultationBookingSchema, insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendConsultationEmail, sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Consultation booking endpoint
  app.post("/api/consultation-bookings", async (req, res) => {
    try {
      const validated = insertConsultationBookingSchema.parse(req.body);
      
      // Send email with the consultation booking details
      await sendConsultationEmail(validated);
      
      res.json({ 
        success: true, 
        message: "Consultation request sent successfully! We'll contact you soon." 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        console.error("Error processing consultation booking:", error);
        res.status(500).json({ error: "Failed to send consultation request. Please try again." });
      }
    }
  });

  // Contact message endpoint
  app.post("/api/contact-messages", async (req, res) => {
    try {
      const validated = insertContactMessageSchema.parse(req.body);
      
      // Send email with the contact message
      await sendContactEmail(validated);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully! We'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        console.error("Error processing contact message:", error);
        res.status(500).json({ error: "Failed to send message. Please try again." });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
