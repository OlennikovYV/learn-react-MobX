import { makeAutoObservable, runInAction } from "mobx";

export const fakeFetchCounter1 = async (value) => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(value), 2000);
  });
};

export default class Counter {
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

  getFromServer = async (value) => {
    try {
      this.isLoading = true;
      const data = await fakeFetchCounter1(value);
      runInAction(() => {
        this.value = data;
        this.isLoading = false;
      });
    } catch (e) {
      this.isLoading = false;
    }
  };

  reset = () => {
    this.isLoading = false;
    this.value = 0;
  };
}
