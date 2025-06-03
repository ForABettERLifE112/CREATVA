// let button = document.getElementsByTagName("button");
// let table = document.getElementsByTagName("table");
// let h2 = document.getElementsByTagName("h2");


// let store ;

// if(localStorage.store_bin !=null){
//     app = JSON.parse(localStorage.store_bin)
// } else{
//         app = [];
//     };

//     // create table
// button.onclick =function(){
//     if(f_name.value !=''){
//     let store_bin = {
//         H2: h2.value,
//     };
//     app.push(store_bin);
//     localStorage.persons = JSON.stringify(store);

// }else{
//     window.alert
//     ("Please fill out all fields");
// }
// };


let add1 = document.getElementById("b1");
let name1 = document.getElementById("bb1").innerText;
let price1 = 20 ;

let add2 = document.getElementById("b2");
let name2 = document.getElementById("bb2").innerText;
let price2 = 50 ;

let add3 = document.getElementById("b3");
let name3 = document.getElementById("bb3").innerText;
let price3 = 70 ;

let add4 = document.getElementById("b4");
let name4 = document.getElementById("bb4").innerText;
let price4 = 90 ;

let add5 = document.getElementById("b5");
let name5 = document.getElementById("bb5").innerText;
let price5 = 200 ;

let add6 = document.getElementById("b6");
let name6 = document.getElementById("bb6").innerText;
let price6 = 20 ;

let add7 = document.getElementById("b7");
let name7 = document.getElementById("bb7").innerText;
let price7 = 20 ;

let add8 = document.getElementById("b8");
let name8 = document.getElementById("bb8").innerText;
let price8 = 20 ;

let add9 = document.getElementById("b9");
let name9 = document.getElementById("bb9").innerText;
let price9 = 20 ;

let add10 = document.getElementById("b10");
let name10 = document.getElementById("bb10").innerText;
let price10 = 20 ;

let add11 = document.getElementById("b11");
let name11 = document.getElementById("bb11").innerText;
let price11 = 20 ;

let add12 = document.getElementById("b12");
let name12 = document.getElementById("bb12").innerText;
let price12 = 20 ;

let bien = document.getElementById("bien");


// لعمل function جواه  for loop  بيطبع لي كل الالعاب

// let erd = [name1, price1,name10, price5];
// // console.log(erd);
// let i = -2 ;
// let l = -1 ;
// function show(){

//     for ( i; i < erd.length;i++){
//             i+=2
//             l+=2
//         for (i ; ;) {
//             console.log(erd[i]);
//             for(l ;  ; ){
//                 console.log(erd[l]);
//                 break;

//             }
//                 break;
// };
// break
// }; 
// }




let store ;

if(localStorage.store_bin !=null){
    store = JSON.parse(localStorage.store_bin)
} else{
        store = [];
    };

    // create table
add1.onclick = function(){
    let ben = {
        name:name1,
        price:price1,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}
add2.onclick = function(){
    let ben = {
        name:name2,
        price:price2,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add3.onclick = function(){
    let ben = {
        name:name3,
        price:price3,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add4.onclick = function(){
    let ben = {
        name:name4,
        price:price4,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add5.onclick = function(){
    let ben = {
        name:name5,
        price:price5,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add6.onclick = function(){
    let ben = {
        name:name6,
        price:price1,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add7.onclick = function(){
    let ben = {
        name:name7,
        price:price1,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add8.onclick = function(){
    let ben = {
        name:name8,
        price:price1,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add9.onclick = function(){
    let ben = {
        name:name9,
        price:price1,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add10.onclick = function(){
    let ben = {
        name:name10,
        price:price1,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add11.onclick = function(){
    let ben = {
        name:name11,
        price:price1,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000
add12.onclick = function(){
    let ben = {
        name:name12,
        price:price1,
    };
    store.push(ben);
    localStorage.store_bin = JSON.stringify(store);
    show_lsat_data()
}



// 00000000000000000000







// clear
// let clear = document.getElementById("clear");

//  function cleear(){
//     localStorage.clear();
    
// }

// cleear()

// show_lsat_data()
let ttt = '';
function show_lsat_data(){
 for(i=store.length-1  ; i<store.length ; i++){
        ttt +=`<tr>
      <tr>
<th>Game Name</th>
<th>Prise</th>
        </tr>
<tr>
    <td>${store[i].name}</td>
    <td>${store[i].price}</td>
</tr>
`
bien.innerHTML = ttt;

};};


// show all data

// let valueee = '';
// function show_data(){
//  for(i=0 ; i<store.length ; i++){
//         ttt +=`<tr>
//       <tr>
// <th>Game Name</th>
// <th>Prise</th>
//         </tr>
// <tr>
//     <td>${store[i].name}</td>
//     <td>${store[i].price}</td>
// </tr>
// `
// bien.innerHTML = valueee;

// };};
// show_data()


