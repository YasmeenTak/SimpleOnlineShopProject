var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["category"] = document.getElementById("category").value;
    formData["description"] = document.getElementById("description").value;
    formData["location"] = document.getElementById("location").value;
    formData["name"]=document.getElementById("name").value;
    formData["phoneNum"]=document.getElementById("phoneNum").value;
    formData["contactBy"]=document.getElementById("contactBy").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("diplayList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.category;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.location;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.name;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.phoneNum;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.contactBy;


    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    document.getElementById("location").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phoneNum").value = "";
    document.getElementById("contactBy").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("category").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("location").value = selectedRow.cells[3].innerHTML;
    document.getElementById("name").value = selectedRow.cells[4].innerHTML;
    document.getElementById("phoneNum").value = selectedRow.cells[5].innerHTML;
    document.getElementById("contactBy").value = selectedRow.cells[6].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.category;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.location;
    selectedRow.cells[4].innerHTML = formData.name;
    selectedRow.cells[5].innerHTML = formData.phoneNum;
    selectedRow.cells[6].innerHTML = formData.contactBy;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("diplayList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("title").value == "") {
        isValid = false;
        document.getElementById("titleValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("titleValidationError").classList.contains("hide"))
            document.getElementById("titleValidationError").classList.add("hide");
    }
    return isValid;
}

//to choese just one choice
$("input:checkbox").on('click', function() {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});