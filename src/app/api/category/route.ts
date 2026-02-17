export function GET() {
  return new Response(JSON.stringify({ result: `You searched for: ${query}` }), {
    headers: { "Content-Type": "application/json" },
  });
}
