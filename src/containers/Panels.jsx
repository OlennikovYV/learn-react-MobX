import { observer } from "mobx-react";
import { useStore } from "../hooks/useStore";
import { Button, Panel, Text } from "../components";

export const Panels = observer(() => {
  const store = useStore();

  const handleDecrementCounter1 = () =>
    store.counter1.value > 0 && store.counter1.decrement();
  const handleDecrementCounter2 = () =>
    store.counter2.value > 0 && store.counter2.decrement();

  return (
    <>
      <Panel caption={"counter1"}>
        <Text text={store.counter1.value} />
        <Button disabled={false} onClick={store.counter1.increment} text='+' />
        <Button disabled={false} onClick={handleDecrementCounter1} text='-' />
        <Button onClick={() => {}} text='С сервера' />
        <Button disabled={false} onClick={store.counter1.reset} text='Сброс' />
      </Panel>
      <Panel caption={"counter2"}>
        <Text text={store.counter2.value} />
        <Button disabled={false} onClick={store.counter2.increment} text='+' />
        <Button disabled={false} onClick={handleDecrementCounter2} text='-' />
        <Button onClick={() => {}} text='С сервера' />
        <Button disabled={false} onClick={store.counter2.reset} text='Сброс' />
      </Panel>
      <Panel>
        <Button onClick={store.resetAll} text='Сбросить всё' />
      </Panel>
    </>
  );
});
