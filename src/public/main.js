const insert = function insertUser() {
    alert('dkmfkd')
    return $.ajax({
        url:'/api/v1/users',
        data: JSON.stringify(1),
        dataType:'json',
        type:'post',
        success: () => {
            alert('SALVO COM SUCESSO')
        }
    })
  }
$(document).on('ready',() => { alert('dsnfi')})