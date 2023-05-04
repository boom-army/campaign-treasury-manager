import { Maybe } from "@boom-army/boom-program-tools";
import { CAMPAIGN_TREASURY_MANAGER_IDL } from "sdk/idl";

export default function getErrorMessageFromCampaignTreasuryManagerIdl(
  errorCode: number
): Maybe<string> {
  const idlError = CAMPAIGN_TREASURY_MANAGER_IDL.errors.find(
    (e) => e.code === errorCode
  );
  return idlError?.msg ?? null;
}
