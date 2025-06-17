
import { TrendingUp, Calendar } from 'lucide-react';

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
    <div className="grid grid-cols-1 gap-6">
      {/* Interest Over Time Chart */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 font-mono">Interest Over Time</h3>
          <TrendingUp className="w-5 h-5 text-gray-600" />
        </div>
        
        <div className="h-64 relative">
          {/* Mock Chart Area */}
          <div className="absolute inset-0 bg-gray-50 rounded-lg border border-gray-100" />
          
          {/* Chart Bars */}
          <div className="h-full flex items-end justify-between px-4 pb-4">
            {mockChartData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center space-y-2">
                <div 
                  className="w-8 bg-gray-800 rounded-t-sm transition-all duration-500 hover:bg-gray-700"
                  style={{ height: `${data.value}%` }}
                />
                <span className="text-xs text-gray-600 font-mono">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="font-mono">Last 6 months</span>
        </div>
      </div>

      {/* Related Trends */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 font-mono mb-4">Related Trends</h3>
        <div className="flex flex-wrap gap-3">
          {relatedTrends.map((trend, index) => (
            <div
              key={trend}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-300 cursor-pointer transition-all duration-200 font-mono"
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
