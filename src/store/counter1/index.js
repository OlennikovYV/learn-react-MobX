import { makeAutoObservable } from "mobx";

export default class Counter1 {
  isLoading = false;
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.value++;
  };

  decrement = () => {
    this.value--;
  };

  reset = () => {
    this.isLoading = false;
    this.value = 0;
  };
}
