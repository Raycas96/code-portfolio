import { render } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import { Explorer } from "./explorer";
import styles from "./explorer.module.css";
import { sections } from "@/app/contants";
describe("Explorer", () => {
  it("should render", () => {
    const { container } = render(<Explorer activeFile={sections[0]} onFileClick={vitest.fn()} />);

    expect(container).toBeDefined();
  });

  it("should render the correct number of files", () => {
    const { getAllByRole } = render(
      <Explorer activeFile={sections[0]} onFileClick={vitest.fn()} />,
    );
    const items = getAllByRole("listitem");
    expect(items.length).toBe(sections.length);
  });

  it("should render the correct active file", () => {
    const activeFile = sections[1];
    const { getByText } = render(<Explorer activeFile={activeFile} onFileClick={vitest.fn()} />);
    const activeItem = getByText(activeFile);
    expect(activeItem).toHaveClass(styles.active);
  });
});
