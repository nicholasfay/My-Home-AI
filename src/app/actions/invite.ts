"use server";

import { neon } from "@neondatabase/serverless";
import { validate } from "email-validator";

export async function createInvite(formData: FormData) {
  try {
    const email = formData.get("email")?.toString();

    // Validate the email format
    if (email && !validate(email)) {
      console.log(email)
      return { success: false, message: "Invalid email format." };
    }
    
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);

    // Insert the email into the Postgres database
    await sql("INSERT INTO marketingInvites (email) VALUES ($1)", [email]);

    // Handle success (e.g., show a success message)
    return { success: true };
  } catch (error: any) {
    // Check if the error is a duplicate email error
    console.log(error)
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
