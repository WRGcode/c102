"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectItem = void 0;
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
exports.ProjectItem = ProjectItem;
