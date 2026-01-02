import React from 'react'

const HomePageEventCard = () => {
    const eventsData = [
  {
    id: 1,
    category: "Technology",
    categoryColor: "text-primary",
    title: "Inter-Uni Hackathon 2024",
    date: "Oct 14 • 9:00 AM",
    price: "FREE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIVvrIJd82Fic1fEC4ayD8ftUEbV95JCCitj_0Dx5s135H6GDLjcr1dKjLRFmINSC-forPMmU1bsOA-tMWuz5ROI0yFXsuNN_ygOY-uFyI-gwDjCfK-Y6-HZSDQ4EWNVDfUWZ30uLb3fkcvfDq9PSQCu1xJ8l1DIdbPgiwaY7dAeEccTpEQlxFOKSniCTX_Zo2YWJUTY5qfz7P94z7g0JaNgc-d8Qdzc7ZRpsyhYn94nZGwVE2fhP_wASzPadqH8kBz6uKsIZndmA",
    attendees: []
  },
  {
    id: 2,
    category: "Career Guidance",
    categoryColor: "text-purple-500",
    title: "Resume & LinkedIn Workshop",
    date: "Oct 16 • 2:00 PM",
    price: "$15",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASPNf_hfhMzix1v_-8dxR7h9lyhjsaD_hSdmRKgneL0RoxZTMuXsn4Ua8GYaDr5k6CAyUvsbRdeOqKD2q9OfEk0lzxZIj64J7QGoMsavcUU_2BUkLsgJ9XbyeixY6nVQN4rmz29tGkB3cmsiwUjzHcr13nHzydjQAyUMxw64GC-9aq92bxYZvqoF6WVy5coT94LmvqDWH8PzNTr9lYbDHlAaEVlj3515OpfdfiXpPa6xLadTAThcnkDC_0wk8x9XloeXM9TUtd_Og",
    attendees: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDkbvBEQp2Y-wIo0RnVqpRqvvm10P4q8igfIKXxOWFZpSplz7-fCcl3VixMK6hnb4DYvZkyeoVMYshrBxGbCLo35ZqxikdlSVuT7ple6cZdx1d8RC-lPO4Op9vEvhuwDdLcuwvJ9uUNYz_N51AGcmE7XsjIX-kc4Uyl__t6eI-hVUibiZVDN-3GJFA5aRpH_BKDHdCorlInzYyM32yBF3d2nUvq3y0Zd7QedY70DgH7ptf7V47AhAAvq2kGsXRl0FovVh3xOHG_aAo"],
    extraAttendees: 45
  },
  {
    id: 3,
    category: "Sports",
    categoryColor: "text-green-500",
    title: "Inter-Uni Volleyball League",
    date: "Oct 18 • 4:30 PM",
    price: "FREE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtrUD9YWQjAav9Jg0yUVLBhESM9zbwUKw7vmJdT-DtbA9Sc76tiH9vvsz17fdfkTuil2B2rIxQo0OvNeoTB_blCokdrV0AJTJBXsau5AikxLKUQmRe9AZEw68RjxViu17GAd_PMLMRmrsLj_46-Obr9HSFEkLW2aj_0DbhQQo9yO0i2L1TMafGPRSNZXZOFWP1-1wB-hCm_VGykYCE8W1WNBm3E4T8GBStbP62TGsg5NTi98GZ0m5oGQ68ul1YMVhW24J089JFwjo",
    attendees: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpvyhA2PqPpEJ84aKvVJeWhsWiRY57cO7qAtxo4yeDxbmL4O4qMmM1PCzPvjrLNiFsIZomtUqt2NJdVL1SQ1XbOyFnPDmVaoqUwHdtcYU8qo1jfpbhSCCJrKzg57xroSpGsgSJi-F1D9us3ly4F6TpfS48FjCPhfu54fQjB2LXlhKN6HHZtqfwjc1jdYUodPWJdIf2TZUv0Kyrxm-zSdbQLWVsBiugw0rxNeBt2-IATwr6Vs3LVd1WpOTRT_Z53URldXXcAttYKT4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-xaEkVVkUi-fK1J4bF1D7CHWqauZR07Y7qQK_kahzsmAulX9AYMykRCvJGoTp9JKXoIVb2iwWAlz43FVIvtiTibRxi5Nnx6yUT_1Mxuj2HXl-ML9u0uWbGXaJNb616uTo96JfvFJVlpEOTsawxnTPyI-gyz2j2DqfRnwa6Rn_gh3m3J80ObNLFJvxeG9TeGt9HUyqhWa3VRlOzd5NHOnCfjMXgDogZPS-50ZwHVIhLO7OEfvS4PDwQKDpXs-yWoFBnyAzUsGaTdM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmHHxBor8opCPRAziQHqmms9CdjUMEqJyYAaGE42aRfiiYvRc3NclRlRTtbUvbRCuakeYPhb-XxX9f3NUwXhOlI7IBCgWAkIX6S2APpR1Tz6xv_VZDUrwOzVsx-CMykdUfkW3nNrAz0jZ6rN4z5GWmi-OISqS2g00ALb9HCUtfGeoE782cEu7g2dDrcx7f5mDeBml1t93kFLEbJa-SqG58UaQ4CHqxk4bL_jVslkgbysZRdujrtpRj33JeeP7s8kBWLPOEf04CCcs"
    ]
  },
  {
    id: 4,
    category: "Wellbeing",
    categoryColor: "text-teal-500",
    title: "Mindfulness & Yoga Session",
    date: "Oct 20 • 7:00 AM",
    price: "$5",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEs_BI22n7XTfu8yltBUNTycCIErW4l1lnxT90pfAkPKFH8nsb4kHkxs6tL50e6Ar46o1U4yVs18ktGl1M7a9NKC6MyLgWWXJ3C-O5AC0Hm5jwpLNNvB9VRUkWuHlI_RO--1TxVaeb28nN8u21PwZwOgxCYtyKhSUUE_Cg2Zzb4qNDpW6pgTe6vTQq8KgH_HVEfXMEkD6rFxbrV5pEEX-gk52evpjbG_tpG2BvgnMyb4JC_N2-MiLRj77bh1KAp2548hIWbJ5RvSI",
    attendees: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo0RIFFo_4fusbhyezjg4q6Ho8A-6Z5PNm5sM-1IW-7WpQEFbGB0Wsf-qpLI66Iwjvz0r_BFGKovAkdwpmv37RIsc6CRpHSkBPOhDBJc_-z9JsyoayuDQ29jEcReKxqYy1nc6C0hx1GBO3VGqUfuIIVc-KNa842hl8ZamTTslv6HzpslIAZ9D-07GJmaRtTux5IYQzXRg9aRTJ56GUtCMJFZ-kOYIPpsnXW7hlRSuUsC_svYk9YiSN_qM8P1sgHUtmPxsRpYdBPsc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa81gN2JoA1B5m0sInkhKripDhxUohvRa_BB3ST6N1J3mhWYNpd4jchVzqMd422h9vCCsZC_54Uf-srP4_oJbpO1evcphBVYbItI4mY0LL2UqhAsoX4uhLCt8d7FKaHG3QaJZqiN5N1nHimHniF7hJMDxvmZyzDVjzWbYAqlCKhFU7zxCsEottoe5kuAE_0ITduv-DrLvHGNCQNXJT4vKYBi4izN27Ve7c1hExgLb1xTxNuLl9dVCgHenkxShePwRb-Y3nbGQkR10"
    ]
  }
];
  return (
    <div>
      <section className="py-16 bg-white dark:bg-surface-darker/50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Upcoming Events
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Don't miss out on what's happening this week.
            </p>
          </div>
          <a className="inline-flex items-center text-primary font-semibold hover:underline gap-1" href="#">
            View all events 
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventsData.map((event) => (
            <div key={event.id} className="group relative bg-gray-50 dark:bg-surface-dark rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 dark:border-gray-800 flex flex-col h-full">
              
              {/* Image Header */}
              <div 
                className="aspect-video w-full bg-cover bg-center" 
                style={{ backgroundImage: `url('${event.image}')` }}
              >
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-900 dark:text-white shadow-sm">
                  {event.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className={`${event.categoryColor} text-xs font-bold uppercase tracking-wider mb-2`}>
                  {event.category}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  <span>{event.date}</span>
                </div>

                {/* Footer / Join Action */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700/50 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {event.attendees.map((avatar, index) => (
                      <img 
                        key={index}
                        alt="Attendee" 
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-surface-dark" 
                        src={avatar} 
                      />
                    ))}
                    {event.extraAttendees && (
                      <span className="w-6 h-6 rounded-full border-2 border-white dark:border-surface-dark bg-gray-200 text-[10px] flex items-center justify-center text-gray-600">
                        +{event.extraAttendees}
                      </span>
                    )}
                  </div>
                  <button className="text-sm font-semibold text-primary hover:text-primary-hover">
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </div>
  )
}

export default HomePageEventCard