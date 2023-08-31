import { Button, Panel, Text } from "../components";

function Panels() {
  return (
    <>
      <Panel caption={"counter1"}>
        <Text text={"0"} />
        <Button disabled={false} onClick={() => {}} text='+' />
        <Button disabled={false} onClick={() => {}} text='-' />
        <Button onClick={() => {}} text='С сервера' />
        <Button disabled={false} onClick={() => {}} text='Сброс' />
      </Panel>
      <Panel caption={"counter2"}>
        <Text text={"0"} />
        <Button disabled={false} onClick={() => {}} text='+' />
        <Button disabled={false} onClick={() => {}} text='-' />
        <Button onClick={() => {}} text='С сервера' />
        <Button disabled={false} onClick={() => {}} text='Сброс' />
      </Panel>
      <Panel>
        <Button onClick={() => {}} text='Сбросить всё' />
      </Panel>
    </>
  );
}

export default Panels;
