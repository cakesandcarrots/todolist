let project = [];
const { format } = require('date-fns');


function createcollection(collectionname) {
    const collection =
    {
        name: collectionname,
        todo: []
    }
    project.push(collection);
}

function createtodo(collectionname, title, priority, due_date, description) {
    const preMadeCollection = project.find(collection => collection.name === collectionname)
    due_date = format(new Date(due_date), "yyyy-MM-dd")
    console.log(due_date);
    const values = {
        title: title,
        priority: priority,
        due_date: due_date,
        description: description,
    }
    preMadeCollection.todo.push(values);
}

