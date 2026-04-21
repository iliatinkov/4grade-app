class ChatBot {
    constructor() {
        this.responses = {
            math: [
                "2 + 2 = 4.",
                "Събиране и изваждане са основни операции в математиката.",
                "Какво е Питагор? Той е математик известен с питагоровата теорема." 
            ],
            bulgarian: [
                "Бълга��ският език е славянски език.",
                "Коя е любимата ти българска приказка?",
                "Какво значи думата 'благодаря' в българския език?" 
            ],
            english: [
                "English is a Germanic language.",
                "Can you tell me your favorite English book?",
                "What is the past tense of 'go'? It is 'went'."
            ],
            science: [
                "Земята е третата планета от Слънцето.",
                "Какво е атом? Aтомът е основната единица на материята.",
                "Кой е известен учен, открил закона на гравитацията?"
            ],
            history: [
                "Тодор Живков е бил български комунистически лидер.",
                "Кога е основан Плиска?",
                "Знаеш ли кой е бил цар на България по времето на Аспарух?"
            ]
        };
    }

    getResponse(subject) {
        if (this.responses[subject]) {
            const randomIndex = Math.floor(Math.random() * this.responses[subject].length);
            return this.responses[subject][randomIndex];
        } else {
            return "Няма наличен отговор за този предмет.";
        }
    }
}

const chatbot = new ChatBot();

// Example interaction
console.log(chatbot.getResponse('math')); // Получава случайна математическа отговор
console.log(chatbot.getResponse('bulgarian')); // Получава случайна български отговор
console.log(chatbot.getResponse('english')); // Получава случайна английски отговор
console.log(chatbot.getResponse('science')); // Получава случайна научен отговор
console.log(chatbot.getResponse('history')); // Получава случайна исторически отговор