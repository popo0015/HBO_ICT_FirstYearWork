export default class HelloWorld {
  private greeting : string = 'Hello World';

  /**
   * Standard public function for the HelloWorld class
   *
   * @returns the currently set greeting.
   */
  public greet() : string {
    return this.greeting;
  }
}
