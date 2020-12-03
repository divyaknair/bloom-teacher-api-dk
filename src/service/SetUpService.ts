import { SetUpRepository } from '../repository';
import { SetUpRequest, SetUp } from '../request';
export class SetUpService {

    setUpRepository: SetUpRepository;

    constructor() {
        this.setUpRepository = new SetUpRepository();
    }

    async listSetUp(schoolId): Promise<any> {

        console.log("before fetch listed details......",schoolId);

        const setUp= await this.setUpRepository.listSetUp(schoolId);

        console.log("the listed details frm setup",setUp);
         return setUp
        
    }
    public async createSetUp(SetUpRequest: SetUpRequest) {
        console .log("after user service its in  step in StudentRepository", SetUpRequest);
        return await this.setUpRepository.createSetUp(SetUpRequest.getSetUp());
    }

    }