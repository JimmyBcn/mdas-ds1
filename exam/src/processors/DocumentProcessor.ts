export class DocumentProcessor {
  process(document: any): boolean {
    console.log(`Processing document: ${document.getFileName()}`);
    return true;
  }
}