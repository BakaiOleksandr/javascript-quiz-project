    class Quiz {
        constructor(questions, timeLimit, timeRemaining){
            this.questions = questions;
            this.timeLimit = timeLimit;
            this.timeRemaining = timeRemaining;
            this.correctAnswers = 0;
            this.currentQuestionIndex = 0;
            }

            getQuestion(){
                return this.questions[this.currentQuestionIndex];
            }

            moveToNextQuestion(){
                this.currentQuestionIndex++;
            }

            shuffleQuestions(){
            for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
            let temp = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = temp; // обмен элементов
            }
            }


            checkAnswer(answer) {
            const currentQuestion = this.getQuestion();
            if (answer === currentQuestion.answer) {
            this.correctAnswers++;
            return true;  
            }
            return false;
            }


            hasEnded(){
                return this.currentQuestionIndex >= this.questions.length;
            }


            filterQuestionsByDifficulty(difficulty) {
            if (typeof difficulty === 'number' && difficulty >= 1 && difficulty <= 3) {
            const UpdateQuestions = [];
            
            for (let i = 0; i < this.questions.length; i++) {
                let UpdateQuestionsIndex = this.questions[i];
            if (UpdateQuestionsIndex.difficulty === difficulty) {
                UpdateQuestions.push(UpdateQuestionsIndex);
            }
            }
            this.questions = UpdateQuestions;
            }
            }

            averageDifficulty(){
                const sum = this.questions.reduce((accumulator,question)=>{
                   return  accumulator + question.difficulty;
                },0);
                const average = sum/this.questions.length;
                return average;
            }


        
    }
    // 1. constructor (questions, timeLimit, timeRemaining)

    // 2. getQuestion()
    
    // 3. moveToNextQuestion()

    // 4. shuffleQuestions()

    // 5. checkAnswer(answer)

    // 6. hasEnded()
