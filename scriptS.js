var selectedRow = null
var cont = "";
//console.log(document.getElementById("photos"))
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
    formData["title1"] = document.getElementById("title").value;
    formData["category"] = document.getElementById("category").value;
    formData["description"] = document.getElementById("description").value;
    formData["photos"]=document.getElementById("photos").value;
    formData["price"]=document.getElementById("price").value;
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
    cell1.innerHTML = data.title1;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.category;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = img;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.price;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.location;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.name;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.phoneNum;

   //  cell9 = newRow.insertCell(8);
   //    $('.radio').click(function() {
   // console.log("hi")
   // if($('.radio').is(':checked')) {
   //  cont = $('#1').val();}
   //  });
   //    cell9.innerHTML = data.cont;


    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    // document.getElementById("photos").value = "";
    document.getElementById("price").value = "";
    document.getElementById("location").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phoneNum").value = "";
    // document.getElementById("contactBy").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("category").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
   // document.getElementById("photos"). = selectedRow.cells[3].innerHTML;
    //console.log(document.getElementById("photos"));
    img[0].attributes[1].nodeValue=selectedRow.cells[3].innerHTML;
    document.getElementById("price").value = selectedRow.cells[4].innerHTML;
    document.getElementById("location").value = selectedRow.cells[5].innerHTML;
    document.getElementById("name").value = selectedRow.cells[6].innerHTML;
    document.getElementById("phoneNum").value = selectedRow.cells[7].innerHTML;
    // document.getElementById("contactBy").value = selectedRow.cells[8].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.category;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.photos;
    selectedRow.cells[4].innerHTML = formData.price;
    selectedRow.cells[5].innerHTML = formData.location;
    selectedRow.cells[6].innerHTML = formData.name;
    selectedRow.cells[7].innerHTML = formData.phoneNum;
    // selectedRow.cells[8].innerHTML = formData.contactBy;
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
 


 var img = $('<img id="blah" src="#" alt="your image"/>');
// var img = $('#select .selected img').attr('src');

//show upload image in html
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // $('#blah')
                //     .attr('src', e.target.result)
                //     .width(150)
                //     .height(200);
                console.log(e);
                img[0].attributes[1].nodeValue=e.target.result;
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    console.log(img);


 


