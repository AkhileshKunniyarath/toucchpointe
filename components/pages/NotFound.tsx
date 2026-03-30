import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PremiumPageLayout from "@/components/layouts/PremiumPageLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PremiumPageLayout 
      title="404 - Page Not Found | Touchpointe Digital"
      description="The page you are looking for does not exist."
    >
      <div className="flex-1 flex items-center justify-center py-32 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-lg w-full text-center relative z-10">
          <div className="inline-block mx-auto mb-8">
            <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-900 tracking-tighter opacity-50">
              404
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Lost in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Space</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
            The page you're searching for has drifted beyond our reach. Let's get you back to familiar territory.
          </p>
          <Link to="/">
            <Button className="h-14 px-10 rounded-2xl bg-white text-black hover:bg-blue-600 hover:text-white font-black uppercase tracking-widest text-xs transition-all shadow-2xl">
              <ArrowLeft className="mr-3 h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </PremiumPageLayout>
  );
};

export default NotFound;
