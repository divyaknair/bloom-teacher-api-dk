import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AssessGradeController } from '../src/controller';
import { AssessGradeRequest } from '../src/request';

const AssessGradeCreate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const assessGradeController = new AssessGradeController();
    const assessGrade = req.body && req.body.assessGrade;
    const assessGradeRequest = new AssessGradeRequest(assessGrade);
    const result = await assessGradeController.createAssessGrades(assessGradeRequest);
    console.log("final result of Grade create will be",result)

    context.res = {
        // status: 200, /* Defaults to 200 */
        
        body: result,
        headers: {'Content-Type': 'application/json'}
    };

};

export default AssessGradeCreate;