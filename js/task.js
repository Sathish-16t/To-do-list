function backhome() {
  window.location.href = "home.html";
}

let taskName = document.getElementById("task");
let start = document.getElementById("start");
let end = document.getElementById("end");
let repeat = document.getElementById("repeat");

let tasks = JSON.parse(localStorage.getItem("taskss")) || [];
function addTask() {
  let startTxt = start.options[start.selectedIndex].text;
  let endTxt = end.options[end.selectedIndex].text;
  let repeatTxt = repeat.options[repeat.selectedIndex].text;
  if (
    taskName.value.trim() !== "" &&
    startTxt !== "" &&
    endTxt !== "" &&
    repeatTxt !== ""
  ) {
    let task = {
      name: taskName.value.trim(),
      start: startTxt,
      end: endTxt,
      repeat: repeatTxt,
    };
    tasks.push(task);
    taskName.value = "";
    alert("task added");
  }
  console.log(tasks);
  console.log(startTxt, endTxt, repeatTxt);

  localStorage.setItem("taskss", JSON.stringify(tasks));
}
