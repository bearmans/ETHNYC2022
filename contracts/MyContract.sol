pragma solidity ^0.8.1;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
  *
  * @title MyContract
  * 
  */

  //Setup ERC721 NFT Contract and event emitters
contract MyContract is ERC721 {
  event NotFound(address from, address to);
  event Found(address from, address to);

//counters from example Alchemy code, may not be relevant
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

//handshakes mapping checks truthiness of transaction attempt by wallet address
  mapping(address => mapping(address => bool)) public handshakes;

//extremely basic ERC721 token returns to both wallets when both users attempt to interact w/contract while referencing other wallet
  constructor() public ERC721("MyNFT", "NFT") {}

//magically simple NFT function checks if address A has referenced address B; stores address if not, mints NFT for both wallets if so
  function makeFriends(address from, address to) public {
    if (handshakes[to][from] == true) {
      emit Found(to, from);
      mintNFT(from);
      mintNFT(to);

      handshakes[from][to] = false;
    } 
    else {
      emit NotFound(to, from);

      handshakes[from][to] = true;
    }
  }


//sample code, I don't think this is applicable for our use case
  function mintNFT(address recipient)
    public
    returns (uint256)
  {
    //_tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);

    return newItemId;
  }
}
