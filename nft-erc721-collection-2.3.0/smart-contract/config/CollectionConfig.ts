import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PittiePartyNFT',
  tokenName: 'Pittie Party NFT',
  tokenSymbol: 'PPNFT',
  hiddenMetadataUri: 'ipfs://QmToY34PzVfjZVPTGTweTwXtWC2gcRN8CmbiztWPB4ofRh/hidden.json',
  maxSupply: 3333,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 6,
  },
  preSale: {
    price: 0.025,
    maxMintAmountPerTx: 6,
  },
  publicSale: {
    price: 0.02,
    maxMintAmountPerTx: 6,
  },
  contractAddress: '0xFEaf7bFc272C209B156310436a214DB7aDcE9cDC',
  marketplaceIdentifier: 'pittieparty_deployer',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
