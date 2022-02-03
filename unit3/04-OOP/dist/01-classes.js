"use strict";
// class Department {
//     static paycheck = 100000000
//     static upadatePay = (newNum: number) => {
//         Department.paycheck = newNum
//         return this.paycheck
//     }
// }
// const IT = new Department()
class projectMath {
    static speed(time) {
        return time ** 2 * projectMath.gravity;
    }
}
projectMath.gravity = 9.8;
projectMath.speed(4); //
class Gradebook {
    static addGrade(newGrade) {
        Gradebook.grades.push(newGrade);
        return Gradebook.grades;
    }
    static printGrades() {
        console.log(...Gradebook.grades);
        //  Gradebook.grades.join(" ")
    }
    static findPassing() {
        const passingGrades = Gradebook.grades.filter((grade) => grade > Gradebook.passingGrade);
        return passingGrades;
    }
    static removeLowest() {
        const min = Math.min(...Gradebook.grades);
        Gradebook.grades.splice(Gradebook.grades.indexOf(min), 1);
        return Gradebook.grades;
    }
    static gradeAverage() {
        const sum = Gradebook.grades.reduce((curr, next) => {
            return curr + next;
        }, 0);
        return sum / Gradebook.grades.length;
    }
}
Gradebook.grades = [90, 80, 5, 19, 65];
Gradebook.passingGrade = 65;
console.log(Gradebook.gradeAverage());
class Department {
    // private name: string
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        // this.name = name
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmplyeeInfomation() {
        console.log(this.employees.length);
        console.log(...this.employees);
    }
}
Department.fiscalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
    describe() {
        console.log("IT Department -ID:" + this.id);
    }
}
const employee1 = Department.createEmployee("Max");
const it = new ITDepartment("d1", ["jimmy", employee1.name]);
it.addEmployee("tammy");
it.addEmployee("tommy");
console.log(it.admins);
it.describe();
it.printEmplyeeInfomation();
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super("Accounting", id);
        this.reports = reports;
    }
    get MostRecent() {
        if (this.reports.length > 0) {
            return this.reports[this.reports.length - 1];
        }
        return "no reports submitted";
    }
    set mostRecent(value) {
        if (!value) {
            throw new Error("invalied report");
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
    }
    describe() {
        console.log("Accounting Department - ID" + this.id);
    }
    printReports() {
        if (this.reports.length === 0) {
            console.log('there are not reports');
            return;
        }
    }
}
