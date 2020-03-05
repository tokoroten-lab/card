'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const tokorotenColor = '#E6C5952'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Tokoroten'),
  handle: chalk.white('tokoroten-lab'),
  work: chalk.white('A university student learning about computers'),
  university: chalk.white('Shizuoka University'),
  gmail: 'tokoroten.lab' + chalk.redBright('@gmail.com'),
  web: chalk.cyan('https://') + 'tokoroten-lab' + chalk.cyan('.github.io'),
  github: chalk.cyan('https://github.com/') + 'tokoroten-lab',
  twitter: chalk.cyan('https://twitter.com/') + 'tokoroten-lab',
  qiita: chalk.cyan('https://qiita.com/') + 'tokoroten-lab',
  hatena: chalk.cyan('https://') + 'tokoroten-lab' + chalk.cyan('.hatenablog.com'),
  slideshare: chalk.cyan('https://www.slideshare.net/') + 'TenTokoro',
  npx: chalk.green('npx') + ' ' + 'tokoroten-lab',
  labelWork: chalk.white.bold('      Work:'),
  labelUniversity: chalk.white.bold('University:'),
  labelGmail: chalk.white.bold('     Gmail:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelQiita: chalk.white.bold('     Qiita:'),
  labelHatena: chalk.white.bold('    Hatena:'),
  labelSlideShare: chalk.white.bold('SlideShare:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const university = `${data.labelUniversity}  ${data.university}`
const gmail = `${data.labelGmail}  ${data.gmail}`
const web = `${data.labelWeb}  ${data.web}`
const github = `${data.labelGitHub}  ${data.github}`
const twitter = `${data.labelTwitter}  ${data.twitter}`
const qiita = `${data.labelQiita}  ${data.qiita}`
const hatena = `${data.labelHatena}  ${data.hatena}`
const command = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading +
               newline + newline +
               working + newline +
               university + newline + newline +
               gmail + newline + newline +
               web + newline +
               github + newline +
               twitter + newline + 
               qiita + newline + 
               hatena + newline + 
               newline + command

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.hex(tokorotenColor)(boxen(output, options)))
