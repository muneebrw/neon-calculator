// input digit and operator

function getNum(num)
{
    var LED = document.getElementById("screen")
    LED.value += num
}

// clear screen

function clr()
{
    
    var LED = document.getElementById("screen")
    LED.value = " "
}

// equals to

function ans()
{
    var LED = document.getElementById("screen")
    var answer = LED.value
    answer = eval(answer)
    var LED = document.getElementById("screen")
    LED.value += " = " + answer    
}

// factorial

function fact()
{
    var LED = document.getElementById("screen")
    var n = LED.value
    for(var i = 0; i < n.length; i++)
    {
        if(n[i] === '!')
        {
            n = n.replace('!','')
        }
    }
    n = Number(n)
    for(var i = n-1; i > 0; i--)
    {
        n = n*i
    }
    
    var LED = document.getElementById("screen")
    LED.value += " = " + n
}

// dark mode button

function darkMode()
{
    var body = document.getElementById('b')
    body.style.backgroundColor='black'

    var mode = document.getElementById('mode')
    mode.style.border='1px solid white'
    mode.style.boxShadow='0 0 10px white'

    var main =  document.getElementById('main')
    main.style.backgroundColor="black"
    main.style.border='2px solid green'
    main.style.boxShadow='0 0 20px #39ff14'

    var screen =  document.getElementById('screen')
    screen.style.backgroundColor="black"
    screen.style.color='#faed27'
    screen.style.border='2px solid #39ff14'
    screen.style.boxShadow='0 0 10px #39ff14'

    var x =  document.getElementsByClassName('opPadBtn')
    for(i=0; i < x.length; i++)
    {
        x[i].style.backgroundColor='black'
        x[i].style.color='#faed27'
        x[i].style.border='1px solid #faed27'

    }

    var y =  document.getElementsByClassName('numPadBtn')
    for(i=0; i < y.length; i++)
    {
        y[i].style.backgroundColor='black'
        y[i].style.color='#39ff14'
        y[i].style.border='1px solid #39ff14'

    }

    var z =  document.getElementsByClassName('extBtn')
    for(i=0; i < z.length; i++)
    {
        z[i].style.backgroundColor='black'
        z[i].style.color='#04d9ff'
        z[i].style.border='1px solid #04d9ff'

    }

}