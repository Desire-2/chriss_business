/*function formValidation(){
	if (Number(document.frmMain.provinceId.value) == 0 || Number(document.frmMain.districtId.value) == 0 ||
		Number(document.frmMain.sectorId.value) == 0 || Number(document.frmMain.cellId.value) == 0 ||
		Number(document.frmMain.villageId.value) == 0){
	    alert("Full announce location address is required! (Province, District, Sector, Cell, Village)");
	    return false;
	}
	return true;
}
*/


// Update Preferences function
function onUpdatePreferences() {
	var frm = $('#preferenceForm');
	$('#preferenceInfo').html("");
	$('#preferenceInfo').html("<div class=\"form-group\">"+
                                                "<label class=\"col-md-2 control-label\">&nbsp;</label>"+
                                                "<div class=\"col-md-8 alert alert-danger\">"+
                                                      "<label style=\"color:red;\">"+  
                                                       	"<i class=\"fa fa-ban fa-fw\"></i> <img src='/assets/front-end/images/Im_loading.gif' alt='loading...'>"+
                                                      "</label>"+
                                                "</div>"+
                                            "</div></div>");	
    frm.submit(function (e) {
        e.preventDefault();
        //$(this).find(':submit').attr('disabled','disabled');
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            dataType: "json",
            success: function (response) {
            	 //var data = $.parseJSON(response);
                //console.log('Submission was successful.');
                 //console.log(response);
                //console.log(data);
            	if (response.status == "success") {
	                $('#preferenceInfo').html("<div class=\"form-group alert-dismissable\">"+
	                                                "<label class=\"col-md-2 control-label\">&nbsp;</label>"+
	                                                "<div class=\"col-md-8 alert alert-success alert-dismissable\">"+
	                                                      "<label style=\"color:green;\">"+  
	                                                       	"<i class=\"fa fa-check-circle fa-fw\"></i> "+response.responseMessage+""+
	                                                      "</label>"+
	                                                "</div>"+
	                                            "</div></div>");
            	} else {
            		$('#preferenceInfo').html("<div class=\"form-group\">"+
                                                "<label class=\"col-md-2 control-label\">&nbsp;</label>"+
                                                "<div class=\"col-md-8 alert alert-danger\">"+
                                                      "<label style=\"color:red;\">"+   
					                                   	"<i class=\"fa fa-times-circle fa-fw\"></i> "+response.responseMessage+""+
					                                  "</label>"+
					                            "</div>"+
					                        "</div></div>");
            	}
            },
            error : function(xhr,status,err) {
				//alert("response err :"+JSON.stringify(err));
			 	//code always ends up here, with the err giving no error message at all!
			 	//alert('Error: '+err+'; Status: '+status+'; xhr: '+xhr.status);   
			 	console.log('Error: '+err+'; Status: '+status+'; xhr: '+xhr.status);          
			},
        });
        e.preventDefault(); //STOP default action
    	frm.unbind(); //unbind. to stop multiple form submit.
    });
}

