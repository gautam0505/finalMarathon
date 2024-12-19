'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus } from 'lucide-react'
import { useRegistrationStore, tickets } from '@/lib/store'

export default function TicketSelector() {
  const { ticketQuantities, setTicketQuantity } = useRegistrationStore()

  const handleQuantityChange = (ticketId: string, delta: number) => {
    const currentQuantity = ticketQuantities[ticketId] || 0
    const newQuantity = Math.max(0, currentQuantity + delta)
    setTicketQuantity(ticketId, newQuantity)
  }

  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <Card key={ticket.id}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{ticket.name}</h3>
                <p className="text-sm text-gray-500">{ticket.description}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Inclusive: {ticket.includes.join(' - ')}
                </p>
                <p className="text-xl font-bold mt-2">₹{ticket.price}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(ticket.id, -1)}
                  disabled={!ticketQuantities[ticket.id]}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">
                  {ticketQuantities[ticket.id] || 0}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(ticket.id, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

