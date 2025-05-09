import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  // …your send logic…
  return NextResponse.json({ success: true });
}
