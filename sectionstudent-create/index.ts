import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { StudentController } from '../src/controller';
import { StudentRequest } from '../src/request';

const StudentCreate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const studentController = new StudentController();
    const student = req.body && req.body.student;
    const studentRequest = new StudentRequest(student);
    const result = await studentController.createStudents(studentRequest);
    console.log("final result of Student create will be",result)

    context.res = {
        // status: 200, /* Defaults to 200 */
        
        body: result,
        headers: {'Content-Type': 'application/json'}
    };

};
export default StudentCreate;