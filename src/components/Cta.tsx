import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex w-full text-center justify-center items-center lg:w-auto">
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-primary py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="example@example.com"
              aria-label="Full name"
            />
            <button
              className="flex-shrink-0 bg-primary hover:bg-primary border-primary hover:border-primary text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Get your invite
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};
