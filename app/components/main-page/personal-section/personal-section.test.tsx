import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { PersonalSection } from "./personal-section";

// Mock the UserInfo config
vi.mock("@/config/user", () => ({
  default: {
    personal: {
      fullName: "John Doe",
      role: "Full Stack Developer",
      location: "San Francisco, CA",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
}));

describe("PersonalSection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render", () => {
    const { container } = render(<PersonalSection />);
    expect(container).toBeDefined();
  });

  it("should render personal information", () => {
    render(<PersonalSection />);

    expect(screen.getByText("John Doe")).toBeDefined();
    expect(screen.getByText("Full Stack Developer")).toBeDefined();
    expect(screen.getByText("San Francisco, CA")).toBeDefined();
  });

  it("should render contact links with correct href attributes", () => {
    render(<PersonalSection />);

    const emailLink = screen.getByText("john@example.com");
    const phoneLink = screen.getByText("+1 (555) 123-4567");
    const linkedinLink = screen.getByText("https://linkedin.com/in/johndoe");

    expect(emailLink).toHaveAttribute("href", "mailto:john@example.com");
    expect(phoneLink).toHaveAttribute("href", "tel:+1(555)123-4567");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/johndoe");
  });

  it("should apply link-inline class to all contact links", () => {
    render(<PersonalSection />);

    const emailLink = screen.getByText("john@example.com");
    const phoneLink = screen.getByText("+1 (555) 123-4567");
    const linkedinLink = screen.getByText("https://linkedin.com/in/johndoe");

    expect(emailLink).toHaveClass("link-inline");
    expect(phoneLink).toHaveClass("link-inline");
    expect(linkedinLink).toHaveClass("link-inline");
  });

  it("should render all form labels", () => {
    render(<PersonalSection />);

    expect(screen.getByText("Name")).toBeDefined();
    expect(screen.getByText("Role")).toBeDefined();
    expect(screen.getByText("Location")).toBeDefined();
    expect(screen.getByText("Email")).toBeDefined();
    expect(screen.getByText("Phone")).toBeDefined();
    expect(screen.getByText("LinkedIn")).toBeDefined();
  });

  it("should render as unordered list", () => {
    const { container } = render(<PersonalSection />);

    const list = container.querySelector("ul");
    expect(list).toBeDefined();

    const listItems = container.querySelectorAll("li");
    expect(listItems.length).toBe(6);
  });

  it("should open LinkedIn link in new tab", () => {
    render(<PersonalSection />);

    const linkedinLink = screen.getByText("https://linkedin.com/in/johndoe");

    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("should not open email and phone links in new tab", () => {
    render(<PersonalSection />);

    const emailLink = screen.getByText("john@example.com");
    const phoneLink = screen.getByText("+1 (555) 123-4567");

    expect(emailLink).not.toHaveAttribute("target");
    expect(phoneLink).not.toHaveAttribute("target");
  });
});
