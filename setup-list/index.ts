import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SetUpController } from '../src/controller';
import { GradeRequest } from '../src/request';

const SetUpList: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const setUpController = new SetUpController();
    //const setUp = req.body && req.body.teacherId;
    //const gradeRequest = new GradeRequest(grade);
    //const result = await gradeController.listGrades(req.body.teacherId);
    //console.log("final result of Grade create will be",result)

    context.res = {
        // status: 200, /* Defaults to 200 */
        
        body: await setUpController.listSetUp(req.params.schoolId),
        headers: {'Content-Type': 'application/json'}
    };

};

export default SetUpList;