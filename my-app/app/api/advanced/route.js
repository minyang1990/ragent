// GET请求处理
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';
  
  return Response.json({
    message: `Hello ${name}`,
    timestamp: new Date().toISOString(),
    method: 'GET',
    status: 'success'
  });
}

// POST请求处理
export async function POST(request) {
  try {
    const body = await request.json();
    const name = body.name || 'World';
    
    return Response.json({
      message: `Hello ${name}`,
      timestamp: new Date().toISOString(),
      method: 'POST',
      receivedData: body,
      status: 'success'
    });
  } catch (error) {
    return Response.json(
      {
        error: 'Invalid JSON',
        message: 'Please provide valid JSON data',
        status: 'error'
      },
      { status: 400 }
    );
  }
}

// PUT请求处理
export async function PUT(request) {
  try {
    const body = await request.json();
    
    return Response.json({
      message: 'Hello World - Updated',
      timestamp: new Date().toISOString(),
      method: 'PUT',
      updatedData: body,
      status: 'success'
    });
  } catch (error) {
    return Response.json(
      {
        error: 'Invalid JSON',
        message: 'Please provide valid JSON data',
        status: 'error'
      },
      { status: 400 }
    );
  }
}

// DELETE请求处理
export async function DELETE() {
  return Response.json({
    message: 'Hello World - Deleted',
    timestamp: new Date().toISOString(),
    method: 'DELETE',
    status: 'success'
  });
}
