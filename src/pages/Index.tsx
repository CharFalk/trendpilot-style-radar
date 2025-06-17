
import { Sidebar } from "@/components/Sidebar";
import { SearchSection } from "@/components/SearchSection";
import { TrendsVisualization } from "@/components/TrendsVisualization";
import { TrendingSidebar } from "@/components/TrendingSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-clean-gray-50 flex">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-clean-gray-200 bg-white shadow-soft">
          <div className="px-12 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="script-title">TrendPilot</h1>
                <p className="tech-label mt-2">Fashion Intelligence & Market Surveillance</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-clean-green rounded-full animate-pulse" />
                <span className="tech-label">Live Intelligence Feed</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-12 space-y-10 overflow-y-auto">
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
