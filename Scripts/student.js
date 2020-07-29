var objects;
(function (objects) {
    class Student extends objects.Person {
        //Constructor
        constructor(name, age, studentID) {
            super(name, age);
            this.StudentID = studentID;
        }
        //Public properties
        get StudentID() {
            return this.m_studentID;
        }
        set StudentID(value) {
            this.m_studentID = value;
        }
        Studies() {
            console.log(`${this.Name} is studying.`);
        }
    }
    objects.Student = Student;
})(objects || (objects = {}));
//# sourceMappingURL=student.js.map