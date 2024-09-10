import { BaseButton } from "./BaseButton";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hej</h1>
      <BaseButton text="Denna knapp har isFluid" size="m" isFluid disabled />
      <BaseButton text="Storlek m" size="m" disabled />
      <BaseButton text="Storlek s" size="s" disabled />
      <BaseButton href="google.se" text="google" size="s" />
      <BaseButton text="google" size="s" target="_blank" />
    </>
  );
}

export default App;
