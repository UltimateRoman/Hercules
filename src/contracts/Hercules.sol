pragma solidity >=0.5.0;

contract Hercules {
    uint public uCount;
    address payable public corporation;

    constructor() public {
        corporation = msg.sender;
    }

    mapping(uint => User) public users;

    struct User {
        address payable userAddress;
        uint units;
    }

    event userInitialized(
        uint id,
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
        uint amount
    );

    function initializeUser() external {
        uCount++;
        users[uCount] = User(msg.sender, 0);
        emit userInitialized(uCount, msg.sender, 0);
    }

    function addUnit(uint _units) external {
        require(_units >= 0);
        uint _i;
        User memory _user;
        for(_i=1;_i<=uCount;++_i)
            if(users[_i].userAddress==msg.sender)
            {
                _user=users[_i];
                break;
            }
        _user.units = _user.units + _units;
        users[_i] = _user;
        emit unitsAdded(msg.sender,_units);
    }

    function payBill() public payable {
        address(corporation).transfer(msg.value);
        uint _i;
        User memory _user;
        for(_i=1;_i<=uCount;++_i)
            if(users[_i].userAddress==msg.sender)
            {
                _user=users[_i];
                break;
            }
        _user.units=0;
        users[_i] = _user;
        emit billPaid(corporation, msg.sender, msg.value);
    }
}
