/** Class representing an exam. */
export class Exam {
  examId: number;
  patientId: number;

  /**
   * Creates a an exam with an unique identifier examId.
   * @param examId -Unique identifier of the exam.
   * @param patientId -Unique identifier of a patient.
   */
  constructor(examId: number, patientId: number) {
    this.examId = examId;
    this.patientId = patientId;
  }
}
