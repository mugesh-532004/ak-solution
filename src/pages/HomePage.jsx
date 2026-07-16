import { useNavigate } from 'react-router-dom';

const navItems = ['Home', 'Services', 'About', 'Contact'];

const services = [
  {
    title: 'Aadhaar Card Services',
    description: 'Fast support for Aadhaar enrollment, updates, corrections, and related assistance.',
    path: '#',
  },
  {
    title: 'eSeva Services',
    description: 'Easy help for government service payments, certificates, and digital citizen support.',
    path: '/esevai',
  },
  {
    title: 'CSC Services',
    description: 'Reliable CSC solutions for government schemes, document support, and public services.',
    path: '#',
  },
  {
    title: 'Web Development',
    description: 'Modern and responsive websites, business portals, and digital growth solutions.',
    path: '#',
  },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-white shadow-lg shadow-cyan-500/20">
              AK
            </div>
            <div>
              <p className="text-lg font-semibold text-white">AK Solutions</p>
              <p className="text-xs text-slate-400">Digital Services</p>
            </div>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Contact Us
          </a>
        </nav>
      </header>

      <main id="home" className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="grid items-center gap-10 rounded-[32px] border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">AK Solutions</p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Trusted support for Aadhaar, eSeva, CSC, and modern web development.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              We make government services and digital solutions simple, fast, and reliable for individuals and businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
                Explore Services
              </a>
              <a href="#about" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300">
                Why Choose Us
              </a>
            </div>
          </div>

          <div className="animate-float rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl shadow-slate-950/40">
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Fast & Friendly</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">One-stop support for your digital needs</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2">Aadhaar help and document support</li>
                <li className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2">eSeva and CSC service guidance</li>
                <li className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2">Professional website development</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Services</p>
              <h2 className="text-3xl font-bold text-white">What we offer</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                onClick={() => service.path !== '#' && navigate(service.path)}
                className={`rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${service.path !== '#' ? 'cursor-pointer' : ''}`}
              >
                <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20" />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-8 rounded-[32px] border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">About Us</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Why choose AK Solutions?</h2>
          </div>
          <div className="space-y-4 text-slate-300">
            <p>
              AK Solutions is committed to giving customers dependable digital support with a friendly approach, clear guidance, and professional results.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-2xl font-semibold text-white">Fast</p>
                <p className="mt-1 text-sm">Quick assistance and easy communication</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-2xl font-semibold text-white">Reliable</p>
                <p className="mt-1 text-sm">Trusted service for daily government needs</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-2xl font-semibold text-white">Modern</p>
                <p className="mt-1 text-sm">Professional websites and digital presence</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-8 text-center lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Get in touch for support today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Reach out for Aadhaar support, eSeva help, CSC assistance, or a professional website for your business.
          </p>
          <a href="mailto:info@aksolutions.com" className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
            info@aksolutions.com
          </a>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
