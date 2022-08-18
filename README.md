# Setup
```
asdf install
yarn install
```
# Repro
```
npx -p ts-migrate -c "ts-migrate-full . --sources='src/*'" # accept defaults
```
# Error
```
src/Property.ts:21:8 - error TS1068: Unexpected token. A constructor, method, accessor, or property was expected.

21       })
          ~

src/Property.ts:22:5 - error TS1068: Unexpected token. A constructor, method, accessor, or property was expected.

22     ));
       ~

src/Property.ts:22:6 - error TS1068: Unexpected token. A constructor, method, accessor, or property was expected.

22     ));
        ~

src/Property.ts:24:1 - error TS1128: Declaration or statement expected.

24 }
   ~
```
# Generated code
```
// @ts-expect-error TS(2307): Cannot find module 'lodash/flatten' or its corresp... Remove this comment to see the full error message
import flatten from 'lodash/flatten';
// @ts-expect-error TS(2307): Cannot find module 'lodash/groupBy' or its corresp... Remove this comment to see the full error message
import groupBy from 'lodash/groupBy';

export default class Property {
  foos = [];

  overview() {
    // @ts-expect-error TS(2550): Property 'entries' does not exist on type 'ObjectC... Remove this comment to see the full error message
    return flatten(this.foos.map(foo => Object.entries(groupBy((foo as any).foo, 'bar')).map(() => {
    return {
        // @ts-expect-error TS(2339): Property 'fooType' does not exist on type 'never'.
        name: `${foo.fooType}`,
    };
})));
        return {
    // @ts-expect-error TS(2304): Cannot find name 'foo'.
    name: `${(foo as any).fooType}`,
};
      })
    ));
  }
}
```

