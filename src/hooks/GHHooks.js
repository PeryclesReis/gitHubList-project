import { useContext } from 'react';
import GHSearchContext from '../provider/GHSearchContext';

const useGitHub = () => {
  const { ghState, getUser } = useContext(GHSearchContext);

  return { getUser, ghState };
}

export default useGitHub;