(()=>{

    //principio responsabilidad unnica.


    //no aplicando el principio:
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
    birthdate: Date
    email: string,
    gender: Gender,
    name: string, 
    role: string,
}
    class User extends Person{
        public email: string;
        public role: string;        
        public lastAccess: Date;
        constructor({email, role, name, gender,birthdate}: userProps){            
            super({name,gender,birthdate});
            
            this.email =email;            
            this.lastAccess =  new Date()            
            this.role =role;
        }

        checkCredencials(){
           return true; 
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
    class UserSettings extends User{
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            {workingDirectory,
            lastOpenFolder, 
            email,
            role,
            name,
            gender,
            birthdate}: userSettingsProps
            ) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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