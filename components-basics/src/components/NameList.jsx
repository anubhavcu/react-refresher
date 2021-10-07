// eg to show list rendering
import React from 'react';
import Person from './Person';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue',
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  //   return <div>{nameList}</div>;

  return (
    <div>
      {personList}
      {nameList}
    </div>
  );
}

export default NameList;

/**
 *  key prop is not accessible in the child component , if we try to destructure key in Person component, it will throw an warning - '"key" is not a prop, trying to access it will result in undefined being return . If you need to access the same value in the child component, you should pass it as a different prop'
 *
 * * A "key" is a special string attribute you need to include when creating a list of elements
 * * Keys give the elements a stable identity
 * * Keys help react identify which items have changed, added or removed
 * * Helps in efficient update of the user interface
 *
 * eg: <li> name1 </li>			<li> name3 </li>
 * 	<li> name2 </li>    ===> 	<li> name2 </li>
 * 					<li> name1 </li>
 * now since the above lists don't have keys , and we have to insert an item in the begining of the list and move other two elements, react will first compare 1st list item and will find out it is not there and will create one, and similarly for second and third list items. so it is uneccessary creating name1 and name2 items again.
 * This wouldn't have happened if keys were used, as react will use unique keys to identify the changes
 *
 *
 *
 * * using index as keys (nameList)
 * When to use index as key :
 * - the items in the list do not have unique id
 * - the list is static list and will not change
 * - the list will never be reordered or filtered
 * see this for more info - https://youtu.be/xlPxnc5uUPQ?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
 */
