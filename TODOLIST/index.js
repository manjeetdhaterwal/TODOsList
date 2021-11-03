function addItem() {
    // fetching values
    tilte = document.getElementById("title").value;
    des = document.getElementById("description").value;

    console.log(tilte, des)

    // adding on localdisk
    if (localStorage.getItem('itemsJSON') == null) {
        itemsArray = []
        itemsArray.push([tilte, des])
        localStorage.setItem('itemsJSON', JSON.stringify(itemsArray))
    }
    else {
        itemsStr = localStorage.getItem('itemsJSON')
        itemsArray = JSON.parse(itemsStr)
        itemsArray.push([tilte, des])
        localStorage.setItem('itemsJSON', JSON.stringify(itemsArray))
    }
    update();

}

function deleteItem(itemindex)
{
    itemsStr = localStorage.getItem('itemsJSON')
    itemsArray = JSON.parse(itemsStr)
    itemsArray.splice(itemindex, 1)
    localStorage.setItem('itemsJSON', JSON.stringify(itemsArray))
    update();
}

function clearAll()
{
    if(confirm("Are you Sure"))
    {
        localStorage.clear();
        update();
    }
}

function update() {
    // populate table
    if (localStorage.getItem('itemsJSON') == null) {
        itemsArray = []
    }
    else {
        itemsStr = localStorage.getItem('itemsJSON')
        itemsArray = JSON.parse(itemsStr)
    }

    let tableBody = document.getElementById("tableBody")
    let str = ""
    itemsArray.forEach((element, index) => {
        str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = str;

}





let addItemBtn = document.getElementById("additem");
addItemBtn.addEventListener('click', addItem)
update();
