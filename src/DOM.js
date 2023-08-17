const structure = document.createElement("div");
structure.classList.add("structure");

const titlewrapper = document.createElement("div");
titlewrapper.classList.add("titlewrapper");

const todowrapper = document.createElement("div");
todowrapper.classList.add("todowrapper");

const title = document.createElement("div");
title.classList.add("title");
title.textContent = "TODO";

export const projects = document.createElement("div");
projects.classList.add("projects");
projects.textContent = "Projects";
export const tasks = document.createElement("div");
tasks.classList.add("tasks");
tasks.textContent = "Tasks";

export const makecoll = document.createElement("button")
export const makecolltext = document.createElement("input")
export const maketodo = document.createElement("button")
export const maketodotext = document.createElement("input")
maketodotext.classList.add('todotext')
export const maketododate = document.createElement("input")
maketododate.type = "date";
maketodo.textContent = "Create Todo"
const linebreak = document.createElement("br")
const linebreak2 = document.createElement("br")
const linebreak3 = document.createElement("br")
const linebreak4 = document.createElement("br")
const linebreak5 = document.createElement("br")




export function newcollection() {
    makecoll.classList.add("addcollection");
    makecolltext.classList.add("collectiontext")
    makecoll.innerText = "Create Collection";
    projects.appendChild(linebreak)
    projects.appendChild(makecolltext)
    projects.appendChild(linebreak2)

    projects.appendChild(makecoll)
}

export function dom() {

    titlewrapper.appendChild(title);
    structure.appendChild(titlewrapper);
    todowrapper.appendChild(projects);
    todowrapper.appendChild(tasks);
    structure.appendChild(todowrapper);
    document.body.appendChild(structure);


}

export function todologiccreate() {
    tasks.appendChild(linebreak3)

    tasks.appendChild(maketodotext)
    tasks.appendChild(linebreak4)
    tasks.appendChild(maketododate)
    tasks.appendChild(linebreak5)
    tasks.appendChild(maketodo)

}
