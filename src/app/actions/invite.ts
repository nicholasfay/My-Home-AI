"use server";

import { neon } from "@neondatabase/serverless";

export async function createInvite(formData: FormData) {
  try {
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const email = formData.get("email");

    // Insert the email into the Postgres database
    await sql("INSERT INTO marketingInvites (email) VALUES ($1)", [email]);

    // Handle success (e.g., show a success message)
    return { success: true };
  } catch (error: any) {
    // Check if the error is a duplicate email error
    if (error.code === "23505") {
      // PostgreSQL unique violation error code
      return { success: false, message: "This email is already registered." };
    } else {
      return {
        success: false,
        message: "An error occurred while saving the invite.",
      };
    }
  }
}
