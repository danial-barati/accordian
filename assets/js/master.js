let _selection = document.querySelectorAll('.content')
    let _para = document.querySelectorAll('.para')
    let _idash = document.querySelectorAll('.bi-dash')
    let _iplus = document.querySelectorAll('.bi-plus')
    _selection.forEach((val,i) => {
        val.addEventListener('click',()=>{
            let _status = val.getAttribute('data-status')
            console.log(i);
            
            //////////////////

            for(let index = 0; index < _selection.length; index++ ) {
                if (i != index) {
                    _selection[index].nextElementSibling.style.height='0'
                    _selection[index].setAttribute('data-status','off')
                    _idash[index].classList.add('hidden_i')
                    _iplus[index].classList.add('show_i')
                }
            }
            
            ///////////////////
            
            if (_status == 'off') {
                val.nextElementSibling.style.height=_para[i].scrollHeight+'px'
                val.setAttribute('data-status','on')

                _idash[i].classList.remove('hidden_i')
                _iplus[i].classList.remove('show_i')
                _iplus[i].classList.add('hidden_i')
            } else {
                val.nextElementSibling.style.height='0'
                val.setAttribute('data-status','off')

                
                _idash[i].classList.add('hidden_i')
                _iplus[i].classList.add('show_i')
                _iplus[i].classList.remove('hidden_i')
            }
        })
    });