import * as fs from "fs";
import { PatientService } from "../services/patientService";

/**
 * Class to process data associated with patient and exam records.
 * Reads the file line by line --each one representing a full command.
 * It adds or delete either patient or exam records using PatientService.
 */
export class FileProcessor {
  private filePath: string;
  // Service for managing patient and their exam records.
  private patientService: PatientService = new PatientService();

  /**
   * Creates an instance of FileProcessor
   * @param filePath -The route to the .txt file needed for processing.
   */
  constructor(filePath: string) {
    this.filePath = filePath;
  }

  /**
   * Processes the file specified by filePath.
   * Splits the file by lines and destructures each line by a space character.
   * Executes add or delete commands based on the values of each destructured variable.
   */
  processFile(): void {
    const fileContent = fs
      .readFileSync(this.filePath, "utf8")
      .replace(/\r\n/g, "\n");
    // Splits the file by line and each line represents a command.
    const lines = fileContent.split("\n");

    lines.forEach((line) => {
      const parts = line.split(" ");
      // Either Add or Delete command.
      const command = parts[0];
      // Represents a patient or exam record.
      const recordType = parts[1];
      // The unique identifier of a patient.
      const firstId = parts[2];
      // Converts the string to a numerical representation to better establish the patientID.
      const firstIdNumber = +firstId;
      // Represents the identifier of the exam record.
      const secondId = parts[3];
      const secondIdNumber = +secondId;

      if (command === "ADD" && recordType === "PATIENT") {
        // Represents the complete name of the patient.
        const name = parts
          .slice(3)
          .map((part) => part.trim())
          .join(" ");
        this.patientService.addPatient(firstIdNumber, name);
      } else if (command === "ADD" && recordType === "EXAM") {
        this.patientService.addExamToPatient(firstIdNumber, secondIdNumber);
      } else if (command === "DEL") {
        if (recordType === "PATIENT") {
          this.patientService.deletePatient(firstIdNumber);
        } else if (recordType === "EXAM") {
          this.patientService.deleteExamFromPatient(firstIdNumber);
        }
      }
    });

    this.printSummary();
  }

  /**
   * Prints the information of each patient in the file.
   * comments: Private access modifier utilized to limit its call to processFile function.
   */
  private printSummary(): void {
    const patients = this.patientService.getPatients();
    patients.forEach((patient) => {
      console.log(
        `Name: ${patient.name}, Id: ${patient.patientId}, Exam Count: ${patient.examsList.size}`
      );
    });
  }
}
