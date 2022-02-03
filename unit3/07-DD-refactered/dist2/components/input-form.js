"use strict";
// import {Autobind} from "../decoators/auto-bind"
// import {}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectInput = void 0;
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
exports.ProjectInput = ProjectInput;
