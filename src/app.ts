import { FileProcessor } from "./utilities/fileProcessor";

const fileProcessor = new FileProcessor('./src/__tests__/givenUseCase.txt');

fileProcessor.processFile();