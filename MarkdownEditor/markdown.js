const body = document.querySelector("body");
const ecranGauche = document.querySelector(".ecranGauche");
const ecranDroite = document.querySelector(".ecranDroite");

//===================== CHAMP DE TEXTE ==================//
const textEditor = document.createElement("textArea");
textEditor.className = "textEditor";
ecranGauche.appendChild(textEditor);
//==================== RESULTAT ==========================//
const preview = document.createElement("div");
preview.className = "preview";
ecranDroite.appendChild(preview);

let input;

textEditor.addEventListener("keyup", function() {
    markdownConvertion(textEditor);
});
//================ FONCTION REGEX ===============//
function mdToHTML(text){
    input = text
        //======== TITRES =========//
        .replace(/^#{1} (.*$)/gim, '<h1>$1</h1>')
        .replace(/^#{2} (.*$)/gim, '<h2>$1</h2>')
        .replace(/^#{3} (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#{4} (.*$)/gim, '<h4>$1</h4>')
        .replace(/^#{5} (.*$)/gim, '<h5>$1</h5>')
        .replace(/^#{6} (.*$)/gim, '<h6>$1</h6>')

        //======== PARAGRAPHES =========//
        .replace(/^\n\n(.*)$/gim,'<p>$1</p>')

        //======== CITATIONS =========//
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')

        //======== STYLE POLICE =========//
        .replace(/\*{2}(.*)\*{2}|\_{2}(.*)\_{2}/gim, '<strong>$1$2</strong>')
        .replace(/\*{1}(.*)\*{1}/gim, '<em>$1</em>')
        .replace(/\_{1}(.*)\_{1}/gim, '<em>$1</em>')
        .replace(/~~(.*)~~/gim, '<del>$1</del>')

        //======== IMAGES ET LIENS=========//
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")

        //break & horizontal rule
        .replace(/\n/gim, '<br />')
        .replace(/\s{2}/gim, '<br />')
        .replace(/-{3,}/gim, '<hr />')
        
        //======== CODE(HTML-CSS-JS) =========//
        .replace(/\`(.*)\`/gim, '<code>$1</code>')
    return input.trim()
}
//================ AFFICHER LE TEXTEDITOR EN MARKDOWN ===============//
function markdownConvertion(textEditor) {
    let typedText = textEditor.value;
    mdToHTML(typedText);
    preview.innerHTML = input;
}