'use client'

import { create } from 'zustand'
import { Participant, TicketQuantity } from './types'

interface RegistrationStore {
  ticketQuantities: TicketQuantity;
  participants: Participant[];
  setTicketQuantity: (ticketId: string, quantity: number) => void;
  setParticipants: (participants: Participant[]) => void;
  addParticipant: (participant: Participant) => void;
  updateParticipant: (index: number, participant: Partial<Participant>) => void;
  getTotal: () => { total: number; discount: number };
}

export const tickets = [
  {
    id: '3km',
    name: '3km',
    description: '3 KM RUN',
    price: 250,
    includes: ['T-Shirt', 'Medal', 'Certificate', 'Food'],
  },
  {
    id: '5km',
    name: '5 KM',
    description: '5 KM RUN',
    price: 250,
    includes: ['T-Shirt', 'Medal', 'Certificate', 'Food' ],
  },
  {
    id: '10km',
    name: '10 KM',
    description: '10 KM RUN',
    price: 250,
    includes: ['T-Shirt', 'Medal', 'Certificate', 'Food'],
  },
  
]

export const useRegistrationStore = create<RegistrationStore>((set, get) => ({
  ticketQuantities: {},
  participants: [],
  setTicketQuantity: (ticketId: string, quantity: number) => {
    set((state) => {
      const newTicketQuantities = {
        ...state.ticketQuantities,
        [ticketId]: quantity,
      }
      
      // Update participants array based on new ticket quantities
      const totalTickets = Object.values(newTicketQuantities).reduce((a, b) => a + b, 0)
      const newParticipants = Array(totalTickets).fill(null).map((_, index) => {
        return state.participants[index] || {
          ticketId: Object.entries(newTicketQuantities).find(([_, qty]) => qty > 0)?.[0] || '',
          name: '',
          email: '',
          taluka: '',
          tShirtSize: '',
          phone: '',
          occupation: '',
          age: '',
          bloodGroup: '',
          state: '',
          emergencyContact: '',
        }
      })

      return {
        ticketQuantities: newTicketQuantities,
        participants: newParticipants,
      }
    })
  },
  setParticipants: (participants) => set({ participants }),
  addParticipant: (participant) => 
    set((state) => ({ participants: [...state.participants, participant] })),
  updateParticipant: (index, participant) => 
    set((state) => ({
      participants: state.participants.map((p, i) => i === index ? { ...p, ...participant } : p)
    })),
  getTotal: () => {
    const { ticketQuantities, participants } = get()
    let total = 0
    
    // Calculate the total amount
    for (const [ticketId, quantity] of Object.entries(ticketQuantities)) {
      const ticket = tickets.find(t => t.id === ticketId)
      if (ticket) {
        total += ticket.price * quantity
      }
    }
    
    // Apply the discount based on the number of participants
    const participantCount = participants.length
    let discount = 0
    if (participantCount >= 5 && participantCount <= 19) {
      discount = total * 0.03 // 3% discount
      total *= 0.97 // 3% discount
    } else if (participantCount >= 20 && participantCount <= 49) {
      discount = total * 0.05 // 5% discount
      total *= 0.95 // 5% discount
    } else if (participantCount >= 50) {
      discount = total * 0.07 // 7% discount
      total *= 0.93 // 7% discount
    }
    
    return { total, discount }
  },
}))

