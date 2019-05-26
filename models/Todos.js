const mongoose = require('mongoose');

const TodoScheema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model('Todos',TodoScheema);