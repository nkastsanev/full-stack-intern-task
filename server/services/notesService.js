let notes = [];
let nextId = 1;

const notesService = {
    createNote(title, content) {
        const newNote = { id: nextId++, title, content};
        notes.push(newNote);
    },

    getAllNotes(){
        return notes;
    },

    getNoteById(id) {
        return notes.find(note => note.id === id);
    },

    updateNote(id, title, content){
        let note = notes.find(note => note.id === id);

        if (!note) return null;

        note.title = title;
        note.content = content;
        return note;
    },

    deleteNote(id) {
        const index = notes.findIndex(note => note.id === id);

        if (index === -1) return false;
        notes.splice(index, 1);
        return true;
    }
}

export default notesService;