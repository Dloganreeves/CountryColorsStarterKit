class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let Japan = new Country("Japan", "Japanese","こんにちは世界",["red","white"])
let Brazil = new Country("Brazil","Portuguese","Ola Mundo",["green","yellow", "blue"])

function SwitchCountry() {
    let input=document.getElementById("#CountryList").value;
    let country;
console.log(country)
    if (input === "USA") {
        //set country to usa 
        country = usa;
        DisplayColors(country)
    }
    else if (input === "Mexico") {
        country = mexico;
        DisplayColors(country);
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayColors(country);
    }
    else if (input == "Japan") {
        country = Japan;
        DisplayColors(country);
    }
    else if(input == "Brazil") {

        country = Brazil
        DisplayColors(country);
    }
}

let color1Node=document.getElementById("#Color1")
let color2Node=document.getElementById("#Color2")
let color3Node=document.getElementById("#Color3")
let nameNode=document.getElementById("#CountryName")
let langNode=document.getElementById("#OfficialLanguage")
let HellowWorldNode=document.getElementById("#HelloWorld")

function DisplayColors(country){
   color1Node.style.backgroundColor = country.colors[0]
   color2Node.style.backgroundColor = country.colors[1]
   color3Node.style.backgroundColor = country.colors[2]
   nameNode.innerText = country.name;
   langNode.innertext=country.lang;
   HellowWorldNode.innerText=country.greeting;
}