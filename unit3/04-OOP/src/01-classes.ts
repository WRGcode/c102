// class Department {
//     static paycheck = 100000000

//     static upadatePay = (newNum: number) => {
//         Department.paycheck = newNum
//         return this.paycheck
//     }
// }

// const IT = new Department()



class projectMath {
    static gravity = 9.8
    static speed(time: number) {
        return time ** 2 * projectMath.gravity
    }
}

projectMath.speed(4) //



class Gradebook {
    static grades: number[] = [90, 80, 5, 19, 65]
    static passingGrade: number = 65

    static addGrade(newGrade: number): number[] {
        Gradebook.grades.push(newGrade)
        return Gradebook.grades
    }

    static printGrades(): void {
        console.log(...Gradebook.grades);
        //  Gradebook.grades.join(" ")
    }

    static findPassing(): number[] {
        const passingGrades = Gradebook.grades.filter(
            (grade) => grade > Gradebook.passingGrade
        )
        return passingGrades
    }

    static removeLowest(): number[] {
        const min = Math.min(...Gradebook.grades)
        Gradebook.grades.splice(Gradebook.grades.indexOf(min), 1)
        return Gradebook.grades
    }

    static gradeAverage(): number {
        const sum = Gradebook.grades.reduce((curr, next) => {
            return curr + next
        }, 0)

        return sum / Gradebook.grades.length;
    }
}
console.log(Gradebook.gradeAverage());


abstract class Department {
    static fiscalYear = 2022
    protected employees: string[] = []

    // private name: string

    constructor(
        public name: string,
        protected readonly id: string
    ) {
        // this.name = name
    }

    static createEmployee(name: string) {
        return { name: name }
    }
    // any extended class now require a describe method
    abstract describe(this: Department): void

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmplyeeInfomation() {
        console.log(this.employees.length);
        console.log(...this.employees);
    }
}

class ITDepartment extends Department {

    constructor(id: string, public admins: string[]) {
        super("IT", id)
    }
    describe() {
        console.log("IT Department -ID:" + this.id);

    }
}

const employee1 = Department.createEmployee("Max")

const it = new ITDepartment("d1", ["jimmy", employee1.name])

it.addEmployee("tammy")
it.addEmployee("tommy")

console.log(it.admins);

it.describe()
it.printEmplyeeInfomation()

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super("Accounting", id)
    }

    get MostRecent() {
        if (this.reports.length > 0) {
            return this.reports[this.reports.length - 1]
        }
        return "no reports submitted"
    }

    set mostRecent(value: string) {
        if (!value) {
            throw new Error("invalied report")
        }
        this.addReport(value)
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    describe(): void {
        console.log("Accounting Department - ID" + this.id);
    }

    printReports() {
        if (this.reports.length === 0) {
            console.log('there are not reports');
            return
        }

    }
}