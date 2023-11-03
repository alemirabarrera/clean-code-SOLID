(()=>{

    //principio responsabilidad unnica.

    //Priorizar la composicion frente a la herencia.
    //aplicando el principio de responsabilidad unica.
    type Gender = 'M' | 'F';
    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }
    
    class Person {  
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor ({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;  
            this.birthdate = birthdate;
        }
    }


    interface userProps{        
        email: string,     
        role: string,
    }
    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;        

        constructor({email, role}: userProps){                                    
            this.email =email;
            this.lastAccess =  new Date()            
            this.role =role;
        }

        checkCredencials(){
           return true; 
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;     
    }
    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            {workingDirectory,
            lastOpenFolder}: SettingsProps) {            
                this.workingDirectory = workingDirectory;
                this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface userSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string; 
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({workingDirectory,
                    lastOpenFolder, 
                    email,
                    role,
                    name,
                    gender,
                    birthdate}: userSettingsProps){
                        this.person = new Person({name, gender, birthdate});
                        this.user = new User({email, role});
                        this.settings = new Settings({workingDirectory, lastOpenFolder});
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: 'home/user',
        lastOpenFolder: '/home',
        email:'ale@gmail.com',
        role:'Admin',
        name:'Alejandro',
        gender:'M',
        birthdate:new Date('2000-01-02')});

        console.log({userSettings});

})()