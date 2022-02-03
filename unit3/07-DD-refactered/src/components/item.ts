import { Draggable } from "../interface/drap-drop";
import { Project } from "../interface/project-model";
import { Autobind } from "../decoators/auto-bind";


export class ProjectItem implements Draggable {
  project: Project
  templateE1: HTMLTemplateElement;
  hostE1: HTMLElement;
  element: HTMLElement;

  constructor(private hostId: string, project: Project) {
    this.project = project
    this.templateE1 = document.getElementById(
      "single-project"
    ) as HTMLTemplateElement;
    this.hostE1 = document.getElementById(this.hostId) as HTMLElement;

    const importedTemplate = document.importNode(this.templateE1.content, true);
    this.element = importedTemplate.querySelector("section") as HTMLElement;
    this.element.id = `${this.project.id}`;
    this.attach();

    this.init()
    this.render()
  }

  private attach(){
    this.hostE1.insertAdjacentElement("beforeend", this.element)
  }
  @Autobind
  dragEndHendler(_: DragEvent): void {
      console.log("Dragend");
      
  }
  @Autobind
  dragStartHandler(e: DragEvent): void {
    e.dataTransfer!.setData("text/plain", this.project.id)
    e.dataTransfer!.effectAllowed="move"
  }

  get persons(){
    if(this.project.people === 1){
      return "1 person"
    } else {
      return `${this.project.people} people`
    }
  }

  private init(){
    this.element.addEventListener("dragstart", this.dragStartHandler)
    this.element.addEventListener("dragend", this.dragEndHendler)
  }

  private render(){
  this.element.querySelector("h2")!.textContent = this.project.title
  this.element.querySelector("h3")!.textContent = this.persons + "assogned"
  this.element.querySelector("p")!.textContent = this.project.description
  }

}