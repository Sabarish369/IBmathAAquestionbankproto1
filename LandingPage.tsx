import { useState, useEffect } from 'react';
import { 
  Cloud, ArrowRight, Play, Sparkles, 
  Target, BookOpen, BarChart3, Clock, Award,
  Calculator, FunctionSquare, Triangle, Binary, BarChart2,
  ChevronRight, Users, TrendingUp
} from 'lucide-react';

const TOPICS = [
  { icon: Binary, name: "Number & Algebra", color: "from-blue-500 to-cyan-400", count: "15 subtopics" },
  { icon: FunctionSquare, name: "Functions", color: "from-purple-500 to-pink-400", count: "16 subtopics" },
  { icon: Triangle, name: "Geometry & Trig", color: "from-green-500 to-emerald-400", count: "19 subtopics" },
  { icon: BarChart2, name: "Statistics & Probability", color: "from-orange-500 to-red-400", count: "13 subtopics" },
  { icon: Calculator, name: "Calculus", color: "from-red-500 to-rose-400", count: "23 subtopics" },
];

const FEATURES = [
  {
    icon: Target,
    title: "Diagnostic Assessment",
    description: "Identify your weak areas across all 5 IB Math AA HL topics with our comprehensive diagnostic test."
  },
  {
    icon: BookOpen,
    title: "Curated Question Bank",
    description: "Access 1000+ exam-style questions organized by topic and difficulty level."
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed analytics and performance insights."
  },
  {
    icon: Clock,
    title: "Timed Practice",
    description: "Simulate exam conditions with our Question Rush mode against the clock."
  }
];

const STEPS = [
  {
    number: "01",
    title: "Take the Diagnostic",
    description: "Complete our comprehensive assessment to identify your strengths and weaknesses across all IB Math topics.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    number: "02",
    title: "Get Your Study Plan",
    description: "Receive a personalized study schedule targeting your weak areas while reinforcing your strengths.",
    color: "from-purple-500 to-pink-400"
  },
  {
    number: "03",
    title: "Master the Content",
    description: "Practice with targeted questions, detailed solutions, and track your progress to a Level 7.",
    color: "from-green-500 to-emerald-400"
  }
];

export default function LandingPage({ onEnterApp }: { onEnterApp: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTopic, setHoveredTopic] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0b0d]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Cloud className="text-[#32d5e6] fill-[#32d5e6]" size={32} />
            <span className="text-xl font-bold tracking-wide">OnePrep</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink label="Topics" />
            <NavLink label="Features" />
            <NavLink label="How It Works" />
            <NavLink label="Pricing" />
          </div>

          <button 
            onClick={onEnterApp}
            className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-[#32d5e6] transition-all duration-300 flex items-center gap-2 group"
          >
            Open App
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#32d5e6]/10 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Sparkles className="text-[#32d5e6]" size={16} />
              <span className="text-sm font-medium text-gray-300">IB Math AA HL Question Bank</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master IB Math{' '}
              <span className="bg-gradient-to-r from-[#32d5e6] via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AA HL
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              The most comprehensive question bank for IB Mathematics Analysis and Approaches Higher Level. 
              Practice with 1000+ exam-style questions, track your progress, and achieve that Level 7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onEnterApp}
                className="bg-[#32d5e6] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2bc4d4] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#32d5e6]/25"
              >
                <Play size={20} fill="black" />
                Start Practicing
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                <Target size={20} />
                Take Diagnostic
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-white/10">
              <Stat number="1000+" label="Questions" />
              <Stat number="5" label="Topics Covered" />
              <Stat number="86" label="Subtopics" />
              <Stat number="100%" label="Free Access" />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0b0d] via-[#0d1117] to-[#0a0b0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Syllabus Coverage</h2>
            <p className="text-gray-400 text-lg">Every topic from the IB Math AA HL curriculum, organized for efficient study</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {TOPICS.map((topic, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredTopic(idx)}
                onMouseLeave={() => setHoveredTopic(null)}
                className={`relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-500 ${
                  hoveredTopic === idx ? 'scale-105 border-[#32d5e6]/50 shadow-2xl shadow-[#32d5e6]/10' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4`}>
                  <topic.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{topic.name}</h3>
                <p className="text-sm text-gray-400">{topic.count}</p>
                
                {hoveredTopic === idx && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#32d5e6] to-transparent rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Steps to Your Dream Score</h2>
            <p className="text-gray-400 text-lg">A proven system to master IB Math AA HL</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#32d5e6] to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur" />
                <div className="relative p-8 rounded-2xl border border-white/10 bg-[#121c29] h-full">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-6`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-gray-400 text-lg">Powerful tools designed for IB Math students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#32d5e6]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#32d5e6]/10 flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-[#32d5e6]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Users size={40} className="text-[#32d5e6] mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-gray-400">Active Students</div>
            </div>
            <div className="p-6">
              <TrendingUp size={40} className="text-[#32d5e6] mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">94%</div>
              <div className="text-gray-400">Improvement Rate</div>
            </div>
            <div className="p-6">
              <Award size={40} className="text-[#32d5e6] mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">Level 7</div>
              <div className="text-gray-400">Target Achievement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ace Your IB Math Exam?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of students who are already mastering IB Math AA HL with our comprehensive question bank.
          </p>
          <button 
            onClick={onEnterApp}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#32d5e6] transition-all duration-300 inline-flex items-center gap-3"
          >
            Get Started Free
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Cloud className="text-[#32d5e6] fill-[#32d5e6]" size={24} />
            <span className="font-bold">OnePrep</span>
          </div>
          <p className="text-sm text-gray-500">
            IB Math AA HL Question Bank © 2026. Not affiliated with the International Baccalaureate Organization.
          </p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <button className="text-gray-300 hover:text-white font-medium transition-colors">
      {label}
    </button>
  );
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{number}</div>
      <div className="text-sm text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  );
}
