//* drag and drop interface

export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHendler(event: DragEvent): void;
}
 
export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  drophandler(event: DragEvent): void;
  dragLeavehandler(event: DragEvent): void;
}
