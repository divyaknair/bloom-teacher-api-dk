import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { LessonPlanController } from '../src/controller';
import { LessonPlanRequest } from '../src/request';

const LessonPlanCreate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("LESSON-PLAN-CREATE REQUEST:: ", req);

    const lessonPlanController = new LessonPlanController();
    const lessonPlan = req.body && req.body.lessonPlan;
    const lessonPlanRequest = new LessonPlanRequest(lessonPlan);
    context.res = {
        status: 200, /* Defaults to 200 */
        body: await lessonPlanController.createLessonPlan(lessonPlanRequest),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default LessonPlanCreate;