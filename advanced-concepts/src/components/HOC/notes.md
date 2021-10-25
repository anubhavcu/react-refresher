# HOC - High order components

> A pattern where a function takes a component as an argument and returns a new component.

```
const NewComponent = highOrderComponent(OriginalComponent)
```

### typically a HOC adds an additional data or functionality to the original component.

```
// so new component can also be referred as an enhanced component

const enhancedComponent = higherOrderComponent(originalComponent)
```

a non-tech eg:
` const IronMan = withSuit(TonyStark)`

A very basic HOC :

```
import React from 'react'


const withCounter = (OriginalComponent) => {
  class NewComponent extends Component {
    render() {
      return <OriginalComponent />;
    }
  }

  return NewComponent;
};

```
