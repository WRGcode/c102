"use strict";
//* drag and drop interface
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//* project Type
//* what the project will look like
var projectStatus;
(function (projectStatus) {
    projectStatus[projectStatus["Active"] = 0] = "Active";
    projectStatus[projectStatus["Finished"] = 1] = "Finished";
})(projectStatus || (projectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listnersFn) {
        this.listeners.push(listnersFn);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstence() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, people) {
        const newProject = new Project(Math.random().toString(), title, description, people, projectStatus.Active);
        this.projects.push(newProject);
    }
    moveProject(projectID, newStatus) {
        const project = this.projects.find((prj) => prj.id === projectID);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenersFn of this.listeners) {
            listenersFn(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstence();
function validate(input) {
    let isValid = true;
    if (input.required) {
        isValid = isValid && input.value.toString().trim().length == 0;
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
function Autobind(_, __, desc) {
    const originamMethod = desc.value;
    const newMethod = {
        get() {
            return originamMethod.bind(this);
        },
    };
    return newMethod;
}
class ProjectInput {
    constructor() {
        this.templateE1 = document.getElementById("project-input");
        this.hostE1 = document.getElementById("app");
        const importedTemplate = document.importNode(this.templateE1.content, true);
        this.formE1 = importedTemplate.firstElementChild;
        this.formE1.is = "user-input";
        this.titleInputE1 = this.formE1.querySelector("#title");
        this.descInputE1 = this.formE1.querySelector("#description");
        this.peopleInputE1 = this.formE1.querySelector("#people");
        this.init();
        this.attach();
    }
    init() {
        this.formE1.addEventListener("submit", this.submithandler);
    }
    //! private bacuase it will ONLY be used by the calss
    attach() {
        this.hostE1.insertAdjacentElement("afterbegin", this.formE1);
    }
    submithandler(e) {
        e.preventDefault();
        const userInputs = this.gatherUserInputs();
        if (userInputs) {
            const [title, desc, people] = userInputs;
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
    clearInputs() {
        this.titleInputE1.value = "";
        this.descInputE1.value = "";
        this.peopleInputE1.value = "";
    }
    gatherUserInputs() {
        const userTitle = this.titleInputE1.value;
        const userDesc = this.descInputE1.value;
        const userPeople = this.peopleInputE1.value;
        const titleisvalid = {
            value: userTitle,
            required: true,
        };
        const descisvalid = {
            value: userDesc,
            required: true,
            minLength: 4,
        };
        const peopleisvalid = {
            value: +userPeople,
            required: true,
            min: 1,
            max: 5,
        };
        if (!validate(titleisvalid) ||
            !validate(descisvalid) ||
            !validate(peopleisvalid)) {
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
__decorate([
    Autobind
], ProjectInput.prototype, "submithandler", null);
class ProjectItem {
    constructor(hostId, project) {
        this.hostId = hostId;
        this.project = project;
        this.templateE1 = document.getElementById("single-project");
        this.hostE1 = document.getElementById(this.hostId);
        const importedTemplate = document.importNode(this.templateE1.content, true);
        this.element = importedTemplate.querySelector("section");
        this.element.id = `${this.project.id}`;
        this.attach();
        this.init();
        this.render();
    }
    attach() {
        this.hostE1.insertAdjacentElement("beforeend", this.element);
    }
    dragEndHendler(_) {
        console.log("Dragend");
    }
    dragStartHandler(e) {
        e.dataTransfer.setData("text/plain", this.project.id);
        e.dataTransfer.effectAllowed = "move";
    }
    get persons() {
        if (this.project.people === 1) {
            return "1 person";
        }
        else {
            return `${this.project.people} people`;
        }
    }
    init() {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHendler);
    }
    render() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = this.persons + "assogned";
        this.element.querySelector("p").textContent = this.project.description;
    }
}
__decorate([
    Autobind
], ProjectItem.prototype, "dragEndHendler", null);
__decorate([
    Autobind
], ProjectItem.prototype, "dragStartHandler", null);
class projectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        this.templateE1 = document.getElementById("project-list");
        this.hostE1 = document.getElementById("app");
        const importedTemplate = document.importNode(this.templateE1.content, true);
        this.element = importedTemplate.querySelector("section");
        this.element.id = `${type}-projects`;
        this.attach();
        this.init();
        this.renderContent();
    }
    init() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeavehandler);
        this.element.addEventListener("drop", this.drophandler);
        projectState.addListener((projects) => {
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
    renderProjects() {
        const listE1 = document.getElementById(`${this.type}-projects-list`);
        listE1.innerHTML = "";
        for (const prjItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector("ul").id, prjItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + " Projects";
    }
    attach() {
        this.hostE1.insertAdjacentElement("beforeend", this.element);
    }
    dragLeavehandler(_) {
        const listE1 = this.element.querySelector("ul");
        listE1.classList.remove("droppable");
    }
    dragOverHandler(e) {
        if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
            e.preventDefault();
            const listE1 = this.element.querySelector("ul");
            listE1.classList.add("droppable");
        }
    }
    drophandler(e) {
        const prjId = e.dataTransfer.getData("text/plain");
        projectState.moveProject(prjId, this.type === "active" ? projectStatus.Active : projectStatus.Finished);
    }
}
__decorate([
    Autobind
], projectList.prototype, "drophandler", null);
const prjInput = new ProjectInput();
const activeProjects = new projectList("active");
const finshedProjects = new projectList("finished");
