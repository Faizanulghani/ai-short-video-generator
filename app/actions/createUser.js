"use server";

import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function createUserIfNotExist(user) {
  const result = await db
    .select()
    .from(Users)
    .where(eq(Users.email, user.email));

  if (!result[0]) {
    await db.insert(Users).values({
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
      subscription: false,
    });
  }

  return true;
}
