import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { sendInvoiceEmail } from '@/lib/email'

export async function POST(request: Request) {
  const { 
    razorpay_order_id, 
    razorpay_payment_id, 
    razorpay_signature,
    invoiceEmail,
    invoiceName
  } = await request.json()

  const body = razorpay_order_id + "|" + razorpay_payment_id

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(body.toString())
    .digest('hex')

  const isAuthentic = expectedSignature === razorpay_signature

  if (isAuthentic) {
    // Payment is verified
    // Here you would typically update your database to mark the order as paid

    // Send invoice email
    await sendInvoiceEmail(invoiceEmail, invoiceName, razorpay_order_id, razorpay_payment_id)

    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false }, { status: 400 })
  }
}

