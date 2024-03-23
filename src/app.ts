import { FileProcessor } from "./utilities/fileProcessor";

const fileProcessor = new FileProcessor('./tests/providedUseCase.txt');

fileProcessor.processFile();