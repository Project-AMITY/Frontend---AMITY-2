import React from 'react'
import RegHero from '../components/RegHero'
import RegForm from '../components/RegForm'
import Navbar from '../components/Navbar'

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
        <Navbar />
        <div className="flex-1 flex flex-col lg:flex-row h-full">
            <div className="hidden lg:flex lg:w-1/2 relative bg-[#192233] items-center justify-centeroverflow-hidden">
            {/*Left Section*/}
            <RegHero />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-16 lg:p-32 bg-background-light dark:bg-background-dark">
                {/*Right Section*/}
                <RegForm />
            </div>
        </div>
    </div>
  )
}

export default Register