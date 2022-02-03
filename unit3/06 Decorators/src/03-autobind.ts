function AutoBind(_:any, __:string, descriptor: PropertyDescriptor) { 
    console.log(descriptor);
    
    const orignalMethod = descriptor.value
    console.log(orignalMethod);
    
    const adjdescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = orignalMethod.bind(this)
            return boundFn
        }
    }
    return adjdescriptor
}



class Printer {
    message = "this works";

    //! without binding this will show indefined because there is no constrocter defined
    @AutoBind
    showMessage(){
        console.log(this.message);
        
    }
}

const p = new Printer()
p.showMessage()

const buttonE1 = document.querySelector("button")!;
// buttonE1.addEventListener('click',p.showMessage.bind(p))
buttonE1.addEventListener('click',p.showMessage)