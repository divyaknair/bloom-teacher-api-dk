import { AssessGradeRepository } from '../repository';
import { AssessGradeRequest, Grade } from '../request';
//import { AssessGradeResponse } from '../response';

export class AssessGradeService {

    assessGradeRepository: AssessGradeRepository;

    constructor() {
        this.assessGradeRepository = new AssessGradeRepository();
    }

    async listAssessGrades(teacherId,sectionId,studentId): Promise<any> {
        console.log("sectionId from service-------",sectionId)
        const grades= await this.assessGradeRepository.listAssessGrades(teacherId,sectionId,studentId);

        console.log("the listed details frm assessgrade",grades);
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

    public async createAssessGrades(assessGradeRequest: AssessGradeRequest) {
        console .log("after user service its in  step in gradeRepository", AssessGradeRequest);
        return await this.assessGradeRepository.createAssessGrade(assessGradeRequest.getAssessGrade());
    }

    // public async fetchClassGradeAverages(assessGradeRequest: AssessGradeRequest) {
    public async fetchClassGradeAverages(teacherId, sectionId) {
        // console .log("class-average request: ", AssessGradeRequest);
        return await this.assessGradeRepository.fetchClassGradeAverages(teacherId, sectionId);
    }

}