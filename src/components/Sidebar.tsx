
import { BarChart3, TrendingUp, Brain, Settings, Compass } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: TrendingUp, label: 'Trends', active: false },
  { icon: Brain, label: 'Insights', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-sidebar vintage-frame flex flex-col">
      {/* Logo */}
      <div className="p-8 border-b border-sidebar-border/30">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-vintage-gold to-vintage-gold/80 rounded-sm flex items-center justify-center vintage-glow">
            <Compass className="w-5 h-5 text-vintage-charcoal" />
          </div>
          <div>
            <h1 className="text-2xl font-playfair font-semibold italic bg-gradient-to-r from-vintage-gold to-vintage-ivory bg-clip-text text-transparent">
              TrendPilot
            </h1>
            <p className="text-xs font-cormorant text-vintage-pewter tracking-wide uppercase">
              Intelligence Bureau
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-3">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "secondary" : "ghost"}
            className={`w-full justify-start h-12 font-crimson text-base ${
              item.active 
                ? 'bg-vintage-oxblood text-vintage-ivory border border-vintage-gold/20 vintage-glow' 
                : 'text-sidebar-foreground hover:bg-vintage-forest/30 hover:text-vintage-gold'
            }`}
          >
            <item.icon className="w-5 h-5 mr-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-sidebar-border/30">
        <div className="vintage-divider mb-4"></div>
        <div className="text-xs font-cormorant text-vintage-pewter text-center tracking-wider">
          <div className="uppercase">Proprietary Analytics</div>
          <div className="mt-1 opacity-70">Version 1.0</div>
        </div>
      </div>
    </div>
  );
};
