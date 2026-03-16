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
  Heart
} from "lucide-react";

export default function SoftAiryLanding() {
  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#4A443D] font-['Inter'] font-light selection:bg-[#E8927C] selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#FBF9F6]/80 backdrop-blur-md border-b border-[#F0EBE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8927C] to-[#FDEEE4] flex items-center justify-center text-white">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <span className="font-medium text-xl tracking-tight text-[#2A2622]">Fouxy Squad</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#community" className="hover:text-[#E8927C] transition-colors">Community</a>
            <a href="#events" className="hover:text-[#E8927C] transition-colors">Events</a>
            <a href="#gallery" className="hover:text-[#E8927C] transition-colors">Gallery</a>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#E8927C] to-[#E5A898] text-white px-6 py-2.5 rounded-full font-medium hover:shadow-md hover:shadow-[#E8927C]/20 transition-all active:scale-95">
              Join Us
            </button>
          </div>
          
          <button className="md:hidden text-[#4A443D]">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-[#FDEEE4] text-[#D47A64] px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8927C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8927C]"></span>
          </span>
          Next event in London
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium text-[#2A2622] leading-[1.1] tracking-tight mb-8 max-w-4xl">
          A gentle space for London's <span className="text-[#E8927C]">design minds</span> to connect.
        </h1>
        
        <p className="text-lg md:text-xl text-[#6A6359] max-w-2xl mb-12 leading-relaxed">
          Fouxy Squad is a welcoming community for UX/UI designers. We gather to share, learn, and grow together in a supportive environment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="bg-gradient-to-r from-[#E8927C] to-[#E5A898] text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#E8927C]/30 transition-all hover:-translate-y-0.5">
            Join the community <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-[#F0EBE3] text-[#4A443D] px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#E5DFD6] transition-colors">
            View upcoming events
          </button>
        </div>
        
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm shadow-[#E8927C]/5 border border-[#F0EBE3]/50">
            <Users className="w-5 h-5 text-[#E8927C]" />
            <span className="font-medium text-[#2A2622]">400+ <span className="text-[#6A6359] font-light">Members</span></span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm shadow-[#E8927C]/5 border border-[#F0EBE3]/50">
            <Calendar className="w-5 h-5 text-[#E8927C]" />
            <span className="font-medium text-[#2A2622]">12+ <span className="text-[#6A6359] font-light">Events</span></span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm shadow-[#E8927C]/5 border border-[#F0EBE3]/50">
            <MapPin className="w-5 h-5 text-[#E8927C]" />
            <span className="font-medium text-[#2A2622]">London <span className="text-[#6A6359] font-light">Based</span></span>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 md:py-32 px-6 md:px-12 bg-[#F0EBE3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-[#2A2622] mb-6">Who we are</h2>
            <p className="text-lg text-[#6A6359] max-w-2xl mx-auto">
              A diverse group of creative professionals aged 20-35, coming together from top companies and institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Stat Cards */}
            <div className="bg-[#FBF9F6] p-8 rounded-3xl shadow-sm border border-white/50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#FDEEE4] rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#E8927C]" />
              </div>
              <h3 className="text-4xl font-medium text-[#2A2622] mb-2">400+</h3>
              <p className="text-[#6A6359]">Active members joining our regular meetups and online discussions.</p>
            </div>
            
            <div className="bg-[#FBF9F6] p-8 rounded-3xl shadow-sm border border-white/50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#FDEEE4] rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-[#E8927C]" />
              </div>
              <h3 className="text-4xl font-medium text-[#2A2622] mb-2">20-35</h3>
              <p className="text-[#6A6359]">Core age range, bringing fresh perspectives and varied experiences.</p>
            </div>
            
            <div className="bg-[#FBF9F6] p-8 rounded-3xl shadow-sm border border-white/50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#FDEEE4] rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#E8927C]" />
              </div>
              <h3 className="text-4xl font-medium text-[#2A2622] mb-2">London</h3>
              <p className="text-[#6A6359]">Our home base where we host in-person events and workshops.</p>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#F0EBE3]/50 text-center">
            <p className="text-[#6A6359] mb-6">Our members bring experience from places like</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Amazon', 'Figma', 'Palantir', 'Burberry', 'UAL', 'RCA', 'Cambridge'].map(company => (
                <span key={company} className="px-5 py-2 bg-[#FBF9F6] rounded-full text-[#4A443D] border border-[#F0EBE3]">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium text-[#2A2622] mb-4">Past & upcoming gatherings</h2>
            <p className="text-lg text-[#6A6359]">12+ events hosted, and many more to come.</p>
          </div>
          <button className="text-[#E8927C] font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View all on Luma <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 bg-white p-4 pr-6 rounded-3xl shadow-sm border border-[#F0EBE3]/50 group hover:shadow-md transition-shadow">
              <div className={`w-full sm:w-48 h-48 rounded-2xl shrink-0 ${
                i % 4 === 0 ? 'bg-[#FDEEE4]' : 
                i % 4 === 1 ? 'bg-[#F0EBE3]' : 
                i % 4 === 2 ? 'bg-[#E5DFD6]' : 'bg-[#E8927C]/20'
              }`}></div>
              <div className="flex flex-col justify-center py-2">
                <div className="flex items-center gap-2 text-sm text-[#E8927C] font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>October {i * 5}, 2023</span>
                </div>
                <h3 className="text-xl font-medium text-[#2A2622] mb-3 group-hover:text-[#E8927C] transition-colors">
                  Design Systems Roundtable & Networking
                </h3>
                <p className="text-[#6A6359] text-sm mb-6 line-clamp-2">
                  Join us for an evening of discussing component libraries, tokens, and how to scale design at your organization.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-[#2A2622] mt-auto">
                  Read recap <ArrowRight className="w-4 h-4 text-[#E8927C]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 bg-[#F0EBE3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-[#2A2622] mb-6">Moments together</h2>
            <p className="text-lg text-[#6A6359] max-w-2xl mx-auto">
              A glimpse into our meetups, workshops, and casual hangouts.
            </p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Masonry placeholders */}
            <div className="w-full h-80 rounded-3xl bg-[#FBF9F6] border border-white/50 break-inside-avoid"></div>
            <div className="w-full h-64 rounded-3xl bg-[#E8927C]/20 border border-white/50 break-inside-avoid"></div>
            <div className="w-full h-96 rounded-3xl bg-[#FDEEE4] border border-white/50 break-inside-avoid"></div>
            <div className="w-full h-72 rounded-3xl bg-[#E5DFD6] border border-white/50 break-inside-avoid"></div>
            <div className="w-full h-80 rounded-3xl bg-[#FDEEE4] border border-white/50 break-inside-avoid"></div>
            <div className="w-full h-64 rounded-3xl bg-[#FBF9F6] border border-white/50 break-inside-avoid"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-[#2A2622] mb-16 text-center">Kind words</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Amazing event! Many thanks for organising it!",
            "Great event - nice to meet everyone",
            "The London design community needs more events like these",
            "Big thanks for organising the event! I had a lot of fun meeting new designers"
          ].map((quote, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#F0EBE3]/50 relative">
              <div className="absolute top-8 right-8 text-[#FDEEE4]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl text-[#2A2622] leading-relaxed relative z-10 mb-8 pt-4">"{quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${i%2===0 ? 'bg-[#FDEEE4]' : 'bg-[#E5DFD6]'}`}></div>
                <div>
                  <div className="font-medium text-[#2A2622]">Community Member</div>
                  <div className="text-sm text-[#6A6359]">Event Attendee</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect & CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FDEEE4] mt-12 relative overflow-hidden">
        {/* Soft decorative background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E8927C]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-medium text-[#2A2622] mb-8">Ready to join the squad?</h2>
          <p className="text-xl text-[#D47A64] mb-12 max-w-2xl mx-auto">
            Stay updated on our next gatherings and connect with fellow designers in London.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="bg-white text-[#2A2622] px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all">
              <Mail className="w-5 h-5 text-[#E8927C]" /> Join Newsletter
            </button>
            <button className="bg-[#2A2622] text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-sm hover:bg-[#1A1715] transition-all">
              See events on Luma
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl hover:bg-white transition-colors flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-[#E8927C]" />
              </div>
              <span className="font-medium text-[#2A2622]">Instagram</span>
              <span className="text-sm text-[#D47A64]">@fouxy_squad</span>
            </a>
            
            <a href="#" className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl hover:bg-white transition-colors flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 text-[#E8927C]" />
              </div>
              <span className="font-medium text-[#2A2622]">LinkedIn</span>
              <span className="text-sm text-[#D47A64]">Fouxy Squad</span>
            </a>
            
            <a href="#" className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl hover:bg-white transition-colors flex flex-col items-center gap-3 group col-span-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5 text-[#E8927C]" />
              </div>
              <span className="font-medium text-[#2A2622]">Luma</span>
              <span className="text-sm text-[#D47A64]">Tickets & RSVPs</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FBF9F6] border-t border-[#F0EBE3] py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E8927C] to-[#FDEEE4] flex items-center justify-center">
              <Heart className="w-3 h-3 fill-white" />
            </div>
            <span className="font-medium text-[#2A2622]">Fouxy Squad</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-[#6A6359]">
            <a href="#" className="hover:text-[#E8927C] transition-colors">Code of Conduct</a>
            <a href="#" className="hover:text-[#E8927C] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#E8927C] transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-[#6A6359]">
            © {new Date().getFullYear()} Fouxy Squad. London.
          </div>
        </div>
      </footer>
    </div>
  );
}
