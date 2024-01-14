/**
 * Represents a basic Game Loop based on `requestAnimationFrame()`.
 *
 * The implementation of this class depends on another class: `Game`. This
 * means that, if you use this class, you need to either have a `Game` class
 * that exactly implements the three methods `processInput()`, `update(elapsed)`
 * and `render()` or change the code in the `step()` method of this class so it
 * represents your own game methods.
 *
 * @see https://gameprogrammingpatterns.com/game-loop.html
 * @author BugSlayer
 */

export default abstract class Game {
  public static readonly STATE_IDLE: number = 0;

  public static readonly STATE_STARTING: number = 1;

  public static readonly STATE_RUNNING: number = 2;

  public static readonly STATE_STOPPING: number = 3;

  public static readonly NORMAL_MODE: number = 0;

  public static readonly PLAY_CATCH_UP: number = 1;

  /**
   * The current mode of the gameloop
   */
  private mode: number;

  /**
   * The current state of this gameloop
   */
  private state: number;

  /**
   * The timestamp of the last update of the game
   */
  private previousElapsed: number;

  /**
   * Holds the start time of the game
   */
  private gameStart: number;

  /**
   * Holds the time where the last animation step method ended.
   */
  private frameEnd: number;

  /**
   * The total time in milliseconds that is elapsed since the start of the
   * game
   */
  public gameTime: number;

  /**
   * The amount of frames that are processed since the start of the game
   */
  public frameCount: number;

  /**
   * An indication of the current crames per second of this gameloop
   */
  public fps: number;

  /**
   * An indication of the load of this gameloop. The load is the ratio between
   * the time needed to update the game and the time the computer waits to
   * render the next frame.
   */
  public load: number;

  /**
   * Construct a new instance of this class.
   *
   * @param mode OPTIONAL, the mode of the gameloop. It defaults to
   *   GameLoop.NORMAL_MODE, which is fine for simple games
   */
  public constructor(mode: number = Game.NORMAL_MODE) {
    this.state = Game.STATE_IDLE;
    this.mode = mode;
  }

  /**
   * Process the input of the game.
   */
  public abstract processInput(): void;

  /**
   * Update the state of the game
   *
   * @param elapsed The ms elapsed since the last update
   */
  public abstract update(elapsed: number): boolean;

  /**
   * Render the game
   */
  public abstract render(): void;

  /**
   * Start the game loop.
   */
  public start(): void {
    if (this.state === Game.STATE_IDLE) {
      this.state = Game.STATE_STARTING;
      this.gameStart = performance.now();
      this.frameEnd = this.gameStart;
      this.previousElapsed = this.gameStart;
      this.gameTime = 0;
      this.frameCount = 0;
      requestAnimationFrame(this.step.bind(this));
    }
  }

  /**
   * Requests to gracefully stop the gameloop.
   */
  public stop(): void {
    this.state = Game.STATE_STOPPING;
  }

  /**
   * Returns `true` if the given state exactly matches the current state of
   * this object
   *
   * @param state the state to check
   * @returns `true` if the given state exactly matches the current state of
   *   this object
   */
  public isInState(state: number): boolean {
    return this.state === state;
  }

  /**
   * This MUST be an arrow method in order to keep the `this` variable working
   * correctly. It will be overwritten by another object otherwise caused by
   * javascript scoping behaviour.
   *
   * @param timestamp a `DOMHighResTimeStamp` similar to the one returned by
   *   `performance.now()`, indicating the point in time when `requestAnimationFrame()`
   *   starts to execute callback functions
   */
  private step(timestamp: number): void {
    // Handle first animation frame
    if (this.isInState(Game.STATE_STARTING)) {
      this.state = Game.STATE_RUNNING;
    }

    this.processInput();

    // Let the game update itself
    let shouldStop: boolean = false;
    if (this.mode === Game.PLAY_CATCH_UP) {
      const step: number = 1;
      while (this.previousElapsed < timestamp && !shouldStop) {
        shouldStop = !this.update(step);
        this.previousElapsed += step;
      }
    } else {
      const elapsed: number = timestamp - this.previousElapsed;
      shouldStop = !this.update(elapsed);
      this.previousElapsed = timestamp;
    }

    // Let the game render itself
    this.render();

    // Check if a next animation frame needs to be requested
    if (!shouldStop || this.isInState(Game.STATE_STOPPING)) {
      requestAnimationFrame(this.step.bind(this));
    } else {
      this.state = Game.STATE_IDLE;
    }

    // Handle time measurement and analysis
    const now: number = performance.now();
    const stepTime: number = timestamp - now;
    const frameTime: number = now - this.frameEnd;
    this.fps = Math.round(1000 / frameTime);
    this.load = stepTime / frameTime;
    this.frameEnd = now;
    this.gameTime = now - this.gameStart;
    this.frameCount += 1;
  }
}
