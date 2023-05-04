import {
  GenericNumber,
  genericNumberToNumber,
} from "@boom-army/boom-program-tools";
import BN from "bn.js";

export default function getSecondsAfterCampaignEndTime(
  campaignEndTime: GenericNumber,
  secondsAfter: GenericNumber
): BN {
  return new BN(
    genericNumberToNumber(campaignEndTime) + genericNumberToNumber(secondsAfter)
  );
}
