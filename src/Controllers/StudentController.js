const studentModel = require('../Model/StudentSchema')
// const data = require('../InitialData')
let prevId = 9;

const addStudent = async (req, res) => {
    prevId += 1;
    console.log(prevId)
    

    const { name , currentClass , division } = req.body
        console.log( name , currentClass  , division )
    try {
        
            
           const student = new studentModel({
               id: prevId,
               name: name,
               currentClass: currentClass,
               division : division
            }) 

        const response = await student.save()
           
            res.status(200).json({id : response.id})
       
         
        
    } catch (error) {
        console.log(error);
        res.status().json({message : error.message})
    }
}

const getAllStudents = async (req, res) => {
    
    try {
        const response = await studentModel.find();
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({massage : error.massage})
    }
}


const getStudentById = async (req, res) => {
    
}


const deleteStudent = async (req, res) => {
    
}


const updateStudentDetails = async (req, res) => {
    
}






module.exports =  { addStudent , getAllStudents , getStudentById , deleteStudent , updateStudentDetails}



