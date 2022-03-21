pragma solidity ^0.8.0;

import "hardhat/console.sol";

/**
  *
  * @title MyContract
  * 
  */
contract MyContract {
  uint256 public counter;

  constructor(uint256 _counterStart) {
    counter = _counterStart;
  }

  function incrementCounter() external returns (uint256) {
    return ++counter;
  }
}