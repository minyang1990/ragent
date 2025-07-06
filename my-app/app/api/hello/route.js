export async function GET() {
  return Response.json({ 
    message: "Hello World",
    timestamp: new Date().toISOString(),
    status: "success"
  });
}

export async function POST() {
  return Response.json({ 
    message: "Hello World",
    method: "POST",
    timestamp: new Date().toISOString(),
    status: "success"
  });
}
