// function validateForm() {
//     let x = document.forms['Contact']['name'].value;
//     if (x == '')    {
//         alert('name must be filled out');
//         return false;
//     }
// }

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }