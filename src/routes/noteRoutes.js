const express = require("express");
const validate = require("../middlewares/validate.js");
const {
    createNoteSchema,
    updateNoteSchema,
    updatePinnedSchema,
    deleteNoteSchema,
} = require("../validations/noteValidation.js");
const {
    getAllNotes,
    createNote,
    updateNote,
    updatePinnedNote,
    deleteNote,
} = require("../controllers/noteController.js");

const router = express.Router();

router.get("/", getAllNotes);
router.post("/create", validate(createNoteSchema), createNote);
router.put("/:id/update", validate(updateNoteSchema), updateNote);
router.put("/:id/pinned-note", validate(updatePinnedSchema), updatePinnedNote);
router.delete("/:id/delete", validate(deleteNoteSchema), deleteNote);

module.exports = router;
