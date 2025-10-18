import React, { useState, useEffect } from 'react';

export default function JobsTab({ searchTerm }) {
  // Add a ref to the container for scrolling
  const containerRef = React.useRef(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: ''
  });

  const jobs = [
    { 
      id: 1, 
      title: "Frontend Developer", 
      company: "TechCorp", 
      location: "Remote", 
      salary: "₹50L - ₹67L", 
      type: "Full Time",
      logo: "💻",
      description: "Build amazing user experiences with modern web technologies",
      experience: "3-5 years",
      skills: ["React", "TypeScript", "Tailwind"],
      category: "Technology",
      postedDate: "2 days ago",
      applicants: 45,
      urgent: true,
      companyLogo: "🏢",
    },
    { 
      id: 2, 
      title: "UI/UX Designer", 
      company: "Designify", 
      location: "Bangalore", 
      salary: "₹40L - ₹55L", 
      type: "Full Time",
      logo: "🎨",
      description: "Create beautiful and intuitive user interfaces for web and mobile applications",
      experience: "2-4 years",
      skills: ["Figma", "Adobe XD", "Sketch"],
      category: "Design",
      postedDate: "1 week ago",
      applicants: 32,
      urgent: false,
      companyLogo: "🎨",
    },
    { 
      id: 3, 
      title: "Data Scientist", 
      company: "DataFlow", 
      location: "Mumbai", 
      salary: "₹60L - ₹80L", 
      type: "Full Time",
      logo: "📊",
      description: "Analyze complex data sets to drive business decisions",
      experience: "4-6 years",
      skills: ["Python", "TensorFlow", "SQL"],
      category: "Data",
      postedDate: "3 days ago",
      applicants: 28,
      urgent: true,
      companyLogo: "📊",
    }
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(false);
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  const handleBackClick = () => {
    if (showApplicationForm) {
      setShowApplicationForm(false);
    } else {
      setSelectedJob(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    setShowApplicationForm(false);
    setSelectedJob(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: '',
      coverLetter: ''
    });
  };

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job => {
    if (!searchTerm) return true;
    
    const searchTermLower = searchTerm.toLowerCase();
    return (
      job.title.toLowerCase().includes(searchTermLower) ||
      job.company.toLowerCase().includes(searchTermLower) ||
      job.location.toLowerCase().includes(searchTermLower) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTermLower)) ||
      job.type.toLowerCase().includes(searchTermLower) ||
      job.category.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div ref={containerRef} className="pt-20 pb-12 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6">
        {!selectedJob ? (
          // Job Listings View
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Available Job Opportunities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse through our curated list of job opportunities across various industries and locations.
              </p>
              {searchTerm && (
                <div className="mt-4 text-blue-600">
                  Showing results for: <span className="font-semibold">"{searchTerm}"</span>
                </div>
              )}
            </div>
            
            {/* Job Listings */}
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredJobs.map((job) => (
                <div 
                  key={job.id}
                  onClick={() => handleJobClick(job)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mr-4">
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{job.title}</h3>
                          <p className="text-gray-600">{job.company}</p>
                        </div>
                      </div>
                      {job.urgent && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Urgent</span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded">{skill}</span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <div>💰 {job.salary}</div>
                      <div>🌎 {job.location}</div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Posted {job.postedDate}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleJobClick(job);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">We couldn't find any jobs matching "{searchTerm}"</p>
                <p className="text-gray-600">Try adjusting your search terms or browse all available positions</p>
              </div>
            )}
          </>
        ) : showApplicationForm ? (
          // Application Form View
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-3xl mx-auto">
            <button 
              onClick={handleBackClick}
              className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Job Details
            </button>
            
            <h2 className="text-3xl font-bold mb-2">Apply for {selectedJob.title}</h2>
            <p className="text-gray-600 mb-8">Complete the form below to apply for this position at {selectedJob.company}</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV Link</label>
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  required
                  placeholder="https://example.com/your-resume.pdf"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleBackClick}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Job Detail View
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-48 flex items-center justify-center">
              <span className="text-white text-7xl">{selectedJob.logo}</span>
            </div>
            
            <div className="p-8">
              <button 
                onClick={handleBackClick}
                className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Jobs
              </button>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{selectedJob.title}</h1>
                  <p className="text-xl text-gray-600">{selectedJob.company} • {selectedJob.location}</p>
                </div>
                {selectedJob.urgent && (
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Urgent Hiring</span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1">Salary Range</p>
                  <p className="font-semibold">{selectedJob.salary}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1">Job Type</p>
                  <p className="font-semibold">{selectedJob.type}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1">Experience</p>
                  <p className="font-semibold">{selectedJob.experience}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Job Description</h2>
                <p className="text-gray-700 mb-4">{selectedJob.description}</p>
                <p className="text-gray-700">We are looking for a talented {selectedJob.title} to join our team at {selectedJob.company}. The ideal candidate will have experience with {selectedJob.skills.join(', ')} and a passion for creating exceptional user experiences.</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-gray-600">
                  <p>Posted {selectedJob.postedDate}</p>
                  <p>{selectedJob.applicants} applicants so far</p>
                </div>
                <button 
                  onClick={handleApplyClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}