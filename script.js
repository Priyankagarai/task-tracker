
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = task.name;
        if (task.completed) text.classList.add("completed");

        const status = document.createElement("span");
        status.classList.add("status");
        status.textContent = task.completed ? "Completed" : "Pending";
        status.classList.add(task.completed ? "done" : "pending");

        const btn = document.createElement("button");
        btn.textContent = task.completed ? "Undo" : "Done";
        btn.onclick = () => toggleTask(index);

        li.appendChild(text);
        li.appendChild(status);
        li.appendChild(btn);

        list.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      const taskName = input.value.trim();

      if (taskName === "") {
        alert("Please enter a task!");
        return;
      }

      tasks.push({
        name: taskName,
        completed: false
      });

      input.value = "";
      saveTasks();
      renderTasks();
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    }

    renderTasks();
  










// to add a task
const addEntry=function(){
const val= taskInp.value;
let items=document.createTextNode(val);
let li=document.createElement('li');
li.appendChild(items);
lst.appendChild(li);
taskInp.value="";
}

btn.addEventListener('click',addEntry);

