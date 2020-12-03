import { AssessmentRepository } from '../repository';
import { AssessmentRequest, Assessment} from '../request';
//import { AssessmentResponse } from '../response';

export class AssessmentService {

    assessmentRepository: AssessmentRepository;

    constructor() {
        this.assessmentRepository = new AssessmentRepository();
    }

    async listAssessment(teacherId,sectionId, AssessmentName): Promise<any> {

        const Assessment= await this.assessmentRepository.listAssessment(teacherId,sectionId, AssessmentName);

        console.log("the listed details frm Assessment",Assessment);
         return Assessment
        
    }

    async listAllAssessments(teacherId, sectionId): Promise<any> {
        const Assessments = await this.assessmentRepository.listAllAssessments(teacherId, sectionId);
        console.log("the listed details frm Assessment", Assessments);
        return Assessments
    }

    public async createAssessment(AssessmentRequest: AssessmentRequest) {
        console .log("after user service its in  step in AssessmentRepository", AssessmentRequest);
        return await this.assessmentRepository.createAssessment(AssessmentRequest.getAssessment());
    }

    public async updateAssessment(Assessment: any) {
        console.log("in AssessmentService.updateAssessment Assessment: ", Assessment);
        return await this.assessmentRepository.updateAssessment(Assessment);
    }

    public async assignAssessment(assessment: any) {
        console.log("in AssessmentService.assignAssessment Assessment: ", assessment);
        return await this.assessmentRepository.assignAssessment(assessment);
    }
    public async deleteAssessment(assignmentName: string) {
        console.log("in assignmentnService.deleteassignment assignmentName: ", assignmentName);
        return await this.assessmentRepository.deleteAssessment(assignmentName);
    }
}