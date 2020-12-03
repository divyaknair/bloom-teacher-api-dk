import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { LessonPlanController } from '../src/controller';

const LessonPlanRead: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("LESSON-PLAN-READ REQUEST.params:: ", req.params);

    const lessonPlanController = new LessonPlanController();
    const teacherId = req.params && req.params.teacherId;
    const sectionId = req.params && req.params.sectionId;
    const lessonPlanName = req.params && req.params.lessonPlanName;
    
    context.res = {
        status: 200, /* Defaults to 200 */
        body: await lessonPlanController.getLessonPlan(teacherId, sectionId, lessonPlanName),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default LessonPlanRead;