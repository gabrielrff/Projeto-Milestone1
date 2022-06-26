<template>
    <div id="nav">
        <header>
        
            <div id="paititulo">     
                <div id="titulo">
                    <h1>União São-Carlense de Panificadoras</h1>
                </div>
                <div id="cartDiv">
                    <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="../assets/imagens/carrinho.png"  alt="" id="imageCart">
                    </a>
                </div>
            </div>
            
            <nav class="navbar navbar-expand-lg bg-light navbar-color" style="background-color:rgb(16, 148, 171)!important">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link active"  href="#">Início</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/cardapio" class="nav-link active" href="#">Cardápio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/cadastro" class="nav-link active" href="#">Cadastro</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/admPage" class="nav-link active" href="#">Página do administrador</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
    
</template>

<script>
export default {
    name:"navBar"
    
}
</script>



<style>
#paititulo{
    background-color:rgb(246, 170, 65);
    display: flex;
}



#titulo{
    text-align: center;
    margin-top: 0;
    text-shadow: 1px 1px #000000;
    font-weight: bold;
    border: solid 1px rgb(246, 170, 65);
    padding-left: 30px;
    padding-right: 30px;
    color: rgb(114, 115, 118);
    width: 100%;
    font-size: 20px; 
}
#cartDiv{
    width: 30px;
    height: 5px;
    margin-top: 1%;
    margin-right: 2%;
    margin-bottom: 5px;
    position: relative;
    
    
}

#imageCart{
    width: 100%;
}



.navbar-color{
    background-color: rgb(29, 165, 189) !important;
}
.btn{
    background-color: rgb(246, 170, 65) !important;
    appearance: none !important;
}



footer{
    position:fixed;
    bottom:0;
    width:100%; 
    background: rgb(246, 170, 65);
    font-weight: bold;
    
}

#rodape{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0%;
    padding-right: 5%;
    padding-left: 5%;
}



    
</style>