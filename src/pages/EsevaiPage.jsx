import { useNavigate } from 'react-router-dom';

function EsevaiPage() {
  const navigate = useNavigate();

  const services = [
    { icon: '📜', name: 'Community Certificate' },
    { icon: '💰', name: 'Income Certificate' },
    { icon: '🏘️', name: 'Nativity Certificate' },
    { icon: '🏠', name: 'Residence Certificate' },
    { icon: '👨‍👩‍👧', name: 'Legal Heir Certificate' },
    { icon: '💍', name: 'Inter-Caste Marriage Certificate' },
    { icon: '✅', name: 'Solvency Certificate' },
    { icon: '💼', name: 'Unemployment Certificate' },
    { icon: '👵', name: 'Widow Certificate' },
    { icon: '🌾', name: 'Agricultural Income Certificate' },
    { icon: '🗂️', name: 'Patta Transfer & Land Records' },
    { icon: '💳', name: 'Pension Applications (Old-age, Widow, Disability)' },
    { icon: '🚗', name: 'Driving Licence Appointment' },
    { icon: '📋', name: 'Learner\'s Licence Application' },
    { icon: '⚡', name: 'Electricity Bill Payment (TANGEDCO)' },
    { icon: '💧', name: 'Water Tax & Property Tax Payments' },
    { icon: '📝', name: 'Marriage & Document Registration' },
    { icon: '🚔', name: 'Police Services (FIR/CSR & Complaints)' },
    { icon: '', name: 'Social Welfare Schemes & Marriage Assistance' },
  ];

  const eligibility = [
    '✅ Must be a resident of Tamil Nadu',
    '✅ Age 18 or above',
    '✅ Valid ID proof (Aadhaar, Voter ID, Driving License)',
    '✅ Basic computer knowledge helpful',
    '✅ Secure, trustworthy location (office/shop)',
  ];

  const requirements = [
    '📋 Form-18 (Applicant Declaration)',
    '📜 Copy of Aadhaar/Voter ID/Driving License',
    '🏪 Proof of business premises (rent agreement/ownership)',
    '💻 Computer & Internet setup',
    '📞 Working phone number    ',
    '🏦 Bank account details',
  ];

  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer hover:opacity-80">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-white shadow-lg shadow-cyan-500/20">
              AK
            </div>
            <div>
              <p className="text-lg font-semibold text-white">AK Solutions</p>
              <p className="text-xs text-slate-400">Digital Services</p>
            </div>
          </button>

          <button onClick={() => navigate('/')} className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            ← Back Home
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <section className="mb-12 rounded-[32px] border border-cyan-400/20 bg-slate-900/70 p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-5xl font-black text-white mb-4">🏛️ Tamil Nadu e-Sevai Services</h1>
            <p className="text-lg text-slate-300">
              Complete information about Tamil Nadu e-Governance Agency (TNeGA) services and how to start your own e-Sevai centre as a business.
            </p>
          </div>

          <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6">
            <p className="text-slate-300 leading-relaxed">
              In <strong>Tamil Nadu</strong>, <strong>e-Sevai Centres</strong> provide comprehensive government services through the Tamil Nadu e-Governance Agency (TNeGA). These centres help citizens apply for certificates, pay bills, and access welfare schemes online—all in one convenient location.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">📋 Available Services</h2>
            <p className="text-slate-400">19+ government services available at e-Sevai centres</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 hover:border-cyan-400/40 transition">
                <p className="text-3xl mb-2">{service.icon}</p>
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-8">🚀 Start Your Own e-Sevai Centre</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">✅ Eligibility Criteria</h3>
              <ul className="space-y-4">
                {eligibility.map((item, idx) => (
                  <li key={idx} className="text-slate-300 flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">📄 Required Documents</h3>
              <ul className="space-y-4">
                {requirements.map((item, idx) => (
                  <li key={idx} className="text-slate-300 flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">💡 Registration & Investment</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/60 p-6 border border-white/10">
              <p className="text-3xl font-bold text-cyan-400 mb-2">7-10 Days</p>
              <p className="text-slate-300">Registration Process Duration</p>
            </div>

            <div className="rounded-2xl bg-slate-950/60 p-6 border border-white/10">
              <p className="text-3xl font-bold text-cyan-400 mb-2">₹5-15 Lakhs</p>
              <p className="text-slate-300">Total Investment (PC + Software + Setup)</p>
            </div>

            <div className="rounded-2xl bg-slate-950/60 p-6 border border-white/10">
              <p className="text-3xl font-bold text-cyan-400 mb-2">₹50-100K+</p>
              <p className="text-slate-300">Expected Monthly Income</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold text-white">📝 Registration Process:</h3>
            <ol className="space-y-3 text-slate-300 ml-4">
              <li>1. 📌 <strong>Visit TNeGA Website:</strong> Apply online at tamil-nadu-e-governance portal</li>
              <li>2. 📋 <strong>Submit Documents:</strong> Upload required proof and business details</li>
              <li>3. ✅ <strong>Verification:</strong> TNeGA officials verify your application (5-7 days)</li>
              <li>4. 🔑 <strong>Authorization:</strong> Receive login credentials and setup guide</li>
              <li>5. 💻 <strong>Install Software:</strong> Set up e-Sevai kiosk management system</li>
              <li>6. 🎉 <strong>Go Live:</strong> Start serving citizens and earning commission</li>
            </ol>
          </div>
        </section>

        <section className="mb-12 rounded-[32px] border border-white/10 bg-slate-900/70 p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-white mb-6">🌐 Useful Links</h2>
          <div className="space-y-4">
            <a href="https://www.it.tn.gov.in/en/List_of_services_offered_in_e-sevai_centres" target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-4 hover:border-cyan-400/40 transition">
              <p className="text-cyan-400 font-semibold">📋 Tamil Nadu e-Sevai Services List</p>
              <p className="text-xs text-slate-400 mt-1">Official complete list of available services</p>
            </a>

            <a href="https://it.tn.gov.in/index.php/en/TNEGA/e-Sevai" target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-4 hover:border-cyan-400/40 transition">
              <p className="text-cyan-400 font-semibold">🏛️ Tamil Nadu e-Sevai Portal</p>
              <p className="text-xs text-slate-400 mt-1">Official TNeGA e-Sevai portal for registration and services</p>
            </a>
          </div>
        </section>

        <section className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-8 text-center lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Need Help?</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Get Expert Guidance</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Contact AK Solutions for assistance with e-Sevai centre setup, documentation, or any questions about starting your own service center.
          </p>
          <a href="mailto:info@aksolutions.com" className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
            📧 info@aksolutions.com
          </a>
        </section>
      </main>
    </div>
  );
}

export default EsevaiPage;
