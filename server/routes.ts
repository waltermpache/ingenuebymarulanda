import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema, insertContactSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Get all designers
  app.get("/api/designers", async (req, res) => {
    try {
      const designers = await storage.getDesigners();
      res.json(designers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch designers" });
    }
  });

  // Get featured designers
  app.get("/api/designers/featured", async (req, res) => {
    try {
      const designers = await storage.getFeaturedDesigners();
      res.json(designers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured designers" });
    }
  });

  // Get single designer
  app.get("/api/designers/:id", async (req, res) => {
    try {
      const designer = await storage.getDesigner(req.params.id);
      if (!designer) {
        return res.status(404).json({ error: "Designer not found" });
      }
      res.json(designer);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch designer" });
    }
  });

  // Get all products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  // Get products by category
  app.get("/api/products/category/:category", async (req, res) => {
    try {
      const products = await storage.getProductsByCategory(req.params.category);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  // Get products by designer
  app.get("/api/products/designer/:designerId", async (req, res) => {
    try {
      const products = await storage.getProductsByDesigner(req.params.designerId);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  // Newsletter signup
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const signup = await storage.createNewsletterSignup(validatedData);
      res.status(201).json(signup);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ error: fromError(error).toString() });
      }
      if (error.code === "23505") {
        return res.status(409).json({ error: "Email already subscribed" });
      }
      res.status(500).json({ error: "Failed to create newsletter signup" });
    }
  });

  // Contact inquiry
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ error: fromError(error).toString() });
      }
      res.status(500).json({ error: "Failed to create contact inquiry" });
    }
  });

  return httpServer;
}
