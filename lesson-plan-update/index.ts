import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { LessonPlanController } from '../src/controller';
import { LessonPlanRequest } from '../src/request';

const LessonPlanUpdate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("LESSON-PLAN-UPDATE REQUEST:: ", req);

    const lessonPlanController = new LessonPlanController();
    const lessonPlan = req.body && req.body.lessonPlan;

    context.res = {
        status: 200, /* Defaults to 200 */
        body: await lessonPlanController.updateLessonPlan(lessonPlan),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default LessonPlanUpdate;