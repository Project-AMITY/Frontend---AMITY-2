import { Facebook, Github, Linkedin } from 'lucide-react';
import React from 'react'

const DeveloperCards = () => {
    const ORGANIZERS = [
  {
    id: 1,
    name: "Sesandu Ramath",
    role: "Frontend Developer",
    designation: " Member of MS club UWU  ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVjZCgH1qYnSc9ORnX-dpb1vA7OqUCWx4My17t__jKt8tJEx-ypoCF8ZLhA70Qs8IuioSiVgajLUzFYa-0ptyNN0VitNN2j1eh2lVfFB-bVjK6g_10Xsd4T5DM4YbfRX8HcXtbulIK746rEekpVOwQx7i4F6N7--N3QqNf3lJxaprh3_qhC2I2GfV-a0d5qJLIeaCBj0OxWgxd7hqfMAVyaWjTzXU2lsuarxzzexces1_AUgYTofj-X9lRzVj6-CGS-mq3qWV7k0Y",
    profileLink: "#",
    verified: true
  },
  {
    id: 2,
    name: "Kaantha Ekanayake",
    role: "Frontend Developer",
    designation: " Member of MS club UWU ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVjZCgH1qYnSc9ORnX-dpb1vA7OqUCWx4My17t__jKt8tJEx-ypoCF8ZLhA70Qs8IuioSiVgajLUzFYa-0ptyNN0VitNN2j1eh2lVfFB-bVjK6g_10Xsd4T5DM4YbfRX8HcXtbulIK746rEekpVOwQx7i4F6N7--N3QqNf3lJxaprh3_qhC2I2GfV-a0d5qJLIeaCBj0OxWgxd7hqfMAVyaWjTzXU2lsuarxzzexces1_AUgYTofj-X9lRzVj6-CGS-mq3qWV7k0Y",
    profileLink: "#",
    verified: true
  },
  {
    id: 3,
    name: "Thinuka",
    role: "Backend Developer",
    designation: " Member of MS club UWU ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkbvBEQp2Y-wIo0RnVqpRqvvm10P4q8igfIKXxOWFZpSplz7-fCcl3VixMK6hnb4DYvZkyeoVMYshrBxGbCLo35ZqxikdlSVuT7ple6cZdx1d8RC-lPO4Op9vEvhuwDdLcuwvJ9uUNYz_N51AGcmE7XsjIX-kc4Uyl__t6eI-hVUibiZVDN-3GJFA5aRpH_BKDHdCorlInzYyM32yBF3d2nUvq3y0Zd7QedY70DgH7ptf7V47AhAAvq2kGsXRl0FovVh3xOHG_aAo",
    profileLink: "#",
    verified: false
  },
  {
    id: 4,
    name: "Danuka Koshitha",
    role: "Backend Developer",
    designation: " Member of MS club UWU ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpvyhA2PqPpEJ84aKvVJeWhsWiRY57cO7qAtxo4yeDxbmL4O4qMmM1PCzPvjrLNiFsIZomtUqt2NJdVL1SQ1XbOyFnPDmVaoqUwHdtcYU8qo1jfpbhSCCJrKzg57xroSpGsgSJi-F1D9us3ly4F6TpfS48FjCPhfu54fQjB2LXlhKN6HHZtqfwjc1jdYUodPWJdIf2TZUv0Kyrxm-zSdbQLWVsBiugw0rxNeBt2-IATwr6Vs3LVd1WpOTRT_Z53URldXXcAttYKT4",
    profileLink: "#",
    verified: true
  }
];
  return (
    <div className='max-w-[1280px] mx-auto px-4 py-16 md:px-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {ORGANIZERS.map((organizer) => (
        <div 
          key={organizer.id} 
          className="group bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

          {/* Profile Image */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
              <img 
                alt={organizer.name} 
                className="w-full h-full rounded-full object-cover border-2 border-white dark:border-surface-dark" 
                src={organizer.image}
              />
            </div>
          </div>

          {/* Info Section */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
            {organizer.name}
          </h3>
          <p className="text-xs font-medium text-white bg-primary/20 px-3 py-1 rounded-full mb-3">
            {organizer.role}
          </p>
          
          <div className="w-full h-px bg-gray-100 dark:bg-gray-700/50 my-3"></div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug mb-4">
            {organizer.designation}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 ">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-1 rounded-full  hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-4 h-4 " />}
                </a>
              ))}
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default DeveloperCards