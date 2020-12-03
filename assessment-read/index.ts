import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AssessmentController } from '../src/controller';

const AssessmentRead: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log("Assessment-READ REQUEST.params:: ", req.params);

    const assessmentController = new AssessmentController();
    const teacherId = req.params && req.params.teacherId;
    const sectionId = req.params && req.params.sectionId;
    const AssessmentName = req.params && req.params.AssessmentName;
    
    context.res = {
        status: 200, /* Defaults to 200 */
        body: await assessmentController.listAssessment(teacherId, sectionId, AssessmentName),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

};

export default AssessmentRead;