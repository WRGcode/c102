import { ProjectInput } from "./components/input-form";
import { projectList } from "./components/list";







export const prjInput = new ProjectInput();
export const activeProjects = new projectList("active");
export const finshedProjects = new projectList("finished");
