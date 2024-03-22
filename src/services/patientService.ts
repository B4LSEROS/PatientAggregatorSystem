import { Patient } from "../models/patient";

/**
 * Service to manage patients and their exams: it allows the addition
 * and deletion of patient records and their associate exam records.
 */
export class PatientService {
  private patients: Map<number, Patient> = new Map();

  /**
   * Adds a new patient record if there is not one already with the same patientId
   *
   * @param patientId - Unique patient identifier.
   * @param name - Name of the patient.
   */
  addPatient(patientId: number, name: string): void {
    if (!this.patients.has(patientId)) {
      this.patients.set(patientId, new Patient(patientId, name));
    }
  }

  /**
   * Deletes a patient record based on their patientId. Additionally, it deletes all exam records from the patient.
   *
   * @param patientId - Unique patient identifier that will be deleted.
   */
  deletePatient(patientId: number): void {
    this.patients.delete(patientId);
  }

  /**
   * Adds a new exam record to a given patient record.
   *
   * @param patientId - Unique patient identifier which will be used to store the new exam record.
   * @param examId - Unique exam identifier to be added.
   */
  addExamToPatient(patientId: number, examId: number): void {
    const patient = this.patients.get(patientId);

    if (patient) {
      patient.examsList.add(examId);
    }
  }

  /**
   * Deletes an exam record from an specific patient. If the exam are associated to a patient, it will be deleted from the exam records list.
   *
   * @param examId - Unique exam identifier to be deleted.
   */
  deleteExamFromPatient(examId: number): void {
    this.patients.forEach((patient) => {
      if (patient.examsList.has(examId)) {
        patient.examsList.delete(examId);
      }
    });
  }
}
