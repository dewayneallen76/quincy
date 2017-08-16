<?php

require_once 'User.php';

class Model
{
  protected static $table = 'database name';

  private $attributes = [];

  public function __get($name) {
    if(array_key_exists($name, $this->attributes)) {
      return $this->attributes[$name];
    }
    return null;
  }

  public function __set($name, $value) {
    $this->attributes[$name] = $value;
  }

  public static function getTableName()
  {
    return static::$table;
  }
}


 ?>
