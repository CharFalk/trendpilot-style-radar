
import { TrendingUp, Users, Globe, Calendar } from 'lucide-react';

export const TrendsVisualization = () => {
  const mockChartData = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 52 },
    { month: 'Mar', value: 48 },
    { month: 'Apr', value: 67 },
    { month: 'May', value: 73 },
    { month: 'Jun', value: 86 },
  ];

  const relatedTrends = [
    'mini skirt', 'pleated skirt', 'vintage denim', 'high waist', 'y2k fashion',
    'street style', 'sustainable fashion', 'thrifted finds'
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Interest Over Time Chart */}
      <div className="trend-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Interest Over Time</h3>
          <TrendingUp className="w-5 h-5 text-trend-teal-400" />
        </div>
        
        <div className="h-64 relative">
          {/* Mock Chart Area */}
          <div className="absolute inset-0 bg-gradient-to-t from-trend-teal-500/10 to-transparent rounded-lg" />
          
          {/* Chart Bars */}
          <div className="h-full flex items-end justify-between px-4 pb-4">
            {mockChartData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center space-y-2">
                <div 
                  className="w-8 bg-gradient-to-t from-trend-teal-500 to-trend-teal-400 rounded-t-sm transition-all duration-500 hover:from-trend-pink-500 hover:to-trend-pink-400"
                  style={{ height: `${data.value}%` }}
                />
                <span className="text-xs text-muted-foreground">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          Last 6 months
        </div>
      </div>

      {/* Demographics Heatmap */}
      <div className="trend-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Demographics</h3>
          <Users className="w-5 h-5 text-trend-pink-400" />
        </div>
        
        <div className="space-y-4">
          {[
            { label: 'Gen Z (18-24)', percentage: 85, color: 'bg-trend-pink-500' },
            { label: 'Millennials (25-34)', percentage: 67, color: 'bg-trend-teal-500' },
            { label: 'Gen X (35-44)', percentage: 34, color: 'bg-trend-pink-400' },
            { label: 'Baby Boomers (45+)', percentage: 12, color: 'bg-trend-teal-400' },
          ].map((demo) => (
            <div key={demo.label} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground">{demo.label}</span>
                <span className="text-muted-foreground">{demo.percentage}%</span>
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${demo.color} transition-all duration-700`}
                  style={{ width: `${demo.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex items-center text-sm text-muted-foreground">
          <Globe className="w-4 h-4 mr-2" />
          Global data
        </div>
      </div>

      {/* Related Trends */}
      <div className="lg:col-span-2 trend-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Related Trends</h3>
        <div className="flex flex-wrap gap-3">
          {relatedTrends.map((trend, index) => (
            <div
              key={trend}
              className="px-4 py-2 bg-secondary/30 border border-border/30 rounded-full text-sm text-secondary-foreground hover:bg-secondary/50 hover:border-trend-teal-500/30 cursor-pointer transition-all duration-200"
              style={{ 
                fontSize: `${0.875 + (Math.random() * 0.25)}rem`,
                opacity: 0.7 + (Math.random() * 0.3)
              }}
            >
              {trend}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
