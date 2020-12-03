import { model, Schema, Model, Document } from 'mongoose';

export interface IAssessgrade extends Document {
    teacherId: string;
    studentId:string;
    sectionId:string;
    assigned:  [{
        category:string
        topic:string
        aName:string
        startDate:string
        dueDate:string
        progress:string
        grading:string
        score:string
        status: string
        graded: boolean
        
    }
    ],
    finalGrade:string
    
}

const AssessGradeSchema: Schema = new Schema({
    teacherId: { type: String, required: true },
    studentId:{ type: String, required: true },
    sectionId:{ type: String, required: true },
    assigned: 
             [({
            status: { type: String, required: true },
            category: { type: String, required: true },
            topic: { type: String, required: true },
            aName: { type: String, required: true },
            startDate: { type: String, required: true },
            dueDate: { type: String, required: true },
            progress:{ type: String, required: true },
            grading: { type: String, required: true },
            score: { type: String, required: true },
            
            graded :{  
                type : String,
                required: true
              }
            
            }
            
            )],
    finalGrade:{ type: String, required: true }

 
    
});

// const Section :Schema=new Schema({
// id: { type: String, required: true },
// name :{  
//     type : String,
//     required: true
//   }

// }

// )

export const AssessGradeModel: Model<IAssessgrade> = model<IAssessgrade>('gradeassessments', AssessGradeSchema);