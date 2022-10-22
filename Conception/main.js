var dt = document.getElementById("t1");
var newDescriptionTextuelle = function (nom, type, acteurPrincipal, acteurSecondair, objectif, precondition, postcondition, nominal, alternative, exception) {
    return {
        nom: nom,
        type: type,
        acteurPrincipal: acteurPrincipal,
        acteurSecondair: acteurSecondair,
        objectif: objectif,
        precondition: precondition,
        postcondition: postcondition,
        nominal: nominal,
        alternative: alternative,
        exception: exception
    };
};
var generateScenario = function (scenario) {
    return "\n        <ol>\n            ".concat(scenario.map(function (e) { return "<li>".concat(e, "</li>"); }), "\n        </ol>\n    ");
};
var generateTableHtml = function (t) {
    return "\n        <table class=\"tbl\">\n            <tr>\n                <td>Nom</td>\n                <td>".concat(t.nom, "</td>\n            </tr>\n            <tr>\n                <td>Type</td>\n                <td>").concat(t.type, "</td>\n            </tr>\n            <tr>\n                <td>Acteur principal</td>\n                <td>").concat(t.acteurPrincipal, "</td>\n            </tr>\n            <tr>\n                <td>Acteur secondair</td>\n                <td>").concat(t.acteurSecondair, "</td>\n            </tr>\n            <tr>\n                <td>Objectif</td>\n                <td>").concat(t.objectif, "</td>\n            </tr>\n            <tr>\n                <td>Precondition</td>\n                <td>").concat(t.precondition, "</td>\n            </tr>\n            <tr>\n                <td>Postcondition</td>\n                <td>").concat(t.postcondition, "</td>\n            </tr>\n            <tr>\n                <td>Scenario nominal</td>\n                <td>").concat(generateScenario(t.nominal), "</td>\n            </tr>\n            <tr>\n                <td>Scenario alternative</td>\n                <td>").concat(generateScenario(t.alternative), "</td>\n            </tr>\n            <tr>\n                <td>Scenario d'exception</td>\n                <td>").concat(generateScenario(t.exception), "</td>\n            </tr>\n        </table>\n    ");
};
var ScenarioLists = [
    newDescriptionTextuelle("Consulter Compte", "principal", "Admin", "", "Afficher une liste de comptes", "Le CU s'authentifié", "le system affiche une liste de comptes", [
        "l'admin clique sur comptes",
        "le system affiche une liste de comptes"
    ], [], [])
];
console.log(ScenarioLists.map(function (e) { return generateTableHtml(e); }));
if (dt) {
    dt.innerHTML = ScenarioLists.map(function (e) { return generateTableHtml(e); })[0];
}
