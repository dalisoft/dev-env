#!/bin/sh

pwd_cache=$(pwd);

echo "Testing...";

for pkg in $(ls frontend); do
  cd "$pwd_cache/frontend/$pkg"
  set -e
  npm run test

  if [ $? -ne 0 ]; then
  echo "Error while testing frontend/$pkg"
  exit $?

fi
  done

echo "Testing done";

cd "$pwd_cache";
