module objects{
    export class Student extends Person
    {
        //Private instance variables (Fields)
        private m_studentID:string;

        //Public properties
        get StudentID():string
        {
            return this.m_studentID
        }
        set StudentID(value:string)
        {
            this.m_studentID = value;
        }

        //Constructor
        constructor(name:string, age:number, studentID:string)
        {
            super(name, age);
            this.StudentID = studentID
        }

        public Studies():void
        {
            console.log(`${this.Name} is studying.`);
        }
    }
}