//* project Type
//* what the project will look like
export enum projectStatus {
  Active,
  Finished,
}

export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: projectStatus
  ) {}
}