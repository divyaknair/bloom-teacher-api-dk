import { IRequest } from "./IRequest";

export class Student {
    teacherid: string;
    sectionid:string;
    sectionname:string;
    stufirstname:string;
    stulastname:string;
    studentid:string;
    email:string;
  }

export class StudentRequest implements IRequest {

    constructor(Student: Student) {
        this.Student = Student;
    }

    public Student: Student

    public getStudent() {
        return this.Student;
    }

    public setStudent(Student: Student) {
        this.Student = Student;
    }
}