<template>

    <div id="imageDiv">
      <img src="https://manealimentos.com.br/wp-content/uploads/2021/03/padaria-blog.jpg" id="img" alt="">
    
      <div id="welcomeDiv">
        <h1 id="welcomeTitle">Bem vindo à USPão!</h1>
        <p id="welcomeText">Conheça a maior padaria delivery de São Carlos e região!!!</p>
    
      </div>
    </div>
    <div id="pageContent">

      <div id="destaqueDiv">
        <div id="destaqueText">
          <h2>Destaques do dia</h2>
          <p>Dê uma olhada nos produtos mais vendidos do dia!</p>
        </div>
          <div id="cardDiv">
            <div class="card" style="width: 18rem;">
            <img src="https://content.epadoca.com/images/padaria/padaria-karoa/Bolo_de_Cenoura_Cobertura_Chocolate__637294002537304259.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Bolo de cenoura</h5>
                <router-link to="/cardapio">
                  <a href="#" class="btn btn-primary">Ir para o cardápio</a>
                </router-link>
              </div>
            </div>
            <div class="card" style="width: 18rem;">
            <img src="https://content.epadoca.com/images/padaria/padaria-karoa/Baguete_Tradi%C3%A7%C3%A3o_Francesa_(01_unid)_637301102492259111.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Baguete</h5>
                <router-link to="/cardapio">
                  <a href="#" class="btn btn-primary">Ir para o cardápio</a>
                </router-link>              </div>
            </div>
            <div class="card" style="width: 18rem;">
            <img src="https://content.epadoca.com/images/padaria/padaria-karoa/Coxinha_(1_unid)_637260829410994126.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Coxinha</h5>
                <router-link to="/cardapio">
                  <a href="#" class="btn btn-primary">Ir para o cardápio</a>
                </router-link>
              </div>
            </div>


            
          </div>
        
      
      </div>

      <div id="sobreNos-user-div">
        <!--Sobre nós-->
        <div id="sobreNosDiv">
          <img src="https://manealimentos.com.br/wp-content/uploads/2021/03/padaria-blog.jpg" id="imgSobreNos" alt="">
          <div id="sobreNosTextDiv">
            <h2 id="sobreNosTitle">O que é a USPão?</h2>
            <p id="sobreNosText">
              Em fevereiro de 1995, três alunos do curso de Bacharelado em Ciências de Computação se uniram para criar um novo projeto do ramo alimentício. Pedro "The Bread" Perez, Paulo "The Butter" Almeida e Gabriel "The Cake" Freitas, utilizando do conhecimento adquirido nas disciplinas de sua graduação, montaram um ambiente acolhedor e profissional que hoje conta com 3 filiais situadas em Minas Gerais, Rio de Janeiro e São Paulo. Nosso lema é: "Se tem farinha, tem amor". Cheque nossas delícias!</p>
          </div>
        </div>


        
        <!--Usuário-->
        <div id="userCardDiv" :class="{ativo}">
          <div id="userCard">
            <img src="../assets/imagens/baguete.jpg" id="imgUserCard" alt="">
            <div id="userCardContent">
              <h5>Nome:<span class="userInfo">Gabriel Freitas</span></h5>
              <h5>E-mail:<span class="userInfo">garielrff@usp.br</span></h5>
              <h5>Telefone:<span class="userInfo">(99)9999-9999</span></h5>


            </div>
            
          </div>
            



        </div>
        <div id="userDiv">
          
          <h2 id="userTitle">Conecte-se com sua conta USPão!</h2>
          <div id="inputDiv">
            <h5>Login:</h5>
            <input type="e-mail">
            <h5 style="margin-top: 5%;">Senha:</h5>
            <input type="password">
            <p>Ainda não é cadastrado?<router-link to="/cadastro"> Cadastre-se</router-link></p>
          </div>
          
          <button class="btn btn-outline" id="buttonLogin" type="submit">Login</button>
        </div>
      </div>




      






    </div>
</template>



<style>

  #imageDiv{
    background-color: rgb(246, 170, 65);
    display: flex;
    
  }
  #img{
    width: 50%;
    margin-bottom: 0%;
    
  }

  #welcomeDiv{
    width: 50%;
  }

  #welcomeTitle{
    text-align: center;
    margin-top: 10%;
    font-size: 100px;
  }

  #welcomeText{
    margin-top:5%;
    text-align: center;
    font-size: x-large;
  }

/*Produtos em destaque*/
  #destaqueDiv{
    background-color:rgb(221, 221, 221) ;
    text-align: center;
    padding-bottom: 4% ;
    padding-top: 4%;
  }


  #cardDiv{
    display: flex;
    margin: auto;
    width: 45%;
  }

  .card{
    margin: 1%;
  }

/*Sobre nós/Usuário Div*/
  #sobreNos-user-div{
    display: flex;
  }

  /*Sobre nós*/

  #sobreNosDiv{
    background-color: rgb(29, 165, 189);
    width: 60%;
    display: flex;
  }


  #imgSobreNos{
    margin-top: 2%;
    width: 60%;
  }

  #sobreNosTextDiv{
    margin: auto;
    width: 40%;
    margin: 2%;
  }

  #sobreNosTitle{
    text-align: center;
  }

  #sobreNosText{
    text-align: center;
    font-size:medium;
  }

  /*Usuário div*/

  #userDiv{
    width: 40%;
    background-color: rgb(246, 170, 65);
  }


  #userTitle{
    text-align: center;
    margin-top: 2%;
  }

  #inputDiv{
    width: 40%;
    position: relative;
    margin: auto;
    margin-top: 5%;
  }

  #buttonLogin{
    display: flex;
    position: relative;
    margin: auto;
  }


  /*User card Div*/
  #userCardDiv{
    width: 40%;
    background-color:  rgb(246, 170, 65);
    display: none;
  }

  #userCard{
    background-color:  rgb(29, 165, 189);
    position: relative;
    margin: auto;
    margin-top: 4%;
    width: 45%;
    border-radius: 2%;

  }

  #imgUserCard{

    margin-left: auto;
    margin-right: auto;
    width: 50%;
    border-radius: 100%;
    
    
  }

  #userCardContent{
    margin-top: 5%;

  }

  .userInfo{
    font-style:oblique;
    margin-left: 5%;
  }






  


    
</style>


<script>
  export default{
    data() {
      return {
        ativo:false,

      }
    },
  

    



  }








</script>