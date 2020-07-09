const fs = require('fs')


const getNotes = function() {
    return 'Your Notes...';
}

const addNotes = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title

    })

    if(duplicateNotes.length === 0) {
        console.log(notes);
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title taken')
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}



const loadNotes = function() {
    try {
        const databuffer = fs.readFileSync('notes.json');
        const datajson = databuffer.toString();
        return JSON.parse(datajson);
    } catch (e) {
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
};


