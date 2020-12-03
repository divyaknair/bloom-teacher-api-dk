import { AssessmentService } from '../service';
import {  AssessmentRequest} from '../request'

export class AssessmentController {

    private assessmentService: AssessmentService;

    constructor() {
        this.assessmentService = new AssessmentService();
    }

    public async listAssessment(teacherId,sectionId, AssessmentName) {
        return await this.assessmentService.listAssessment(teacherId,sectionId, AssessmentName);
    }

    public async createAssessment(AssessmentRequest: AssessmentRequest) {
        
        return await this.assessmentService.createAssessment(AssessmentRequest);
    }

    public async updateAssessment(AssessmentRequest: AssessmentRequest) {
        return await this.assessmentService.updateAssessment(AssessmentRequest);
    }
    public async listAllAssessments(teacherId, sectionId) {
        return await this.assessmentService.listAllAssessments(teacherId, sectionId);
    }
    public async assignAssessments(assessment) {
        return await this.assessmentService.assignAssessment(assessment);
    }
    

    public async deleteAssessment(assessmentName: string) {
        return await this.assessmentService.deleteAssessment(assessmentName);
    }
}