import { useCallback, useState, useEffect } from "react";

const useStorage = (key: string, defaultValue: any, storageObject: Storage) => {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) {
      storageObject.removeItem(key);
    } else {
      storageObject.setItem(key, JSON.stringify(value));
    }
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
};

export const useLocalStorage = (key: string, defaultValue: any) => {
  return useStorage(key, defaultValue, window.localStorage);
};

export const useSessionStorage = (key: string, defaultValue: any) => {
  return useStorage(key, defaultValue, window.sessionStorage);
};
