import { LessonPlanService } from '../service';
import { LessonPlanRequest } from '../request'

export class LessonPlanController {

    private lessonPlanService: LessonPlanService;

    constructor() {
        this.lessonPlanService = new LessonPlanService();
    }

    public async listLessonPlans(teacherId, sectionId) {
        return await this.lessonPlanService.listLessonPlans(teacherId, sectionId);
    }

    public async getLessonPlan(teacherId, sectionId, lessonPlanName) {
        console.log("in get lesson plan")
        return await this.lessonPlanService.getLessonPlan(teacherId, sectionId, lessonPlanName);
    }

    public async createLessonPlan(LessonPlanRequest: LessonPlanRequest) {
        return await this.lessonPlanService.createLessonPlan(LessonPlanRequest);
    }

    public async updateLessonPlan(LessonPlanRequest: LessonPlanRequest) {
        return await this.lessonPlanService.updateLessonPlan(LessonPlanRequest);
    }

    public async addAssignmentToLessonPlan(lessonPlanName: string, assignmentToBeAdded: any) {
        return await this.lessonPlanService.addAssignmentToLessonPlan(lessonPlanName, assignmentToBeAdded);
    }

    public async deleteLessonPlan(lessonPlanName: string) {
        return await this.lessonPlanService.deleteLessonPlan(lessonPlanName);
    }
    public async getAssignmentToGrade(teacherId, sectionId) {
        console.log("assignment to grade controller",teacherId, sectionId);
        return await this.lessonPlanService.getAssignmentToGrade(teacherId, sectionId);
    }

}