import {Autobind} from "../decoators/auto-bind"
import { projectState } from "../state/project";
import { validate,Validatable } from "../util/vaildation";


export class ProjectInput {
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