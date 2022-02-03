"use strict";
function Autobind(_, __, desc) {
    const originamMethod = desc.value;
    const newMethod = {
        get() {
            return originamMethod.bind(this);
        },
    };
    return newMethod;
}
