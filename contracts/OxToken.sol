// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OxToken is ERC20, ERC20Burnable {
    constructor(uint256 initialSupply) ERC20("OxToken", "OXT"){
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }

    function decimals() public virtual override view returns (uint8) {
        return 18;
    }
}