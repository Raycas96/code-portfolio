import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ActionBar } from "./action-bar";
import { sections } from "@/app/contants";

describe("ActionBar", () => {
  it("should render", () => {
    const mockOnFileClick = vi.fn();
    const { container } = render(
      <ActionBar activeFile={sections[0]} onFileClick={mockOnFileClick} />,
    );
    expect(container).toBeDefined();
  });

  it("should render navigation buttons", () => {
    const mockOnFileClick = vi.fn();
    render(<ActionBar activeFile={sections[0]} onFileClick={mockOnFileClick} />);

    const backButton = screen.getByLabelText("Go back");
    const forwardButton = screen.getByLabelText("Go forward");

    expect(backButton).toBeDefined();
    expect(forwardButton).toBeDefined();
  });

  it("should call onFileClick when next button is clicked", async () => {
    const mockOnFileClick = vi.fn();
    const user = userEvent.setup();
    render(<ActionBar activeFile={sections[0]} onFileClick={mockOnFileClick} />);

    const nextButton = screen.getByLabelText("Go forward");
    await user.click(nextButton);

    expect(mockOnFileClick).toHaveBeenCalledWith(sections[1]);
  });

  it("should call onFileClick when prev button is clicked", async () => {
    const mockOnFileClick = vi.fn();
    const user = userEvent.setup();
    render(<ActionBar activeFile={sections[1]} onFileClick={mockOnFileClick} />);

    const prevButton = screen.getByLabelText("Go back");
    await user.click(prevButton);

    expect(mockOnFileClick).toHaveBeenCalledWith(sections[0]);
  });

  it("should cycle to first file when next is clicked on last file", async () => {
    const mockOnFileClick = vi.fn();
    const user = userEvent.setup();
    const lastFile = Object.values(sections)[Object.values(sections).length - 1];

    render(<ActionBar activeFile={lastFile} onFileClick={mockOnFileClick} />);

    const nextButton = screen.getByLabelText("Go forward");
    await user.click(nextButton);

    expect(mockOnFileClick).toHaveBeenCalledWith(sections[0]);
  });

  it("should cycle to last file when prev is clicked on first file", async () => {
    const mockOnFileClick = vi.fn();
    const user = userEvent.setup();
    const lastFile = Object.values(sections)[Object.values(sections).length - 1];

    render(<ActionBar activeFile={sections[0]} onFileClick={mockOnFileClick} />);

    const prevButton = screen.getByLabelText("Go back");
    await user.click(prevButton);

    expect(mockOnFileClick).toHaveBeenCalledWith(lastFile);
  });

  it("should render window control dots", () => {
    const mockOnFileClick = vi.fn();
    const { container } = render(
      <ActionBar activeFile={sections[0]} onFileClick={mockOnFileClick} />,
    );

    const dots = container.querySelectorAll('[class*="dot"]');
    expect(dots.length).toBeGreaterThan(0);
  });

  it("should have header role for accessibility", () => {
    const mockOnFileClick = vi.fn();
    render(<ActionBar activeFile={sections[0]} onFileClick={mockOnFileClick} />);

    const header = screen.getByLabelText("window controls");
    expect(header.tagName).toBe("HEADER");
  });
});
