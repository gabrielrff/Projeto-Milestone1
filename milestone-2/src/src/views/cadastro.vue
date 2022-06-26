<template>
    <div id="pageContent">
        <div id="cadastroDiv">
            <h2 id="title">Cadastre-se:</h2>

            <div id="cadastroForm">
                <form>
                    <div class="inputDiv">
                        <h5>Primeiro nome:</h5>
                        <input type="text">
                    </div>
                    <div class="inputDiv">
                        <h5>Último nome:</h5>
                        <input type="text">
                    </div>

                    <div class="inputDiv">
                        <h5>E-mail:</h5>
                        <input type="e-mail">
                    </div>

                    <div class="inputDiv">
                        <h5>Telefone:</h5>
                        <input type="text">
                    </div>

                    <div class="inputDiv">
                        <h5>Rua:</h5>
                        <input type="text">
                    </div>

                    <div class="inputDiv">
                        <h5>Bairro:</h5>
                        <input type="text">
                    </div>

                     <div class="inputDiv">
                        <h5>Cep:</h5>
                        <input type="text">
                    </div>

                     <div class="inputDiv">
                        <h5>Número:</h5>
                        <input id="inputNumber" type="text">
                    </div>

                    <button id="submitButton">Submit</button>
                </form>
            </div>
            


        </div>

        
    </div>
</template>


<style>
    #cadastroDiv{
        width: 50%;
        margin: auto;
        margin-top: 2%;
    }

    #title{
        text-align: center;
    }

    #cadastroForm{
        width: 50%;
        margin: auto;
        margin-top: 2%;
    }

    .inputDiv{
        display: flex;
        margin-top: 5%;
    }

    #inputNumber{
        width: 20%;
    }

    #submitButton{
        margin-top: 5%;
    }
</style>