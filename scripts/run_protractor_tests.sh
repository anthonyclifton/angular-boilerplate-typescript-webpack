#!/bin/bash

echo "Compiling tests into Javascript"

tsc

protractor test/e2e/protractor.conf.js
