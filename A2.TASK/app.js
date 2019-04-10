#!/usr/bin/env node

const tasks = require('./tasksUtil');
const yargs = require('yargs');

const argv = yargs
    .usage('Usage: $0 <command> [options]')
    .command('add <name> <description>', 'add a task', () => {}, (argv) => {
        tasks.addTask(argv.name, argv.description);
    })
    .command('list', 'list tasks', () => {}, (argv) => {
        tasks.listTasks();
    })
    .command('remove <name>', 'remove task by name', () => {}, (argv) => {
        tasks.removeTask(argv.name);
    })
    .command('clear', 'clear tasks', () => {}, (argv) => {
        tasks.clearTasks();
    })
    .command({
        command: 'find',
        describe: 'find a task by name',
        builder: {
            name: {
                describe: 'task name',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            tasks.findTask(argv.name);
        }
    })
    .help()
    .argv;
