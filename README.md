# Ombrella

Ombrella is a ChatGPT plugin that lets you query historical and real-time Ethereum data using natural language. You can perform both simple and complex queries, such as:

- How mant NFTs does vitalik.eth own?,
- What is "0xdeadbeef"s lens handle?,
- Show me the latest USDC transfers, etc.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

Create a new file named `.env` with the following:

```bash
ALCHEMY_API_KEY=<YOUR_ALCHEMY_API_KEY>
ETHERSCAN_API_KEY=<YOUR_ETHERSCAN_API_KEY>
```

```bash
$ git clone
$ cd
$ npm install
$ node index.js
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

Add the plugin to ChatGPT.