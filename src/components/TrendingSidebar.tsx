
import { TrendingUp, ArrowUp, ArrowDown, Minus, Clock } from 'lucide-react';

export const TrendingSidebar = () => {
  const trendingTerms = [
    { term: 'leather trench coat', velocity: '+127%', status: 'rising', category: 'Outerwear' },
    { term: 'vintage silk scarves', velocity: '+89%', status: 'rising', category: 'Accessories' },
    { term: 'wool blazer oversized', velocity: '+56%', status: 'rising', category: 'Tailoring' },
    { term: 'cashmere turtleneck', velocity: '+12%', status: 'steady', category: 'Knitwear' },
    { term: 'midi pencil skirt', velocity: '-8%', status: 'declining', category: 'Bottoms' },
    { term: 'patent leather boots', velocity: '+34%', status: 'rising', category: 'Footwear' },
    { term: 'pearl jewelry vintage', velocity: '+78%', status: 'rising', category: 'Jewelry' },
    { term: 'tweed jacket', velocity: '+2%', status: 'steady', category: 'Heritage' },
  ];

  const getVelocityIcon = (status: string) => {
    switch (status) {
      case 'rising':
        return <ArrowUp className="w-3 h-3 text-clean-green" />;
      case 'declining':
        return <ArrowDown className="w-3 h-3 text-clean-red" />;
      default:
        return <Minus className="w-3 h-3 text-clean-blue" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'rising':
        return 'trend-badge-rising';
      case 'declining':
        return 'trend-badge-declining';
      default:
        return 'trend-badge-steady';
    }
  };

  const getVelocityColor = (status: string) => {
    switch (status) {
      case 'rising':
        return 'text-clean-green';
      case 'declining':
        return 'text-clean-red';
      default:
        return 'text-clean-blue';
    }
  };

  return (
    <div className="w-96 h-screen bg-white border-l border-clean-gray-200 shadow-soft p-8 overflow-y-auto">
      <div className="flex items-center space-x-3 mb-8">
        <TrendingUp className="w-6 h-6 text-clean-blue" />
        <div>
          <h2 className="text-xl font-ibm font-semibold text-clean-gray-800">Market Intelligence</h2>
          <p className="tech-label">Current Week Analysis</p>
        </div>
      </div>

      <div className="space-y-4">
        {trendingTerms.map((item, index) => (
          <div
            key={item.term}
            className="group p-5 modern-card hover:bg-clean-gray-50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-mono text-clean-gray-400 font-medium">
                  #{String(index + 1).padStart(2, '0')}
                </span>
                {getVelocityIcon(item.status)}
              </div>
              <span className={`text-sm font-mono font-semibold ${getVelocityColor(item.status)}`}>
                {item.velocity}
              </span>
            </div>
            
            <h4 className="font-ibm font-semibold text-clean-gray-800 group-hover:text-clean-blue transition-colors duration-300 mb-3 leading-tight">
              {item.term}
            </h4>
            
            <div className="flex items-center justify-between">
              <span className="tech-label bg-clean-gray-100 px-3 py-1 rounded-md border border-clean-gray-200">
                {item.category}
              </span>
              <span className={`text-xs font-mono px-2 py-1 rounded-md ${getStatusBadge(item.status)}`}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 modern-card bg-clean-gray-50">
        <h3 className="text-base font-ibm font-semibold text-clean-blue mb-4">Intelligence Summary</h3>
        <div className="space-y-3 text-sm font-ibm text-clean-gray-700">
          <div className="flex justify-between items-center">
            <span className="tech-label">Active Surveillance:</span>
            <span className="text-clean-blue font-mono font-semibold">1,247 terms</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="tech-label">Rising Trends:</span>
            <span className="text-clean-green font-mono font-semibold">89</span>
          </div>
          <div className="data-divider"></div>
          <div className="flex justify-between items-center">
            <span className="tech-label flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              Last Updated:
            </span>
            <span className="text-clean-gray-600 font-mono">3 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
