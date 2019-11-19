const NodeEnvironment = require("jest-environment-node");

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    await super.setup();
    console.log("CustomEnvironment setup");
  }

  async teardown() {
    await super.teardown();
    console.log("CustomEnvironment teardown");
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;
