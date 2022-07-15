function EnregistrerFour(btn){
    nomFour=document.querySelector("#nomFour").value;
    prenomFour=document.querySelector("#prenomFour").value;
    emailFour=document.querySelector("#emailFour").value;
    photoFour=document.querySelector("#photoFour").value;
    telFour=document.querySelector("#telFour").value;
    adrFour=document.querySelector("#adrFour").value;
    btn.innerHTML="Patientez..."
    let messageFour=document.querySelector("#messageFour");
    if(nomFour==""){
        messageFour.innnerHTML="veuillez saisir le nom du fournisseur";
    }else if(prenomFour==""){
        messageFour.innerHTML="veuillez saisir le prénom du fournisseur";
    }else if(emailFour==""){
        messageFour.innerHTML="veuillez saisir l'email du fournisseur";
    }else if(photoFour==""){
        messageFour.innerHTML="veuillez choisir une image";
    }else if(telFour==""){
        messageFour.innerHTML="veuillez saisir le numéro du fournisseur";
    }else if(adrFour==""){
        messageFour.innerHTML="veuillez saisir l'adresse du fournisseur";
    }else{
        messageFour.innerHTML="Le fournisseur a été ajouté avec succèss";
    }
    var Fournisseur={
        nomFour,
        prenomFour,
        emailFour,
        photoFour,
        telFour,adrFour
    }
    
    db.collection("Fournisseurs").add(Fournisseur).then(()=>{
        document.querySelector("#nomFour").value=""
        document.querySelector("#prenomFour").value=""
        document.querySelector("#emailFour").value=""
        document.querySelector("#photoFour").value=""
        document.querySelector("#telFour").value=""
        document.querySelector("#adrFour").value=""
        location.href="listeFournisseur.html"
    }).catch((error)=>{
        console.log(error)
    })
}
function FourDel(id){
    db.collection("Fournisseurs").doc(id).delete().then(()=>{
        alert(" fournisseur supprimé avec succès");
    }).catch((error)=>{
        console.log(error);
    })
}