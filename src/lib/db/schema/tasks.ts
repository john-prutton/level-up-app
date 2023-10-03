import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  points: integer("points").notNull(),
  status: text("status", {
    enum:["INCOMPLETE","COMPLETE","IN_PROGRESS"]
  }).notNull(),
  completedAt: integer("completed_at", {mode:'timestamp_ms'})
});
// Schema for CRUD - used to validate API requests
export const insertTaskSchema = createInsertSchema(tasks);
export const selectTaskSchema = createSelectSchema(tasks);
export const taskIdSchema = selectTaskSchema.pick({ id: true });
export const updateTaskSchema = selectTaskSchema;

export type Task = z.infer<typeof selectTaskSchema>;
export type NewTask = z.infer<typeof insertTaskSchema>;
export type TaskId = z.infer<typeof taskIdSchema>["id"];