'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Header from '@/components/header'
import Footer from '@/components/footer'
import CountdownTimer from '@/components/countdown-timer'
import { CommitteeMemberCard } from '@/components/committee-member-card'
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
    
      <main className="flex-grow">
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <Carousel
              className="w-full max-w-5xl mx-auto"
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                {[1, 2, 3].map((_, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-6">
                          <Image
                            src={`/carousel-${index + 1}.jpg`}
                            alt={`MULGAO MARTHON 2025 image ${index + 1}`}
                            width={1000}
                            height={562}
                            className="object-cover rounded-lg transition-opacity duration-500 ease-in-out"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-center text-white mt-10">
            <h1 className="text-5xl font-bold mb-4">MULGAO MARTHON</h1>
              <p className="text-2xl mb-6">BELIEVE.RUN.INSPIRE</p>
              <p className="text-xl mb-4">09 FEBRUARY 2025</p>
              <p className="text-xl mb-8">Kelbai Temple Mulgao Bicholim - Goa</p>
              <div className="bg-yellow-500 text-black px-4 py-2 rounded-md inline-block mb-4">
                <p className="font-bold">
                  Get 3% off for a group of 5-19 participants <br />
                  5% off for 20-49 participants <br />
                  7% off for 50 or more participants!
                </p>
            </div>
          </div>
          </div>
        </section>

        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About the Event</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              ROTATHON 2025 is the 7th edition of our Marathon organized by the ROTARACT CLUB OF BICHOLIM. 
              Join us on 16th February 2025 for Goa's largest Rotaract-organised marathon, attracting over 1000 participants across Goa, Maharashtra, and Karnataka.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['3 KM', '5 KM', '10 KM', '21 KM'].map((distance, index) => (
                <Card key={index} className="bg-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{distance}</h3>
                    <p className="mb-4">{index === 0 ? 'Fun Run' : 'Competitive Run'}</p>
                    <Link href="/register" passHref>
                      <Button className="w-full">Register</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

<section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About the Event</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              Mulgao Marathon is the inaugural running event organized by Believer Boys 56 of Mulgao. Join us on February 9, 2025, for a thrilling marathon experience, expecting over 1000 participants and spectators all around Goa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
              {['3 KM', '5 KM', '10 KM'].map((distance, index) => (
                <Card key={index} className="bg-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{distance}</h3>
                    <p className="mb-4">{index === 0 ? 'Fun Run' : 'Competitive Run'}</p>
                    <Link href="/register" passHref>
                      <Button className="w-full">Register</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Main Committee Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <CommitteeMemberCard
                name="Gautam"
                role="President"
                imageUrl="/gautam.jpeg"
                info="Dedicated leader with 5 years of Rotaract experience."
              />
              <CommitteeMemberCard
                name="Rahul"
                role="Chairperson"
                imageUrl="/rahul.jpeg"
                info="Event management expert, passionate about community service."
              />
              <CommitteeMemberCard
                name="Atharv"
                role="Treasurer"
                imageUrl="/atharv.jpeg"
                info="Financial wizard ensuring transparent and efficient operations."
              />
              <CommitteeMemberCard
              name="Anurag"
              role="Treasurer"
              imageUrl="/anurag.png"
              info="Financial wizard ensuring transparent and efficient operations."
            />
            </div>
          </div>
        </section> */}
      </main>
  
    </div>
  )
}

