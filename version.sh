#!/bin/zsh
currentver="5.0.1"
requiredver="5.0.2"
minVersion=$(printf '%s\n' "$requiredver" "$currentver" | sort -V | head -n1)
 if [ "$minVersion" = "$requiredver" ]; then 
        echo "Greater than or equal to ${requiredver}"
 else
        echo "Less than ${requiredver}"
 fi