
import { TrendingUp, Calendar, Target } from 'lucide-react';

export const TrendsVisualization = () => {
  const mockChartData = [
    { month: 'Jul', value: 45 },
    { month: 'Aug', value: 52 },
    { month: 'Sep', value: 48 },
    { month: 'Oct', value: 67 },
    { month: 'Nov', value: 73 },
    { month: 'Dec', value: 86 },
  ];

  const relatedTrends = [
    'trench coat styling', 'leather accessories', 'autumn outerwear', 'vintage fashion', 'minimalist wardrobe',
    'sustainable luxury', 'capsule wardrobe', 'timeless pieces', 'investment dressing', 'heritage brands'
  ];

  return (
    <div className="grid grid-cols-1 gap-8">
      {/* Interest Over Time Chart */}
      <div className="vintage-card p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-playfair font-semibold text-vintage-ivory">Interest Over Time</h3>
            <p className="text-sm font-cormorant text-vintage-pewter mt-1">Search volume analysis</p>
          </div>
          <TrendingUp className="w-6 h-6 text-vintage-gold" />
        </div>
        
        <div className="h-80 relative">
          {/* Chart Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-vintage-gold/5 to-transparent rounded-sm vintage-frame" />
          
          {/* Chart Grid Lines */}
          <div className="absolute inset-0 opacity-20">
            {[0, 25, 50, 75, 100].map((line) => (
              <div 
                key={line} 
                className="absolute w-full border-t border-vintage-pewter/30" 
                style={{ top: `${100 - line}%` }}
              />
            ))}
          </div>
          
          {/* Chart Bars */}
          <div className="h-full flex items-end justify-between px-8 pb-6">
            {mockChartData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center space-y-3">
                <div 
                  className="w-12 bg-gradient-to-t from-vintage-gold to-vintage-gold/80 rounded-t-sm transition-all duration-700 hover:from-vintage-ivory hover:to-vintage-gold vintage-glow cursor-pointer"
                  style={{ height: `${data.value}%` }}
                />
                <span className="text-sm font-cormorant text-vintage-pewter">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="vintage-divider my-4"></div>
        
        <div className="flex items-center text-sm font-cormorant text-vintage-pewter">
          <Calendar className="w-4 h-4 mr-2" />
          Six-month trend analysis • Fashion intelligence data
        </div>
      </div>

      {/* Related Market Intelligence */}
      <div className="vintage-card p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-playfair font-semibold text-vintage-ivory">Market Intelligence</h3>
            <p className="text-sm font-cormorant text-vintage-pewter mt-1">Related trend surveillance</p>
          </div>
          <Target className="w-6 h-6 text-vintage-gold" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {relatedTrends.map((trend, index) => (
            <div
              key={trend}
              className="px-4 py-3 vintage-frame bg-vintage-navy/40 hover:bg-vintage-forest/30 cursor-pointer transition-all duration-300 vintage-glow"
              style={{ 
                fontSize: `${0.875 + (Math.random() * 0.125)}rem`,
                opacity: 0.8 + (Math.random() * 0.2)
              }}
            >
              <span className="font-cormorant text-vintage-ivory hover:text-vintage-gold transition-colors duration-300">
                {trend}
              </span>
            </div>
          ))}
        </div>
        
        <div className="vintage-divider my-6"></div>
        
        <div className="text-xs font-cormorant text-vintage-pewter italic text-center">
          "Intelligence is the ability to adapt to change." — Market Analysis Framework
        </div>
      </div>
    </div>
  );
};
