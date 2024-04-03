module.exports = async function ({ any: getNamedAccounts, any: deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
};



Promise<string> users = async function() {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy('User', { from: deployer });
} 