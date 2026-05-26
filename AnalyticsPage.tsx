import { TrendingUp, Target, Bookmark, Flame, Play } from 'lucide-react';

const STATS = [
  { label: "Questions Attempted", value: "762", icon: Target, color: "text-blue-400" },
  { label: "Current Accuracy", value: "80%", icon: TrendingUp, color: "text-green-400" },
  { label: "Saved Questions", value: "12", icon: Bookmark, color: "text-purple-400", action: "View Saved" },
  { label: "Study Streak", value: "0", icon: Flame, color: "text-orange-400" },
];

// Fake bar chart data: [weekStart, correct, wrong]
const CHART_DATA = [
  { week: "Nov 3", correct: 35, wrong: 8 },
  { week: "Nov 10", correct: 28, wrong: 12 },
  { week: "Dec 8", correct: 92, wrong: 18 },
  { week: "Dec 15", correct: 70, wrong: 15 },
  { week: "Jan 12", correct: 12, wrong: 22 },
  { week: "Jan 19", correct: 38, wrong: 10 },
  { week: "Feb 16", correct: 45, wrong: 15 },
  { week: "Feb 23", correct: 25, wrong: 8 },
  { week: "Mar 23", correct: 110, wrong: 45 },
  { week: "Mar 30", correct: 55, wrong: 20 },
];

const MAX_HEIGHT = 420; // max px height for bars
const MAX_VALUE = 600;

export default function AnalyticsPage() {
  return (
    <div className="max-w-[1100px] w-full mx-auto">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map((stat, index) => (
          <div key={index} className="bg-[#121c29] border border-[#1e2f42] rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[#8296a8] text-sm mb-1">{stat.label}</div>
                <div className="text-4xl font-bold text-white tracking-tighter">{stat.value}</div>
              </div>
              <div className="p-2 bg-white/5 rounded-2xl">
                <stat.icon size={22} className={stat.color} />
              </div>
            </div>
            {stat.action && (
              <button className="mt-4 text-xs px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#8296a8] transition-colors">
                {stat.action}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Diagnostic Banner */}
      <div className="mb-8 bg-gradient-to-r from-[#0f1f3a] via-[#111e33] to-[#0f1f3a] border border-[#1e3a5f] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8 relative overflow-hidden">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Take the diagnostic to see your predicted score.
          </h3>
          <p className="text-[#8296a8] mb-6">20 questions · ~20 min</p>
          <button className="flex items-center gap-2 px-7 py-3 bg-[#32d5e6] text-black font-bold rounded-full hover:bg-[#2ac4d4] transition-all active:scale-[0.985]">
            <Play size={18} fill="black" /> Start diagnostic
          </button>
        </div>

        {/* Cute illustration */}
        <div className="relative w-64 h-36 md:h-auto flex-shrink-0 flex items-center justify-center">
          <div className="relative">
            {/* Crystal ball */}
            <div className="w-28 h-28 bg-gradient-to-br from-purple-400/80 via-violet-500/90 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-300/40 to-transparent rounded-full" />
            </div>
            
            {/* Characters */}
            <div className="absolute -left-5 -top-3 text-4xl">🌱</div>
            <div className="absolute -right-4 top-3 text-3xl">🌸</div>
            <div className="absolute -left-3 bottom-1 text-2xl">☁️</div>
            <div className="absolute -right-5 bottom-0 text-2xl">🪐</div>
          </div>
        </div>
      </div>

      {/* Activity Trend */}
      <div className="bg-[#121c29] border border-[#1e2f42] rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Activity trend</h2>
            <p className="text-[#8296a8] max-w-md text-sm">
              Wrong in red, correct in green. Harder questions look darker and sit below easier ones in each color. Each bar is one week.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#22c55e]" /> 
              <span className="text-[#8296a8]">679 Correct</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#ef4444]" /> 
              <span className="text-[#8296a8]">193 Wrong</span>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="relative pt-4 pb-8">
          <div className="flex items-end justify-between gap-3 h-[380px]">
            {CHART_DATA.map((weekData, index) => {
              const correctHeight = (weekData.correct / MAX_VALUE) * MAX_HEIGHT;
              const wrongHeight = (weekData.wrong / MAX_VALUE) * MAX_HEIGHT;

              return (
                <div key={index} className="flex-1 flex flex-col items-center group">
                  <div className="relative w-full flex flex-col items-center justify-end" style={{ height: MAX_HEIGHT }}>
                    {/* Correct bar (green) */}
                    <div 
                      className="w-[70%] bg-[#22c55e] rounded-t-md group-hover:brightness-110 transition-all"
                      style={{ height: `${correctHeight}px` }}
                    />
                    {/* Wrong bar (red) */}
                    <div 
                      className="w-[70%] bg-[#ef4444] rounded-b-md group-hover:brightness-110 transition-all"
                      style={{ height: `${wrongHeight}px` }}
                    />
                  </div>

                  {/* X-axis label */}
                  <div className="text-[10px] text-[#59718a] mt-3 font-medium tracking-wider text-center">
                    {weekData.week}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-[#59718a] font-medium pr-4">
            <div>600</div>
            <div>450</div>
            <div>300</div>
            <div>150</div>
            <div>0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
