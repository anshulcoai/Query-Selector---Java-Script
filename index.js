function change()
{
    document.querySelector("p").textContent="Hello QuerySelector!"
    document.querySelector("p").style.color="red"
}

function background()
{
    document.querySelector(".para1").style.backgroundColor="red"
    document.querySelector(".para1").style.color="white"
}

function bold()
{
    document.querySelector("#list1").style.fontWeight="bold"
}

function changing()
{
    c="Hey How are you"
    document.querySelector(".para2").innerHTML=c
}

function change_color()
{
    document.querySelector(".div1").style.color="red"
}

b=document.getElementById("btn4")
b.addEventListener
(
    "click",
    function()
    {
        a2=document.querySelectorAll("button")
        a2.forEach
        (
         function(button)
         {
            button.style.display="none"
         }

        );
    }
)

a3=document.getElementById("btn5")
a3.addEventListener
(
    "click",
    function()
    {

        bord=document.querySelectorAll("#highlight")
        bord.forEach
        (
          function(w)
          {
            w.style.border="2px solid black"
            w.style.backgroundColor="lightgray"
            w.style.cursor="pointer"
          }
        )
    }
)


w1=document.getElementById("btn6")
w1.addEventListener
(
    "click",
    function()
    {
        x=document.querySelectorAll("ul li:nth-child(odd)")
        x.forEach
        (
          function(element)
          {
            element.style.backgroundColor="green"
            element.style.color="white"
          }
        )
    }
)


y1=document.getElementById("btn7")
y1.addEventListener
(
    "click",
    function()
    {
        f1=document.querySelectorAll("span")
        f1.forEach
        (
            function(ele)
            {
              ele.textContent="Fruits :"
            }
        )

    }
)

p1=document.getElementById("btn8")
p1.addEventListener
(
    "click",
    function()
    {
        link=document.querySelectorAll("a")
        link.forEach
        (
            function(link)
            {
            document.getElementById("para3").innerText += link.href +"\n"
            }
        )
    }
)


































































































