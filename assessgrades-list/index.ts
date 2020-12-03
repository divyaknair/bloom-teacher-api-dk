import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AssessGradeController } from '../src/controller';
import { AssessGradeRequest } from '../src/request';

const AssessGradeList: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const assessGradeController = new AssessGradeController();
    //const grade = req.body && req.body.teacherId;
    //const gradeRequest = new GradeRequest(grade);
    //const result = await gradeController.listGrades(req.body.teacherId);
    //console.log("final result of Grade create will be",result)

    context.res = {
        // status: 200, /* Defaults to 200 */
        
        body: await assessGradeController.listAssessGrades(req.params.teacherId,req.params.sectionId,req.params.studentId),
        headers: {'Content-Type': 'application/json'}
    };

};

export default AssessGradeList;