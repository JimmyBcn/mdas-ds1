import { FileType } from "./FileType";

export class Documento {

  private FileSize: number;
  private FileExtension: string;

  constructor(
    private FileName: string,
    private FileType: FileType,
    private MetaData: Record<string, any>
  ) 
  {
    this.FileExtension = this.getExtensionFromFileName(FileName);
    this.FileSize = this.getFileSizeFromMetadata();
  }

  private getExtensionFromFileName(name: string): string {
    const parts = name.split(".");
    return parts.length > 1 ? parts.pop()!.toLowerCase() : "";
  }

  private getFileSizeFromMetadata(): number {
    const size = this.MetaData?.["FileSize"];

    if (typeof size === "number" && !isNaN(size)) {
      return size;
    }

    throw new Error("MetaData.FileSize no es un número válido");
  }

  public getMetadata(): Record<string, any> {
    return this.MetaData;
  }

  public getExtensionFromFile(): string {
    return this.FileExtension;
  }

  public getsize(): number {
    return this.FileSize;
  }

}


