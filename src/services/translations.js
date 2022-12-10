import { EN_US, ES_AR } from '../enums/lenguages';

const PROJECT_ID = '39';
let translations = null;
let language = ES_AR;
                                                                          /////
export async function getTranslations(lang, callback) {                      //
    localStorage.clear();                                                    //  función getTranslation:
    translations = null;                                                     //    
    language = lang;                                                         //     se llama en el MainMenu al momento de
    if (language === ES_AR) {                                                //     tocar cualquiera de los botones de los idiomas
        return callback ? callback() : false;                                //
    }                                                                        //     trae como parametro el idioma al que se cambia
                                                                             //     y trae de la api de traducciones todos los textos
    return await fetch(                                                      //     en ese idioma y los comprime en un archivo json
        `https://traduci-la-strapi.herokuapp.com/api/translations/           
        ${PROJECT_ID}/${language}`)                                          //     json = archivo de texto codificado que solo lo
    .then(response => response.json())                                       //            lee el programa
    .then(data => {                                                          //
        localStorage.setItem('translations', JSON.stringify(data));          //
        translations = data;                                                 //
        if(callback) callback()                                              //
    });                                                                      //
}                                                                         /////

export function getPhrase(key) {                                          /////
    if (!translations) {                                                     //   funcion getPhrase:
        const locals = localStorage.getItem('translations');                 //
        translations = locals ? JSON.parse(locals) : null;                   //     se llama cada vez que en el codigo haya algun
    }                                                                        //     texto que cambia segun el idioma
                                                                             //     
    let phrase = key;                                                        //     se le pasa como parametro una "key", que es el
    if (translations && translations[key]) {                                 //     nombre clave con el cual se guarda la traducción
        phrase = translations[key];                                          //     en el arcvhivo json, y una vez que lo encuentra
    }                                                                        //     lo muestra por pantalla
                                                                             //
    return phrase;                                                           //
}                                                                         /////

function isAllowedLanguge(language) {                                     /////  funcion isAllowedLanguage:
    const allowedLanguages = [ES_AR, EN_US];                                 //    verifica que el idioma ingresado este
    return allowedLanguages.includes(language);                              //    dentro del los idiomas disponibles  
}                                                                         /////    (carpeta enums/lenguajes)
                                                                         
export function getLanguageConfig() {
    let languageConfig;

    const path = window.location.pathname !== '/' ? window.location.pathname : null;
    const params = new URL(window.location.href).searchParams;
    const queryLang = params.get('lang');

    languageConfig = path ?? queryLang;

    if (languageConfig) {
        if (isAllowedLanguge(languageConfig)) {
            return languageConfig;
        }
    }

    const browserLanguage = window.navigator.language;
    if (isAllowedLanguge(browserLanguage)) {
        return browserLanguage;
    }

    return ES_AR;
}