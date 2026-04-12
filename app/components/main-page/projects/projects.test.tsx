import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Projects } from "./projects";

vi.mock("@/config/user", () => ({
  default: {
    projects: [
      {
        name: "Portfolio Site",
        description: "A VS Code-inspired personal portfolio built with Next.js.",
        link: "https://example.com/portfolio",
      },
      {
        name: "Design System",
        description: "Reusable UI primitives and tokens for consistent interfaces.",
      },
    ],
  },
}));

describe("Projects", () => {
  it("should render", () => {
    const { container } = render(<Projects />);
    expect(container).toBeDefined();
  });

  it("should render all projects", () => {
    render(<Projects />);

    expect(screen.getByText("Portfolio Site")).toBeDefined();
    expect(screen.getByText("Design System")).toBeDefined();
  });

  it("should render project descriptions", () => {
    render(<Projects />);

    expect(
      screen.getByText("A VS Code-inspired personal portfolio built with Next.js."),
    ).toBeDefined();
    expect(
      screen.getByText("Reusable UI primitives and tokens for consistent interfaces."),
    ).toBeDefined();
  });

  it("should render project links when available", () => {
    render(<Projects />);

    const link = screen.getByText("https://example.com/portfolio");

    expect(link).toHaveAttribute("href", "https://example.com/portfolio");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer noopener");
    expect(link).toHaveClass("link-inline");
    expect(link).toHaveClass("link-inline-small");
  });

  it("should render a single link for the project that has one", () => {
    const { container } = render(<Projects />);

    expect(container.querySelectorAll("article").length).toBe(2);
    expect(container.querySelectorAll("a").length).toBe(1);
  });
});
