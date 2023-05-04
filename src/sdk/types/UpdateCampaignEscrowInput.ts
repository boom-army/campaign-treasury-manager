import { Maybe } from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import NonVotingPayoutPhaseInput from "sdk/types/NonVotingPayoutPhaseInput";

// Note: Keep in sync with program.
type UpdateCampaignEscrowInput = {
  authority: Maybe<PublicKey>;
  campaignEndTime: Maybe<BN>;
  creator: Maybe<PublicKey>;
  nonVotingPayoutPhases: Maybe<Array<NonVotingPayoutPhaseInput>>;
  votingPayoutPhases: Maybe<Array<never>>;
};

export default UpdateCampaignEscrowInput;
