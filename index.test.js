const core = require("@actions/core");
const { mockClient } = require("aws-sdk-client-mock");
const {
  CodeartifactClient,
  GetRepositoryEndpointCommand,
  GetAuthorizationTokenCommand,
} = require("@aws-sdk/client-codeartifact");
const { run } = require("./index");

jest.mock("@actions/core");

const codeArtifactMock = mockClient(CodeartifactClient);

const CODEARTIFACT_REPOSITORY_ENDPOINT =
  "https://endpoint.codeartifact.example";
const CODEARTIFACT_AUTH_TOKEN = "asdfgqwert";

describe("configure-aws-codeartifact", () => {
  beforeEach(() => {
    codeArtifactMock.reset();
    jest.clearAllMocks();
    core.getInput.mockImplementation((name) => {
      const inputs = {
        region: "us-east-1",
        domain: "my-domain",
        "domain-owner": "123456789012",
        repository: "my-repo",
        format: "pypi",
        "duration-seconds": "3600",
      };
      return inputs[name] || "";
    });
  });

  test("exports env vars", async () => {
    codeArtifactMock.on(GetRepositoryEndpointCommand).resolvesOnce({
      repositoryEndpoint: CODEARTIFACT_REPOSITORY_ENDPOINT,
    });

    codeArtifactMock.on(GetAuthorizationTokenCommand).resolvesOnce({
      authorizationToken: CODEARTIFACT_AUTH_TOKEN,
    });

    await run();
    expect(core.exportVariable).toHaveBeenCalledWith(
      "CODEARTIFACT_REPOSITORY_ENDPOINT",
      CODEARTIFACT_REPOSITORY_ENDPOINT,
    );
    expect(core.setOutput).toHaveBeenCalledWith(
      "endpoint",
      CODEARTIFACT_REPOSITORY_ENDPOINT,
    );
    expect(core.exportVariable).toHaveBeenCalledWith(
      "CODEARTIFACT_AUTH_TOKEN",
      CODEARTIFACT_AUTH_TOKEN,
    );
    expect(core.setSecret).toHaveBeenCalledWith(CODEARTIFACT_AUTH_TOKEN);
  });

  test("skips endpoint retrieval when repository is not provided", async () => {
    core.getInput.mockImplementation((name) => {
      const inputs = {
        region: "us-east-1",
        domain: "my-domain",
        "domain-owner": "123456789012",
        "duration-seconds": "3600",
      };
      return inputs[name] || "";
    });

    codeArtifactMock.on(GetAuthorizationTokenCommand).resolvesOnce({
      authorizationToken: CODEARTIFACT_AUTH_TOKEN,
    });

    await run();
    expect(core.exportVariable).not.toHaveBeenCalledWith(
      "CODEARTIFACT_REPOSITORY_ENDPOINT",
      expect.anything(),
    );
    expect(core.exportVariable).toHaveBeenCalledWith(
      "CODEARTIFACT_AUTH_TOKEN",
      CODEARTIFACT_AUTH_TOKEN,
    );
    expect(core.setSecret).toHaveBeenCalledWith(CODEARTIFACT_AUTH_TOKEN);
  });

  test("fails when required inputs are missing", async () => {
    core.getInput.mockReturnValue("");

    await run();
    expect(core.setFailed).toHaveBeenCalledWith(
      "Required inputs 'region', 'domain' must be provided.",
    );
  });
});
