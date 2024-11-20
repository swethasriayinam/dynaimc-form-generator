export function validateJSON(json: string): void {
    try {
      JSON.parse(json);
    } catch {
      throw new Error("Invalid JSON");
    }
  }
  