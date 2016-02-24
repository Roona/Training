package com.roona.annotations;

public class InitializationOrder extends  InitializationOrderSuper{
	String name;
	{
		name="iblockname1";
		System.out.println(name);
		}
	static
	{
		
		//name="iblockname";
		System.out.println("static block 1");
		}
	
	
	
	public InitializationOrder() {
		System.out.println("constructor");
		name="cname";
		System.out.println(name);
	} 
	{
	name="iblockname";
	System.out.println(name);
	}
	
	static
	{
		
		//name="iblockname";
		System.out.println("static block");
		}
	
	
	
public static void main(String[] args) {
	
	new InitializationOrder();
	
}
	

}

class InitializationOrderSuper {
	String name;
	{
		name="super iblock1";
		System.out.println(name);
		}
	static
	{
		
		//name="iblockname";
		System.out.println("super static block 1 ");
		}
	
	
	
	public InitializationOrderSuper() {
		System.out.println("super constructor");
		name="super cname";
		System.out.println(name);
	} 
	{
	name="super iblockname 2";
	System.out.println(name);
	}
	
	static
	{
		
		//name="iblockname";
		System.out.println("super static block 2");
		}
	

}


// static  -> all parents , last child
// super class instance
// super  constructor
// child class instance 
// child constructor

