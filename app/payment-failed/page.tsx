import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Payment Failed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-lg">
              We're sorry, but your payment could not be processed at this time.
            </p>
            <div className="text-center">
              <Link href="/payment" passHref>
                <Button>Try Again</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

