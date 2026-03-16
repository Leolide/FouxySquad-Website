import React from "react";
import { 
  Instagram, 
  Linkedin, 
  Calendar, 
  Users, 
  MapPin, 
  ArrowRight, 
  Menu, 
  ExternalLink, 
  Mail,
  MessageCircle,
  Phone
} from "lucide-react";

function CuteFox() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(100,110)">
        <ellipse cx="0" cy="20" rx="45" ry="35" fill="#E8742C" />
        <circle cx="0" cy="-15" r="38" fill="#E8742C" />
        <polygon points="-38,-20 -28,-65 -10,-25" fill="#E8742C" />
        <polygon points="-32,-28 -26,-55 -14,-30" fill="#FDEEE4" />
        <polygon points="38,-20 28,-65 10,-25" fill="#E8742C" />
        <polygon points="32,-28 26,-55 14,-30" fill="#FDEEE4" />
        <ellipse cx="0" cy="-5" rx="22" ry="18" fill="#FDEEE4" />
        <ellipse cx="0" cy="30" rx="25" ry="15" fill="#FDEEE4" />
        <circle cx="-12" cy="-18" r="6" fill="#0A0A0A" />
        <circle cx="12" cy="-18" r="6" fill="#0A0A0A" />
        <circle cx="-10" cy="-20" r="2" fill="white" />
        <circle cx="14" cy="-20" r="2" fill="white" />
        <ellipse cx="0" cy="-6" rx="5" ry="3.5" fill="#0A0A0A" />
        <path d="M -6 0 Q 0 6 6 0" stroke="#0A0A0A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="-40" y1="-12" x2="-55" y2="-18" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round" />
        <line x1="-40" y1="-8" x2="-56" y2="-8" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round" />
        <line x1="-40" y1="-4" x2="-55" y2="2" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round" />
        <line x1="40" y1="-12" x2="55" y2="-18" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round" />
        <line x1="40" y1="-8" x2="56" y2="-8" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round" />
        <line x1="40" y1="-4" x2="55" y2="2" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round" />
        <path d="M 30 45 Q 50 30 55 50 Q 60 65 45 55 Q 35 50 30 45 Z" fill="#E8742C" />
        <path d="M 45 50 Q 55 60 48 55" fill="#FDEEE4" />
      </g>
    </svg>
  );
}

