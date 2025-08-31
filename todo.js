let toDoList = JSON.parse(localStorage.getItem("todoList")) || [];
      function addToDo() {
        let inputElement = document.querySelector(".todo-input");
        let inputDate = document.querySelector(".todo-date");
        let toDoWork = inputElement.value;
        let todoDate = inputDate.value;
        if (toDoWork=== "" || todoDate === "") {
          alert("enter details");
        } else {
          toDoList.push({ task: toDoWork, date: todoDate });
          let localData=JSON.stringify(toDoList);
          localStorage.setItem("todoList", JSON.stringify(toDoList));
          displayItems();
          inputElement.value = "";
          inputDate.value = "";
        }
      }
      function displayItems() {
        let containerElement = document.querySelector(".todo-container");
        let newHtml = "";
        for (let i = 0; i < toDoList.length; i++) {
          newHtml += `
          <span>${toDoList[i].task}</span>
          <span>${toDoList[i].date}</span>
          <button class="delete-btn" onclick="toDoList.splice(${i},1);
          localStorage.setItem('todoList', JSON.stringify(toDoList));
          displayItems()" >Delete</button>
          `;
        }

        containerElement.innerHTML = newHtml;
      }
      displayItems();