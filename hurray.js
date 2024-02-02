var crossed = document.getElementsByClassName('cross')[0];
var rulebox = document.getElementsByClassName('rule_box')[0];
console.log(rulebox )
crossed.addEventListener('click',function(){
    rulebox.style.display ="none";    
})
var rule_btn = document.getElementsByClassName('rules')[0];
rule_btn.addEventListener('click',function(){
    rulebox.style.display ="block";    
})