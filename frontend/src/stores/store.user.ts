import { createStore } from "@utils/utils.stores";

export const useUserStore = createStore("user", {
  state: () => ({
    name: "minseok",
  }),
});
