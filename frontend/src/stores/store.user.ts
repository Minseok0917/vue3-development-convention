import { createStore } from "@utils/stores";

export const useUserStore = createStore("user", {
  state: () => ({
    name: "minseok",
  }),
});
