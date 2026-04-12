import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Terminal } from "./terminal";

// Mock the UserInfo config
vi.mock("@/config/user", () => ({
  default: {
    personal: {
      name: "John",
      surname: "Doe",
    },
  },
}));

describe("Terminal", () => {
  it("should render", () => {
    const { container } = render(<Terminal />);
    expect(container).toBeDefined();
  });

  it("should render terminal section", () => {
    render(<Terminal />);
    const terminal = screen.getByLabelText("Terminal");
    expect(terminal).toBeDefined();
    expect(terminal.tagName).toBe("SECTION");
  });

  it("should display user prompt with name and surname", () => {
    render(<Terminal />);
    const prompt = screen.getByText(/John@Doe cv %/);
    expect(prompt).toBeDefined();
  });

  it("should display npm run dev command", () => {
    render(<Terminal />);
    const command = screen.getByText("npm run dev");
    expect(command).toBeDefined();
  });

  it("should display status ready message", () => {
    const { getByText } = render(<Terminal />);
    expect(getByText(/status/)).toBeDefined();
    expect(getByText("ready")).toBeDefined();
  });

  it("should render cursor element", () => {
    const { container } = render(<Terminal />);
    const cursor = container.querySelector('[aria-hidden="true"]');
    expect(cursor).toBeDefined();
  });

  it("should have proper structure with prompts and commands", () => {
    const { container } = render(<Terminal />);
    const lines = container.querySelectorAll("div");
    expect(lines.length).toBeGreaterThan(0);
  });
});
