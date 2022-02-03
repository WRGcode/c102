/**
 * this find the area of a retange
 * @param {number} length bottom or top of a retange
 * @param {number} width left or right of a retange
 * @returns {number} the area of a retange
 */

export const calcArea = (length: number, width: number): number => {
  return length * width;
};

/**this is a test
 * @type {string[]}
 */

const testing: string[] = ["johnny"];

console.log(testing);

/**
 * do math related to area
 */
export class Area {
  /**
   * @member {number} pi - holds the value 3.14
   */
  static pi = 3.14;

  /**
   * if you are creating a circle else leave blank
   * @param redius the redius of a circle
   */
  constructor(public redius?: number) {}

  /**
   * find the area of a circle
   * @param redius redius of the circle
   * @returns {number} returns a number
   */
  static circle = {
    Area(redius: number = this.redius) {
      return redius * Area.pi ** 2;
    },
    circumference(redius: number = this.redius) {
      return 2 * Area.pi * redius;
    },
  };

  static triangle
}
