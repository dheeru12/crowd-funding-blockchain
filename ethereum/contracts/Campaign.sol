pragma solidity ^0.4.17;
contract campaignFactory{
    address[] public Deployedcampaigns;
    
    function createCampaign(uint minimum) public{
        address campaignaddress = new Campaign(minimum,msg.sender);
        Deployedcampaigns.push(campaignaddress);
    }
    
    function getDeployedcampaigns() public view returns(address []){
        return Deployedcampaigns;
    }
}
contract Campaign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalscount;
        mapping(address=>bool) approvals;
    }
    Request[] public requests;
    address public manager;
    uint public minimumContriution;
    mapping(address => bool) public approvers;
    uint public approverscount;
    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
    function Campaign(uint minimum,address creator) public{
        manager=creator;
        minimumContriution=minimum;
    }
    
    function contribute() public payable{
        require(msg.value > minimumContriution);
        
        approvers[msg.sender]=true;
        approverscount++;
    }
    
    function createRequest(string description,uint value,address recipient) public{
        Request memory newRequest = Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            approvalscount:0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public{
        Request storage request=requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvalscount++;
        request.approvals[msg.sender]=true;
        
    }
    
    function finalizeRequest(uint index) public restricted{
        Request storage request=requests[index];
        
        require(!request.complete);
        require(request.approvalscount > (approverscount/2));
        
        request.recipient.transfer(request.value);
        request.complete=true;
    }

    function getSummary() public view returns(
        uint,uint,uint,uint,address
    ){
        return(
            minimumContriution,
            this.balance,
            requests.length,
            approverscount,
            manager
        );
    }

    function getRequestsCount() public view returns(uint){
        return requests.length;
    }

}