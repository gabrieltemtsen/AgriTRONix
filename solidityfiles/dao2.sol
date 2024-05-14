// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract fin{
    address private owner;
    
    struct person{
        string name;
        bool activist;
        bool withdraw;
        uint power;
        bool farmer;
        address vote;
        uint weight;
        uint donated;
        string area_name;
        uint256 area_size;
        
}
mapping (string=>uint256) areaw;
mapping(address=>person) persons;
mapping(string=>uint) ta;
address[] public farmers;
address[] public activists;
string[] public farmersn;
uint256 balance_=0;

int Totalvotes;

constructor() {
    
     owner=msg.sender;
     
}
function deposit() payable public{
    persons[msg.sender].donated+=msg.value;


}
function withdraw() payable public{
    
    uint256 actib=balance_/20;
    
    uint256 farmerb=balance_-actib;
    require(!persons[msg.sender].withdraw,"withdrawal can only be done once");
    require(persons[msg.sender].farmer||persons[msg.sender].activist,"withdrawal can only be done by farmers or activists");
    address addr=msg.sender;
    address payable add=payable(addr);
    if (persons[msg.sender].farmer){
    uint256 farmery=farmerb*areaw[persons[msg.sender].area_name]*persons[msg.sender].area_size/ta[persons[addr].area_name]/100;
    add.transfer(farmery);
    }
    else if (persons[msg.sender].activist){
        add.transfer((persons[msg.sender].power/total_power())*actib);
        
    }
    persons[msg.sender].withdraw=true;
}
function AreaWeightage(string[] memory an,uint[] memory aw) public {
    require(persons[msg.sender].activist==true,"Only activist can set area weigtage");
    for (uint k=0;k<aw.length;k++){
        areaw[an[k]]=aw[k];}


}
function  voting(address candidate) public{
    persons[persons[msg.sender].vote].power-=1;
    persons[msg.sender].vote=candidate;
    persons[persons[msg.sender].vote].power+=1;




}
function can_withdraw() public{
    require(msg.sender==owner);
    for (uint o;o<farmers.length;o++){
        persons[farmers[o]].withdraw=false;
    }
    balance_=address(this).balance;
}
function total_power() public view returns (uint256 ){
    uint256 TotalPower ;
    for (uint j=0;j<activists.length;j++){
        
        TotalPower+=persons[activists[j]].power;
    }
    return TotalPower;
}
function farmers_view()public view returns(string[]memory){
    return farmersn;
}
function declaring_farmer(address pfarmer,uint256 size,string memory name,string memory namee) public{
    require(msg.sender==owner,"only owner can declare a farmer");
    persons[pfarmer].farmer=true;
    persons[pfarmer].activist=false;
    persons[pfarmer].power=1;
    persons[pfarmer].vote=pfarmer;
    persons[pfarmer].withdraw=false;
    persons[pfarmer].weight=1;
    persons[pfarmer].area_size=size;
    persons[pfarmer].area_name=name;
    persons[pfarmer].name=namee;
    
    ta[name]+=size;
    farmers.push(pfarmer);
    farmersn.push(namee);


    
}

function votes(address act) public view returns(uint){
    return persons[act].power;
}
function declaring_activist(address acti) public{
    require(msg.sender==owner||msg.sender==acti);
    uint total=farmers.length;
    require(persons[acti].power>total/uint256(10),"he is not eligible for activist");
    persons[acti].farmer=false;
    persons[acti].activist=true;
    persons[acti].vote=acti;
    activists.push(acti);
}
function decider(address per) public view returns (string memory){
    if (persons[per].farmer){
        return "farmer";
    }
    if (persons[per].activist){
        return "activist";
    }
    return "unknown";
}
function rname(address per) public view returns (string memory){
    return persons[per].name;
}
function RAreaName(address per) public view returns(string memory){
    return persons[per].area_name;
}
function RAreaSize(address per) public view returns(uint){
    return persons[per].area_size;
}
function RDonated(address per) public view returns(uint){
    return persons[per].donated;
}

}