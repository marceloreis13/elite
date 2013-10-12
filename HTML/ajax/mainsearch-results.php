<?php

   /* ---------------------------------------------------- *
    * PHP file used for the main search                    *    
	* ---------------------------------------------------- *
	* Before you can use the live search you must create a * 
	* database and use the table below or create your own  * 
	* table. After you have created a table change the     *
	* 'Connect settings' & 'Database settings'. This file  *
	* searches in the title and content columns. If you    *
	* want to change the output of the layout go to the    *
    * 'Output' at the bottom of this file and change the   * 
	* output.                                              *
	*                                                      *
	* The MYSQL file used for this file can befound in     *
	* the same folder as this php file.                    *
	*                                                      * 
	* Tested with PHP 5.3.0 & mysql 5.1.36                 *
	* ---------------------------------------------------- */
	
   /* ---------------------------------------------------- *
    * Connect settings                                     *
    * ---------------------------------------------------- *
	* Add your host, username and password.                *
	* ---------------------------------------------------- */
	
	$host     = ''; // host
	$user     = ''; // username
	$password = ''; // password
	
   /* ---------------------------------------------------- *
    * Database settings                                    *
    * ---------------------------------------------------- *
	* Add your database name, table name in which you      *
	* want to search and the column that you want to       *
	* search in.                                           *
	* ---------------------------------------------------- */
	
	$dbname    = ''; // database name
	$dbtable   = 'search';       // database table name
	$dbcolumn1 = 'title';        // search in column?
	$dbcolumn2 = 'content';      // search in column?
	
   /* ---------------------------------------------------- *
    * Misc settings                                        *
    * ---------------------------------------------------- *
	* These settings are some savety settings and some     *
	* text labels.                                         *
	* ---------------------------------------------------- */
	
	$searchresults   = 'Search results';       // search results text
	$noresultsfound  = 'No results found!';    // no results found text
	$readmore        = 'Read more';            // read more text
	$advancedsearch  = 'Advanced search';      // advanced search text
	$maxresults      = 100;                    // maxium of results
	$exitlink        = 'search.html';          // exit link

   /* ---------------------------------------------------- *
    * Connect to the database                              *
    * ---------------------------------------------------- *
	* Create a connection to the MYSQL database. The       * 
	* settings can be found in the 'Connect settings'      * 
	* setion at the top.                                   *
	* ---------------------------------------------------- */
	
	mysql_connect($host, $user, $password) or die(mysql_error());

   /* ---------------------------------------------------- *
    * Select the right databse                             *
    * ---------------------------------------------------- *
	* Connect to the MYSQL database.                       *
	* ---------------------------------------------------- */
	
	mysql_select_db($dbname) or die(mysql_error());
	
   /* ---------------------------------------------------- *
    * jQuery plugin values and settings                    *
    * ---------------------------------------------------- *
	* This is where the values and settings are set as php *
	* variables. You can use up to 5 extra parameters,     *
	* which you can use as filters.                        *
	* ---------------------------------------------------- */
	
	$searchword = $_POST['value'];
	$order      = $_POST['order'];
	$limit      = $_POST['limit'];
	// not used for this file
	// $param1     = $_POST['param1'];
	// $param2     = $_POST['param2'];
	// $param3     = $_POST['param3'];
	// $param4     = $_POST['param4'];
	// $param5     = $_POST['param5'];
	// $param6     = $_POST['param6'];
	// $param7     = $_POST['param7'];
	// $param8     = $_POST['param8'];
	// $param9     = $_POST['param9'];
	// $param10    = $_POST['param10'];	
	
   /* ---------------------------------------------------- *
    * Display order                                        *
    * ---------------------------------------------------- *
	* Check and set the order, you can choose between,     *
	* ASC, DESC and random. Notice that it uses the column *
	* 'date' for the DESC and ASC order.                   *
	* ---------------------------------------------------- */
	
	$order = strtoupper($order);
	if($order == 'DESC'){
		$orderby = "date DESC";
	}elseif($order == 'ASC'){
		$orderby = 'date ASC';
	}else{
		$orderby = 'rand()';
	}
	
   /* ---------------------------------------------------- *
    * Max results                                          *
    * ---------------------------------------------------- *
	* This is used as a savety filter, to prevent wrong    *
	* use of the plugin. The max has been set on 100, you  *
	* can change this in the 'Misc settings'.            *
	* ---------------------------------------------------- */
	
	if($limit <= $maxresults){
		$totalresults = $limit;
	}else{
		$totalresults = $maxresults;
	}
	
   /* ---------------------------------------------------- *
    * Database query                                       *
    * ---------------------------------------------------- *
	* Get all of the data from the database and put it in  * 
	* a array.                                             *
	* ---------------------------------------------------- */
	
	$query = mysql_query("SELECT *
	                      FROM ".$dbtable." 
						  WHERE ".$dbcolumn1." 
						  LIKE '%$searchword%' 
						  OR ".$dbcolumn2 ."
						  LIKE '%$searchword%' 
						  ORDER BY $orderby
						  LIMIT ".$totalresults) or die(mysql_error());
						  
   /* ---------------------------------------------------- *
    * Output                                               *
    * ---------------------------------------------------- *
	* Get all found data from the database and wrap it in  * 
	* html tags.                                           *
	* ---------------------------------------------------- */
	
	echo '<div id="mainsearch-results" class="clearfix">';
	echo '<span></span>';
	echo '<h3>'.$searchresults.'<span class="close-search"></span></h3>';
	echo '<div id="mainsearch-ajax" class="clearfix">';
	
		if (mysql_num_rows($query) > 0){

			// loop all results
			while($results = mysql_fetch_array($query)){
				// available values
				// $results['id'];
				// $results['title'];
				// $results['sum'];
				// $results['content'];
				// $results['author'];
				// $results['category'];
				// $results['url'];
				// $results['thumb'];
				// $results['date'];
				
				echo '<div>';
				echo '<h4>'.$results['title'].'</h4>';
				echo '<p>'.$results['sum'].'</p>';
				echo '<a href="'.$results['url'].'">'.$readmore.'</a>';
				echo '</div>';
	
			}
		}else{
			echo '<div><p>'.$noresultsfound.'</p></div>';
		}

	echo '</div>';
	echo '<a href="'.$exitlink.'">'.$advancedsearch.'</a>';
	echo '</div>';		
?>
