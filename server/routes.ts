import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Continents routes
  app.get("/api/continents", async (req, res) => {
    try {
      const continents = await storage.getContinents();
      res.json(continents);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch continents" });
    }
  });

  app.get("/api/continents/:slug", async (req, res) => {
    try {
      const continent = await storage.getContinentBySlug(req.params.slug);
      if (!continent) {
        return res.status(404).json({ message: "Continent not found" });
      }
      res.json(continent);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch continent" });
    }
  });

  // Countries routes
  app.get("/api/continents/:continentSlug/countries", async (req, res) => {
    try {
      const continent = await storage.getContinentBySlug(req.params.continentSlug);
      if (!continent) {
        return res.status(404).json({ message: "Continent not found" });
      }
      const countries = await storage.getCountriesByContinent(continent.id);
      res.json(countries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch countries" });
    }
  });

  app.get("/api/countries/:slug", async (req, res) => {
    try {
      const country = await storage.getCountryBySlug(req.params.slug);
      if (!country) {
        return res.status(404).json({ message: "Country not found" });
      }
      res.json(country);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch country" });
    }
  });

  // Cities routes
  app.get("/api/countries/:countrySlug/cities", async (req, res) => {
    try {
      const country = await storage.getCountryBySlug(req.params.countrySlug);
      if (!country) {
        return res.status(404).json({ message: "Country not found" });
      }
      const cities = await storage.getCitiesByCountry(country.id);
      res.json(cities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch cities" });
    }
  });

  app.get("/api/cities/:slug", async (req, res) => {
    try {
      const city = await storage.getCityBySlug(req.params.slug);
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }
      res.json(city);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch city" });
    }
  });

  // Places routes
  app.get("/api/cities/:citySlug/places", async (req, res) => {
    try {
      const city = await storage.getCityBySlug(req.params.citySlug);
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }
      const places = await storage.getPlacesByCity(city.id);
      res.json(places);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch places" });
    }
  });

  app.get("/api/places/:slug", async (req, res) => {
    try {
      const place = await storage.getPlaceBySlug(req.params.slug);
      if (!place) {
        return res.status(404).json({ message: "Place not found" });
      }
      res.json(place);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch place" });
    }
  });

  // Adventures routes
  app.get("/api/adventures", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 3;
      const adventures = await storage.getRecentAdventures(limit);
      res.json(adventures);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch adventures" });
    }
  });

  app.get("/api/places/:placeSlug/adventures", async (req, res) => {
    try {
      const place = await storage.getPlaceBySlug(req.params.placeSlug);
      if (!place) {
        return res.status(404).json({ message: "Place not found" });
      }
      const adventures = await storage.getAdventuresByPlace(place.id);
      res.json(adventures);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch adventures" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
