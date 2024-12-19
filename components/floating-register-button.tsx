'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingRegisterButton() {
  const [isVisible, setIsVisible] = useState(true)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsVisible((prev) => !prev)
  //   }, 4000)

  //   return () => clearInterval(interval)
  // }, [])

  

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
          initial={{ x: -100 }}
          animate={{ x: 23 }}
          exit={{ x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/register" passHref>
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600 rotate-90 origin-left">
              Register Now
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

