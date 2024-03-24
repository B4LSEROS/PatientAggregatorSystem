import { PatientService } from "../services/patientService";

describe('PatientService', () => {
    let patientService: PatientService
  
    beforeEach(() => {
      patientService = new PatientService();
    });
  
    it('should delete an existing patient successfully', () => {
      const patientId = 123;
      patientService.addPatient(patientId, 'John Doe');
  
      // Checks whether the patient was added.
      expect(patientService.patients.has(patientId)).toBeTruthy();
  
      // It deletes the patient record.
      patientService.deletePatient(patientId);
  
      // Verifies that the patient has been deleted.
      expect(patientService.patients.has(patientId)).toBeFalsy();
    });
  
    it('should do nothing when trying to delete a non-existing patient', () => {
      const nonExistingPatientId = 999;
      patientService.deletePatient(nonExistingPatientId);
      expect(patientService.patients.size).toBe(0);
    });
  });