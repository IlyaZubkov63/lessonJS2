/* 
    Задание 1:

*/

for(let i = 10; i < 50; i += 2) {
    console.log(i);
};



/* 
    Задание 2:
*/


const my = {
    firstName : "Ilya",
    lostName : "Zubkov",
    age : 25,
    pet : true
};


/* 
    Задание 3:

*/

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]

const text = ' ';
const result = array[3] + text + array[7] + text + array[0] + text + array[8] + text + array[11] + text + array[5] + text + array[9] + text + array[6] + text + array[4] + text + array[1] + text + array[12] + text + array[2] + text + array[10];
console.log(result);

/* 
    Задание 4:
*/



const fullName = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
};

fullName('Илья', 'Зубков');

    // Задание 5:

    let number = 19;
    while(number < 67) {
        number += 2;
        console.log(number);
    }
