function AjoutEmp(btn){
    nomEmp=document.querySelector("#nomEmp").value;
    CapEmp=parseFloat(document.querySelector('#CapEmp').value);

   
    let messagEmp=document.querySelector('#messagEmp');
    if(nomEmp==""){
        messagEmp.innerHTML="veuillez saisir le nom de l'emplacement";
        return;
    }

    if(isNaN(CapEmp)){
        messagEmp.innerHTML="veuillez saisir la capacité minimale";
        return;
    }
    messagEmp.innerHTML="";

    var Emplacement={
        nomEmp,
        CapEmp
    }
    
    if(ID_EMP==null){
         db.collection("Emplacements").add(Emplacement).then(()=>{
        btn.innerHTML="Enregistrement..";
        location.href="listEmplacement.html";
    }).catch((error)=>{
        console.log(error)
    })
    }else{
        db.collection("Emplacements").doc(ID_EMP).update(Emplacement).then(()=>{
            location.href="listEmplacement.html";
        })
    }
  
}
function DeletEmp(id){
    db.collection("Emplacements").doc(id).delete().then(()=>{
        alert("cet emplacement à été supprimer avec succes");
    }).catch((error)=>{
        console.log(error);
    });
}
function AjouterEmp(id){
    location.href="ajoutEmplacement.html?id="+id;
    
}