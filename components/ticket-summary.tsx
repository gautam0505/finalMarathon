'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRegistrationStore, tickets } from '@/lib/store'

export default function TicketSummary() {
  const { ticketQuantities, getTotal } = useRegistrationStore()
  const { total, discount } = getTotal()

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Ticket Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tickets.map((ticket) => {
          const quantity = ticketQuantities[ticket.id] || 0
          if (quantity === 0) return null

          return (
            <div key={ticket.id} className="flex justify-between text-sm">
              <span className="break-words max-w-[70%]">
                {ticket.name} x {quantity}
              </span>
              <span>₹{ticket.price * quantity}</span>
            </div>
          )
        })}

        <div className="pt-4 border-t">
          <div className="flex justify-between font-semibold">
            <span>Sub Total</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
        </div>

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{total - discount}</span>
        </div>

        <p className="text-sm text-orange-600">
          Processing Fee will be added on selecting payment method*
        </p>
      </CardContent>
    </Card>
  )
}

