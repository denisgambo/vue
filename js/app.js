function checkStudent(obj){
    let isEmpty=false
    for(const prop in obj){
        if(obj[prop]==""){
            isEmpty=true
        }
    }
    return isEmpty
}

const errormessage = (message)=>{
    swal.fire({
       
        icon:'error',
        title: 'oops',
        text:message,
    })
}

const successmessage = (message)=>{
    swal.fire({
        position:'top-end',
        icon:'success',
        title: message,
        showConfirmationButton: false,
        timer:1500
    })
}

const App = {
    data(){
        return {
            showHome:false,
            showCreateForm : false,
            showStudentsList: false,

            newStudent: {
                firstname: "",
                lastname:"",
                birthday:"",
                level:""
            },
            allstudents:[]

        }
    },
    mounted(){
        this.changeNavigationState("home");
        this.allStudents();
    },
    methods: {
        goToHome() {
            this.changeNavigationState("home")
        },
        goToCreateForm() {
            this.changeNavigationState("create")
        },

        goToStudentsList() {
            this.changeNavigationState("list")
        },

        submitStudent(){
            addStudent(this.newStudent)
            this.allStudents()// To update automatically the list
            successmessage("Student inserted successfully")
            this.newStudent={
                firstname:"",
                lastname:"",
                birthday:"",
                level:""
            }

            // i have difficulties to use this check function
            
            /* if(!checkStudent){
                addStudent(this.newStudent)
                this.newStudent={
                    firstname:"",
                    lastname:"",
                    birthday:"",
                    level:""
                }
                successmessage("Student inserted successfully")
                
            }else{
                //error
                console.log(this.newStudent)
            } */
            
        },

        allStudents(){
            this.allstudents = getLocalDB()
        },
        removeStudent(student){
            deleteStudent(student)
            this.allStudents() //to update automatically the list
        },
        //I can navigate to the the student registration and fill fields with the student that i want to update.
        //But i don't when i click the button, it adds a new student because this button another function
        //The name of the update function in api.js is updateStudent(student)
        //How can i make the button call this function?
        updatestudentfunct(student){
            this.changeNavigationState("create")
            this.newStudent = {
                firstname: student.firstname,
                lastname: student.lastname,
                birthday: student.birthday,
                level: student.level
            }
        },

        changeNavigationState(destination) {
            this.showCreateForm = false
            this.showHome = false
            this.showStudentsList = false

            switch (destination) {
                case "home":
                    this.showHome = true
                    break;
                case "create":
                    this.showCreateForm = true
                    break;
                case "list":
                    this.showStudentsList = true
                    break;

                default:
                    this.showHome = true
                    break;
            }
        }

    }
    
}
Vue.createApp(App).mount('#app')
