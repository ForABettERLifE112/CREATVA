// let f_name = document.getElementById("f_name");
// let s_name = document.getElementById("s_name");
// let email = document.getElementById("email");
// let pass = document.getElementById("pass");
// let submit = document.getElementById("submit");
// let table = document.getElementById("table");
// let search = document.getElementById("search");
// let input_search = document.getElementById("input_search");



// localStorage.clear
// // create database
// let app ;
// if(localStorage.persons !=null){
//     app = JSON.parse(localStorage.persons)
// }
// else{
//     app = [];
// };

// submit.onclick =function(){
//     if(f_name.value !=''){
//     let newpersons = {
//         firstName: f_name.value,
//         lastName: s_name.value,
//         email: email.value,
//         password: pass.value
//     };
//     app.push(newpersons);
//     localStorage.persons = JSON.stringify(app);
//     show_data()
// }else{
//     window.alert
//     ("Please fill out all fields");
// }
// };


// // show data
// let valuee = '';
// function show_data(){
//  for(i=0 ; i<app.length ; i++){
//         valuee +=`
//   <tr>
// <th>name</th>
// <th>prodect</th>
// <th>email</th>
// <th>addres</th>
//         </tr>
// <tr>
//     <td>${app[i].firstName}</td>
//     <td>${app[i].lastName}</td>
//     <td>${app[i].email}</td>
//     <td>${app[i].password}</td>
// </tr>
// `
// table.innerHTML = valuee;

// };};


// // clear local storage
//  let clear = document.getElementById('clear');
//  clear.onclick = function(){
//      localStorage.clear();
//      table.innerHTML = `  <tr>
// <th>name</th>
// <th>prodect</th>
// <th>email</th>
// <th>addres</th>
//         </tr>`;
//  }
//  show_data();



// create data base
let f_name = document.getElementById("f_name");
let s_name = document.getElementById("s_name");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let submit = document.getElementById("submit");
let go = document.getElementById("go");

let app ;
if(localStorage.persons != null){
    app = JSON.parse(localStorage.persons)
}else{
    app = [];
};

submit.onclick =function(){
if(f_name.value != '' && email.value != '' && pass.value !=''){
    let newpersons ={
        fname:f_name.value,
        sname:s_name.value,
        eemail:email.value,
        passs: pass.value
    }
    app.push(newpersons);
    localStorage.persons = JSON.stringify(app);
  go.style.display="block"
    // show_data()
    show_lsat_data()
}else{
    window.alert("Please fill out all fields");
}

}


// clear
let clear = document.getElementById("clear");

clear.onclick = function(){
    localStorage.clear();
    go.style.display="none"
    
}


// show_lsat_data()
let ttt = '';
function show_lsat_data(){
 for(i=app.length-1  ; i<app.length ; i++){
        ttt +=`
  <tr>
<th>name</th>
<th>prodect</th>
<th>email</th>
<th>addres</th>
        </tr>
<tr>
    <td>${app[i].fname}</td>
    <td>${app[i].sname}</td>
    <td>${app[i].eemail}</td>
    <td>${app[i].passs}</td>
    <td><button onclick="deletee(${i})">Delete</button></td>
</tr>
`
table.innerHTML = ttt;

};};





// delete
function deletee(i){
    app.splice(i,1);
    localStorage.persons = JSON.stringify(app)
    // show_data()

    let v = '';
    for(i=0 ; i<app.length ; i++){
        v +=`
  <tr>
<th>name</th>
<th>prodect</th>
<th>email</th>
<th>addres</th>
        </tr>
<tr>
    <td>${app[i].fname}</td>
    <td>${app[i].sname}</td>
    <td>${app[i].eemail}</td>
    <td>${app[i].passs}</td>
    <td><button onclick="deletee(${i})">Delete</button></td>
</tr>
`
table.innerHTML = v;
};};


// SHOW all DATA
let valuee = '';
function show_data(){
 for(i=0 ; i<app.length ; i++){
        valuee +=`
  <tr>
<th>name</th>
<th>prodect</th>
<th>email</th>
<th>addres</th>
        </tr>
<tr>
    <td>${app[i].fname}</td>
    <td>${app[i].sname}</td>
    <td>${app[i].eemail}</td>
    <td>${app[i].passs}</td>
    <td><button onclick="deletee(${i})">Delete</button></td>
</tr>
`
table.innerHTML = valuee;

};};
