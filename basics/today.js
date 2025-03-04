// const teacher = {
//     name: 'Markus',
//     kannWas: true
// };

const student = {
    name:'kai',
    kannWas: false,
    wannabeApprentice: true
};

function startIfTeacherOk(teacher) {
    let student;
    if (teacher === "ok"){
        student = "startCourse";
    } else {
        student = "oder vielleicht doch Laub fegen?";
    }
    return student;
}

console.log(student.name,', ', startIfTeacherOk("not ok"));