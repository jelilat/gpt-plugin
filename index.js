const { Network, Alchemy } = require('alchemy-sdk') 
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const { LensClient, development } = require("@lens-protocol/client");

const lensClient = new LensClient({
  environment: development
});

const app = express();
const port = 8080;
const alchemyUrl = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/eth_getBalance', async (req, res) => {
    try {
      const { address, tag } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [address, tag],
        method: 'eth_getBalance'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.post('/eth_getBlockTransactionCountByHash', async (req, res) => {
    try {
      const { hash } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [hash],
        method: 'eth_getBlockTransactionCountByHash'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
  
  // eth_getBlockTransactionCountByNumber
app.post('/eth_getBlockTransactionCountByNumber', async (req, res) => {
    try {
      const { tag } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [tag],
        method: 'eth_getBlockTransactionCountByNumber'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
  
  // eth_blockNumber
  app.post('/eth_blockNumber', async (req, res) => {
    try {
      const data = {
        id: 1,
        jsonrpc: '2.0',
        method: 'eth_blockNumber'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
  
  // eth_getBlockByNumber
  app.post('/eth_getBlockByNumber', async (req, res) => {
    try {
      const { blockNumber, returnTransactionObjects } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [blockNumber, returnTransactionObjects],
        method: 'eth_getBlockByNumber'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
  
  // eth_getFilterChanges
  app.post('/eth_getFilterChanges', async (req, res) => {
    try {
      const { filterId } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [filterId],
        method: 'eth_getFilterChanges'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
  
  // eth_getLogs
  app.post('/eth_getLogs', async (req, res) => {
    try {
      const { filter } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [filter],
        method: 'eth_getLogs'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send
      ('Error while forwarding the request to Alchemy API');
    }
  });
  
  // eth_getBlockByHash
  app.post('/eth_getBlockByHash', async (req, res) => {
    try {
      const { blockHash, returnTransactionObjects } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [blockHash, returnTransactionObjects],
        method: 'eth_getBlockByHash'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
    
  // eth_getTransactionCount
app.post('/eth_getTransactionCount', async (req, res) => {
    try {
      const { address, tag } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [address, tag],
        method: 'eth_getTransactionCount'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
  
  // eth_getTransactionReceipt
  app.post('/eth_getTransactionReceipt', async (req, res) => {
    try {
      const { transactionHash } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [transactionHash],
        method: 'eth_getTransactionReceipt'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
  
  // eth_getTransactionByHash
  app.post('/eth_getTransactionByHash', async (req, res) => {
    try {
      const { transactionHash } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [transactionHash],
        method: 'eth_getTransactionByHash'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
  
  // eth_getTransactionByBlockHashAndIndex
  app.post('/eth_getTransactionByBlockHashAndIndex', async (req, res) => {
    try {
      const { blockHash, transactionIndex } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [blockHash, transactionIndex],
        method: 'eth_getTransactionByBlockHashAndIndex'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

// eth_call
app.post('/eth_call', async (req, res) => {
    try {
      const { callObject } = req.body;
      const data = {
        id: 1,
        jsonrpc: '2.0',
        params: [callObject, 'latest'],
        method: 'eth_call'
      };
  
      const alchemyResponse = await axios.post(alchemyUrl, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
});

app.post('/getTokenAllowance', async (req, res) => {
    try {
      const { contract, owner, spender } = req.body;
  
      const alchemyData = {
        id: 1,
        jsonrpc: '2.0',
        method: 'alchemy_getTokenAllowance',
        params: [
          {
            contract,
            owner,
            spender
          }
        ]
      };
  
      const alchemyResponse = await axios.post(`${alchemyUrl}/v2/docs-demo`, alchemyData, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET, 
};
  
const alchemy = new Alchemy(settings);

app.get('/getTokenMetadata/:contract', async (req, res) => {
    try {
      const { contract } = req.params;
  
      const tokenMetadata = await alchemy.core.getTokenMetadata(contract);
  
      res.status(200).json(tokenMetadata);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while fetching token metadata');
    }
  });

  app.get('/getTokenMetadata/:contract', async (req, res) => {
    try {
      const { contract } = req.params;
  
      const tokenMetadata = await alchemy.core.getTokenMetadata(contract);
  
      res.status(200).json(tokenMetadata);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while fetching token metadata');
    }
  });
  

const nftUrl = `https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.ALCHEMY_API_KEY}`

app.get('/getNFTsForOwnerV3', async (req, res) => {
    try {
      const { owner, withMetadata, pageSize } = req.query;
  
      const alchemyUrl = `${nftUrl}/getNFTsForOwner?owner=${owner}&withMetadata=${withMetadata}&pageSize=${pageSize}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
});

app.get('/getNFTMetadata', async (req, res) => {
    try {
      const { contractAddress, tokenId, refreshCache } = req.query;
  
      const alchemyUrl = `${nftUrl}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}&refreshCache=${refreshCache}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.post('/getNFTMetadataBatch', async (req, res) => {
    try {
      const { tokens, refreshCache } = req.body;
  
      const alchemyResponse = await axios.post(`${nftUrl}/getNFTMetadataBatch`, {
        tokens,
        refreshCache,
      }, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/getContractMetadata', async (req, res) => {
    try {
      const { contractAddress } = req.query;
  
      const alchemyUrl = `${nftUrl}/getContractMetadata?contractAddress=${contractAddress}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.post('/getContractMetadataBatch', async (req, res) => {
    try {
      const { contractAddresses } = req.body;
  
      const alchemyResponse = await axios.post(`${nftUrl}/getContractMetadataBatch`, {
        contractAddresses,
      }, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/getNFTsForContract', async (req, res) => {
    try {
      const { contractAddress, withMetadata } = req.query;
  
      const alchemyUrl = `${nftUrl}/getNFTsForContract?contractAddress=${contractAddress}&withMetadata=${withMetadata}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/getOwnersForNFT', async (req, res) => {
    try {
      const { contractAddress, tokenId } = req.query;
  
      const alchemyUrl = `${nftUrl}/getOwnersForNFT?contractAddress=${contractAddress}&tokenId=${tokenId}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/getOwnersForContract', async (req, res) => {
    try {
      const { contractAddress, withTokenBalances } = req.query;
  
      const alchemyUrl = `${nftUrl}/getOwnersForContract?contractAddress=${contractAddress}&withTokenBalances=${withTokenBalances}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/getSpamContracts', async (req, res) => {
    try {
      const alchemyUrl = `${nftUrl}/getSpamContracts`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/isSpamContract', async (req, res) => {
    try {
      const { contractAddress } = req.query;
  
      const alchemyUrl = `${nftUrl}/isSpamContract?contractAddress=${contractAddress}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/isAirdropNFT', async (req, res) => {
    try {
      const { contractAddress, tokenId } = req.query;
  
      const alchemyUrl = `${nftUrl}/isAirdropNFT?contractAddress=${contractAddress}&tokenId=${tokenId}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/getFloorPrice', async (req, res) => {
    try {
      const { contractAddress } = req.query;
  
      const alchemyUrl = `${nftUrl}/getFloorPrice?contractAddress=${contractAddress}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/computeRarity', async (req, res) => {
    try {
      const { contractAddress, tokenId } = req.query;
  
      const alchemyUrl = `${nftUrl}/computeRarity?contractAddress=${contractAddress}&tokenId=${tokenId}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/searchContractMetadata', async (req, res) => {
    try {
      const { query } = req.query;
  
      const alchemyUrl = `${nftUrl}/searchContractMetadata?query=${query}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/summarizeNFTAttributes', async (req, res) => {
    try {
      const { contractAddress } = req.query;
  
      const alchemyUrl = `${nftUrl}/summarizeNFTAttributes?contractAddress=${contractAddress}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/isHolderOfContract', async (req, res) => {
    try {
      const { wallet } = req.query;
  
      const alchemyUrl = `${nftUrl}/isHolderOfContract?wallet=${wallet}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/getNFTSales', async (req, res) => {
    try {
      const { fromBlock, toBlock, order, contractAddress, tokenId } = req.query;
  
      const alchemyUrl = `${nftUrl}/getNFTSales?fromBlock=${fromBlock}&toBlock=${toBlock}&order=${order}&contractAddress=${contractAddress}&tokenId=${tokenId}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });

  app.get('/getContractsForOwner', async (req, res) => {
    try {
      const { owner, pageSize, withMetadata } = req.query;
  
      const alchemyUrl = `${nftUrl}/getContractsForOwner?owner=${owner}&pageSize=${pageSize}&withMetadata=${withMetadata}`;
  
      const alchemyResponse = await axios.get(alchemyUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(alchemyResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Alchemy API');
    }
  });
  
  app.get('/getAbi', async (req, res) => {
    try {
      const { address } = req.query;
      const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
  
      const etherscanUrl = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${etherscanApiKey}`;
  
      const etherscanResponse = await axios.get(etherscanUrl, {
        headers: { 'Accept': 'application/json' },
      });
  
      res.status(200).json(etherscanResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while forwarding the request to Etherscan API');
    }
  });
  
  app.get('/getAssetTransfers', async (req, res) => {
    try {
        const { toAddress, fromAddress, fromBlock, excludeZeroValue } = req.query;

        let queryObject = {
            category: ["erc721", "erc1155", "erc20"]
        };

        if(toAddress) {
            queryObject.toAddress = toAddress;
        }
        
        if(fromAddress) {
            queryObject.fromAddress = fromAddress;
        }

        if(fromBlock) {
            queryObject.fromBlock = fromBlock;
        }

        if(excludeZeroValue) {
            queryObject.excludeZeroValue = excludeZeroValue === 'true';
        }

        const alchemyResponse = await alchemy.core.getAssetTransfers(queryObject);

        res.status(200).json(alchemyResponse.transfers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error while forwarding the request to Alchemy API');
    }
});


app.get('/getAllOwnedProfiles', async (req, res) => {
    try {
      const { address } = req.query;
      
      const ownedProfiles = await lensClient.profile.fetchAll({
        ownedBy: [address]
      });
  
      res.status(200).json(ownedProfiles);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while fetching profiles');
    }
  });
  
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});