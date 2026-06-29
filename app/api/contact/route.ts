export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch("https://usebasin.com/api/v1/6685e96859c4ebda9cd8921f398039c3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
