import "../../firebaseConfig"
import { subirData } from "../../utils/firebase";
export default class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
        subirData()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=""
        }
        const section = this.ownerDocument.createElement('section')

        const labeluser = this.ownerDocument.createElement('h3')
        labeluser.textContent= "Username"
        section.appendChild(labeluser)
        const username = this.ownerDocument.createElement('input')
        username.placeholder = "Write your user name"
        section.appendChild(username)

        const labelfavoriteC = this.ownerDocument.createElement('h3')
        labelfavoriteC.textContent= "Select your favorite color"
        section.appendChild(labelfavoriteC)

        const favoriteColor = this.ownerDocument.createElement('select')

        const firstOption = this.ownerDocument.createElement('option')
        firstOption.textContent = "indigo"
        const secondOption = this.ownerDocument.createElement('option')
        secondOption.textContent= "black"
        const thirdOption = this.ownerDocument.createElement('option')
        thirdOption.textContent = "cadetblue"
        const fourOption = this.ownerDocument.createElement('option')
        fourOption.textContent = "darkorchid"
        const fiveOption = this.ownerDocument.createElement('option')
        fiveOption.textContent = "deeppink"
        
        favoriteColor.appendChild(firstOption)
        favoriteColor.appendChild(secondOption)
        favoriteColor.appendChild(thirdOption)
        favoriteColor.appendChild(fourOption)
        favoriteColor.appendChild(fiveOption)
        section.appendChild(favoriteColor)

        const labelfavoriteL = this.ownerDocument.createElement('h3')
        labelfavoriteL.textContent = "Favorite Letter"
        section.appendChild(labelfavoriteL)
        const favoriteLetter = this.ownerDocument.createElement('input')
        favoriteLetter.placeholder = "Write your favorite letter"
        section.appendChild(favoriteLetter)

        const buttonContainer = this.ownerDocument.createElement('div')
        const button = this.ownerDocument.createElement('button')
        button.textContent = "Save"
        buttonContainer.appendChild(button)
        section.appendChild(buttonContainer)
        button.addEventListener("click",() =>{
            subirData(username.value,favoriteColor.value,favoriteLetter.value)
        })

        this.shadowRoot?.appendChild(section)
    }
}

customElements.define('dashboard-container', Dashboard)