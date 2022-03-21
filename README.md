# Development Setup

Hardhat is currently set up to deploy to testnets using Alchemy.

Make an .env (copy .env.example) in the root directory and replace the placeholder variables with your API keys.

Install dependencies
```
yarn install
```

# Contract

## Testing
```
yarn test
```

## Deployment

### On Hardhat Network

Open two terminals. Run the local network node in one:
```
yarn hhnode
```

In the other, deploy to localhost:
```
yarn deploy localhost
```

### On a specific network
Specify the target `network` like ropsten / rinkeby.

```
yarn deploy <network>
```

## Verification

This task uses the hardhat-etherscan plugin to verify the source code on a deployed contract.
```
yarn verify <network> <contract_address>
```
