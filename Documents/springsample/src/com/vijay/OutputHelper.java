package com.vijay;

public class OutputHelper
{
	IOutputGenerator outputGenerator;
	
	public void setOutputGenerator(IOutputGenerator outputGenerator){
		this.outputGenerator = outputGenerator;
	}
	
	public void write(){
		outputGenerator.write();
	}
	
}