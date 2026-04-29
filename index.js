const core = require("@actions/core");
const {
  CodeartifactClient,
  GetAuthorizationTokenCommand,
  GetRepositoryEndpointCommand,
  // eslint-disable-next-line no-unused-vars
  GetRepositoryEndpointCommandOutput,
} = require("@aws-sdk/client-codeartifact");

async function run() {
  try {
    const region = core.getInput("region");
    const repository = core.getInput("repository");
    const domain = core.getInput("domain");
    const domainOwner = core.getInput("domain-owner");
    const format = core.getInput("format");
    const durationSeconds = parseInt(core.getInput("duration-seconds"));

    if (!region || !domain) {
      core.setFailed("Required inputs 'region', 'domain' must be provided.");
      return;
    }

    const client = new CodeartifactClient({
      region: region,
    });

    if (repository) {
      const getRepositoryEndpointCmd = new GetRepositoryEndpointCommand({
        domain,
        domainOwner,
        repository,
        format: format,
      });

      /** @type GetRepositoryEndpointCommandOutput */
      const endpointResult = await client.send(getRepositoryEndpointCmd);

      if (!endpointResult.repositoryEndpoint) {
        core.setFailed(
          "Failed to retrieve repository endpoint from CodeArtifact.",
        );
        return;
      }

      core.exportVariable(
        "CODEARTIFACT_REPOSITORY_ENDPOINT",
        endpointResult.repositoryEndpoint,
      );
      core.setOutput("endpoint", endpointResult.repositoryEndpoint);
    }

    const getAuthorizationTokenCmd = new GetAuthorizationTokenCommand({
      domain,
      domainOwner,
      durationSeconds: durationSeconds !== 0 ? durationSeconds : null,
    });

    const tokenResult = await client.send(getAuthorizationTokenCmd);

    if (!tokenResult.authorizationToken) {
      core.setFailed(
        "Failed to retrieve authorization token from CodeArtifact.",
      );
      return;
    }

    core.exportVariable(
      "CODEARTIFACT_AUTH_TOKEN",
      tokenResult.authorizationToken,
    );
    core.setSecret(tokenResult.authorizationToken);
  } catch (error) {
    core.setFailed(error.message);
  }
}

exports.run = run;

if (require.main === module) {
  run();
}
