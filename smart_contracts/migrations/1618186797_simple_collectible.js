const SimpleCollectible = artifacts.require("./SimpleCollectible.sol");

module.exports = function(_deployer) {
  _deployer.deploy(SimpleCollectible);
};
