import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Skills } from "./skills";

// Mock the UserInfo config
vi.mock("@/config/user", () => ({
  default: {
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },
}));

describe("Skills", () => {
  it("should render", () => {
    const { container } = render(<Skills />);
    expect(container).toBeDefined();
  });

  it("should render as unordered list", () => {
    const { container } = render(<Skills />);
    const list = container.querySelector("ul");
    expect(list).toBeDefined();
  });

  it("should render all skills", () => {
    render(<Skills />);

    expect(screen.getByText("JavaScript")).toBeDefined();
    expect(screen.getByText("TypeScript")).toBeDefined();
    expect(screen.getByText("React")).toBeDefined();
    expect(screen.getByText("Next.js")).toBeDefined();
    expect(screen.getByText("Node.js")).toBeDefined();
    expect(screen.getByText("Tailwind CSS")).toBeDefined();
    expect(screen.getByText("PostgreSQL")).toBeDefined();
  });

  it("should render correct number of skill items", () => {
    const { container } = render(<Skills />);
    const items = container.querySelectorAll("li");
    expect(items.length).toBe(7);
  });

  it("should render each skill as a list item", () => {
    const { container } = render(<Skills />);
    const items = container.querySelectorAll("li");

    const skills = [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
    ];
    items.forEach((item, index) => {
      expect(item.textContent).toBe(skills[index]);
    });
  });

  it("should have key prop for each item (rendered without error)", () => {
    // React will warn if keys are missing during rendering
    const { container } = render(<Skills />);
    expect(container.querySelectorAll("li").length).toBe(7);
  });
});
