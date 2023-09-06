import { observer } from "mobx-react";
import { useStore } from "../hooks/useStore";
import { Button, Panel, Text } from "../components";

export const Panels = observer(() => {
  const store = useStore();

  const isLoadingCounter1 = store.counter1.isLoading;
  const isLoadingCounter2 = store.counter2.isLoading;

  const handleDecrementCounter1 = () =>
    store.counter1.value > 0 && store.counter1.decrement();
  const handleDecrementCounter2 = () =>
    store.counter2.value > 0 && store.counter2.decrement();

  const handleFakeFetchCounter1 = () => store.counter1.getFromServer(10);
  const handleFakeFetchCounter2 = () => store.counter2.getFromServer(20);

  return (
    <>
      <Panel caption={"counter1"}>
        <Text text={store.counter1.value} />
        <Button
          disabled={isLoadingCounter1}
          onClick={store.counter1.increment}
          text='+'
        />
        <Button
          disabled={isLoadingCounter1}
          onClick={handleDecrementCounter1}
          text='-'
        />
        <Button onClick={handleFakeFetchCounter1} text='С сервера' />
        <Button
          disabled={isLoadingCounter1}
          onClick={store.counter1.reset}
          text='Сброс'
        />
      </Panel>
      <Panel caption={"counter2"}>
        <Text text={store.counter2.value} />
        <Button
          disabled={isLoadingCounter2}
          onClick={store.counter2.increment}
          text='+'
        />
        <Button
          disabled={isLoadingCounter2}
          onClick={handleDecrementCounter2}
          text='-'
        />
        <Button onClick={handleFakeFetchCounter2} text='С сервера' />
        <Button
          disabled={isLoadingCounter2}
          onClick={store.counter2.reset}
          text='Сброс'
        />
      </Panel>
      <Panel>
        <Button
          disabled={isLoadingCounter1 || isLoadingCounter2}
          onClick={store.resetAll}
          text='Сбросить всё'
        />
      </Panel>
    </>
  );
});
