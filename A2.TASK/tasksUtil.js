const fs = require('fs');
const chalk = require('chalk');

const addTask = function(name, description) {
    // tasks é um array
    const tasks = loadTasks();

    if (tasks.some(e => e.Name === name)) {
        console.log("Task ja existe");
        return;
    }
    
    tasks.push({
        "Name": name,
        "Description": description 
    });

    saveTasks(tasks);
};

const loadTasks = function() {
    try {
        const tasksBuffer = fs.readFileSync('tasks.json');
        return JSON.parse(tasksBuffer.toString());
    } catch {
        return [];
    }
};

const saveTasks = function(tasks) {
    try {
        const string = JSON.stringify(tasks);
        fs.writeFileSync('tasks.json', string);
    } catch {
        console.log("Nao foi possivel escrever o arquivo");
    }
}

const clearTasks = function() {
    saveTasks([]);
}

const removeTask = (name) => {
    const tasks = loadTasks();
    const cleared = tasks.filter(e => e.Name !== name);
    saveTasks(cleared);
}

const findTask = (name) => {
    const tasks = loadTasks();
    const filtered = tasks.filter(e => e.Name === name);
    printTasks(filtered);
}

const listTasks = function() {
    const tasks = loadTasks();
    printTasks(tasks);
}

const printTasks = (tasks)=> {
    tasks.forEach((task) => {
        console.log(chalk.yellow.inverse(task.Name))
        console.log(task.Description + "\n")

    });
}

module.exports = {
    addTask,
    listTasks,
    clearTasks,
    removeTask,
    findTask
};