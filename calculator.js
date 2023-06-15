
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys')
const display = document.querySelector('.display')


display.textContent = '0';



keys.addEventListener('click', e =>{

    if(e.target.matches('button')){
        const keys = e.target
        const dataAction = keys.dataset.action
        const keysContent = keys.textContent
        const displayedNum = display.textContent
        

        if(!dataAction){
            if (displayedNum=='0'){
                display.textContent = keysContent
            }
            else{
                display.textContent = displayedNum + keysContent
            }
        }
        if(dataAction=='add'||dataAction=='subtract'||dataAction=='divide'||dataAction=='multiply'){
            display.textContent = '0'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = dataAction

        }
        
        if(dataAction=='clear'){
            display.textContent = '0'

        }

        function calculate(n1, operator, n2){
            let result = displayedNum
            
            if (operator == 'add') {
              result = parseInt(n1) + parseInt(n2)
            } else if (operator == 'subtract') {
              result = parseInt(n1) - parseInt(n2)
            } else if (operator == 'multiply') {
              result = parseInt(n1) * parseInt(n2)
            } else if (operator == 'divide') {
              result = parseInt(n1) / parseInt(n2)
            }
            
            return result
        }
        

        if(dataAction=='calculate'){
            const currentNum = displayedNum
            const operator = calculator.dataset.operator
            const firstValue = calculator.dataset.firstValue
            
            display.textContent = calculate(firstValue, operator, currentNum)
        }
    }

})
