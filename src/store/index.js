import Counter from "./counter";

export default class RootStore {
  constructor() {
    this.counter1 = new Counter();
    this.counter2 = new Counter();
  }

  resetAll = () => {
    this.counter1.reset();
    this.counter2.reset();
  };
}
