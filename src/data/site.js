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
  'SUBJECT / ONE DOG',
  'HELMET / ROMAN, GOLD CREST',
  'OWNER / E. MUSK',
  'DESTINATION / MARS',
  'TRANSFER WINDOW / NOV–DEC 2026',
  'ODDS / 50-50',
  'SUPPLY / FIXED',
  'PRESALE / NONE',
  'EXIT PLAN / NONE',
];

/* Chapter II. Every figure is SpaceX's or Musk's own, stated in public. */
export const MARS_FIGURES = [
  { v: '5', k: 'Starships planned for the window' },
  { v: 'NOV–DEC', k: '2026 transfer window' },
  { v: '50/50', k: 'Musk’s own odds of making it' },
  { v: '$100M', k: 'Per tonne to the surface, from 2028' },
];

/* Three lines, not a spec sheet. Nobody bought a dog for the blob space. */
export const CHAIN_SPECS = [
  {
    k: '01',
    label: 'The chain',
    value: 'Robinhood Chain',
    body: 'A brokerage built its own Ethereum layer 2 so shares of real companies could trade at three in the morning. Live since 1 July 2026.',
  },
  {
    k: '02',
    label: 'Gas token',
    value: 'ETH',
    body: 'Fees are paid in ETH. There is no separate gas coin to buy first.',
  },
  {
    k: '03',
    label: 'What that means here',
    value: 'Nothing special',
    body: 'The chain does not know what a dog is. It settles a meme the same way it settles a tokenized share of NVIDIA.',
  },
];

export const MISSION_LOG = [
  {
    sol: 'SOL 001',
    title: 'Ignition',
    status: 'COMPLETE',
    body: 'Contract deployed. Liquidity in and burned, ownership renounced, keys gone. No presale, no team bag, nobody to call.',
    img: 'sol-01',
  },
  {
    sol: 'SOL 014',
    title: 'Transfer orbit',
    status: 'COMPLETE',
    body: 'Listings, charts, the first thousand wallets. Coasting is the part nobody screenshots.',
    img: 'sol-02',
  },
  {
    sol: 'SOL 077',
    title: 'Descent',
    status: 'ACTIVE',
    body: 'Stickers, shorts, and enough art that the dog can carry a timeline on his own. The helmet does the work.',
    img: 'sol-03',
  },
  {
    sol: 'SOL ∞',
    title: 'Colony',
    status: 'STANDBY',
    body: 'Whatever the people still holding decide to build. Nothing promised, because nobody here is in a position to promise it.',
    img: 'sol-04',
  },
];

export const BUY_STEPS = [
  {
    n: '01',
    title: 'Add the network',
    body: 'Any EVM wallet works. Add Robinhood Chain and keep a little ETH on it for gas.',
  },
  {
    n: '02',
    title: 'Fund it',
    body: 'Bridge ETH from mainnet, or send it across from an exchange that already supports the network.',
  },
  {
    n: '03',
    title: 'Check the address',
    body: 'Paste the contract from this page and read it back character by character. Never use an address a stranger sent you. That is how people get cleaned out.',
  },
  {
    n: '04',
    title: 'Swap',
    body: 'Set your slippage, confirm, and you are on the manifest. Then close the tab, because staring at the chart has never once moved it.',
  },
];

export const FAQ = [
  {
    q: 'Is this affiliated with Elon Musk or SpaceX?',
    a: 'No. Marvin is his dog and the rocket is his company. Neither he nor SpaceX nor Tesla has anything to do with this token, and nobody asked him.',
  },
  {
    q: 'Is this affiliated with Robinhood?',
    a: 'Also no. The token sits on Robinhood Chain the same way anything can sit on a public network. Robinhood Markets did not issue it, endorse it, or review it.',
  },
  {
    q: 'So what is it, actually?',
    a: 'A meme coin about a dog in a Roman helmet. No yield, no revenue, no product, no promise of a return. People hold it because they like the dog and where he is pointed. That is the entire pitch.',
  },
  {
    q: 'Why the helmet?',
    a: 'Because Elon’s dog is called Marvin, and so is the cartoon Martian who has been trying to blow up the Earth since 1948. The costume wrote itself.',
  },
  {
    q: 'What can go wrong?',
    a: 'Most of it. Meme coins go to zero as a matter of routine, liquidity can vanish in an afternoon, and a chain this young has fewer eyes on it than Ethereum. Only send what you would shrug at losing.',
  },
];
