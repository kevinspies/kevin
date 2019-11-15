
//thoughts
//thoughts will hold all the things on my mind, or more accurately in this case, things I want to be thinking more
let thoughts = ["eat healthy", "crystallize thoughts", "work out hard", "sleep", "make money", "be kind", "accept myself", "i am good", "help other people", "spark joy"]

//concentration
//concentration will sort of randomly move between my thoughts, and represents what i'm currently thinking about the most
function changeFocus() {
    setInterval(function () {
        let selectedThought = thoughts[Math.floor(Math.random() * thoughts.length)]
        console.log(selectedThought)
        let para = document.createElement("p");
        let node = document.createTextNode(selectedThought)
        para.appendChild(node)
        let element = document.getElementById("thoughts")
        element.appendChild(para)
    }, 3000)
}

changeFocus()
