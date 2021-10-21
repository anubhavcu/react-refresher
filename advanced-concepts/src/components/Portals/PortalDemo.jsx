// basic eg to show how to create a portal
import React from 'react';
import ReactDOM from 'react-dom';
const PortalDemo = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Portals div</h1>
    </div>,
    document.getElementById('portal-root')
  );
};

// we can also create portal using class
// import { Component } from 'react';
// export class PortalDemo extends Component {
//   render() {
//     return ReactDOM.createPortal(
//       <div>
//         <h1>Portal from class </h1>
//       </div>,
//       document.getElementById('portal-root')
//     );
//   }
// }

export default PortalDemo;

/**
 * Portals provide a way to render childrens into a DOM node that exists outside the DOM heirarchy of the parent component,
 * basically we can create a seperate DOM node other than div#root and render our component there.
 *
 * 1. use cases be like creating a modal or pop-up, alerts etc. - see ModalDemo
 * 2. although the portals can be anywhere in the DOM tree , it behaves like a normal react child in every other way. so an event fired from inside a portal will propogate to ancestors in the containing react tree even if those elements are not ancestors in the DOM tree. --- see Parent.jsx and Child.jsx
 */
