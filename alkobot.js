let toasts = [  'Привлекательные женщины отвлекают. Так отвлечемся же от рюмок, хотя бы ненадолго. За дам!', 
                'Пусть вечер будет мокрым, а утро сухим. Пью за веселое застолье и легкое похмелье!', 
                'Гора никогда не ходила к Магомету, потому что у него нечего было выпить.Так выпьем же за наших друзей, которые всегда приходят к нам!',
                'У нас на Кавказе говорят: «Лучше иметь врагов, которые говорят правду в глаза, чем друзей, которые льстят».Так давайте выпьем за то, чтобы наши друзья были с нами искренними!',
                'Кавказская мудрость гласит: влюбившись, человек поднимается на ступеньку выше повседневной, обыденной жизни.Так давайте же выпьем за эту ступеньку! За любовь!',
                'Один султан собрал всех своих жен, а их у него было сто, и сказал, смахнув слезу:– Я развожусь С Вами! Я полюбил другой гарем.Так выпьем же за честность в любви!',
                'Мой тост за нашу веселую и хорошую компанию, в которой можно пить и без тостов!',
                'За то, чтобы лето было круглый год, чтобы на столе всегда что-то лежало, чтобы было с кем выпить дождливым вечерком!',
                'Давайте выпьем за удачное стечение обстоятельств, благодаря которому, мы с вами появились на свет!',
                'Поднимем бокалы за то, чтобы Света светила, Катя катила, Люба любила и Даша. просто молодец!',
                'Всегда нужно пить за друзей, с друзьями, в дружной компании. Просто потому, что без Вас, друзья, не было бы таких застольев!',
                'За мир и согласие, а кто не согласен, тот не с нами.'
                ];
let flag = false;

        function drinkOffer(){
            let choice = confirm("Дима, выпьем сегодня?");
            if (choice){
                alert("Отлично!");
                return flag = true;
            } else {
                let choiceTwo = confirm("А может все-таки выпьем?");
                if (choiceTwo) {
                    alert("Ну вот, совсем другое дело!!!");
                    return flag = true;
                } else {
                    alert("Нет, так нет, мне больше достанется!");
                }
            }
        }
        function howMuch(){
            let choice = parseInt(prompt("Сколько возьмем?", "грамм"));
            if (Number.isInteger(choice) == false) {
                alert("Че ты несешь?! я же просил в граммах!");
                return howMuch();
            } else {
                if (choice <= 150) {
                    alert("Как-то слабовато!");
                    return howMuch();
                } else {
                    if (choice > 150 && choice <= 500) {
                        alert("Маловато,но пойдет...");
                        return choice;
                    } else {
                        if (choice > 500 & choice < 1000) {
                            alert("Не плохо!!!");
                            return choice;
                        } else {
                            if (choice >= 1000) {
                                alert("Ну ты мужик!!!!!!!");
                            }
                        }
                        
                }
            }
        }
        }
        
        
        function drinkingProcess(flag) {
            if (flag) {
                let ammount = howMuch();
                alert("Ну понеслась!!!")
                let a = Math.floor(ammount/50);
                for ( i = a; i > 0; i--) {
                    let rand = Math.floor(Math.random()*12);
                    alert(`Предлагаю тост!\n${toasts[rand]}\nЕще по одной!?`);
            }
            let offer = confirm("Закончилось...жаль...(((\nА может сходим за ещем?!");
            if (offer) {
                alert("Я знал, что ты мужик!!!!!!!");
                return drinkingProcess(flag);
            } else {
                alert("Слабак, пойду лопать без тебя!");
            }
        }
    }


drinkingProcess(drinkOffer());