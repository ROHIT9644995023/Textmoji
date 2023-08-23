const text = document.querySelector("#textmsg")
const password = document.querySelector("#password")
const result = document.querySelector("#result")
var clutter = "";
var parinam = "";

function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function(){

         // getting a input
        var input = document.getElementById("txtmsg").value;
        console.log(input)

        // getting the password
        var pass = document.getElementById("password").value;
        console.log(pass)

        // spliting the input
        const str = input.split("")
        console.log(str)

         // converting it into a set of emojis
        str.forEach(element => {
            clutter += `&#128${(element.charCodeAt())} `
        });
        console.log(clutter)

        // saving emojis in local storage
        // document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML = clutter

        var dataarr = [];
        if(JSON.parse(localStorage.getItem('data1'))){
            dataarr = JSON.parse(localStorage.getItem('data1'));
            console.log(dataarr)
            dataarr.push({"pass":"password","input":input,"clutter":clutter})
        }else{
            dataarr = [{"pass":"password","input":input,"clutter":clutter}]
        }
        localStorage.setItem('data1',JSON.stringify(dataarr))
    })
}
encryption()

function decryption(){
        document.querySelector("#decrypt-btn").addEventListener("click",function(){
            var clutter2 = "";

            var input2 = document.querySelector("#emojimsg").value
            var pass2 = document.querySelector("#finalpassword").value
            var user = JSON.parse(localStorage.getItem('data1'))
            console.log(user)
            var str2 = input2.split(" ")
            str2.forEach(element => {
                clutter2 += `&#${(element.codePointAt(0))} `
            });
            console.log(clutter2)
            var found;
            for (let i of user){
                if(i.clutter == clutter2){
                    found = i;
                    console.log(i)
                }
            }
            if(found.clutter === clutter2) {
                console.log("jay ho")
                document.querySelector("#result").style.display = "block"
                document.querySelector("#result").style.color = "eee"

                    document.querySelector("#result").innerHTML = found.input
                }else{
                    document.querySelector("#result").style.display = "block"
                    document.querySelector("#result").style.color = "red"
                    document.querySelector("#result").innerHTML = "Wrong Password!"
                }
            })
        }
    decryption()

function btnClicking() {

    document.querySelector("button").addEventListener("click",function() {
        document.querySelector("#result").style.display = "block" 
    });

    document.querySelector("#dec-btn").addEventListener("click",function() {
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#enryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#main>h1 span img").style.rotate = "270deg"

    });
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#enryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span i").style.rotate = "90deg"
        document.querySelector("#result").style.display = "none"
    });
};
btnClicking()








// var arr = ["rohit", 3 , true , "lab"]
// console.log(arr)
// localStorage.setItem("array",JSON.stringify(arr))
// console.log(JSON.parse(localStorage.getItem("array")))

// localStorage.setItem('username',"rohit")
// localStorage.setItem('age',"21")

// var a = localStorage.getItem("username");
// console.log(a)

// localStorage.clear()
