import { useContext } from 'react';
import { UserContext, LanguageContext } from '../../App';

const HookCompC = () => {
  const user = useContext(UserContext);
  const language = useContext(LanguageContext);
  return (
    <div>
      From hooks : {user} - {language}
    </div>
  );
};

export default HookCompC;
