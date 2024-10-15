import { useMemo } from 'react';
import useRunners from './useRunners';
import { Contract } from 'ethers';
import ABI from '../ABI/proposal.json';
import { useEthersSigner } from '../hooks/useEthersSigner';
import { jsonRpcProvider as readOnlyProvider } from "../constants/provider";


const useContract = (withSigner = false) => {
  const signer = useEthersSigner();

//   const { readOnlyProvider } = useRunners();

  return useMemo(() => {
    if (withSigner) {
      console.log('Returning...');
      if (!signer) return null;
      return new Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        ABI,
        signer
      );
    }

    return new Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      ABI,
      readOnlyProvider
    );
  }, [readOnlyProvider, signer, withSigner]);
};

export default useContract;
