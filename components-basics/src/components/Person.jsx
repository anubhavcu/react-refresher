// used in NameList component , as an example of rendering component in list
import React from 'react';

// function Person({ person }) {
//   return (
//     <div>
//       <h2>
//         I am {person.name}. I am {person.age} years old. I know {person.skill}
//       </h2>
//     </div>
//   );
// }

//same as above using a class component ( see Welcome.jsx)
class Person extends React.Component {
  render() {
    const { name, age, skill } = this.props.person;
    return (
      <div>
        <h2>
          I am {name}. I am {age}. I know {skill}
        </h2>
      </div>
    );
  }
}

export default Person;
