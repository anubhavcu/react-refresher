## 1. setState

### how setState changes state vs how useState hook changes it?

> setState is merging the previous state with the new one, it means that you dont have to pass the full state object every time you want to change some part of the state. React will update given properties and won't touch the rest. The useState's updater rewrites a previous state with a new one and it does not perform any merging. Its just replacement instead of merging.

# Component Lifecycle methods

### Divided in 4 phases:

- Mounting
  - When an instance of the component is being created and inserted into the DOM.
- Updating
  - when a component is being re-rendered as a result of changes to either its `props` or `state`
- Unmounting
  - When a component is beigng removed from DOM.
- Error Handling
  - When there is an error during rendering in a lifecycle method or in the constructor of any child component.

## Mounting (4 methods)

- **constructor**
- **static getDerivedStateFromProps**
- **render**
- **componentDidMount**

## _constructor(props)_

- special function which gets called whenever a new component is created
- It is a good place to :
  - initialize state
  - binding the event handler
- **DO NOT** create any side effects
- things to keep in mind when defining constructor:
  - super(props)
  - we have to call a special function called super, which will call the base class constructor.
  - directly overwrite this.state
    - Constructor is also the only place where we are expected to change or setState by directly overwriting this.state field. In all other scenarios, we have to use `this.setState()`

_Note_ :

### Why we need to call `super()` ?

> Since we are extending `React.component` class and as per ES2015 spec, a child constructor cannot make use of `this` until `super()` has been called. Also, `ES2015 class constructors have to call super() if they are subclass.`
> i.e, if there is a constructor defined, we must all `super()`, else if there is no `constructor()` defined, `(no super() called)`, we can use `this` or `this.props` in other methods normally.

w/o super

```
constructor() {
  console.log(this)
}
// will thorw ReferenceError : Must call super constructor in derived class before accessing "this".
```

with super

```constructor() {
  super();
  console.log(this)   // will return current component class
}
```

No constructor defined:

```
class Abc extends Component{
  render() {
    return <div>{this.props.name}</div>
  }
}
// here we don't have a constructor and thus no super called, but still have access to "this" in other methods.
```

> The rule to create a binding for `this` for the `constructor` only applies to the `constructor`. Since our class extends Component class, if we define a constructor in our component, we are essentially overriding the base class constructor (Component). `To ensure that code inside base class constructor gets called, we need super(). super() is just a reference to parent class constructor function.`

Why we pass props in super, like `super(props)` ?

> To access `this.props` in the `constructor`

```
constructor(props) {
  super(props)  // pasing props
  console.log(this.props)
}
```

```
constructor(props) {
  super()
  console.log(this.props) // undefined
  console.log(props)  // logs the props
}
```

> Passing or not passing `props` to `super` has no effect on later uses of `this.props` outside the constructor. i.e `render()`, `shouldComponentUpdate()` , `eventHandlers()` will have access to it.

## _static getDerivedStateFromProps(props, state)_

- rarely used method
- when the state of the compnent depends on changes in props over time, then we can use this method to `set the state`.
- Since this is a `static` method, it does not have access to `this` keyword. So we cannot use `this.setState` inside of this method.
- Instead, we have to **`return an object`** which will represent the new state of component OR return **`null`** if we don't want any state changes.
- **Do NOT** perform any side effects
- see eg in Lifecycle B
- Note : we don't have to return a completely new state, we just return the values we want to change in an object and react will merge it with the state, just like in setState.

_Note : if a component doesn't have any state, then calling `getDerivedStateFromProps` method would throw a warning, that initial state is undefined - which is not recommended, we should define a state to the component if we are making use of this method. This is to ensure that this method's arguments have a consistent shape._

## _render()_

- **Only required method in class component**
- In this method we simply read `this.props` and `this.state` and return the JSX which describes the UI.
- render is a **pure function. i.e for a given props and state, it should always render same UI**
- we should **NOT change state** in `render`
- Also **No side effects**, like interacting with DOM, or making network requests.
- Note - _Since render method JSX will also contain other children components, right agter the parent `render()` method, the children component's lifecycle methods are also executed._
- we can return string, arrays, JSX, Fragments, Portal, boolean expression or null.

## _componentDidMount()_

- will only be called **ONCE** in the whole lifecycle of the given component
- It is invoked immediately after a component and all it s children components have been rendered to the DOM.
- **We can perform side effects here**

## _Order of Execution_

> `constructor` => `static getDerivedStateFromProps` => `render` => `componentDidMount`

if we have any children component

> Parent `constructor` => parent `getDerivedStateFromProps` => parent `render` => child `constructor` => child `getDerivedStateFromProps` => child `render` => child `componentDidMount` => parent `componentDidMount`

# Updating phase (5 methods)

- static getDerivedStateFromProps(props, state)
- shouldComponentUpdate(nextProp, nextState)
- render()
- getSnapshotBeforeUpdate(prevProp, prevState)
- componentDidUpdate(prevProp, prevState, snapshot)

## _static getDerivedStateFromProps(props, state)_

- called every time a component is re-rendered
- same as above

## _shouldComponentUpdate(nextProp, nextState)_

- **returns a boolean value `true/false`**
- By default a component will re-render if the props they recieve or the state changes. This method can change this default behaviour by returning `false`.

- We can compare the existing props and state to next props and state values and let react know whether we should upadte or not by returning `true/false`.
- **No side effects**
- **No calling of `setState`**
- For performance optimization - see `PureFunctions` also.

## _render()_

- same as above

## _getSnapshotBeforeUpdate(prevProp, prevState)_

- **called right before the changes from the virtual DOM are to be reflected in the real DOM**
- return **null** or some **value** which is later passed to the next method `componentDidUpdate()` as third parameter.
- rarely used method, basically if we need to capture some info from the DOM, right before the update. (eg, we can read user's scroll position and after the update maintain that scroll position by performing some calculation)

## _componentDidUpdate(prevProp, prevState, snapshot)_

- called after `render()` is finished in _re-render cycle_ , means the component and all its sub-component have properly rendered itself after the update.
- called once in each re-render cycle.
- **We can create side-effects** such as n/w requests.(make sure to compare prevProps and newProps and based on that make any request. We don't want unnessary n/w calls.)

## \*Order of execution\*\*

> Parent `getDerivedStateFromProps` => parent `shouldComponentUpdate` => parent `render` => child `getDerivedStateFromProps` => child `shouldComponentUpdate` => child `render` => child `getSnapshotBeforeUpdate` => **parent `getSnapshotBeforeUpdate`** => child `componentDidUpdate` => parent `componentDidUpdate`

*Notice the slight change in order of execution afer *children's `getSnapshotBeforeUpdate`\*

> _Follow this [logRocket blog](https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/) for more info._
