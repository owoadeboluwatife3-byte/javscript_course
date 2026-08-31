let name = "Adams";
console.log(name)
let school = "Uniosun"
let age = 17
console.log(school)
console.log(age)
console.log("my name is " + name + " I am " + age + " years old")
console.log(`my name is ${name} and i am ${age} years old`)
let player = "mbappe"
let goals = 2
console.log(player)
console.log(goals)
goals = 3
console.log(goals)
//little work 
name = "bolu"
age = 20
school = "Ibadan"
let course = "software enginering"
let sentence = "this is 'amaizing' "

console.log(sentence)

console.log(`my name is ${name} i am ${age} years old, schooling at ${school} studying $S{course}`)

//calculation
goals = 4
let assists = 2
let total = goals + assists
console.log(total)

let a = 10 
let b = 2 
console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
console.log(10 % 3)

//mini project
player = "adams"
goals = 3
assists = 2

let goalpoints = goals * 3
let assistpoints = assists
let totalpoints = goals + assists

console.log(`player : ${player}`)
console.log(`assists : ${assistpoints}`)
console.log(`goals : ${goalpoints}`)
console.log(`total points  : ${totalpoints}`)

//practice 
name = "Lildamz"
age = 1010
let department = "software engineering"
let favclub = "manchester city"
let favplayer = "neymar"
goals = 5
assists = 4
// let contribution = goals + assists
console.log(`name : ${name}`)
console.log(`age : ${age}`)
console.log(`department : ${department}`)
console.log(`fav club : ${favclub}`)
console.log(`fav player : ${favplayer}`)
console.log(`g/a : ${goals + assists}`)

//if 

age = 11
if (age >= 18){
    console.log("you can vote ");
    
}
else{
    console.log("you cannot enter")
}
//practice 
goals = 4
if (goals >= 3){
    console.log("great performance");
}else{
    console.log("keep on pushing")
}

let score = 7
if (score === 8){
    console.log("correct")
}else{
    console.log("incorrect")
}

let passscore = 70
if (passscore >= 70){
    console.log("Excellent");
}else if(passscore >= 50){
    console.log("good");
}else if (passscore >= 30){
    console.log("average")
}else  {
    console.log("fail")
}

//string methods 

let text = 'abcdefghijklmnoopqrstuvwxyz'
console.log(text.length)
text = 'hello world'
console.log(text.charAt(6))

let text1 = 'hello'
let text2 = 'world'
let text3 = text1.concat(" " + text2)
console.log(text3)

//so far charat() for looking for a word while concat is for joining vairiables 

let textpart = 'apple, banana, mango'
let part = textpart.slice(3, 12)
console.log(part)

let str = "Apple, Banana, Kiwi";
let strpart = str.substring(7, 13);
console.log(strpart)

text = "adams"
let ups = text.toUpperCase()
console.log(ups)

text = "LILDAMZ"
let dwns = text.toLowerCase()
console.log(dwns.toUpperCase())

text ="      hello"
let trimtext = text.trim()
console.log(trimtext)


//moving to loop 
for (let i = 0; i <= 10; i++){
    console.log(i)
}
