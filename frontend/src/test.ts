import { defineStore, Store, DefineStoreOptions } from "pinia";
export function t() {
  type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
  };
  type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
  };

  type FeatureOptions = OptionsFlags<FeatureFlags>;

  type CreateMutable<Type> = {
    readonly [Property in keyof Type]: Type[Property];
  };

  type LockedAccount = {
    readonly id: string;
    readonly name: string;
  };

  type UnlockedAccount = CreateMutable<LockedAccount>;
  /*  */
  type Concrete<Type> = {
    [Property in keyof Type]: Type[Property];
  };

  type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };

  type User = Concrete<MaybeUser>;
  /*  */
  type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<
      string & Property
    >}`]: () => Type[Property];
  };

  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type LazyPerson = Getters<Person>;
  //
  type color = {
    red?: string;
  };
  type colors = {
    [Property in color as `get${Capitalize<string & Property>}`]: number;
  };

  const hh: colors = {
    getRed: 1,
    getBlue: 2,
    getGreen: 3,
  };
  console.log(hh);

  //

  type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
  };

  type SquareEvent = { kind: "square"; x: number; y: number };
  type CircleEvent = { kind: "circle"; radius: number };

  type Config = EventConfig<SquareEvent | CircleEvent>;

  const ab: Config = {
    square: (a) => {
      console.log(a);
    },
    circle: (a) => {
      console.log(a);
    },
  };

  ab.square({ kind: "square", x: 1, y: 2 });
}
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function m() {
  type a = Record<string, string>;
  function r<K extends string, V>(key: K, value: V) {
    return { [key]: value } as Record<K, V>;
  }
  function t<K extends string>(key: K) {
    return r(key, "m") as Record<K, string>;
  }
  function tt<K extends string>(key: K) {
    type o = Record<K, string>;
    type o2 = Record<"test", string>;
    type oo = {
      [Property in keyof o2 as `store${Capitalize<Property>}`]: o2[Property];
    };

    const rs: o = r(key, "m");
    const capitalizeKey = capitalizeFirstLetter("user");
    const rk = `store${capitalizeKey}`;
    const mm2 = "storeUser";
    type ooo = {
      storeUser: string;
    };
    const m: ooo = {
      [rk]: "a",
    };

    const a: oo = {
      [`store${capitalizeKey}2`]: "a",
    };

    const returnStore = r(key, "m") as o;

    return returnStore;
  }

  const { aa, b } = tt("aa");

  const record = <K extends string, V>(key: K, value: V) =>
    ({ [key]: value } as Record<K, V>);

  const getTimeAndDateSplit = <T extends string>(keyValue: T) => ({
    ...record(`${keyValue}Date` as const, "dd/mm/yyy" as const),
    ...record(`${keyValue}Time` as const, "hh:mm" as const),
  });

  const { startDate } = getTimeAndDateSplit("start");
  // dynamic returnType 정의 필요
}

function c() {
  type capitalizeStoreName = `store${Capitalize<"test">}`;
  type capitalizeStoreRecord = Record<capitalizeStoreName, string>;
  const storeName = "" as capitalizeStoreName;
  const a: capitalizeStoreRecord = {
    [storeName]: "a",
  };
}
function d() {
  function useUserStore<K extends string>(
    key: K,
    options: Omit<DefineStoreOptions<any, {}, {}, {}>, "id">
  ) {
    type capitalizeStoreName = `store${Capitalize<K>}`;
    type capitalizeStoreConvention = Record<capitalizeStoreName, Store>;
    const storeName = "" as capitalizeStoreName;
    const useStore = defineStore(key, options);
    return {
      [storeName]: useStore(),
    } as capitalizeStoreConvention;
  }
  useUserStore("name", {
    state: () => ({
      name: "minseok",
    }),
  });
}
d();
c();
t();
m();
