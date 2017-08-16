<?php

require_once 'Model.php';

class User extends Model
{
  protected static $table = 'users';
}

var_dump(User::getTableName());
 ?>
