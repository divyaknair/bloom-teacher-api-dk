import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AssessmentController } from '../src/controller';

const AssessmentGetAll: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("assessment-READ-ALL REQUEST.params:: ", req.params);

    const assessmentController = new AssessmentController();
    const teacherId = req.params && req.params.teacherId;
    const sectionId = req.params && req.params.sectionId;
    
    context.res = {
        status: 200, /* Defaults to 200 */
        body: await assessmentController.listAllAssessments(teacherId, sectionId),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default AssessmentGetAll;