import flatten from 'lodash/flatten';
import groupBy from 'lodash/groupBy';

export default class Property {
  foos = [];

  overview() {
    return flatten(this.foos.map(foo =>
      Object.entries(groupBy(foo.foo, 'bar')).map(() => {
        return {
          name: `${foo.fooType}`,
        };
      })
    ));
  }
}
