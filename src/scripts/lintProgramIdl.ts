import lintProgramIdlScript from "@boom-army/boom-program-tools/dist/scripts/lintProgramIdlScript";

function lintProgramIdl() {
  lintProgramIdlScript("src/sdk/idl/CampaignTreasuryManager.ts");
}

lintProgramIdl();
