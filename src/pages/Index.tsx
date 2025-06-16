
import { Sidebar } from "@/components/Sidebar";
import { SearchSection } from "@/components/SearchSection";
import { TrendsVisualization } from "@/components/TrendsVisualization";
import { TrendingSidebar } from "@/components/TrendingSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/20 backdrop-blur-sm">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground mt-1">Pinterest fashion trend analytics</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Live data</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8 space-y-8 overflow-y-auto">
          {/* Search Section */}
          <SearchSection />
          
          {/* Trends Visualization */}
          <TrendsVisualization />
        </main>
      </div>

      {/* Right Sidebar */}
      <TrendingSidebar />
    </div>
  );
};

export default Index;
