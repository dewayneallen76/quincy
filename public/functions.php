<?php

function inputHas($key) {
  if(isset($_REQUEST[$key])) {
    return true;
  } else {
    return false;
  }
}

function inputGet($key) {
  if(inputHas($key) == true) {
    return $_REQUEST[$key];
  } else {
    return null;
  }
}

function escape($input) {
  return htmlspecialchars(strip_tags($input));
}
 ?>
