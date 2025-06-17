
import { BarChart3, TrendingUp, Brain, Settings, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: TrendingUp, label: 'Trends', active: false },
  { icon: Brain, label: 'Insights', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-trend-teal-400 to-trend-pink-400 rounded-lg flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-trend-teal-400 to-trend-pink-400 bg-clip-text text-transparent">
            TrendPilot
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "secondary" : "ghost"}
            className={`w-full justify-start h-11 ${
              item.active 
                ? 'bg-sidebar-accent text-sidebar-primary-foreground border border-trend-teal-500/20' 
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            }`}
          >
            <item.icon className="w-4 h-4 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground text-center">
          Internal Analytics v1.0
        </div>
      </div>
    </div>
  );
};
