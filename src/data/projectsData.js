export const PROJECTS = [
  {
    slug: 'dholera-sir',
    name: 'Civil Lines Phase - 1',
    city: 'Dholera',
    state: 'Gujarat',
    type: 'Residential & Commercial Plots',
    status: 'active',
    heroImage: '/dholera-civil-lines.jpeg',
    tagline: "India's First Greenfield Smart City",
    cardHighlights: [
      'DMIC Corridor, Gujarat',
      'Starting at ₹10.80 Lakh',
      'Near Tata Semiconductor Plant',
    ],

    seo: {
      title: 'Dholera SIR Residential & Commercial Plots | Starting ₹10 Lakh',
      description:
        'Buy residential and commercial plots in Dholera SIR at entry price. High ROI investment near Tata semiconductor plant. Book your plot today.',
    },

    band: "🏆 India's First Greenfield Smart City  |  DMIC Corridor  |  Plots @ ₹9,000/Gaj Only",

    hero: {
      tag: "India's First Greenfield Smart City",
      title: 'Civil Lines Phase - 1',
      titleHighlight: 'Residential & Commercial Plots',
      description:
        "Invest in India's most ambitious smart city investment on the DMIC corridor. Dholera plots starting at just ₹10.80 Lakh — plots under 50 lakh in a world-class greenfield city.",
      ctaPrimary: { label: 'View Plots & Pricing', href: '#plots' },
      ctaSecondary: { label: 'Book Office Visit', href: '#contact' },
      stats: [
        { value: '₹9,000', label: 'Per Gaj/Sq.Yd' },
        { value: '₹10.80L', label: 'Starting Price' },
        { value: '109 km', label: 'from Ahmedabad' },
        { value: 'DMIC', label: 'Corridor' },
      ],
    },

    marquee: '⚡ GREAT OPPORTUNITY  —  Limited Plots Available',

    whyInvest: {
      title: 'Why Invest in Dholera SIR',
      subtitle: 'A once-in-a-generation Dholera SIR investment opportunity backed by Central & Gujarat Government.',
      cards: [
        { icon: '🏛️', title: 'Government Approved', body: 'Central & Gujarat Government backed project with full regulatory clearance and transparent development.' },
        { icon: '🏙️', title: 'World-Class Infrastructure', body: '6/8-lane expressway, underground utilities, smart water & power management, ICT-enabled city planning.' },
        { icon: '📈', title: 'High ROI Potential', body: 'Early investment means maximum profit. Land values in DMIC corridor have historically appreciated 3–5× in a decade.' },
        { icon: '🤖', title: 'Smart City Planning', body: 'Intelligent traffic, waste management, solar power, and digital services built into the city from day one.' },
        { icon: '🏭', title: 'Industrial + Residential + Commercial', body: 'Dedicated zones for manufacturing, IT hubs, residences, and commerce — a self-sustained smart township.' },
        { icon: '💰', title: 'Affordable Entry Price', body: "Starting at just ₹10.80 Lakh for 120 Gaj — one of the most accessible entries in India's premier smart city." },
      ],
    },

    growthDrivers: {
      title: 'Mega Growth Drivers',
      subtitle: "Catalysts that will make Dholera one of India's most valuable destinations.",
      cards: [
        { icon: '💻', title: 'Tata Semi-Conductor Plant', body: "India's first large-scale semiconductor fabrication unit is being set up at Dholera — bringing thousands of jobs.", image: '/tata-semiconductor-dholera.jpg' },
        { icon: '✈️', title: 'International Airport', body: "India's second-largest Greenfield international airport — Dholera International Airport — under construction." },
        { icon: '🚆', title: 'Dedicated Freight Corridor', body: "DMIC's dedicated freight corridor connects Dholera to Delhi–Mumbai industrial spine — massive logistic advantage." },
        { icon: '🛣️', title: 'Expressway & Metro', body: 'Expressway operational from 23rd Feb 2025. Metro connectivity planned — shortening travel to Ahmedabad drastically.' },
        { icon: '☀️', title: "Asia's Largest Solar Park", body: "Dholera hosts Asia's largest solar power park — making it 100% renewable-energy-capable." },
        { icon: '🏛️', title: "World's Largest Museum (Lothal)", body: "Lothal — UNESCO heritage site nearby — set to host the world's largest national maritime heritage museum." },
      ],
    },

    projectHighlights: [
      '🛣️ 6/8 Lane Expressway',
      '⚡ Underground Utilities',
      '💧 Smart Water Management',
      '🔋 Smart Power Management',
      '☀️ Solar Power Park',
      '📡 ICT Enabled City',
      '✈️ Dholera Airport',
      '🚇 Metro (Planned)',
      '🏭 Industrial Zone',
      '🏛️ Civic Centre',
      '💻 IT & Knowledge Park',
      '🌏 ABCD Building',
    ],

    plots: [
      {
        id: 'starter-residential',
        badge: 'Residential',
        badgeHighlight: false,
        title: 'Starter Residential',
        size: '120 Gaj (Sq. Yd)',
        features: ['Smart City Location', 'Near Expressway', 'Underground Utilities', 'DMIC Corridor'],
        price: '₹10.80 Lakh',
        featured: false,
        urgent: false,
      },
      {
        id: 'premium-residential',
        badge: 'Most Popular',
        badgeHighlight: true,
        title: 'Premium Residential',
        size: '200 – 300 Gaj',
        features: ['Near Club House', 'Park Facing Available', '40 ft Road Access', 'Full Infrastructure'],
        price: '₹9,000 / Gaj',
        featured: true,
        urgent: false,
      },
      {
        id: 'commercial',
        badge: '🔥 Only 4 Left!',
        badgeHighlight: true,
        urgentBanner: '⚠️ ALMOST SOLD OUT',
        title: 'Commercial Built-Up Plots (90 Sq.yd) G+1',
        size: '90 Sq.yd | G+1',
        features: ['Main Road / Corner', 'High Footfall Zone', 'Near Industrial Hub', 'High Appreciation'],
        price: 'Call for Price',
        featured: false,
        urgent: true,
        slots: { total: 8, filled: 4, remaining: 4, totalUnits: 28 },
      },
    ],

    usp: {
      title: 'Why Choose Dholera Bhoomi?',
      subtitle: 'Our unique advantages that set us apart from every other real estate partner.',
      items: [
        { number: '01', title: '100% Legal & Secure', body: 'Every property comes with government-approved documentation, NA clearances, and complete regulatory compliance. Your investment is fully protected.' },
        { number: '02', title: 'Direct Developer Pricing', body: 'No middlemen. No hidden charges. You get the best prices directly — saving lakhs compared to third-party brokers.' },
        { number: '03', title: 'Post-Sale Support', body: 'From documentation to registry through to resale guidance — we stand by you at every step, even after purchase.' },
        { number: '04', title: 'Trusted by 500+ Families', body: "The Dholera Bhoomi team has helped hundreds of families and investors secure their stake in India's smartest city." },
      ],
    },

    amenities: [
      '🏊 Swimming Pool',
      '🏛️ Club House',
      '🎪 Community Hall',
      '🌿 Park & Children Park',
      '🏋️ Gym & Wellness',
      '📚 Library',
      '🚌 Internal Shuttle',
      '💡 Solar Street Lighting',
      '🛕 Mandir',
      '🔒 24/7 Security',
      '🛒 Retail Shops',
      '🚗 Parking Zones',
    ],

    location: {
      title: 'Location Benefits',
      description:
        "Dholera SIR sits at the centre of India's most ambitious infrastructure build-out — connected to markets, airports, and industrial hubs. A prime Dholera SIR investment location.",
      items: [
        '📍 109 km from Ahmedabad',
        '📍 On DMIC (Delhi–Mumbai Industrial Corridor)',
        '📍 Dholera International Airport (2nd largest in India)',
        '📍 Expressway — Operational from 23rd Feb 2025',
        '📍 Metro Connectivity — Planned',
        '📍 Adjacent to ABCD Building & Civic Centre',
        '📍 Near Dhanduka City & Railway Station',
      ],
      address: 'Civil Lines Phase-1, Dholera SIR, Gujarat',
      googleEarthUrl:
        'https://earth.google.com/web/search/Dhandhuka+Highway,+Dholera,+Gujarat+382455/@22.2564,72.1764,100a,5000d,35y,0h,0t,0r',
    },

    investmentBenefits: {
      title: 'Investment Benefits',
      subtitle: 'Why early investors in Dholera stand to gain the most.',
      cards: [
        { icon: '💵', title: 'Affordable Entry Price', body: 'Starting at ₹10.80 Lakh for 120 Gaj — one of the lowest entry points in an internationally planned smart city.' },
        { icon: '📊', title: 'Long-term Capital Appreciation', body: 'Infrastructure-led development always drives land prices up. Early movers capture the entire upside.' },
        { icon: '🤝', title: 'Trusted & Transparent', body: 'Dholera Bhoomi ensures clear title, proper documentation, and complete transparency in every transaction.' },
        { icon: '🏠', title: 'Future Home or Business', body: 'Suitable for building your dream home, a business hub, or holding as a high-value investment asset.' },
      ],
    },

    team: [
      { name: 'Mohit Thakur', phone: '', display: '' },
      { name: 'Jeevan Singh', phone: '+919877445622', display: '+91 98774 45622' },
      { name: 'Neeraj Kumar', phone: '+919685124562', display: '+91 96851 24562' },
      { name: 'Bhanu Pratap Singh', phone: '+918968060758', display: '+91 89680 60758' },
    ],

    brochure: {
      title: 'Download Site Brochure',
      description: 'Get the complete project details — masterplan, plot layout, pricing, amenities, and location map — all in one document.',
      features: [
        'Civil Lines Phase-1 Masterplan',
        'Plot Layout & Pricing Details',
        'Location Map & Connectivity',
        'Amenities & Infrastructure Overview',
      ],
      pdfPath: '/dholera-brochure.pdf',
      filename: 'Dholera-Bhoomi-Brochure.pdf',
    },

    contact: {
      title: 'Book Your Plot Today!',
      urgentNote: "⚡ Grab the opportunity before it's too late — Limited Plots Available",
      description: 'Our team will personally guide you through the site and help you select the best plot for your needs and budget.',
      address: 'Civil Lines Phase-1, Dholera SIR, Gujarat',
      projectBrand: 'Dholera Bhoomi',
      pricingTagline: 'Plots at ₹9,000 Per Gaj/Sq.Yd Only',
    },

    footer: {
      copyright: '© 2026 Dholera Bhoomi. All rights reserved.',
      address: 'Civil Lines Phase-1, Dholera SIR, Gujarat',
    },
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}
