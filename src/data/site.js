export const TOKEN = {
  name: 'MARVIN',
  ticker: '$MARVIN',
  chain: 'Robinhood Chain',
  contract: '0x0000000000000000000000000000000000000000',
  supply: '1,000,000,000',
  tax: '0 / 0',
  lp: 'Burned',
  ownership: 'Renounced',
};

export const LINKS = {
  buy: '#buy',
  chart: 'https://dexscreener.com',
  telegram: 'https://t.me',
  x: 'https://x.com',
  explorer: 'https://robinhood.com/us/en/newsroom/a-new-visual-identity/',
};

/* Telemetry marquee — the furniture that runs under the hero. */
export const TELEMETRY = [
  'NETWORK / ROBINHOOD CHAIN',
  'STACK / ARBITRUM ORBIT',
  'SETTLES TO / ETHEREUM',
  'GAS TOKEN / ETH',
  'BLOCK TIME / ~100 MS',
  'DATA AVAILABILITY / ETH BLOBS',
  'MAINNET / 01 JUL 2026',
  'PAYLOAD / ONE DOG',
];

/* Chapter II — chain spec grid. */
export const CHAIN_SPECS = [
  {
    k: '01',
    label: 'Architecture',
    value: 'Arbitrum Orbit L2',
    body: 'Robinhood Chain is an Ethereum layer 2 built on Arbitrum technology — not a layer 3. It posts to Ethereum directly and inherits its security.',
  },
  {
    k: '02',
    label: 'Block time',
    value: '~100 ms',
    body: 'Fast enough that the confirmation is gone before you finish the click. Built for order flow, not for waiting rooms.',
  },
  {
    k: '03',
    label: 'Gas token',
    value: 'ETH',
    body: 'No novelty gas coin, no bridge tax on thinking. You pay in the same asset the settlement layer speaks.',
  },
  {
    k: '04',
    label: 'Data availability',
    value: 'Ethereum blobs',
    body: 'Transaction data lands in Ethereum blob space. The record is public, the record is permanent, the record is not ours to edit.',
  },
  {
    k: '05',
    label: 'Purpose built for',
    value: 'Tokenized equities',
    body: 'Stock tokens tracking listed companies, ETFs and real-world assets — trading around the clock instead of around a bell.',
  },
  {
    k: '06',
    label: 'Public mainnet',
    value: '01 JUL 2026',
    body: 'Announced in London at The World Is Flat, after a testnet that cleared four million transactions in its first week.',
  },
];

/* Chapter III — mission log. */
export const MISSION_LOG = [
  {
    sol: 'SOL 001',
    title: 'Ignition',
    status: 'COMPLETE',
    body: 'Contract deployed on Robinhood Chain. Liquidity in, keys out, ownership renounced. No presale, no team allocation, no soft landing.',
    img: 'sol-01',
  },
  {
    sol: 'SOL 014',
    title: 'Transfer orbit',
    status: 'COMPLETE',
    body: 'Listings, charts, the first thousand holders. The long coast where nothing looks like it is happening and everything is.',
    img: 'sol-02',
  },
  {
    sol: 'SOL 077',
    title: 'Descent',
    status: 'ACTIVE',
    body: 'Legion expansion. Stickers, shorts, a meme arsenal built to survive re-entry. Marvin becomes the face of the chain, not a passenger on it.',
    img: 'sol-03',
  },
  {
    sol: 'SOL ∞',
    title: 'Colony',
    status: 'STANDBY',
    body: 'Tooling, treasury, terrain. Whatever the holders decide to build once the dust settles and the ground stops moving.',
    img: 'sol-04',
  },
];

/* How to buy. */
export const BUY_STEPS = [
  {
    n: '01',
    title: 'Get a wallet on the network',
    body: 'Any EVM wallet works. Add Robinhood Chain and keep a little ETH on it — ETH is the gas token, so nothing else needs bridging.',
  },
  {
    n: '02',
    title: 'Fund it',
    body: 'Bridge ETH from Ethereum mainnet, or move it across from an exchange that already supports the network.',
  },
  {
    n: '03',
    title: 'Paste the contract',
    body: 'Open the DEX, paste the address from this page, and check it character for character. Never trust an address a stranger sends you.',
  },
  {
    n: '04',
    title: 'Swap and hold',
    body: 'Set your slippage, confirm, and you are on the manifest. Four hundred metres is one lap of a running track. It was still the whole story.',
  },
];

export const FAQ = [
  {
    q: 'Is this affiliated with Robinhood?',
    a: 'No. MARVIN is an independent community token deployed on Robinhood Chain. It is not issued, endorsed, operated or reviewed by Robinhood Markets, and nothing here is a product of theirs.',
  },
  {
    q: 'Is this affiliated with Elon Musk or SpaceX?',
    a: 'No. Marvin is a tribute, drawn from a well-known dog and a well-known ambition. There is no affiliation with Musk, SpaceX, Tesla or any of their entities.',
  },
  {
    q: 'What is the token for?',
    a: 'It is a meme coin. It has no yield, no revenue, no roadmap you can sue anyone over, and no promise of return. It is a flag planted on a new chain by people who thought the chain deserved one.',
  },
  {
    q: 'Why Robinhood Chain?',
    a: 'Because it is the first place tokenized equities and internet culture share a settlement layer. A meme on the same rails as a share of NVIDIA is a joke worth building properly.',
  },
];
