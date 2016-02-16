package com.roona;

public class IocExample {

}
class Employee{  
Address address;  
Employee(){  
address=new Address();  
}  
}  
class Employee1{  
Iaddress address;  
Employee1(Iaddress address){ 
	
	this.address=address;
//address=new Address();  
}  

public static void main(String[] args) {
	
	
	//Iaddress address = new Address();  
	
	Iaddress address = new TempAddress();
	
	Employee1 e1= new Employee1(address);
	
}


}  

interface Iaddress
{
	}


class Address implements Iaddress
{
	String city;
	int postcode;
}

class TempAddress implements Iaddress
{
	String street;
	int houseno;
}