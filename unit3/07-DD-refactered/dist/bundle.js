/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/input-form.ts":
/*!**************************************!*\
  !*** ./src/components/input-form.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectInput = void 0;
const auto_bind_1 = __webpack_require__(/*! ../decoators/auto-bind */ "./src/decoators/auto-bind.ts");
const project_1 = __webpack_require__(/*! ../state/project */ "./src/state/project.ts");
const vaildation_1 = __webpack_require__(/*! ../util/vaildation */ "./src/util/vaildation.ts");
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
            project_1.projectState.addProject(title, desc, people);
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
        if (!(0, vaildation_1.validate)(titleisvalid) ||
            !(0, vaildation_1.validate)(descisvalid) ||
            !(0, vaildation_1.validate)(peopleisvalid)) {
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
    auto_bind_1.Autobind
], ProjectInput.prototype, "submithandler", null);
exports.ProjectInput = ProjectInput;


/***/ }),

/***/ "./src/components/item.ts":
/*!********************************!*\
  !*** ./src/components/item.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectItem = void 0;
const auto_bind_1 = __webpack_require__(/*! ../decoators/auto-bind */ "./src/decoators/auto-bind.ts");
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
    auto_bind_1.Autobind
], ProjectItem.prototype, "dragEndHendler", null);
__decorate([
    auto_bind_1.Autobind
], ProjectItem.prototype, "dragStartHandler", null);
exports.ProjectItem = ProjectItem;


/***/ }),

/***/ "./src/components/list.ts":
/*!********************************!*\
  !*** ./src/components/list.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.projectList = void 0;
const project_model_1 = __webpack_require__(/*! ../interface/project-model */ "./src/interface/project-model.ts");
const project_1 = __webpack_require__(/*! ../state/project */ "./src/state/project.ts");
const item_1 = __webpack_require__(/*! ./item */ "./src/components/item.ts");
const auto_bind_1 = __webpack_require__(/*! ../decoators/auto-bind */ "./src/decoators/auto-bind.ts");
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
        project_1.projectState.addListener((projects) => {
            const relevantProjects = projects.filter((prj) => {
                if (this.type === "active") {
                    return prj.status === project_model_1.projectStatus.Active;
                }
                return prj.status === project_model_1.projectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderProjects() {
        const listE1 = document.getElementById(`${this.type}-projects-list`);
        listE1.innerHTML = "";
        for (const prjItem of this.assignedProjects) {
            new item_1.ProjectItem(this.element.querySelector("ul").id, prjItem);
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
        project_1.projectState.moveProject(prjId, this.type === "active" ? project_model_1.projectStatus.Active : project_model_1.projectStatus.Finished);
    }
}
__decorate([
    auto_bind_1.Autobind
], projectList.prototype, "drophandler", null);
exports.projectList = projectList;


/***/ }),

/***/ "./src/decoators/auto-bind.ts":
/*!************************************!*\
  !*** ./src/decoators/auto-bind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Autobind = void 0;
function Autobind(_, __, desc) {
    const originamMethod = desc.value;
    const newMethod = {
        get() {
            return originamMethod.bind(this);
        },
    };
    return newMethod;
}
exports.Autobind = Autobind;


/***/ }),

/***/ "./src/interface/project-model.ts":
/*!****************************************!*\
  !*** ./src/interface/project-model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Project = exports.projectStatus = void 0;
//* project Type
//* what the project will look like
var projectStatus;
(function (projectStatus) {
    projectStatus[projectStatus["Active"] = 0] = "Active";
    projectStatus[projectStatus["Finished"] = 1] = "Finished";
})(projectStatus = exports.projectStatus || (exports.projectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
exports.Project = Project;


/***/ }),

/***/ "./src/state/project.ts":
/*!******************************!*\
  !*** ./src/state/project.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.projectState = exports.ProjectState = exports.State = void 0;
const project_model_1 = __webpack_require__(/*! ../interface/project-model */ "./src/interface/project-model.ts");
class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listnersFn) {
        this.listeners.push(listnersFn);
    }
}
exports.State = State;
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
        const newProject = new project_model_1.Project(Math.random().toString(), title, description, people, project_model_1.projectStatus.Active);
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
exports.ProjectState = ProjectState;
exports.projectState = ProjectState.getInstence();


/***/ }),

