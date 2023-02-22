let Name = document.getElementById('name');
let Surname = document.getElementById('surname');
const Display = document.getElementById('output');

function Focus_Name() {
  Name.style.backgroundColor = "yellow";
 
}

function Blur_Name() {
  Name.style.backgroundColor = "white";
  
}

function Focus_Surname() {
  Surname.style.backgroundColor = "yellow";
}

function Blur_Surname() {
  Surname.style.backgroundColor = "white";
}
function submit() {
  let text_name = document.getElementById('name').value;
  let text_surname = document.getElementById('surname').value;
  let text_date = document.getElementById('datee').value;
  let text_menu = document.getElementById('menu').value;
  let emptyname = "Insert Name";
  let emptysurname = "Insert Surname";
  let emptybirthdate = "Insert Birth date";
  let emptymenu = "Select language";

  if (text_name == "" && text_surname == "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptysurname + "<br>" + emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }
  else if (text_name != "" && text_surname == "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptysurname + "<br>" + emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }
  else if (text_name != "" && text_surname != "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }
  else if (text_name != "" && text_surname != "" && text_date != "" && text_menu == "-- Select --") {
    Display.innerHTML = emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname != "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname == "" && text_date != "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptysurname + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname == "" && text_date == "" && text_menu != "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptysurname + "<br>" + emptybirthdate;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname == "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptysurname + "<br>" + emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name != "" && text_surname == "" && text_date != "" && text_menu != "-- Select --") {
    Display.innerHTML = emptysurname;
    Display.style.color = "red";
  }

  else if (text_name != "" && text_surname != "" && text_date == "" && text_menu != "-- Select --") {
    Display.innerHTML = emptybirthdate;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname != "" && text_date != "" && text_menu != "-- Select --") {
    Display.innerHTML = emptyname;
    Display.style.color = "red";
  }

  else if (text_name != "" && text_surname == "" && text_date != "" && text_menu == "-- Select --") {
    Display.innerHTML = emptysurname + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname == "" && text_date != "" && text_menu != "-- Select --") {
    Display.innerHTML = emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name != "" && text_surname == "" && text_date == "" && text_menu != "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname != "" && text_date != "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptymenu;
    Display.style.color = "red";
  }
  console.log(text_name);
  console.log(text_surname);
  console.log(text_date);
  console.log(text_menu);
}

function submitt() {
  let text_name = document.getElementById('name').value;
  let text_surname = document.getElementById('surname').value;
  let text_date = document.getElementById('datee').value;
  let text_menu = document.getElementById('menu').value;
  if (text_name != "" && text_surname != "" && text_date != "" && text_menu != "-- Select --") {
    Display.innerText = text_name + "," + text_surname + "," + text_date + "," + text_menu;
    Display.style.color = "green";
  }
}
function start()
{
 //อ่าน body
 var body = document.getElementsByTagName( "body" )[0];
 // สร้าง <table> และ <tbody>
 var tbl = document.createElement( "table" );
 var tblBody = document.createElement( "tbody" );
 // 2 แถว 2 คอลัมน์
 for( var j = 0 ; j < 2 ; j++ )
 {
  // สร้าง row
  var row = document.createElement( "tr" );
  // สร้าง col
  for( var i = 0 ; i < 2 ; i++ )
  {
   // สร้าง td
   var cell = document.createElement( "td" );
   var cellText = document.createTextNode( "แถว " + j + ", คอลัมน์ " + i );
   cell.appendChild( cellText );
   row.appendChild( cell );
  };
  // แทรกแถว ลงใน tbody
  tblBody.appendChild( row );
 };
 // ใส่ <tbody> ลงใน <table>
 tbl.appendChild( tblBody );
 // ใส่ <table> ลงใน <body>
 body.appendChild( tbl );
 // กำหนด border
 tbl.setAttribute( "border" , "1" );
}