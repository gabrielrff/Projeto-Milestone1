<template>
<div>
    <div id="directionBar">
        <div id="directions">
            <span class="directionBarText ">Confirmar pedido<span class="arrow">&rarr;</span></span>
            <span class="directionBarText curentPage">Endereço de entrega <span class="arrow">&rarr;</span></span>
            <span class="directionBarText ">Dados do comprador <span class="arrow">&rarr;</span></span>
            <span class="directionBarText">Informações do pagamento <span class="arrow"></span></span>
            <hr id="line">   
        </div>
    </div>



    










    <div id="pageContent">
        <div id="content">
            <div class="pageBlocks">
                <span class="pageText">CEP:</span><input type="tel" class="inputField" pattern="\d{5}-?\d{3}" placeholder="12345-678" v-model="cep">
            </div>
            <div class="pageBlocks">
                <span class="pageText">Bairro:</span><input type="text" class="inputField" v-model="bairro">
            </div>
            <div class="pageBlocks">
                <span class="pageText">Rua:</span><input type="text" class="inputField" v-model="rua">
            </div>
            <div class="pageBlocks">
                <span class="pageText">Número:</span><input type="tel" class="inputField" id="inputNumber" v-model="numero">
            </div>
            <router-link to="/confirmar">
                <button type="submit" id="button">Voltar</button>
            </router-link>
            <router-link to="/dados">
                <button type="submit" id="button">Próximo</button>
            </router-link>
        </div>
    </div>







    


 
</div>
</template>



<script>
    export default{
        data() {
            return {
                cep:"",
                bairro:"",
                rua:"",
                numero:"",
            
            }
        },
    }


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

/*Page content*/



#content{
    position: relative;
    margin: auto;
    width: 50%;
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

#inputNumber{
    width: 10%;
    text-align: center;
    font-size: xx-large;
}



</style>