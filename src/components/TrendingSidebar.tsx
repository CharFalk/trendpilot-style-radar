
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
        return <ArrowUp className="w-3 h-3 text-vintage-gold" />;
      case 'declining':
        return <ArrowDown className="w-3 h-3 text-vintage-pewter" />;
      default:
        return <Minus className="w-3 h-3 text-vintage-ivory" />;
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
        return 'text-vintage-gold';
      case 'declining':
        return 'text-vintage-pewter';
      default:
        return 'text-vintage-ivory';
    }
  };

  return (
    <div className="w-96 h-screen bg-card/80 vintage-frame p-8 overflow-y-auto">
      <div className="flex items-center space-x-3 mb-8">
        <TrendingUp className="w-6 h-6 text-vintage-gold" />
        <div>
          <h2 className="text-xl font-playfair font-semibold text-vintage-ivory">Market Intelligence</h2>
          <p className="text-sm font-cormorant text-vintage-pewter tracking-wide">Current Week Analysis</p>
        </div>
      </div>

      <div className="space-y-4">
        {trendingTerms.map((item, index) => (
          <div
            key={item.term}
            className="group p-5 vintage-card hover:bg-vintage-navy/40 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-cormorant text-vintage-pewter font-medium">
                  #{String(index + 1).padStart(2, '0')}
                </span>
                {getVelocityIcon(item.status)}
              </div>
              <span className={`text-sm font-crimson font-semibold ${getVelocityColor(item.status)}`}>
                {item.velocity}
              </span>
            </div>
            
            <h4 className="font-crimson font-semibold text-vintage-ivory group-hover:text-vintage-gold transition-colors duration-300 mb-3 leading-tight">
              {item.term}
            </h4>
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-cormorant text-vintage-pewter bg-vintage-oxblood/20 px-3 py-1 rounded-sm border border-vintage-oxblood/30">
                {item.category}
              </span>
              <span className={`text-xs font-cormorant px-2 py-1 rounded-sm ${getStatusBadge(item.status)}`}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 vintage-frame bg-gradient-to-br from-vintage-oxblood/20 to-vintage-forest/20">
        <h3 className="text-base font-playfair font-semibold text-vintage-gold mb-4">Intelligence Summary</h3>
        <div className="space-y-3 text-sm font-cormorant text-vintage-ivory">
          <div className="flex justify-between items-center">
            <span className="text-vintage-pewter">Active Surveillance:</span>
            <span className="text-vintage-gold font-semibold">1,247 terms</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-vintage-pewter">Rising Trends:</span>
            <span className="text-vintage-gold font-semibold">89</span>
          </div>
          <div className="vintage-divider my-3"></div>
          <div className="flex justify-between items-center">
            <span className="text-vintage-pewter flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              Last Updated:
            </span>
            <span className="text-vintage-ivory">3 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
