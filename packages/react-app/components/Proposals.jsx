import { Flex, Text } from "@radix-ui/themes";
import Proposal from "./Proposal";

const Proposals = ({ proposals }) => {
    return (
        <Flex className="w-full flex gap-4 flex-wrap">
            {proposals.length === 0 ? (
                <Text>No data to display</Text>
            ) : (
                proposals.map(
                    ({
                        id,
                        deadline,
                        minRequiredVote,
                        amount,
                        description,
                        executed,
                        voteCount,
                    }) => (
                        <Proposal
                            key={`${deadline}${minRequiredVote}`}
                            id={id}
                            amount={amount}
                            deadline={deadline}
                            description={description}
                            executed={executed}
                            minRequiredVote={minRequiredVote}
                            voteCount={voteCount}
                        />
                    )
                )
            )}
        </Flex>
    );
};

export default Proposals;
