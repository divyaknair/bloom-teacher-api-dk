import { LessonPlanRepository } from '../repository';
import { LessonPlanRequest } from '../request';

export class LessonPlanService {

    lessonPlanRepository: LessonPlanRepository;

    constructor() {
        this.lessonPlanRepository = new LessonPlanRepository();
    }

    async listLessonPlans(teacherId, sectionId): Promise<any> {
        const lessonPlans = await this.lessonPlanRepository.listLessonPlans(teacherId, sectionId);
        console.log("the listed details frm lessonPlan", lessonPlans);
        return lessonPlans
    }

    async getLessonPlan(teacherId, sectionId, lessonPlanName): Promise<any> {
        const lessonPlans = await this.lessonPlanRepository.getLessonPlan(teacherId, sectionId, lessonPlanName);
        console.log("lessonPlan fetched i: ", lessonPlans);
        return lessonPlans
    }

    public async createLessonPlan(lessonPlanRequest: LessonPlanRequest) {
        console.log("in LessonPlanService.createLessonPlan: lessonPlanRequest.getLessonPlan(): ", lessonPlanRequest.getLessonPlan());
        return await this.lessonPlanRepository.createLessonPlan(lessonPlanRequest.getLessonPlan());
    }

    public async updateLessonPlan(lessonPlan: any) {
        console.log("in LessonPlanService.updateLessonPlan lessonPlan: ", lessonPlan);
        return await this.lessonPlanRepository.updateLessonPlan(lessonPlan);
    }

    public async addAssignmentToLessonPlan(lessonPlanName: string, assignmentToBeAdded: any) {
        console.log("in LessonPlanService.addAssignmentToLessonPlan lessonPlanName: ", lessonPlanName, assignmentToBeAdded);
        return await this.lessonPlanRepository.addAssignmentToLessonPlan(lessonPlanName, assignmentToBeAdded);
    }

    public async deleteLessonPlan(lessonPlanName: string) {
        console.log("in LessonPlanService.deleteLessonPlan lessonPlanName: ", lessonPlanName);
        return await this.lessonPlanRepository.deleteLessonPlan(lessonPlanName);
    }

    async getAssignmentToGrade(teacherId, sectionId): Promise<any> {
        const assignment = await this.lessonPlanRepository.getAssignmentToGrade(teacherId, sectionId);
        console.log("assignment to grade controller",teacherId, sectionId);
        console.log(" fetched i: ", assignment);
        return assignment
    }
}