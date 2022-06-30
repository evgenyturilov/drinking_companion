let username = prompt(`Как вас зовут`, `Имя`);
alert(`привет, ${username}`);

var question= [
    `Как зовут?`,
    `Сколько лет?`
];
var answer=[];

for (let i = 0; i < question.length; i++) {
    answer[i] = prompt(question[i])
}

alert(answer);