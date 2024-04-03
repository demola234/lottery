module.exports = async function ({ any: getNamedAccounts, any: deployments }): Promise<void> {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
};
