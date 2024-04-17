import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue = (value?: boolean) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };

  return [value, toggleValue] as const;
};

export default useToggle;
