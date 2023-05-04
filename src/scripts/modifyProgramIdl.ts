import modifyProgramIdlScript from "@boom-army/boom-program-tools/dist/scripts/modifyProgramIdlScript";

modifyProgramIdlScript({
  decodedTransactionResultTypeFilePath:
    "src/sdk/types/DecodedCampaignTreasuryManagerTransactionResult.ts",
  idlFilePath: "src/sdk/idl/CampaignTreasuryManager.ts",
  programName: "CampaignTreasuryManager",
});
