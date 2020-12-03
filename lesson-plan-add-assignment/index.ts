import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { LessonPlanController } from '../src/controller';

const LessonPlanAddAssignment: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("LESSON-PLAN-ADD-ASSIGNMENT REQUEST:: ", req);

    const lessonPlanController = new LessonPlanController();
    const assignmentToBeAdded = req.body && req.body.assignmentToBeAdded;
    const lessonPlanName = req.body && req.body.lessonPlanName;
    context.res = {
        status: 200, /* Defaults to 200 */
        body: await lessonPlanController.addAssignmentToLessonPlan(lessonPlanName, assignmentToBeAdded),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default LessonPlanAddAssignment;