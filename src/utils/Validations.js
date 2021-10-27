//Validar valores String que no sean vacios
export function validationString(value)
{
    if(value.trim() === '')
    {
        return false;
    }
    else
    {
        return true
    }
}

//Validar los valores de tipo numero que no sean menores o iguales a 0
export function validationNumber(value)
{
    try
    {
        var number = Number(value)
        if(number > 0)
        {
            return true;
        }
        else
        {
            return false
        }
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
}

//Validar formato de correo electronico
export function ValidationEmail(email)
{
    var regex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}