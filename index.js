
let dataList = [ 
{ language: "Español", texto: "Bienvenido al curso de React Native en PachaQtec", id_idioma: 1, }, 
{ language: "Ingles", texto: "Welcome to the React Native course at PachaQtec", id_idioma: 2, }, 
{ language: "Francés", texto: "Bienvenue dans le cours React Native chez PachaQtec", id_idioma: 3, },
{ language: "Italiano", texto: "Benvenuti al corso React Native presso PachaQtec", id_idioma: 4, }, 
{ language: "Portugués", texto: "Bem-vindo ao curso React Native na PachaQtec", id_idioma: 5, } ];

const translate = (text, language)=>{
if(language === "Español"){

return `Bienvenido al curso de React Native en PachaQtec in spanish`;
}else if (language === "Ingles"){
return 'Welcome to the React Native course at PachaQtec in Ingles';
}else if (language === "Francés"){
return 'Bienvenue dans le cours React Native chez PachaQtec in Francés';
}else if (language === "Italiano"){
return 'Benvenuti al corso React Native presso PachaQtec in Italiano';
}else if (language === "Portugués"){
    return "Bem-vindo ao curso React Native na PachaQtec in Portugués";
    }
}

console.log(translate('Bienvenido al curso de React Native en PachaQtec', 'Portugués'));




