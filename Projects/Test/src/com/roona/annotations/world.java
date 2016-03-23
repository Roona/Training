package com.roona.annotations;
class shape
{
	void area(int a)
	{
		System.out.println("shape");
	}
}
class circle extends shape
{
	int c;
	int radius;
	
	void circleimpl(int r)
	{
		
		System.out.println("circle");
		c=r*r;
		
		
	}
}
public class world {
	public static void main(String[] args) {
		shape s= new circle();
		s.circleimpl();
		
	}

}
