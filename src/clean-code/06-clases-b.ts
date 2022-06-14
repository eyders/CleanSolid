(()=>{
    type Gender = 'M'|'F';

    interface PersonProps {
        name: string;
        gender: Gender; 
        birthdate: Date;
    }
    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps){
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
        }
    }

    interface UserProps {
        name: string;
        gender: Gender; 
        birthdate: Date;
        email: string;
        role: string;
    }
    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({email, role, name, gender, birthdate }: UserProps){
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps{
        name: string;
        gender: Gender; 
        birthdate: Date;
        email: string;
        role: string;
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor( {workingDirectory, lastOpenFolder, email, role, name, gender, birthdate}: UserSettingsProps){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'eyder@gmail.com',
        role: 'Admin',
        name: 'Eyder',
        gender: 'M',
        birthdate: new Date('1983-10-21')
    });

    
    console.log({userSettings});
    

})();