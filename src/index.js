import { format } from 'date-fns';
import { projects, tasks, maketodotext, dom, newcollection, makecoll, makecolltext, maketodo, todologiccreate, maketododate } from './DOM.js';
let project = [];

dom();
todologiccreate()

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
        const coll = document.createElement("div")
        coll.classList.add("Collections")
        coll.textContent = collection.name
        projects.appendChild(coll)
    })

    //this function has to be called in order to make the collection display work
    // tododisplay()
    newcollection();
}



//creates todo
function createtodo() {
    const collectionname = "Music";
    const title = maketodotext.value
    maketodotext.textContent = ""
    const preMadeCollection = project.find(collection => collection.name === collectionname)
    const due_date = format(new Date(maketododate.value), "yyyy-MM-dd")
    const values = {
        title: title,
        due_date: due_date,
    }
    preMadeCollection.todo.push(values);
    tododisplay()
}



//to display all todo
function tododisplay() {
    let selectedcollection;
    let collections = document.querySelectorAll(".Collections")
    console.log(collections)
    collections.forEach(function (collection) {
        collection.addEventListener("click", function (event) {
            selectedcollection = event.target.textContent;
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
                todologiccreate()

            })


        })
    })


}



makecoll.addEventListener('click', createcollection)
maketodo.addEventListener('click', createtodo)
collectiondisplay();
