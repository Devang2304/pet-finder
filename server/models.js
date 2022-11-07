const mongoose= require("mongoose");

const imgSchema = new mongoose.Schema({
    img:{
        data:Buffer,
        contentType:String,
        // required:[true],
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
        },
        coordinates: {
          type: [Number],
          index:'2dsphere',
          required: true
        }
      },
});

module.exports=ImageModel=mongoose.model("petdetails",imgSchema);