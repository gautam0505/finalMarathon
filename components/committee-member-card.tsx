import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

interface CommitteeMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  info: string;
}

export function CommitteeMemberCard({ name, role, imageUrl, info }: CommitteeMemberProps) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="flex flex-col items-center p-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image
            src={imageUrl}
            alt={name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{role}</p>
        <p className="text-sm text-center">{info}</p>
      </CardContent>
    </Card>
  )
}

