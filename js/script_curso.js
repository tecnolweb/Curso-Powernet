//-----------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------FUNÇÃO PARA CHAMAR O VÍDEO AO CLICAR NA BARRA LATERAL E TROCAR A SUGESTÃO DE VÍDEO----------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function chamaVideo(aula){
    var aula0 = "https://www.youtube.com/embed/XlwST3iK93k?si=Zs23Rvcka3KEC2hz";
    var aula24 = "https://www.youtube.com/embed/9Q6OGfnFTH4?si=7S5CEgCpS1jz5c-y";
    var aula25 = "https://www.youtube.com/embed/k53QK3i2300?si=LSL4cdk6EvpQL0Um";
    var aula26 = "https://www.youtube.com/embed/KGLGnKj8wPA?si=hzBd4S4wr1wLvqQN";
    var aula27 = "https://www.youtube.com/embed/C-OELIg4yWg?si=Kn_KelusCQ2SVhld";
    var aula28 =  "https://www.youtube.com/embed/2kr1y41O38o?si=Wvhf9xKNiy0YtsF_"
    

   

    if(aula == "aula0"){
        document.getElementById("iframe").src = aula0;

        document.getElementById("imagem1").src = au1;
        document.getElementById("imagem2").src = au3;
        document.getElementById("imagem3").src = au4;

    }
  

    
    else if(aula == "aula24"){
        document.getElementById("iframe").src = aula24;

        document.getElementById("imagem1").src = au1;
        document.getElementById("imagem2").src = au2;
        document.getElementById("imagem3").src = au3;
        
        document.getElementById("prova").href = "index.html";

    }
    else if(aula == "aula25"){
        document.getElementById("iframe").src = aula25;

        document.getElementById("imagem1").src = au1;
        document.getElementById("imagem2").src = au2;
        document.getElementById("imagem3").src = au3;
        
        document.getElementById("prova").href = "index.html";

    }
    else if(aula == "aula26"){
        document.getElementById("iframe").src = aula26;

        document.getElementById("imagem1").src = au1;
        document.getElementById("imagem2").src = au2;
        document.getElementById("imagem3").src = au3;
        
        document.getElementById("prova").href = "index.html";

    }
    else if(aula == "aula28"){
        document.getElementById("iframe").src = aula28;

        document.getElementById("imagem1").src = au1;
        document.getElementById("imagem2").src = au2;
        document.getElementById("imagem3").src = au3;
        
        document.getElementById("prova").href = "index.html";

    }
    else if(aula == "aula27"){
        document.getElementById("iframe").src = aula27;

        document.getElementById("imagem1").src = au1;
        document.getElementById("imagem2").src = au2;
        document.getElementById("imagem3").src = au3;
        
        document.getElementById("prova").href = "index.html";

    }
}
function desabilitar(x){
    x.disabled = false;
}