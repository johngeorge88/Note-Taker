const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
}

// A function for filtering the JSON data by a single ID (GET)
function findById(id, notes) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
}


module.exports = {
    createNewNote,
    findById
};