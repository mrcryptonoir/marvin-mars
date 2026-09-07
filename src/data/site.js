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
};

/* Telemetry marquee: the furniture that runs under the hero. */
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

/* Chapter II. Every figure is SpaceX's or Musk's own, stated in public. */
export const MARS_FIGURES = [
  { v: '5', k: 'Starships planned for the window' },
  { v: 'NOV–DEC', k: '2026 transfer window' },
  { v: '50/50', k: 'Musk’s own odds of making it' },
  { v: '$100M', k: 'Per tonne to the surface, from 2028' },
];

export const CHAIN_SPECS = [
  {
    k: '01',
    label: 'Architecture',
    value: 'Arbitrum Orbit L2',
    body: 'Robinhood Chain runs Arbitrum’s Orbit stack as an Ethereum layer 2, not a layer 3. It posts to Ethereum directly and inherits Ethereum’s security.',
  },
  {
    k: '02',
    label: 'Block time',
    value: '~100 ms',
    body: 'Blocks close in about a tenth of a second. That is the speed order flow needs, which is what the chain was designed to carry.',
  },
  {
    k: '03',
    label: 'Gas token',
    value: 'ETH',
    body: 'Fees are paid in ETH. There is no separate gas coin to acquire before you can use the network.',
  },
  {
    k: '04',
    label: 'Data availability',
    value: 'Ethereum blobs',
    body: 'Transaction data goes into Ethereum blob space, so the chain’s history can be reconstructed from Ethereum alone.',
  },
  {
    k: '05',
    label: 'Built for',
    value: 'Tokenized equities',
    body: 'Stock tokens tracking listed companies, along with ETFs and other real-world assets. They trade outside exchange hours.',
  },
  {
    k: '06',
    label: 'Public mainnet',
    value: '01 JUL 2026',
    body: 'Announced in London at Robinhood’s The World Is Flat keynote. The testnet before it cleared four million transactions in its first week.',
  },
];

export const MISSION_LOG = [
  {
    sol: 'SOL 001',
    title: 'Ignition',
    status: 'COMPLETE',
    body: 'Contract deployed on Robinhood Chain. Liquidity added and burned, ownership renounced. There was no presale and no team allocation.',
    img: 'sol-01',
  },
  {
    sol: 'SOL 014',
    title: 'Transfer orbit',
    status: 'COMPLETE',
    body: 'Listings, charts, the first thousand holders. Most of this stretch is quiet. A token needs time on a chart before anyone can read it.',
    img: 'sol-02',
  },
  {
    sol: 'SOL 077',
    title: 'Descent',
    status: 'ACTIVE',
    body: 'Legion expansion. Sticker packs, short videos, and enough art that the character can carry a feed without help.',
    img: 'sol-03',
  },
  {
    sol: 'SOL ∞',
    title: 'Colony',
    status: 'STANDBY',
    body: 'Tooling and treasury, decided by whoever is still holding. Nothing is promised here, because nobody is in a position to promise it.',
    img: 'sol-04',
  },
];

export const BUY_STEPS = [
  {
    n: '01',
    title: 'Add the network',
    body: 'Any EVM wallet works. Add Robinhood Chain to it and keep a little ETH on hand, since ETH is what pays the gas.',
  },
  {
    n: '02',
    title: 'Fund it',
    body: 'Bridge ETH from Ethereum mainnet, or send it across from an exchange that already supports the network.',
  },
  {
    n: '03',
    title: 'Check the address',
    body: 'Open the DEX and paste the contract from this page, then read it back character by character. Never use an address someone sent you.',
  },
  {
    n: '04',
    title: 'Swap',
    body: 'Set your slippage, confirm, and that is the whole process. Save the address somewhere you can find it again.',
  },
];

export const FAQ = [
  {
    q: 'Is this affiliated with Robinhood?',
    a: 'No. MARVIN is an independent community token that happens to be deployed on Robinhood Chain. Robinhood Markets did not issue it, endorse it, or review it, and has no involvement in it.',
  },
  {
    q: 'Is this affiliated with Elon Musk or SpaceX?',
    a: 'No. Marvin is a tribute to a well known dog and a well known ambition. There is no affiliation with Musk, SpaceX, Tesla, or any of their companies.',
  },
  {
    q: 'What is the token actually for?',
    a: 'It is a meme coin. There is no yield, no revenue, and no promise of return. People hold it because they like the character and the chain it sits on. That is the entire pitch.',
  },
  {
    q: 'Why Robinhood Chain?',
    a: 'Because tokenized equities and internet culture end up on the same settlement layer here. A meme running beside a tokenized share of NVIDIA is a decent joke, and the chain is fast and cheap enough to be worth using for its own sake.',
  },
  {
    q: 'What can go wrong?',
    a: 'Most of it. Meme coins routinely go to zero, liquidity can thin out fast, and a chain this young has less tooling and fewer eyes on it than Ethereum does. Size your position accordingly.',
  },
];
