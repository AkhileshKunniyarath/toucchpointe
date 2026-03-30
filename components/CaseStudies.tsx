
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CaseStudyCard = ({ 
  id,
  image, 
  category, 
  title, 
  description, 
  metrics, 
  index 
}: {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-touchpoint-200 reveal-on-scroll h-full transform hover:-translate-y-1",
        `animation-delay-${index * 200}`
      )}
    >
      <div className="case-study-image h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="text-sm font-medium text-touchpoint-600 mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-3 text-touchpoint-900">{title}</h3>
        <p className="text-touchpoint-700 mb-4">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-3 bg-touchpoint-50 rounded-lg">
              <div className="text-xl font-bold text-touchpoint-900">{metric.value}</div>
              <div className="text-sm text-touchpoint-700">{metric.label}</div>
            </div>
          ))}
        </div>
        
        <Link 
          to={`/case-studies/${id}`}
          className="flex items-center font-medium text-touchpoint-600 hover:text-touchpoint-800 transition-colors"
        >
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const apiRef = useRef<any>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  const caseStudies = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Digital Marketing",
      title: "Driving 300% Revenue Growth for Leading Restaurant Chain",
      description: "Through a comprehensive digital marketing strategy including SEO, social media, and paid campaigns, we revitalized the brand's online presence and significantly increased revenue.",
      metrics: [
        { label: "Increase in Revenue", value: "+300%" },
        { label: "Social Media Growth", value: "12K+" },
      ]
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      category: "E-commerce",
      title: "Transforming an Offline Retailer into E-commerce Leader",
      description: "We helped a traditional retail business establish a successful online presence with custom e-commerce development, digital marketing, and conversion optimization.",
      metrics: [
        { label: "Online Sales", value: "₹1.2M+" },
        { label: "ROAS", value: "5.7x" },
      ]
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Branding & Strategy",
      title: "Rebranding a Tourism Business for Market Leadership",
      description: "Complete rebranding and digital strategy execution for a Kerala tourism company, resulting in increased bookings and market share growth.",
      metrics: [
        { label: "Booking Increase", value: "+175%" },
        { label: "Brand Mentions", value: "+240%" },
      ]
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Web Development",
      title: "Creating a High-Converting Website for Tech Startup",
      description: "Designed and developed a modern, responsive website with optimized user journeys and conversion points, dramatically improving lead generation.",
      metrics: [
        { label: "Conversion Rate", value: "+85%" },
        { label: "Page Load Speed", value: "0.8s" },
      ]
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Content Marketing",
      title: "Content Strategy for Ayurvedic Product Line",
      description: "Developed and executed a content marketing strategy for an Ayurvedic product line, establishing thought leadership and driving organic growth.",
      metrics: [
        { label: "Organic Traffic", value: "+210%" },
        { label: "Engagement", value: "+150%" },
      ]
    }
  ];

  return (
    <section 
      id="case-studies" 
      ref={sectionRef}
      className="py-20 md:py-24 bg-gradient-to-b from-touchpoint-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-touchpoint-100 text-touchpoint-800 text-sm font-medium reveal-on-scroll">
            Case Studies
          </div>
          
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-display font-bold mb-6 text-touchpoint-900 reveal-on-scroll"
          >
            Success Stories from Kerala & Beyond
          </h2>
          
          <p className="text-lg text-touchpoint-700 max-w-2xl mx-auto reveal-on-scroll animation-delay-200">
            Discover how we've transformed businesses with data-driven digital marketing strategies that deliver measurable results.
          </p>
        </div>
        
        {/* Desktop & Mobile: Carousel that shows 3 items on desktop and 1 on mobile */}
        <div className="reveal-on-scroll animation-delay-200 relative">
          <div className="px-4 md:px-10 relative">
            <Carousel 
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={(api) => (apiRef.current = api)}
            >
              <CarouselContent>
                {caseStudies.map((study, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6">
                    <CaseStudyCard 
                      id={study.id}
                      image={study.image}
                      category={study.category}
                      title={study.title}
                      description={study.description}
                      metrics={study.metrics}
                      index={index}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <CarouselPrevious className="h-12 w-12 bg-white border border-touchpoint-100 text-touchpoint-700 shadow-md hover:bg-touchpoint-50" />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <CarouselNext className="h-12 w-12 bg-white border border-touchpoint-100 text-touchpoint-700 shadow-md hover:bg-touchpoint-50" />
              </div>
            </Carousel>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 rounded-full border border-touchpoint-200 bg-white text-touchpoint-800 font-medium transition-all duration-300 shadow-soft hover:shadow-md hover:bg-touchpoint-50 hover:border-touchpoint-300"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
