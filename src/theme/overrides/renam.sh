#! /bin/bash
# Rename all *.txt to *.js
for file in *.js; do
    mv -- "$file" "${file%.*}.ts"
done