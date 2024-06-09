// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OxCoin is ERC20, ERC20Burnable {
    string private metadataURI;

    constructor(uint256 initialSupply, string memory _metadataURI) ERC20("OxCoin", "OXT"){
        _mint(msg.sender, initialSupply);
        metadataURI = _metadataURI;
    }

    function decimals() public virtual override view returns (uint8) {
        return 18;
    }
}