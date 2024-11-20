export function parseJSONSchema(json: string): any {
    try {
      return JSON.parse(json);
    } catch {
      return null;
    }
  }
  