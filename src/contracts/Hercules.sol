pragma solidity ^0.5.0;

contract Hercules {
    uint userCount=0;
    mapping(uint => User) public users;

    struct User {
        address payable userAddress;
        uint units;
    }

    event userInitialized(
        address payable userAddress, 
        uint units
    );

    event unitsAdded (
        address payable userAddress, 
        uint units
    );

    event billPaid (
        address payable deployer,
        address payable user,
        uint units,
        uint amount
    );

    function initialzeUser() public {
        userCount++;
        users[userCount].userAddress=msg.sender;
        users[userCount].units=0;
        emit userInitialized(users[userCount].userAddress,users[userCount].units);
    }
    function addUnit(uint _id, uint _units) public {
        require(_units >= 0);
        User memory _user = users[_id];
        _user.units = _user.units + _units;
        users[_id] = _user;
        emit unitsAdded(users[_id].userAddress,users[_id].units);
    }
    function payBill(uint _id) public payable {
        address payable _deployer = users[0].userAddress;
        address(_deployer).transfer(msg.value);
        users[_id].units=0;
        emit billPaid(_deployer,users[_id].userAddress,users[_id].units,msg.value);
    }
}
