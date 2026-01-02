const Footer = () => {

    // Organize links 
  const accountLinks = [
    { name: "Sign up", href: "/register" },
    { name: "Log in", href: "/login" },
    { name: "Oppotunities", href: "/opportunities" },
    { name: "Preferences", href: "#" },
  ];

  const aboutLinks = [
    { name: "Developer Team", href: "/developerteam" },
    { name: "Join with Community", href: "#" },
    { name: "Mission & Vision", href: "#" },
    { name: "Partners", href: "#" },
  ];
  return (
  <>
    <footer className="bg-white dark:bg-[#0b0f17] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <a className="flex items-center gap-2 mb-6" href="#">
              <span className="material-symbols-outlined text-primary text-[28px]">handshake</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Amity</span>
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Connecting students, organizers, and universities to create a unified ecosystem of opportunities.
            </p>
            <div className="flex gap-4">
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Column 2: Account */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Your Account</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              {accountLinks.map((link, index) => (
                <li key={index}>
                  <a className="hover:text-primary transition-colors" href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">About Us</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a className="hover:text-primary transition-colors" href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-surface-darker transition-colors group border border-gray-200 dark:border-gray-800" href="#">
                <span className="material-symbols-outlined text-indigo-500">chat</span>
                <div>
                  <div className="text-xs text-gray-400">Join our</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary">Discord Server</div>
                </div>
              </a>
              <a className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-surface-darker transition-colors group border border-gray-200 dark:border-gray-800" href="#">
                <span className="material-symbols-outlined text-blue-500">mail</span>
                <div>
                  <div className="text-xs text-gray-400">Send us a</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary">Email</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <div>© 2026 Amity Platform. All rights reserved.</div>
          <div className="flex gap-6">
            <a className="hover:text-gray-900 dark:hover:text-gray-300" href="#">Privacy Policy</a>
            <a className="hover:text-gray-900 dark:hover:text-gray-300" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </>
);
};

export default Footer;
