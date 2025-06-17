
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
    <div className="modern-card p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-ibm font-semibold text-clean-gray-800">Intelligence Tracking</h2>
          <p className="text-sm font-ibm text-clean-gray-500 mt-1">Monitor fashion market signals</p>
        </div>
        <Button variant="outline" size="sm" className="border-clean-gray-300 bg-white text-clean-gray-600 hover:bg-clean-gray-50 hover:text-clean-blue font-ibm">
          <Filter className="w-4 h-4 mr-2" />
          Configure Filters
        </Button>
      </div>

      <div className="data-divider"></div>

      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-clean-gray-400" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. cashmere turtleneck, wool blazer oversized..."
            className="pl-12 h-12 bg-clean-gray-50 border-clean-gray-300 focus:border-clean-blue focus:ring-clean-blue/20 text-clean-gray-800 font-ibm"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTerm()}
          />
        </div>
        <Button 
          onClick={handleAddTerm}
          className="bg-clean-blue hover:bg-clean-blue/90 text-white font-ibm font-medium h-12 px-6 shadow-soft"
        >
          <Plus className="w-4 h-4 mr-2" />
          Track Signal
        </Button>
      </div>

      {trackedTerms.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-clean-blue" />
            <p className="tech-label">Active surveillance targets:</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {trackedTerms.map((term) => (
              <Badge
                key={term}
                variant="secondary"
                className="bg-clean-gray-100 text-clean-gray-700 hover:bg-clean-gray-200 cursor-pointer font-ibm px-4 py-2 border border-clean-gray-200 shadow-soft transition-all duration-300"
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
