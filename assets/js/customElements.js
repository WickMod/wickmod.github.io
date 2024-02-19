// IMPORTANT NOTE: all custom elelments need to be placed in the customElement foldeer
class HeaderBar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = readElementFile("header.html")
    }
}
customElements.define("header-bar", HeaderBar)

class HeaderTabs extends HTMLElement {
    connectedCallback(){
        this.innerHTML = readElementFile("headerTabs.html")
    }
}
customElements.define("header-tabs", HeaderTabs)

class FooterBar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = readElementFile("footer.html")
    }
}
customElements.define("footer-bar", FooterBar)

class AboutMe extends HTMLElement {
    connectedCallback(){
        this.innerHTML = readElementFile("aboutMeElement.html")
    }
}
customElements.define("about-me", AboutMe)




function readElementFile(filePath) {
    filePath = "customElements/" + filePath;
    var request = new XMLHttpRequest();
    request.open('GET', filePath, false);
    request.send();
  
    if (request.status === 200) {
      return request.responseText;
    } else {
      console.error(`Failed to fetch file: ${request.statusText}`);
      return null;
    }
  }