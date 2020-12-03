import { GradeRepository } from '../repository';
import { GradeRequest, Grade } from '../request';
import { GradeResponse } from '../response';

export class GradeService {

    gradeRepository: GradeRepository;

    constructor() {
        this.gradeRepository = new GradeRepository();
    }

    async listGrades(teacherId): Promise<any> {

        const grades= await this.gradeRepository.listGrades(teacherId);

        console.log("the listed details frm grade",grades);
         return grades
        // const gradeList = new Array<Grade>();
        // const gradeResponse = new GradeResponse();
        // var p = new Promise((resolve, reject) => {
        //        console.log("in the function")
        //     grades.forEach(grade => {
        //         const grades = new Grade();
        //         grades.teacherId=grade.teacherId;
        //         grades.SectionName=grade.SectionName;
        //         grades.sectionId=grade.sectionId;
        //         grades.section=grade.section;
        //     })
        //     gradeResponse.grade=gradeList;
        //     resolve(GradeResponse);
        // });
        

        // return p;
    }

    public async createGrades(userRequest: GradeRequest,teacherId) {
        console .log("after user service its in  step in gradeRepository", GradeRequest);
        return await this.gradeRepository.createGrade(userRequest.getGrade(),teacherId);
    }

}