const {developmemntChains} =  re


module.exports = async function ({ getNamedAccounts, deployments }) { 
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId; 
}