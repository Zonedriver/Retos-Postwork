console.log(this)

function deez()
{
    console.log(this) 
}

deez()

function logThis()
{
    console.log("Is this === window?"+(this===window))
}

var deezOB = 
{
    logThis: logThis
}

logThis()
deezOB.logThis();