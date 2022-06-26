<template >
    <div id="directionBar">
        <div id="directions">
            <span class="directionBarText ">Confirmar pedido<span class="arrow">&rarr;</span></span>
            <span class="directionBarText ">Endereço de entrega <span class="arrow">&rarr;</span></span>
            <span class="directionBarText curentPage">Dados do comprador <span class="arrow">&rarr;</span></span>
            <span class="directionBarText">Informações do pagamento <span class="arrow"></span></span>
            <hr id="line">   
        </div>
    </div>

    <div id="pageContent">
        <div id="content">
            <div class="pageBlocks">
                <span class="pageText">Nome:</span><input type="text" class="inputField">
                <span class="pageText">Sobrenome:</span><input type="text" class="inputField">
            </div>
            <div class="pageBlocks">
                <span class="pageText">E-mail:</span><input type="email" class="inputField">
                <span class="pageText">Telefone:</span><input type="tel" class="inputField">
            </div>
            <div class="pageBlocks">
                <span class="pageText">Sexo:</span>
                <select name="sex" class="inputField">
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                    <option value="outro">Outro</option>
                </select>
                <span class="pageText">Data de nascimento:</span><input type="date" class="inputField">
            </div>
            <div class="pageBlocks">
                <span class="pageText">CPF:</span><input type="tel" class="inputField">
            </div>
            <router-link to="/endereco">
                <button type="submit" id="button">Voltar</button>
            </router-link>
            <router-link to="/info">
                <button type="submit" id="button">Próximo</button>
            </router-link>
        </div>
    </div>



</template>


<script>






</script>



<style>

/*Direction bar*/

#directionBar{
    display: flex;
    
    
}

#directions{
    position: relative;
    margin: auto;
    margin-top: 1%;
}

.directionBarText{
    font-size: large;
    opacity: 50%;
}

.curentPage{
    opacity: 100% !important;
}


.arrow{
    font-size:large;
    margin-left: 5px;
    margin-right: 5px;
}


#line{
    width: 100%;
    position: relative;
    margin: auto;
}




#content{
    position: relative;
    margin: auto;
    
    width: 60%;
}












.pageBlocks{
    display: flex;
    margin-top:3%;
}

.pageText{
    font-size: x-large;
    margin-left: 5%;

}

.inputField{
    margin-top: 0.2%;
    margin-left: 1%;
}

#inputCardNumber{
    width: 20%;
}

#inputSecCode{
    width: 5%;
    height: 50px;
    font-size: xx-large;
    text-align: center;
}

#inputCardName{
    width: 20%;
}

#button{
    position: relative;
    margin: auto;
    margin-top: 5%;
    background-color: rgb(16, 148, 171) !important;
    
}    











</style>