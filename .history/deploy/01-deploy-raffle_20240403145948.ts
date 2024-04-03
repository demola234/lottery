module.exports = async ({ any: getNamedAccounts, any: deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
};
