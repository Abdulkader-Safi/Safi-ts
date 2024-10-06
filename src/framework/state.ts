export class State {
  state: { [key: string]: any };

  constructor(initialState: { [key: string]: any }) {
    this.state = initialState;
  }

  setState(newState: { [key: string]: any }) {
    this.state = { ...this.state, ...newState };
  }

  getState() {
    return this.state;
  }
}
