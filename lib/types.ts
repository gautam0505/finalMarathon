export interface Ticket {
  id: string;
  name: string;
  description: string;
  price: number;
  includes: string[];
}

export interface Participant {
  ticketId: string;
  name: string;
  email: string;
  taluka: string;
  tShirtSize: string;
  phone: string;
  occupation: string;
  age: string;
  bloodGroup: string;
  state: string;
  emergencyContact: string;
}

export interface TicketQuantity {
  [key: string]: number;
}

