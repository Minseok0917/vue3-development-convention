```typescript

type color = 'red' | 'blue' | 'green';
type colors = { [Property in <Type>] : Number }

```

```typescript
type color = {
  red: string;
  blue: string;
  green: string;
};
type colors = {
    [Property in color as Capitalize<string & Property> : Type[Property] ]
}
const colors : colors = {
    getRed:'red',
    getBlue:'blue',
    getGreens:'green',
}
```

```typescript
type rgb = {
  r: number;
  g: number;
  b: number;
};
type rg = { [Property in rgb as Exclude<string & "b">]: Type[Property] };
const rg: rg = {
  r: 1,
  g: 2,
};
```

PICK
