"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
