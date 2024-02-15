// 유저가 값을 입력한다
// + 버튼을 누르면, 할일이 추가됨
// delete 버튼을 누르면 할일 삭제
// check 누르면 true로 선언 밑줄이 쳐진다
// 진행중 끝남 탭을 누르면, 언더바가 이동
// 끝남탭은, 끝난 아니템만, 진행중탭은 진행중인것만 나오게
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let task = document.getElementById("task");
let taskList = [];
let notDoneButton = document.getElementById("not-done-button");
let allButton = document.getElementById("All-button");
let doneButton = document.getElementById("done-button");
let resultHTML = "";
let doneToggle = false;
let notDoneToggle = false;
let underLine = document.getElementById("under-line");
addButton.addEventListener("click", addTask);
notDoneButton.addEventListener("click", notDoneToggleButton);
allButton.addEventListener("click", allToggleButton);
doneButton.addEventListener("click", doneToggleButton);

function addTask() {
  let task = {
    taskContent: taskInput.value,
    isComplete: false,
    id: uniqueIdGenerator(),
  };
  taskList.push(task);
  console.log(taskList);
  allToggleButton();
  render();
}

function uniqueIdGenerator() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function render() {
  resultHTML = "";
  for (i = 0; i < taskList.length; i++) {
    if (doneToggle == false && notDoneToggle == false) {
      if (taskList[i].isComplete == true) {
        resultHTML += `<div class="task" id="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${taskList[i].id}')">check</button>
              <button onclick="toggleDelete('${taskList[i].id}')" >Delete</button>
            </div>
            </div>`;
      } else {
        resultHTML += `<div class="task" id="task">
        <div>${taskList[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">check</button>
          <button onclick="toggleDelete('${taskList[i].id}')">Delete</button>
        </div>
        </div>`;
      }
    } else if (doneToggle == true && notDoneToggle == false) {
      if (taskList[i].isComplete == true) {
        resultHTML += `<div class="task" id="task">
                      <div class="task-done">${taskList[i].taskContent}</div>
                      <div>
                        <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                        <button onclick="toggleDelete('${taskList[i].id}')" >Delete</button>
                      </div>
                      </div>`;
      }
    } else if (doneToggle == false && notDoneToggle == true) {
      if (taskList[i].isComplete == false) {
        resultHTML += `<div class="task" id="task">
              <div>${taskList[i].taskContent}</div>
              <div>
                <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                <button onclick="toggleDelete('${taskList[i].id}')">Delete</button>
              </div>
              </div>`;
      }
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      render();
      break;
    }
  }
}

function toggleDelete(id) {
  for (i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      render();
      break;
    }
  }
}

function notDoneToggleButton() {
  doneToggle = false;
  notDoneToggle = true;
  render();
  underLine.style.left = "60px";
  underLine.style.width = "75px";
}

function allToggleButton() {
  doneToggle = false;
  notDoneToggle = false;
  render();
  underLine.style.left = "0px";
  underLine.style.width = "50px";
}

function doneToggleButton() {
  doneToggle = true;
  notDoneToggle = false;
  render();
  underLine.style.left = "160px";
  underLine.style.width = "50px";
}
