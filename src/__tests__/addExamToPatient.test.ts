import { PatientService } from "../services/patientService";

describe('PatientService', () => {
    let patientService: PatientService;
  
    beforeEach(() => {
      patientService = new PatientService();
    });
  
    it('should add an exam to an existing patient successfully', () => {
      const patientId = 123;
      const examId = 456;
      const name = 'John Doe';
  
      // First, adds a patient to ensure they exist in the service.
      patientService.addPatient(patientId, name);
  
      // Adds an exam to the existing patient.
      patientService.addExamToPatient(patientId, examId);
  
      // Verifies that the exam was successfully added.
      const patient = patientService.patients.get(patientId);
      expect(patient).toBeDefined(); // Ensures that the patient exists.
      expect(patient!.examsList.has(examId)).toBeTruthy(); // Verifies that the exam is present.
    });
  
    it('should not add an exam to a non-existing patient', () => {
      const nonExistingPatientId = 999;
      const examId = 456;
  
      // Attempts to add an exam to a patient that does not exist.
      patientService.addExamToPatient(nonExistingPatientId, examId);
  
      // Verifies that the non-existing patient was not added as a side effect.
      const patient = patientService.patients.get(nonExistingPatientId);
      expect(patient).toBeUndefined(); // Ensures the patient still does not exist.
    });
  });