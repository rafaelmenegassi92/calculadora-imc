

//inicialização

//window.alert ('Caso seja uma emergência ligue para 44 9 9999 9999')

//window.confirm('Anotou, se não, aperte F5')
//var nome = window.prompt('Qual o seu nome?')
//var telefone = window.prompt('Qual o seu telefone?')
//window.alert ('Seja bem vinda, ' + nome + ', vamos te ligar no numero ' + telefone )

        //var n1   = Number (window.prompt ('digite o valor médio que pode utilizar para protudos '))
        //var n2   = Number (window.prompt ('Agora o valor médio para gastos com serviço: '))  

        var real    = Number (window.prompt ('Insira o valor: '))   
        var real2   = Number (window.prompt ('Insira outro valor: '))  
        var dolar   = real / 4.2
        var euro    = real / 5.4
     

document.write(`Valor em reais é:
 ${real.toLocaleString('pt-br', {style:  'currency', currency: 'BRL'} )} <br/>`) 
        
      
document.write(`Valor em reais é:
 ${real.toLocaleString('pt-br', {style:  'currency', currency: 'BRL'} )} <br/>`) 

document.write(`Valor em dolar é:
 ${dolar.toLocaleString('pt-br', {style:  'currency', currency: 'USD'} )} <br/>`)

document.write(`Valor em euro  é: 
${euro.toLocaleString('pt-br', {style:  'currency', currency: 'EUR'} )} <br/> <br/>`)  

       
        var v_desconto = real * ((real2 / 2) /100)  //var para calcular o desconto.
        
        var c_desconto = real - v_desconto //var que subtrai o valor do desconto e traz o valor final

        document.write (`Valor do desconto (Valor ${real} div/2 e depois por /100 = : ${v_desconto} <br/> <br/> `)
        document.write(`Vc recebeu um desonto de:

         ${v_desconto.toLocaleString('pt-br', {style:  'currency', currency: 'BRL'} )} <br/>`) 

         document.write(`Valor com desconto:
         ${c_desconto.toLocaleString('pt-br', {style:  'currency', currency: 'BRL'} )} <br/>`) 

        

        


        
        //var res  = n1 + n2
        //window.alert ('Seu orçamento não passara de: ' + res )

//corpo do site

        //document.write (`Olá ${nome.toUpperCase()}  <br/>`)
        //document.write (`Ligaremos no numero ${telefone}  <br/>`)
        //document.write (`Produtos é R$ ${n1}  <br/>`)
        //document.write (`Serviços é R$ ${n2}  <br/>`)
        //document.write (`Total  R$  ${res} <br/>`)
        //document.write (`O Valor do seu orçamento é R$ <strong> ${res} </strong> <br/>`)

