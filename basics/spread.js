/* waarte.. destructuring von arrays + objects... */
// Array - die alte klasse war doch so schön, seufz..
const teacher = {
    name: 'Markus',
    class: /*geraten*/ ['Lisa', 'Ferdinand', 'Alan Touring', 'Sascha Lobo','Katherine G. Johnson', 'Dorothy Vaughan', 'Mary Jackson', 'Ritchie Feynman']
};

// was weiß ich schon von destructuring, ...spread auch spannend: alles kopieren in neues array, immutable und so --> keep reading.

function addPupil(teacherObj, newPupil) {
    return {
        ...teacherObj,
        // class: [teacherObj.class, newPupil]
        // aaaaah, spread operator vrgessen.. 
        // deshalb war kai in verschachteltem array außerhalb neuer klasse. moronic dotard.
        class: [...teacherObj.class, newPupil]
    };
}

const markusNeueKlasse = addPupil(teacher, 'Kai och nöö');

console.log('Die Welt war so schön mit der alten Klasse:', teacher);
console.log('Louisa, Dein Ernst? Geht\'s noch?', markusNeueKlasse);
// console.log(teacherObj);
// console.log(teacher.class);
console.log('Klasse, relaaax: Wenn\´s nervt, gibt\´s array.pop..', markusNeueKlasse.class);
