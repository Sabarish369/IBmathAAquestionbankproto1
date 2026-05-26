import {
  Binary, FunctionSquare, Triangle, BarChart3, Calculator,
  Sparkles, ChevronRight, TrendingUp, Clock, Target,
  BookOpen, Flame, Award, Zap
} from 'lucide-react';

const TOPIC_CARDS = [
  {
    id: 1,
    title: "Number & Algebra",
    description: "Sequences, proofs, induction, complex numbers and more.",
    subtopicCount: 11,
    bg: "bg-gradient-to-br from-[#1a3a2a] to-[#0d2618]",
    border: "border-emerald-500/20",
    titleColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accent: "text-emerald-400",
    buttonBg: "bg-emerald-500 hover:bg-emerald-400",
    icon: Binary,
    decorColor: "text-emerald-500/20",
  },
  {
    id: 2,
    title: "Functions",
    description: "Lines, quadratics, transformations, logs and polynomials.",
    subtopicCount: 16,
    bg: "bg-gradient-to-br from-[#2d1a3a] to-[#1a0d26]",
    border: "border-purple-500/20",
    titleColor: "text-purple-400",
    accentBg: "bg-purple-500/10",
    accent: "text-purple-400",
    buttonBg: "bg-purple-500 hover:bg-purple-400",
    icon: FunctionSquare,
    decorColor: "text-purple-500/20",
  },
  {
    id: 3,
    title: "Geometry & Trigonometry",
    description: "Triangles, unit circle, identities, vectors and planes.",
    subtopicCount: 13,
    bg: "bg-gradient-to-br from-[#1a2a3a] to-[#0d1826]",
    border: "border-blue-500/20",
    titleColor: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accent: "text-blue-400",
    buttonBg: "bg-blue-500 hover:bg-blue-400",
    icon: Triangle,
    decorColor: "text-blue-500/20",
  },
  {
    id: 4,
    title: "Statistics & Probability",
    description: "Distributions, regression, Venn diagrams and counting.",
    subtopicCount: 13,
    bg: "bg-gradient-to-br from-[#3a2a1a] to-[#261a0d]",
    border: "border-orange-500/20",
    titleColor: "text-orange-400",
    accentBg: "bg-orange-500/10",
    accent: "text-orange-400",
    buttonBg: "bg-orange-500 hover:bg-orange-400",
    icon: BarChart3,
    decorColor: "text-orange-500/20",
  },
  {
    id: 5,
    title: "Calculus",
    description: "Derivatives, integrals, kinematics, differential equations and Maclaurin.",
    subtopicCount: 23,
    bg: "bg-gradient-to-br from-[#3a1a1a] to-[#260d0d]",
    border: "border-rose-500/20",
    titleColor: "text-rose-400",
    accentBg: "bg-rose-500/10",
    accent: "text-rose-400",
    buttonBg: "bg-rose-500 hover:bg-rose-400",
    icon: Calculator,
    decorColor: "text-rose-500/20",
  },
];

const QUICK_STATS = [
  { icon: Flame, label: "Day Streak", value: "3", color: "text-orange-400" },
  { icon: Target, label: "Accuracy", value: "78%", color: "text-green-400" },
  { icon: Clock, label: "Time Spent", value: "12h", color: "text-blue-400" },
  { icon: TrendingUp, label: "Questions Done", value: "247", color: "text-purple-400" },
];

