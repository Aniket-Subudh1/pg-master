import { proxyToBackend } from '@/app/lib/backendFetch';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  return proxyToBackend(req, `/api/admin/properties/${id}`, 'GET');
}
