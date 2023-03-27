"use strict";

window.addEventListener("load", () => {
  const form = document.querySelector("#taskForm");
  const input = document.querySelector("#taskInput");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskValue = input.value;
    if (!taskValue) {
      alert("Please fill out the task");
      return;
    } else {
      console.log("sucess");
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_el_content = document.createElement("div");
    task_el_content.classList.add("content");

    task_el.appendChild(task_el_content);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.value = taskValue;
    task_input_el.setAttribute("readonly", "readonly");
    task_el_content.appendChild(task_input_el);

    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");

    const task_edit_btn = document.createElement("button");
    task_edit_btn.classList.add("edit");
    task_edit_btn.innerText = "Edit";

    const task_delete_btn = document.createElement("button");
    task_delete_btn.classList.add("delete");
    task_delete_btn.innerText = "Delete";

    task_action_el.appendChild(task_edit_btn);
    task_action_el.appendChild(task_delete_btn);

    task_el.appendChild(task_action_el);

    list_el.appendChild(task_el);

    input.value = "";
    task_edit_btn.addEventListener("click", () => {
      if (task_edit_btn.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_btn.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_btn.innerText = "Edit";
      }
    });

    task_delete_btn.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
