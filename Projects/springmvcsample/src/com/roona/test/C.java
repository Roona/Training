package com.roona.test;


class D {
	D(){
		System.out.println("D");
	}
}
 class A extends D
{
	A(){
		System.out.println(" A const this this ");
	}
	A(String txt){
	this();
		System.out.println(" A const "+txt);
		//this();
		
	}
	 
public String str = "Hello A";

 void printString() {
 System.out.println("I am A");
 }
}

class B extends A
{
	
	B(){
		super("vj");
		System.out.println("B const");
	}
	
	
 private  String str = "Hello B";

 void printString() {
	// super("vj");
 System.out.println("I am B");
 System.out.println(this.str);
 }
}

public class C
{
 public static void main(String[] args) 
 {
 A a = new B();
  a.printString();
  System.out.println(a.str);
 }
}