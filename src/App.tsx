import { BaseButton } from "./BaseButton";

function App() {
  return (
    <>
      <BaseButton
        text="This button has the isFluid flag"
        size="m"
        isFluid
        disabled
      />
      <BaseButton text="Storlek m" size="m" disabled />
      <BaseButton text="Storlek s" size="s" disabled />
      <BaseButton href="google.se" text="google" size="s" />
      {/* TODO: The following button does not complain that target is an invalid flag for a button element. */}
      <BaseButton text="google" size="s" target="_blank" />
    </>
  );
}

export default App;
