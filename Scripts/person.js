var objects;
(function (objects) {
    class Person {
        // constructor
        constructor(name, age) {
            this.m_name = name;
            this.m_age = age;
        }
        // public methods
        saysHello() {
            console.log(`${this.m_name} says hello!`);
        }
    }
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map