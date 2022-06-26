<template>
    <div id="directionBar">
        <div id="directions">
            <span class="directionBarText ">Confirmar pedido<span class="arrow">&rarr;</span></span>
            <span class="directionBarText ">Endereço de entrega <span class="arrow">&rarr;</span></span>
            <span class="directionBarText ">Dados do comprador <span class="arrow">&rarr;</span></span>
            <span class="directionBarText curentPage">Informações do pagamento <span class="arrow"></span></span>
            <hr id="line">   
        </div>
    </div>




    <div id="page">
        <div id="pageContent">
            <div class="pageBlocks">
                <span class="pageText">Ecolha a opção de pagamento:</span>
                <div class="form-check inputField">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Crédito
                    </label>
                    </div>
                <div class="form-check inputField">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Pix
                    </label>
                </div>
            </div>
            <div class="pageBlocks">
                <span class="pageText">Número do cartão:</span><input type="text" id="inputCardNumber" class="inputField">
            </div>
            <div class="pageBlocks">
                <span class="pageText">Data de expiração:</span><input type="month" class="inputField ">
                <span class="pageText">Código de segurança:</span><input type="text" id="inputSecCode" class="inputField">
            </div>
            <div class="pageBlocks">
                <span class="pageText">Nome no cartão:</span><input type="text" id="inputCardName" class="inputField">
            </div>
            <router-link to="/">
                <button type="submit" id="button">Confirmar pedido</button>
            </router-link>
        </div>
    </div>



</template>


<script>




</script>




<style>
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