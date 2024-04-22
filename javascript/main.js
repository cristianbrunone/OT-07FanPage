
function validafaleConosco(){
	if (document.frmfaleconosco.txtnome.value==""){
		alert("Preencha o campo nome.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}
	
	if (document.frmfaleconosco.txtfone.value==""){
		alert("Preencha o campo telefone.");
		document.frmfaleconosco.txtfone.focus();
		return false;
	}
	
	if (document.frmfaleconosco.txtemail.value==""){
		alert("Preencha o campo e-mail.");
		document.frmfaleconosco.txtemail.focus();
		return false;
	}

}



