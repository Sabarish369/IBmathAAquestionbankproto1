import { useState, cloneElement } from 'react';
import type { ReactNode, ReactElement } from 'react';
import {
  Cloud, ChevronDown, Home, BarChart2,
  Database, Binary, FunctionSquare,
  Triangle, BarChart3, Calculator, ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon, FileText, Play
} from 'lucide-react';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import AnalyticsPage from './AnalyticsPage';

const TOPICS = [
  {
    id: 1,
    title: "1. Number and Algebra",
    icon: <Binary size={18} />,
    color: "text-blue-400",
    sections: [
      {
        name: "Algebra",
        subtopics: [
          "1.1 Numbers - Rounding",
          "1.2-1.3 Arithmetic sequences",
          "1.4 Geometric sequences",
          "1.5 Percentage change - Financial",
          "1.6 Binomial theorem",
          "1.7 Deductive proof",
          "1.8 Methods of proof",
          "1.9 Mathematical Induction",
          "1.10 Systems of linear equations"
        ]
      },
      {
        name: "Complex Numbers",
        subtopics: [
          "1.11-1.12 Complex numbers (Cartesian form)",
          "1.13-1.15 Complex numbers (Polar form)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "2. Functions",
    icon: <FunctionSquare size={18} />,
    color: "text-purple-400",
    sections: [
      {
        name: "Lines and Quadratics",
        subtopics: [
          "2.1 Lines",
          "2.2 Quadratics"
        ]
      },
      {
        name: "Functions",
        subtopics: [
          "2.3 Functions - Domain - Range - Graph",
          "2.4-2.5 Composition - Inverse function",
          "2.6 Transformations",
          "2.7 Asymptotes"
        ]
      },
      {
        name: "Exponents and Logarithms",
        subtopics: [
          "2.8 Exponents",
          "2.9 Logarithms",
          "2.10 Exponential Equations"
        ]
      },
      {
        name: "Polynomials & Inequalities",
        subtopics: [
          "2.11-2.12 Polynomials",
          "2.13-2.14 Rational functions - Inequalities",
          "2.15 Modulus equations and inequalities",
          "2.16 Symmetries - More transformations"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "3. Geometry and Trigonometry",
    icon: <Triangle size={18} />,
    color: "text-green-400",
    sections: [
      {
        name: "Trigonometry",
        subtopics: [
          "3.1-3.3 3D Geometry - Triangles",
          "3.4 Arcs and Sectors",
          "3.5 sin, cos, tan on the unit circle - Identities",
          "3.6 Trigonometric equations",
          "3.7 Trigonometric functions",
          "3.8 Further trigonometric identities - equations",
          "3.9 Further trigonometric functions"
        ]
      },
      {
        name: "Vectors",
        subtopics: [
          "3.10-3.12 Basic algebra of vectors",
          "3.13-3.14 Vector equation of a line",
          "3.15 Vectors in Kinematics",
          "3.16 Cross product",
          "3.17 Planes",
          "3.18-3.19 Intersections (lines & Planes) - Distances"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "4. Statistics and Probability",
    icon: <BarChart3 size={18} />,
    color: "text-orange-400",
    sections: [
      {
        name: "Statistics",
        subtopics: [
          "4.1-4.3 Statistics - Basic Concepts",
          "4.1-4.3 Statistics (HL)",
          "4.4 Linear regression"
        ]
      },
      {
        name: "Probability",
        subtopics: [
          "4.5-4.7 Probability I (Venn diagrams - tables)",
          "4.8 Probability II (Tree diagrams)"
        ]
      },
      {
        name: "Distributions",
        subtopics: [
          "4.9 Discrete distributions in general",
          "4.9 Discrete distributions in general (HL)",
          "4.10 Binomial distribution",
          "4.11 Normal distribution",
          "4.12 Continuous distributions in general"
        ]
      },
      {
        name: "Counting",
        subtopics: [
          "4.13 Counting and probability"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "5. Calculus",
    icon: <Calculator size={18} />,
    color: "text-red-400",
    sections: [
      {
        name: "Differentiation",
        subtopics: [
          "5.1 The concept of the limit [optional]",
          "5.2 Derivatives - Basic rules",
          "5.3 Chain rule",
          "5.4 Tangent and Normal lines",
          "5.5-5.6 Monotony and Concavity",
          "5.7 The graph of f '",
          "5.8 Optimisation"
        ]
      },
      {
        name: "Integration",
        subtopics: [
          "5.9-5.10 Indefinite integrals",
          "5.11 Definite integrals - Areas"
        ]
      },
      {
        name: "Kinematics",
        subtopics: [
          "5.12 Kinematics"
        ]
      },
      {
        name: "Further Differentiation",
        subtopics: [
          "5.13 More derivatives",
          "5.14 Implicit differentiation - More kinematics",
          "5.15 Related rates",
          "5.16-5.17 Limits - L'Hôpital - f ' from 1st principles"
        ]
      },
      {
        name: "Further Integration",
        subtopics: [
          "5.18-5.19 More integrals - Further substitution",
          "5.20 Integration by parts",
          "5.21 Further Areas and Volumes",
          "5.22 Differential equations"
        ]
      },
      {
        name: "Maclaurin",
        subtopics: [
          "5.23 Maclaurin series - Extension of binomial thm"
        ]
      }
    ]
  }
];

type AppView = 'home' | 'questionbank' | 'analytics';

function QuestionBankApp() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(1);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<AppView>('home');

  const handleSubtopicClick = (sub: string) => {
    setSelectedSubtopic(sub);
    setCurrentView('questionbank');
  };

  const handleOpenTopic = (topicId: number) => {
    setExpandedTopic(topicId);
    setSelectedSubtopic(null);
    setCurrentView('questionbank');
  };

  const handleGoHome = () => {
    setCurrentView('home');
    setSelectedSubtopic(null);
  };

  return (
    <div className="flex h-screen w-full bg-[#0a0b0d] text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-[300px] bg-[#0c1622] h-full flex flex-col overflow-y-auto shrink-0 border-r border-[#152331] scrollbar-hide">
        <div className="flex items-center gap-2.5 px-6 pt-7 pb-5">
          <Cloud className="text-[#32d5e6] fill-[#32d5e6]" size={28} />
          <span className="text-xl font-bold tracking-wide text-white">OnePrep</span>
        </div>

        <div className="px-4 mb-3">
          <button className="w-full bg-[#172534] text-[15px] text-left px-4 py-2.5 rounded-lg flex items-center justify-between font-medium text-gray-200 hover:bg-[#1e2f42] transition-colors">
            Math AA HL
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-0.5">
          <NavItem
            icon={<Home size={20} />}
            label="Home"
            active={currentView === 'home'}
            onClick={handleGoHome}
          />
          <NavItem
            icon={<BarChart2 size={20} />}
            label="Analytics"
            badge="New"
            active={currentView === 'analytics'}
            onClick={() => setCurrentView('analytics')}
          />

          <SectionTitle>TOPICS</SectionTitle>
          {TOPICS.map((topic) => (
            <div key={topic.id} className="mb-1">
              <button
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                  expandedTopic === topic.id ? 'bg-[#1a2b3e] text-white' : 'text-[#8296a8] hover:bg-[#1a2736] hover:text-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={topic.color}>{topic.icon}</span>
                  <span>{topic.title}</span>
                </div>
                {expandedTopic === topic.id ? <ChevronUpIcon size={14} /> : <ChevronDownIcon size={14} />}
              </button>

              {expandedTopic === topic.id && (
                <div className="pl-4 pr-2 py-1 space-y-3 mt-1 border-l border-[#1e2f42] ml-5">
                  {topic.sections.map((section, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] font-bold text-[#59718a] uppercase tracking-wider mb-1.5 pl-2">
                        {section.name}
                      </div>
                      <div className="space-y-0.5">
                        {section.subtopics.map((sub, sidx) => (
                          <button
                            key={sidx}
                            onClick={() => handleSubtopicClick(sub)}
                            className={`w-full text-left px-3 py-1.5 rounded-md text-[13px] transition-colors ${
                              selectedSubtopic === sub && currentView === 'questionbank'
                                ? 'bg-[#32d5e6]/10 text-[#32d5e6] font-medium'
                                : 'text-[#8296a8] hover:bg-[#1a2736] hover:text-gray-200'
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

        </nav>

        <div className="p-3 space-y-0.5 mt-auto">
          <NavItem icon={<BarChart2 size={20} />} label="Upgrade" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto relative p-8 md:p-14">
        {currentView === 'home' ? (
          <HomePage onOpenTopic={handleOpenTopic} />
        ) : currentView === 'analytics' ? (
          <AnalyticsPage />
        ) : (
          <div className="max-w-[900px] w-full mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="text-[#32d5e6]">
                <Database size={38} />
              </div>
              <div>
                <h1 className="text-[34px] font-semibold tracking-tight text-white leading-tight">Question Bank</h1>
                <p className="text-[#8296a8] text-lg">IB Math Analysis & Approaches HL</p>
              </div>
            </div>

            {/* Content Area */}
            {selectedSubtopic ? (
              <div className="bg-[#121c29] border border-[#1e2f42] rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="bg-[#32d5e6]/10 p-4 rounded-full mb-6">
                  <FileText size={48} className="text-[#32d5e6]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{selectedSubtopic}</h2>
                <p className="text-[#8296a8] mb-8 max-w-md">
                  Ready to practice? Select a mode below to start answering questions for this topic.
                </p>
                <button className="bg-[#32d5e6] text-black px-8 py-3 rounded-full text-[16px] font-bold flex items-center gap-2 hover:bg-[#2bc4d4] transition-colors">
                  <Play size={20} fill="black" /> Start Practice
                </button>
              </div>
            ) : (
              <div className="bg-[#121c29] border border-[#1e2f42] rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="bg-[#1e2f42] p-4 rounded-full mb-6">
                  <Cloud size={48} className="text-[#59718a]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Select a Topic</h2>
                <p className="text-[#8296a8] max-w-md">
                  Choose a topic and subtopic from the sidebar to begin practicing IB Math AA HL questions.
                </p>
              </div>
            )}

            {/* Footer Text */}
            <div className="mt-20 text-center text-[12.5px] leading-[1.6] text-[#636c77] pb-12">
              <p className="mb-4 uppercase font-bold tracking-widest text-[11px]">
                IB MATH ANALYSIS AND APPROACHES HIGHER LEVEL
              </p>
              <p className="max-w-[850px] mx-auto opacity-70">
                International Baccalaureate (IB) is a registered trademark of the International Baccalaureate Organization. This resource is not endorsed by or affiliated with the IBO.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, badge, onClick }: { icon: ReactNode; label: string; active?: boolean; badge?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
        active
          ? 'bg-[#28394a] text-white'
          : 'text-[#8296a8] hover:bg-[#1a2736] hover:text-gray-200'
      }`}
    >
      <div className="flex items-center gap-3">
        {cloneElement(icon as ReactElement<any>, { className: active ? 'text-white' : 'text-[#6c8396]' })}
        <span>{label}</span>
      </div>
      <div className="flex items-center">
        {badge && (
          <span className="bg-[#32d5e6] text-black text-[11px] font-bold px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </button>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="px-3 pt-6 pb-2 text-[12px] font-bold text-[#59718a] tracking-wider uppercase">
      {children}
    </div>
  );
}

export default function App() {
  const [showApp, setShowApp] = useState(false);

  if (!showApp) {
    return <LandingPage onEnterApp={() => setShowApp(true)} />;
  }

  return <QuestionBankApp />;
}
