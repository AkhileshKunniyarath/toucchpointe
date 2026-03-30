
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Search, Calculator, Globe } from 'lucide-react';

// Define the timeline step interface
interface TimelineStep {
  number: string;
  title: string;
  description: string;
  color: string;
  icon: React.ElementType;
}

const MarketingProcessTimeline: React.FC = () => {
  // Define the steps with their respective icons and colors using a minimalistic palette
  const steps: TimelineStep[] = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We begin by understanding your business goals, target audience, and current marketing performance.",
      color: "bg-gray-800",
      icon: Rocket
    },
    {
      number: "02",
      title: "Campaign Planning",
      description: "We create comprehensive campaign plans with clear KPIs and content strategies.",
      color: "bg-gray-700",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute campaigns with precision, continuously monitoring performance metrics.",
      color: "bg-gray-600",
      icon: Search
    },
    {
      number: "04",
      title: "Optimization",
      description: "We analyze and optimize campaigns to improve performance and ROI.",
      color: "bg-gray-700",
      icon: Calculator
    },
    {
      number: "05",
      title: "Reporting & Analysis",
      description: "We provide transparent, detailed reports on campaign performance and insights.",
      color: "bg-gray-800",
      icon: Globe
    }
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-12 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        {/* Timeline steps container */}
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-0">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative"
            >
              {/* Arrow shape - adjusted to ensure equal sizing for all steps including 04 and 05 */}
              <div className={`
                ${step.color} text-white 
                w-full md:w-56 lg:w-64 
                h-auto 
                py-8 px-4 
                flex flex-col items-center justify-start 
                text-center 
                relative
              `}>
                {/* Create arrow shape with pseudo-elements */}
                <div className="absolute inset-0">
                  {/* Arrow head (only show on desktop) */}
                  <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[25px] overflow-hidden">
                    <div className="absolute top-0 bottom-0 left-0 w-[25px] bg-white transform rotate-45 origin-top-left translate-y-[-50%] translate-x-[50%]"></div>
                  </div>
                  
                  {/* Arrow tail (only show on desktop) */}
                  {index > 0 && (
                    <div className="hidden md:block absolute top-0 bottom-0 left-0 w-[25px] overflow-hidden">
                      <div className="absolute top-0 bottom-0 right-0 w-[25px] bg-white transform rotate-45 origin-bottom-right translate-y-[50%] translate-x-[-50%]"></div>
                    </div>
                  )}
                </div>

                {/* Step number */}
                <h3 className="text-4xl font-bold mb-2 relative">{step.number}</h3>
                
                {/* Icon */}
                <div className="w-12 h-12 mb-4 flex items-center justify-center relative">
                  <step.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h4 className="text-lg font-semibold mb-2 relative">{step.title}</h4>
                
                {/* Description */}
                <p className="text-xs font-light relative min-h-[60px]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MarketingProcessTimeline;
