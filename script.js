
var NetBalance=100;



function multiplyBy()
     {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
          if(num1=='0'){ 
		alert ( 'account number is required' ) ;
                      }
          if(num1=='1') 
		      {    
		          var Deposit = prompt("Enter the first number", "");
		       
		alert ( 'deposit' + Deposit) ;         
			}   
			
			NetBalance =              document.getElementById("").innerHTML = NetBalance + Deposit;
			
			alert ( 'Net balance' + NetBalance) ;
           if(num1=='2') 
		      {  
		      
		        
		  alert ( 'account number is required' ) ;}
                 
                      
                                                        				
              document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

