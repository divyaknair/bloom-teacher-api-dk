import { model, Schema, Model, Document } from 'mongoose';

export interface IAssessment extends Document {
    teacherId: string;
    sectionId:string;
    assessmentId:string;
    assessmentName:string;
    curriculumName:string;
    gradeLevel:string;
    topics:string;
    assignTo:[];
    startDate:String;
    endDate:String;
    status:String;
    grading:  {
        gradeType: string
        scoreType: string
       
    };
    quizQuestions:[{
      questionType:String;
      question :String;
      AnswerType:String;
      questionImagePath:String;
      answers:[
          {
            id:String;
            content:String;

          }
      ];
      correctAns:String;

 }]
    
    }

const AssessmentSchema: Schema = new Schema({
    teacherId: { type: String, required: true },
    sectionId: { type: String, required: true },
    assessmentId: { type: String, required: true },
    assessmentName: { type: String, required: true },
    curriculumName: { type: String, required: true },
    gradeLevel: { type: String, required: true },
    topics: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    status: { type: String, required: true },
    assignTo: [{ type: String, required: true }],
    quizQuestions:[{
        questionType:{ type: String, required: true },
        question :{ type: String, required: true },
        AnswerType:{ type: String, required: true },
        questionImagePath:{ type: String, required: true },
        answers:[
            {
              id:{ type: String, required: true },
              content:{ type: String, required: true },
  
            }
        ],
        correctAns:{ type: String, required: true },
  
   }]
 
    
});


export const AssessmentModel: Model<IAssessment> = model<IAssessment>('Assessment', AssessmentSchema);