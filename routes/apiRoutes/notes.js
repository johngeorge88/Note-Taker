const router = require("express").Router();
const { createNewNote, findById } = require("../../lib/notes.js");
const {notesArray} = require("../../data/db.json");
const shortid = require('shortid');

router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});

router.post("/notes", (req, res) => {
    // set id 
    req.body.id = shortid.generate();
    
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;