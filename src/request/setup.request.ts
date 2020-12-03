import { IRequest } from "./IRequest";

export class SetUp {
    schoolid: string;
    
    section:  [{
        sectionname:string
        sectionid:string
            }
    ];
    gradelevel :[]
    
  }

export class SetUpRequest implements IRequest {

    constructor(SetUp: SetUp) {
        this.SetUp = SetUp;
    }

    public SetUp: SetUp

    public getSetUp() {
        return this.SetUp;
    }

    public setSetUp(SetUp: SetUp) {
        this.SetUp = SetUp;
    }
}