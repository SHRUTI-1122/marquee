// making 2 input fields, when we click the button it should add an item to the list and we can delete items
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("#addButton");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();

    if (!value1 && !value2) {
        return;
    }

    const li = document.createElement("li");
    li.textContent = value1 && value2 ? `${value1} - ${value2}` : value1 || value2;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    input1.value = "";
    input2.value = "";
    input1.focus();
});


