import { StudentRepository } from '../repository';
import { StudentRequest, Student } from '../request';
//import { StudentResponse } from '../response';

export class StudentService {

    studentRepository: StudentRepository;

    constructor() {
        this.studentRepository = new StudentRepository();
    }

    async listStudents(teacherId,sectionId): Promise<any> {

        const students= await this.studentRepository.listStudents(teacherId,sectionId);

        console.log("the listed details frm student",students);
         return students
        
    }

    public async createStudents(studentRequest: StudentRequest) {
        console .log("after user service its in  step in StudentRepository", studentRequest);
        return await this.studentRepository.createStudent(studentRequest.getStudent());
    }

}