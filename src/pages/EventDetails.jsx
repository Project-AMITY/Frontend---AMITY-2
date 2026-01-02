import React from 'react'
import Navbar from '../components/Navbar'
import EventFullDetails from '../components/EventFullDetails'
import Footer from '../components/Footer'


const EventDetails = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Navbar/>
      <main className="flex-grow pt-6 pb-20">
        <div className="pt-20">
            <EventFullDetails/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default EventDetails