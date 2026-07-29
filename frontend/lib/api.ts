const API_URL =
  process.env.NEXT_PUBLIC_API_URL;


export async function chatWithAssistant(
  message: string
) {

  if (!API_URL) {
    throw new Error(
      "API URL is not configured"
    );
  }


  const response = await fetch(
    `${API_URL}/api/ai/chat`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message,
      }),
    }
  );


  if (!response.ok) {

    throw new Error(
      "Failed to communicate with AI assistant"
    );

  }


  return response.json();

}