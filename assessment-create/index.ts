import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AssessmentController } from '../src/controller';
import { AssessmentRequest } from '../src/request';

const AssessmentCreate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const assessmentController = new AssessmentController();
    const assessment = req.body && req.body.assessment;
    const assessmentRequest = new AssessmentRequest(assessment);
    const result = await assessmentController.createAssessment(assessmentRequest);
    console.log("final result of Grade create will be",result)

    context.res = {
        // status: 200, /* Defaults to 200 */
        
        body: result,
        headers: {'Content-Type': 'application/json'}
    };

};

export default AssessmentCreate;