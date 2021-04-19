
var player1,player2,sum2=0;
let sum1= 0;

function calculate1(){
    player1 = parseInt(document.getElementById("player1").value);
    player2 = parseInt(document.getElementById("player2").value);
    
    score1 = parseInt(document.getElementById("score1").innerText);
    score2 = parseInt(document.getElementById("score2").innerText);
    
    console.log("player1 : " + player1);
    console.log("score1 : " + score1);

    if((player1 >= 1) && (player1 <= 10))
    {
        console.log("Inside IF");
        document.getElementById('err1').style.display = 'none';

        if(score1 == 0 && sum1 == 0)
        {
            sum1 = sum1 + player1;
            console.log("calculate1 : When score is 0.. Sum is = " + sum1);
            document.getElementById("player1").value = null;
            document.getElementById("player2").value = null;
            (document.getElementById("player1")).disabled = true;
            (document.getElementById("player2")).disabled = false;
        }
        else
        {
            sum1 = player1  + score2;
            console.log("Calculate1 : When score non zero.. Sum is = " + sum1);
            document.getElementById("player1").value = null;
            document.getElementById("player2").value = null;
            (document.getElementById("player1")).disabled = true;
            (document.getElementById("player2")).disabled = false;
        }
        
        document.getElementById("score1").innerText = sum1;
        if(sum1 == 100)
        {
            document.getElementById('parent-div').style.display = 'none';
            console.log(document.getElementById('winner-div'));
            document.getElementById('winner-div').style.cssText = 'display:block;';

            document.getElementById('h2').innerText = 'Player 1 is Winner!!';
        }
    }
    else
    {
        console.log("Inside else block");
        console.log(document.getElementById('err1'));
        document.getElementById('err1').style.display = 'block';
    }
}

function calculate2(){
    player1 = parseInt(document.getElementById("player1").value);
    player2 = parseInt(document.getElementById("player2").value);

    score1 = parseInt(document.getElementById("score1").innerText);
    score2 = parseInt(document.getElementById("score2").innerText);


    console.log("player2 : " + player2);
    console.log("score2 : " + score2);

    if((player2 >= 1) && (player2 <= 10))
    {
        document.getElementById('err2').style.display = 'none';

        if(score2 == 0 && sum1 == 0)
        {
            sum1 = sum1 + player2;
            console.log("Calculate2 : When score is 0.. Sum is = " + sum1);
            document.getElementById("player1").value = null;
            document.getElementById("player2").value = null;
            (document.getElementById("player1")).disabled = false;
            (document.getElementById("player2")).disabled = true;
        }
        else
        {
            sum1 = player2  + score1;
            console.log("Calculate2 : When score non zero.. Sum is = " + sum1);
            document.getElementById("player1").value = null;
            document.getElementById("player2").value = null;
            (document.getElementById("player1")).disabled = false;
            (document.getElementById("player2")).disabled = true;
        }
        
        document.getElementById("score2").innerText = sum1;

        if(sum1 == 100)
        {
            document.getElementById('parent-div').style.display = 'none';
            document.getElementById('winner-div').style.display = 'block';

            document.getElementById('h2').innerText = 'Player 2 is Winner!!';
        }
    }
    else
    {
        document.getElementById('err2').style.display = 'block';
    }
}

function restart(){
    document.getElementById('parent-div').style.display = 'flex';
    document.getElementById('winner-div').style.display = 'none';
}