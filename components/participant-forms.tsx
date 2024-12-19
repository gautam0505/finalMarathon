'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRegistrationStore, tickets } from '@/lib/store'
import type { Participant } from '@/lib/types'

const TALUKA_OPTIONS = ['Bicholim', 'Bardez', 'Pernem', 'Sattari', 'Tiswadi']
const TSHIRT_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

export default function ParticipantForms() {
  const { ticketQuantities, participants, updateParticipant } = useRegistrationStore()
  const [activeForm, setActiveForm] = useState(0)

  const forms = Object.entries(ticketQuantities).flatMap(([ticketId, quantity]) =>
    Array(quantity).fill(ticketId)
  )

  useEffect(() => {
    if (activeForm >= forms.length) {
      setActiveForm(Math.max(0, forms.length - 1))
    }
  }, [forms.length, activeForm])

  const handleInputChange = (index: number, field: keyof Participant, value: string) => {
    updateParticipant(index, { [field]: value })
  }

  const copyDetails = () => {
    if (activeForm > 0) {
      const previousParticipant = participants[activeForm - 1]
      updateParticipant(activeForm, {
        ...previousParticipant,
        ticketId: forms[activeForm],
      })
    }
  }

  const ticket = tickets.find(t => t.id === forms[activeForm])

  if (forms.length === 0) {
    return <div>Please select tickets before filling out participant details.</div>
  }

  return (
    <div className="space-y-6 max-w-full">
      <div className="mb-4 overflow-x-auto">
        <div className="flex space-x-2 pb-2" style={{ minWidth: 'max-content' }}>
          {forms.map((_, index) => (
            <Button
              key={index}
              variant={index === activeForm ? "default" : "outline"}
              onClick={() => setActiveForm(index)}
              className="w-8 h-8 p-0 flex-shrink-0"
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">
              {ticket?.name} ({activeForm + 1} of {forms.length})
            </h3>
            {activeForm > 0 && (
              <Button variant="outline" onClick={copyDetails}>
                Copy Details
              </Button>
            )}
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name*</Label>
                <Input
                  id="name"
                  value={participants[activeForm]?.name || ''}
                  onChange={(e) => handleInputChange(activeForm, 'name', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address*</Label>
                <Input
                  id="email"
                  type="email"
                  value={participants[activeForm]?.email || ''}
                  onChange={(e) => handleInputChange(activeForm, 'email', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="taluka">Taluka*</Label>
                <Select
                  value={participants[activeForm]?.taluka || ''}
                  onValueChange={(value) => handleInputChange(activeForm, 'taluka', value)}
                >
                  <SelectTrigger id="taluka">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {TALUKA_OPTIONS.map((taluka) => (
                      <SelectItem key={taluka} value={taluka}>
                        {taluka}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tShirtSize">T-Shirt Size*</Label>
                <Select
                  value={participants[activeForm]?.tShirtSize || ''}
                  onValueChange={(value) => handleInputChange(activeForm, 'tShirtSize', value)}
                >
                  <SelectTrigger id="tShirtSize">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {TSHIRT_SIZES.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number*</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                  +91
                </span>
                <Input
                  id="phone"
                  type="tel"
                  className="rounded-l-none"
                  value={participants[activeForm]?.phone || ''}
                  onChange={(e) => handleInputChange(activeForm, 'phone', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation*</Label>
                <Input
                  id="occupation"
                  value={participants[activeForm]?.occupation || ''}
                  onChange={(e) => handleInputChange(activeForm, 'occupation', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age*</Label>
                <Input
                  id="age"
                  type="number"
                  value={participants[activeForm]?.age || ''}
                  onChange={(e) => handleInputChange(activeForm, 'age', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bloodGroup">Blood Group*</Label>
                <Select
                  value={participants[activeForm]?.bloodGroup || ''}
                  onValueChange={(value) => handleInputChange(activeForm, 'bloodGroup', value)}
                >
                  <SelectTrigger id="bloodGroup">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {BLOOD_GROUPS.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State*</Label>
                <Input
                  id="state"
                  value={participants[activeForm]?.state || ''}
                  onChange={(e) => handleInputChange(activeForm, 'state', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Emergency Contact Number*</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                  +91
                </span>
                <Input
                  id="emergencyContact"
                  type="tel"
                  className="rounded-l-none"
                  value={participants[activeForm]?.emergencyContact || ''}
                  onChange={(e) => handleInputChange(activeForm, 'emergencyContact', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

