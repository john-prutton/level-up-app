"use server"

import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { NewTask, insertTaskSchema, tasks, taskIdSchema, TaskId } from "@/lib/db/schema/tasks";

export const createTask = async (task: NewTask) => {
  const newTask = insertTaskSchema.parse(task);
  try {
    const [t] =  await db.insert(tasks).values(newTask).returning();
    return { task: t }
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    return { error: message };
  }
};

export const updateTask = async (id: TaskId, task: NewTask) => {
  const { id: taskId } = taskIdSchema.parse({ id });
  const newTask = insertTaskSchema.parse(task);
  try {
    const [c] = await db
     .update(tasks)
     .set(newTask)
     .where(eq(tasks.id, taskId!)).returning();
    return { task: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again"
    console.error(message);
    return { error: message };
  }
};

export const deleteTask = async (id: TaskId) => {
  const { id: taskId } = taskIdSchema.parse({ id });
  try {
    const [c] = await db.delete(tasks).where(eq(tasks.id, taskId!)).returning();
    return { task: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again"
    console.error(message);
    return { error: message };
  }
};