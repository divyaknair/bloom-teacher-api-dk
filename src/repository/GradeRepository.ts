import { connect, disconnect } from "../config/db.config";
import { GradeModel, IGrade } from '../model';

export class GradeRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

    async createGrade(assessGrade: any,teacherId:any) : Promise<any> {
        //console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)
        //Grade.count({/* criteria */}, { limit: 1 })
         
        const teacherValue=await GradeModel.count({"teacherId": teacherId});
        console.log("count value is",teacherValue)
        if(teacherValue > 0)
        {
            return[]
        }
         else
        //console.log("outside If teacher value is",teacherValue)
         return await GradeModel.create(assessGrade);
        
    }

    async listGrades(teacherId:any): Promise<any> {
        return await GradeModel.find({"teacherId": teacherId});
    }


}