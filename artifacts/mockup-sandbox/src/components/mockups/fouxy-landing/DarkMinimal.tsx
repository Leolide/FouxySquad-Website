import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Calendar, 
  Users, 
  MapPin, 
  ArrowRight, 
  Menu, 
  ExternalLink, 
  Mail 
} from 'lucide-react';

export default function DarkMinimal() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F5F5F5] font-['Inter'] selection:bg-[#E8742C] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight uppercase">
            Fouxy Squad.
          </div>
          <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase text-[#888888]">
            <a href="#community" className="hover:text-[#F5F5F5] transition-colors">Community</a>
            <a href="#events" className="hover:text-[#F5F5F5] transition-colors">Events</a>
            <a href="#gallery" className="hover:text-[#F5F5F5] transition-colors">Gallery</a>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#E8742C] hover:bg-[#d66826] text-white px-6 py-3 text-sm tracking-widest uppercase font-medium transition-colors">
              Join Us
            </button>
          </div>
          <button className="md:hidden text-[#F5F5F5]">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="inline-block border border-white/10 px-4 py-2 mb-8 text-xs tracking-[0.2em] uppercase text-[#888888] w-max">
              Design Community
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] mb-8">
              Elevating design<br />culture in London.
            </h1>
            <p className="text-xl md:text-2xl text-[#888888] font-light max-w-2xl mb-12 leading-relaxed">
              An exclusive UX/UI design community connecting ambitious creatives, fostering collaboration, and hosting premium events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E8742C] hover:bg-[#d66826] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium transition-colors flex items-center justify-center gap-3">
                Attend Next Event <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/10 hover:border-white/30 text-[#F5F5F5] px-8 py-4 text-sm tracking-widest uppercase transition-colors bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]">
                View Gallery
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-px bg-white/10 border border-white/10">
              <div className="bg-[#0C0C0C] p-8">
                <div className="flex items-center gap-3 mb-2 text-[#888888]">
                  <Users className="w-5 h-5 text-[#E8742C]" />
                  <span className="text-xs tracking-[0.2em] uppercase">Members</span>
                </div>
                <div className="text-4xl font-light tracking-tight">400+</div>
              </div>
              <div className="bg-[#0C0C0C] p-8">
                <div className="flex items-center gap-3 mb-2 text-[#888888]">
                  <Calendar className="w-5 h-5 text-[#E8742C]" />
                  <span className="text-xs tracking-[0.2em] uppercase">Events</span>
                </div>
                <div className="text-4xl font-light tracking-tight">12+</div>
              </div>
              <div className="bg-[#0C0C0C] p-8 col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-2 text-[#888888]">
                  <MapPin className="w-5 h-5 text-[#E8742C]" />
                  <span className="text-xs tracking-[0.2em] uppercase">Location</span>
                </div>
                <div className="text-2xl font-light tracking-tight">London, UK</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community / Network */}
      <section id="community" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-[#E8742C] mb-4">01 // The Network</h2>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight">Where designers work.</h3>
            </div>
            <p className="text-[#888888] max-w-md font-light">
              Our members represent the top tier of design talent across leading tech companies, agencies, and academic institutions.
            </p>
          </div>
          
          <div className="border border-white/10 p-8 md:p-12 bg-[#1A1A1A]">
            <div className="flex flex-wrap gap-4">
              {['Amazon', 'Figma', 'Palantir', 'Burberry', 'UAL', 'RCA', 'Cambridge'].map((company, i) => (
                <div key={i} className="border border-white/10 px-6 py-3 text-sm tracking-widest uppercase text-[#888888] hover:text-[#F5F5F5] hover:border-white/30 transition-colors bg-[#0C0C0C]">
                  {company}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 mt-12 border border-white/10">
              <div className="bg-[#1A1A1A] p-8 md:p-12">
                <h4 className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Core Demographic</h4>
                <div className="text-3xl font-light tracking-tight mb-2">Ages 20-35</div>
                <p className="text-[#888888] text-sm">A vibrant mix of emerging talent and established senior designers.</p>
              </div>
              <div className="bg-[#1A1A1A] p-8 md:p-12">
                <h4 className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Growth</h4>
                <div className="text-3xl font-light tracking-tight mb-2">Rapid Expansion</div>
                <p className="text-[#888888] text-sm">Constantly evolving network with regular high-impact gatherings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section id="events" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs tracking-[0.2em] uppercase text-[#E8742C] mb-4">02 // Programming</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-16">Upcoming & Past.</h3>
          
          <div className="border border-white/10">
            {/* Header row */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-white/10 bg-[#1A1A1A] text-xs tracking-[0.2em] uppercase text-[#888888]">
              <div className="col-span-2">Date</div>
              <div className="col-span-5">Event Title</div>
              <div className="col-span-3">Type</div>
              <div className="col-span-2 text-right">Action</div>
            </div>
            
            {/* Rows */}
            {[
              { date: 'Nov 12', title: 'Design Systems Architecture', type: 'Workshop', status: 'Upcoming' },
              { date: 'Oct 28', title: 'Fouxy Squad Mixer Vol. 4', type: 'Networking', status: 'Past' },
              { date: 'Sep 15', title: 'UX Research Methods in 2024', type: 'Panel', status: 'Past' },
              { date: 'Aug 02', title: 'Portfolio Review Sessions', type: 'Mentorship', status: 'Past' }
            ].map((event, i) => (
              <div key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-white/10 last:border-0 hover:bg-[#1A1A1A] transition-colors items-center">
                <div className="md:col-span-2 text-[#888888] text-sm font-mono">{event.date}</div>
                <div className="md:col-span-5 text-xl font-medium">{event.title}</div>
                <div className="md:col-span-3">
                  <span className="border border-white/10 px-3 py-1 text-xs tracking-widest uppercase text-[#888888] group-hover:border-white/30 transition-colors">
                    {event.type}
                  </span>
                </div>
                <div className="md:col-span-2 md:text-right mt-4 md:mt-0">
                  {event.status === 'Upcoming' ? (
                    <button className="text-[#E8742C] text-sm tracking-widest uppercase hover:text-white transition-colors flex items-center md:justify-end gap-2 w-full md:w-auto">
                      RSVP <ExternalLink className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-[#888888] text-sm tracking-widest uppercase">Completed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-[#E8742C] mb-4">03 // The Vibe</h2>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight">Visual Archive.</h3>
            </div>
            <button className="border border-white/10 hover:border-white/30 text-[#F5F5F5] px-6 py-3 text-sm tracking-widest uppercase transition-colors">
              View All Photos
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px] bg-white/10 border-y border-white/10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-[#1A1A1A] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0C0C0C] to-[#2A2A2A] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs tracking-[0.2em] uppercase text-white">IMG_{1048 + i}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-white/10 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              "Amazing event! Many thanks for organising it!",
              "Great event - nice to meet everyone",
              "The London design community needs more events like these",
              "Big thanks for organising the event! I had a lot of fun meeting new designers"
            ].map((quote, i) => (
              <div key={i} className="bg-[#0C0C0C] p-10 md:p-16 flex flex-col justify-between">
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-[#F5F5F5]">
                  "{quote}"
                </p>
                <div className="text-xs tracking-[0.2em] uppercase text-[#888888]">
                  — Attendee
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect / Social */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs tracking-[0.2em] uppercase text-[#E8742C] mb-4">04 // Connect</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-16">Find us online.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" className="border border-white/10 p-8 bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors group">
              <Instagram className="w-8 h-8 text-[#E8742C] mb-8" />
              <div className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-2">Instagram</div>
              <div className="text-xl font-medium group-hover:text-[#E8742C] transition-colors">@fouxy_squad</div>
            </a>
            <a href="#" className="border border-white/10 p-8 bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors group">
              <Linkedin className="w-8 h-8 text-[#E8742C] mb-8" />
              <div className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-2">LinkedIn</div>
              <div className="text-xl font-medium group-hover:text-[#E8742C] transition-colors">Fouxy Squad</div>
            </a>
            <a href="#" className="border border-white/10 p-8 bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors group">
              <Calendar className="w-8 h-8 text-[#E8742C] mb-8" />
              <div className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-2">Luma</div>
              <div className="text-xl font-medium group-hover:text-[#E8742C] transition-colors">Event Calendar</div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#E8742C] text-[#0C0C0C] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 text-[#0C0C0C]">
            Ready to elevate your network?
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 text-[#0C0C0C]/80">
            Join 400+ London-based designers shaping the future of digital experiences.
          </p>
          <button className="bg-[#0C0C0C] hover:bg-[#1A1A1A] text-white px-10 py-5 text-sm tracking-widest uppercase font-medium transition-colors border border-transparent hover:border-white/20 shadow-2xl">
            Join The Community
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-[#888888] text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold tracking-tight uppercase text-[#F5F5F5] text-lg">
            Fouxy Squad.
          </div>
          <div className="flex gap-8 tracking-widest uppercase text-xs">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Luma</a>
          </div>
          <div className="text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Fouxy Squad. London.
          </div>
        </div>
      </footer>
    </div>
  );
}
