'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'  // Import usePathname
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TicketSelector from '@/components/ticket-selector'
import ParticipantForms from '@/components/participant-forms'
import TicketSummary from '@/components/ticket-summary'
import { useRegistrationStore } from '@/lib/store'
import { motion, AnimatePresence } from "framer-motion"

export default function RegisterPage() {
  const [step, setStep] = useState<'tickets' | 'details'>('tickets')
  const router = useRouter()
  const pathname = usePathname()  // Get the current pathname
  const { ticketQuantities, participants } = useRegistrationStore()

  const totalTickets = Object.values(ticketQuantities).reduce((a, b) => a + b, 0)

  const handleProceed = () => {
    if (step === 'tickets') {
      if (totalTickets > 0) {
        setStep('details')
      }
    } else {
      if (participants.length === totalTickets && participants.every(p => p.name && p.email)) {
        console.log('Participants data:', participants) // For debugging
        router.push('/payment')
      } else {
        alert('Please fill in all required fields for all participants.')
      }
    }
  }

  // Check if we're on the '/register' page
  const isOnRegisterPage = pathname === '/register'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-8">
                  {/* Conditionally render the Home Back button only on the Register Page and when step is 'tickets' */}
                  {isOnRegisterPage && step === 'tickets' && (
                    <Button
                      variant="ghost"
                      onClick={() => router.push('/')}
                    >
                      ← Home
                    </Button>
                  )}

                  {/* Conditionally render the back button only when we are on the 'details' step */}
                  {step === 'details' && (
                    <Button
                      variant="ghost"
                      onClick={() => setStep('tickets')}
                    >
                      ← Back
                    </Button>
                  )}

                  <h1 className="text-xl sm:text-2xl font-bold ml-4">MULGAO MARTHON 2025</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    {step === 'tickets' ? (
                      <TicketSelector />
                    ) : (
                      <ParticipantForms />
                    )}
                  </div>
                  <div className="w-full lg:w-80">
                    <TicketSummary />
                    <Button 
                      className="w-full mt-4" 
                      onClick={handleProceed}
                      disabled={
                        (step === 'tickets' && totalTickets === 0) ||
                        (step === 'details' && participants.length !== totalTickets)
                      }
                    >
                      {step === 'tickets' ? 'Proceed to Details' : 'Proceed to Payment'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
