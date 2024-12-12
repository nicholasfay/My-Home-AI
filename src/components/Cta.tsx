import React from "react";
import { Container } from "@/components/Container";
import { InviteInput } from "@/components/InviteInput";

export const Cta = () => {
  return (
    <Container>
      <div className="flex w-full text-center justify-center items-center lg:w-auto">
        <InviteInput inputText="Get your invite" />
      </div>
    </Container>
  );
};