// Update Password function
function onUpdatePassword() {
	var frm = $('#passwordForm');
	$('#passwordInfo').html("");
	
	if ($("input[name=memberOldPass]").val() !='' && 
			$("input[name=memberPass]").val() !='' &&
			$("input[name=reMemberPass]").val() !=''){
		$('#passwordInfo').html("<div class=\"form-group\">"+
	                                                "<label class=\"col-md-2 control-label\">&nbsp;</label>"+
	                                                "<div class=\"col-md-8 alert alert-danger\">"+
	                                                      "<label style=\"color:red;\">"+  
	                                                       	"<i class=\"fa fa-ban fa-fw\"></i> <img src='/assets/front-end/images/Im_loading.gif' alt='loading...'"+
	                                                      "</label>"+
	                                                "</div>"+
	                                            "</div></div>");	
	}
	
    frm.submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            dataType: "json",
            success: function (response) {  
                if (response.status == "success") {
	                $('#passwordInfo').html("<div class=\"form-group alert-dismissable\">"+
	                                                "<label class=\"col-md-2 control-label\">&nbsp;</label>"+
	                                                "<div class=\"col-md-8 alert alert-success alert-dismissable\">"+
	                                                      "<label style=\"color:green;\">"+  
	                                                       	"<i class=\"fa fa-check-circle fa-fw\"></i> "+response.responseMessage+""+
	                                                      "</label>"+
	                                                "</div>"+
	                                            "</div></div>" +
	                                            "<script>");
            	} else {
            		$('#passwordInfo').html("<div class=\"form-group\">"+
                                                "<label class=\"col-md-2 control-label\">&nbsp;</label>"+
                                                "<div class=\"col-md-8 alert alert-danger\">"+
                                                      "<label style=\"color:red;\">"+   
					                                   	"<i class=\"fa fa-times-circle fa-fw\"></i> "+response.responseMessage+""+
					                                  "</label>"+
					                            "</div>"+
					                        "</div></div>");
            	}
                // Reset the input fields
			    $("input[name=memberOldPass]").val(""); 
			    $("input[name=memberPass]").val(""); 
			    $("input[name=reMemberPass]").val("");  
			    
			    $("input[name=memberOldPass]").removeAttr("style"); 
			    $("input[name=memberPass]").removeAttr("style"); 
			    $("input[name=reMemberPass]").removeAttr("style"); 
			    
			    $("input[name="+response.fieldName+"]").attr("style", "border-color: red"); 
			    
			    if (response.status == "success") {
			    	$('#passwordConfirmInfo').html("");
	                $('#passwordConfirmInfo').html("<script>" + 	
							                    	"alert(\""+response.responseMessage+"\");" +
							                    	"window.location.href = \"/user/logout\"" +
												"</script> ");
			    }
            },
            error : function(xhr,status,err) {
			 	//code always ends up here, with the err giving no error message at all!
			 	//alert('Error: '+err+'; Status: '+status+'; xhr: '+xhr.status);   
			 	console.log('Error: '+err+'; Status: '+status+'; xhr: '+xhr.status);               
			},
        });
        e.preventDefault(); //STOP default action
    	frm.unbind(); //unbind. to stop multiple form submit.
    });
}

// Update Profile function
function onUpdateProfile() {
	var frm = $('#profileForm');
	$('#profileInfo').html("");
	
	if ($("input[name=memberLastName]").val() !='' && 
			$("input[name=memberFirstName]").val() !='' &&
			$("input[name=memberPhone]").val() !=''){
		$('#profileInfo').html("<div class=\"form-group\">"+
	                                                "<label class=\"col-md-2 control-label\">&nbsp;</label>"+
	                                                "<div class=\"col-md-8 alert alert-danger\">"+
	                                                      "<label style=\"color:red;\">"+  
	                                                       	"<i class=\"fa fa-ban fa-fw\"></i> <img src='/assets/front-end/images/Im_loading.gif' alt='loading...'"+
	                                                      "</label>"+
	                                                "</div>"+
	                                            "</div></div>");	
	}
	
    frm.submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            dataType: "json",
            success: function (response) {    
                if (response.status == "success") {
	                $('#profileInfo').html("<div class=\"form-group alert-dismissable\">"+
	                                                "<label class=\"col-md-2 control-label\">&nbsp;</label>"+
	                                                "<div class=\"col-md-8 alert alert-success alert-dismissable\">"+
	                                                      "<label style=\"color:green;\">"+  
	                                                       	"<i class=\"fa fa-check-circle fa-fw\"></i> "+response.responseMessage+""+
	                                                      "</label>"+
	                                                "</div>"+
	                                            "</div></div>" +
	                                            "<script>");
            	} else {
            		$('#profileInfo').html("<div class=\"form-group\">"+
                                                "<label class=\"col-md-2 control-label\">&nbsp;</label>"+
                                                "<div class=\"col-md-8 alert alert-danger\">"+
                                                      "<label style=\"color:red;\">"+   
					                                   	"<i class=\"fa fa-times-circle fa-fw\"></i> "+response.responseMessage+""+
					                                  "</label>"+
					                            "</div>"+
					                        "</div></div>");
            	}
                $("input[name=memberLastName]").removeAttr("style"); 
			    $("input[name=memberFirstName]").removeAttr("style"); 
			    $("input[name=memberPhone]").removeAttr("style"); 
			    
			    $("input[name="+response.fieldName+"]").attr("style", "border-color: red"); 
            },
            error : function(xhr,status,err) {
			 	//code always ends up here, with the err giving no error message at all!
			 	//alert('Error: '+err+'; Status: '+status+'; xhr: '+xhr.status);   
			 	console.log('Error: '+err+'; Status: '+status+'; xhr: '+xhr.status);               
			},
        });
        e.preventDefault(); //STOP default action
    	frm.unbind(); //unbind. to stop multiple form submit.
    });
}



