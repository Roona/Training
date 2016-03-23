package com.roona.annotations;
class shape
{
	void circleimpl()
	{
		System.out.println("shape");
	}
}
class circle extends shape
{
	void circleimpl()
	{
		System.out.println("circle");
	}
}
public class world {
	public static void main(String[] args) {
		shape s= new circle();
	}

}
