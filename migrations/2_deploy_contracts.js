const Mixer = artifacts.require("Mixer");

module.exports = async function(deployer, network, accounts) {
    if (network === "development") return;  // Don't deploy on tests

    // MiniMeTokenFactory send
    let MixerFuture = Mixer.new("0x0958C55DF32886A082A4D8e9c7A1BE8bfB8c33e5");

    // MiniMeTokenFactory wait
    let mixer = await MixerFuture;
    console.info("mixer: " + mixer.address);
    console.info();


};
