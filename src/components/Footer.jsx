import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social Icon Data with SVG Paths
  const socials = [
    { 
      name: 'Github', 
      href: 'https://github.com/ayushtriescode', 
      path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" 
    },
    { 
      name: 'Twitter', 
      href: '#', 
      path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" 
    },
    { 
      name: 'Youtube', 
      href: '#', 
      path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z M9.75 15.02V8.98L15.5 12l-5.75 3.02z" 
    },
    { 
      name: 'Instagram', 
      href: '#', 
      path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M2 12c0-4.42 3.58-8 8-8h4c4.42 0 8 3.58 8 8v4c0 4.42-3.58 8-8 8h-4c-4.42 0-8-3.58-8-8z" 
    }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-8 md:px-16 text-zinc-500 text-sm mt-auto">
      <div className="max-w-6xl mx-auto">
        
        {/* Social Icons using SVGs */}
        <div className="flex gap-6 mb-8">
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.href} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-400 hover:text-red-600 transition-colors duration-300"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d={social.path}></path>
              </svg>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Audio Description</li>
            <li className="hover:underline cursor-pointer">Legal Notices</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Help Centre</li>
            <li className="hover:underline cursor-pointer">Jobs</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Gift Cards</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Media Centre</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <p className="text-[12px] opacity-60">© {currentYear} Movie Discovery by ayushtriescode</p>
      </div>
    </footer>
  );
}