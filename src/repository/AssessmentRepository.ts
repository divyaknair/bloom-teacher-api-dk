import { connect, disconnect } from "../config/db.config";
import { AssessmentModel, IAssessment } from '../model';
import { StudentModel, IStudent } from '../model';

export class AssessmentRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

    async createAssessment(Assessment: any) : Promise<any> {
        //console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)
        return await AssessmentModel.create(Assessment);
    }

    async listAssessment(teacherId,sectionId, AssessmentName): Promise<any> {
        console.log ("tid and sid",teacherId)
        console.log (" sid",sectionId)
        return await AssessmentModel.find({teacherId,sectionId, AssessmentName});
    }
    
    async listAllAssessments(teacherId:any, sectionId:any): Promise<any> {
        console.log("AssessmentRepository.listAssessments (teacherId, sectionId): ", teacherId, sectionId);
        return await AssessmentModel.find({teacherId: teacherId, sectionId: sectionId});
       
    }
    async updateAssessment(Assessment: any) : Promise<any> {
        console.log("AssessmentRepository.updateAssessment : ", Assessment)
        let existingAssessment = await AssessmentModel.findOne({"AssessmentName": Assessment.AssessmentName});
        await existingAssessment.set(Assessment);
        return await existingAssessment.save();
    }
    
    async assignAssessment(assessment: any) : Promise<any> {
        console.log("AssessmentRepository.assignAssessment : ", assessment)
        //let assignAllSection = assessment.assignAllSection
        console.log("in assign repository:::::",assessment)
        if(assessment.assignAllSection== "true")
        {
           
            let studentsToAdd:any[] = await StudentModel.find({"sectionId": assessment.sectionId,"teacherId":assessment.teacherId}).select("studentId");
            console.log("inside If assignallsection",studentsToAdd)
            let existingAssessment = await AssessmentModel.findOne({"assessmentId": assessment.assessmentId});
            await existingAssessment.set({"assignTo":studentsToAdd});
             return await existingAssessment.save();
        }
        else 
        {
            let studentsToAdd:any[]=assessment.students
            let existingAssessment = await AssessmentModel.findOne({"assessmentId": assessment.assessmentId});
            await existingAssessment.set({"assignTo":studentsToAdd});
           return await existingAssessment.save();
        }
        
    }
    async deleteAssessment(assessmentName:any): Promise<any> {
        return await AssessmentModel.findOneAndDelete({"assessmentId":assessmentName});
    }

}