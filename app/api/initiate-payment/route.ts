import { NextResponse } from 'next/server'
import axios from 'axios'
import sha256 from 'sha256'
import { v4 as uuidv4 } from 'uuid'

const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID!
const PHONE_PE_HOST_URL = process.env.PHONEPE_HOST_URL!
const SALT_INDEX = 1
const SALT_KEY = process.env.PHONEPE_SALT_KEY!
const APP_BE_URL = process.env.APP_BE_URL!

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const amount = searchParams.get('amount')

  if (!amount) {
    return NextResponse.json({ success: false, message: 'Amount is required' }, { status: 400 })
  }

  const userId = "MUID" + uuidv4()
  const merchantTransactionId = uuidv4()

  const normalPayLoad = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: userId,
    amount: parseInt(amount) * 100,
    redirectUrl: `${APP_BE_URL}/api/validate-payment/${merchantTransactionId}`,
    redirectMode: "REDIRECT",
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  }

  const base64EncodedPayload = Buffer.from(JSON.stringify(normalPayLoad)).toString('base64')

  const string = base64EncodedPayload + "/pg/v1/pay" + SALT_KEY
  const sha256_val = sha256(string)
  const xVerifyChecksum = sha256_val + "###" + SALT_INDEX

  try {
    const response = await axios.post(
      `${PHONE_PE_HOST_URL}/pg/v1/pay`,
      { request: base64EncodedPayload },
      {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerifyChecksum,
          accept: "application/json",
        },
      }
    )

    return NextResponse.json({
      success: true,
      redirectUrl: response.data.data.instrumentResponse.redirectInfo.url
    })
  } catch (error) {
    console.error('Error initiating payment:', error)
    return NextResponse.json({ success: false, message: 'Failed to initiate payment' }, { status: 500 })
  }
}

