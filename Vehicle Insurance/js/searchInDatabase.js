// //Search by id

// function search(){
//     const searchId=document.querySelector("#underWriterId").value ;
//         // Check if searchId is not empty and is a valid number before proceeding
//         if (!searchId || isNaN(searchId)) {
//             alert("Please enter a valid ID");
//             return;
//         }
    
//     underwriters.forEach((items,i)=>{
//       if(searchId===items.id){
//         renderSearchedData(i);
//         return;
//       }
//     });
//   }
  
//   function renderSearchedData(i){
    
    
//      const id=underwriters[i].id;
//      const name=underwriters[i].name;
//      const dob=underwriters[i].dob;
//      const joiningDate=underwriters[i].joiningDate;
//      const defaultPassword=underwriters[i].defaultPassword;
     
  
//       const html = `<div class="firstrow">${id}</div>
//       <div>${name}</div>
//       <div>${dob}</div>
//       <div>${joiningDate}</div>
//       <div>${defaultPassword}</div>`;
  
//     document.querySelector('.js-searchInDatabase').innerHTML=html;
//   }
  
//   renderSearchedData();

// Search by id
function search() {
    const searchId = document.querySelector("#underWriterId").value;


    const foundObject = database.find(obj => obj.id === searchInput);

    if(foundObject){
        console.log(`Name: ${foundObject.name}`);
    }


}

