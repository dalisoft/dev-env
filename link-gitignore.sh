#!/bin/sh

pwd_cache=$(pwd);

ignore=$(cat .gitignore -p)

for pkg in $(ls frontend); do
  echo "\Linking 'frontend/$pkg'...\n\n"
  # npm audit
  echo "$ignore" >> "$pwd_cache/frontend/$pkg/.gitignore"
  done

for pkg in $(ls backend); do
  echo "\Linking 'backend/$pkg'...\n\n"
  # npm audit
  echo "$ignore" >> "$pwd_cache/backend/$pkg/.gitignore"
  done
