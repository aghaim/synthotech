'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaCode, FaGlobe, FaBuilding, FaRobot, FaMobile, FaChartLine, FaHashtag, FaUsers, FaCogs, FaTools, FaProjectDiagram } from 'react-icons/fa';

const services = {
  'software-development': {
    title: "Software Development",
    description: "Custom software solutions powered by cutting-edge AI technologies",
    icon: <FaCode className="w-12 h-12" />,
    services: [
      "Custom AI-powered software solutions",
      "Enterprise-grade applications",
      "Cloud-native development",
      "API integration and development",
      "Legacy system modernization"
    ],
    technologies: [
      "Python, Java, JavaScript",
      "React, Angular, Vue.js",
      "Node.js, Spring Boot",
      "AWS, Azure, GCP",
      "Docker, Kubernetes",
      "MongoDB, PostgreSQL",
      "TensorFlow, PyTorch",
      "CI/CD pipelines"
    ],
    process: [
      "Requirements gathering and analysis",
      "Architecture design and planning",
      "Agile development methodology",
      "Continuous integration and testing",
      "Deployment and monitoring",
      "Maintenance and support"
    ]
  },
  'website-development': {
    title: "Website Development",
    description: "Modern, responsive websites with AI-enhanced features",
    icon: <FaGlobe className="w-12 h-12" />,
    services: [
      "AI-powered content management",
      "Responsive design",
      "Performance optimization",
      "SEO integration",
      "Analytics and tracking"
    ],
    technologies: [
      "Next.js, React",
      "TypeScript, JavaScript",
      "Tailwind CSS, SCSS",
      "WordPress, Drupal",
      "GraphQL, REST APIs",
      "AWS, Vercel",
      "Google Analytics",
      "Core Web Vitals"
    ],
    process: [
      "UI/UX design and prototyping",
      "Frontend development",
      "Backend integration",
      "Performance optimization",
      "SEO implementation",
      "Testing and deployment"
    ]
  },
  'enterprise-applications': {
    title: "Enterprise Applications",
    description: "Scalable enterprise solutions with AI integration",
    icon: <FaBuilding className="w-12 h-12" />,
    services: [
      "Enterprise resource planning",
      "Customer relationship management",
      "Supply chain management",
      "Business intelligence",
      "Workflow automation"
    ],
    technologies: [
      "Java, .NET",
      "Oracle, SQL Server",
      "SAP, Salesforce",
      "Power BI, Tableau",
      "Azure, AWS",
      "Docker, Kubernetes",
      "Microservices",
      "Event-driven architecture"
    ],
    process: [
      "Business process analysis",
      "System architecture design",
      "Integration planning",
      "Development and testing",
      "Deployment and training",
      "Ongoing support"
    ]
  },
  'ai-solutions': {
    title: "AI Solutions",
    description: "Cutting-edge AI technology integration and consulting",
    icon: <FaRobot className="w-12 h-12" />,
    services: [
      "Machine learning models",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
      "AI consulting"
    ],
    technologies: [
      "TensorFlow, PyTorch",
      "Scikit-learn, Pandas",
      "OpenAI, Hugging Face",
      "AWS SageMaker",
      "Google Cloud AI",
      "Azure AI",
      "Docker, Kubernetes",
      "MLflow, DVC"
    ],
    process: [
      "Data collection and preparation",
      "Model selection and training",
      "Validation and testing",
      "Deployment and monitoring",
      "Performance optimization",
      "Continuous improvement"
    ]
  },
  'mobile-development': {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    icon: <FaMobile className="w-12 h-12" />,
    services: [
      "iOS and Android development",
      "Cross-platform solutions",
      "Mobile-first design",
      "App store optimization",
      "Mobile analytics"
    ],
    technologies: [
      "React Native, Flutter",
      "Swift, Kotlin",
      "Firebase, AWS",
      "Redux, MobX",
      "Jest, Detox",
      "CI/CD pipelines",
      "App Store Connect",
      "Google Play Console"
    ],
    process: [
      "Mobile UX design",
      "Cross-platform development",
      "Native integration",
      "Testing and QA",
      "App store submission",
      "Post-launch support"
    ]
  },
  'business-development': {
    title: "Business Development",
    description: "AI-powered business strategy and growth solutions for sustainable success",
    icon: <FaChartLine className="w-12 h-12" />,
    services: [
      "AI-driven market analysis",
      "Strategic growth planning",
      "Competitive intelligence",
      "Business process optimization",
      "Digital transformation"
    ],
    technologies: [
      "AI analytics platforms",
      "Business intelligence tools",
      "Data visualization software",
      "CRM systems",
      "Project management tools",
      "Market research platforms",
      "Competitive analysis tools",
      "Performance tracking systems"
    ],
    process: [
      "Market research and analysis",
      "Strategy development",
      "Implementation planning",
      "Execution and monitoring",
      "Performance evaluation",
      "Strategy refinement"
    ]
  },
  'digital-marketing': {
    title: "Digital Marketing",
    description: "Data-driven digital marketing with AI-powered analytics and automation",
    icon: <FaHashtag className="w-12 h-12" />,
    services: [
      "AI-powered content creation",
      "Social media management",
      "Email marketing automation",
      "SEO and SEM optimization",
      "Analytics and reporting"
    ],
    technologies: [
      "AI content generation tools",
      "Social media platforms",
      "Email marketing software",
      "SEO analysis tools",
      "Analytics platforms",
      "Marketing automation tools",
      "CRM systems",
      "A/B testing platforms"
    ],
    process: [
      "Market research and analysis",
      "Strategy development",
      "Content creation",
      "Campaign execution",
      "Performance monitoring",
      "Optimization and scaling"
    ]
  },
  'staff-augmentation': {
    title: "Staff Augmentation",
    description: "AI-specialized talent augmentation to enhance your development teams",
    icon: <FaUsers className="w-12 h-12" />,
    services: [
      "AI and ML specialists",
      "Full-stack developers",
      "Data scientists",
      "Project managers",
      "Technical architects"
    ],
    technologies: [
      "AI/ML frameworks",
      "Development tools",
      "Project management software",
      "Communication platforms",
      "Version control systems",
      "CI/CD tools",
      "Cloud platforms",
      "Development environments"
    ],
    process: [
      "Requirements analysis",
      "Talent matching",
      "Onboarding and integration",
      "Team collaboration",
      "Performance monitoring",
      "Continuous improvement"
    ]
  },
  'process-reengineering': {
    title: "Process Reengineering",
    description: "AI-driven process automation and optimization",
    icon: <FaCogs className="w-12 h-12" />,
    services: [
      "Process automation",
      "Workflow optimization",
      "Digital transformation",
      "Quality assurance",
      "Performance monitoring"
    ],
    technologies: [
      "RPA tools",
      "Workflow automation",
      "AI/ML platforms",
      "Process mining tools",
      "Analytics platforms",
      "Integration tools",
      "Monitoring systems",
      "Quality management software"
    ],
    process: [
      "Process analysis",
      "Automation planning",
      "Implementation",
      "Testing and validation",
      "Deployment",
      "Continuous improvement"
    ]
  }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Service Not Found</h1>
          <p className="text-gray-400">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-blue-500 mb-4">{service.icon}</div>
          <h1 className="text-4xl font-bold mb-4 gradient-text">{service.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{service.description}</p>
        </motion.div>

        {/* Services Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-gray-300">Comprehensive solutions tailored to your needs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Technologies We Use</h2>
            <p className="text-gray-300">State-of-the-art tools and frameworks</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-4 rounded-xl hover:transform hover:scale-105 transition-transform duration-300 text-center"
              >
                <h3 className="text-base font-semibold">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Process</h2>
            <p className="text-gray-300">Systematic approach to delivering results</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Get Started
          </button>
        </motion.div>
      </div>
    </main>
  );
} 