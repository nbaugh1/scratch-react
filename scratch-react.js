#! /usr/bin/env node

'use strict';

const appName = process.argv[2];
const { spawnSync } = require('child_process');
const url = 'git@github.com:nbaugh1/scratch-react.git';

spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
spawnSync('npm', ['install', '--prefix', `${process.cwd()}/${appName}`]);

console.log('Your app has been successfully installed');
console.log(`$ cd ${appName}`);
console.log('$ npm start');