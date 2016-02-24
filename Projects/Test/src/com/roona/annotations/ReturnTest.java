package com.roona.annotations;

public class ReturnTest {
	
	 static int test1()
	{
		 
		 
			int result = 0;	 
		int i=10;
		if(i % 2 == 0){
			result= 2;
		}
		else
		{
			result= 1;
		}
		System.out.println("unreacable code");
	return result;
		
	}
	

}
