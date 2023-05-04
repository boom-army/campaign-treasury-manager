import { PdaResult } from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";
import { DEPOSIT_RECORD_PREFIX } from "sdk/constants/AccountPrefixes";

export default function findDepositRecordPda(
  depositor: PublicKey,
  mint: PublicKey,
  campaignTreasuryManagerProgramId: PublicKey
): PdaResult {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(DEPOSIT_RECORD_PREFIX), depositor.toBuffer(), mint.toBuffer()],
    campaignTreasuryManagerProgramId
  );
}
