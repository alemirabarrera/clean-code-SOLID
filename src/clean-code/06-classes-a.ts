(()=>{

    //principio responsabilidad unnica.


    //no aplicando el principio:
    type Gender = 'M' | 'F';
    class Person {        
        constructor (
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){
            this.name = name;
            this.gender = gender;  
            this.birthdate = birthdate;
        }
    }

    /* const person= new Person('Alejandro','M',new Date('1999-10-06'));
    console.log('person: ');
    console.log({ person}); */

    class User extends Person{
        public lastAccess: Date
        constructor(
            public email: string,
            public role: string,
            name: string, 
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate);
            this.lastAccess =  new Date()
        }

        checkCredencials(){
           return true; 
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string, 
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, role, name, gender, birthdate);
        }
    }



    const userSettings = new UserSettings(
        'home/user',
        '/home',
        'ale@gmail.com',
        'Admin',
        'Alejandro',
        'M',
        new Date('2000-01-02'));

        console.log({userSettings});

})()