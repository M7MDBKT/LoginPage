document.querySelector('.username-input').onkeyup = function (){
    if(document.querySelector('.username-input').value.length < 4){
        document.querySelector('.Username-error').style.display = 'block'
        document.querySelector('.username-input').style.border = '2px solid red'
    }else{
        document.querySelector('.Username-error').style.display = 'none'
        document.querySelector('.username-input').style.border = '2px solid green'

    }

    if(document.querySelector('.username-input').value.length == ''){
        document.querySelector('.Username-error').style.display = 'none'
        document.querySelector('.username-input').style.border = 'none'

    }
}

document.querySelector('.password-input').onkeyup = function (){
    if(document.querySelector('.password-input').value.length < 4){
        document.querySelector('.Password-error').style.display = 'block'
        document.querySelector('.password-input').style.border = '2px solid red'
    }else{
        document.querySelector('.Password-error').style.display = 'none'
        document.querySelector('.password-input').style.border = '2px solid green'

    }

    if(document.querySelector('.password-input').value.length == ''){
        document.querySelector('.Password-error').style.display = 'none'
        document.querySelector('.password-input').style.border = 'none'

    }
}