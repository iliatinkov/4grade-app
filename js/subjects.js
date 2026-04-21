const subjects = {
    Bulgarian: {
        materials: [
            "Grammar Topics",
            "Vocabulary Lists",
            "Reading Comprehension"
        ],
        exercises: [
            {
                question: "What is the past tense of 'to be'?",
                options: ["was", "were", "be"],
                answer: "was",
                explanation: "In English, 'to be' changes to 'was' in the past tense for singular subjects."
            },
            {
                question: "Identify the subject in the sentence: 'The dog barked loudly.'",
                options: ["The dog", "barked", "loudly"],
                answer: "The dog",
                explanation: "The subject of a sentence is who or what the sentence is about. Here, it's 'The dog'."
            }
        ]
    },
    Math: {
        materials: [
            "Addition and Subtraction",
            "Multiplication and Division",
            "Fractions and Decimals"
        ],
        exercises: [
            {
                question: "What is 12 + 15?",
                answer: "27",
                explanation: "To find the sum of 12 and 15, you add the two numbers together.
                12 + 15 = 27."
            },
            {
                question: "What is 9 divided by 3?",
                answer: "3",
                explanation: "Dividing 9 by 3 gives you the quotient 3, because 3 goes into 9 three times."
            }
        ]
    },
    English: {
        materials: [
            "Reading Skills",
            "Creative Writing",
            "Vocabulary Development"
        ],
        exercises: [
            {
                question: "What is a synonym for 'happy'?",
                options: ["Sad", "Joyful", "Angry"],
                answer: "Joyful",
                explanation: "A synonym is a word that has the same meaning as another word. Thus, 'joyful' is a synonym for 'happy'."
            },
            {
                question: "Choose the correct form: 'He ___ to the store.'",
                options: ["go", "went", "gone"],
                answer: "went",
                explanation: "'Went' is the past tense of 'go', which indicates that the action happened in the past."
            }
        ]
    },
    Science: {
        materials: [
            "Scientific Method",
            "Plant Biology",
            "Physical Science"
        ],
        exercises: [
            {
                question: "What is photosynthesis?",
                answer: "The process by which green plants use sunlight to make food from carbon dioxide and water.",
                explanation: "Photosynthesis involves converting light energy into chemical energy, allowing plants to create their own food."
            },
            {
                question: "What is the boiling point of water?",
                answer: "100 degrees Celsius",
                explanation: "Water boils at 100 degrees Celsius at sea level, which is the temperature at which it changes from liquid to gas."
            }
        ]
    },
    History: {
        materials: [
            "Important Historical Events",
            "Timeline of History",
            "Biographies of Influential People"
        ],
        exercises: [
            {
                question: "Who was the first President of the USA?",
                answer: "George Washington",
                explanation: "George Washington served as the first President of the United States from 1789 to 1797."
            },
            {
                question: "What year did World War II begin?",
                answer: "1939",
                explanation: "World War II began in 1939 and lasted until 1945, involving many countries around the world."
            }
        ]
    }
};

module.exports = subjects;