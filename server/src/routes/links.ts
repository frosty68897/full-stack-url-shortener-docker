import { Router, type Router as ExpressRouter } from "express";
import { eq, desc } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db } from "../db/index.js";
import { links } from "../db/schema.js";

const router: ExpressRouter = Router();

// POST /shorten — insert a new short URL
router.post("/shorten", async (req, res) => {
  const { url } = req.body as { url: string };

  if (!url) {
    res.status(400).json({ error: "url is required" });
    return;
  }

  const shortCode = nanoid(6);

  // insert
  const [link] = await db
    .insert(links)
    .values({ originalUrl: url, shortCode })
    .returning();

  if (!link) {
    res.status(500).json({ error: "Failed to create short URL" });
    return;
  }

  const baseUrl = process.env.BASE_URL || "http://localhost:4000";

  res.status(201).json({
    shortUrl: `${baseUrl}/${shortCode}`,
    shortCode,
    originalUrl: link.originalUrl,
  });
});

// GET /links — list 10 most recent links (select + limit + orderBy)
router.get("/links", async (req, res) => {
  const allLinks = await db
    .select()
    .from(links)
    .orderBy(desc(links.createdAt))
    .limit(10);

  res.json(allLinks);
});

// GET /stats/:shortCode — return click stats for a link (select + where)
router.get("/stats/:shortCode", async (req, res) => {
  const { shortCode } = req.params;

  const [link] = await db
    .select()
    .from(links)
    .where(eq(links.shortCode, shortCode));

  if (!link) {
    res.status(404).json({ error: "Short URL not found" });
    return;
  }

  res.json(link);
});

// DELETE /:shortCode — remove a short URL (delete + where)
router.delete("/:shortCode", async (req, res) => {
  const { shortCode } = req.params;

  const [deleted] = await db
    .delete(links)
    .where(eq(links.shortCode, shortCode))
    .returning();

  if (!deleted) {
    res.status(404).json({ error: "Short URL not found" });
    return;
  }

  res.json({ message: "Short URL deleted", shortCode });
});

export default router;
