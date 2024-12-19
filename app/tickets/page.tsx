import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '@/components/header'
import Footer from '@/components/footer'

const tickets = [
  {
    name: "3km {FUN RUN} -EARLY BIRD",
    description: "3 KM [ FUN RUN ]",
    price: 300,
    includes: ["T-Shirt", "Medal", "Certificate", "Goodie Bag", "BIB (Non-Timing)", "Food", "Hydration"],
  },
  {
    name: "5 KM RUN-EARLY BIRD",
    description: "5 KM RUN",
    price: 400,
    includes: ["T-Shirt", "Medal", "Certificate", "Goodie Bag", "BIB", "Food", "Hydration"],
  },
  {
    name: "10 KM RUN-EARLY BIRD",
    description: "10 KM RUN",
    price: 500,
    includes: ["T-Shirt", "Medal", "Certificate", "Goodie Bag", "BIB", "Food", "Hydration"],
  },
  {
    name: "21 KM RUN-EARLY BIRD",
    description: "21 KM RUN",
    price: 700,
    includes: ["T-Shirt", "Medal", "Certificate", "Goodie Bag", "BIB", "Food", "Hydration"],
  },
  {
    name: "5KM { SCHOOL RUN UNDER-18} -EARLY BIRD",
    description: "5 KM SCHOOL RUN (UNDER-18)",
    price: 400,
    includes: ["T-Shirt", "Medal", "Certificate", "Goodie Bag", "BIB", "Food", "Hydration"],
  },
]

export default function TicketsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Select Your Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{ticket.name}</CardTitle>
                <CardDescription>{ticket.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">₹{ticket.price}</p>
                <ul className="list-disc list-inside">
                  {ticket.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

