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

    const response = await fetch(basinEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to send message" },
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
