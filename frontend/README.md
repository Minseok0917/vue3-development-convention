###### vue-development-template 개인 코드 컨벤션

#### export default 를 지양한다.

export default 를 사용할 경우 코드를 가져올 때 네이밍이 엉망이 될 수 있다.  
export 로 통일하여 네이밍에 대한 단일성을 가져간다.

- **Pinia Store** : store naming 에 대한 단일성을 위한 유틸함수 제작

  ```typescript
  // @stores/store.users.ts
  import { createStore } from "@utils/store";
  const useUserStore = createStore("user", {
    state: () => ({}),
  });
  ```

  ```typescript
  // @stores/index.ts
  export { useUserStore } from "./store.user";
  ```

  ```typescript
  // App.vue
  import { useUserStore } from "@stores";
  const { storeUser } = useUserStore();
  ```
