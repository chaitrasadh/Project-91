var p1name = ""
var p2name= ""
var p1score = ""
var p2score = ""
function Set(){
p1name = localStorage.getItem("player1name")
    p2name = localStorage.getItem("player2name")

    

    document.getElementById("p1turn").innerHTML  = "Question turn : " + p1name
    document.getElementById("p2turn").innerHTML  = "Answer turn : " + p2name

    document.getElementById("p1name").innerHTML  =  p1name + " : "
    document.getElementById("p2name").innerHTML  = p2name + " : "

    document.getElementById("p1score").innerHTML  =  p1score 
    document.getElementById("p2score").innerHTML  = p2score }

function Send(){

    n1 = document.getElementById("no1").value
    n2 = document.getElementById("no2").value
    


    ans = parseInt(no1) * parseInt(no2)

    question = "<h4>" +n1 + "X" + n2+"</h4>"
    input = "<br> Answer : <input type = 'number' id = 'ansinput'>"
    btn = "<br><br><button style='width30% height8% ' id='checkbtn' >Check</button>"
    row = question + input + btn
    document.getElementById("div").innerHTML = row
}