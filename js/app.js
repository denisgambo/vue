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
            }

        }
    },
    mounted(){
        this.changeNavigationState("home");
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
