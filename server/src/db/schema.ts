import { pgTable, serial, varchar, integer, timestamp } from "drizzle-orm/pg-core"

export const links = pgTable("links", {
    id: serial("id").primaryKey(),
    originalUrl: varchar("original_url", { length: 500 }).notNull(),
    shortCode: varchar("short_code", { length: 20 }).notNull().unique(),
    clicks: integer("clicks").default(0),
    createdAt: timestamp("created_at").defaultNow()
})
