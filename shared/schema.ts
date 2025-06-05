import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const continents = pgTable("continents", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  countryCount: integer("country_count").notNull().default(0),
  cityCount: integer("city_count").notNull().default(0),
});

export const countries = pgTable("countries", {
  id: serial("id").primaryKey(),
  continentId: integer("continent_id").notNull(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  cityCount: integer("city_count").notNull().default(0),
});

export const cities = pgTable("cities", {
  id: serial("id").primaryKey(),
  countryId: integer("country_id").notNull(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  placeCount: integer("place_count").notNull().default(0),
});

export const places = pgTable("places", {
  id: serial("id").primaryKey(),
  cityId: integer("city_id").notNull(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  content: text("content").notNull(),
  videoUrl: text("video_url"),
  visitDate: timestamp("visit_date"),
});

export const adventures = pgTable("adventures", {
  id: serial("id").primaryKey(),
  placeId: integer("place_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  content: text("content").notNull(),
  publishedAt: timestamp("published_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContinentSchema = createInsertSchema(continents).omit({
  id: true,
});

export const insertCountrySchema = createInsertSchema(countries).omit({
  id: true,
});

export const insertCitySchema = createInsertSchema(cities).omit({
  id: true,
});

export const insertPlaceSchema = createInsertSchema(places).omit({
  id: true,
});

export const insertAdventureSchema = createInsertSchema(adventures).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContinent = z.infer<typeof insertContinentSchema>;
export type Continent = typeof continents.$inferSelect;

export type InsertCountry = z.infer<typeof insertCountrySchema>;
export type Country = typeof countries.$inferSelect;

export type InsertCity = z.infer<typeof insertCitySchema>;
export type City = typeof cities.$inferSelect;

export type InsertPlace = z.infer<typeof insertPlaceSchema>;
export type Place = typeof places.$inferSelect;

export type InsertAdventure = z.infer<typeof insertAdventureSchema>;
export type Adventure = typeof adventures.$inferSelect;
