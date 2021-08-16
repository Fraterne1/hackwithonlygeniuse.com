const inputs = document,queryselectorall('.input');

function focusFunc(){
    Let parent= this.parentNode.parentNode;
    parent.classlist.add('focus');
}

function blurFunc(){
    Let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classlist.remove('focus');
    }
}

