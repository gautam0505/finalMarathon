import { NextResponse } from 'next/server'
import axios from 'axios'
import sha256 from 'sha256'

const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID!
const PHONE_PE_HOST_URL = process.env.PHONEPE_HOST_URL!
const SALT_INDEX = 1
const SALT_KEY = process.env.PHONEPE_SALT_KEY!

export async function GET(
  request: Request,
  { params }: { params: { merchantTransactionId: string } }
) {
  const { merchantTransactionId } = params

  if (!merchantTransactionId) {
    return NextResponse.json({ success: false, message: 'Invalid transaction ID' }, { status: 400 })
  }

  const statusUrl = `${PHONE_PE_HOST_URL}/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`
  const string = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}${SALT_KEY}`
  const sha256_val = sha256(string)
  const xVerifyChecksum = sha256_val + "###" + SALT_INDEX

  try {
    const response = await axios.get(statusUrl, {
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": xVerifyChecksum,
        "X-MERCHANT-ID": merchantTransactionId,
        accept: "application/json",
      },
    })

    if (response.data && response.data.code === "PAYMENT_SUCCESS") {
      // Payment successful, redirect to success page
      return NextResponse.redirect(new URL('/confirmation', request.url))
    } else {
      // Payment failed or pending, redirect to failure page
      return NextResponse.redirect(new URL('/payment-failed', request.url))
    }
  } catch (error) {
    console.error('Error validating payment:', error)
    return NextResponse.redirect(new URL('/payment-failed', request.url))
  }
}

