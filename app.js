
window.onload = function(){
    num1 = 0
    operator = ''
    sumActive = false

    let calculator = document.querySelector('.calculator')
    let keys = calculator.querySelector('.calculator__keys')

    let  display = document.querySelector('.calculator__display')
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            let  key = e.target
            let  action = key.dataset.action
            let  keyContent = key.textContent
            let  displayedNum = display.textContent
            // ...
            if (! action) {
                if (displayedNum  == '0' || sumActive) {
                    display.textContent = keyContent
                    sumActive = false
                } 
                else {
                    display.textContent = displayedNum + keyContent
                }
            }
            else if (action  == 'add' || action  == 'subtract' || action  == 'multiply' || action  == 'divide') {   
                if(operator){
                    calculate()
                }
                sumActive = false
                num1 = Number(display.textContent)
                operator = keyContent
                display.textContent += keyContent
            }
            else if (action  == 'decimal') {
                display.textContent += '.'
            }
            else if (action  == 'clear') {
                sumActive = false
                display.textContent = '0'
            }
            else if (action  == 'calculate') {
                sumActive = true
                calculate()
            }
        }
    })

    function calculate(){
        str = display.textContent
        num2 = 0
        operator = ''
        if(str.split('+')[1])
        {
            num2 = str.split('+')[1]
            res = Math.round((num1 + Number(num2)) * 1000) / 1000
            display.textContent = String(res)
        }
        else if(str.split('-')[1])
        {
            num2 = str.split('-')[1]
            res = Math.round((num1 - Number(num2)) * 1000) / 1000
            display.textContent = String(res)
        } 
        else if(str.split('×')[1])
        {
            num2 = str.split('×')[1]
            res = Math.round((num1 * Number(num2)) * 1000) / 1000
            display.textContent = String(res)
        }
        else if(str.split('÷')[1])
        {
            num2 = str.split('÷')[1]
            res = Math.round((num1 / Number(num2)) * 1000) / 1000
            display.textContent = String(res)
        }
        else   //if num2 does not exist
            display.textContent = String(num1)
    }

}