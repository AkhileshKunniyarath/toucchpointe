import React from 'react';
import ToolsCarousel from './ToolsCarousel';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import siteDefaults from '@/lib/site-defaults.json';

const techCategories = [
  {
    id: 1,
    title: "Marketing Automation",
    tools: "Zoho, HubSpot, Mailchimp",
    icons: [
      { name: "Zoho", url: "https://cdn.simpleicons.org/zoho/white" },
      { name: "HubSpot", url: "https://cdn.simpleicons.org/hubspot/white" },
      { name: "Mailchimp", url: "https://cdn.simpleicons.org/mailchimp/white" }
    ],
    bgGradient: "from-blue-600/40 via-indigo-900/60 to-[#05051a]",
    glowColor: "bg-blue-500",
    stat: "14 ETH", likes: "50k", creator: "Marketing Core"
  },
  {
    id: 2,
    title: "Analytics & Data",
    tools: "Google Analytics, Hotjar",
    icons: [
      { name: "Google Analytics", url: "https://cdn.simpleicons.org/googleanalytics/white" },
      { name: "Hotjar", url: "https://cdn.simpleicons.org/hotjar/white" },
      { name: "Google Search Console", url: "https://cdn.simpleicons.org/googlesearchconsole/white" }
    ],
    bgGradient: "from-cyan-500/40 via-teal-900/60 to-[#05051a]",
    glowColor: "bg-cyan-400",
    stat: "8.5 ETH", likes: "32k", creator: "Data Matrix"
  },
  {
    id: 3,
    title: "Advertising & Social",
    tools: "Google Ads, Meta, Hootsuite",
    icons: [
      { name: "Google Ads", url: "https://cdn.simpleicons.org/googleads/white" },
      { name: "Meta", url: "https://cdn.simpleicons.org/meta/white" },
      { name: "Hootsuite", url: "https://cdn.simpleicons.org/hootsuite/white" }
    ],
    bgGradient: "from-fuchsia-600/40 via-purple-900/60 to-[#05051a]",
    glowColor: "bg-fuchsia-500",
    stat: "12 ETH", likes: "45k", creator: "Social Engine"
  },
  {
    id: 4,
    title: "Creative & Web",
    tools: "WordPress, Webflow, Figma",
    icons: [
      { name: "WordPress", url: "https://cdn.simpleicons.org/wordpress/white" },
      { name: "Webflow", url: "https://cdn.simpleicons.org/webflow/white" },
      { name: "Figma", url: "https://cdn.simpleicons.org/figma/white" }
    ],
    bgGradient: "from-amber-600/40 via-orange-900/60 to-[#05051a]",
    glowColor: "bg-amber-500",
    stat: "10 ETH", likes: "38k", creator: "Design Vault"
  },
  {
    id: 5,
    title: "Business Automation",
    tools: "Trello, Notion, Zapier",
    icons: [
      { name: "Trello", url: "https://cdn.simpleicons.org/trello/white" },
      { name: "Notion", url: "https://cdn.simpleicons.org/notion/white" },
      { name: "Zapier", url: "https://cdn.simpleicons.org/zapier/white" }
    ],
    bgGradient: "from-emerald-600/40 via-green-900/60 to-[#05051a]",
    glowColor: "bg-emerald-400",
    stat: "15 ETH", likes: "60k", creator: "Ops Protocol"
  }
];

const ToolsSection = () => {
  const { data } = useSiteSettings('home_page', siteDefaults.home_page);
  const sectionData = data.toolsSection || siteDefaults.home_page.toolsSection;

  return (
    <section id="tools" className="relative bg-[#05051a] overflow-hidden py-24 md:py-36 min-h-screen flex items-center">
      {/* Background gradients to match dark blue scene without top-edge seams */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#05051a] to-[#05051a] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="text-center mb-10 md:mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            {sectionData.title}
          </h2>
          <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">{sectionData.subtitle}</p>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <ToolsCarousel categories={sectionData.categories || techCategories} />
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
