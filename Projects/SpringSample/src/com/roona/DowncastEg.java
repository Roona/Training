package com.roona;

public class DowncastEg {
	
	public static void main(String[] args) {
		
		Animal animal=new Cat();
		//animal.sound();
		if(animal  instanceof Cat)
		{
		Cat cat= (Cat) animal;
		cat.sound();
		}
		else
		{
			System.out.println("error");
		}
	}

}
class Animal
{
	String name="animal";
	void sound()
	{
		System.out.println("Animal sound");
	}
	
}
class Dog extends Animal
{
	String name="dog";
	void sound()
	{
		System.out.println("dog sound");
	}
}
class Cat extends Animal
{
	String name="cat";
	void sound()
	{
		System.out.println("cat sound");
	}
}