const express = require('express');
const router = express.Router();
const sequelize = require('../database');



// Handler for list all notes
router.get('/', async (req, res) => {
    const notes = await sequelize.models.Notes.findAll()
    return res.json(notes);
})

// Handler for create a new note
router.post('/', async (req, res) => {
    const {body} = req;
    const Note = await sequelize.models.Notes.create({
        heading: body.heading,
        content: body.content
    })
    Note.save()
    return res.json({message: 'Created successfully', data: Note});
})

// Handler for update a specific note
router.put('/:id', async (req, res) => {
    const {body, params:{id}} = req;
    const Note = await sequelize.models.Note.findOne({id});
    if(!Note){
        return res.status(404).json({message:'Note not found'})
    }
    const UpdateNote = await Note.update({
        heading: body.heading,
        content: body.content       
    })  
    return res.json({message: 'Updated successfully', data: UpdateNote});
})

// Handler for delete a specific note
router.delete('/:id', async (req, res) => {
    const {params:{id}} = req;
    const Note = await sequelize.models.Note.findOne({id});
    if(!Note){
        return res.status(404).json({message:'Note not found'})
    }
    await Note.destroy();

    return res.json({message: 'Deleted successfully'});
})

module.exports = router;