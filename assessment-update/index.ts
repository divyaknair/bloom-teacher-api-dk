import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AssessmentController } from '../src/controller';

    const AssessmentUpdate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
        console.log("LESSON-PLAN-UPDATE REQUEST:: ", req);
    
        const assessmentController = new AssessmentController();
        const assessment = req.body && req.body.Assessment;
    
        context.res = {
            status: 200, /* Defaults to 200 */
            body: await assessmentController.updateAssessment(assessment),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    
    };
    
    export default AssessmentUpdate;