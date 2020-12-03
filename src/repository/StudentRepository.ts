import { connect, disconnect } from "../config/db.config";
import { StudentModel, IStudent } from '../model';

export class StudentRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

    async createStudent(student: any) : Promise<any> {
        //console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)
        return await StudentModel.create(student);
    }

    async listStudents(teacherId,sectionId): Promise<any> {
        console.log ("tid and sid",teacherId)
        console.log (" sid",sectionId)
        return await StudentModel.find({teacherId,sectionId});
    }


}