import React from 'react'

const OrganiserCard = () => {
    const ORGANIZERS = [
  {
    id: 1,
    name: "Sesandu Ramath",
    university: "Uva Wellassa University",
    designation: "President of Media club of Uva Wellassa University of Sri Lanka",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtKXMqyQlenbpQfrG5WeBVC0D8flUgr96bSCl2Y8guk38BNMQRS58dKxrcUl6NVaiI3a_21grjDQ-ofv2eR94ZysS1fk8uXgqN4ec0DK82t9Ba4ux0IHo1ISOD6kVfCRtlCfiavMBJUdGDNQUN__3FPzVwhapJBUlsyDCgKbJyPyl4yQZYFOPRuZ9YvFJVC9eorbtnKW0IGB9GCQowWs1pYXKklUikOXAFKqgxKv4bxp6nydE9bmAr8NlnwkVMNing09Z3nA8sbWo",
    profileLink: "#",
    verified: true
  },
  {
    id: 2,
    name: "Kavindi Perera",
    university: "University of Colombo",
    designation: "Secretary of IEEE Student Branch, Faculty of Science",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVjZCgH1qYnSc9ORnX-dpb1vA7OqUCWx4My17t__jKt8tJEx-ypoCF8ZLhA70Qs8IuioSiVgajLUzFYa-0ptyNN0VitNN2j1eh2lVfFB-bVjK6g_10Xsd4T5DM4YbfRX8HcXtbulIK746rEekpVOwQx7i4F6N7--N3QqNf3lJxaprh3_qhC2I2GfV-a0d5qJLIeaCBj0OxWgxd7hqfMAVyaWjTzXU2lsuarxzzexces1_AUgYTofj-X9lRzVj6-CGS-mq3qWV7k0Y",
    profileLink: "#",
    verified: true
  },
  {
    id: 3,
    name: "Dimuthu Fernando",
    university: "University of Moratuwa",
    designation: "Chairperson of Rotaract Club of University of Moratuwa",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkbvBEQp2Y-wIo0RnVqpRqvvm10P4q8igfIKXxOWFZpSplz7-fCcl3VixMK6hnb4DYvZkyeoVMYshrBxGbCLo35ZqxikdlSVuT7ple6cZdx1d8RC-lPO4Op9vEvhuwDdLcuwvJ9uUNYz_N51AGcmE7XsjIX-kc4Uyl__t6eI-hVUibiZVDN-3GJFA5aRpH_BKDHdCorlInzYyM32yBF3d2nUvq3y0Zd7QedY70DgH7ptf7V47AhAAvq2kGsXRl0FovVh3xOHG_aAo",
    profileLink: "#",
    verified: false
  },
  {
    id: 4,
    name: "Ashan Weerasinghe",
    university: "NSBM Green University",
    designation: "Head of Sports Council, NSBM Green University",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpvyhA2PqPpEJ84aKvVJeWhsWiRY57cO7qAtxo4yeDxbmL4O4qMmM1PCzPvjrLNiFsIZomtUqt2NJdVL1SQ1XbOyFnPDmVaoqUwHdtcYU8qo1jfpbhSCCJrKzg57xroSpGsgSJi-F1D9us3ly4F6TpfS48FjCPhfu54fQjB2LXlhKN6HHZtqfwjc1jdYUodPWJdIf2TZUv0Kyrxm-zSdbQLWVsBiugw0rxNeBt2-IATwr6Vs3LVd1WpOTRT_Z53URldXXcAttYKT4",
    profileLink: "#",
    verified: true
  },
  {
    id: 5,
    name: "Tharushi Gamage",
    university: "University of Peradeniya",
    designation: "Coordinator of Arts Circle, Faculty of Arts",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-xaEkVVkUi-fK1J4bF1D7CHWqauZR07Y7qQK_kahzsmAulX9AYMykRCvJGoTp9JKXoIVb2iwWAlz43FVIvtiTibRxi5Nnx6yUT_1Mxuj2HXl-ML9u0uWbGXaJNb616uTo96JfvFJVlpEOTsawxnTPyI-gyz2j2DqfRnwa6Rn_gh3m3J80ObNLFJvxeG9TeGt9HUyqhWa3VRlOzd5NHOnCfjMXgDogZPS-50ZwHVIhLO7OEfvS4PDwQKDpXs-yWoFBnyAzUsGaTdM",
    profileLink: "#",
    verified: false
  },
  {
    id: 6,
    name: "Maleesha Silva",
    university: "University of Kelaniya",
    designation: "Vice President of AIESEC in University of Kelaniya",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmHHxBor8opCPRAziQHqmms9CdjUMEqJyYAaGE42aRfiiYvRc3NclRlRTtbUvbRCuakeYPhb-XxX9f3NUwXhOlI7IBCgWAkIX6S2APpR1Tz6xv_VZDUrwOzVsx-CMykdUfkW3nNrAz0jZ6rN4z5GWmi-OISqS2g00ALb9HCUtfGeoE782cEu7g2dDrcx7f5mDeBml1t93kFLEbJa-SqG58UaQ4CHqxk4bL_jVslkgbysZRdujrtpRj33JeeP7s8kBWLPOEf04CCcs",
    profileLink: "#",
    verified: false
  },
  {
    id: 7,
    name: "Nadeesha Jayasooriya",
    university: "SLIIT",
    designation: "Event Coordinator of FOSS Community of SLIIT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo0RIFFo_4fusbhyezjg4q6Ho8A-6Z5PNm5sM-1IW-7WpQEFbGB0Wsf-qpLI66Iwjvz0r_BFGKovAkdwpmv37RIsc6CRpHSkBPOhDBJc_-z9JsyoayuDQ29jEcReKxqYy1nc6C0hx1GBO3VGqUfuIIVc-KNa842hl8ZamTTslv6HzpslIAZ9D-07GJmaRtTux5IYQzXRg9aRTJ56GUtCMJFZ-kOYIPpsnXW7hlRSuUsC_svYk9YiSN_qM8P1sgHUtmPxsRpYdBPsc",
    profileLink: "#",
    verified: true
  },
  {
    id: 8,
    name: "Ryan De Silva",
    university: "University of Colombo",
    designation: "President of Drama Society, University of Colombo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa81gN2JoA1B5m0sInkhKripDhxUohvRa_BB3ST6N1J3mhWYNpd4jchVzqMd422h9vCCsZC_54Uf-srP4_oJbpO1evcphBVYbItI4mY0LL2UqhAsoX4uhLCt8d7FKaHG3QaJZqiN5N1nHimHniF7hJMDxvmZyzDVjzWbYAqlCKhFU7zxCsEottoe5kuAE_0ITduv-DrLvHGNCQNXJT4vKYBi4izN27Ve7c1hExgLb1xTxNuLl9dVCgHenkxShePwRb-Y3nbGQkR10",
    profileLink: "#",
    verified: false
  }
];
  return (
    <div className='max-w-[1280px] mx-auto px-4 md:px-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {ORGANIZERS.map((organizer) => (
        <div 
          key={organizer.id} 
          className="group bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

          {/* Profile Image & Verified Badge */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
              <img 
                alt={organizer.name} 
                className="w-full h-full rounded-full object-cover border-2 border-white dark:border-surface-dark" 
                src={organizer.image}
              />
            </div>
            {organizer.verified && (
              <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white dark:border-surface-dark flex items-center justify-center" title="Verified Organiser">
                <span className="material-symbols-outlined text-[12px] text-white">check</span>
              </div>
            )}
          </div>

          {/* Info Section */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
            {organizer.name}
          </h3>
          <p className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
            {organizer.university}
          </p>
          
          <div className="w-full h-px bg-gray-100 dark:bg-gray-700/50 my-3"></div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug mb-4">
            {organizer.designation}
          </p>

          {/* Action Button */}
          <button 
            onClick={() => window.location.href = organizer.profileLink}
            className="mt-auto w-full py-2 px-4 bg-gray-50 dark:bg-surface-darker text-sm font-medium text-slate-700 dark:text-gray-300 rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            View Profile
          </button>
        </div>
      ))}
    </div>
    <div className='py-8'>
        <div className="mt-12 flex items-center justify-center ">
      <nav aria-label="Pagination" className="flex items-center gap-1">
        {/* Previous Button */}
        <a 
          href="#" 
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark text-gray-500 dark:text-gray-400 transition-colors"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </a>

        {/* Page Numbers */}
        <a 
          href="#" 
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium shadow-md shadow-primary/25"
        >
          1
        </a>

        <a 
          href="#" 
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark text-gray-600 dark:text-gray-400 font-medium transition-colors"
        >
          2
        </a>

        <a 
          href="#" 
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark text-gray-600 dark:text-gray-400 font-medium transition-colors"
        >
          3
        </a>

        {/* Ellipsis */}
        <span className="w-10 h-10 flex items-center justify-center text-gray-400 dark:text-gray-600">
          ...
        </span>

        <a 
          href="#" 
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark text-gray-600 dark:text-gray-400 font-medium transition-colors"
        >
          8
        </a>

        {/* Next Button */}
        <a 
          href="#" 
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark text-gray-500 dark:text-gray-400 transition-colors"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </a>
      </nav>
    </div>

    </div>
    </div>
  )
}

export default OrganiserCard