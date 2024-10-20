// This file is automatically generated and contains assets from mainnet.
// Generate for other networks by running: yarn generate-assets [network].
// Supported networks are: arbitrum, goerli, mainnet, and polygon.

import { Address } from "@graphprotocol/graph-ts";

class Assets {
  public stableAssets: Address[];
  public pricingAssets: Address[];
  public fxAssets: Address[];
  public fxAggregators: Address[];
}

export const USDC_ADDRESS = Address.fromString(
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
);
export const DAI_ADDRESS = Address.fromString(
  "0x6B175474E89094C44Da98b954EedeAC495271d0F"
);
export const USDT_ADDRESS = Address.fromString(
  "0xdAC17F958D2ee523a2206206994597C13D831ec7"
);

export const assets: Assets = {
  stableAssets: [
    Address.fromString("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"), // USDC
    Address.fromString("0x6B175474E89094C44Da98b954EedeAC495271d0F"), // DAI
    Address.fromString("0xdAC17F958D2ee523a2206206994597C13D831ec7"), // USDT
    Address.fromString("0x02bc4e375768f6e4eec3b5E8FF5F015c356c873d"), // MANTLE USDT
    Address.fromString("0x4F6A4C51304758c6258a13e8BD9A600440173D74"), // MANTLE USDC
    Address.fromString("0x65e9e95ABb4aF635Da007d508708fa85c208FB9b"), // MANTLE DAI
    Address.fromString("0xd0247D417434b83b9246a878335Ca192Ab2F6b53"), // Linea Testenet USDT
    Address.fromString("0x8042bAf687c2342930558806e8E6A2B946B22a22"), // Linea Testenet USDC
    Address.fromString("0xc9F5882B1F513AE962FEf465900F1ADB0703B6fa"), // Linea Testenet DAI
    Address.fromString("0xa219439258ca9da29e9cc4ce5596924745e12b93"), // Linea USDT
    Address.fromString("0x176211869ca2b568f2a7d4ee941e073a821ee1ff"), // Linea USDC
    Address.fromString("0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5"), // Linea DAI
    Address.fromString("0xA4F6268f8f6CA4D9160C584338587B515AfF7B88"), // Lumia Testnet USDT
    Address.fromString("0x9140084f70C3DF3ed0Cf7a13c7617CC7a45C3E25"), // Lumia Testnet USDC
    Address.fromString("0x8f60119E7b6D0691097232e8F25E19961623ad27"), // Lumia Testnet DAI
  ],
  pricingAssets: [
    Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"), // WETH
    Address.fromString("0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0"), // wstETH
    Address.fromString("0x804CdB9116a10bB78768D3252355a1b18067bF8f"), // bb-a-DAI-V1
    Address.fromString("0x9210F1204b5a24742Eba12f710636D76240dF3d0"), // bb-a-USDC-V1
    Address.fromString("0x2BBf681cC4eb09218BEe85EA2a5d3D13Fa40fC0C"), // bb-a-USDT-V1
    Address.fromString("0xae37D54Ae477268B9997d4161B96b8200755935c"), // bb-a-DAI-V2
    Address.fromString("0x82698aeCc9E28e9Bb27608Bd52cF57f704BD1B83"), // bb-a-USDC-V2
    Address.fromString("0x2F4eb100552ef93840d5aDC30560E5513DFfFACb"), // bb-a-USDT-V2
    Address.fromString("0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"), // WBTC
    Address.fromString("0xba100000625a3754423978a60c9317c58a424e3D"), // BAL
    Address.fromString("0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"), // MKR
    Address.fromString("0x6810e776880C02933D47DB1b9fc05908e5386b96"), // GNO
    Address.fromString("0x5c6ee304399dbdb9c8ef030ab642b10820db8f56"), // B-80BAL-20WETH
    Address.fromString("0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"), // MATIC
    Address.fromString("0x3c3a81e81dc49a522a592e7622a7e711c06bf354"), // MANTLE
    Address.fromString("0xA13a9247ea42D743238089903570127DdA72fE44"), // bb-a-USD
    Address.fromString("0x2C1b868d6596a18e32E61B901E4060C872647b6C"), // Linea Testnet WETH
    Address.fromString("0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f"), // Linea WETH
    Address.fromString("0x1a1aF9C78704D3a0Ab9e031C92E7bd808711A582"), // Lumia Testnet WETH
  ],
  fxAssets: [
    Address.fromString("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"), // USDC
    Address.fromString("0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96"), // XSGD
    Address.fromString("0x6B175474E89094C44Da98b954EedeAC495271d0F"), // DAI
    Address.fromString("0xdB25f211AB05b1c97D595516F45794528a807ad8"), // EURS
  ],
  fxAggregators: [
    Address.fromString("0x789190466E21a8b78b8027866CBBDc151542A26C"), // USDC-USD
    Address.fromString("0xc96129C796F03bb21AC947EfC5329CD1F560305B"), // XSGD-USD
    Address.fromString("0xDEc0a100eaD1fAa37407f0Edc76033426CF90b82"), // DAI-USD
    Address.fromString("0x02F878A94a1AE1B15705aCD65b5519A46fe3517e"), // EURS-USD
  ],
};
