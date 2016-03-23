package com.roona.annotations;

public class EqualsTest {
public static void main(String[] args) {
	Abc a= new Abc();
	Abc b = new Abc();
	//a.s="alphabet";
	//b.s="alphabet";
	a.i=10;
	b.i=10;
	System.out.println(a.equals(b));
}
}


class Abc{
	
	String s;
	int i;
	
	
	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		
		
		return i;
	}
	
	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return this.hashCode()== obj.hashCode();
	}
	
	/*
	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		
		if(s.equals(((Abc)obj).s)){
			return true;
		}
			
		return super.equals(obj);
	}*/
}
