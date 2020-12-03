import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { LessonPlanController } from '../src/controller';

const LessonPlanDelete: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("LESSON-PLAN-DELETE REQUEST.params:: ", req.params);

    const lessonPlanController = new LessonPlanController();
    const lessonPlanName = req.params && req.params.lessonPlanName;
    
    context.res = {
        status: 200, /* Defaults to 200 */
        body: await lessonPlanController.deleteLessonPlan(lessonPlanName),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default LessonPlanDelete;