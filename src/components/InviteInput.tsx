"use client";

import React, { useState } from "react";
import { createInvite } from "@/app/actions/invite";

type TInviteInputProps = {
  inputText: string;
};

export const InviteInput = ({ inputText }: TInviteInputProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    const response = await createInvite(formData);

    if (response.success) {
      setStatus("success");
      setMessage("Invite saved successfully");
    } else {
      setStatus("error");
    }

    // Revert styling after 3 seconds
    setTimeout(() => {
      setStatus(null);
      setMessage(null);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-sm ${
        status === "success"
          ? "border-green-500"
          : status === "error"
          ? "border-red-500"
          : "border-primary"
      }`}
    >
      <div className="flex items-center border-b py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none dark:text-white"
          type="text"
          name="email"
          placeholder="home@ai.com"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-primary hover:bg-primary border-primary hover:border-primary text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          {inputText}
        </button>
      </div>
      {message && (
        <p
          className={`mt-2 ${
            status === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};
