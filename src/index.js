import { format } from 'date-fns';
import { projects, tasks, maketodotext, dom, newcollection, makecoll, makecolltext, maketodo, todologiccreate, maketododate } from './DOM.js';
let project = [];
let selectedcollection;

//creates a collection
function createcollection() {
    let collectionname = ""
    {
        if (makecolltext.value) {
            collectionname = makecolltext.value
            makecolltext.value = ""
        }

        const collection =
        {
            name: collectionname,
            todo: []
        }

        if (collectionname)
            project.push(collection);
        // this logic ensures that the past values of the array aren't being shown.
        while (projects.firstChild.nextSibling) {
            projects.removeChild(projects.firstChild.nextSibling);
        }
    }
    collectiondisplay()
}



//displays the collection
function collectiondisplay() {
    project.forEach(function (collection) {
        let coll = document.createElement("div")
        coll.classList.add("Collections")
        coll.addEventListener('click', function (event) {
            selectedcollection = event.target.textContent
            tododisplay(selectedcollection)
        })
        coll.textContent = collection.name
        projects.appendChild(coll)
    })

    //this function has to be called in order to make the collection display work
    // tododisplay()
    newcollection();
}



//creates todo
function createtodo(collectionname) {
    console.log("hello")
    const title = maketodotext.value
    maketodotext.value = ""
    const preMadeCollection = project.find(collection => collection.name === collectionname)
    const due_date = format(new Date(maketododate.value), "yyyy-MM-dd")
    const values = {
        title: title,
        due_date: due_date,
    }
    preMadeCollection.todo.push(values);
    console.log(preMadeCollection.todo.length)
    tododisplay(selectedcollection)

}



//to display all todo
function tododisplay(selectedcollection) {
    while (tasks.firstChild.nextSibling) {
        tasks.removeChild(tasks.firstChild.nextSibling);
    }
    const temp = selectedcollection
    let collections = document.querySelectorAll(".Collections")
    //event listeners are added, whenever they are clicked the following happens
    selectedcollection = project.find(function (collection) {
        return collection.name === selectedcollection
    })
    console.log(selectedcollection)
    selectedcollection.todo.forEach(function (values) {
        const todoelement = document.createElement("div")
        todoelement.textContent = values.title;
        const tododate = document.createElement("div")
        tododate.textContent = values.due_date
        todoelement.appendChild(tododate)
        tasks.appendChild(todoelement)
    })
    selectedcollection = temp
    //input stuff
    todologiccreate()




}



dom();
makecoll.addEventListener('click', createcollection)
maketodo.addEventListener('click', function (event) {
    createtodo(selectedcollection)

})
collectiondisplay();
