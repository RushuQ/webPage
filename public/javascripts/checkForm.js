(function(){
    function testForm(){}
    testForm.prototype.checkPhone=function(ele,tip){//验证账号是否正确
        if(/^1[34578]\d{9}/.test(ele)){
            return true;
        }else{
            this.tipRect(tip);
        }
    }
    testForm.prototype.checkPassword=function(ele,tip){//验证密码是否正确
        if(/\w+/.test(ele)&&ele.length>6&&ele.length<20){
            return true;
        }else{
            this.tipRect(tip);
        }
    }
    testForm.prototype.checkEmail=function(ele,tip){
        if(/^([0-9a-zA-Z_\.\-])+\@([a-zA-Z])+\.(com|cn|cnt)$/.test(ele)){
            return true;
        }else{
            this.tipRect(tip);
        }
    }
    testForm.prototype.checkCity=function(ele,tip){
        if(ele==null){
            this.tipRect(tip);
        }else{
            return true
        }
    }
    testForm.prototype.tipRect=function(word){
        var rects=document.createElement("div");
        rects.className="rect";
        rects.innerText=word;
        document.body.appendChild(rects);
        setTimeout(function(){
            rects.style.display="none";
        },3000);
    }
    var testForm=new testForm;
    window.testForm=testForm;
})()