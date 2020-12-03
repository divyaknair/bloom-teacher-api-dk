import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SetUpController } from '../src/controller';
import { SetUpRequest } from '../src/request';

const SetUpCreate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const setUpController = new SetUpController();
    const schoolSetup = req.body && req.body.schoolSetup;
    const setUpRequest = new SetUpRequest(schoolSetup);
    const result = await setUpController.createSetUp(setUpRequest);
    console.log("final result of Grade create will be",result)

    context.res = {
        // status: 200, /* Defaults to 200 */
        
        body: result,
        headers: {'Content-Type': 'application/json'}
    };

};

export default SetUpCreate;