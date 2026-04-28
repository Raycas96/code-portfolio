import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ActionBar } from "./action-bar";
import { sections } from "@/app/contants";

const mockedUserInfo = vi.hoisted(() => ({
  cvName: "John Doe CV",
  cvDownloadUrl: "https://example.com/cv.pdf",
}));

vi.mock("@/config/user", () => ({
  default: mockedUserInfo,
}));

describe("ActionBar", () => {
  const mockOnExitClick = vi.fn();

  beforeEach(() => {
    mockedUserInfo.cvDownloadUrl = "https://example.com/cv.pdf";
    mockOnExitClick.mockClear();
  });

  it("should render", () => {
    const mockOnFileClick = vi.fn();
    const { container } = render(
      <ActionBar
        activeFile={sections[0]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );
    expect(container).toBeDefined();
  });

  it("should render navigation buttons", () => {
    const mockOnFileClick = vi.fn();
    render(
      <ActionBar
        activeFile={sections[0]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const backButton = screen.getByLabelText("Go back");
    const forwardButton = screen.getByLabelText("Go forward");

    expect(backButton).toBeDefined();
    expect(forwardButton).toBeDefined();
  });

  it("should call onFileClick when next button is clicked", async () => {
    const mockOnFileClick = vi.fn();
    const user = userEvent.setup();
    render(
      <ActionBar
        activeFile={sections[0]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const nextButton = screen.getByLabelText("Go forward");
    await user.click(nextButton);

    expect(mockOnFileClick).toHaveBeenCalledWith(sections[1]);
  });

  it("should call onFileClick when prev button is clicked", async () => {
    const mockOnFileClick = vi.fn();
    const user = userEvent.setup();
    render(
      <ActionBar
        activeFile={sections[1]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const prevButton = screen.getByLabelText("Go back");
    await user.click(prevButton);

    expect(mockOnFileClick).toHaveBeenCalledWith(sections[0]);
  });

  it("should cycle to first file when next is clicked on last file", async () => {
    const mockOnFileClick = vi.fn();
    const user = userEvent.setup();
    const lastFile = Object.values(sections)[Object.values(sections).length - 1];

    render(
      <ActionBar
        activeFile={lastFile}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const nextButton = screen.getByLabelText("Go forward");
    await user.click(nextButton);

    expect(mockOnFileClick).toHaveBeenCalledWith(sections[0]);
  });

  it("should cycle to last file when prev is clicked on first file", async () => {
    const mockOnFileClick = vi.fn();
    const user = userEvent.setup();
    const lastFile = Object.values(sections)[Object.values(sections).length - 1];

    render(
      <ActionBar
        activeFile={sections[0]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const prevButton = screen.getByLabelText("Go back");
    await user.click(prevButton);

    expect(mockOnFileClick).toHaveBeenCalledWith(lastFile);
  });

  it("should render window control dots", () => {
    const mockOnFileClick = vi.fn();
    const { container } = render(
      <ActionBar
        activeFile={sections[0]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const dots = container.querySelectorAll('[class*="dot"]');
    expect(dots.length).toBeGreaterThan(0);
  });

  it("should have header role for accessibility", () => {
    const mockOnFileClick = vi.fn();
    render(
      <ActionBar
        activeFile={sections[0]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const header = screen.getByLabelText("window controls");
    expect(header.tagName).toBe("HEADER");
  });

  it("should render download cv link when cv url is configured", () => {
    const mockOnFileClick = vi.fn();
    render(
      <ActionBar
        activeFile={sections[0]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const downloadLink = screen.getByRole("link", { name: "Download CV PDF" });
    expect(downloadLink).toHaveAttribute("href", "https://example.com/cv.pdf");
  });

  it("should not render download cv link when cv url is not configured", () => {
    mockedUserInfo.cvDownloadUrl = "";
    const mockOnFileClick = vi.fn();
    render(
      <ActionBar
        activeFile={sections[0]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const downloadLink = screen.queryByRole("link", { name: "Download CV PDF" });
    expect(downloadLink).not.toBeInTheDocument();
  });

  it("should call onExitClick when exit control is clicked", async () => {
    const mockOnFileClick = vi.fn();
    const user = userEvent.setup();
    render(
      <ActionBar
        activeFile={sections[0]}
        onFileClick={mockOnFileClick}
        onExitClick={mockOnExitClick}
      />,
    );

    const exitButton = screen.getByRole("button", { name: "Exit fake IDE" });
    await user.click(exitButton);

    expect(mockOnExitClick).toHaveBeenCalledTimes(1);
  });
});
