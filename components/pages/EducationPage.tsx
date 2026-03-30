import React from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { GraduationCap, BookOpen, Video, Users, CheckCircle2, Award, Globe, Rocket } from 'lucide-react';

const EducationPage = () => {
  const features = [
    {
      title: "Student Recruitment Architecture",
      description: "Precision-targeted digital enrollment campaigns designed to optimize the applicant funnel and maximize seat occupancy.",
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Pedagogical Content Strategy",
      description: "Synthesizing complex academic value propositions into compelling narrative structures that resonate with prospective global talent.",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Immersive Virtual Environments",
      description: "High-fidelity digital campus experiences and interactive pedagogical showcases that transcend geographical boundaries.",
      icon: <Video className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Alumni Network Synthesis",
      description: "Advanced digital engagement frameworks to unify global alumni networks and drive institutional advocacy.",
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />
    }
  ];

  const stats = [
    { label: "Enrollment Velocity", value: "+85%", icon: <Rocket className="w-5 h-5" /> },
    { label: "Global Reach", value: "45+", icon: <Globe className="w-5 h-5" /> },
    { label: "Placement Success", value: "98%", icon: <Award className="w-5 h-5" /> },
    { label: "Admin Efficiency", value: "+60%", icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  return (
    <PremiumPageLayout 
      title="Education Marketing Solutions | Touchpointe Digital"
      description="Digital marketing strategies for educational institutions to increase enrollments and engage with students and parents."
    >
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Academic Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.9] mb-8">
              Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Reimagined</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Attract global talent, amplify institutional prestige, and engineer seamless enrollment pipelines through digital-first pedagogy.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 rounded-[2rem] group hover:bg-white/[0.05] transition-all duration-500">
                <div className="text-blue-400 mb-4 bg-blue-500/10 w-10 h-10 rounded-xl flex items-center justify-center border border-blue-500/20 transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <div className="text-[10px] font-black text-purple-400 uppercase tracking-[0.3em] mb-4">Institutional Growth</div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-8">
                Future-Proof <span className="text-gray-500">Academic</span> Branding
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                In an era of borderless learning, institutional success depends on a unified digital presence. We transcend traditional recruitment with data-driven advocacy and immersive storytelling.
              </p>
              <div className="space-y-4">
                {["Predictive Enrollment Modeling", "Global Talent Acquisition", "Digital Campus Integration"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
                    </div>
                    <span className="text-gray-300 font-bold uppercase tracking-wide text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl hover:bg-white/[0.06] transition-all duration-500 group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </PremiumPageLayout>
  );
};

export default EducationPage;
