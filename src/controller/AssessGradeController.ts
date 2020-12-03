import { AssessGradeService } from '../service';
import { AssessGradeRequest} from '../request'

export class AssessGradeController {

    private assessGradeService: AssessGradeService;

    constructor() {
        this.assessGradeService = new AssessGradeService();
    }

    public async listAssessGrades(teacherId,sectionId,studentId) {
        console.log("sectionId from controller-------",sectionId)
        return await this.assessGradeService.listAssessGrades(teacherId,sectionId,studentId);
    }

    public async createAssessGrades(AssessGradeRequest: AssessGradeRequest) {
        
        return await this.assessGradeService.createAssessGrades(AssessGradeRequest);
    }

    public async fetchClassGradeAverages(teacherId, sectionId) {
        return await this.assessGradeService.fetchClassGradeAverages(teacherId, sectionId);
    }
}