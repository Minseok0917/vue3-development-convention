import { createStore } from "@utils/stores";

/* export function useUserStore() {
  const { useStore } = createStore("users", {});
  const store = useStore();
  return { storeUser: store };
} */

export const useUserStore = createStore("user", {
  state: () => ({
    name: "minseok",
  }),
});

/* function useStore(key: string, name: string, state: object): mmm {
  const { useStore } = createStore(name, state);
  const store: Store = useStore();
  const h: mmm = { [key]: store };
  return h;
} */

/* export function useUserStore() {
  return useStore("storeUser", "user", {
    state: () => ({
      name: "minseok",
    }),
  });
} */

/* export function useUserStore<K extends string>(
  key: K,
  options: StoreDefinition
) {
  type capitalizeStoreName = `store${Capitalize<K>}`;
  type capitalizeStoreConvention = Record<capitalizeStoreName, Store>;
  const storeName = "" as capitalizeStoreName;
  const useStore = defineStore(key, options);
  console.log(key);
  return {
    [storeName]: useStore(),
  } as capitalizeStoreConvention;
}
 */
