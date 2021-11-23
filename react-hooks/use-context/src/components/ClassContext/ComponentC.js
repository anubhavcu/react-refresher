import React from 'react';
import { LanguageContext, UserContext } from '../../App';

const ComponentC = () => {
  return (
    //     <UserContext.Consumer>
    //       {(name) => {
    //         return (
    //           <LanguageContext.Consumer>
    //             {(language) => {
    //               return (
    //                 <h2>
    //                   {name} - {language}
    //                 </h2>
    //               );
    //             }}
    //           </LanguageContext.Consumer>
    //         );
    //       }}
    //     </UserContext.Consumer>

    <UserContext.Consumer>
      {(name) => (
        <LanguageContext.Consumer>
          {(language) => (
            <h2>
              {name} : {language}
            </h2>
          )}
        </LanguageContext.Consumer>
      )}
    </UserContext.Consumer>
  );
};

export default ComponentC;

// both ways are correct, either use return statement or () paranthesis which will return imcplicitly
