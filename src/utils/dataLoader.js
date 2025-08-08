// Utility function to load and parse portfolio data
import { resumeData as defaultData } from '../data/content.js';

// Parse the markdown-like data from profolio.md
export const parsePortfolioData = (markdownContent) => {
  const lines = markdownContent.split('\n');
  const data = {
    personal: {
      name: "",
      title: "Computer Science Graduate Student",
      intro: "",
      photo: "/profolio/photo.png"
    },
    contact: {
      email: ""
    },
    languages: [],
    education: [],
    experiences: [],
    projects: []
  };

  let currentSection = null;
  let currentObject = {};
  let collectingMultiline = false;
  let multilineContent = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Parse basic info
    if (line.startsWith('Name:')) {
      data.personal.name = line.replace('Name:', '').trim();
    } else if (line.startsWith('About Me:')) {
      // Collect About Me content until next section
      let intro = '';
      let j = i + 1;
      while (j < lines.length && !lines[j].includes(':[') && !lines[j].includes('details:[')) {
        if (lines[j].trim() !== '') {
          intro += lines[j].trim() + ' ';
        }
        j++;
      }
      data.personal.intro = intro.trim();
      i = j - 1; // Skip processed lines
    } else if (line.startsWith('Contact details:[')) {
      currentSection = 'contact';
      currentObject = {}; // Reset current object
    } else if (line.startsWith('Language:[')) {
      currentSection = 'languages';
      currentObject = {}; // Reset current object
    } else if (line.startsWith('Education:[')) {
      currentSection = 'education';
      currentObject = {}; // Reset current object
    } else if (line.startsWith('Special Experience:[')) {
      // Add any pending education before switching sections
      if (currentSection === 'education' && Object.keys(currentObject).length > 0) {
        data.education.push({
          id: data.education.length + 1,
          institution: currentObject.University || '',
          degree: (currentObject.Degree || '').replace(/,$/, ''),
          field: 'Computer Science and Information Engineering',
          period: currentObject.Year || '',
          description: `${(currentObject.Degree || '').replace(/,$/, '')} from ${currentObject.University}`
        });
      }
      currentSection = 'experiences';
      currentObject = {}; // Reset current object
    } else if (line.startsWith('Project Experience:[')) {
      // Add any pending experience before switching sections
      if (currentSection === 'experiences' && Object.keys(currentObject).length > 0) {
        data.experiences.push({
          id: data.experiences.length + 1,
          ...currentObject
        });
      }
      currentSection = 'projects';
      currentObject = {}; // Reset current object
    } 
    // Parse contact information
    else if (currentSection === 'contact') {
      if (line.includes('Email:')) {
        data.contact.email = line.replace('Email:', '').replace(',', '').trim();
      }
    }
    // Parse languages
    else if (currentSection === 'languages') {
      if (line && !line.includes(']') && !line.includes('[')) {
        data.languages.push(line);
      }
    }
    // Parse education
    else if (currentSection === 'education') {
      if (line.includes('University:')) {
        if (Object.keys(currentObject).length > 0) {
          data.education.push({
            id: data.education.length + 1,
            institution: currentObject.University || '',
            degree: currentObject.Degree || '',
            field: 'Computer Science and Information Engineering',
            period: currentObject.Year || '',
            description: `${currentObject.Degree} from ${currentObject.University}`
          });
        }
        currentObject = {};
        currentObject.University = line.replace('University:', '').replace(',', '').trim();
      } else if (line.includes('Year:')) {
        currentObject.Year = line.replace('Year:', '').replace(',', '').trim();
      } else if (line.includes('Degree:')) {
        currentObject.Degree = line.replace('Degree:', '').replace(/,$/, '').trim();
      }
    }
    // Parse experiences
    else if (currentSection === 'experiences') {
      if (line.includes('title:')) {
        if (Object.keys(currentObject).length > 0) {
          data.experiences.push({
            id: data.experiences.length + 1,
            ...currentObject
          });
        }
        currentObject = {};
        currentObject.title = line.replace('title:', '').replace('"', '').replace('"', '').replace(',', '').trim();
      } else if (line.includes('organization:')) {
        currentObject.organization = line.replace('organization:', '').replace('"', '').replace('"', '').replace(',', '').trim();
      } else if (line.includes('period:')) {
        currentObject.period = line.replace('period:', '').replace('"', '').replace('"', '').replace(',', '').trim();
      } else if (line.includes('description:')) {
        currentObject.description = line.replace('description:', '').replace('"', '').replace('"', '').replace(/,$/, '').trim();
      } else if (line.includes('image:')) {
        currentObject.image = line.replace('image:', '').replace('"', '').replace('"', '').replace(',', '').trim();
      } else if (line.includes('highlights: [')) {
        collectingMultiline = true;
        multilineContent = '';
      } else if (collectingMultiline && line.includes(']')) {
        collectingMultiline = false;
        currentObject.highlights = multilineContent.split(',').map(item => 
          item.replace(/"/g, '').trim()
        ).filter(item => item);
      } else if (collectingMultiline) {
        multilineContent += line;
      }
    }
    // Parse projects
    else if (currentSection === 'projects') {
      if (line.includes('title:')) {
        if (Object.keys(currentObject).length > 0) {
          data.projects.push({
            id: data.projects.length + 1,
            ...currentObject
          });
        }
        currentObject = {};
        currentObject.title = line.replace('title:', '').replace('"', '').replace('"', '').replace(',', '').trim();
      } else if (line.includes('description:')) {
        currentObject.description = line.replace('description:', '').replace('"', '').replace('"', '').replace(/,$/, '').trim();
      } else if (line.includes('technologies:')) {
        const techString = line.replace('technologies:', '').replace('[', '').replace(']', '').trim();
        currentObject.technologies = techString.split(',').map(tech => tech.replace(/"/g, '').trim()).filter(tech => tech);
      } else if (line.includes('period:')) {
        currentObject.period = line.replace('period:', '').replace('"', '').replace('"', '').replace(',', '').trim();
      } else if (line.includes('link:')) {
        const link = line.replace('link:', '').replace('"', '').replace('"', '').replace(',', '').replace('//', '').trim();
        if (link && link !== 'Optional') {
          currentObject.link = link.startsWith('http') ? link : `https://${link}`;
        }
      } else if (line.includes('highlights: [')) {
        collectingMultiline = true;
        multilineContent = '';
      } else if (collectingMultiline && line.includes(']')) {
        collectingMultiline = false;
        currentObject.highlights = multilineContent.split(',').map(item => 
          item.replace(/"/g, '').trim()
        ).filter(item => item);
      } else if (collectingMultiline) {
        multilineContent += line;
      }
    }
  }
  
  // Add final objects
  if (currentSection === 'education' && Object.keys(currentObject).length > 0) {
    data.education.push({
      id: data.education.length + 1,
      institution: currentObject.University || '',
      degree: (currentObject.Degree || '').replace(/,$/, ''),
      field: 'Computer Science and Information Engineering',
      period: currentObject.Year || '',
      description: `${(currentObject.Degree || '').replace(/,$/, '')} from ${currentObject.University}`
    });
  }
  
  if (currentSection === 'experiences' && Object.keys(currentObject).length > 0) {
    data.experiences.push({
      id: data.experiences.length + 1,
      ...currentObject
    });
  }
  
  if (currentSection === 'projects' && Object.keys(currentObject).length > 0) {
    data.projects.push({
      id: data.projects.length + 1,
      ...currentObject
    });
  }
  
  return data;
};

// Load portfolio data from profolio directory
export const loadPortfolioData = async () => {
  try {
    // In a real application, you would fetch this data
    // For now, we'll use the parsed data directly
    const response = await fetch('/profolio/profolio.md');
    if (response.ok) {
      const content = await response.text();
      return parsePortfolioData(content);
    }
  } catch (error) {
    console.log('Could not load portfolio data, using default data');
  }
  
  // Fallback to default data structure with profolio photo
  return {
    ...defaultData,
    personal: {
      ...defaultData.personal,
      name: "Han Huang",
      title: "Computer Science Graduate Student",
      intro: "Passionate computer science graduate with expertise in software development and a strong foundation in both theoretical and practical aspects of computing.",
      photo: "/profolio/photo.png"
    },
    education: [
      {
        id: 1,
        institution: "National Taiwan Normal University",
        degree: "Bachelor's Degree",
        field: "Computer Science and Information Engineering",
        period: "2018-2022",
        description: "Bachelor's Degree in Computer Science and Information Engineering from National Taiwan Normal University"
      },
      {
        id: 2,
        institution: "National Taiwan Normal University", 
        degree: "Master's Degree",
        field: "Computer Science and Information Engineering",
        period: "2022-2025",
        description: "Master's Degree in Computer Science and Information Engineering from National Taiwan Normal University"
      }
    ]
  };
};