import { jsonRpcProvider } from '../constants/provider';

const useRunners = () => {
  return { readOnlyProvider: jsonRpcProvider };
};

export default useRunners;
