import { connect, disconnect } from "../config/db.config";
import { LessonPlanModel, ILessonPlan } from '../model';
import { AssessmentModel, IAssessment } from '../model';

export class LessonPlanRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

    async createLessonPlan(lessonPlan: any) : Promise<any> {
        console.log("lesson plan is", lessonPlan)
        return await LessonPlanModel.create(lessonPlan);
    }

    async updateLessonPlan(lessonPlan: any) : Promise<any> {
        console.log("LessonPlanRepository.updateLessonPlan lesson plan: ", lessonPlan)
        let existingLessonPlan = await LessonPlanModel.findOne({"lessonPlanName": lessonPlan.lessonPlanName});
        await existingLessonPlan.set(lessonPlan);
        return await existingLessonPlan.save();
    }

    async listLessonPlans(teacherId:any, sectionId:any): Promise<any> {
        console.log("LessonPlanRepository.listLessonPlans (techerId, sectionId): ", teacherId, sectionId);
        return await LessonPlanModel.find({teacherId: teacherId, sectionId: sectionId});
        // return await LessonPlanModel.find({});
    }

    async getLessonPlan(teacherId:any, sectionId:any, lessonPlanName:any): Promise<any> {
        return await LessonPlanModel.find({teacherId: teacherId, sectionId: sectionId, lessonPlanName:lessonPlanName});
    }

    async addAssignmentToLessonPlan(lessonPlanName:any, assignmentToBeAdded: any): Promise<any> {
        let lessonPlan =  await LessonPlanModel.findOne({"lessonPlanName":lessonPlanName});
        console.log("LessonPlanRepository.addAssignmentToLessonPlan (fetched lessonPlan): ", lessonPlan);
        await lessonPlan.assignments.push(assignmentToBeAdded);
        return await lessonPlan.save();
    }

    async deleteLessonPlan(lessonPlanName:any): Promise<any> {
        return await LessonPlanModel.findOneAndDelete({"lessonPlanName":lessonPlanName});
    }

    async getAssignmentToGrade(teacherId:any, sectionId:any): Promise<any> {
        let finalAssignments=[{"teacherId": teacherId, "sectionId": sectionId}]
        let selectedFields = {  "assignments.assignmentName": "","assignments.assignmentId":" ","assignments.startDate":"","assignments.endDate":""};
        let Assignments:any[] = await LessonPlanModel.find({teacherId: teacherId, sectionId: sectionId}).select(selectedFields);
         
        
        let selectedFields2={  "assessmentId": " ","assessmentName":" ","startDate":" ","endDate":" "};
        let Assessments:any[]= await AssessmentModel.find({teacherId: teacherId, sectionId: sectionId, status : 'created' }).select(selectedFields2);
           finalAssignments.push(...Assignments, ...Assessments)
         return finalAssignments;

    }

}