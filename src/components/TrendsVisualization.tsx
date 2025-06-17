
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
      <div className="modern-card p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-ibm font-semibold text-clean-gray-800">Interest Over Time</h3>
            <p className="text-sm font-ibm text-clean-gray-500 mt-1">Search volume analysis</p>
          </div>
          <TrendingUp className="w-6 h-6 text-clean-gray-900" />
        </div>
        
        <div className="h-80 relative">
          {/* Chart Background */}
          <div className="absolute inset-0 bg-clean-gray-50 rounded-lg border border-clean-gray-200" />
          
          {/* Chart Grid Lines */}
          <div className="absolute inset-0 opacity-20">
            {[0, 25, 50, 75, 100].map((line) => (
              <div 
                key={line} 
                className="absolute w-full border-t border-clean-gray-300" 
                style={{ top: `${100 - line}%` }}
              />
            ))}
          </div>
          
          {/* Chart Bars */}
          <div className="h-full flex items-end justify-between px-8 pb-6">
            {mockChartData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center space-y-3">
                <div 
                  className="w-12 bg-gradient-to-t from-clean-gray-800 to-clean-gray-600 rounded-t-lg transition-all duration-700 hover:from-clean-gray-900 hover:to-clean-gray-800 cursor-pointer shadow-soft"
                  style={{ height: `${data.value}%` }}
                />
                <span className="tech-label">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="data-divider"></div>
        
        <div className="flex items-center tech-label">
          <Calendar className="w-4 h-4 mr-2" />
          Six-month trend analysis • Fashion intelligence data
        </div>
      </div>

      {/* Related Market Intelligence */}
      <div className="modern-card p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-ibm font-semibold text-clean-gray-800">Market Intelligence</h3>
            <p className="text-sm font-ibm text-clean-gray-500 mt-1">Related trend surveillance</p>
          </div>
          <Target className="w-6 h-6 text-clean-gray-900" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {relatedTrends.map((trend, index) => (
            <div
              key={trend}
              className="px-4 py-3 bg-clean-gray-50 border border-clean-gray-200 rounded-lg hover:bg-clean-gray-100 cursor-pointer transition-all duration-300 shadow-soft hover:shadow-card"
            >
              <span className="font-ibm text-clean-gray-700 hover:text-clean-gray-900 transition-colors duration-300 text-sm">
                {trend}
              </span>
            </div>
          ))}
        </div>
        
        <div className="data-divider"></div>
        
        <div className="tech-label text-center italic">
          "Intelligence is the ability to adapt to change." — Market Analysis Framework
        </div>
      </div>
    </div>
  );
};
