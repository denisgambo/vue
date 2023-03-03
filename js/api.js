//My database name
const MYDB = "mydb"

//create a database if not existe
function getLocalDB(){
    if(!localStorage.getItem(MYDB)){
        localStorage.setItem(MYDB, JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(MYDB))
}

//Update db

function updateDB(db){
    localStorage.setItem(MYDB, JSON.stringify(db))
}


//insert a studen

function addStudent(student){
    const db = getLocalDB()
    student.id = Date.now()+""
    db.push(student)
    updateDB(db)
}

//function to update a student
function updateStudent(student){
    const db = getLocalDB()
    const updatedDB = db.map(function(currentStudent){
        if(currentStudent.id = student.id){
            return {
                firstname: student.firstname,
                lastname: student.lastname,
                birthday: student.birthday,
                level: student.level,
                id: student.id

            }
        }
        return currentStudent
    }) 
    updateDB(updatedDB)
}

//function to remove a student

function deleteStudent(student){
    const db = getLocalDB()
    const updatedDB = db.filter(function(currentStudent){
        return currentStudent.id != student.id;
    })

    updateDB(updatedDB)
}

// function to select a student

function getStudent(id){
    const db = getLocalDB()
    var filteredBD = db.filter((data)=>data.id==id)
    if(filteredBD.length>0){
        return filteredBD[0]
    }
    return null
}

// function to search a student

function searchStudentByName(name){
    const db = getLocalDB()
    const filteredBD = db.filter((data)=>{
        return data.firstname.toLowerCase().include(name.toLowerCase()) || data.lastname.toLowerCase().include(name.toLowerCase())
    })
    return filteredBD
}

// I can't use this function. when i use the if case, it not works
function chechstudentexists(name){
    const db = getLocalDB()
    const filteredBD = db.filter((data)=>{
        return data.firstname.toLowerCase()==name.toLowerCase() && data.lastname.toLowerCase() == name.toLowerCase()
    })
    return filteredBD.length>0
}
