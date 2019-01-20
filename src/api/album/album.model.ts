import * as mongoose from 'mongoose'

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Album must have a title']
    },

    imageUrl: {
        type: String,
    },

    artist: {
        type: String,
        required: [true, 'Album must have an artist']
    },

    year: {
        type: Number,
        required: [true, 'Album must have a year of release']
    },

    description: {
        type: String,
    }
})

export const Album = mongoose.model('album', albumSchema)
