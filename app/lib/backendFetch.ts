import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function proxyToBackend(
  req: NextRequest,
  backendPath: string,
  method: string = 'GET',
  body?: unknown,
): Promise<NextResponse> {
  const token = req.cookies.get('admin_token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const res = await fetch(`${BACKEND_URL}${backendPath}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error('[backendFetch] error:', err);
    return NextResponse.json({ error: 'Backend unreachable' }, { status: 503 });
  }
}
