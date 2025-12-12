type ApiResponse =
  | { success: true; data: string }
  | { success: false; error: string };

async function fetchData(id: number): Promise<ApiResponse> {
  const res = await fetch(`/api/data/${id}`);

  if (!res.ok) {
    return {
      success: false,
      error: `HTTP error: ${res.status} ${res.statusText}`,
    };
  }

  const json = await res.json();

  // Validate the response structure
  if (json && typeof json === "object") {
    if (json.success === true && typeof json.data === "string") {
      return { success: true, data: json.data };
    } else if (json.success === false && typeof json.error === "string") {
      return { success: false, error: json.error };
    }
  }

  // Default error for malformed response
  return {
    success: false,
    error: "Invalid response format from server",
  };
}

// Example usage
async function processData(id: number) {
  const result = await fetchData(id);

  if (result.success) {
    console.log("Data received:", result.data);
    // TypeScript knows result.data exists here
  } else {
    console.error("Error:", result.error);
    // TypeScript knows result.error exists here
  }
}
