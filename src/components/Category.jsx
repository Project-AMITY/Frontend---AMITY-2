import React from 'react'

const Category = () => {
    const categories = [
    {
      name: "Technology",
      icon: "memory",
      color: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Sports",
      icon: "sports_basketball",
      color: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      name: "Adventure",
      icon: "hiking",
      color: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      name: "Travel",
      icon: "flight",
      color: "bg-yellow-100 dark:bg-yellow-900/30",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      name: "Social",
      icon: "groups",
      color: "bg-pink-100 dark:bg-pink-900/30",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      name: "Career",
      icon: "work",
      color: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      name: "Entertainment",
      icon: "theater_comedy",
      color: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      name: "Wellbeing",
      icon: "self_improvement",
      color: "bg-teal-100 dark:bg-teal-900/30",
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
      name: "Education",
      icon: "school",
      color: "bg-indigo-100 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      wide: true,
    },
  ];
  return (
    <div>
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Explore by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, index) => (
              <a
                key={index}
                href="#"
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all group ${
                  cat.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`size-12 rounded-full ${cat.color} flex items-center justify-center ${cat.iconColor} group-hover:scale-110 transition-transform`}
                >
                  <span className="material-symbols-outlined">{cat.icon}</span>
                </div>
                <span className="font-semibold text-slate-900 dark:text-white text-sm">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Category