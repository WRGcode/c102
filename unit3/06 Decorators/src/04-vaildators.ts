interface VaildaterConfig {
  //!this is a class name where you want to validate some props
  [property: string]: {
    //! stores the props that are going to be validated and how
    [vaildatableProp: string]: string[];
  };
}

//* registeredvalidators {
//*     Course: {
//*         title: ["required", "postive", minlength]
//*         price: ["positive"]
//*     }
//* }

//! this starts empty and we add to it everytime we use the deco
const reqisteredvalidators: VaildaterConfig = {};

function Required(target: any, propname: string) {
  reqisteredvalidators[target.constructor.name] = {
    ...reqisteredvalidators[target.constructor.name],
    [propname]: ["required"],
  };
}

function Positive(target: any, propname: string) {
  reqisteredvalidators[target.constructor.name] = {
    ...reqisteredvalidators[target.constructor.name],
    [propname]: ["positive"],
  };
}

function vaildate(obj: any) {
  const objVaildatorConfig = reqisteredvalidators[obj.constructor.name];
  if (!objVaildatorConfig) {
    return true;
  }
  let isVaild = true;
  for (const prop in objVaildatorConfig) {
    for (const vaildater of prop) {
      switch (vaildater) {
        case "required":
          isVaild = isVaild && !!obj[prop];
          break;
        case "positive":
          isVaild = isVaild && obj[prop] > 0;
          break;
      }
    }
  }
  return isVaild;
}

class Course {
  @Required
  title: string;
  @Positive
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', (e) =>{
  e.preventDefault();
const titleE1 = document.getElementById("title") as HTMLInputElement
const priceE1 = document.getElementById('price') as HTMLInputElement

const title = titleE1
const price = priceE1

const createdCouredCourse = new Course(title, +price);

if (!vaildate(createdCouredCourse)){
  console.error("invild input try again");
  return;
}

//! normally this is the place you save the objecg permanently

})
