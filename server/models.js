const mongoose= require("mongoose");

const imgSchema = new mongoose.Schema({
    location:{
        type:{
            type: String,
            enum:['Point'],
            required:true
        },
        coordinates: {
            type: [Number],
            required:true
        }

    },
})