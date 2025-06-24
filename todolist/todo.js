let prompt = require('prompt-sync')();

let toDoAppRunning = true;

let ToDos = [];

while(toDoAppRunning){
    console.log('ToDo App');
    console.log('1. View List');
    console.log('2. Add Task');
    console.log('3. Remove Task');
    console.log('4. Quit');
    let choice = prompt('Choose an option: ');

    switch(choice){
        case '1':
            viewList();
            break;
        case '2':
            addTask();
            break;
        case '3':
            if (ToDos.length === 0) {
                console.log('No Task to be removed');
                break;
            }
            removeTask();
            break;
        case '4':
            toDoAppRunning = false;
            break;
        default:
            console.log('Invalid choice');

    }
}

function viewList(){
    if(ToDos.length === 0){
        console.log('No ToDos yet!');
    } else {
    console.log('Your ToDos: ');
    for(let i = 0; i < ToDos.length; i++){
        console.log(`${i + 1}. ${ToDos[i]}`); //template literals 
        }
    }
}
function addTask(){
    let ToDo = prompt('Please provide ToDo: ');
    ToDos.push(ToDo);
}
function removeTask(){
    viewList();
    if(ToDos.length > 0){
        let ToDo = prompt('Provide number of toDo to remove: ');
        if (ToDos.length > ToDo - 1){
            ToDos.splice(ToDo - 1, 1);
        } else {
            console.log("ToDo of such number doesn't exist");
        }
    } else {
        console.log('No ToDos yet!');
    }
}