/***/ "./src/util/vaildation.ts":
/*!********************************!*\
  !*** ./src/util/vaildation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
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
exports.validate = validate;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.finshedProjects = exports.activeProjects = exports.prjInput = void 0;
const input_form_1 = __webpack_require__(/*! ./components/input-form */ "./src/components/input-form.ts");
const list_1 = __webpack_require__(/*! ./components/list */ "./src/components/list.ts");
exports.prjInput = new input_form_1.ProjectInput();
exports.activeProjects = new list_1.projectList("active");
exports.finshedProjects = new list_1.projectList("finished");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvYXRvcnMvYXV0by1iaW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UvcHJvamVjdC1tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvcHJvamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC92YWlsZGF0aW9uLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUHJvamVjdElucHV0ID0gdm9pZCAwO1xyXG5jb25zdCBhdXRvX2JpbmRfMSA9IHJlcXVpcmUoXCIuLi9kZWNvYXRvcnMvYXV0by1iaW5kXCIpO1xyXG5jb25zdCBwcm9qZWN0XzEgPSByZXF1aXJlKFwiLi4vc3RhdGUvcHJvamVjdFwiKTtcclxuY29uc3QgdmFpbGRhdGlvbl8xID0gcmVxdWlyZShcIi4uL3V0aWwvdmFpbGRhdGlvblwiKTtcclxuY2xhc3MgUHJvamVjdElucHV0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVFMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmhvc3RFMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4gICAgICAgIGNvbnN0IGltcG9ydGVkVGVtcGxhdGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGVFMS5jb250ZW50LCB0cnVlKTtcclxuICAgICAgICB0aGlzLmZvcm1FMSA9IGltcG9ydGVkVGVtcGxhdGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgdGhpcy5mb3JtRTEuaXMgPSBcInVzZXItaW5wdXRcIjtcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXRFMSA9IHRoaXMuZm9ybUUxLnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XHJcbiAgICAgICAgdGhpcy5kZXNjSW5wdXRFMSA9IHRoaXMuZm9ybUUxLnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVJbnB1dEUxID0gdGhpcy5mb3JtRTEucXVlcnlTZWxlY3RvcihcIiNwZW9wbGVcIik7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2goKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtRTEuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgLy8hIHByaXZhdGUgYmFjdWFzZSBpdCB3aWxsIE9OTFkgYmUgdXNlZCBieSB0aGUgY2Fsc3NcclxuICAgIGF0dGFjaCgpIHtcclxuICAgICAgICB0aGlzLmhvc3RFMS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIHRoaXMuZm9ybUUxKTtcclxuICAgIH1cclxuICAgIHN1Ym1pdGhhbmRsZXIoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1c2VySW5wdXRzID0gdGhpcy5nYXRoZXJVc2VySW5wdXRzKCk7XHJcbiAgICAgICAgaWYgKHVzZXJJbnB1dHMpIHtcclxuICAgICAgICAgICAgY29uc3QgW3RpdGxlLCBkZXNjLCBwZW9wbGVdID0gdXNlcklucHV0cztcclxuICAgICAgICAgICAgcHJvamVjdF8xLnByb2plY3RTdGF0ZS5hZGRQcm9qZWN0KHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYXJJbnB1dHMoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0RTEudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZGVzY0lucHV0RTEudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGVvcGxlSW5wdXRFMS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBnYXRoZXJVc2VySW5wdXRzKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJUaXRsZSA9IHRoaXMudGl0bGVJbnB1dEUxLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVzZXJEZXNjID0gdGhpcy5kZXNjSW5wdXRFMS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1c2VyUGVvcGxlID0gdGhpcy5wZW9wbGVJbnB1dEUxLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlaXN2YWxpZCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHVzZXJUaXRsZSxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBkZXNjaXN2YWxpZCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHVzZXJEZXNjLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWluTGVuZ3RoOiA0LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcGVvcGxlaXN2YWxpZCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICt1c2VyUGVvcGxlLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWluOiAxLFxyXG4gICAgICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoISgwLCB2YWlsZGF0aW9uXzEudmFsaWRhdGUpKHRpdGxlaXN2YWxpZCkgfHxcclxuICAgICAgICAgICAgISgwLCB2YWlsZGF0aW9uXzEudmFsaWRhdGUpKGRlc2Npc3ZhbGlkKSB8fFxyXG4gICAgICAgICAgICAhKDAsIHZhaWxkYXRpb25fMS52YWxpZGF0ZSkocGVvcGxlaXN2YWxpZCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd3JvbmcgcGxlYXNlIGZpeFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXVzZXJUaXRsZSB8fCAhdXNlckRlc2MgfHwgIXVzZXJQZW9wbGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgaXMgYmxhY2sgcGxlYXNlIGZpbGwgaXQgaW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFt1c2VyVGl0bGUsIHVzZXJEZXNjLCArdXNlclBlb3BsZV07XHJcbiAgICB9XHJcbn1cclxuX19kZWNvcmF0ZShbXHJcbiAgICBhdXRvX2JpbmRfMS5BdXRvYmluZFxyXG5dLCBQcm9qZWN0SW5wdXQucHJvdG90eXBlLCBcInN1Ym1pdGhhbmRsZXJcIiwgbnVsbCk7XHJcbmV4cG9ydHMuUHJvamVjdElucHV0ID0gUHJvamVjdElucHV0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlByb2plY3RJdGVtID0gdm9pZCAwO1xyXG5jb25zdCBhdXRvX2JpbmRfMSA9IHJlcXVpcmUoXCIuLi9kZWNvYXRvcnMvYXV0by1iaW5kXCIpO1xyXG5jbGFzcyBQcm9qZWN0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0SWQsIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLmhvc3RJZCA9IGhvc3RJZDtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVFMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2luZ2xlLXByb2plY3RcIik7XHJcbiAgICAgICAgdGhpcy5ob3N0RTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmhvc3RJZCk7XHJcbiAgICAgICAgY29uc3QgaW1wb3J0ZWRUZW1wbGF0ZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZUUxLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGltcG9ydGVkVGVtcGxhdGUucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gYCR7dGhpcy5wcm9qZWN0LmlkfWA7XHJcbiAgICAgICAgdGhpcy5hdHRhY2goKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoKCkge1xyXG4gICAgICAgIHRoaXMuaG9zdEUxLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCB0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZHJhZ0VuZEhlbmRsZXIoXykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJhZ2VuZFwiKTtcclxuICAgIH1cclxuICAgIGRyYWdTdGFydEhhbmRsZXIoZSkge1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHRoaXMucHJvamVjdC5pZCk7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBlcnNvbnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvamVjdC5wZW9wbGUgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMSBwZXJzb25cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnByb2plY3QucGVvcGxlfSBwZW9wbGVgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgdGhpcy5kcmFnU3RhcnRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdGhpcy5kcmFnRW5kSGVuZGxlcik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC50aXRsZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpLnRleHRDb250ZW50ID0gdGhpcy5wZXJzb25zICsgXCJhc3NvZ25lZFwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxufVxyXG5fX2RlY29yYXRlKFtcclxuICAgIGF1dG9fYmluZF8xLkF1dG9iaW5kXHJcbl0sIFByb2plY3RJdGVtLnByb3RvdHlwZSwgXCJkcmFnRW5kSGVuZGxlclwiLCBudWxsKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBhdXRvX2JpbmRfMS5BdXRvYmluZFxyXG5dLCBQcm9qZWN0SXRlbS5wcm90b3R5cGUsIFwiZHJhZ1N0YXJ0SGFuZGxlclwiLCBudWxsKTtcclxuZXhwb3J0cy5Qcm9qZWN0SXRlbSA9IFByb2plY3RJdGVtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnByb2plY3RMaXN0ID0gdm9pZCAwO1xyXG5jb25zdCBwcm9qZWN0X21vZGVsXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL3Byb2plY3QtbW9kZWxcIik7XHJcbmNvbnN0IHByb2plY3RfMSA9IHJlcXVpcmUoXCIuLi9zdGF0ZS9wcm9qZWN0XCIpO1xyXG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xyXG5jb25zdCBhdXRvX2JpbmRfMSA9IHJlcXVpcmUoXCIuLi9kZWNvYXRvcnMvYXV0by1iaW5kXCIpO1xyXG5jbGFzcyBwcm9qZWN0TGlzdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcclxuICAgICAgICB0aGlzLmhvc3RFMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4gICAgICAgIGNvbnN0IGltcG9ydGVkVGVtcGxhdGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGVFMS5jb250ZW50LCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBpbXBvcnRlZFRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGAke3R5cGV9LXByb2plY3RzYDtcclxuICAgICAgICB0aGlzLmF0dGFjaCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB0aGlzLmRyYWdMZWF2ZWhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB0aGlzLmRyb3BoYW5kbGVyKTtcclxuICAgICAgICBwcm9qZWN0XzEucHJvamVjdFN0YXRlLmFkZExpc3RlbmVyKChwcm9qZWN0cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWxldmFudFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcmopID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwiYWN0aXZlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJqLnN0YXR1cyA9PT0gcHJvamVjdF9tb2RlbF8xLnByb2plY3RTdGF0dXMuQWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByai5zdGF0dXMgPT09IHByb2plY3RfbW9kZWxfMS5wcm9qZWN0U3RhdHVzLkZpbmlzaGVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gcmVsZXZhbnRQcm9qZWN0cztcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdEUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YCk7XHJcbiAgICAgICAgbGlzdEUxLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcmpJdGVtIG9mIHRoaXMuYXNzaWduZWRQcm9qZWN0cykge1xyXG4gICAgICAgICAgICBuZXcgaXRlbV8xLlByb2plY3RJdGVtKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikuaWQsIHByakl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdElkID0gYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpLmlkID0gbGlzdElkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICB0aGlzLnR5cGUudG9VcHBlckNhc2UoKSArIFwiIFByb2plY3RzXCI7XHJcbiAgICB9XHJcbiAgICBhdHRhY2goKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0RTEuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBkcmFnTGVhdmVoYW5kbGVyKF8pIHtcclxuICAgICAgICBjb25zdCBsaXN0RTEgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG4gICAgICAgIGxpc3RFMS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xyXG4gICAgfVxyXG4gICAgZHJhZ092ZXJIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIgJiYgZS5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09IFwidGV4dC9wbGFpblwiKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgbGlzdEUxID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcclxuICAgICAgICAgICAgbGlzdEUxLmNsYXNzTGlzdC5hZGQoXCJkcm9wcGFibGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJvcGhhbmRsZXIoZSkge1xyXG4gICAgICAgIGNvbnN0IHByaklkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcbiAgICAgICAgcHJvamVjdF8xLnByb2plY3RTdGF0ZS5tb3ZlUHJvamVjdChwcmpJZCwgdGhpcy50eXBlID09PSBcImFjdGl2ZVwiID8gcHJvamVjdF9tb2RlbF8xLnByb2plY3RTdGF0dXMuQWN0aXZlIDogcHJvamVjdF9tb2RlbF8xLnByb2plY3RTdGF0dXMuRmluaXNoZWQpO1xyXG4gICAgfVxyXG59XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgYXV0b19iaW5kXzEuQXV0b2JpbmRcclxuXSwgcHJvamVjdExpc3QucHJvdG90eXBlLCBcImRyb3BoYW5kbGVyXCIsIG51bGwpO1xyXG5leHBvcnRzLnByb2plY3RMaXN0ID0gcHJvamVjdExpc3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQXV0b2JpbmQgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIEF1dG9iaW5kKF8sIF9fLCBkZXNjKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbU1ldGhvZCA9IGRlc2MudmFsdWU7XHJcbiAgICBjb25zdCBuZXdNZXRob2QgPSB7XHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYW1NZXRob2QuYmluZCh0aGlzKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBuZXdNZXRob2Q7XHJcbn1cclxuZXhwb3J0cy5BdXRvYmluZCA9IEF1dG9iaW5kO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlByb2plY3QgPSBleHBvcnRzLnByb2plY3RTdGF0dXMgPSB2b2lkIDA7XHJcbi8vKiBwcm9qZWN0IFR5cGVcclxuLy8qIHdoYXQgdGhlIHByb2plY3Qgd2lsbCBsb29rIGxpa2VcclxudmFyIHByb2plY3RTdGF0dXM7XHJcbihmdW5jdGlvbiAocHJvamVjdFN0YXR1cykge1xyXG4gICAgcHJvamVjdFN0YXR1c1twcm9qZWN0U3RhdHVzW1wiQWN0aXZlXCJdID0gMF0gPSBcIkFjdGl2ZVwiO1xyXG4gICAgcHJvamVjdFN0YXR1c1twcm9qZWN0U3RhdHVzW1wiRmluaXNoZWRcIl0gPSAxXSA9IFwiRmluaXNoZWRcIjtcclxufSkocHJvamVjdFN0YXR1cyA9IGV4cG9ydHMucHJvamVjdFN0YXR1cyB8fCAoZXhwb3J0cy5wcm9qZWN0U3RhdHVzID0ge30pKTtcclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwZW9wbGUsIHN0YXR1cykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMucGVvcGxlID0gcGVvcGxlO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUHJvamVjdCA9IFByb2plY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucHJvamVjdFN0YXRlID0gZXhwb3J0cy5Qcm9qZWN0U3RhdGUgPSBleHBvcnRzLlN0YXRlID0gdm9pZCAwO1xyXG5jb25zdCBwcm9qZWN0X21vZGVsXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL3Byb2plY3QtbW9kZWxcIik7XHJcbmNsYXNzIFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XHJcbiAgICB9XHJcbiAgICBhZGRMaXN0ZW5lcihsaXN0bmVyc0ZuKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0bmVyc0ZuKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0YXRlID0gU3RhdGU7XHJcbmNsYXNzIFByb2plY3RTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEluc3RlbmNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFByb2plY3RTdGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgYWRkUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIHBlb3BsZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdF9tb2RlbF8xLlByb2plY3QoTWF0aC5yYW5kb20oKS50b1N0cmluZygpLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBlb3BsZSwgcHJvamVjdF9tb2RlbF8xLnByb2plY3RTdGF0dXMuQWN0aXZlKTtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICB9XHJcbiAgICBtb3ZlUHJvamVjdChwcm9qZWN0SUQsIG5ld1N0YXR1cykge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByaikgPT4gcHJqLmlkID09PSBwcm9qZWN0SUQpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0ICYmIHByb2plY3Quc3RhdHVzICE9PSBuZXdTdGF0dXMpIHtcclxuICAgICAgICAgICAgcHJvamVjdC5zdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXJzRm4gb2YgdGhpcy5saXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzRm4odGhpcy5wcm9qZWN0cy5zbGljZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qcm9qZWN0U3RhdGUgPSBQcm9qZWN0U3RhdGU7XHJcbmV4cG9ydHMucHJvamVjdFN0YXRlID0gUHJvamVjdFN0YXRlLmdldEluc3RlbmNlKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMudmFsaWRhdGUgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIHZhbGlkYXRlKGlucHV0KSB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpZiAoaW5wdXQucmVxdWlyZWQpIHtcclxuICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiBpbnB1dC52YWx1ZS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuICAgIGlmIChpbnB1dC5taW5MZW5ndGggIT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiBpbnB1dC52YWx1ZS5sZW5ndGggPj0gaW5wdXQubWluTGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0Lm1heExlbmd0aCAhPSBudWxsICYmIHR5cGVvZiBpbnB1dC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIGlucHV0LnZhbHVlLmxlbmd0aCA8PSBpbnB1dC5tYXhMZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXQubWluICE9IG51bGwgJiYgdHlwZW9mIGlucHV0LnZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgaW5wdXQudmFsdWUgPj0gaW5wdXQubWluO1xyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0Lm1heCAhPSBudWxsICYmIHR5cGVvZiBpbnB1dC52YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIGlucHV0LnZhbHVlIDw9IGlucHV0Lm1heDtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG59XHJcbmV4cG9ydHMudmFsaWRhdGUgPSB2YWxpZGF0ZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZmluc2hlZFByb2plY3RzID0gZXhwb3J0cy5hY3RpdmVQcm9qZWN0cyA9IGV4cG9ydHMucHJqSW5wdXQgPSB2b2lkIDA7XHJcbmNvbnN0IGlucHV0X2Zvcm1fMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvaW5wdXQtZm9ybVwiKTtcclxuY29uc3QgbGlzdF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9saXN0XCIpO1xyXG5leHBvcnRzLnByaklucHV0ID0gbmV3IGlucHV0X2Zvcm1fMS5Qcm9qZWN0SW5wdXQoKTtcclxuZXhwb3J0cy5hY3RpdmVQcm9qZWN0cyA9IG5ldyBsaXN0XzEucHJvamVjdExpc3QoXCJhY3RpdmVcIik7XHJcbmV4cG9ydHMuZmluc2hlZFByb2plY3RzID0gbmV3IGxpc3RfMS5wcm9qZWN0TGlzdChcImZpbmlzaGVkXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=