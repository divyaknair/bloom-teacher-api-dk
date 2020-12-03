import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AssessmentController } from '../src/controller';

const AssessmentAssign: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("LESSON-PLAN-ADD-ASSIGNMENT REQUEST:: ", req);

    const assessmentController = new AssessmentController();
    const assessment = req.body && req.body.assessment;
    
    context.res = {
        status: 200, /* Defaults to 200 */
        body: await assessmentController.assignAssessments(assessment),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default AssessmentAssign;