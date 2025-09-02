import { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBookings = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookedServices, setBookedServices] = useState([]);

  const addBooking = (service) => {
    // Add a unique timestamp-based key to handle multiple bookings of the same service
    const newBooking = { ...service, bookingId: Date.now() };
    setBookedServices(prev => [...prev, newBooking]);
  };

  return (
    <BookingContext.Provider value={{ bookedServices, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
