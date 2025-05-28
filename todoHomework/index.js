const todoArr = [];

function welcome() {
  alert('환영합니다 !');
}

function getName() {
    const userName = prompt('이름이 무엇인가요?');
    const nameButton = document.querySelector("#name");

    if (userName) {
        nameButton.textContent = userName + "님의 To Do List";
    } else {
        nameButton.textContent = "이름";
    }
}

function addTodo() {
    const content = document.querySelector("input[name=content]").value;
    const manager = document.querySelector("input[name=manager]").value;
    // content + manager 객체 만들기
    const obj = {
        content: content,
        manager : manager
    };
    // 객체를 배열에 넣기
    todoArr.push(obj);
    console.log(todoArr);
}

function enrollTodo() {
    // 로컬스토리지에 todoArr 저장
    const jsonStr = JSON.stringify(todoArr);
    localStorage.setItem("todo", jsonStr);
}

function selectTodo() {
    const result = localStorage.getItem("todo");
    const arr = JSON.parse(result);     // JSON 형식의 문자열 -> JS객체(또는 배열)에 맞게 변환

    // 화면에서 todo 조회
    for(let obj of arr) {
        const h3tag = document.createElement("h3");
        h3tag.innerText = obj.manager + " : " + obj.content;

        const divTag = document.querySelector("#todo-list");
        divTag.appendChild(h3tag);
    }
}

// 사이드바
function openSide() {
    const asideTag = document.querySelector("aside");
    const overlay = document.querySelector(".overlay");

    asideTag.classList.add("active");
    overlay.classList.add("active");
}

function closeSide() {
    const asideTag = document.querySelector("aside");
    const overlay = document.querySelector(".overlay"); 
    asideTag.classList.remove("active");
    overlay.classList.remove("active");
}

