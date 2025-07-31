// Centralized content data for easy editing
export const resumeData = {
  personal: {
    name: "Your Name",
    title: "Your Professional Title",
    intro: "Your personal introduction goes here. This section should highlight your key strengths, passion, and what makes you unique.",
    photo: "/path/to/your/photo.jpg" // Add your photo path here
  },
  
  education: [
    {
      id: 1,
      institution: "University Name",
      degree: "Degree Name",
      field: "Field of Study",
      period: "Year - Year",
      description: "Brief description of your studies or achievements"
    }
    // Add more education entries as needed
  ],
  
  experiences: [
    {
      id: 1,
      title: "Special Experience Title",
      organization: "Organization/Company",
      period: "Duration",
      description: "Description of what made this experience special and what you learned",
      highlights: [
        "Key achievement or learning",
        "Another important point"
      ]
    }
    // Add more special experiences
  ],
  
  projects: [
    {
      id: 1,
      title: "Project Name",
      description: "Brief description of the project and your role",
      technologies: ["Tech1", "Tech2", "Tech3"],
      period: "Duration",
      link: "https://github.com/username/project", // Optional
      highlights: [
        "Key achievement or feature",
        "Technical challenge overcome"
      ]
    }
    // Add more projects
  ]
}