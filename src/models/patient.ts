/** Class representing a patient */

export class Patient {
  patientId: number;
  name: string;
  examsList: Set<number>;

  /**
   * Creates a patient.
   * @param patientId -Unique identifier of the patient.
   * @param name -Name of the patient.
   */
  constructor(patientId: number, name: string) {
    this.patientId = patientId;
    this.name = name;
    this.examsList = new Set<number>(); //Set to store future patient exams.
  }
}
