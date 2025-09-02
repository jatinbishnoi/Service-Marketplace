import { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBookings = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookedServices, setBookedServices] = useState([]);

  const addBooking = (service) => {
    // Use a truly unique id for each booking
    const newBooking = { ...service, bookingId: crypto.randomUUID ? crypto.randomUUID() : Date.now() + Math.random() };
    setBookedServices(prev => [...prev, newBooking]);
  };

  const removeBooking = (bookingId) => {
    setBookedServices(prev => prev.filter(service => service.bookingId !== bookingId));
  };

  return (
    <BookingContext.Provider value={{ bookedServices, addBooking, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
