export default function dom() {
    const structure = document.createElement("div");
    structure.classList.add("structure");

    const titlewrapper = document.createElement("div");
    titlewrapper.classList.add("titlewrapper");

    const todowrapper = document.createElement("div");
    todowrapper.classList.add("todowrapper");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "TODO";

    const projects = document.createElement("div");
    projects.classList.add("projects");
    projects.textContent = "Projects";
    const tasks = document.createElement("div");
    tasks.classList.add("tasks");
    tasks.textContent = "Tasks";

    titlewrapper.appendChild(title);
    structure.appendChild(titlewrapper);
    todowrapper.appendChild(projects);
    todowrapper.appendChild(tasks);
    structure.appendChild(todowrapper);
    document.body.appendChild(structure);

}