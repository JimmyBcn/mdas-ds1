import { Extension } from "./enum/Extension";
export class Document {
  constructor(
    public readonly name: string,
    public readonly fileSize: number,
  ) {}

  validateSize(maxFileSize: number){
    let res = this.fileSize != null && this.fileSize < maxFileSize
    if(!res){
        console.log("File max sized reached (" + maxFileSize + "MB)")
    }
    return res;
  }

  validateName() {
    let result = this.name != null && this.name != "" && this.name.indexOf(".") != -1
    if(!result){
        console.log("File name Invalid")
    }
    return result;
  }

  validateExtension(extension: Extension){
    let extensionIndex: number = this.name.indexOf(".")
    let result = this.name.endsWith(extension, extensionIndex)
    return result;
  }

}
