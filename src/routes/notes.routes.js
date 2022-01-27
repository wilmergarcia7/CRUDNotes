const { Router } = require("express");
const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
 } = require("../controllers/notes.controller");

const router = Router();

// New Note
router.get("/notes/add", renderNoteForm);
router.post("/notes/new-note", createNewNote);

// Get All notes
router.get("/notes", renderNotes);

// Edit Notes
router.get("/notes/edit/:id", renderEditForm);
router.put("/notes/edit-note/:id", updateNote);

// Delete notes
router.delete('/notes/delete/:id', deleteNote);





module.exports = router;
//export default router;