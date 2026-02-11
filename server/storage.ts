import { 
  type Designer, 
  type InsertDesigner,
  type Product,
  type InsertProduct,
  type NewsletterSignup,
  type InsertNewsletter,
  type ContactInquiry,
  type InsertContact,
  designers,
  products,
  newsletterSignups,
  contactInquiries
} from "@shared/schema";
import { db } from "../db/index";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Designers
  getDesigners(): Promise<Designer[]>;
  getFeaturedDesigners(): Promise<Designer[]>;
  getDesigner(id: string): Promise<Designer | undefined>;
  createDesigner(designer: InsertDesigner): Promise<Designer>;

  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProductsByDesigner(designerId: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Newsletter
  createNewsletterSignup(email: InsertNewsletter): Promise<NewsletterSignup>;

  // Contact
  createContactInquiry(inquiry: InsertContact): Promise<ContactInquiry>;
}

export class DatabaseStorage implements IStorage {
  // Designers
  async getDesigners(): Promise<Designer[]> {
    return await db.select().from(designers);
  }

  async getFeaturedDesigners(): Promise<Designer[]> {
    return await db.select().from(designers).where(eq(designers.featured, 1));
  }

  async getDesigner(id: string): Promise<Designer | undefined> {
    const result = await db.select().from(designers).where(eq(designers.id, id));
    return result[0];
  }

  async createDesigner(designer: InsertDesigner): Promise<Designer> {
    const result = await db.insert(designers).values(designer).returning();
    return result[0];
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.category, category));
  }

  async getProductsByDesigner(designerId: string): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.designerId, designerId));
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const result = await db.select().from(products).where(eq(products.id, id));
    return result[0];
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const result = await db.insert(products).values(product).returning();
    return result[0];
  }

  // Newsletter
  async createNewsletterSignup(newsletter: InsertNewsletter): Promise<NewsletterSignup> {
    const result = await db.insert(newsletterSignups).values(newsletter).returning();
    return result[0];
  }

  // Contact
  async createContactInquiry(inquiry: InsertContact): Promise<ContactInquiry> {
    const result = await db.insert(contactInquiries).values(inquiry).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
