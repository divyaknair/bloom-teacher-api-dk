import { IRequest } from "./IRequest";

export class LessonPlan {
    teacherid: string;
    studentid: string;
    sectionid: string;
    lessonPlanName: string;
    topicName: string;
    assignments: [
        {
            assignmentId: string,
            assignmentName: string,
            startDate: string,
            endDate: string,
            status: string,
        }
    ]
  }

export class LessonPlanRequest implements IRequest {

    constructor(LessonPlan: LessonPlan) {
        this.LessonPlan = LessonPlan;
    }

    public LessonPlan: LessonPlan

    public getLessonPlan() {
        return this.LessonPlan;
    }

    public setStudent(LessonPlan: LessonPlan) {
        this.LessonPlan = LessonPlan;
    }
}