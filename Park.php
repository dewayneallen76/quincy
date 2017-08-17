<?php

// require_once 'ModelPark.php';
/**
 * A Class for interacting with the national_parks database table
 *
 * contains static methods for retrieving records from the database
 * contains an instance method for persisting a record to the database
 *
 * Usage Examples
 *
 * Retrieve a list of parks and display some values for each record
 *
 *      $parks = Park::all();
 *      foreach($parks as $park) {
 *          echo $park->id . PHP_EOL;
 *          echo $park->name . PHP_EOL;
 *          echo $park->description . PHP_EOL;
 *          echo $park->areaInAcres . PHP_EOL;
 *      }
 *
 * Inserting a new record into the database
 *
 *      $park = new Park();
 *      $park->name = 'Acadia';
 *      $park->location = 'Maine';
 *      $park->areaInAcres = 48995.91;
 *      $park->dateEstablished = '1919-02-26';
 *
 *      $park->insert();
 *
 */
class Park
{

    ///////////////////////////////////
    // Static Methods and Properties //
    ///////////////////////////////////

    /**
     * our connection to the database
     */
    public static $dbc = null;

    public static $table = 'national_parks';

    /**
     * establish a database connection if we do not have one
     */
    public static function dbConnect() {
        require 'db_connect.php';

        if (! is_null(self::$dbc)) {
            return;
        }
        self::$dbc = $dbc;
    }

    /**
     * returns the number of records in the database
     */
    public static function count() {
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to query the database for the
        //       number of existing park records

        self::dbConnect();
        $stmt = self::$dbc->query("SELECT COUNT(*) FROM national_parks");
        $count = $stmt->fetch(PDO::FETCH_NUM);

        return $count[0];
    }

    /**
     * returns all the records
     */
    public static function all() {
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to query the database for all the
        //       records in the parks table
        // TODO: iterate over the results array and transform each associative
        //       array into a Park object
        // TODO: return an array of Park objects

        self::dbConnect();

        $select = "SELECT * FROM national_parks";
        $stmt = self::$dbc->query($select);

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $parks = [];
        foreach($results as $result) {
          $park = new Park();
          $park->id = $result['id'];
          $park->name = $result['name'];
          $park->location = $result['location'];
          $park->areaInAcres = $result['area_in_acres'];
          $park->dateEstablished = $result['date_established'];
          $park->description = $result['description'];

          $parks[] = $park;
        }
      return $parks;
    }

    /**
     * returns $resultsPerPage number of results for the given page number
     */
    public static function paginate($pageNo, $resultsPerPage = 4) {
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: calculate the limit and offset needed based on the passed
        //       values
        // TODO: use the $dbc static property to query the database with the
        //       calculated limit and offset
        // TODO: return an array of the found Park objects

      self::dbConnect();
      $limit = $resultsPerPage;
      $offset = ($pageNo * $resultsPerPage) - $resultsPerPage;

      $paginateQuery = "SELECT * FROM national_parks ORDER BY name LIMIT :limit OFFSET :offset";

      $preparedStmt = self::$dbc->prepare($paginateQuery);

      $preparedStmt->bindValue(":limit", (int) $limit, PDO::PARAM_INT);
      $preparedStmt->bindValue(":offset", (int) $offset, PDO::PARAM_INT);

      $preparedStmt->execute();

      return $preparedStmt->fetchAll(PDO::FETCH_OBJ);

    }

    /////////////////////////////////////
    // Instance Methods and Properties //
    /////////////////////////////////////

    /**
     * properties that represent columns from the database
     */
    public $id;
    public $name;
    public $location;
    public $dateEstablished;
    public $areaInAcres;
    public $description;

    /**
     * inserts a record into the database
     */
    public function insert() {
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to create a perpared statement for
        //       inserting a record into the parks table
        // TODO: use the $this keyword to bind the values from this object to
        //       the prepared statement
        // TODO: excute the statement and set the $id property of this object to
        //       the newly created id

      self::dbConnect();

      $insertQuery = "INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (:name, :location, :date_established, :area_in_acres, :description)";

      $stmt = self::$dbc->prepare($insertQuery);

      $stmt->bindValue(":name", $this->name, PDO::PARAM_STR);
      $stmt->bindValue(":location", $this->location, PDO::PARAM_STR);
      $stmt->bindValue(":date_established", $this->date_established, PDO::PARAM_STR);
      $stmt->bindValue(":area_in_acres", $this->area_in_acres, PDO::PARAM_STR);
      $stmt->bindValue(":description", $this->description, PDO::PARAM_STR);

      $stmt->execute();

      $this->id = self::$dbc->lastInsertId();
    }

    public static function find($id)
    {
      self::dbConnect();
      $query = "SELECT * FROM " . static::$table . "WHERE id = :id";
      $stmt = self::$dbc->prepare($query);

      $stmt->bindValue(':id', $id, PDO::PARAM_INT);
      $stmt->execute();

      $result = $stmt->fetch(PDO::FETCH_ASSOC);

      $park = new Park($result);

      return $park;
    }

    protected function update()
    {
      self::dbConnect();

      $update = "UPDATE " . static::$table . " SET
        name = :name,
        location = :location,
        area_in_acres = :area_in_acres,
        date_established = :date_established,
        description = :description
        WHERE id = :id";

      $stmt = self::$dbc->prepare($update);

      $stmt->bindValue(":name", $this->name, PDO::PARAM_STR);
      $stmt->bindValue(":location", $this->location, PDO::PARAM_STR);
      $stmt->bindValue(":date_established", $this->date_established, PDO::PARAM_STR);
      $stmt->bindValue(":area_in_acres", $this->area_in_acres, PDO::PARAM_STR);
      $stmt->bindValue(":description", $this->description, PDO::PARAM_STR);
      $stmt->bindValue(":id", $this->id, PDO::PARAM_INT);

      $stmt->execute();

    }

}
