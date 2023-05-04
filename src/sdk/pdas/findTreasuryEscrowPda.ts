import {
  convertUuidToPdaSeed,
  PdaResult,
} from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";
import { PROGRAM_PREFIX, TREASURY_PREFIX } from "sdk/constants/AccountPrefixes";

export default function findTreasuryEscrowPda(
  campaignUuid: string,
  campaignTreasuryManagerProgramId: PublicKey
): PdaResult {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from(PROGRAM_PREFIX),
      Buffer.from(convertUuidToPdaSeed(campaignUuid), "utf-8"),
      Buffer.from(TREASURY_PREFIX),
    ],
    campaignTreasuryManagerProgramId
  );
}
