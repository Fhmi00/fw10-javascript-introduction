// ---TASK 1---

const biodata = {
    name : 'Muhammad Anisul Fahmi',
    age : 22,
    hobbies : ['Bermain Game','Membaca'],
    isMarried : false,
    schoolList : [
        {
            name : 'TK Kartika',
            yearIn : 2004,
            yearOut : 2006,
            major : null
        },
        {
            name : 'SD Kentingan No. 79',
            yearIn : 2006,
            yearOut : 2012,
            major : null
        },
        {
            name : `SMP Daarul Qur'an Sukoharjo`,
            yearIn : 2012,
            yearOut : 2016,
            major : null
        },
        {
            name : 'SMK Wikrama 1 Kab. Semarang',
            yearIn : 2016,
            yearOut : 2019,
            major : 'Rekayasa Perangkat Lunak'
        }
    ],
    skils : [
        {
            skillName : 'HTML',
            level : 'beginner'
        },
        {
            skillName : 'CSS',
            level : 'beginner'
        },
        {
            skillName : 'Javascript',
            level : 'beginner'
        }
    ],
    interestInCoding : true
};
// console.log(biodata);


// ---TASK 2---

const mtk = "85";
const bIndo = 75;
const bIng = 75;
const ipa = 80;

let rataRata;

if(typeof mtk === "number" && typeof bIndo === "number" && typeof bIng === "number" && typeof ipa === "number") {
    rataRata = (mtk + bIndo + bIng + ipa)/4
    console.log('Rata-rata = ' + rataRata);
}else{
    console.log('invalid value!!');
}

let grade = rataRata;
if(grade>=90 && grade<=100) {
    grade = 'A';
}else if(grade>=80 && grade<=89) {
    grade = 'B';
}else if(grade>=70 && grade<=79) {
    grade = 'C';
}else if(grade>=60 && grade<=69) {
    grade = 'D';
}else if(grade>=0 && grade<=59) {
    grade = 'E';
}else{
    grade = "nilai yang anda masukkan salah"
};
console.log('Grade = ' + grade);


// ---TASK 3---

const printSquare = 5;
let s = '';

for(i = 1; i <= printSquare; i++) {
    for(b = 1; b <= printSquare; b++) {
        if(i == 1 || i == printSquare) {
            s += '* '
        }else {
            if(b == 1 || b == printSquare) {
                s += '* '
            }else{
                s += '  '
            }
        }
    } 
    s += '\n'
}

// console.log(s);


// ---TASK 4---
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hilldegard.org"
}

let newData = {...data, name: "fahmi", email: "ifahmi5555@gmail.com", hobby: ["Main Game", "Musik", "Film"]}
// data.name = "fahmi"
// data.email = "ifahmi5555@gmail.com"
// let newData = {...data, hobby: ["Main Game", "Musik", "Film"]}

// console.log(newData);

let {street, city} = data.address