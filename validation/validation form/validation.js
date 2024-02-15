function validateForm(){ 
    validateName();
    validateMobile();
    validateEmail();
    validateBatch();
    validateJob();
    validateAds();
    validateDrop();
    validateDown();
    let name=document.getElementById("fname").value.trim();
    let mobile=document.getElementById("mobile").value.trim();
    let email=document.getElementById("email").value.trim();
    let address=document.getElementById("address").value.trim();
    let course=document.getElementById("course").value.trim();
    let experience=document.getElementById("experience").value.trim();
    let comments=document.getElementById("comments").value.trim();

    if(name==""||name==null){
        document.getElementById("nameMsg").innerHTML="**Fill the required Field**";
    }
    if(mobile==""||mobile==null){
    document.getElementById("mobileMsg").innerHTML="**Fill the required Field**";
    }
    if(email==""||email==null){
    document.getElementById("emailMsg").innerHTML="**Fill the required Field**";
    }
    if(address==""||address==null){
    document.getElementById("addressMsg").innerHTML="**Fill the required Field**";
    }
    if(course==""||course==null){
    document.getElementById("courseMsg").innerHTML="**Fill the required Field**";
    }
    if(experience==""||experience==null){
    document.getElementById("experienceMsg").innerHTML="**Fill the required Field**";
    }
    if(comments==""||comments==null){
    document.getElementById("commentsMsg").innerHTML="**Fill the required Field**";
    }
    
}

function validateName(){
    let name=document.getElementById("fname").value;
    let namePattern = /^[a-zA-Z]+$/;
        if(!namePattern.test(name)){
        document.getElementById("nameMsg").innerHTML="**Name should be in alphabet**";
        }
}

function validateMobile(){
    let mobile=document.getElementById("mobile").value;
    let mobilePattern=/^[6-9]{1}[0-9]{9}$/;
        if(!mobilePattern.test(mobile)){
        document.getElementById("mobileMsg").innerHTML="**Check the Mob no**";
        }
}

function validateEmail(){
    let mailPattern=/^[a-z]+[a-z,0-9,.,-]+@[a-z]+[.]+[a-z]{2,3}$/; 
    let email=document.getElementById("email").value;
    if(!mailPattern.test(email)){
        document.getElementById("emailMsg").innerHTML="*Check Your Email*";

}
}

function validateBatch(){
    let a=0;
    let chkbox=document.getElementsByName("batch");
    for(i=0;i<chkbox.length;i++){
        if(chkbox.item(i).checked==false){
            a++;
        }
    }
    if(a==chkbox.length){
        alert("Select the Batch")
        return false
    }
}
function validateJob(){
    let a=0;
    let chkbox=document.getElementsByName("job");
    for(i=0;i<chkbox.length;i++){
        if(chkbox.item(i).checked==false){
            a++;
        }
    }
    if(a==chkbox.length){
        alert("Select Job")
        return false
    }
}
function validateAds(){
    let a=0;
    let chkbox=document.getElementsByName("ads");
    for(i=0;i<chkbox.length;i++){
        if(chkbox.item(i).checked==false){
            a++;
        }
    }
    if(a==chkbox.length){
        document.getElementById("crs").innerHTML = "select the boxes";
        return false
    }
    else{
        document.getElementById("crs").innerHTML = " ";
    }
}
function validateDrop(){
    let dropDown=document.getElementById("dropDown").value;
    if(dropDown=="select"){
        alert("select the year of passout")
        return false;
    }
    else{
        return true;
    }
}
function validateDown(){
    let dropDown=document.getElementById("dropDown1").value;
    if(dropDown=="select1"){
        alert("select the Degree")
        return false;
    }else{
        return true;
    }
}