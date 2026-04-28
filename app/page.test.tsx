import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Home from "./page";

vi.mock("./components/action-bar/action-bar", () => ({
  ActionBar: ({ onExitClick }: { onExitClick?: () => void }) => (
    <button type="button" onClick={onExitClick}>
      Exit
    </button>
  ),
}));

vi.mock("@/components/explorer", () => ({
  Explorer: () => <aside>Explorer</aside>,
}));

vi.mock("@/components/main-page", () => ({
  MainPage: () => <section>Main Page</section>,
}));

vi.mock("@/components/terminal", () => ({
  Terminal: () => <section>Terminal</section>,
}));

describe("Home exit easter egg modal", () => {
  beforeEach(() => {
    vi.useFakeTimers();

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("closes when clicking outside the card", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: "Exit" }));
    expect(screen.getByRole("dialog", { name: "Exit blocked" })).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("exit-easter-egg-overlay"));

    expect(screen.queryByRole("dialog", { name: "Exit blocked" })).not.toBeInTheDocument();
  });

  it("closes automatically after countdown", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: "Exit" }));
    expect(screen.getByRole("dialog", { name: "Exit blocked" })).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2500);
    });

    expect(screen.queryByRole("dialog", { name: "Exit blocked" })).not.toBeInTheDocument();
  });
});
