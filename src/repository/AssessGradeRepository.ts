import { connect, disconnect } from "../config/db.config";
import { AssessGradeModel, IAssessgrade } from '../model';

export class AssessGradeRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

    async createAssessGrade(asssessGrade: any) : Promise<any> {
        //console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)
        return await AssessGradeModel.create(asssessGrade);
    }

    async listAssessGrades(teacherId,sectionId,studentId:any): Promise<any> {
        console.log("teacherId...........",teacherId)
        console.log("sectionId........",sectionId)
        console.log("studentId............",studentId)

        return await AssessGradeModel.findOne({teacherId,sectionId,studentId});
    }

    async fetchClassGradeAverages(teacherId:any, sectionId: any): Promise<any> {
        let selectedFields = { "teacherId": 1, "sectionId": 1, "finalGrade": 1, "_id": 0};
        // let classGradeAverages = await AssessGradeModel.find({teacherId: "", sectionId: ""}).select(filter);
        let classGradeAverages:any[] = await AssessGradeModel.find({teacherId, sectionId}).select(selectedFields);

        let classAverages = {
            teacherId
            , sectionId
            , totalStudents: classGradeAverages.length
            , avarages: [
                {
                    "grade": "A",
                    "average": classGradeAverages.filter((item) => item.finalGrade === "A").length.toString()
                },
                {
                    "grade": "B",
                    "average": classGradeAverages.filter((item) => item.finalGrade === "B").length.toString()
                },
                {
                    "grade": "C",
                    "average": classGradeAverages.filter((item) => item.finalGrade === "C").length.toString()
                },
                {
                    "grade": "D",
                    "average": classGradeAverages.filter((item) => item.finalGrade === "D").length.toString()
                },
                {
                    "grade": "E",
                    "average": classGradeAverages.filter((item) => item.finalGrade === "E").length.toString()
                },
                {
                    "grade": "F",
                    "average": classGradeAverages.filter((item) => item.finalGrade === "F").length.toString()
                },
            ]
        }
        return classAverages
    }


}