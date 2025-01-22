/**
 * @description Math utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default class Mathy {
  /**
   * Inverse linear interpolation
   *
   * @param   {number} a
   * @param   {number} b
   * @param   {number} value
   * @returns {number}
   * @note    A linear interpolation function is defined as
   *          `a + (b - a) * t`. It receives `t` and returns a value.
   *          This function is the inverse of that. It receives a value
   *          and returns `t`.
   */
  static inverseLerp(a, b, value) {
    return (value - a) / (b - a);
  }

  /**
   * Clamp value
   *
   * @param {number} min
   * @param {number} max
   * @param {number} value
   */
  static clamp(min, max, value) {
    return Math.min(max, Math.max(min, value))
  }
}