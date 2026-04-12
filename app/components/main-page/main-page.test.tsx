import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MainPage } from "./main-page";

vi.mock("@/config/user", () => ({
  default: {
    personal: {
      name: "John",
      surname: "Doe",
      summary: "Senior full stack developer building polished web apps.",
    },
    projects: [
      {
        name: "Portfolio Site",
        description: "A VS Code-inspired personal portfolio built with Next.js.",
        link: "https://example.com/portfolio",
      },
    ],
  },
}));

describe("MainPage", () => {
  it("should render the projects section when PROJECTS.md is selected", () => {
    render(<MainPage selectedFile="PROJECTS.md" />);

    expect(screen.getByRole("heading", { name: "Projects" })).toBeDefined();
    expect(screen.getByText("Portfolio Site")).toBeDefined();
    expect(
      screen.getByText("A VS Code-inspired personal portfolio built with Next.js."),
    ).toBeDefined();
  });

  it("should render the profile header", () => {
    render(<MainPage selectedFile="PROJECTS.md" />);

    expect(screen.getByRole("heading", { name: "John Doe" })).toBeDefined();
    expect(
      screen.getByText("Senior full stack developer building polished web apps."),
    ).toBeDefined();
  });
});
