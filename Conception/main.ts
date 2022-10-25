const dt = document.getElementById("t1")!;

interface DescriptionTextuelle{
    nom: string,
    type: string,
    acteurPrincipal: string,
    acteurSecondair: string,
    objectif: string,
    precondition: string,
    postcondition: string,
    nominal: Array<string>,
    alternative: Array<string>,
    exception: Array<string>,
}

const newDescriptionTextuelle = (
        nom: string,
        type: string,
        acteurPrincipal: string,
        acteurSecondair: string,
        objectif: string,
        precondition: string,
        postcondition: string,
        nominal: Array<string>,
        alternative: Array<string>,
        exception: Array<string>,
    ) =>{
        return{
            nom:nom,
            type:type,
            acteurPrincipal:acteurPrincipal,
            acteurSecondair:acteurSecondair,
            objectif:objectif,
            precondition:precondition,
            postcondition:postcondition,
            nominal:nominal,
            alternative:alternative,
            exception:exception
        }
};

const generateScenario = (scenario:Array<string>) => {
    return `
        <ol>
            ${scenario.map(e=>`<li>${e}</li>`).join('')}
        </ol>
    `
}

const generateTableHtml = (t:DescriptionTextuelle) => {
    return `
        <h4>${t.nom}:</h4>
        <table class="tbl">
            <tr>
                <td>Nom</td>
                <td>${t.nom}</td>
            </tr>
            <tr>
                <td>Type</td>
                <td>${t.type}</td>
            </tr>
            <tr>
                <td>Acteur principal</td>
                <td>${t.acteurPrincipal}</td>
            </tr>
            <tr>
                <td>Acteur secondair</td>
                <td>${t.acteurSecondair}</td>
            </tr>
            <tr>
                <td>Objectif</td>
                <td>${t.objectif}</td>
            </tr>
            <tr>
                <td>Precondition</td>
                <td>${t.precondition}</td>
            </tr>
            <tr>
                <td>Postcondition</td>
                <td>${t.postcondition}</td>
            </tr>
            <tr>
                <td>Scenario nominal</td>
                <td>${generateScenario(t.nominal)}</td>
            </tr>
            <tr>
                <td>Scenario alternative</td>
                <td>${generateScenario(t.alternative)}</td>
            </tr>
            <tr>
                <td>Scenario d'exception</td>
                <td>${generateScenario(t.exception)}</td>
            </tr>
        </table>
    `
}

const ScenarioLists = [
    newDescriptionTextuelle(
        "Consulter Compte",
        "principal",
        "Admin",
        "",
        "Afficher une liste de comptes",
        "Le CU s'authentifié",
        "le system affiche une liste de comptes",
        [
            "l'admin clique sur comptes",
            "le system affiche une liste de comptes"
        ],
        [],
        []
    ),
    newDescriptionTextuelle(
        "Consulter Compte",
        "principal",
        "Admin",
        "",
        "Afficher une liste de comptes",
        "Le CU s'authentifié",
        "le system affiche une liste de comptes",
        [
            "l'admin clique sur comptes",
            "le system affiche une liste de comptes"
        ],
        [],
        []
    )
]

console.log(ScenarioLists.map(e=>generateTableHtml(e)));

dt.innerHTML = ScenarioLists.map(e=>generateTableHtml(e)).join('')!;