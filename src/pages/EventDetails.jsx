import React from 'react'
import Navbar from '../components/Navbar'
import EventFullDetail from '../components/EventFullDetails'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'; // Hook to grab URL parameters

const EventDetails = () => {

  // 1. Capture the 'id' from the URL (e.g., /event/3)
  const { id } = useParams();

  return (
    <div className="bg-background-light flex flex-col min-h-screen dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-grow pt-6 pb-20">
        <div className="pt-20 flex-grow">
            <EventFullDetail eventId={id}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default EventDetails