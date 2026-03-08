import express from "express";
import linksRouter from "./routes/links.js";
import cors from "cors";
import { db } from "./db/index.js";
import { links } from "./db/schema.js";
import { eq } from "drizzle-orm";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
    ],
    credentials: true,
  }),
);

app.get("/api/url", (req, res) => {
  res.send("URL Shortener API");
});

app.use("/api/url", linksRouter);

// Root level redirection for short URLs
app.get("/:shortCode", async (req, res) => {
  const { shortCode } = req.params;

  const [link] = await db
    .select()
    .from(links)
    .where(eq(links.shortCode, shortCode));

  if (!link) {
    res.status(404).send("Short URL not found");
    return;
  }

  // Update click count
  await db
    .update(links)
    .set({ clicks: (link.clicks ?? 0) + 1 })
    .where(eq(links.shortCode, shortCode));

  res.redirect(link.originalUrl);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
