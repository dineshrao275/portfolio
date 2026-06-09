import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/portfolio";
import { ParticleBackground, CustomCursor, ScanLine, MusicToggle, Terminal } from "../components/effects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dinesh Rao — PHP Laravel Developer Portfolio" },
      { name: "description", content: "Cinematic portfolio of Dinesh Rao — PHP Laravel Developer in Indore, India. 3 years building scalable web apps, REST APIs, and franchise platforms." },
      { property: "og:title", content: "Dinesh Rao — PHP Laravel Developer" },
      { property: "og:description", content: "Cinematic portfolio of a Laravel developer crafting scalable backends and APIs." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ParticleBackground />
      <ScanLine />
      <CustomCursor />
      <Portfolio />
      <MusicToggle />
      <Terminal />
    </>
  );
}
