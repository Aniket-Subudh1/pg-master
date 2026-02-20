import { proxyToBackend } from '@/app/lib/backendFetch';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  return proxyToBackend(req, '/api/admin/business/pending', 'GET');
}
