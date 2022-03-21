/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyContract, MyContractInterface } from "../MyContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_counterStart",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incrementCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161022738038061022783398181016040528101906100329190610054565b806000819055505061009e565b60008151905061004e81610087565b92915050565b60006020828403121561006657600080fd5b60006100748482850161003f565b91505092915050565b6000819050919050565b6100908161007d565b811461009b57600080fd5b50565b61017a806100ad6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635b34b9661461003b57806361bc221a14610059575b600080fd5b610043610077565b60405161005091906100a7565b60405180910390f35b610061610092565b60405161006e91906100a7565b60405180910390f35b60008060008154610087906100cc565b919050819055905090565b60005481565b6100a1816100c2565b82525050565b60006020820190506100bc6000830184610098565b92915050565b6000819050919050565b60006100d7826100c2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561010a57610109610115565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220e32996873b7cb8ed01f9649e88fe2f0cd94ec3faed12bb34828edc2ea4ff4fc364736f6c63430008000033";

type MyContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyContract__factory extends ContractFactory {
  constructor(...args: MyContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MyContract";
  }

  deploy(
    _counterStart: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyContract> {
    return super.deploy(_counterStart, overrides || {}) as Promise<MyContract>;
  }
  getDeployTransaction(
    _counterStart: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_counterStart, overrides || {});
  }
  attach(address: string): MyContract {
    return super.attach(address) as MyContract;
  }
  connect(signer: Signer): MyContract__factory {
    return super.connect(signer) as MyContract__factory;
  }
  static readonly contractName: "MyContract";
  public readonly contractName: "MyContract";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyContractInterface {
    return new utils.Interface(_abi) as MyContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyContract {
    return new Contract(address, _abi, signerOrProvider) as MyContract;
  }
}
