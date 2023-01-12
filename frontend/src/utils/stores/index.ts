import { defineStore, Store, DefineStoreOptions } from "pinia";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function createStore<K extends string>(
  key: K,
  options: Omit<DefineStoreOptions<any, {}, {}, {}>, "id">
) {
  type capitalizeStoreName = `store${Capitalize<K>}`;
  type capitalizeStoreConvention = Record<capitalizeStoreName, Store>;
  const storeName = `store${capitalizeFirstLetter(key)}` as capitalizeStoreName;
  const useStore = defineStore(key, options);
  function handler() {
    return {
      [storeName]: useStore(),
    } as capitalizeStoreConvention;
  }
  return handler;
}
