const html = document.querySelector("html")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const lightColors = {
    bgColor: getStyle(html, "--bg-color"),
    textColor: getStyle(html, "--text-color"),
    navColor: getStyle(html, "--nav-color")
}

const darkColors = {
    bgColor: "#222",
    textColor: "#fff",
    navColor: "#2F7C8F"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])    
    )
}

var cont = 0;
function setTheme(){
    cont++;
        if (cont % 2 == 1) {
            changeColors(darkColors); //set Dark
        } else {
            changeColors(lightColors); //set Default(light)
        }
}



