function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)*/

    // ab humlog isse accha code likheneg that will be loop based 
    // toh adha kaam toh pehlke jaisa hi hoga

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

    //bsa yehi hai apna custom react

}


const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'blank'
    },
    children:'Click me to visit google'
}

const maincontainer = document.querySelector('#root')
// root ko grab kiya humne 

customRender(reactElement, maincontainer)