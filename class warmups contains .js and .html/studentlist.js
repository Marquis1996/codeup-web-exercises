// Function to calculate the average grade of the students

(() => {
    // Array of student objects
    const students = [
        { id: 1, name: "Alice", grade: 90 },
        { id: 2, name: "Bob", grade: 85 },
        { id: 3, name: "Charlie", grade: 78 },
        { id: 4, name: "David", grade: 92 },
        { id: 5, name: "Eva", grade: 88 },
    ];




const calculateAverageGrade = (studentList) => {
let sum = 0
    // let callaver;
    for(let student of studentList){
        sum += student.grade

    }callaver = sum / studentList.length
    return callaver
};


    console.log(calculateAverageGrade(students))

// Function to find the student with the highest grade
const findTopStudent = (studentList) => {
    let topStudent= studentList[0]
    for (i = 0; i < studentList.length; i++){
        if(studentList[0] > topStudent){
            topStudent = studentList[i]
        }
        return topStudent
    }

    // Your code he
};
console.log(findTopStudent(students))



//IIFE / Main

    // Display the average grade and the top student
    const averageGrade = calculateAverageGrade(students);
    const topStudent = findTopStudent(students);

    console.log(`Average Grade: ${averageGrade}`);
    console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
})();