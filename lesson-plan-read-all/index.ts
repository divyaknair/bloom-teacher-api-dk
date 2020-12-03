import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { LessonPlanController } from '../src/controller';

const LessonPlanReadAll: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("LESSON-PLAN-READ-ALL REQUEST.params:: ", req.params);

    const lessonPlanController = new LessonPlanController();
    const teacherId = req.params && req.params.teacherId;
    const sectionId = req.params && req.params.sectionId;
    
    context.res = {
        status: 200, /* Defaults to 200 */
        body: await lessonPlanController.listLessonPlans(teacherId, sectionId),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default LessonPlanReadAll;