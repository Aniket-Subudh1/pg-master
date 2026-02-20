import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('admin_token')?.value;
    const sessionCookie = req.cookies.get('admin_session')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT_SECRET env variable is not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Verify the JWT is valid and not expired
    try {
      jwt.verify(token, secret);
    } catch {
      // Token invalid or expired – clear cookies
      const response = NextResponse.json({ error: 'Session expired' }, { status: 401 });
      response.cookies.delete('admin_token');
      response.cookies.delete('admin_session');
      return response;
    }

    // Parse admin info from the non-httpOnly session cookie
    if (!sessionCookie) {
      return NextResponse.json({ error: 'Session data missing' }, { status: 401 });
    }

    let admin;
    try {
      admin = JSON.parse(sessionCookie);
    } catch {
      return NextResponse.json({ error: 'Invalid session data' }, { status: 401 });
    }

    return NextResponse.json({ admin }, { status: 200 });
  } catch (err) {
    console.error('[/api/auth/me] error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
