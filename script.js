
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
		             	var Add_depositBTN = document.getElementById("  Add_depositBTN"  );
				Add_depositBTN.addEventListener( 'click',function(){
					
							var deposit_input = document.getElementById(" deposit_input"  ).value;
							var depositNewInput  = parseFloat(  deposit_input   );
							var total_deposit = document.getElementById(" total-deposit"  ).innerHTML;
							var Total_NewDeposit = parsFloat( total_deposit );
							var Total_Deposit = depositNewInput + Total_NewDeposit;
							
							document.getElementById("total-deposit").innerHTML=Total_Deposit.toFixed(2);
							
							//change balance
							var total_balance = document.getElementById("total-balance").innerHTML;
							var NewTotal_balance = parseFloat(total_balance);
							var Total_New_Balance = depositNewInput + NewTotal_balance;
			        document.getElementById("total-balance").innerHTML= Total_New_Balance.toFixed(2);
                                                             alert ( 'account number is required'+total-balance);           
				});		  
			}   
			
			     
			
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

