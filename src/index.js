const core = require("@actions/core");
const fs = require("fs");
const artifact = require("@actions/artifact");

try {
  const modifiedPath = core.getInput("files-modified");
  const servicesPath = core.getInput("services-used");
  const monitoredDirsInput =
    core.getInput("monitored-dirs") ||
    "cfn,tf,sls,sam,lambda,glue,state-machine,lambda-layer";
  const allMonitoredDirs = monitoredDirsInput.split(",").map((s) => s.trim());

  const modifiedData = JSON.parse(fs.readFileSync(modifiedPath, "utf8"));
  JSON.parse(fs.readFileSync(servicesPath, "utf8")); // Validate existence

  const allFiles = [...modifiedData.A, ...modifiedData.M, ...modifiedData.D];

  const topLevelDirs = new Set(
    allFiles
      .map((f) => f.split("/")[0])
      .filter((dir) => allMonitoredDirs.includes(dir))
  );

  core.info(
    `Top-level directories found: ${JSON.stringify([...topLevelDirs])}`
  );

  const output = {
    IaC: false,
    lambda: false,
    glue: false,
    "state-machine": false,
    "lambda-layer": false,
  };

  if (["cfn", "tf", "sls", "sam"].some((dir) => topLevelDirs.has(dir))) {
    output.IaC = true;
  }
  if (topLevelDirs.has("lambda")) {
    output.lambda = true;
  }
  if (topLevelDirs.has("glue")) {
    output.glue = true;
  }
  if (topLevelDirs.has("state-machine")) {
    output["state-machine"] = true;
  }
  if (topLevelDirs.has("lambda-layer")) {
    output["lambda-layer"] = true;
  }

  core.setOutput("execution-path", output);

    // Save to file
    const outputFilePath = "execution-path.json";
    fs.writeFileSync(outputFilePath, JSON.stringify(output, null, 2));
  
    // Upload artifact
    const artifactClient = artifact.create();
    artifactClient.uploadArtifact("execution-path", [outputFilePath], ".", {
      continueOnError: false,
    });
    
  // Generate markdown table for GitHub Step Summary
  let summary = `### 📋 Execution Path\n\n`;
  summary += `| Service         | Execute |\n`;
  summary += `|-----------------|---------|\n`;

  for (const [key, value] of Object.entries(output)) {
    const status = value ? "✅" : "❌";
    summary += `| ${key.padEnd(16)} | ${status} |\n`;
  }

  // Append to GitHub Step Summary file
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (summaryPath) {
    fs.appendFileSync(summaryPath, summary);
  } else {
    console.log(
      "GITHUB_STEP_SUMMARY is not defined. Here's the output:\n",
      summary
    );
  }
} catch (error) {
  core.setFailed(error.message);
}
