import { NextResponse, type NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
  const values = await req.json()

  console.log({ values })

  return NextResponse.json({ values })
}
