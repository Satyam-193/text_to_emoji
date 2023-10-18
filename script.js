var clutter = ""

function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function(){
        
        // Entering a message
        var input = document.getElementById("txtmsg-encrypt").value
        console.log(input)

        // set a password
        var password = document.getElementById("password").value
        console.log(password)

        //Splitting input 
        const str = input.split("")
        console.log(str)

        // cobverting to emojis
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
        });

        console.log(clutter)

        // storing result
        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML = clutter

    })
}

encryption()


function btnClicking(){
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display="block"
        document.querySelector("#encryption").style.display="none"
        document.querySelector("#dec-btn").style.backgroundColor="#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate ="270deg"
    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display="block"
        document.querySelector("#decryption").style.display="none"
        document.querySelector("#enc-btn").style.backgroundColor="#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate ="90deg"
    })
}
btnClicking()