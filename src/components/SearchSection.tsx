
import { useState } from 'react';
import { Search, Plus, Filter, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trackedTerms, setTrackedTerms] = useState(['leather trench coat', 'vintage silk scarves']);

  const handleAddTerm = () => {
    if (searchTerm.trim() && !trackedTerms.includes(searchTerm.trim())) {
      setTrackedTerms([...trackedTerms, searchTerm.trim()]);
      setSearchTerm('');
    }
  };

  const handleRemoveTerm = (term: string) => {
    setTrackedTerms(trackedTerms.filter(t => t !== term));
  };

  return (
    <div className="vintage-card p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-playfair font-semibold text-vintage-ivory">Intelligence Tracking</h2>
          <p className="text-sm font-cormorant text-vintage-pewter mt-1">Monitor fashion market signals</p>
        </div>
        <Button variant="outline" size="sm" className="border-vintage-oxblood/50 bg-vintage-navy/50 text-vintage-pewter hover:bg-vintage-forest/30 hover:text-vintage-gold font-cormorant">
          <Filter className="w-4 h-4 mr-2" />
          Configure Filters
        </Button>
      </div>

      <div className="vintage-divider"></div>

      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-vintage-pewter" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. cashmere turtleneck, wool blazer oversized..."
            className="pl-12 h-12 bg-vintage-navy/30 border-vintage-oxblood/30 focus:border-vintage-gold focus:ring-vintage-gold/20 text-vintage-ivory font-cormorant vintage-frame"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTerm()}
          />
        </div>
        <Button 
          onClick={handleAddTerm}
          className="vintage-glow bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-charcoal font-cormorant font-semibold h-12 px-6"
        >
          <Plus className="w-4 h-4 mr-2" />
          Track Signal
        </Button>
      </div>

      {trackedTerms.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-vintage-gold" />
            <p className="text-sm font-cormorant text-vintage-pewter">Active surveillance targets:</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {trackedTerms.map((term) => (
              <Badge
                key={term}
                variant="secondary"
                className="bg-vintage-oxblood/30 text-vintage-ivory hover:bg-vintage-oxblood/50 cursor-pointer font-cormorant px-4 py-2 vintage-frame vintage-glow transition-all duration-300"
                onClick={() => handleRemoveTerm(term)}
              >
                {term} ×
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
