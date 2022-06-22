var result = 0;
var sum = 0;
var mul = 1;
var dn = 1;
var dr = 1;
var flagr = 0;
var flag = 0;
var flaga = 0;
var flagm = 0;
var flagq = 0;
var flagd = 0 ; 

function calc()
{
    var a = event.target.id;
    if(a == 'one')
    {
        var o = document.getElementById("val").value;
        o = o + '1';
        document.getElementById("val").value = o;
    }
    else if (a == 'two')
    {
        var o = document.getElementById("val").value;
        o = o + '2';
        document.getElementById("val").value = o;
    }
    else if (a == 'three')
    {
        var o = document.getElementById("val").value;
        o = o + '3' ;
        document.getElementById("val").value = o;
    }
    else if (a == 'four')
    {
        var o = document.getElementById("val").value;
        o = o + '4' ;
        document.getElementById("val").value = o;
    }
    else if (a == 'five')
    {
        var o = document.getElementById("val").value;
        o = o + '5' ;
        document.getElementById("val").value = o;
    }
    else if (a == 'six')
    {
        var o = document.getElementById("val").value;
        o = o + '6' ;
        document.getElementById("val").value = o;
    }
    else if (a == 'seven')
    {
        var o = document.getElementById("val").value;
        o = o + '7' ;
        document.getElementById("val").value = o;
    }
    else if (a == 'eight')
    {
        var o = document.getElementById("val").value;
        o = o + '8' ;
        document.getElementById("val").value = o;
    }
    else if (a == 'nine')
    {
        var o = document.getElementById("val").value;
        o = o + '9' ;
        document.getElementById("val").value = o;
    }
    else if (a == 'zero')
    {
        var o = document.getElementById("val").value;
        o = o + '0' ;
        document.getElementById("val").value = o;
    }
    else if (a =='add')
    {
        flaga=1;
        flagm = flagd = flagq = 0; 
        addd();
    }
    else if (a == "minus")
    {
        flagd=1;
        flagm = flaga = flagq = 0; 
        diff();
    }
    else if (a == "product")
    {
        flagm=1;
        flaga = flagd = flagq = 0; 
        prod();
    }
    else if(a == "divide")
    {
        flagq=1;
        flagm = flagd = flaga = 0; 
        dvd();
    }
    else if(a=="root")
    {
        srt();
    }
    else if (a == "rem")
    {
        rem();
    }
    else if (a == "sqr")
    {
        sqr();
    }
    else if ( a == "reci")
    {
        reci();
    }
    else if ( a == "eq")
    {
        eq();
    }
    else if ( a == "ac")
    {
        document.getElementById("val").value = ' ';
        document.getElementById("val").focus();
        result = 0;
        sum = 0;
        mul = 1;
        dn = 1;
        dr = 1;
        flagr = 0;
        flag = 0;
        flaga = 0;
        flagm = 0;
        flagq = 0;
        flagd = 0 ; 
    }
}

function addd(){
    var el = document.getElementById("val").value;
    el = parseInt(el);
    sum = sum + el;
    document.getElementById("val").value = ' ';
    result = sum;
}

function prod(){
    var el = document.getElementById("val").value;
    el = parseInt(el);
    mul = mul * el;
    result = mul;
    document.getElementById("val").value = ' ';
}

function diff()
{
    var el = document.getElementById("val").value;
    el = parseInt(el);
    result = Math.abs(el-result);
    document.getElementById("val").value = ' ';
}

function dvd()
{
    var el = document.getElementById("val").value;
    el = parseInt(el);
    if (dn==1 && flag == 0)
    {
        flag = 1;
        dn = el/dn ;
    }
    else
    {
        dn = dn/el ;
    }
    document.getElementById("val").value = ' ';
    result = dn;
}

function srt()
{
    var el = document.getElementById("val").value;
    el = parseInt(el);
    result = Math.sqrt(el);
    document.getElementById("val").value = ' ';
}

function rem()
{
    var el = document.getElementById("val").value;
    el = parseInt(el);
    if (dr==1 && flagr == 0)
    {
        flagr = 1;
        dr = el;
    }
    else
    {
        dr = dr%el ;
    }
    document.getElementById("val").value = ' ';
    result = dr;
}

function sqr()
{
    var el = document.getElementById("val").value;
    el = parseInt(el);
    result = el*el;
    document.getElementById("val").value = ' ';
}

function reci()
{
    var el = document.getElementById("val").value;
    el = parseInt(el);
    result = 1/el;
    document.getElementById("val").value = ' ';   
}

function eq()
{
    if ( result != 0)
    {
       if(flaga == 1)
       {
            addd();
            document.getElementById("val").value = result;
       }
       else if (flagd == 1)
       {
            diff();
            document.getElementById("val").value = result;
       }
       else if (flagm == 1)
       {
            prod();
            document.getElementById("val").value = result;
       }
       else if (flagq == 1)
       {
            dvd();
            document.getElementById("val").value = result;
       }
       else if (flagr == 1)
       {
            rem();
            document.getElementById("val").value = result;

       }
       else
       {
            document.getElementById("val").value = result;
       }
    }
    else
    {
        document.getElementById("val").value = result;
    }
}
