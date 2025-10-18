import React from "react";
import CareerPortalHome from './CareerPortalHome';
import JobsTab from './JobsTab';
import CompaniesTab from './CompaniesTab';
import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [appliedJobs, setAppliedJobs] = useState(new Set());
  const [showApplicationSuccess, setShowApplicationSuccess] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Popular searches for quick access
  const popularSearches = [
    "Software Engineer",
    "UI/UX Designer",
    "Data Scientist",
    "Product Manager",
    "Remote Jobs",
    "Bangalore"
  ];

  const jobCategories = [
    { name: "All", icon: "🌟", count: 0 },
    { name: "Technology", icon: "💻", count: 0 },
    { name: "Design", icon: "🎨", count: 0 },
    { name: "Marketing", icon: "📢", count: 0 },
    { name: "Sales", icon: "💰", count: 0 },
    { name: "Engineering", icon: "⚙️", count: 0 },
    { name: "Data", icon: "📊", count: 0 },
    { name: "Product", icon: "🎯", count: 0 }
  ];

  const locations = ["All", "Remote", "New York", "London", "San Francisco", "Austin", "Seattle", "Bangalore", "Mumbai", "Delhi"];
  const jobTypes = ["All", "Full Time", "Part Time", "Contract", "Internship", "Freelance"];

  const jobs = [
    { 
      id: 1, 
      title: "Frontend Developer", 
      company: "TechCorp", 
      location: "Remote", 
      salary: "₹50L - ₹67L", 
      type: "Full Time",
      logo: "🚀",
      description: "Build amazing user experiences with modern web technologies",
      experience: "3-5 years",
      skills: ["React", "TypeScript", "Tailwind"],
      category: "Technology",
      postedDate: "2 days ago",
      applicants: 45,
      urgent: true,
      companyLogo: "🏢",
      benefits: ["Health Insurance", "Remote Work", "Stock Options"]
    },
    { 
      id: 2, 
      title: "Backend Engineer", 
      company: "CodeWorks", 
      location: "New York, USA", 
      salary: "₹67L - ₹83L", 
      type: "Part Time",
      logo: "⚡",
      description: "Build scalable and efficient server-side applications",
      experience: "4-6 years",
      skills: ["Node.js", "Express", "MongoDB"],
      category: "Technology",
      postedDate: "1 week ago",
      applicants: 32,
      urgent: false,
      companyLogo: "🏭",
      benefits: ["Flexible Hours", "Health Insurance", "Professional Development"]
    },
    { 
      id: 3, 
      title: "UI/UX Designer", 
      company: "Designify", 
      location: "Bangalore, India", 
      salary: "₹40L - ₹55L", 
      type: "Full Time",
      logo: "🎨",
      description: "Create beautiful and intuitive user interfaces",
      experience: "2-4 years",
      skills: ["Figma", "Adobe XD", "Sketch"],
      category: "Design",
      postedDate: "3 days ago",
      applicants: 28,
      urgent: true,
      companyLogo: "🎭",
      benefits: ["Creative Environment", "Health Insurance", "Gym Membership"]
    },
    { 
      id: 4, 
      title: "Data Scientist", 
      company: "DataFlow", 
      location: "Remote", 
      salary: "₹60L - ₹80L", 
      type: "Contract",
      logo: "📊",
      description: "Analyze complex data sets to drive business decisions",
      experience: "3-5 years",
      skills: ["Python", "TensorFlow", "SQL"],
      category: "Data",
      postedDate: "5 days ago",
      applicants: 19,
      urgent: false,
      companyLogo: "📈",
      benefits: ["Flexible Schedule", "Remote Work", "Project Bonuses"]
    },
    { 
      id: 5, 
      title: "Product Manager", 
      company: "InnovateCo", 
      location: "Mumbai, India", 
      salary: "₹70L - ₹90L", 
      type: "Full Time",
      logo: "🎯",
      description: "Lead product development from conception to launch",
      experience: "5-7 years",
      skills: ["Product Strategy", "Agile", "User Research"],
      category: "Product",
      postedDate: "1 week ago",
      applicants: 37,
      urgent: true,
      companyLogo: "🏆",
      benefits: ["Leadership Opportunities", "Health Insurance", "Stock Options"]
    },
    { 
      id: 6, 
      title: "Marketing Specialist", 
      company: "GrowthHackers", 
      location: "Delhi, India", 
      salary: "₹35L - ₹50L", 
      type: "Full Time",
      logo: "📢",
      description: "Develop and execute marketing strategies to drive growth",
      experience: "2-4 years",
      skills: ["Digital Marketing", "SEO", "Content Strategy"],
      category: "Marketing",
      postedDate: "2 weeks ago",
      applicants: 42,
      urgent: false,
      companyLogo: "📱",
      benefits: ["Creative Environment", "Health Insurance", "Performance Bonuses"]
    }
  ];

  // Popular searches already defined above

  const stats = [
    { label: "Active Jobs", value: "1,200+", icon: "💼", color: "from-blue-500 to-blue-600" },
    { label: "Companies", value: "500+", icon: "🏢", color: "from-purple-500 to-purple-600" },
    { label: "Candidates", value: "10,000+", icon: "👨‍💼", color: "from-green-500 to-green-600" },
    { label: "Placements", value: "750+", icon: "🎯", color: "from-yellow-500 to-yellow-600" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Frontend Developer",
      company: "TechCorp",
      avatar: "👩‍💻",
      rating: 5,
      text: "Career Portal helped me find my dream job in just 2 weeks! The interface is intuitive and the job matching system is spot on."
    },
    {
      id: 2,
      name: "Rahul Verma",
      position: "Product Manager",
      company: "InnovateCo",
      avatar: "👨‍💼",
      rating: 4,
      text: "I was skeptical at first, but Career Portal exceeded my expectations. The quality of job listings is excellent."
    },
    {
      id: 3,
      name: "Ananya Patel",
      position: "Data Scientist",
      company: "DataFlow",
      avatar: "👩‍🔬",
      rating: 5,
      text: "As someone in a specialized field, I was impressed by how well Career Portal matched me with relevant opportunities."
    }
  ];

  const navItems = [
    { name: "Home", value: "home" },
    { name: "Jobs", value: "jobs" },
    { name: "Companies", value: "companies" },
    { name: "About", value: "about" },
    { name: "Contact", value: "contact" }
  ];

  return (
    <div className={`min-h-screen w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500 overflow-y-auto`}>
      {/* Header */}
      <header className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-xl border-b ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">CP</span>
                </div>
                <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Career Portal</span>
              </div>
              
              <nav className="hidden md:block">
                <ul className="flex gap-8">
                  {navItems.map((item) => (
                    <li 
                      key={item.name} 
                      onClick={() => handleTabChange(item.value)}
                      className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} cursor-pointer transition-all duration-300 font-medium relative group ${activeTab === item.value ? (darkMode ? 'text-white' : 'text-blue-600') : ''}`}
                    >
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 ${activeTab === item.value ? 'w-full' : 'w-0'} h-0.5 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full`}></span>
                    </li>
                  ))}
            </ul>
          </nav>
            </div>
            
            <div className="flex items-center gap-4">
              {appliedJobs.size > 0 && (
                <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'} border ${darkMode ? 'border-blue-500/30' : 'border-blue-200'}`}>
                  <span className="text-sm">📝</span>
                  <span className="text-sm font-medium">{appliedJobs.size} Applied</span>
                </div>
              )}
              
          <button
            onClick={() => setDarkMode(!darkMode)}
                className={`px-6 py-3 rounded-2xl border-2 transition-all duration-500 hover:scale-110 hover:shadow-xl ${
                  darkMode 
                    ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:shadow-yellow-400/25' 
                    : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:shadow-blue-500/25'
                }`}
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area - Conditionally render based on activeTab */}
      <main className="pt-20 pb-10 w-full overflow-y-auto">
        {activeTab === "home" && (
          <CareerPortalHome activeTab={activeTab} onTabChange={handleTabChange} />
        )}
        
        {activeTab === "jobs" && (
          <JobsTab searchTerm={searchTerm} />
        )}
        
        {activeTab === "companies" && (
          <CompaniesTab searchTerm={searchTerm} />
        )}
      </main>
      
      {/* Only show these sections when on home tab */}
      {activeTab === "home" && (
        <>
          <section className="relative overflow-hidden py-24">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
            <div className="relative max-w-7xl mx-auto px-6 text-center">
              <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="mb-12">
                  <h1 className={`text-6xl md:text-7xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'} leading-tight`}>
                    Find Your
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse"> Dream Job</span>
                  </h1>
                  <p className={`text-2xl md:text-3xl mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-4xl mx-auto`}>
                    Discover thousands of opportunities tailored to your skills and aspirations. 
                    Your next career move starts here with our intelligent job matching system.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto mb-16">
                  <div className="relative flex-1 max-w-lg">
          <input
            type="text"
                      placeholder="Search jobs, companies, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
                      className={`w-full px-8 py-5 rounded-3xl border-2 text-xl transition-all duration-500 focus:outline-none focus:ring-4 focus:scale-105 ${
                        darkMode 
                          ? 'bg-gray-800/80 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/30' 
                          : 'bg-white/80 border-gray-200 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/30'
                      }`}
                    />
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce">
                      🔍
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      if (searchTerm.trim() !== '') {
                        setActiveTab('jobs');
                      }
                    }}
                    className={`px-10 py-5 rounded-3xl text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-xl ${
                    darkMode 
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white' 
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white'
                  }`}>
                    Search Jobs
                  </button>
                </div>
                

                
                {/* Popular Searches */}
                <div className="mt-6 mb-12">
                  <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Popular searches:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {popularSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => {
                          setSearchTerm(search);
                          setActiveTab('jobs');
                        }}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          darkMode 
                            ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white border border-gray-600/50' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800 border border-gray-200'
                        }`}
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className={`flex items-center gap-4 p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{jobs.length}+ Active Jobs</span>
                  </div>
                  <div className={`flex items-center gap-4 p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                    <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Remote & On-site</span>
                  </div>
                  <div className={`flex items-center gap-4 p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-700"></div>
                    <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Instant Apply</span>
                  </div>
                </div>
                
                {/* Popular Searches */}
                <div className="mt-12">
                  <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Popular searches:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {popularSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => setSearchTerm(search)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          darkMode 
                            ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white border border-gray-600/50' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800 border border-gray-200'
                        }`}
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`text-center p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-3xl`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Jobs Section */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Featured Job Opportunities</h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Explore our handpicked selection of top job opportunities from leading companies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.slice(0, 3).map((job) => (
                <div key={job.id} className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} flex items-center justify-center text-2xl mr-4`}>
                        {job.logo}
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{job.title}</h3>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{job.company}</p>
                      </div>
                    </div>
                    {job.urgent && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Urgent</span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className={`text-xs font-medium px-2.5 py-1 rounded ${darkMode ? 'bg-blue-900/30 text-blue-300 border border-blue-800/50' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>{skill}</span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-sm mb-4">
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>💰 {job.salary}</div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>🌎 {job.location}</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Posted {job.postedDate}</span>
                    <button 
                      onClick={() => handleTabChange("jobs")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} transition-colors duration-300`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={() => handleTabChange("jobs")}
                className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 hover:shadow-lg'}`}
              >
                View All Jobs
          </button>
        </div>
      </section>

          {/* Featured Companies Section */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Top Companies Hiring</h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Discover opportunities at these leading companies across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {jobs.map((job) => (
                <div 
                  key={job.company} 
                  onClick={() => handleTabChange("companies")}
                  className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer text-center`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center text-3xl`}>
                    {job.companyLogo}
                  </div>
                  <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{job.company}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{job.category}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={() => handleTabChange("companies")}
                className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 hover:shadow-lg'}`}
              >
                View All Companies
              </button>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Success Stories</h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Hear from professionals who found their dream jobs through our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} flex items-center justify-center text-2xl mr-4`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{testimonial.name}</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.position} at {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800/90' : 'bg-gray-50/90'} backdrop-blur-xl border-t ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} mt-24`}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">CP</span>
                </div>
                <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Career Portal</span>
              </div>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Your gateway to amazing career opportunities. Find your dream job with our intelligent job matching system.
              </p>
              <div className="flex gap-4">
                <a href="#" className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800'} flex items-center justify-center transition-colors duration-300`}>X</a>
                <a href="#" className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800'} flex items-center justify-center transition-colors duration-300`}>in</a>
                <a href="#" className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800'} flex items-center justify-center transition-colors duration-300`}>f</a>
                <a href="#" className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800'} flex items-center justify-center transition-colors duration-300`}>ig</a>
              </div>
            </div>
            
            <div>
              <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>For Job Seekers</h3>
              <ul className={`space-y-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:underline">Browse Jobs</a></li>
                <li><a href="#" className="hover:underline">Browse Companies</a></li>
                <li><a href="#" className="hover:underline">Salary Calculator</a></li>
                <li><a href="#" className="hover:underline">Career Advice</a></li>
                <li><a href="#" className="hover:underline">Resume Builder</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>For Employers</h3>
              <ul className={`space-y-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:underline">Post a Job</a></li>
                <li><a href="#" className="hover:underline">Browse Candidates</a></li>
                <li><a href="#" className="hover:underline">Pricing Plans</a></li>
                <li><a href="#" className="hover:underline">Recruitment Solutions</a></li>
                <li><a href="#" className="hover:underline">Employer Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Contact Us</h3>
              <ul className={`space-y-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex items-center gap-2">📍 123 Career Street, Mumbai, India</li>
                <li className="flex items-center gap-2">📧 info@careerportal.com</li>
                <li className="flex items-center gap-2">📱 +91 1234567890</li>
              </ul>
              
              <div className="mt-6">
                <h4 className={`text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Subscribe to our newsletter</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className={`px-4 py-2 rounded-l-lg w-full ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-800 placeholder-gray-500'} border focus:outline-none`}
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-16 pt-8 border-t ${darkMode ? 'border-gray-700/50 text-gray-400' : 'border-gray-200/50 text-gray-600'} text-center text-sm`}>
            © {new Date().getFullYear()} Career Portal. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Application Success Modal */}
      {showApplicationSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className={`max-w-md w-full p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl mx-auto mb-6">
                ✓
              </div>
              <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Application Submitted!</h2>
              <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Your application has been successfully submitted. We'll notify you when the employer responds.
              </p>
              <button 
                onClick={() => setShowApplicationSuccess(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
        )}
    </div>
  );
}
