import { GradeService } from '../service';
import { GradeRequest} from '../request'

export class GradeController {

    private gradeService: GradeService;

    constructor() {
        this.gradeService = new GradeService();
    }

    public async listGrades(teacherId) {
        return await this.gradeService.listGrades(teacherId);
    }

    public async createGrades(GradeRequest: GradeRequest,teacherId) {
        
        return await this.gradeService.createGrades(GradeRequest,teacherId);
    }
}