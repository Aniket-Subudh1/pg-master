import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const backendRes = await fetch(`${BACKEND_URL}/api/auth/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: data?.message || 'Invalid credentials' },
        { status: backendRes.status },
      );
    }

    const { access_token, admin } = data;

    if (!access_token || !admin) {
      return NextResponse.json({ error: 'Unexpected response from server' }, { status: 500 });
    }

    const adminWithMeta = {
      ...admin,
      lastLogin: new Date().toISOString(),
    };

    const response = NextResponse.json({ admin: adminWithMeta }, { status: 200 });


    response.cookies.set('admin_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 5, 
    });

    response.cookies.set('admin_session', JSON.stringify(adminWithMeta), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 5,
    });

    return response;
  } catch (err) {
    console.error('[/api/auth/login] error:', err);
    return NextResponse.json({ error: 'Network error. Please try again.' }, { status: 500 });
  }
}
