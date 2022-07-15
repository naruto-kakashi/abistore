 async function  EnregistrerUsers(btn){

   /*const email_user="foganbidi@gmail.com";
   db.collection("utilisateurs").where("emailUsers","==",email_user)
   .get().then(function(snap){
     snap.docs.map(function(doc){
        console.log(doc.data())
     })
   })
   const snap=await db.collection("utilisateurs").where("emailUsers","==",email_user).get();
   snap.docs.map(function(doc){
      console.log(doc.data())
   })
   return;*/
 nomUsers=document.querySelector('#nomUsers').value;
 prenomUsers=document.querySelector('#prenomUsers').value;
 emailUsers=document.querySelector('#emailUsers').value;
 photoUsers=document.querySelector('#photoUsers');

 telUsers=parseInt(document.querySelector('#telUsers').value);
 passwordUsers=document.querySelector('#passwordUsers').value;
 roleUsers=document.querySelector('#roleUsers').value;
//  btn.setAttribute=("disabled","disabled");

messageUsers=document.querySelector('.messageUsers');
messageUsers.style.color="red";

if((nomUsers=="")&&(prenomUsers=="")&&(emailUsers=="")&&(photoUsers=="")&&(telUsers=="")&&(passwordUsers=="")&&(roleUsers=="")){
   messageUsers.innerHTML="veuillez saisir tous les champs";
   return;
   }else if(nomUsers==""){
      messageUsers.innerHTML="veuillez saisir le nom";
      return;
   }else if(prenomUsers==""){
      messageUsers.innerHTML="veuillez saisir le prénom";
      return;
   }else if(emailUsers==""){
      messageUsers.innerHTML="veuillez saisir l'email";
      return;
   }else if(photoUsers==""){
      messageUsers.innerHTML="veuillez choisir une photo";
      return;
   }else if(telUsers==""){
      messageUsers.innerHTML="veuillez saisir le numéro";
      return;
   }else if(passwordUsers==""){
      messageUsers.innerHTML="veuillez saisir le mot de passe";
      return;
   }else if(roleUsers==""){
      messageUsers.innerHTML="veuillez sélectionner le role";
      return;
   }else{
      messageUsers.innerHTML="l'utilisateur à été ajouté avec success";
      messageUsers.style.color="blue"
   }

 
 const photo=photoUsers.files[0];
 const photo_name=photo.name;
 console.log(photo_name)
 
 var url="";

 const ref=storage.ref("images/"+photo_name);
 await ref.put(photo);
 url=await ref.getDownloadURL();

 var users={
   nomUsers,
   prenomUsers,
   emailUsers,
   photoUsers:url,
   telUsers,
   passwordUsers,
   roleUsers
}
 //console.log(photoUsers.files[0]);


 
 btn.innerHTML="veuillez patientez...";
 db.collection("utilisateurs").add(users).then(()=>{
   
   document.querySelector('#nomUsers').value=""
   document.querySelector('#prenomUsers').value=""
   document.querySelector('#emailUsers').value=""
   document.querySelector('#photoUsers').value=""
   document.querySelector('#telUsers').value=""
   document.querySelector('#passwordUsers').value=""
   document.querySelector('#roleUsers').value="Admin"
   btn.innerHTML="Enregisterz";
 }).catch((error)=>{
   console.log(error)
 });

}
