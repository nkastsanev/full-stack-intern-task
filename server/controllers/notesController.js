import notesService from "../services/notesService.js";

const notesController = {
    create(req, res) {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and Content are required.' });
        }

        const note = notesService.createNote(title, content);
        res.status(201).json(note);
    },

    getAll(req, res) {
        const notes = notesService.getAllNotes();
        res.json(notes);
    },

    getNote(req, res) {
        const id = parseInt(req.params.id);
        const note = notesService.getNoteById(id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found.' })
        }

        res.json(note);
    },

    update(req, res) {
    const id = ParseInt(req.params.id);
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and Content are required.' })
    }

    const updatedNote = notesService.updateNote(id, title, content);

    if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found.' });
    }

    res.json(updatedNote);

    },

    remove(req, res) {
    const id = parseInt(req.params.id);
    const success = notesService.deleteNote(id);

    if (!success) {
        return res.status(404).json({ message: 'Note not found.' })
    }

    res.json({ message: 'Note deleted.' })

    }

}

export default notesController;
