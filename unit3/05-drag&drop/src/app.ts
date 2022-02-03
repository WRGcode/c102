//* drag and drop interface

interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHendler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  drophandler(event: DragEvent): void;
  dragLeavehandler(event: DragEvent): void;
}

//* project Type
//* what the project will look like
enum projectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: projectStatus
  ) {}
}

//* project state managment
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listnersFn: Listener<T>) {
    this.listeners.push(listnersFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstence() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      people,
      projectStatus.Active
    );
    this.projects.push(newProject);
  }

  moveProject(projectID: string, newStatus: projectStatus) {
    const project = this.projects.find((prj) => prj.id === projectID);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenersFn of this.listeners) {
      listenersFn(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstence();

//* validation
interface Validatable {
  value: string | number;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  max?: number;
  min?: number;
}

function validate(input: Validatable) {
  let isValid = true;
  if (input.required) {
    isValid = isValid && input.value.toString().trim().length! == 0;
  }
  if (input.minLength != null && typeof input.value === "string") {
    isValid = isValid && input.value.length >= input.minLength;
  }
  if (input.maxLength != null && typeof input.value === "string") {
    isValid = isValid && input.value.length <= input.maxLength;
  }
  if (input.min != null && typeof input.value === "number") {
    isValid = isValid && input.value >= input.min;
  }
  if (input.max != null && typeof input.value === "number") {
    isValid = isValid && input.value <= input.max;
  }
  return isValid;
}

function Autobind(_: any, __: any, desc: PropertyDescriptor) {
  const originamMethod = desc.value;
  const newMethod: PropertyDescriptor = {
    get() {
      return originamMethod.bind(this);
    },
  };

  return newMethod;
}

class ProjectInput {
  templateE1: HTMLTemplateElement;
  hostE1: HTMLElement;
  formE1: HTMLFormElement;
  titleInputE1: HTMLInputElement;
  descInputE1: HTMLInputElement;
  peopleInputE1: HTMLInputElement;

  constructor() {
    this.templateE1 = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;

    this.hostE1 = document.getElementById("app") as HTMLElement;

    const importedTemplate = document.importNode(this.templateE1.content, true);
    this.formE1 = importedTemplate.firstElementChild as HTMLFormElement;
    this.formE1.is = "user-input";

    this.titleInputE1 = this.formE1.querySelector("#title") as HTMLInputElement;
    this.descInputE1 = this.formE1.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputE1 = this.formE1.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.init();
    this.attach();
  }

  private init() {
    this.formE1.addEventListener("submit", this.submithandler);
  }

  //! private bacuase it will ONLY be used by the calss
  private attach() {
    this.hostE1.insertAdjacentElement("afterbegin", this.formE1);
  }

  @Autobind
  private submithandler(e: Event) {
    e.preventDefault();
    const userInputs = this.gatherUserInputs();
    if (userInputs) {
      const [title, desc, people] = userInputs;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }

  private clearInputs() {
    this.titleInputE1.value = "";
    this.descInputE1.value = "";
    this.peopleInputE1.value = "";
  }

  private gatherUserInputs(): [string, string, number] | void {
    const userTitle = this.titleInputE1.value;
    const userDesc = this.descInputE1.value;
    const userPeople = this.peopleInputE1.value;

    const titleisvalid: Validatable = {
      value: userTitle,
      required: true,
    };

    const descisvalid: Validatable = {
      value: userDesc,
      required: true,
      minLength: 4,
    };

    const peopleisvalid: Validatable = {
      value: +userPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleisvalid) ||
      !validate(descisvalid) ||
      !validate(peopleisvalid)
    ) {
      console.log("something wrong please fix");
      return;
    }

    if (!userTitle || !userDesc || !userPeople) {
      console.log("something is black please fill it in");
      return;
    }

    return [userTitle, userDesc, +userPeople];
  }
}

class ProjectItem implements Draggable {
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

class projectList implements DragTarget {
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

const prjInput = new ProjectInput();
const activeProjects = new projectList("active");
const finshedProjects = new projectList("finished");
