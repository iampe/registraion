// ============================================
// Course Data with Pricing Information
// ============================================

const coursesData = [
    {
        id: 1,
        name: "BAS203 : Engineering Mathematics-II",
        slug: "mathematics-mastery",
        image: "./images/EM2.png",
        bannerImage: "../images/EM2_126.png",
        originalPrice: 1499,
        discountedPrice: 899,
        discountPercent: 40,
        qrCode: "../images/QR999.png",
        registrationLink: "https://forms.gle/yZoWP2fr7MFVU9477", 
        syllabus: {
            "Unit-1 : Ordinary Differential Equation of Higher Order ": [
                    "Linear differential equation of nth order with constant coefficients",
                    "Simultaneous linear differential equations",
                    "Second order linear differential equations with variable coefficients",
                    "Solution by changing independent variable",
                    "Method of variation of parameters",
                    "Cauchy-Euler equation",
                    "Application of differential equations in solving engineering problems"
            ],
            "Unit-2 : Laplace Transform": [
                "Laplace transform",
                "Existence theorem",
                "Properties of Laplace Transform",
                "Laplace transform of derivatives and integrals",
                "Unit step function",
                "Laplace transform of periodic function",
                "Inverse Laplace transform",
                "Convolution theorem",
                "Application of Laplace Transform to solve ordinary differential equations and simultaneous differential equations"

            ],
            "Unit-3 : Sequence and Series": [
                "Definition of sequence and series with examples",
                "Convergence of series",
                "Tests for convergence of series",
                "Ratio test",
                "D’Alembert’s test",
                "Raabe’s test",
                "Comparison test",
                "Fourier series",
                "Half range Fourier sine and cosine series"

            ],
            "Unit-4 : Complex Variable–Differentiation ": [
                "Functions of complex variable",
                "Limit, continuity and differentiability",
                "Analytic functions",
                "Cauchy–Riemann equations (Cartesian and polar form)",
                "Harmonic function",
                "Methods to find analytic functions",
                "Milne’s Thompson method",
                "Conformal mapping",
                "Mobius transformation and their properties"

            ],
            "Unit-5 : Complex Variable –Integration ": [
                "Complex integration",
                    "Cauchy integral theorem",
                    "Cauchy integral formula",
                    "Taylor’s and Laurent’s series",
                    "Singularities and their classification",
                    "Zeros of analytic functions",
                    "Residues",
                    "Cauchy’s residue theorem and its application"

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
        name: "Dr. Pawan Saxena",
        experience: "20+",
        qualification: "Ph.D.",
        expertise: ["Mathematics",]
        },

        // DEMO DATA
        demo: {
        playlistUrl: "https://www.youtube.com/playlist?list=XXXX",
        description: "Watch free demo lectures before enrolling to understand teaching style."
        }    

    },

    {
        id: 2,
        name: "BCS201: PROGRAMMING FOR PROBLEM SOLVING",
        slug: "programming-mastery",
        image: "./images/PPS.png",
        bannerImage: "../images/PPS_126.png",
        originalPrice: 1499,
        discountedPrice: 999,
        discountPercent: 33,
        qrCode: "../images/QR999.png",
        registrationLink: "https://forms.gle/migtk9j7KoCx8Gu59", 
        syllabus: {
                "Unit-1 : Introduction to Computer Systems and Programming Basics": [
                    "Components of a computer system: memory, processor, I/O devices, storage, and operating system",
                    "Concept of assembler, compiler, interpreter, loader, and linker",
                    "Idea of algorithm and problem-solving approach",
                    "Representation of algorithms using flowcharts and pseudocode with examples",
                    "From algorithms to programs and source code",
                    "Structure of a C program",
                    "Writing and executing the first C program",
                    "Syntax and logical errors during compilation",
                    "Object code and executable code",
                    "Components of C language",
                    "Standard input and output in C",
                    "Fundamental data types",
                    "Variables and memory locations",
                    "Storage classes"
                ],

                "Unit-2 : Operators and Conditional Branching": [
                    "Arithmetic expressions and operator precedence",
                    "Numeric and relational operators",
                    "Mixed operands and type conversion",
                    "Logical operators",
                    "Bitwise operations",
                    "Assignment operators",
                    "Operator precedence and associativity",
                    "Conditional branching using if statements",
                    "Nested if-else statements",
                    "Switch case statements"
                ],

                "Unit-3 : Iteration, Arrays, and Structures": [
                    "Iteration and looping concepts",
                    "Use of while, do-while, and for loops",
                    "Multiple loop variables",
                    "Use of break, continue, and goto statements",
                    "Arrays: notation and representation",
                    "Manipulating array elements",
                    "Multidimensional arrays",
                    "Character arrays and strings",
                    "Structures and unions",
                    "Enumerated data types",
                    "Array of structures",
                    "Passing arrays to functions"
                ],

                "Unit-4 : Functions and Searching & Sorting Algorithms": [
                    "Introduction to functions",
                    "Types of functions",
                    "Functions with arrays",
                    "Passing parameters to functions",
                    "Call by value",
                    "Call by reference",
                    "Recursive functions",
                    "Basics of searching algorithms",
                    "Linear search",
                    "Binary search",
                    "Basics of sorting algorithms",
                    "Bubble sort",
                    "Insertion sort",
                    "Selection sort"
                ],

                "Unit-5 : Pointers, Dynamic Memory, and File Handling": [
                    "Introduction to pointers",
                    "Declaration and applications of pointers",
                    "Dynamic memory allocation",
                    "Malloc, calloc, realloc, and free functions",
                    "Strings and string handling functions",
                    "Use of pointers in self-referential structures",
                    "Concept of linked lists (no implementation)",
                    "File handling concepts",
                    "File input and output functions",
                    "Standard C preprocessors",
                    "Defining and calling macros",
                    "Command-line arguments"
                ]
            },

       benefits: [
                "Live interactive sessions with experienced programming instructors",
                "Strong foundation in programming concepts and logical thinking",
                "Hands-on coding practice with real-world problem examples",
                "Weekly doubt-clearing and debugging support sessions",
                "Regular coding assignments and assessments with detailed explanations",
                "Access to recorded sessions for revision and self-paced learning",
                "Step-by-step problem-solving strategies and algorithmic thinking",
                "Exam-oriented preparation with focus on competitive and university exams"
            ], 

        faculty: {
        name: "Mr. Naman Tiwari",
        experience: "5+",
        qualification: "MTech",
        expertise: ["C","C++",]
        },

        // DEMO DATA
        demo: {
        playlistUrl: "https://www.youtube.com/playlist?list=XXXX",
        description: "Watch free demo lectures before enrolling to understand teaching style."
        }    

    }



];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = coursesData;
}
