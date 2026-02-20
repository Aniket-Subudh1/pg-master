import { proxyToBackend } from '@/app/lib/backendFetch';
import { NextRequest } from 'next/server';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  return proxyToBackend(req, `/api/admin/business/approve/${id}`, 'PUT');
}
