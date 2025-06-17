
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
    <div className="w-72 h-screen bg-white border-r border-clean-gray-200 shadow-soft flex flex-col">
      {/* Logo */}
      <div className="p-8 border-b border-clean-gray-200">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-clean-gray-900 rounded-lg flex items-center justify-center shadow-soft">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-dancing font-semibold text-clean-gray-800">
              TrendPilot
            </h1>
            <p className="tech-label">
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
            className={`w-full justify-start h-12 font-ibm text-base ${
              item.active 
                ? 'bg-clean-gray-900 text-white shadow-soft' 
                : 'text-clean-gray-600 hover:bg-clean-gray-100 hover:text-clean-gray-900'
            }`}
          >
            <item.icon className="w-5 h-5 mr-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-clean-gray-200">
        <div className="data-divider mb-4"></div>
        <div className="tech-label text-center">
          <div>Proprietary Analytics</div>
          <div className="mt-1 opacity-70">Version 1.0</div>
        </div>
      </div>
    </div>
  );
};
