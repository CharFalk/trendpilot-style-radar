
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
        <header className="border-b border-vintage-oxblood/30 bg-vintage-navy/20 backdrop-blur-sm">
          <div className="px-12 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-playfair font-bold text-vintage-ivory">Executive Dashboard</h1>
                <p className="text-vintage-pewter mt-2 font-cormorant text-lg">Fashion intelligence & market surveillance</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-vintage-gold rounded-full animate-pulse vintage-glow" />
                <span className="text-sm font-cormorant text-vintage-pewter tracking-wide">Live Intelligence Feed</span>
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
