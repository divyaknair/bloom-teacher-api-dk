import { connect, disconnect } from "../config/db.config";
import { SetUpModel, IStudent } from '../model';

export class SetUpRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }
    
    async createSetUp(setup: any) : Promise<any> {
        //console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)
        return await SetUpModel.create(setup);
    }

        async listSetUp(schoolId): Promise<any> {
            console.log("received schoolId",schoolId);
            
        return await SetUpModel.find({"schoolId":schoolId});
    }

}