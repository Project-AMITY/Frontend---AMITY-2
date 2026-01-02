import React from 'react'
import Navbar from '../components/Navbar'
import OrgProfileContent from '../components/OrgProfileContent'

const OrgProfile = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Navbar/>
      <OrgProfileContent/>
    </div>
  )
}

export default OrgProfile
