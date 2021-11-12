const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
// Route 1: Get all the user's note using: Get "/api/notes/fetchallnotes". Login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});

// Route 2 : To add Note using: POST: "/api/notes/addnote". Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a Valid Title").isLength({ min: 3 }),
    body("description", "Atleast 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Eor");
    }
  }
);

// Route 3: Update and existing note

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  // Find the note to be updated

  let note = await Notes.findById(req.params.id);
  if (!note) {
    res.status(404).send("Not found");
  }
  if (note.user.toString() !== req.user.id)
    return res.status(401).send("Not Allowed");

  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});
// Route 3: Update and existing note

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  // Find the note to be deleted
  let note = await Notes.findById(req.params.id);
  try {
    if (!note) {
      res.status(404).send("Not found");
    }
    if (note.user.toString() !== req.user.id)
      return res.status(401).send("Not Allowed");
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Succes: "Note has been deleted", note: note });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal server Error");
  }
});

module.exports = router;
