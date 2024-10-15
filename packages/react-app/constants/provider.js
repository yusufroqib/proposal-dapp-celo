import { JsonRpcProvider } from "ethers";

export const jsonRpcProvider = new JsonRpcProvider(
    process.env.NEXT_PUBLIC_CELO_ALFAJORES_RPC_URL
);
