export async function POST(request: Request) {
  try {
    const body = await request.json();
    const basinEndpoint = process.env.BASIN_FORM_ENDPOINT;

    if (!basinEndpoint) {
      console.error("BASIN_FORM_ENDPOINT is not configured");
      return Response.json(
        { error: "Form service is not configured" },
        { status: 500 }
      );
    }

    const formBody = new URLSearchParams();
    for (const [key, value] of Object.entries(body)) {
      if (value !== undefined && value !== null) {
        formBody.append(key, String(value));
      }
    }

    const response = await fetch(basinEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Accept: "application/json",
      },
      body: formBody.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return Response.json(
        { error: errorText || "Failed to send message" },
        { status: response.status }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
