<?php

class Input
{
    /**
     * Check if a given value was passed in the request
     *
     * @param string $key index to look for in request
     * @return boolean whether value exists in $_POST or $_GET
     */
    public static function has($key)
    {
        // TODO: Fill in this function
        return isset($_REQUEST[$key]);

    }

    /**
     * Get a requested value from either $_POST or $_GET
     *
     * @param string $key index to look for in index
     * @param mixed $default default value to return if key not found
     * @return mixed value passed in request
     */
    public static function get($key, $default = null)
    {
        // TODO: Fill in this function
        if(self::has($key)) {
          return $_REQUEST[$key];
        } else {
          return $default;
        }
    }

    public static function getNumeric($key, $default = 0)
    {
      $value = self::get($key, $default);

      if(!is_numeric($value)) {
        return "must be numeric";
      }
      return $value;
    }

    public static function getString($key)
    {
      $input = self::get($key);
      if(!is_numeric($input)) {
        throw new Exception("Must be a number");
      } else if (empty($input)) {
        throw new Exception("Cannot be input");
      }
      return $input;
    }

    public static function getNumber($key)
    {
      $input = self::get($key);
      if(gettype($input) != 'string') {
        throw new Exception("Must be a string");
      } else if(empty($input)) {
        throw new Exception("Cannot be empty");
      }
      return $input;
    }

    ///////////////////////////////////////////////////////////////////////////
    //                      DO NOT EDIT ANYTHING BELOW!!                     //
    // The Input class should not ever be instantiated, so we prevent the    //
    // constructor method from being called. We will be covering private     //
    // later in the curriculum.                                              //
    ///////////////////////////////////////////////////////////////////////////
    private function __construct() {}
}
