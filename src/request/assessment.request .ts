import { IRequest } from "./IRequest";

export class Assessment {
    teacherId: string;
    sectionId:string;
    assessmentId:string;
    assessmentName:string;
    startDate:String;
    endDate:String;
    status:String;
    curriculumName:string;
    gradeLevel:string;
    topics:string;
    assignTo:[];

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

export class AssessmentRequest implements IRequest {

    constructor(Assessment: Assessment) {
        this.Assessment = Assessment;
    }

    public Assessment: Assessment

    public getAssessment() {
        return this.Assessment;
    }

    public setAssessment(Assessment: Assessment) {
        this.Assessment = Assessment;
    }
}