import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { AssessGradeController } from '../src/controller';
import { StudentRequest } from '../src/request';

const StudentCreate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    console.log("CLASS-AVERAGE REQUEST.PARAMS:: ", req.params);
    // console.log("CLASS-AVERAGE CONTEXT:: ", context);

    const assessGradeController = new AssessGradeController();
    //const student = req.body && req.body.teacherId;
    //const studentRequest = new StudentRequest(student);
    //const result = await studentController.listStudents(req.body.teacherId);
    //console.log("final result of student create will be",result)

    let teacherId = req.params.teacher_id
    let sectionId = req.params.section_id
    context.res = {
        // status: 200, /* Defaults to 200 */
        
        body: await assessGradeController.fetchClassGradeAverages(teacherId, sectionId),
        headers: {'Content-Type': 'application/json'}
    };

};

export default StudentCreate;