import { model, Schema, Model, Document } from 'mongoose';

export interface IStudent extends Document {
    teacherId: string;
    sectionId:string;
    sectionName:string;
    stuFirstName:string;
    stuLastName:string;
    studentId:string;
    emailId:string;
    
    
}

const StudentSchema: Schema = new Schema({
    teacherId: { type: String, required: true },
    sectionId: { type: String, required: true },
    sectionName: { type: String, required: true },
    stuFirstName: { type: String, required: true },
    stuLastName: { type: String, required: true },
    studentId: { type: String, required: true },
    emailId: { type: String, required: true }

 
    
});

// const Section :Schema=new Schema({
// id: { type: String, required: true },
// name :{  
//     type : String,
//     required: true
//   }

// }

// )

export const StudentModel: Model<IStudent> = model<IStudent>('sectionstudent-list', StudentSchema);