export default function HomePage({ onOpenTopic }: { onOpenTopic: (topicId: number) => void }) {
  return (
    <div className="max-w-[1100px] w-full mx-auto">
      {/* Welcome Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Welcome back 👋
        </h1>
        <p className="text-[#8296a8] text-lg">Continue your IB Math AA HL journey</p>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {QUICK_STATS.map((stat, idx) => (
          <div key={idx} className="bg-[#121c29] border border-[#1e2f42] rounded-2xl p-5 flex items-center gap-4">
            <div className="bg-white/5 p-3 rounded-xl">
              <stat.icon size={22} className={stat.color} />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-[#59718a] font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Section */}
      <div className="flex items-center gap-3 mb-6">
        <Sparkles size={24} className="text-[#32d5e6]" />
        <h2 className="text-xl font-bold text-white">Topics</h2>
      </div>

      {/* Topic Cards - Horizontal scrollable on mobile, grid on desktop */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible">
        {TOPIC_CARDS.map((card) => (
          <div
            key={card.id}
            className={`relative min-w-[220px] md:min-w-0 ${card.bg} ${card.border} border rounded-2xl p-5 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
            style={{ minHeight: '280px' }}
            onClick={() => onOpenTopic(card.id)}
          >
            {/* Decorative large icon */}
            <div className="absolute -bottom-4 -right-4 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500">
              <card.icon size={120} className={card.decorColor} strokeWidth={1} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
              <div className={`${card.accentBg} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
                <card.icon size={20} className={card.accent} />
              </div>
              <h3 className={`text-lg font-bold ${card.titleColor} mb-2 leading-tight`}>{card.title}</h3>
              <p className="text-[#8296a8] text-sm leading-relaxed mb-1">{card.description}</p>
              <p className="text-[#59718a] text-xs font-medium mt-2">{card.subtopicCount} subtopics</p>
            </div>

            {/* Open Button */}
            <button
              className={`relative z-10 mt-4 ${card.buttonBg} text-white px-5 py-2.5 rounded-xl text-sm font-bold w-fit flex items-center gap-1.5 transition-colors shadow-lg`}
              onClick={(e) => { e.stopPropagation(); onOpenTopic(card.id); }}
            >
              Open <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Continue Studying Section */}
      <div className="mt-12 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={24} className="text-[#32d5e6]" />
          <h2 className="text-xl font-bold text-white">Continue Studying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <RecentCard
            topicNum="5.3"
            title="Chain rule"
            progress={65}
            color="rose"
          />
          <RecentCard
            topicNum="2.6"
            title="Transformations"
            progress={40}
            color="purple"
          />
          <RecentCard
            topicNum="1.9"
            title="Mathematical Induction"
            progress={20}
            color="emerald"
          />
        </div>
      </div>

      {/* Achievements Row */}
      <div className="mt-12 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Award size={24} className="text-[#32d5e6]" />
          <h2 className="text-xl font-bold text-white">Achievements</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AchievementBadge icon={Flame} title="First Streak" subtitle="3-day streak" unlocked />
          <AchievementBadge icon={Zap} title="Speed Demon" subtitle="10 questions in 5 min" unlocked />
          <AchievementBadge icon={Target} title="Sharpshooter" subtitle="90% accuracy" unlocked={false} />
          <AchievementBadge icon={Award} title="Topic Master" subtitle="Complete 1 topic" unlocked={false} />
        </div>
      </div>
    </div>
  );
}

function RecentCard({ topicNum, title, progress, color }: { topicNum: string; title: string; progress: number; color: string }) {
  const colors: Record<string, { bg: string; bar: string; text: string }> = {
    rose: { bg: 'bg-rose-500/10', bar: 'bg-rose-500', text: 'text-rose-400' },
    purple: { bg: 'bg-purple-500/10', bar: 'bg-purple-500', text: 'text-purple-400' },
    emerald: { bg: 'bg-emerald-500/10', bar: 'bg-emerald-500', text: 'text-emerald-400' },
  };
  const c = colors[color] || colors.rose;

  return (
    <div className="bg-[#121c29] border border-[#1e2f42] rounded-2xl p-5 hover:border-[#2a3e54] transition-colors cursor-pointer group">
      <div className="flex items-center gap-3 mb-3">
        <div className={`${c.bg} px-2.5 py-1 rounded-lg`}>
          <span className={`text-xs font-bold ${c.text}`}>{topicNum}</span>
        </div>
        <span className="text-white font-semibold text-sm">{title}</span>
      </div>
      <div className="w-full bg-[#1e2f42] rounded-full h-2 mb-2">
        <div className={`${c.bar} h-2 rounded-full transition-all duration-500`} style={{ width: `${progress}%` }} />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[#59718a] text-xs">{progress}% complete</span>
        <span className="text-[#32d5e6] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          Continue <ChevronRight size={14} />
        </span>
      </div>
    </div>
  );
}

function AchievementBadge({ icon: Icon, title, subtitle, unlocked }: { icon: any; title: string; subtitle: string; unlocked: boolean }) {
  return (
    <div className={`bg-[#121c29] border border-[#1e2f42] rounded-2xl p-5 flex flex-col items-center text-center ${!unlocked ? 'opacity-40' : ''}`}>
      <div className={`p-3 rounded-full mb-3 ${unlocked ? 'bg-[#32d5e6]/10' : 'bg-white/5'}`}>
        <Icon size={24} className={unlocked ? 'text-[#32d5e6]' : 'text-[#59718a]'} />
      </div>
      <div className="text-sm font-bold text-white">{title}</div>
      <div className="text-xs text-[#59718a] mt-1">{subtitle}</div>
    </div>
  );
}
