function AjoutCat(btn){
   const text=btn.innerHTML;
   
   nomCat=document.querySelector('#nomCat').value;
   catValue=document.getElementById('catValue').value;   
   var categorie={
      nomCat,
      catValue
   }
   if(nomCat==""){
      message.innerHTML="veuillez saisir le nom de la categorie";
   }else{
      message.innerHTML="Enregistrement reussi";
   }
   if(text=="Modifier"){
      //modification va se passer ici
      btn.innerHTML="Patientez...";
      db.collection("categories").doc(ID_DOC).update(categorie).then(()=>{
         location.href="listCategorie.html"
      })
      return;
   }
   var message=document.getElementById('message');
   db.collection("categories")
   .add(categorie)
   .then(()=>{
      btn.innerHTML="patientez..."
      document.querySelector("#nomCat").value="";
      document.querySelector("#catValue").value="On";
      location.href="listCategorie.html";
   })
   .catch((error)=>{
      console.error(error);
   });
}
function EditerCat(id){
   location.href="ajoutCategorie.html?id="+id;
}
function DeleteCat(id){
   
   db.collection("categories").doc(id).delete().then(()=>{
      console.log("bien");
   }).catch((error)=>{
      console.log(error);
   });
  
}



