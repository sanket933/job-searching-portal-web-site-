import React, { useState } from 'react';

export default function CompaniesTab({ searchTerm }) {
  // Add a ref to the container for scrolling
  const containerRef = React.useRef(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    positionInterested: '',
    yearsOfExperience: '',
    skills: '',
    expectedSalary: '',
    noticePeriod: '',
    linkedin: '',
    portfolio: '',
    resumeFileName: ''
  });

  const companies = [
    { 
      id: 1, 
      name: "TechCorp", 
      logo: "🚀", 
      rating: 4.8, 
      jobs: 12,
      location: "San Francisco, CA",
      industry: "Technology",
      founded: "2010",
      employees: "500-1000",
      description: "Leading technology solutions provider with a focus on innovation and cutting-edge development.",
      website: "https://techcorp.example.com",
      benefits: ["Flexible work hours", "Remote work options", "Health insurance", "401k matching"],
      culture: "Fast-paced, innovative environment with a focus on collaboration and continuous learning.",
      roles: ["Frontend Developer", "Backend Engineer", "Full Stack Engineer", "DevOps Engineer"]
    },
    { 
      id: 2, 
      name: "Designify", 
      logo: "🎨", 
      rating: 4.7, 
      jobs: 6,
      location: "New York, NY",
      industry: "Design",
      founded: "2015",
      employees: "100-500",
      description: "Creative design agency specializing in UI/UX design, branding, and digital experiences.",
      website: "https://designify.example.com",
      benefits: ["Creative workspace", "Design tools stipend", "Professional development", "Wellness program"],
      culture: "Creative, collaborative environment that values design thinking and user-centered approaches.",
      roles: ["UI/UX Designer", "Product Designer", "Brand Designer"]
    },
    { 
      id: 3, 
      name: "DataFlow", 
      logo: "📊", 
      rating: 4.9, 
      jobs: 15,
      location: "Boston, MA",
      industry: "Data Analytics",
      founded: "2012",
      employees: "1000-5000",
      description: "Data analytics company helping businesses make data-driven decisions through advanced analytics.",
      website: "https://dataflow.example.com",
      benefits: ["Competitive salary", "Stock options", "Learning budget", "Flexible schedule"],
      culture: "Data-driven culture with a focus on innovation, problem-solving, and continuous improvement.",
      roles: ["Data Scientist", "ML Engineer", "Data Analyst"]
    },
    { 
      id: 4, 
      name: "CloudTech", 
      logo: "☁️", 
      rating: 4.5, 
      jobs: 10,
      location: "Seattle, WA",
      industry: "Cloud Computing",
      founded: "2014",
      employees: "500-1000",
      description: "Cloud infrastructure and services provider helping businesses scale their operations.",
      website: "https://cloudtech.example.com",
      benefits: ["Remote-first", "Unlimited PTO", "Home office stipend", "Health and wellness benefits"],
      culture: "Distributed team with a focus on autonomy, responsibility, and work-life balance.",
      roles: ["DevOps Engineer", "SRE", "Cloud Architect"]
    }
  ];

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    // scroll to top of container on selection
    requestAnimationFrame(() => {
      if (containerRef.current) containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  const handleBackClick = () => {
    setSelectedCompany(null);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resumeFileName: files && files[0] ? files[0].name : '' });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.positionInterested) {
      alert('Please fill all required fields (Name, Email, Phone, Position).');
      return;
    }
    // Here you would typically send the form data to a server
    console.log('Shortlist form submitted:', { company: selectedCompany?.name, ...formData });
    alert('Application submitted successfully! The company will review and shortlist candidates.');
    setSelectedCompany(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      positionInterested: '',
      yearsOfExperience: '',
      skills: '',
      expectedSalary: '',
      noticePeriod: '',
      linkedin: '',
      portfolio: '',
      resumeFileName: ''
    });
  };

  // Filter companies based on search term
  const filteredCompanies = companies.filter(company => {
    if (!searchTerm) return true;
    const searchTermLower = searchTerm.toLowerCase();
    return (
      company.name.toLowerCase().includes(searchTermLower) ||
      company.location.toLowerCase().includes(searchTermLower) ||
      company.industry.toLowerCase().includes(searchTermLower) ||
      company.description.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div ref={containerRef} className="pt-20 pb-12 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6">
        {!selectedCompany ? (
          // Companies Listing View
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Top Companies Hiring</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover leading companies that are currently looking for talented professionals like you.
              </p>
              {searchTerm && (
                <div className="mt-4 text-blue-600">
                  Showing results for: <span className="font-semibold">"{searchTerm}"</span>
                </div>
              )}
            </div>
            {/* Companies Grid */}
            {filteredCompanies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCompanies.map((company) => (
                  <div 
                    key={company.id}
                    onClick={() => handleCompanyClick(company)}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
                  >
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600 flex itemscenter justify-center">
                      <span className="text-6xl">{company.logo}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{company.name}</h3>
                      <p className="text-gray-600 mb-4">{company.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="font-medium">{company.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">(245 reviews)</span>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{company.jobs} open positions</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">{company.industry}</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">{company.location}</span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleCompanyClick(company); }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                      >
                        View Company Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">We couldn't find any companies matching "{searchTerm}"</p>
                <p className="text-gray-600">Try adjusting your search terms or browse all available companies</p>
              </div>
            )}
          </>
        ) : (
          // Combined Company Detail + Shortlist Form View
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Details */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white text-8xl">{selectedCompany.logo}</span>
              </div>
              <div className="p-8">
                <button 
                  onClick={handleBackClick}
                  className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Companies
                </button>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{selectedCompany.name}</h1>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-medium">{selectedCompany.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">(245 reviews)</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-600">{selectedCompany.location}</span>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{selectedCompany.jobs} open positions</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm mb-1">Industry</p>
                    <p className="font-semibold">{selectedCompany.industry}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm mb-1">Founded</p>
                    <p className="font-semibold">{selectedCompany.founded}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm mb-1">Company Size</p>
                    <p className="font-semibold">{selectedCompany.employees} employees</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">About {selectedCompany.name}</h2>
                  <p className="text-gray-700 mb-4">{selectedCompany.description}</p>
                  <p className="text-gray-700">Visit our website: <a href={selectedCompany.website} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{selectedCompany.website}</a></p>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Company Culture</h2>
                  <p className="text-gray-700">{selectedCompany.culture}</p>
                </div>
              </div>
            </div>

            {/* Shortlist Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-2">Apply to {selectedCompany.name}</h2>
              <p className="text-gray-600 mb-6">Fill out the form to help the company quickly shortlist your profile</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                    <select name="positionInterested" value={formData.positionInterested} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select a role</option>
                      {selectedCompany.roles?.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                    <input name="yearsOfExperience" type="number" min="0" value={formData.yearsOfExperience} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary (₹)</label>
                    <input name="expectedSalary" value={formData.expectedSalary} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Key Skills (comma separated)</label>
                  <input name="skills" value={formData.skills} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notice Period</label>
                    <input name="noticePeriod" value={formData.noticePeriod} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center">
                      <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleInputChange} className="hidden" id="company-resume-upload" />
                      <label htmlFor="company-resume-upload" className="cursor-pointer text-blue-600 hover:underline">
                        {formData.resumeFileName ? formData.resumeFileName : 'Upload resume (PDF, DOC, DOCX)'}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
                    <input name="linkedin" value={formData.linkedin} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio URL</label>
                    <input name="portfolio" value={formData.portfolio} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea name="message" rows="4" value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder={`Say hello to ${selectedCompany.name}...`} />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button type="button" onClick={handleBackClick} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button>
                  <button type="submit" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}