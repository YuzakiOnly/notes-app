const yup = require("yup")

const createNoteSchema = yup.object({
    body: yup.object({
        title: yup.string().min(1).max(120).required("Title is required"),
        content: yup.string().min(1).required("Content is required"),
        isPinned: yup.boolean().default(false),
    })
});

const updateNoteSchema = yup.object({
    params: yup.object({
        id: yup.string().uuid("Invalid ID format").required("ID is required")
    }),
    body: yup.object({
        title: yup.string().min(1).max(120).optional(),
        content: yup.string().min(1).optional(),
        isPinned: yup.boolean().optional(),
    }),
});

const updatePinnedSchema = yup.object({
    params: yup.object({
        id: yup.string().uuid("Invalid ID format").required("ID is required")
    }),
    body: yup.object({
        isPinned: yup.boolean().required("isPinned is required"),
    }),
});

const deleteNoteSchema = yup.object({
    params: yup.object({
        id: yup.string().uuid("Invalid ID format").required("ID is required")
    }),
});

module.exports = { createNoteSchema, updateNoteSchema, updatePinnedSchema, deleteNoteSchema }