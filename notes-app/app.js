const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

// customizing yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'New Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body for the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argV) {
        console.log('Title: ' +argV.title);
        console.log('Body: ' +argV.body);
        notes.addNotes(argV.title, argV.body);
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing a note');
    }
});

//create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function () {
        console.log('listing all notes');
    }
});

//create read command
yargs.command({
    command: 'read',
    describe: 'reading all notes',
    handler: function () {
        console.log('reading all notes');
    }
});
//console.log(yargs.argv);
yargs.parse();



