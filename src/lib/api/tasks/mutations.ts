"use server"

import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { NewTask, insertTaskSchema, tasks, taskIdSchema, TaskId } from "@/lib/db/schema/tasks";

export const createTask = async (task: NewTask) => {
  const {success:isTask} = insertTaskSchema.safeParse(task);
  
  if(!isTask){
    return{error: "Incorrect task type"}
  }

  try {
    const [t] =  await db.insert(tasks).values(task).returning();
    return { task: t }
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    return { error: message };
  }
};

export const updateTask = async (id: TaskId, task: NewTask) => {
  const { success: isTaskIdValid } = taskIdSchema.safeParse({ id });
  const { success: isNewTaskValid } = insertTaskSchema.safeParse(task);
  if(!isTaskIdValid || !isNewTaskValid){
    return {error:"Incorrect type of id or task"}
  }

  try {
    const [t] = await db
     .update(tasks)
     .set(task)
     .where(eq(tasks.id, id)).returning();
    return { task: t };
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