import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { taskIdSchema, tasks, TaskId } from "@/lib/db/schema/tasks";

export const getTasks = async () => {
  const c = await db.select().from(tasks);
  return { tasks: c };
};

export const getTaskById = async (id: TaskId) => {
  const { id: taskId } = taskIdSchema.parse({ id });
  const [c] = await db.select().from(tasks).where(eq(tasks.id, taskId));

  return { task: c };
};