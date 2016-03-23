package com.roona.annotations;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

public class LIstSetExample {
	
	public static void main(String[] args) {
		
		Collection s = new HashSet();
		
		//s.
		
		s.add("a");
		s.add("b");
		s.add("a");
		s.add("c");
		
		
		
		List l = new ArrayList();
		
		//l.ad

		l.add("e");
		l.add("f");
		l.add("g");
		l.add("f");
		
		
		s.addAll(l);
		
		Iterator it = s.iterator();
		
		while(it.hasNext()){
			System.out.println(it.next());
		}
		
		/*for(String st : s){
			System.out.println(st);
		}*/
		
		
	}

}
