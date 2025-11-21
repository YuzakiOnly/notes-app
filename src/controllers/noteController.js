const prisma = require("../config/database");

//Get All Note
const getAllNotes = async (req, res) => {
    try {
        const notes = await prisma.note.findMany({
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                title: true,
                content: true,
                isPinned: true,
                createdAt: true,
            }
        });

        return res.status(200).json({ data: notes })
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

const createNote = async (req, res) => {
    try {
        const { title, content, isPinned } = req.body;

        const note = await prisma.note.create({
            data: {
                title,
                content,
                isPinned: isPinned ?? false,
            },
            select: {
                id: true,
                title: true,
                content: true,
                isPinned: true,
                createdAt: true,
            }
        });

        return res.status(201).json({ data: note, message: "Note created successfully" })
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" })
    }
}

const updateNote = async (req, res) => {
    try {
        const { title, content, isPinned } = req.body;

        const note = await prisma.note.update({
            where: { id: req.params.id },
            data: { title, content, isPinned },
            select: {
                id: true,
                title: true,
                content: true,
                isPinned: true,
            }
        });

        return res.status(200).json({ data: note, message: "Note updated successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

const updatePinnedNote = async (req, res) => {
    try {
        const { isPinned } = req.body;

        const note = await prisma.note.update({
            where: { id: req.params.id },
            data: { isPinned },
            select: {
                id: true,
                title: true,
                content: true,
                isPinned: true,
            }
        })

        return res.status(200).json({ data: note, message: "Pin status updated" })
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

const deleteNote = async (req, res) => {
    try {
        const note = await prisma.note.delete({
            where: { id: req.params.id },
            select: {
                id: true,
                title: true,
                content: true,
                isPinned: true,
            }
        });

        return res.status(200).json({ data: note, message: "Note deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { getAllNotes, createNote, updateNote, updatePinnedNote, deleteNote }