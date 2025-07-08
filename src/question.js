class Question {
    constructor(text, choices, answer, difficulty){
        this.text = text;//text(string) of the question 
        this.choices = choices;//array of strings   
        this.answer =  answer;//(string)
        this.difficulty = difficulty;//(number) from 1 to 3
    }
shuffleChoices() {
    for (let i = this.choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
       let temp = this.choices[i];
      this.choices[i] = this.choices[j];
      this.choices[j] = temp; // обмен элементов
    }
}
}//Questions........