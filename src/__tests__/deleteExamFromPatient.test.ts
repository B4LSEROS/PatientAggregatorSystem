import { PatientService } from "../services/patientService";

describe('PatientService', () => {
    let patientService: PatientService;
  
    beforeEach(() => {
      patientService = new PatientService();
    });
  
    it('should successfully delete an exam from an existing patient', () => {
      const patientId: number = 123;
      const examId: number = 456;
      const name: string = 'John Doe';
  
      patientService.addPatient(patientId, name);
      // Add an exam to the patient to ensure it exists before trying to delete it.
      patientService.addExamToPatient(patientId, examId);
  
      // Ensures the exam has been added successfully.
      let patient = patientService.patients.get(patientId);
      expect(patient).toBeDefined();
      expect(patient?.examsList.has(examId)).toBeTruthy();
  
      // Deletes the exam from the existing patient.
      patientService.deleteExamFromPatient(examId);
  
      // Verifies that the exam was successfully deleted.
      patient = patientService.patients.get(patientId);
      expect(patient?.examsList.has(examId)).toBeFalsy();
    });
  
    it('should do nothing if trying to delete a non-existing exam from an existing patient', () => {
      const patientId: number = 123;
      const nonExistingExamId: number = 789;
      const name: string = 'John Doe';
  
      patientService.addPatient(patientId, name);
      patientService.deleteExamFromPatient(nonExistingExamId);
  
      // Verifies that attempting to delete a non-existing exam does not affect the patient's exams list.
      const patient = patientService.patients.get(patientId);
      expect(patient).toBeDefined();
      expect(patient?.examsList.has(nonExistingExamId)).toBeFalsy();
    });
  });