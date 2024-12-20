'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useRegistrationStore, tickets } from '@/lib/store'
import { QRCodeSVG } from 'qrcode.react'
import { motion } from "framer-motion"
import ConfirmationModal from '@/components/confirmation-modal'

export default function PaymentPage() {
  const router = useRouter()
  const { ticketQuantities, getTotal } = useRegistrationStore()
  const [upiLink, setUpiLink] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [name, setName] = useState('')
  const [userTransactionId, setUserTransactionId] = useState('')
  const [number, setNumber] = useState('')
  const [transactionScreenshot, setTransactionScreenshot] = useState<File | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { total, discount } = getTotal()
  const finalAmount = total - discount

  useEffect(() => {
    const generateUpiLink = async () => {
      const newTransactionId = Math.random().toString(36).substring(2, 15)
      setTransactionId(newTransactionId)
      const response = await fetch(`/api/generate-upi-link?amount=${finalAmount}&transactionId=${newTransactionId}`)
      const data = await response.json()
      if (data.success) {
        setUpiLink(data.upiLink)
      }
    }

    generateUpiLink()
  }, [finalAmount])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the transaction details to your backend
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    router.push('/')
  }

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow container mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">UPI Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-2xl font-bold mb-4">Total Amount: ₹{finalAmount}</p>
                {upiLink && (
                  <div className="flex justify-center">
                    <QRCodeSVG value={upiLink} size={256} />
                  </div>
                )}
                <p className="mt-4">Scan the QR code with any UPI app to make the payment</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Ticket Summary</h3>
                {tickets.map((ticket) => {
                  const quantity = ticketQuantities[ticket.id] || 0
                  if (quantity === 0) return null
                  return (
                    <div key={ticket.id} className="flex justify-between text-sm">
                      <span>{ticket.name} x {quantity}</span>
                      <span>₹{ticket.price * quantity}</span>
                    </div>
                  )
                })}
                <div className="flex justify-between font-semibold pt-2 border-t">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>₹{finalAmount}</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="transactionNumber"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                  {/* <Input
                    id="transactionScreenshot"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setTransactionScreenshot(e.target.files?.[0] || null)}
                    required
                  /> */}
                </div>
                <Button type="submit" className="w-full">
                  Submit Payment Details
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
      <ConfirmationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

