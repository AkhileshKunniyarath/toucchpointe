
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CaseStudyLayout from '@/components/layouts/CaseStudyLayout';
import { toast } from '@/components/ui/use-toast';
import { ContentItem, getContentById, getContentBySlug } from '@/lib/services/contentService';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchCaseStudy(slug);
    }
  }, [slug]);

  const fetchCaseStudy = async (studySlug: string) => {
    try {
      // Try to fetch by slug first
      let fetchedCaseStudy = await getContentBySlug(studySlug);
      
      // If not found by slug, try by ID (for backward compatibility)
      if (!fetchedCaseStudy) {
        fetchedCaseStudy = await getContentById(studySlug);
      }
      
      if (fetchedCaseStudy && fetchedCaseStudy.category === 'case-study') {
        setCaseStudy(fetchedCaseStudy);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching case study:', error);
      toast({
        title: "Error",
        description: "Failed to load the case study. Please try again.",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  // Default case studies for demo (used when accessing from the CaseStudiesPage instead of admin-created content)
  const caseStudies = [
    {
      id: "1",
      title: "150% Increase in Organic Traffic for Healthcare Provider",
      excerpt: "How we helped a leading healthcare provider in Kerala improve their online visibility and patient acquisition through strategic SEO and content marketing.",
      category: "Healthcare",
      client: "Kerala Medical Center",
      clientIndustry: "Healthcare",
      date: "July 2023",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      metrics: [
        { label: "Organic Traffic", value: "+150%" },
        { label: "Lead Generation", value: "+85%" },
        { label: "Conversion Rate", value: "+42%" },
        { label: "Cost Per Lead", value: "-30%" }
      ],
      content: `
        <h2>The Challenge</h2>
        <p>Kerala Medical Center, a multi-specialty healthcare provider in Kochi, was struggling with low online visibility and patient acquisition. Despite offering excellent medical services, they were unable to compete effectively with larger hospital chains in digital marketing.</p>
        <p>The center approached Touchpointe Digital with the following challenges:</p>
        <ul>
          <li>Poor organic search visibility for key medical specialties</li>
          <li>High dependence on word-of-mouth referrals</li>
          <li>Limited patient inquiries through digital channels</li>
          <li>Outdated website with poor user experience on mobile devices</li>
        </ul>
        
        <h2>Our Approach</h2>
        <p>After conducting a comprehensive audit of their digital presence, we developed a tailored strategy focused on:</p>
        
        <h3>1. Technical SEO Overhaul</h3>
        <p>We completely rebuilt their website with a focus on mobile responsiveness, site speed, and user experience. The new site architecture was designed to highlight their medical specialties and make appointment booking seamless.</p>
        
        <h3>2. Content Strategy Development</h3>
        <p>We created an in-depth content calendar focusing on:</p>
        <ul>
          <li>Medical service pages optimized for local keywords</li>
          <li>Educational blog content addressing common health concerns in Kerala</li>
          <li>Patient testimonial stories</li>
          <li>Doctor profile pages highlighting expertise and specializations</li>
        </ul>
        
        <h3>3. Local SEO Implementation</h3>
        <p>We optimized their Google Business Profile, built local citations, and implemented structured data for their services and locations. We also developed a strategy to generate and manage patient reviews.</p>
        
        <h3>4. Conversion Rate Optimization</h3>
        <p>We redesigned key landing pages with clear calls-to-action, implemented online appointment booking functionality, and created targeted lead generation forms for different departments.</p>
        
        <h2>The Results</h2>
        <p>Within 6 months of implementing our strategy, Kerala Medical Center experienced:</p>
        <ul>
          <li>150% increase in organic search traffic</li>
          <li>85% growth in patient inquiries through digital channels</li>
          <li>42% improvement in website conversion rate</li>
          <li>30% reduction in cost per patient acquisition</li>
        </ul>
        
        <h2>Key Learnings</h2>
        <p>This case study demonstrates that healthcare providers in Kerala can significantly improve their patient acquisition through strategic digital marketing. Key factors in this success included:</p>
        <ul>
          <li>Focusing on mobile user experience, as over 70% of searches came from mobile devices</li>
          <li>Creating localized content that addressed specific health concerns in the region</li>
          <li>Highlighting the expertise of individual doctors to build trust</li>
          <li>Implementing a streamlined appointment booking process</li>
        </ul>
      `,
      tags: ["Healthcare", "SEO", "Content Marketing", "Local SEO", "Lead Generation"],
    },
    // ... remaining case studies from CaseStudiesPage.tsx
  ];

  const findDefaultCaseStudy = (caseStudySlug: string) => {
    return caseStudies.find(study => study.id === caseStudySlug.toString());
  };

  const defaultCaseStudy = slug ? findDefaultCaseStudy(slug) : null;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  // If the case study doesn't exist or isn't a case study, redirect to the case studies page
  if (!loading && (!caseStudy || caseStudy.category !== 'case-study') && !defaultCaseStudy) {
    return <Navigate to="/case-studies" />;
  }

  if (caseStudy) {
    // Render admin-created case study
    return (
      <CaseStudyLayout
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        category={caseStudy.tags[0] || "Digital Marketing"}
        clientName={caseStudy.clientName || "Client Name"}
        clientIndustry={caseStudy.clientIndustry || "Various Industries"}
        date={new Date(caseStudy.publishedAt || caseStudy.createdAt).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long'
        })}
        tags={caseStudy.tags}
        featuredImage={caseStudy.featuredImage || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
        metrics={[
          { label: "Growth", value: "+120%" },
          { label: "ROI", value: "3.5x" },
          { label: "Leads", value: "+85%" },
          { label: "Conversion", value: "+45%" }
        ]}
      >
        <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
      </CaseStudyLayout>
    );
  } else if (defaultCaseStudy) {
    // Render default case study
    return (
      <CaseStudyLayout
        title={defaultCaseStudy.title}
        subtitle={defaultCaseStudy.excerpt}
        category={defaultCaseStudy.category}
        clientName={defaultCaseStudy.client}
        clientIndustry={defaultCaseStudy.clientIndustry}
        date={defaultCaseStudy.date}
        tags={defaultCaseStudy.tags || ["Digital Marketing"]}
        featuredImage={defaultCaseStudy.image}
        metrics={defaultCaseStudy.metrics}
      >
        <div dangerouslySetInnerHTML={{ __html: defaultCaseStudy.content }} />
      </CaseStudyLayout>
    );
  }

  return <Navigate to="/case-studies" />;
};

export default CaseStudyPage;
