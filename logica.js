function orcamento(){
  var ano = document.getElementById("ano").value;
  var preco_aqui= document.getElementById("preco_aqui").value;
  var quilometragem= document.getElementById("quilometragem").value;
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;

  if (!(!isNaN(+ano)&&(+ano!=0))) {
    alert("Insira um Valor válido em Ano da Matricula ")
    return;
  }
  if(!(!isNaN(+quilometragem)&&(+quilometragem!=0))){
    alert("Insira um Valor válido em Quilometragem ")
    return;
  } 
  if (!(!isNaN(+preco_aqui)&&(+preco_aqui!=0))){
    alert("Insira um Valor válido em Preço de Aquisisão ")
    return;   
  }

  ano = 2023-ano

  if((0<quilometragem)&&(quilometragem<=30000)){
    c2=1
  }else if((30000<quilometragem)&&(quilometragem<=70000)){
    c2=0.95
  }else{
    c2=0.9
  }

  if ((0<ano) && ( ano<=10)){
    preco_final=preco_aqui*((1-(ano*0.05))*c2)
  } else {
    preco_final=preco_aqui*((1-(10*0.05 + (ano-10)*0.04))*c2)
  }

  if (preco_final<500){
    preco_final=500
  }
  
  preco_final_1=preco_final*0.6
  preco_final_2=preco_final
  preco_final_3=preco_final*1.1
  
  document.getElementById("orcamento_1").innerHTML = Math.round(preco_final_1)+" Euros";
  document.getElementById("orcamento_2").innerHTML = Math.round(preco_final_2)+" Euros";
  document.getElementById("orcamento_3").innerHTML = Math.round(preco_final_3)+" Euros";
  document.getElementById("marca_1").innerHTML = marca;
  document.getElementById("modelo_1").innerHTML = modelo;
  document.getElementById("ano_1").innerHTML =2023- ano;
  document.getElementById("marca_2").innerHTML = marca;
  document.getElementById("modelo_2").innerHTML = modelo;
  document.getElementById("ano_2").innerHTML =2023- ano;
  document.getElementById("marca_3").innerHTML = marca;
  document.getElementById("modelo_3").innerHTML = modelo;
  document.getElementById("ano_3").innerHTML = 2023-ano;
}

function financiamento(){

  var preco_carro= document.getElementById("preco_carro").value;
  var valor_entrada =document.getElementById("valor_entrada").value;
  var t =[(Math.random()*(4) +1).toFixed(2),(Math.random()*(4) +1).toFixed(2),(Math.random()*(4) +1).toFixed(2)]
  var x = document.getElementById("Financiamento");
  
  if (!(!isNaN(+preco_carro)&&(+preco_carro!=0))) {
    alert("Insira um Valor válido em Preço do Caro")
    return;
  }
  if (!(!isNaN(+valor_entrada)&&(+valor_entrada!=0))) {
    alert("Insira um Valor válido em Valor de Entrada")
    return;
  }

  if (x.style.display === "none") { 
    x.style.display = "grid"; 
  } else { 
    x.style.display = "none"; 
  } 
   
  len=t.length
  for(i =0; i < len; i++){
    for(j=0;j<len;j++){
      if(t[j]>t[j+1]){
        temp=t[j]
        t[j]=t[j+1]
        t[j+1]=temp
      }
    }
  }  

  t[2]=1+t[2]/100
  t[1]=1+t[1]/100
  t[0]=1+t[0]/100

  prestacao_total=preco_carro*1.05
  
  if ((valor_entrada<=preco_carro/20)){
    prestacao_total=prestacao_total*1.04
  }else if((valor_entrada>preco_carro/20)&&(valor_entrada<=preco_carro/10)){
    prestacao_total=prestacao_total*1.03
  }else{
    prestacao_total=prestacao_total*1.02
  }
  
  document.getElementById("financiamento_3_t").innerHTML = Math.round(prestacao_total*t[0])+" Euros Total";
  document.getElementById("financiamento_3_m").innerHTML = Math.round(prestacao_total*t[0]/12)+" Euros/Mês durante 1 Ano";

  document.getElementById("financiamento_2_t").innerHTML = Math.round(prestacao_total*t[1])+" Euros Total";
  document.getElementById("financiamento_2_m").innerHTML = Math.round(prestacao_total*t[1]/24)+" Euros/Mês durante 2 Anos";

  document.getElementById("financiamento_1_t").innerHTML = Math.round(prestacao_total*t[2])+" Euros Total";
  document.getElementById("financiamento_1_m").innerHTML = Math.round(prestacao_total*t[2]/36)+" Euros/Mês durante 3 Anos";
}