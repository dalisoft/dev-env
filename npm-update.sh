#!/bin/sh

pwd_cache=$(pwd);

for pkg in $(ls frontend); do
  echo "\nUpdating 'frontend/$pkg'...\n\n"
  cd "$pwd_cache/frontend/$pkg"
  # npm audit
  npm outdated
  npm update
  done

cd "$pwd_cache";

for pkg in $(ls backend); do
  echo "\nUpdating 'backend/$pkg'...\n\n"
  cd "$pwd_cache/backend/$pkg"
  # npm audit
  npm outdated
  npm update
  done

cd "$pwd_cache";
