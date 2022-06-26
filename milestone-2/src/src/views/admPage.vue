<template>
    <div id="page">
        <div id="pageContent">
            <div id="pageHeader">
                <h1 id="titlePage">Controle de produtos e estoque:</h1>
                <button id="buttonHeader" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Adicionar produto</button>
            </div>


            
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Adicionar novo produto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div id="productInfo">
                            Nome do produto:<br><input type="text" class="productNameInput input" v-model="product.name"><br>
                            
                            Categoria:<br> 
                            <select  class="selectGroupInput input" v-model="product.group">
                                <option value="pao">Pães</option>
                                <option value="pdq">Pães de queijo</option>
                                <option value="biscoito">Biscoitos</option>
                                <option value="doce">Doces</option>
                                <option value="bebidas">Bebidas</option>    
                            </select><br>

                            Foto:<br>                       
                            <input type="text" class="productImgInput input" v-model="product.image"  >
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addProduct(product)">Save changes</button>
                    </div>
                </div>
                </div>
            </div>









            <div id="products">
                <div class="cardDiv" v-for="product in storage" :key="product.id">
                    <div class="imgDiv">
                        <img src="../assets/imagens/baguete.jpg" alt="" class="imgProducts">
                    </div>
                    <div class="titleDiv">
                        <span class="titleCard">{{product.name}}</span><br>
                    </div>
                    <div class="lineDiv">
                    </div>
                    <div class="buttonDiv">
                        <button @click="product.count--">-</button>
                        <span class="quantity">{{product.count}}</span>
                        <button @click="product.count++">+</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
</template>
<script>
    
    export default {
        
     data() {
        return {

            product:{
                name:"",
                group:"",
                image:"",
                count:1
            },

            
            storage:[],
        }
    },

    methods: {
        addProduct(product){
            let aux_product = product
            this.storage.push(aux_product)
            console.log(this.storage)
        }
    },



    };


</script>


<style scoped>
    #pageContent{
    width: 50%;
    position: relative;
    margin: auto;


    margin-top: 2%;
    
}


#pageHeader{
    display: flex;
}


#buttonHeader{
    margin-left: 5%;
}


#products{
    width: 80%;
    position: relative;
    margin: auto;
    margin-top: 2%;
}

.input{
    margin-bottom: 2%;
}

.cardDiv{
    margin-top: 2%;
}



#productsDiv{
    scrollbar-width: none;

    width: 60%;
    margin-right: 5%;
    height: 400px;
    

    overflow-y:scroll;
}




.cardDiv{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1%;
    background-color: darkgrey;

}

.titleCard{
    font-size:x-large;
    margin-left: 1%;
}

.lineCard{
    width:20%;
    transform: rotate(90deg);
}

.imgDiv{
    margin-right: 5%;
}

.titleDiv{
    width: 40%;
    margin-right: 10%;
}

.lineDiv{
    width: 5%;
    height: 100px;
    border-left:1px solid rgb(112, 112, 112);
    vertical-align: middle;
    margin-right: 5%;

}

.buttonDiv{
    width: 20%;
    margin-right:5%;
}

.quantity{
    font-size: xx-large;
    margin: 15%;
}




</style>