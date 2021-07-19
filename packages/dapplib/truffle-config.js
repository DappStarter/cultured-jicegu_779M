require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember essay gloom clinic tail gauge'; 
let testAccounts = [
"0x4672ee50cbd7e1099ec10116c9908f01540103686054d2be58386600f4a95268",
"0x1e852e73a635caa2e68fe3b770b9f26e2d0e56b894f5c2d85f8911b766f44f31",
"0xaca6371ad539179312d6b0c9494ffb50dcd7769cc2f8821a028ee0ff050d0e99",
"0x883ecef2af0276be8e046429c81b3a664223e89f3bb71ce08fd72d58cffeb2f9",
"0x8797a7e8f4456e8fa771c66652121f4b1603ebe7e7bb649745a1d7aa258f6dfd",
"0xf822fd9584e7ec27842559dd58ae124d7a373343c32c280b82575b120d918c2a",
"0x2c835933f43bf13bfd82f828cc52331aac35e49c56cad3fdcd9aa9150d101b63",
"0x062471e59e46562ab1d6abeedb8e972384a7c82ef5409d62362a9a598732b9fb",
"0xb7379666e03545c192faee2784b3cb6cce1bfb54697b6d8267b7da9c2ab33d00",
"0xd2b5c589438e32c4cf1fc0ef423b2a731e8f92ea5986692cf24bc07afc036b75"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


