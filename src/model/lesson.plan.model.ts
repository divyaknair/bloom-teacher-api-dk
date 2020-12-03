import { model, Schema, Model, Document } from 'mongoose';

export interface ILessonPlan extends Document {
    teacherId: string;
    studentId: string;
    sectionId: string;
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

const LessonPlanSchema: Schema = new Schema({
    teacherId: { type: String, required: true },
    studentId: { type: String, required: true },
    sectionId: { type: String, required: true },
    lessonPlanName: { type: String, required: true },
    topicName: { type: String, required: true },
    assignments: [
        {
            assignmentId: { type: String, required: true },
            assignmentName: { type: String, required: true },
            startDate: { type: String, required: true },
            endDate: { type: String, required: true },
            status: { type: String, required: true },
        }
    ]
    
});

export const LessonPlanModel: Model<ILessonPlan> = model<ILessonPlan>('lesson-plans', LessonPlanSchema);