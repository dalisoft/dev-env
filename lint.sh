#!/bin/sh

pwd_cache=$(pwd);

echo "Linting...";

for pkg in $(ls frontend); do
  cd "$pwd_cache/frontend/$pkg"
  npm run lint
  done

echo "Linting done";

cd "$pwd_cache";
