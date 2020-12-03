import { model, Schema, Model, Document } from 'mongoose';

export interface IGrade extends Document {
    teacherId: String;
    firstName:String;
    lastName:String;
    dName:String;
    section:  [{
        sectionId: string
        sectionName: string
        gradeLevel:string
    }


    ]
    
    
}

const GradeSchema: Schema = new Schema({
    teacherId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dName: { type: String, required: true },
    section: 
             [({
            sectionId: { type: String, required: true },
            sectionName :{  
                type : String,
                required: true
              },
              gradeLevel: { type: String, required: true }
            
            }
            
            )]

 
    
});

// const Section :Schema=new Schema({
// id: { type: String, required: true },
// name :{  
//     type : String,
//     required: true
//   }

// }

// )

export const GradeModel: Model<IGrade> = model<IGrade>('teachersections', GradeSchema);