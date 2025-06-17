
import { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trackedTerms, setTrackedTerms] = useState(['denim skirt', 'cottagecore dress']);

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
    <div className="trend-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Track Fashion Terms</h2>
        <Button variant="outline" size="sm" className="border-border/50">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="flex space-x-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. chunky knit sweater, y2k accessories..."
            className="pl-10 bg-background/50 border-border/50 focus:border-trend-teal-500 focus:ring-trend-teal-500/20"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTerm()}
          />
        </div>
        <Button 
          onClick={handleAddTerm}
          className="trend-glow bg-trend-teal-600 hover:bg-trend-teal-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Track
        </Button>
      </div>

      {trackedTerms.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Currently tracking:</p>
          <div className="flex flex-wrap gap-2">
            {trackedTerms.map((term) => (
              <Badge
                key={term}
                variant="secondary"
                className="bg-secondary/50 text-secondary-foreground hover:bg-secondary cursor-pointer"
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
