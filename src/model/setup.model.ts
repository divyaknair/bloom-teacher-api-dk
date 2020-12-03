import { model, Schema, Model, Document } from 'mongoose';

export interface ISetup extends Document {
    schoolId: String;
    
    section:  [{
        sectionId: string
        sectionName: string
        
    }


    ];
    
    gradeLevel:[];
}

const SetUpSchema: Schema = new Schema({
    schoolId: { type: String, required: true },
   
    section: 
             [({
            sectionId: { type: String, required: true },
            sectionName :{  
                type : String,
                required: true
              }
             
            
            }
            
            
            )],
            gradeLevel: [{ type: String, required: true }]

 
    
});

// const Section :Schema=new Schema({
// id: { type: String, required: true },
// name :{  
//     type : String,
//     required: true
//   }

// }

// )

export const SetUpModel: Model<ISetup> = model<ISetup>('master-school', SetUpSchema);