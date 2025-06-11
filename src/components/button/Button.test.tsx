import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { describe, expect, it, vi } from "vitest";

describe("Button", () => {
  it("renders with text", () => {
    render(<Button onClick={() => console.log("toto")}>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls console.log when clicked", () => {
    const consoleSpy = vi.spyOn(console, "log");

    render(<Button onClick={() => console.log("toto")}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));

    expect(consoleSpy).toHaveBeenCalledWith("toto");

    consoleSpy.mockRestore(); // clean up
  });
});
