/**
 * This class handles the keyboard events. It knows the last known state of its
 * keys
 *
 * Some parts of this class are pretty complex, but the class itself is fairly
 * easy to use. You just instantiate one object in your game.
 *
 * Use the method `isKeyDown()` to check if a specific key is currently pressed
 * down by the user. Will always return `true` while the key is down.
 *
 * Use the method `keyPressed()` to determine if the key is pressed down by the
 * user. Will only return `true` once until the key is pressed again.
 *
 * NOTE: It is known that the MouseEvent.keyCode property is deprecated, which
 * means that there will be a moment that this class will not work anymore.
 *
 * @author BugSlayer
 * @author Frans Blauw
 */

export default class KeyListener {
  // Some convenient key codes already defined here. If you need a specific
  // keycode, see: https://keycode.info/
  public static readonly KEY_ENTER: string = 'Enter';

  public static readonly KEY_SHIFT_LEFT: string = 'ShiftLeft';

  public static readonly KEY_SHIFT_RIGHT: string = 'ShiftRight';

  public static readonly KEY_CTRL_LEFT: string = 'ControlLeft';

  public static readonly KEY_CTRL_RIGHT: string = 'ControlRight';

  public static readonly KEY_ALT_LEFT: string = 'AltLeft';

  public static readonly KEY_ALT_RIGHT: string = 'AltRight';

  public static readonly KEY_ESC: string = 'Escape';

  public static readonly KEY_SPACE: string = 'Space';

  public static readonly KEY_LEFT: string = 'ArrowLeft';

  public static readonly KEY_UP: string = 'ArrowUp';

  public static readonly KEY_RIGHT: string = 'ArrowRight';

  public static readonly KEY_DOWN: string = 'ArrowDown';

  public static readonly KEY_DEL: string = 'Delete';

  public static readonly KEY_1: string = 'Digit1';

  public static readonly KEY_2: string = 'Digit2';

  public static readonly KEY_3: string = 'Digit3';

  public static readonly KEY_4: string = 'Digit4';

  public static readonly KEY_5: string = 'Digit5';

  public static readonly KEY_6: string = 'Digit6';

  public static readonly KEY_7: string = 'Digit7';

  public static readonly KEY_8: string = 'Digit8';

  public static readonly KEY_9: string = 'Digit9';

  public static readonly KEY_0: string = 'Digit0';

  public static readonly KEY_A: string = 'KeyA';

  public static readonly KEY_B: string = 'KeyB';

  public static readonly KEY_C: string = 'KeyC';

  public static readonly KEY_D: string = 'KeyD';

  public static readonly KEY_E: string = 'KeyE';

  public static readonly KEY_F: string = 'KeyF';

  public static readonly KEY_G: string = 'KeyG';

  public static readonly KEY_H: string = 'KeyH';

  public static readonly KEY_I: string = 'KeyI';

  public static readonly KEY_J: string = 'KeyJ';

  public static readonly KEY_K: string = 'KeyK';

  public static readonly KEY_L: string = 'KeyL';

  public static readonly KEY_M: string = 'KeyM';

  public static readonly KEY_N: string = 'KeyN';

  public static readonly KEY_O: string = 'KeyO';

  public static readonly KEY_P: string = 'KeyP';

  public static readonly KEY_Q: string = 'KeyQ';

  public static readonly KEY_R: string = 'KeyR';

  public static readonly KEY_S: string = 'KeyS';

  public static readonly KEY_T: string = 'KeyT';

  public static readonly KEY_U: string = 'KeyU';

  public static readonly KEY_V: string = 'KeyV';

  public static readonly KEY_W: string = 'KeyW';

  public static readonly KEY_X: string = 'KeyX';

  public static readonly KEY_Y: string = 'KeyY';

  public static readonly KEY_Z: string = 'KeyZ';

  /**
   * Record that holds a boolean for each keycode. The keycode is the index of
   * the array and the boolean is the state of that key (`true` means that
   * the key is down).
   */
  private keyDown: Record<string, boolean> = {};

  private keyPressedQueried: Record<string, boolean> = {};

  /**
   * Constructs a new KeyListener.
   */
  public constructor() {
    // Register the arrow methods as listeners to keyevents
    // There is a third event ('keypress'), but we do not need to use it
    window.addEventListener('keydown', (ev: KeyboardEvent) => {
      this.keyDown[ev.code] = true;
    });
    window.addEventListener('keyup', (ev: KeyboardEvent) => {
      this.keyDown[ev.code] = false;
      this.keyPressedQueried[ev.code] = false;
    });
  }

  /**
   * Returns `true` if and only if the last known state of the keyboard
   * reflects that the specified key is currently pressed.
   *
   * @param keyCode the keyCode to check
   * @returns `true` when the specified key is currently down
   */
  public isKeyDown(keyCode: string): boolean {
    return this.keyDown[keyCode] === true;
  }

  /**
   * Returns `true` if and only if the key is down, and if it has not
   * been queried before.
   *
   * Used for single key presses.
   *
   * @param keyCode the keyCode to check
   * @returns `true` if the specified key is down and not queried before
   */
  public keyPressed(keyCode: string): boolean {
    if (this.keyPressedQueried[keyCode] === true) {
      return false;
    }
    if (this.keyDown[keyCode] === true) {
      this.keyPressedQueried[keyCode] = true;
      return true;
    }
    return false;
  }
}
