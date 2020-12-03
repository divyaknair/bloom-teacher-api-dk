import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AssessmentController } from '../src/controller';

const AssessmentDelete: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("Assessment-DELETE REQUEST.params:: ", req.params);

    const assessmentController = new AssessmentController();
    const AssessmentName = req.params && req.params.assessmentId;
    
    context.res = {
        status: 200, /* Defaults to 200 */
        body: await assessmentController.deleteAssessment(AssessmentName),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default AssessmentDelete;