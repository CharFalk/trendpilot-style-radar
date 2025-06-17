
import { TrendingUp, Eye, Calendar, Target } from 'lucide-react';

const trendingItems = [
  { name: 'Pattern Base', velocity: '+127%', status: 'rising', volume: '2.4K' },
  { name: 'minimalist wardrobe', velocity: '+89%', status: 'rising', volume: '1.8K' },
  { name: 'vintage accessories', velocity: '+45%', status: 'steady', volume: '956' },
  { name: 'sustainable luxury', velocity: '-12%', status: 'declining', volume: '743' },
  { name: 'capsule collection', velocity: '+67%', status: 'rising', volume: '1.2K' },
];

export const TrendingSidebar = () => {
  return (
    <div className="w-80 h-screen bg-white border-l border-gray-200 shadow-subtle flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-gray-900" />
            <h2 className="text-xl font-ibm font-semibold text-gray-900">
              Trending Intelligence
            </h2>
          </div>
          <div className="w-2 h-2 bg-trend-green rounded-full animate-pulse" />
        </div>
        <p className="tech-label">
          Real-time market surveillance
        </p>
      </div>

      {/* Trending Items */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {trendingItems.map((item, index) => (
          <div
            key={item.name}
            className="modern-card p-6 hover:shadow-card transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                {index === 0 ? (
                  <h3 className="font-dancing text-2xl text-gray-900 mb-2 leading-tight">
                    Pattern Base
                  </h3>
                ) : (
                  <h3 className="font-ibm font-medium text-gray-900 text-base mb-2 leading-tight">
                    {item.name}
                  </h3>
                )}
                <div className="flex items-center space-x-3 mb-3">
                  <span className="font-ibm font-bold text-lg text-gray-900">
                    {item.velocity}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-ibm font-medium ${
                      item.status === 'rising'
                        ? 'trend-badge-rising'
                        : item.status === 'steady'
                        ? 'trend-badge-steady'
                        : 'trend-badge-declining'
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="data-divider"></div>
            
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-gray-500" />
                <span className="tech-label">{item.volume} searches</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="tech-label">24h</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-200">
        <div className="data-divider mb-4"></div>
        <div className="flex items-center justify-center space-x-2">
          <Target className="w-4 h-4 text-gray-500" />
          <span className="tech-label">Intelligence Feed Active</span>
        </div>
      </div>
    </div>
  );
};
