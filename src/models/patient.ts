/** Class representing a patient */

export class Patient {
  patientId: number;
  name: string;
  examsList: Set<number>;

  /**
   * Creates a patient record with the following properties: patientId, name, and a set of exam records
   * @param patientId -Unique identifier of the patient.
   * @param name -Name of the patient.
   */
  constructor(patientId: number, name: string) {
    if (patientId < 0) {
      throw new Error(
        "The patient identifier, patientId, must be a positive number."
      );
    }

    this.patientId = patientId;
    this.name = name;
    this.examsList = new Set<number>(); //Set to store patient exam records. I chose a set because, in the project, the exams only contain an examId. If each exam were to include further details, a HashMap would be appropiate.
  }
}
