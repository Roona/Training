package com.roona.annotations;

import java.util.ArrayList;
import java.util.List;

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
	
	/*
	public static String humanReadableByteCount(long bytes) {
	 boolean si = false;
	    int unit = si ? 1000 : 1024;
	    if (bytes < unit) return bytes + " B";
	    int exp = (int) (Math.log(bytes) / Math.log(unit));
	    String pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp-1) + (si ? "" : "i");
	    return String.format("%.1f %sB", bytes / Math.pow(unit, exp), pre);
	}*/
	
	
public static void main(String[] args) {
	
	//new InitializationOrder();
	
	 /* Total number of processors or cores available to the JVM */
	  System.out.println("Available processors (cores): " + 
	  Runtime.getRuntime().availableProcessors());
	  
	  String s = "abc";
	  
	  s = "vji";
	  
	  s = s.replaceAll("i", "k");
	  
	  System.out.println(s);
	  
	  System.out.println(s);
	  
	  
	  
	  /* Total memory currently in use by the JVM */
	  System.out.println("Total memory (bytes): " + 
			  humanReadableByteCount(Runtime.getRuntime().totalMemory()));

	  /* Total amount of free memory available to the JVM */
	  System.out.println("Free memory (bytes): " + 
			  humanReadableByteCount(Runtime.getRuntime().freeMemory()));
	  
	  
	  List<String> lst = new ArrayList<String>();
	  
	  
	  for(int i =0; i<10; i++){
		  lst.add(Math.random()+" : "+Math.random());
	  }
	  
	  
	  /* Total amount of free memory available to the JVM */
	  System.out.println("Free memory (bytes): " + 
			  humanReadableByteCount(Runtime.getRuntime().freeMemory()));

	  /* This will return Long.MAX_VALUE if there is no preset limit */
	  long maxMemory = Runtime.getRuntime().maxMemory();
	  /* Maximum amount of memory the JVM will attempt to use */
	  System.out.println("Maximum memory (bytes): " + 
	  (maxMemory == Long.MAX_VALUE ? "no limit" : humanReadableByteCount(maxMemory)));

	  /* Total memory currently in use by the JVM */
	  System.out.println("Total memory (bytes): " + 
			  humanReadableByteCount(Runtime.getRuntime().totalMemory()));

	/*   Get a list of all filesystem roots on this system 
	  File[] roots = File.listRoots();

	   For each filesystem root, print some info 
	  for (File root : roots) {
	    System.out.println("File system root: " + root.getAbsolutePath());
	    System.out.println("Total space (bytes): " + root.getTotalSpace());
	    System.out.println("Free space (bytes): " + root.getFreeSpace());
	    System.out.println("Usable space (bytes): " + root.getUsableSpace());
	  }*/
	
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

