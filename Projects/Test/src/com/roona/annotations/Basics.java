package com.roona.annotations;

public class Basics {
	
	
	public static void main(String[] args) {
		DomesticAnimal animal = new Dog();
		//animal.
		
		//Vehicle vh = new Vehicle() ;
	}

}




abstract class Vehicle{
	
//abstract void ride();

String getRegNo(){
	return "abc";
}

}

abstract interface Animal{
	
public static final boolean hasTail = true;
	
public abstract String  sound();



}



class Dog implements DomesticAnimal{

	@Override
	public String sound() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String funct() {
		// TODO Auto-generated method stub
		return null;
	}
	

}






interface WildAnimal extends Animal{
	

	
public abstract String  attack();

}

interface DomesticAnimal extends Animal{
	

	
public abstract String  funct();

}