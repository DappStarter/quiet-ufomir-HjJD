require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe struggle rebel sad pudding impulse light army gate'; 
let testAccounts = [
"0x9eb3dcc739314adf2de001b8fddddf6464c9249c0e62efddc38c4b2d8053f215",
"0xf7307ec5f1948d4d3e8a23de0dbf907c9bbeced1dcd194c9aa4dfde550d6746b",
"0xbf06dfbbd1a6a0c465722ab625fa0ff50c1858b1a2d0cc30c106ee2a2df38b09",
"0x730f9b835b0434087ebc6981bcc1aa9f25ca3d06aaf54daabb8cf72d1f391715",
"0xb0832a4a3070590e9e9cb7161b4a1519d00a7e5a0c8d6b07a0b8c0426407f222",
"0x48b8d3de637ec024bd0f98618f752b4c31f713b36f67bbec3bdb2c7b6ffb9ac3",
"0xd0ce275cca5bc126083c52c116e7a1adaf766d8b5f82516c9ac60106adb044de",
"0xb5e96492e3aeedc912be3627cdfe5e3f803fa71c923ad4516c74d6ee90b73e0c",
"0x0b2a17f7ac14c5f146965b869c2ce684ff58798bf63e9eec0a08dc7c8af97abe",
"0x59269651d6e32dc0641c7808950a54dd7ef936b28704f0b17534160e75145d64"
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
            gas: 8000000,
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


