// const { response } = require("express");
{/* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> */}
var app = angular.module('projeto-marvel', []);

// app.controller("PersonagensController", function ($scope, $http) {

//   var ts = "1729913847";
//   var apikey = "018a97ff9d03e4f1eda0162a1b1a06e6";
//   var hash = "5bd4c00975b509653cd9949687304d5c";

//   var apiUrl = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;

//   $http.get(apiUrl)
//     .then(function (response) {

//       var resultados = response.data.data.results[0];
//       console.log(resultados)

//       if (resultados && resultados.length > 0) {
//         // document.getElementById("myDiv")
//         // myDiv.innerText = `ID do primeiro item:${resultados.id}`;
//         // $scope.message = `ID do primeiro item:${resultados.id}`;
//         var resultado = resultados.id;
//         document.getElementById("myDiv").innerText = "ID do primeiro quadrinho: " + resultado;
//         $scope.data = resultados;

//       } else {
//         $scope.message = "Nenhum resultado encontrado.";
//       }
//     })
//     .catch(function (error) {
//       console.error("Erro na equisição", error);
//     })


// });


var app = angular.module('projetoMarvel', []);

app.controller('PersonagensController', function($scope) {
   
    $scope.personagem = {
        nome: 'DEADPOOL',
        imagem: '../assets/deadpool.png' 
    };

    $scope.outrosPersonagens = [
        { nome: 'Iron Man', imagem: '../assets/ironman.png' },
        { nome: 'Thor', imagem: '../assets/thor.png' },
        { nome: 'Hulk', imagem: '../assets/hulk.png' },
        { nome: 'Captain America', imagem: '../assets/captain-america.png' }
    ];
});

app.controller("LoginController", function($scope){

  $scope.user = {
    email : '',
    password : ''
  }

  $scope.errorMessage = ''

  $scope.login = function(){
    if($scope.user.email != 'maria@gmail.com' || $scope.user.password !='123'){
      // $scope.errorMessage = 'Por favor, preencha todos os campos.'
      Swal.fire({
        title: 'Erro!',
        text: 'Por favor, preencha todos os campos.',
        icon: 'error',
        confirmButtonText: 'Tentar novamente'
      })
    }
    else{
       Swal.fire({
        title: 'Sucesso',
        text: 'Login bem-sucedido!',
        icon: 'sucess',
        confirmButtonText: 'Ok'
      })
      $scope.errorMessage = '';
    }
  }
})