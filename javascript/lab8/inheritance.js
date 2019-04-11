//Question One
function bannedWords(arr) {
    let filtered = arr.filter(function(value) {
        return value !== "not";
    });

    return filtered;
}

console.log("Original array words: " + "\"this\",\" is\",\" not\",\" nice\",\" not\",\" again\"")
const result1 = bannedWords(["this","is","not","nice","not","again"]);
console.log(result1);

//Question Two
function bubbleSort(arr) {
    let pre;

    for(let i=0; i<arr.length; i++){
        pre = 0;
        for(let j=1; j<arr.length; j++){
            if(arr[pre] > arr[j]){
                let temp = arr[pre];
                arr[pre] = arr[j];
                arr[j] = temp;
            }
            pre++;
        }
    }

    return arr;
}

console.log("Original array: " +"[6,4,0, 3,-2,1]")
const result2 = bubbleSort([6,4,0, 3,-2,1]);
console.log(result2);

//function constructor
//Question Three
console.log("Function constructor");
function Person(name) {
    this.name = name;
}

const Teacher = new Person("Tina");

Teacher.teach = function(subject) {
    console.log(this.name + " is now teaching " + subject);
}

Teacher.teach("WAP");

//Object.create
console.log("Object creation");

const personOne = {
    name: ""
};

const teacher = Object.create(personOne);
teacher.name = "Runika";
teacher.teach = function (subject) {
    console.log(teacher.name + " is now teaching " + subject);
}

teacher.teach("FPP");

//Question Four
//object.create way
console.log("Object.create way");
const person = {
    name: "",
    age: 0,
    greeting: function () {
        console.log("Greetings, my name is" + this.name + "and I am" + this.age + "years old.");
    },
    salute: function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, " +
            "good evening and good night!");
    }
}

console.log("The student Object");
const student = Object.create(person);
student.name = "Hazal";
student.major = "Web Architecture";
student.greeting = function () {
    console.log( "Hey, my name is " +
        this.name + " and I am studying " + this.major);
}
student.salute();
student.greeting();

console.log("The professor Object");
const professor = Object.create(person);
professor.department = "CSE";
professor.name = "Coraza";
professor.greeting = function () {
    console.log( "Good day,my name is " +
        this.name + " and I am in the department " + this.department);
}

professor.salute();
professor.greeting();

//function constructor way
console.log("Function Constructor way");
function PersonOne(name){
    this.name = name;
    this.salute = function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, " +
            "good evening and good night!");
    }
}

const studentOne = new PersonOne("Grema");
studentOne.major = "Web Architecture";
studentOne.greeting = function () {
    console.log( "Hey, my name is " +
        this.name + " and I am studying " + this.major);
}
studentOne.salute();
studentOne.greeting();

const professorOne = new PersonOne("Runica");
professorOne.department = "CSE";
professorOne.greeting = function () {
    console.log( "Good day,my name is " +
        this.name + " and I am in the department " + this.department);
}
professorOne.salute();
professorOne.greeting();

