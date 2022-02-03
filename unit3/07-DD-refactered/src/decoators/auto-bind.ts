export function Autobind(_: any, __: any, desc: PropertyDescriptor) {
  const originamMethod = desc.value;
  const newMethod: PropertyDescriptor = {
    get() {
      return originamMethod.bind(this);
    },
  };

  return newMethod;
}