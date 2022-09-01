
const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({

    id: {
            
        type: Number,
        require: true,
        unique: true
            
    },
    
        name: {
            type: String,
         require: true,
        
    },
        
 currentClass: {
        type: Number,
        require: true,
        },
    division: {
             type: String,
        require: true,
        }

})

module.exports = mongoose.model('students', StudentSchema);
