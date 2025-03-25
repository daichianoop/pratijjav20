"use client";
import CircularText from "../components/CircularText";
import { Great_Vibes } from "next/font/google";
import "../components/styles/bg-change.css"
import GradientText from "@/components/colorText";

const handwritingFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwriting",
});

export default function Home() {
  return (
    <div className="relative h-screen w-screen  overflow-hidden">
      <div
        className="absolute bg-elem inset-0"/>
      <div className="relative z-10 grid h-full w-full place-content-center">
        <section>
          <CircularText
            text="PRATIJJA*V21*LOADING*"
            onHover="speedUp"
            spinDuration={10}
            className="custom-class"
          />
          <div className={`text-5xl mt-10 text-white ${handwritingFont.variable} font-[var(--font-handwriting)]`}>
            <GradientText
              colors={["#ebce89", "#fff", "#ebce89", "#fff", "#ebce89"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class text-center"
            >
              Untill Next Year! Pratijja v21 Awaits.
            </GradientText>
          </div>
        </section>
      </div>
    </div>
  );
}
