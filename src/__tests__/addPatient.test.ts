import { PatientService } from "../services/patientService";

// Unit test to check the addition of a single patient.
describe('PatientService', () => {
  let patientService: PatientService;

  beforeEach(() => {
    patientService = new PatientService();
  });

  it('should add a new patient successfully', () => {
    const patientId = 123;
    const name = 'John Doe';

    patientService.addPatient(patientId, name);

    // Verifies that the patient was successfully added.
    expect(patientService.patients.has(patientId)).toBeTruthy();
  });

  // Checks if adding a duplicate patient is ignored.
  it('should ignore duplicate patients', () => {
    const patientId = 123;
    patientService.addPatient(patientId, 'John Doe');

    patientService.addPatient(patientId, 'John Doe');

    expect(patientService.patients.size).toBe(1);
expect(patientService.patients.get(patientId)!.name).toBe('John Doe');

  });
});