import React from 'react'
import Navbar from '../components/Navbar'
import HomepageHero from '../components/HomepageHero'

const Homepage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white overscroll-none">
      <Navbar/>
      <HomepageHero/>
    </div>
  )
}

export default Homepage
