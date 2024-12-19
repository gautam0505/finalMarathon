import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Registration Confirmed!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-lg">
              Thank you for registering for ROTATHON 2025. Your payment has been successful and your participation has been confirmed.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Event Details:</h3>
              <p>Date: February 16, 2025</p>
              <p>Time: 5:00 AM IST</p>
              <p>Venue: Chhatrapati Shivaji Maharaj Maidan, Bicholim, Goa</p>
            </div>
            <p>
              Please bring a copy of your registration ID with you on the day of the event for quick check-in.
            </p>
            <div className="text-center">
              <Link href="/" passHref>
                <Button>Return to Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

