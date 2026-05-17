import { describe, expect, it } from "vitest";
import { BREAKPOINTS, mediaQueries } from "./breakpoints";

describe("breakpoints", () => {
  it("exposes compact and mobile pixel values", () => {
    expect(BREAKPOINTS.compact).toBe(1024);
    expect(BREAKPOINTS.mobile).toBe(768);
  });

  it("builds matchMedia-compatible query strings", () => {
    expect(mediaQueries.compact).toBe("(max-width: 1024px)");
    expect(mediaQueries.mobile).toBe("(max-width: 768px)");
  });
});
