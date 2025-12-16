import { Extension } from "./enum/Extension";
export class Document {
  constructor(
    public readonly name: string,
    public readonly fileSize: number,
  ) {}

  validateSize(maxFileSize: number){
    return this.fileSize != null && this.fileSize < maxFileSize
  }

  validateName(){
    return this.name != null && this.name != "" && this.name.indexOf(".")
  }

  validateExtension(extension: Extension){
    let extensionIndex: number = this.name.indexOf(".")
    return this.name.endsWith(extension, extensionIndex)
  }

}
