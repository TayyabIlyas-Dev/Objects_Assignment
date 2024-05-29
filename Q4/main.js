// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
//   o Imagine this as a template for organizing student details.
// 2. Student List:
//  o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?
var students = [
    { name: 'hamza', senior_status: true, assignmentCompleted: true },
    { name: 'Taha', senior_status: false, assignmentCompleted: true },
    { name: 'Imran', senior_status: false, assignmentCompleted: false },
];
function checkSeniorAndAssignmentChecker() {
    for (var i = 0; i < students.length; i++) {
        if (students[i].assignmentCompleted && students[i].senior_status) {
            return (students[i].name);
        }
    }
}
;
console.log("it completed all assignment and it is also a senior & \ngood student thats name :'", checkSeniorAndAssignmentChecker(), "'");
function removeStudents() {
    for (var i = 0; i < students.length; i++) {
        if (!students[i].assignmentCompleted) {
            var returns = students[i].name;
            var ans = students.indexOf(students[i]);
            students.splice(ans, 1);
            return students;
        }
    }
}
console.log(removeStudents());
