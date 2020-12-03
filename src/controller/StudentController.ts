import { StudentService } from '../service';
import { StudentRequest} from '../request'

export class StudentController {

    private studentService: StudentService;

    constructor() {
        this.studentService = new StudentService();
    }

    public async listStudents(teacherId,sectionId) {
        return await this.studentService.listStudents(teacherId,sectionId);
    }

    public async createStudents(StudentRequest: StudentRequest) {
        
        return await this.studentService.createStudents(StudentRequest);
    }
}