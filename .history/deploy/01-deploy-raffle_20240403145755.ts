module.exports = async function ({string: getNamedAccounts, any: deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
};
