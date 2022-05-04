
function zodiaco()
{
    let dia, mes;
    dia = parseInt (document.formulario1.dia.value);
    mes = parseInt (document.formulario1.mes.value);
    if((dia>=21&&mes==3)||(dia<=20&&mes==4))
        alert('Tu signo es Aries');
    if((dia>=24&&mes==9)||(dia<=23&&mes==10))
        alert('Tu signo es Libra');
    if((dia>=21&&mes==4)||(dia<=21&&mes==5))
        alert('Tu signo es Tauro');
    if((dia>=24&&mes==10)||(dia<=22&&mes==11))
        alert('Tu signo Escorpio');
    if((dia>=22&&mes==5)||(dia<=21&&mes==6))
        alert('Tu signo es G\u00E9minis');
    if((dia>=23&&mes==11)||(dia<=21&&mes==12))
        alert('Tu signo es Sagitario');
    if((dia>=21&&mes==6)||(dia<=23&&mes==7))
        alert('Tu signo es C\u00E1ncer');
    if((dia>=22&&mes==12)||(dia<=20&&mes==1))
        alert('Tu signo es Capricornio');
    if((dia>=24&&mes==7)||(dia<=23&&mes==8))
        alert('Tu signo es Leo');
    if((dia>=21&&mes==1)||(dia<=19&&mes==2))
        alert('Tu signo es Acuario ');
    if((dia>=24&&mes==8)||(dia<=23&&mes==9))
        alert('Tu signo es Virgo');
    if((dia>=20&&mes==2)||(dia<=20&&mes==3))
        alert('Tu signo es Piscis');
}
 



