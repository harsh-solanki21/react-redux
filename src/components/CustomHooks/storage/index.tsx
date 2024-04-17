import { useSessionStorage, useLocalStorage } from "./useStorage";

const StorageComponent = () => {
  const [name, setName, removeName] = useSessionStorage("name", "Kyle");
  const [age, setAge, removeAge] = useLocalStorage("age", 26);

  return (
    <>
      <h2>
        {name} - {age}
      </h2>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </>
  );
};

export default StorageComponent;
