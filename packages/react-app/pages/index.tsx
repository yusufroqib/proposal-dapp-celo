import { Box } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import CreateProposalModal from "../components/CreateProposalModal"
import Proposals from "../components/Proposals"
import { useProposals } from "../context/proposalsContext";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { proposals } = useProposals();

  useEffect(() => {
    setIsMounted(true);
  }, []);

 

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center">
         <Box className="flex justify-end p-4">
        <CreateProposalModal />
      </Box>

      <Proposals proposals={proposals} />
   
    </div>
  );
}
