pragma solidity ^0.5.0;

contract trustlessBank {
	mapping (address => uint) private balances;
	address public owner;
	event LogDepositMade(adddress accoutAddress , uint amount);

	constructor() public {
		owner = msg.sender;
	}
	function deposit() public payable returns (uint) {
		require((balances[msg.sender] + msg.value) >= balances[msg.sender]);
		balanes[msg.sender] += msg.value;
		emit LogDepositMade(msg.sender, msg.value);
		return balances[msg.sender];
	}
	function witdDraw(uint amount) public returns (uint remainingBal) {

		require(amount <= balances[msg.sender]);
		balances[msg.sender] -= amount;
		msg.sender.transfer(amount);

		return balances[msg.sender];
	}

	function balance() view public returns (uint) {
		return balances[msg.sender];
	}
	
}
