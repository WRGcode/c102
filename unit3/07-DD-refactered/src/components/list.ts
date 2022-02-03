import { Project } from "../interface/project-model";
import { DragTarget } from "../interface/drap-drop";
import { projectStatus } from "../interface/project-model";
import { projectState } from "../state/project";
import { ProjectItem } from "./item";
import { Autobind } from "../decoators/auto-bind";

export class projectList implements DragTarget {
  templateE1: HTMLTemplateElement;
  hostE1: HTMLElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    this.assignedProjects = []
    this.templateE1 = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;
    this.hostE1 = document.getElementById("app") as HTMLElement;
    const importedTemplate = document.importNode(this.templateE1.content, true);
    this.element = importedTemplate.querySelector("section") as HTMLElement;
    this.element.id = `${type}-projects`;
    this.attach();

    this.init();
    this.renderContent();
  }

  private init() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeavehandler);
    this.element.addEventListener("drop", this.drophandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === projectStatus.Active;
        }
        return prj.status === projectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listE1 = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLElement;
    listE1.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " Projects";
  }

  private attach() {
    this.hostE1.insertAdjacentElement("beforeend", this.element);
  }

  dragLeavehandler(_: DragEvent): void {
    const listE1 = this.element.querySelector("ul")!;
    listE1.classList.remove("droppable");
  }
  dragOverHandler(e: DragEvent): void {
    if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
      e.preventDefault();
      const listE1 = this.element.querySelector("ul")!;
      listE1.classList.add("droppable");
    }
  }

  @Autobind
  drophandler(e: DragEvent): void {
    const prjId = e.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      prjId,
      this.type === "active" ? projectStatus.Active : projectStatus.Finished
    );
  }
}