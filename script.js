const text = document.querySelector("#textmsg")
const password = document.querySelector('#password')
const result = document.querySelector("#result")

var clutter = "";
var clutter2 = "";

function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function(){
        
        
        // set a password
        var pass = document.getElementById("password").value
        console.log(pass)
        
        // Entering a message
        var input = document.getElementById("txtmsg-encrypt").value
        console.log(input)

        //Splitting input 
        var str = input.split("")

        // cobverting to emojis
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
        });

        

        // storing result
        
        document.querySelector("#result").innerHTML = clutter

        var data_arr = []

        if(JSON.parse(localStorage.getItem('data1'))){
            data_arr = JSON.parse(localStorage.getItem('data1'))
            console.log(data_arr)
            data_arr.push({"pass":password,"input":input, "clutter":clutter})

        }
        else
        {
        data_arr = [{"pass":password,"input":input, "clutter":clutter}]
        }
        

        localStorage.setItem('data1',JSON.stringify(data_arr))

    })
}

encryption()

function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        
        

        // getting an emoji
        var input2 = document.querySelector("#txtmsg-decrypt").value

        // get final password
        var finalpass = document.querySelector("#finalpassword").value

        var user = JSON.parse(localStorage.getItem("data1"))
        console.log(user)

        var str2 = input2.split(" ")
        str2.forEach(element => {
            clutter2 += `&#${element.codePointAt(0)}`
            
        });
        console.log(clutter2)

        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i
                console.log(i)
            }
        }
        if(found.clutter == clutter2){
            console.log("Decrypted")
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`

            document.querySelector("#result").innerHTML = found.input
        }
        else{
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = `Wrong Password`
        }

    })
}
decryption()


function btnClicking(){
    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
    })

    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display="block"
        document.querySelector("#encryption").style.display="none"
        document.querySelector("#dec-btn").style.backgroundColor="#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate ="270deg"
        document.querySelector("#result").style.display = "none"
        
    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display="block"
        document.querySelector("#decryption").style.display="none"
        document.querySelector("#enc-btn").style.backgroundColor="#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate ="90deg"
        document.querySelector("#result").style.display = "none"
    })
    
}
btnClicking()