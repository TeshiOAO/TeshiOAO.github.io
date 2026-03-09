// Bilingual content data (Chinese and English)
export const bilingualContent = {
  zh: {
    personal: {
      name: "黃瀚",
      title: "軟體工程師",
      intro: "我是一個理性且負責任的人，注重邏輯思考，擅長溝通、聆聽與合作，並且有一定的社團領導經驗。在大學與研究所都是就讀資訊工程學系，有一定的程式經驗，平時也會自主鑽研技術或與朋友合作進行專案。我希望能將所學的技術應用於職場與生活中，持續提升自己。",
      photo: "/profolio/photo.png"
    },
    contact: {
      email: "hankhank135@gmail.com"
    },
    languages: ["中文 (精通)", "英文 (TOEIC 790)"],
    education: [
      {
        id: 1,
        institution: "國立臺灣師範大學",
        degree: "碩士",
        field: "資訊學系",
        period: "2022/9 - 2025/1",
        description: "專注於深度學習與科學資料視覺化研究"
      },
      {
        id: 2,
        institution: "國立臺灣師範大學",
        degree: "學士",
        field: "資訊工程",
        period: "2018/9 - 2022/6",
        description: "紮實的計算機科學基礎訓練"
      }
    ],
    experiences: [
      {
        id: 1,
        title: "IEEE Pacific Visualization 2025 研討會講者",
        organization: "IEEE Pacific Visualization Conference",
        period: "2025/4",
        description: "在 IEEE Pacific Visualization 2025 科學視覺化工作坊中發表研究成果，分享先進視覺化技術與 AI 應用的見解",
        image: "/profolio/lecture.jpg",
        highlights: [
          "科學視覺化",
          "人工智慧",
          "國際研討會演講"
        ]
      },
      {
        id: 2,
        title: "專任研究助理",
        organization: "國立臺灣師範大學",
        period: "2025/2 - 2025/5",
        description: "深入研究科學資料的建構與操作，同時探索神經網路的潛在應用",
        highlights: [
          "科學資料處理",
          "人工智慧應用研究"
        ]
      },
      {
        id: 3,
        title: "替代役",
        organization: "內政部消防署",
        period: "2025/5 - 2025/11",
        description: "於內政部消防署擔任替代役，協助消防安全與緊急應變相關業務",
        image: "/profolio/NFA.png"
      },
      {
        id: 4,
        title: "系學生會副會長",
        organization: "國立臺灣師範大學資工系",
        period: "2年任期",
        description: "積極舉辦系上活動，幫助團結不同年級間的學生凝聚力，打造更優質的學習環境",
        highlights: [
          "組織並領導系上各項活動",
          "促進不同年級學生交流",
          "提升系上學習環境品質"
        ]
      },
      {
        id: 5,
        title: "課程助教",
        organization: "國立臺灣師範大學",
        period: "多學期",
        description: "擔任程式設計、資料結構、計算機圖學等課程助教",
        highlights: [
          "輔助學生學習程式設計與演算法",
          "積極與學生溝通反映問題",
          "成為師生間的溝通橋樑"
        ]
      }
    ],
    projects: [
      {
        id: 1,
        title: "深度學習輔助的科學資料統計視覺化",
        description: "碩士論文研究，為解決大規模模擬數據受 I/O 與儲存限制的問題，以分布表示進行原位壓縮並透過深度學習模型重建空間結構，在維持分布一致性的同時支援高品質分析與不確定性量化",
        technologies: ["Python", "PyTorch", "NumPy", "scikit-learn", "Linux"],
        period: "2023/9 - 2025/1",
        highlights: [
          "獨立研究並開發深度學習模型",
          "實現大規模科學資料壓縮與重建",
          "在國際研討會上發表研究成果"
        ],
        link: "https://github.com/hankhank135"
      },
      {
        id: 2,
        title: "塔防小遊戲",
        description: "與兩位朋友共同開發的遊戲專案，設計關卡中怪物路徑及防禦塔種類，總共有 8 種不同的防禦塔以及 4 種小怪和 3 個 BOSS，並分別開發對應的不同技能",
        technologies: ["Godot", "GDScript"],
        period: "2021/9 - 2022/1",
        highlights: [
          "設計 8 種防禦塔與 7 種敵人",
          "開發遊戲機制與技能系統",
          "團隊協作完成遊戲開發"
        ]
      },
      {
        id: 3,
        title: "貓狗臉部辨識 AI",
        description: "使用 OpenCV 套件抓取貓狗資料圖片中的臉部，擷取後經過初步的影像處理並使用 CNN 去學習辨識結果，最終達到 95% 的準確率",
        technologies: ["Python", "PyTorch", "NumPy", "OpenCV"],
        period: "2021/2 - 2021/7",
        highlights: [
          "使用 OpenCV 進行影像處理",
          "開發 CNN 模型進行分類",
          "達到 95% 辨識準確率"
        ]
      },
      {
        id: 4,
        title: "個人簡歷網站",
        description: "使用 Claude Code 打造的個人簡歷網站，完全使用 Claude 指令完成頁面並佈署到 GitHub Pages",
        technologies: ["React", "Vite", "Claude Code"],
        period: "2025",
        highlights: [
          "使用 AI 輔助開發",
          "現代化響應式設計",
          "佈署至 GitHub Pages"
        ],
        link: "https://hankhank135.github.io/bib/"
      }
    ],
    skills: {
      title: "專業技能",
      categories: [
        {
          name: "程式語言",
          items: ["C", "C++", "Python", "JavaScript"]
        },
        {
          name: "AI & 資料科學",
          items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "OpenCV"]
        },
        {
          name: "開發工具 & 框架",
          items: ["Git", "Linux", "React", "Vite", "Godot"]
        }
      ]
    },
    navigation: {
      about: "關於我",
      education: "學歷",
      experience: "經歷",
      projects: "專案",
      skills: "技能"
    }
  },
  en: {
    personal: {
      name: "Han Huang",
      title: "Software Engineer",
      intro: "I am a rational and responsible person who values logical thinking and excels in communication, listening, and collaboration, with significant leadership experience in student organizations. Having studied Computer Science and Information Engineering throughout my undergraduate and graduate studies, I possess solid programming experience and actively explore new technologies and collaborate on projects with friends. I aim to apply my technical knowledge to work and life while continuously improving myself.",
      photo: "/profolio/photo.png"
    },
    contact: {
      email: "hankhank135@gmail.com"
    },
    languages: ["Chinese (Native)", "English (TOEIC 790)"],
    education: [
      {
        id: 1,
        institution: "National Taiwan Normal University",
        degree: "Master",
        field: "Computer Science and Information Engineering",
        period: "Sep 2022 - Jan 2025",
        description: "Focused on deep learning and scientific data visualization research"
      },
      {
        id: 2,
        institution: "National Taiwan Normal University",
        degree: "Bachelor",
        field: "Computer Science and Information Engineering",
        period: "Sep 2018 - Jun 2022",
        description: "Solid foundation in computer science fundamentals"
      }
    ],
    experiences: [
      {
        id: 1,
        title: "Talker of IEEE Pacific Visualization Conference 2025 Scivis Workshop",
        organization: "IEEE Pacific Visualization Conference",
        period: "Apr 2025",
        description: "Presented research findings at the IEEE Pacific Visualization Conference 2025 Scientific Visualization Workshop, sharing insights on advanced visualization techniques and AI applications",
        image: "/profolio/lecture.jpg",
        highlights: [
          "Scientific Visualization",
          "Artificial Intelligence",
          "Conference Presentation"
        ]
      },
      {
        id: 2,
        title: "Research Assistant (Full-time)",
        organization: "National Taiwan Normal University",
        period: "Feb 2025 - May 2025",
        description: "Further research on the construction and manipulation of scientific data, while exploring the potential applications of neural networks",
        highlights: [
          "Scientific Data Processing",
          "Artificial Intelligence Research"
        ]
      },
      {
        id: 3,
        title: "Substitute Military Service",
        organization: "National Fire Agency",
        period: "May 2025 - Nov 2025",
        description: "Serving as a substitute military service member at the National Fire Agency, contributing to fire safety and emergency response operations",
        image: "/profolio/NFA.png"
      },
      {
        id: 4,
        title: "Vice President of Student Association",
        organization: "NTNU CSIE Department",
        period: "2-year term",
        description: "Actively organized departmental activities to unite students across different grades and create a better learning environment",
        highlights: [
          "Organized and led various departmental activities",
          "Facilitated interaction between students of different grades",
          "Improved the quality of learning environment"
        ]
      },
      {
        id: 5,
        title: "Teaching Assistant",
        organization: "National Taiwan Normal University",
        period: "Multiple semesters",
        description: "Served as TA for courses including Programming Design, Data Structures, and Computer Graphics",
        highlights: [
          "Assisted students in learning programming and algorithms",
          "Actively communicated with students and addressed concerns",
          "Served as a bridge between teachers and students"
        ]
      }
    ],
    projects: [
      {
        id: 1,
        title: "Deep Learning-Assisted Statistical Visualization of Scientific Data",
        description: "Master's thesis research addressing I/O and storage limitations of large-scale simulation data through in-situ compression using distribution representation and spatial structure reconstruction via deep learning models, maintaining distribution consistency while supporting high-quality analysis and uncertainty quantification",
        technologies: ["Python", "PyTorch", "NumPy", "scikit-learn", "Linux"],
        period: "Sep 2023 - Jan 2025",
        highlights: [
          "Independently researched and developed deep learning models",
          "Implemented large-scale scientific data compression and reconstruction",
          "Presented research findings at international conferences"
        ],
        link: "https://github.com/hankhank135"
      },
      {
        id: 2,
        title: "Tower Defense Game",
        description: "Collaborative game project with two friends, designed monster paths and defense tower types, featuring 8 different defense towers, 4 types of enemies, and 3 bosses, each with unique abilities",
        technologies: ["Godot", "GDScript"],
        period: "Sep 2021 - Jan 2022",
        highlights: [
          "Designed 8 defense towers and 7 enemy types",
          "Developed game mechanics and skill systems",
          "Completed game development through team collaboration"
        ]
      },
      {
        id: 3,
        title: "Cat and Dog Face Recognition AI",
        description: "Used OpenCV to extract facial features from cat and dog images, performed image preprocessing, and trained a CNN model achieving 95% accuracy",
        technologies: ["Python", "PyTorch", "NumPy", "OpenCV"],
        period: "Feb 2021 - Jul 2021",
        highlights: [
          "Performed image processing using OpenCV",
          "Developed CNN model for classification",
          "Achieved 95% recognition accuracy"
        ]
      },
      {
        id: 4,
        title: "Personal Resume Website",
        description: "Built a personal resume website using Claude Code, completed entirely with Claude commands and deployed to GitHub Pages",
        technologies: ["React", "Vite", "Claude Code"],
        period: "2025",
        highlights: [
          "AI-assisted development",
          "Modern responsive design",
          "Deployed to GitHub Pages"
        ],
        link: "https://hankhank135.github.io/bib/"
      }
    ],
    skills: {
      title: "Professional Skills",
      categories: [
        {
          name: "Programming Languages",
          items: ["C", "C++", "Python", "JavaScript"]
        },
        {
          name: "AI & Data Science",
          items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "OpenCV"]
        },
        {
          name: "Development Tools & Frameworks",
          items: ["Git", "Linux", "React", "Vite", "Godot"]
        }
      ]
    },
    navigation: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills"
    }
  }
}
