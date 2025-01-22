/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Mathy from './utils/mathy.js'

/**
 * @type {number}
 */
const MIN_ANGLE = 50

/**
 * @type {number}
 */
const MAX_ANGLE = 70

export default class App {
  /**
   * @type {HTMLImageElement}
   */
  imgA

  /**
   * @type {HTMLImageElement}
   */
  imgB

  /**
   * @type {number}
   */
  #visibilityFactor = 1

  /**
   * Constructor
   *
   * @param {HTMLImageElement} imgA
   * @param {HTMLImageElement} imgB
   */
  constructor(imgA, imgB) {
    this.imgA = imgA
    this.imgB = imgB

    this.#calcImgVisibility()
  }

  /**
   * Run
   *
   * @returns {void}
   */
  run() {
    window.addEventListener('deviceorientation', (e) => {
      if (e.beta) {
        this.#visibilityFactor = Mathy.inverseLerp(MIN_ANGLE, MAX_ANGLE, e.beta)
        this.#visibilityFactor = Mathy.clamp(0, 1, this.#visibilityFactor)
        this.#calcImgVisibility()
      }
    })
  }

  /**
   * Calc image visibility
   *
   * @returns {void}
   */
  #calcImgVisibility() {
    this.imgA.style.opacity = (this.#visibilityFactor).toString()
    this.imgB.style.opacity = (1 - this.#visibilityFactor).toString()

    document.body.style.backgroundColor = `hsl(0, 0%, ${this.#visibilityFactor * 100}%)`
  }
}