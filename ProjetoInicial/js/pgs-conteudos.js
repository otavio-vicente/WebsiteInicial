document.getElementById('btnContato').addEventListener('click', function() {
    Swal.fire({
      title: 'Escolha uma opção de contato',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Email',
      denyButtonText: 'Telefone',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Email: teste@gmail.com', '', 'info');
      } else if (result.isDenied) {
        Swal.fire('Telefone: (47) 91234-5678', '', 'info');
      }
    });
  });