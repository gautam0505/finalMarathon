import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9075289572"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-3 bottom-4 z-50"
    >
      <Button className="bg-green-500 hover:bg-green-600 rounded-full p-3">
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </a>
  )
}

