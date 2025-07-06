export async function GET() {
  const apiDocumentation = {
    title: "Hello World API Documentation",
    description: "A simple API built with Next.js App Router",
    version: "1.0.0",
    baseUrl: "http://localhost:3000/api",
    endpoints: [
      {
        path: "/api/simple",
        method: "GET",
        description: "Returns a simple Hello World message",
        example: {
          response: {
            message: "Hello World"
          }
        }
      },
      {
        path: "/api/hello",
        methods: ["GET", "POST"],
        description: "Returns Hello World with timestamp and status",
        example: {
          response: {
            message: "Hello World",
            timestamp: "2025-07-06T02:11:04.769Z",
            status: "success"
          }
        }
      },
      {
        path: "/api/advanced",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Advanced API with parameter handling and different HTTP methods",
        examples: {
          GET: {
            url: "/api/advanced?name=Developer",
            response: {
              message: "Hello Developer",
              timestamp: "2025-07-06T02:11:31.956Z",
              method: "GET",
              status: "success"
            }
          },
          POST: {
            body: { name: "Next.js Developer", role: "Full Stack" },
            response: {
              message: "Hello Next.js Developer",
              timestamp: "2025-07-06T02:11:36.063Z",
              method: "POST",
              receivedData: { name: "Next.js Developer", role: "Full Stack" },
              status: "success"
            }
          }
        }
      }
    ],
    timestamp: new Date().toISOString()
  };

  return Response.json(apiDocumentation);
}
