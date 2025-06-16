
import { Flame, ArrowUp, ArrowDown, Minus } from 'lucide-react';

export const TrendingSidebar = () => {
  const trendingTerms = [
    { term: 'coquette aesthetic', trend: 'up', change: '+127%', category: 'Style' },
    { term: 'dark academia outfit', trend: 'up', change: '+89%', category: 'Style' },
    { term: 'sustainable fashion', trend: 'up', change: '+56%', category: 'Conscious' },
    { term: 'vintage band tees', trend: 'stable', change: '0%', category: 'Vintage' },
    { term: 'cottagecore dress', trend: 'down', change: '-23%', category: 'Style' },
    { term: 'platform boots', trend: 'up', change: '+34%', category: 'Footwear' },
    { term: 'y2k accessories', trend: 'up', change: '+78%', category: 'Accessories' },
    { term: 'minimalist jewelry', trend: 'stable', change: '+2%', category: 'Jewelry' },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="w-3 h-3 text-green-400" />;
      case 'down':
        return <ArrowDown className="w-3 h-3 text-red-400" />;
      default:
        return <Minus className="w-3 h-3 text-yellow-400" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-yellow-400';
    }
  };

  return (
    <div className="w-80 h-screen bg-card/30 border-l border-border/50 p-6 overflow-y-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Flame className="w-5 h-5 text-trend-pink-400" />
        <h2 className="text-lg font-semibold text-foreground">Trending This Week</h2>
      </div>

      <div className="space-y-3">
        {trendingTerms.map((item, index) => (
          <div
            key={item.term}
            className="group p-4 bg-card/50 border border-border/30 rounded-lg hover:border-trend-teal-500/30 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-muted-foreground">#{index + 1}</span>
                {getTrendIcon(item.trend)}
              </div>
              <span className={`text-xs font-medium ${getTrendColor(item.trend)}`}>
                {item.change}
              </span>
            </div>
            
            <h4 className="font-medium text-foreground group-hover:text-trend-teal-400 transition-colors duration-200 mb-1">
              {item.term}
            </h4>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground bg-secondary/30 px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gradient-to-br from-trend-teal-500/10 to-trend-pink-500/10 rounded-lg border border-trend-teal-500/20">
        <h3 className="text-sm font-semibold text-foreground mb-2">Quick Stats</h3>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Total searches tracked:</span>
            <span className="text-trend-teal-400 font-medium">1.2M+</span>
          </div>
          <div className="flex justify-between">
            <span>Active trends:</span>
            <span className="text-trend-pink-400 font-medium">247</span>
          </div>
          <div className="flex justify-between">
            <span>Last updated:</span>
            <span className="text-foreground">2 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
