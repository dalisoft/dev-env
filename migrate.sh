#!/bin/sh

pwd_cache=$(pwd);

for pkg in $(ls repos); do
  git subtree add -P packages/$pkg repos/$pkg master
  done
