// ============================================
// Course Data with Pricing Information
// ============================================

const coursesData = [
    {
        id: 1,
        name: "Mathematics Mastery",
        slug: "mathematics-mastery",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
        bannerImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop",
        originalPrice: 5999,
        discountedPrice: 3599,
        discountPercent: 40,
        qrCode: "../images/qr-dsa.jpg",
        registrationLink: "https://forms.google.com/your-form-link-here", // Replace with actual Google Form link
        syllabus: {
            "Algebra & Number Theory": [
                "Linear equations and inequalities",
                "Quadratic equations and complex numbers",
                "Polynomials and rational expressions",
                "Sequences and series"
            ],
            "Calculus Fundamentals": [
                "Limits and continuity",
                "Differentiation techniques",
                "Integration methods",
                "Applications of derivatives and integrals"
            ],
            "Geometry & Trigonometry": [
                "Coordinate geometry basics",
                "Circle and conic sections",
                "Trigonometric functions and identities",
                "Heights and distances"
            ],
            "Statistics & Probability": [
                "Mean, median, mode and standard deviation",
                "Probability distributions",
                "Permutations and combinations",
                "Data interpretation"
            ]
        },
        benefits: [
            "Live interactive sessions with expert mathematics teachers",
            "Comprehensive study materials and practice worksheets",
            "Weekly doubt-clearing sessions",
            "Regular assignments and tests with detailed solutions",
            "Access to recorded sessions for revision",
            "Personal mentorship and progress tracking",
            "Special problem-solving techniques and shortcuts",
            "Exam-focused preparation strategies"
        ], 

        faculty: {
        name: "Dr. Amit Sharma",
        experience: 8,
        qualification: "Ph.D. (Computer Science)",
        expertise: ["Data Structures", "Algorithms", "Competitive Programming"]
        },

        // DEMO DATA
        demo: {
        playlistUrl: "https://www.youtube.com/playlist?list=XXXX",
        description: "Watch free demo lectures before enrolling to understand teaching style."
        }    

    },


    {
        id: 2,
        name: "Physics Fundamentals",
        slug: "physics-fundamentals",
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop",
        bannerImage: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=1200&h=600&fit=crop",
        originalPrice: 6499,
        discountedPrice: 3899,
        discountPercent: 40,
        registrationLink: "https://forms.google.com/your-form-link-here",
        syllabus: {
            "Mechanics": [
                "Newton's laws of motion",
                "Work, energy, and power",
                "Rotational motion",
                "Gravitation and planetary motion"
            ],
            "Thermodynamics": [
                "Laws of thermodynamics",
                "Heat transfer mechanisms",
                "Kinetic theory of gases",
                "Thermodynamic processes"
            ],
            "Electricity & Magnetism": [
                "Electric fields and potential",
                "Current electricity and circuits",
                "Magnetic effects of current",
                "Electromagnetic induction"
            ],
            "Optics & Modern Physics": [
                "Ray optics and optical instruments",
                "Wave optics and interference",
                "Atomic structure and nuclear physics",
                "Semiconductor devices"
            ]
        },
        benefits: [
            "Concept-based teaching with real-world examples",
            "Live demonstration of physics experiments",
            "Comprehensive theory notes and formula sheets",
            "Problem-solving workshops every week",
            "Previous year question paper analysis",
            "Personalized feedback on assignments",
            "Interactive quizzes and assessments",
            "24/7 doubt support via WhatsApp group"
        ]
    },
    {
        id: 3,
        name: "Chemistry Complete",
        slug: "chemistry-complete",
        image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=600&fit=crop",
        bannerImage: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=1200&h=600&fit=crop",
        originalPrice: 5999,
        discountedPrice: 3899,
        discountPercent: 35,
        registrationLink: "https://forms.google.com/your-form-link-here",
        syllabus: {
            "Physical Chemistry": [
                "Atomic structure and chemical bonding",
                "States of matter and solutions",
                "Chemical equilibrium",
                "Electrochemistry and thermodynamics"
            ],
            "Organic Chemistry": [
                "Basic principles and nomenclature",
                "Hydrocarbons and their reactions",
                "Functional groups and mechanisms",
                "Biomolecules and polymers"
            ],
            "Inorganic Chemistry": [
                "Periodic table and periodicity",
                "S-block and P-block elements",
                "D-block and F-block elements",
                "Coordination compounds"
            ],
            "Practical Applications": [
                "Chemical reactions and equations",
                "Environmental chemistry",
                "Chemistry in everyday life",
                "Laboratory techniques and safety"
            ]
        },
        benefits: [
            "Structured approach covering all three branches",
            "Daily practice problems and exercises",
            "Visual learning with molecular models and diagrams",
            "Reaction mechanism animations",
            "Monthly mock tests with detailed analysis",
            "Separate organic chemistry workshop sessions",
            "Chemical equation balancing techniques",
            "Comprehensive revision notes for quick review"
        ]
    },
    {
        id: 4,
        name: "Biology Essentials",
        slug: "biology-essentials",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop",
        bannerImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&h=600&fit=crop",
        originalPrice: 4999,
        discountedPrice: 3249,
        discountPercent: 35,
        registrationLink: "https://forms.google.com/your-form-link-here",
        syllabus: {
            "Cell Biology": [
                "Cell structure and functions",
                "Cell division (Mitosis and Meiosis)",
                "Biomolecules and enzymes",
                "Cell cycle and cell signaling"
            ],
            "Genetics & Evolution": [
                "Principles of inheritance",
                "Molecular basis of inheritance",
                "Evolution and natural selection",
                "Human genetics and genetic disorders"
            ],
            "Plant & Animal Physiology": [
                "Plant nutrition and transport",
                "Photosynthesis and respiration",
                "Human digestive and circulatory systems",
                "Nervous and endocrine systems"
            ],
            "Ecology & Environment": [
                "Ecosystem structure and function",
                "Biodiversity and conservation",
                "Environmental issues",
                "Microbes and human welfare"
            ]
        },
        benefits: [
            "Conceptual clarity with diagrams and flowcharts",
            "Live diagram practice sessions",
            "NCERT-focused comprehensive coverage",
            "Medical entrance exam preparation tips",
            "Weekly current affairs in biology",
            "Terminology and definition flashcards",
            "Comparative study tables for easy memorization",
            "Chapter-wise test series"
        ]
    },
    {
        id: 5,
        name: "English Language Arts",
        slug: "english-language-arts",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
        bannerImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop",
        originalPrice: 3999,
        discountedPrice: 2599,
        discountPercent: 35,
        registrationLink: "https://forms.google.com/your-form-link-here",
        syllabus: {
            "Grammar & Composition": [
                "Parts of speech and sentence structure",
                "Tenses and voice transformation",
                "Essay and letter writing",
                "Paragraph and article writing"
            ],
            "Literature & Comprehension": [
                "Prose and poetry analysis",
                "Drama and play reading",
                "Comprehension passages",
                "Literary devices and figures of speech"
            ],
            "Vocabulary & Communication": [
                "Word power and synonyms/antonyms",
                "Idioms and phrases",
                "Verbal reasoning",
                "Public speaking basics"
            ],
            "Creative Writing": [
                "Story writing techniques",
                "Descriptive writing",
                "Report and notice writing",
                "Speech and debate preparation"
            ]
        },
        benefits: [
            "Interactive reading and discussion sessions",
            "Grammar drills with instant feedback",
            "Creative writing workshops",
            "Personalized writing correction and improvement",
            "Vocabulary building exercises daily",
            "Speaking and presentation practice",
            "Access to digital library of classic literature",
            "Preparation for English competitive exams"
        ]
    },
    {
        id: 6,
        name: "Computer Science Basics",
        slug: "computer-science-basics",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        bannerImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
        originalPrice: 7999,
        discountedPrice: 4799,
        discountPercent: 40,
        registrationLink: "https://forms.google.com/your-form-link-here",
        syllabus: {
            "Programming Fundamentals": [
                "Introduction to programming logic",
                "Python basics and syntax",
                "Data types and variables",
                "Control structures and loops"
            ],
            "Data Structures": [
                "Arrays and strings",
                "Linked lists and stacks",
                "Queues and trees",
                "Searching and sorting algorithms"
            ],
            "Web Development": [
                "HTML and CSS basics",
                "JavaScript fundamentals",
                "Responsive web design",
                "Introduction to frameworks"
            ],
            "Computer Fundamentals": [
                "Computer hardware and software",
                "Operating systems basics",
                "Networking fundamentals",
                "Database concepts and SQL"
            ]
        },
        benefits: [
            "Hands-on coding practice in every session",
            "Live code debugging and walkthroughs",
            "Project-based learning approach",
            "Access to coding practice platform",
            "Weekly coding challenges and competitions",
            "Career guidance in tech field",
            "Industry-relevant curriculum",
            "Certificate of completion"
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = coursesData;
}
