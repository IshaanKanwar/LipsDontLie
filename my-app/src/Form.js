import React,{Component} from 'react';
import $ from 'jquery';
import './App.css';

export default class Form extends Component{
    componentDidMount(){
        var btnUpload = $("#upload_file"),
		btnOuter = $(".button_outer");
	btnUpload.on("change", function(e){
		var ext = btnUpload.val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['flv','mp4','mpeg']) == -1) {                  // Add different video extensions
			$(".error_msg").text("Not a Video...");
		} else {
			$(".error_msg").text("");
			btnOuter.addClass("file_uploading");
			setTimeout(function(){
				btnOuter.addClass("file_uploaded");
			},3000);
			var uploadedFile = URL.createObjectURL(e.target.files[0]);
			setTimeout(function(){
				$("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show");
			},3500);
		}
	});
	$(".file_remove").on("click", function(e){
		$("#uploaded_view").removeClass("show");
		$("#uploaded_view").find("img").remove();
		btnOuter.removeClass("file_uploading");
		btnOuter.removeClass("file_uploaded");
	});
    }

    render(){
        return(
            // <div>
            //     <form>
            //         <input type="file" name="vid" accept="video/*"/>
            //         <input type="submit" value="Submit" />
            //     </form>
            // </div>

            <div class="container">
		<div class="panel">
			<div class="button_outer">
				<div class="btn_upload">
					<input type="file" id="upload_file" name="input_vid" accept="video/*"/>
					Upload Video
				</div>
				<div class="processing_bar"></div>
				<div class="success_box"></div>
			</div>
		</div>
		<div class="error_msg"></div>
		<div class="uploaded_file_view" id="uploaded_view">
			<span class="file_remove">X</span>
		</div>
	</div>

        )
    }
}