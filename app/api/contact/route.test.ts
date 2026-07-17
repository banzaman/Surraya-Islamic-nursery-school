import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";

describe("contact route", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv, BASIN_FORM_ENDPOINT: "https://example.com/form" };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.unstubAllGlobals();
  });

  it("submits contact data to Basin as form-encoded fields", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal("fetch", fetchMock);

    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Ada",
        email: "ada@example.com",
        subject: "Admissions",
        message: "Hello",
      }),
    });

    await POST(request);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.com/form",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        }),
        body: expect.any(String),
      })
    );
  });
});
