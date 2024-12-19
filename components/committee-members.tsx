import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const committeeMembers = [
  { name: "John Doe", role: "President", image: "/member1.jpg" },
  { name: "Jane Smith", role: "Vice President", image: "/member2.jpg" },
  { name: "Mike Johnson", role: "Secretary", image: "/member3.jpg" },
  { name: "Emily Brown", role: "Treasurer", image: "/member4.jpg" },
]

export default function CommitteeMembers() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Organization Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

