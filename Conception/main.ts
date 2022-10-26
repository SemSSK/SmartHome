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
    realise:string,
    consume:string
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
        realise:string,
        consume: string
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
            exception:exception,
            realise:realise,
            consume:consume
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
        [],
        "Habitant | propriétaire | Agent de sécurité",
        "Administrateur",
    ),
    newDescriptionTextuelle(
        "Consulter Camera",
        "Principal",
        "Propriétaire | habitant | Agent de sécurité",
        "",
        "pouvoire consulter live et historique",
        "le CU s'authetifié",
        "passage au CU consulter live",
        [
            "l'acteur clique sur consulter camera.",
            "le system affiche la liste des camera.",
            "l'acteur selection une camera.",
            "le system affiche une fenetre de choix entre live ou historique",
            "l'acteur clique sur live",
            "CU live"
        ],
        [
            "SN-5:l'acteur clique sur l'historique.",
            "SN-5:le system affiche une liste de video enregistrer."
        ],
        [],
        "Objet connecté",
        "Propriétaire | habitant | Agent de sécurité"
    ),
    newDescriptionTextuelle(
        "Enregistrer Information",
        "Principal",
        "Objet connecté",
        "",
        "notifier le systéme d'un evenement",
        "détection d'un évenement (selon le type d'objet connecté)",
        "l'habitant et le propriétaire est notifié de l'alerte",
        [
            "l'objet détect un evenement",
            "l'objet trait l'evenement et le transform on message ",
            "l'objet envoie le message d'enregistrement.",
            "le system recoie le message.",
            "e system enregistre le message."
        ],
        [],
        [],
        "Objet connecté | Agent de securité",
        "Propriétaire | habitant"
    ),
    newDescriptionTextuelle(
        "Envoyer Alerte",
        "Principal",
        "Objet connecté",
        "",
        "notifier l'habitant et le proprietaire d'une alerte",
        "détection d'un évenement d'alerte",
        "l'habitant et le propriétaire est notifié de l'alerte",
        [
            "l'objet détect un evenement",
            "l'objet trait l'evenement et le transform on message ",
            "l'objet envoie le message d'alerte.",
            "le system recoie le message.",
            "le system analyse la porté de l'alerte.",
            "le system notifie le propriétaire et l'habitant"
        ],
        [
            "SN-6:si il n y a pas d'habitant il notifie seulement le propriété"
        ],
        [],
        "Objet connecté | Agent de securité",
        "Propriétaire | habitant"
    ),
]

console.log(ScenarioLists.map(e=>generateTableHtml(e)));

dt.innerHTML = ScenarioLists.map(e=>generateTableHtml(e)).join('')!;