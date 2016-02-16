/**
 * 
 */
package com.roona.hibernateworkflow;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Collection;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 * @author blossoms
 *
 */

public class ManageWorkflowTest {

	/**
	 * @param args
	 */
	 private Collection collection;

	    @BeforeClass
	    public static void oneTimeSetUp() {
	        // one-time initialization code   
	    	System.out.println("@BeforeClass - oneTimeSetUp");
	    }

	    @AfterClass
	    public static void oneTimeTearDown() {
	        // one-time cleanup code
	    	System.out.println("@AfterClass - oneTimeTearDown");
	    }

	    @Before
	    public void setUp() {
	        collection = new ArrayList();
	        System.out.println("@Before - setUp");
	    }

	    @After
	    public void tearDown() {
	        collection.clear();
	        System.out.println("@After - tearDown");
	    }

	 /*   @Test
	    public void testEmptyCollection() {
	    	 collection.add("itemA");
	        assertTrue(collection.isEmpty());
	        
	       // assert
	        
	        System.out.println("@Test - testEmptyCollection");
	    }*/
	    @Test
	    public void testAddUser()
	    {
	    	ManageUsers MW = new ManageUsers();
			/* Add few employee records in database */
			Integer uID1 = MW.addUser("Zara", 331, "zara", 331);
			assertEquals(13,uID1.intValue());
	    }
	 /*   @Test
	    public void testOneItemCollection() {
	        collection.add("itemA");
	        collection.add("itemB");
	        
	        assertEquals(1, collection.size());
	        System.out.println("@Test - testOneItemCollection");
	    }*/
	}
	
	
