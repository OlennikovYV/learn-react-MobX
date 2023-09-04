import Counter1 from "./counter1";
import Counter2 from "./counter2";

export default class RootStore {
  constructor() {
    this.counter1 = new Counter1();
    this.counter2 = new Counter2();
  }

  resetAll = () => {
    this.counter1.reset();
    this.counter2.reset();
  };
}
