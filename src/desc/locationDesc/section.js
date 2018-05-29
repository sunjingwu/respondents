import {Content} from "./content";

export class Section {

  constructor(type){
    this.type = type

    //兼容处理
    this.content = new Content()
    this.contents = content
  }
}