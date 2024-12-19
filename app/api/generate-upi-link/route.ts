import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const amount = searchParams.get('amount')
  const transactionId = searchParams.get('transactionId')

  if (!amount || !transactionId) {
    return NextResponse.json({ success: false, message: 'Amount and transactionId are required' }, { status: 400 })
  }

  // Replace with your actual UPI ID
  const upiId = 'gautamkumarjha0505@okhdfcbank'

  // Generate UPI payment link
  const upiLink = `upi://pay?pa=${upiId}&pn=MULGAO%20MARTHON%202025&am=${amount}&tr=${transactionId}&cu=INR`

  return NextResponse.json({ success: true, upiLink })
}

