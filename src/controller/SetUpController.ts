import { SetUpService } from '../service';
import { SetUpRequest} from '../request'

export class SetUpController {

    private setUpService: SetUpService;

    constructor() {
        this.setUpService = new SetUpService();
    }

    public async listSetUp(schoolId) {
        return await this.setUpService.listSetUp(schoolId);
    }
    public async createSetUp(SetUpRequest: SetUpRequest) {
        
        return await this.setUpService.createSetUp(SetUpRequest);
    }
   
}