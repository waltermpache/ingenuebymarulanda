import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Newsletter signups
export const newsletterSignups = pgTable("newsletter_signups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertNewsletterSchema = createInsertSchema(newsletterSignups).omit({ 
  id: true, 
  createdAt: true 
});

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type NewsletterSignup = typeof newsletterSignups.$inferSelect;

// Designers
export const designers = pgTable("designers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  country: text("country").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
  featured: integer("featured").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertDesignerSchema = createInsertSchema(designers).omit({ 
  id: true, 
  createdAt: true 
});

export type InsertDesigner = z.infer<typeof insertDesignerSchema>;
export type Designer = typeof designers.$inferSelect;

// Products
export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  designerId: varchar("designer_id").notNull().references(() => designers.id),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ 
  id: true, 
  createdAt: true 
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Contact inquiries
export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  inquiryType: text("inquiry_type").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactInquiries).omit({ 
  id: true, 
  createdAt: true 
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