export default function Editorial() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-['Inter'] antialiased selection:bg-[#0A0A0A] selection:text-[#FAFAFA]">
      {/* 1. Navigation */}
      <nav className="border-b border-[#E8E5E0] sticky top-0 bg-[#FAFAFA]/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-['Playfair_Display'] text-2xl tracking-tight font-semibold italic">
            Fouxy Squad.
          </div>
          
          <div className="hidden md:flex space-x-8 text-xs font-medium tracking-widest uppercase">
            <a href="#community" className="hover:text-gray-500 transition-colors">Community</a>
            <a href="#events" className="hover:text-gray-500 transition-colors">Events</a>
            <a href="#gallery" className="hover:text-gray-500 transition-colors">Gallery</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase border border-[#0A0A0A] px-4 py-2 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors">
              <span>Join Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. Hero */}
        <section className="border-b border-[#E8E5E0] min-h-[85vh] flex flex-col justify-center relative pt-12">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
                London's <br />
                <span className="italic font-light text-gray-800">UX/UI</span> <br />
                Society.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl text-gray-800 mb-10">
                A curated community of designers shaping the future of digital experiences. We gather to learn, connect, and elevate our craft.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-0">
                <button className="bg-[#0A0A0A] text-[#FAFAFA] text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                  <span>Upcoming Events</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-[#0A0A0A] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center hover:bg-[#E8E5E0] transition-colors">
                  <span>Explore Gallery</span>
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-4 lg:border-l border-[#E8E5E0] lg:pl-8 h-full flex flex-col justify-between pt-4 lg:pt-0 pb-12 lg:pb-0 gap-12">
              <div className="flex justify-center mb-4">
                <div className="w-40 h-40">
                  <CuteFox />
                </div>
              </div>
              <div className="space-y-12">
                <div>
                  <div className="flex items-center space-x-3 mb-2 text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                    <Users className="w-3 h-3" />
                    <span>The Network</span>
                  </div>
                  <div className="font-['Playfair_Display'] text-6xl">400+</div>
                  <div className="text-sm font-medium mt-1 uppercase tracking-wider">Active Members</div>
                </div>
                
                <div className="w-full h-[1px] bg-[#E8E5E0]"></div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-2 text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                    <Calendar className="w-3 h-3" />
                    <span>Gatherings</span>
                  </div>
                  <div className="font-['Playfair_Display'] text-6xl">12+</div>
                  <div className="text-sm font-medium mt-1 uppercase tracking-wider">Events Hosted</div>
                </div>
                
                <div className="w-full h-[1px] bg-[#E8E5E0]"></div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-2 text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                    <MapPin className="w-3 h-3" />
                    <span>Base</span>
                  </div>
                  <div className="font-['Playfair_Display'] text-5xl italic">London</div>
                  <div className="text-sm font-medium mt-2 uppercase tracking-wider">United Kingdom</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Community */}
        <section id="community" className="border-b border-[#E8E5E0] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-16 pb-8 border-b border-[#0A0A0A]">
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl">The Collective.</h2>
              <span className="text-xs uppercase tracking-widest font-semibold hidden sm:block">Demographics & Origin</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-4">Core Age</span>
                <span className="font-['Playfair_Display'] text-6xl mb-2">20—35</span>
                <p className="text-sm text-gray-700 leading-relaxed">A vibrant generation of ambitious designers in the early to mid stages of their careers.</p>
              </div>
              <div className="flex flex-col md:border-l border-[#E8E5E0] md:pl-12">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-4">Focus</span>
                <span className="font-['Playfair_Display'] text-6xl mb-2 italic">UX/UI</span>
                <p className="text-sm text-gray-700 leading-relaxed">Product designers, researchers, and interaction specialists dedicated to digital craft.</p>
              </div>
              <div className="flex flex-col md:border-l border-[#E8E5E0] md:pl-12">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-4">Vibe</span>
                <span className="font-['Playfair_Display'] text-6xl mb-2">Curious</span>
                <p className="text-sm text-gray-700 leading-relaxed">Driven by continuous learning, peer feedback, and genuine connection.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-8 font-semibold">Representing Industry Leaders</h3>
              <div className="flex flex-wrap gap-4">
                {["Amazon", "Figma", "Palantir", "Burberry", "UAL", "RCA", "Cambridge"].map((company) => (
                  <span key={company} className="border border-[#0A0A0A] px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#0A0A0A] hover:text-[#FAFAFA] cursor-default transition-colors">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Events */}
        <section id="events" className="border-b border-[#E8E5E0] py-24 bg-[#E8E5E0]/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-16 pb-8 border-b border-[#0A0A0A]">
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl">Calendar.</h2>
              <button className="text-xs uppercase tracking-widest font-semibold flex items-center space-x-2 border-b border-[#0A0A0A] pb-1 hover:text-gray-500 transition-colors">
                <span>View Full Archive</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            
            <div className="flex flex-col">
              {/* Event 1 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-[#E8E5E0] group hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                <div className="md:col-span-2 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Upcoming</span>
                  <span className="font-['Playfair_Display'] text-3xl">Oct 12</span>
                </div>
                <div className="md:col-span-4">
                  <div className="w-full aspect-[4/3] bg-[#0A0A0A]"></div>
                </div>
                <div className="md:col-span-5 flex flex-col justify-center">
                  <h3 className="font-['Playfair_Display'] text-3xl mb-4 italic">Design Systems at Scale</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">A roundtable discussion on managing comprehensive design systems across multiple product teams and platforms.</p>
                </div>
                <div className="md:col-span-1 flex items-center justify-end">
                  <div className="w-12 h-12 border border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-[#FAFAFA] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-[#E8E5E0] group hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                <div className="md:col-span-2 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Upcoming</span>
                  <span className="font-['Playfair_Display'] text-3xl">Nov 05</span>
                </div>
                <div className="md:col-span-4">
                  <div className="w-full aspect-[4/3] bg-[#E8E5E0]"></div>
                </div>
                <div className="md:col-span-5 flex flex-col justify-center">
                  <h3 className="font-['Playfair_Display'] text-3xl mb-4 italic">Portfolio Review Night</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Bring your current portfolio and get actionable feedback from senior designers at top London tech companies.</p>
                </div>
                <div className="md:col-span-1 flex items-center justify-end">
                  <div className="w-12 h-12 border border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-[#FAFAFA] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-[#E8E5E0] group hover:bg-[#FAFAFA] transition-colors cursor-pointer opacity-70">
                <div className="md:col-span-2 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Past</span>
                  <span className="font-['Playfair_Display'] text-3xl">Sep 18</span>
                </div>
                <div className="md:col-span-4">
                  <div className="w-full aspect-[4/3] bg-[#dcdad5]"></div>
                </div>
                <div className="md:col-span-5 flex flex-col justify-center">
                  <h3 className="font-['Playfair_Display'] text-3xl mb-4 italic">Figma Advanced Workshop</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Deep dive into variables, advanced prototyping, and modern component architecture.</p>
                </div>
                <div className="md:col-span-1 flex items-center justify-end">
                  <div className="w-12 h-12 border border-gray-300 flex items-center justify-center text-gray-400">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Gallery */}
        <section id="gallery" className="border-b border-[#E8E5E0] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-16 pb-8 border-b border-[#0A0A0A]">
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl">Moments.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
              <div className="md:col-span-7 bg-[#0A0A0A] relative group overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-[#FAFAFA]">
                  <span className="text-xs uppercase tracking-widest font-semibold block mb-2 opacity-80">Vol. 12</span>
                  <h4 className="font-['Playfair_Display'] text-2xl italic">Summer Social Gathering</h4>
                </div>
              </div>
              <div className="md:col-span-5 bg-[#dcdad5] relative group overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="md:col-span-4 bg-[#E8E5E0] relative group overflow-hidden">
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="md:col-span-4 bg-[#0A0A0A] relative group overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="md:col-span-4 bg-[#dcdad5] relative group overflow-hidden">
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="md:col-span-12 h-[400px] bg-[#0A0A0A] relative group overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#FAFAFA]">
                   <span className="font-['Playfair_Display'] text-4xl md:text-5xl italic mb-6">Experience the Vibe</span>
                   <button className="border border-[#FAFAFA] px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#FAFAFA] hover:text-[#0A0A0A] transition-colors">
                     View Complete Archive
                   </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="border-b border-[#E8E5E0] py-24 bg-[#0A0A0A] text-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl mb-16 pb-8 border-b border-[#FAFAFA]/20">Voices.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex flex-col">
                <div className="font-['Playfair_Display'] text-6xl text-[#FAFAFA]/20 leading-none mb-4">"</div>
                <p className="font-['Playfair_Display'] text-3xl leading-snug italic mb-8 flex-grow">
                  Amazing event! Many thanks for organising it!
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#FAFAFA]/20"></div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider">Member</div>
                    <div className="text-xs text-[#FAFAFA]/60">London</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="font-['Playfair_Display'] text-6xl text-[#FAFAFA]/20 leading-none mb-4">"</div>
                <p className="font-['Playfair_Display'] text-3xl leading-snug italic mb-8 flex-grow">
                  The London design community needs more events like these.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#FAFAFA]/20"></div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider">Member</div>
                    <div className="text-xs text-[#FAFAFA]/60">London</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="font-['Playfair_Display'] text-6xl text-[#FAFAFA]/20 leading-none mb-4">"</div>
                <p className="font-['Playfair_Display'] text-3xl leading-snug italic mb-8 flex-grow">
                  Great event - nice to meet everyone.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#FAFAFA]/20"></div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider">Member</div>
                    <div className="text-xs text-[#FAFAFA]/60">London</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="font-['Playfair_Display'] text-6xl text-[#FAFAFA]/20 leading-none mb-4">"</div>
                <p className="font-['Playfair_Display'] text-3xl leading-snug italic mb-8 flex-grow">
                  Big thanks for organising the event! I had a lot of fun meeting new designers.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#FAFAFA]/20"></div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider">Member</div>
                    <div className="text-xs text-[#FAFAFA]/60">London</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Connect */}
        <section className="border-b border-[#E8E5E0] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl mb-16 pb-8 border-b border-[#0A0A0A]">Network.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#0A0A0A]">
              <a href="#" className="flex flex-col items-center justify-center p-16 border-b md:border-b-0 md:border-r border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors group">
                <Instagram className="w-12 h-12 mb-6 opacity-80" />
                <span className="font-['Playfair_Display'] text-2xl italic mb-2">Instagram</span>
                <span className="text-xs uppercase tracking-widest font-semibold opacity-60">@fouxy_squad</span>
              </a>
              
              <a href="#" className="flex flex-col items-center justify-center p-16 border-b md:border-b-0 md:border-r border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors group">
                <Linkedin className="w-12 h-12 mb-6 opacity-80" />
                <span className="font-['Playfair_Display'] text-2xl italic mb-2">LinkedIn</span>
                <span className="text-xs uppercase tracking-widest font-semibold opacity-60">Fouxy Squad</span>
              </a>
              
              <a href="#" className="flex flex-col items-center justify-center p-16 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors group">
                <Calendar className="w-12 h-12 mb-6 opacity-80" />
                <span className="font-['Playfair_Display'] text-2xl italic mb-2">Luma</span>
                <span className="text-xs uppercase tracking-widest font-semibold opacity-60">Events & RSVP</span>
              </a>
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="py-32 bg-[#E8E5E0]/30 border-b border-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
            <div className="w-16 h-[1px] bg-[#0A0A0A] mb-12"></div>
            <h2 className="font-['Playfair_Display'] text-6xl md:text-8xl italic mb-8">Ready to join?</h2>
            <p className="text-xl text-gray-700 font-light mb-12 max-w-lg">
              Become part of London's most engaged design collective. No membership fees, just good design and great people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="https://chat.whatsapp.com/FouxySquad" target="_blank" rel="noopener noreferrer" className="bg-[#0A0A0A] text-[#FAFAFA] text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Join WhatsApp Group</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <a href="https://lu.ma/user/FouxySquad" target="_blank" rel="noopener noreferrer" className="border border-[#0A0A0A] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>View Events on Luma</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="w-full max-w-lg">
              <div className="w-full h-[1px] bg-[#0A0A0A]/20 mb-8"></div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">Or contact the host directly</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-left">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">+44 7596449024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">WeChat: ExcalibuR-</span>
                </div>
                <div className="flex items-center space-x-3 sm:col-span-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href="mailto:fouxysquad@gmail.com" className="font-medium border-b border-[#0A0A0A]/30 hover:border-[#0A0A0A] transition-colors">fouxysquad@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="bg-[#FAFAFA] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-xs font-semibold uppercase tracking-widest">
          <div className="font-['Playfair_Display'] text-2xl tracking-tight normal-case italic">
            Fouxy Squad.
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gray-500 transition-colors">Manifesto</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Code of Conduct</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Contact</a>
          </div>
          
          <div className="text-gray-500">
            © {new Date().getFullYear()} Fouxy Squad
          </div>
        </div>
      </footer>
    </div>
  );
}
