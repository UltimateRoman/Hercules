pragma solidity ^0.5.0;

contract Hercules {
    mapping(address => uint) public powerConsumed;

    event userInitialized(
        uint powerConsmed,
        address user 
    );

    event unitsAdded (
        uint powerConsmed,
        address user 
    );

    function initialzeUser() public {
        powerConsumed[msg.sender]=0;
        emit userInitialized(0,msg.sender);
    }
    function addUnit(uint _units) public {
        require(_units >= 0);
        uint _power = powerConsumed[msg.sender];
        _power = _power + _units;
        powerConsumed[msg.sender] = _power;
        emit unitsAdded(_power,msg.sender);
    }
}
