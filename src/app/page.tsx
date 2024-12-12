import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo, benefitThree } from "@/data/benefits";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Amazing Benefits"
        title="Why My Home AI?"
      ></SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <Cta />
    </Container>
  );
}
