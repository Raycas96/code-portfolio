import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Experiences } from "./experiences";

// Mock the UserInfo config
vi.mock("@/config/user", () => ({
  default: {
    experiences: [
      {
        id: "1",
        role: "Senior Developer",
        company: "Tech Corp",
        period: "2022-Present",
        location: "San Francisco, CA",
        highlights: [
          "Led frontend team of 5 developers",
          "Improved performance by 40%",
          "Mentored junior developers",
        ],
      },
      {
        id: "2",
        role: "Full Stack Developer",
        company: "StartUp Inc",
        period: "2020-2022",
        location: "New York, NY",
        highlights: [
          "Built REST API with Node.js",
          "Implemented real-time features",
          "Managed database migrations",
        ],
      },
    ],
  },
}));

describe("Experiences", () => {
  it("should render", () => {
    const { container } = render(<Experiences />);
    expect(container).toBeDefined();
  });

  it("should render all experiences", () => {
    render(<Experiences />);

    expect(screen.getByText(/Senior Developer - Tech Corp/)).toBeDefined();
    expect(screen.getByText(/Full Stack Developer - StartUp Inc/)).toBeDefined();
  });

  it("should render correct number of experience articles", () => {
    const { container } = render(<Experiences />);
    const articles = container.querySelectorAll("article");
    expect(articles.length).toBe(2);
  });

  it("should display role and company for each experience", () => {
    render(<Experiences />);

    expect(screen.getByText("Senior Developer - Tech Corp")).toBeDefined();
    expect(screen.getByText("Full Stack Developer - StartUp Inc")).toBeDefined();
  });

  it("should display period and location for each experience", () => {
    render(<Experiences />);

    expect(screen.getByText("2022-Present - San Francisco, CA")).toBeDefined();
    expect(screen.getByText("2020-2022 - New York, NY")).toBeDefined();
  });

  it("should render all highlights for each experience", () => {
    render(<Experiences />);

    // First experience highlights
    expect(screen.getByText("Led frontend team of 5 developers")).toBeDefined();
    expect(screen.getByText("Improved performance by 40%")).toBeDefined();
    expect(screen.getByText("Mentored junior developers")).toBeDefined();

    // Second experience highlights
    expect(screen.getByText("Built REST API with Node.js")).toBeDefined();
    expect(screen.getByText("Implemented real-time features")).toBeDefined();
    expect(screen.getByText("Managed database migrations")).toBeDefined();
  });

  it("should render highlights as bullet list items", () => {
    const { container } = render(<Experiences />);
    const bulletLists = container.querySelectorAll("ul");
    const allListItems = container.querySelectorAll("ul li");

    expect(bulletLists.length).toBeGreaterThan(0);
    expect(allListItems.length).toBe(6); // 3 + 3 highlights
  });

  it("should have unique key for each experience (rendered without error)", () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      const { container } = render(<Experiences />);
      expect(container.querySelectorAll("article").length).toBe(2);
      expect(consoleErrorSpy).not.toHaveBeenCalled();
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    } finally {
      consoleErrorSpy.mockRestore();
      consoleWarnSpy.mockRestore();
    }
  });
});
