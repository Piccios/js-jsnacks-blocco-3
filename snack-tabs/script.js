// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// {
//     "tab": ["Twitter", 'Facebook', "GitHub", "Gmail"],
//     "activeTab": 0
// }

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.


let browserTabs = [
    {
        tab: ["Facebook", "GitHub", "Gmail"],
        activeTab: 0
    },
    {
        tab: ["Twitter", 'Facebook', "GitHub", "Gmail"],
        activeTab: 2
    },
    {
        tab: ["LinkedIn", "Twitter", 'Facebook', "GitHub", "Gmail"],
        activeTab: 1
    },
    {
        tab: ["Instagram", "LinkedIn", "Twitter", 'Facebook', "GitHub", "Gmail"],
        activeTab: 0
    },
]

const socialNetworks = ["Facebook", "Twitter", "LinkedIn", "Instagram"];

/**
 *  removeSocialTabs
 * @param {*} browserTabs 
 * returns the browserTabs array
 */

function removeSocialTabs(browserTabs) {
    browserTabs.forEach(browser => {
        for (let i = 0; i < browser.tab.length; i++) {
            if (socialNetworks.includes(browser.tab[i])) {
                if (browser.activeTab === i) {
                    if (i === browser.tab.length - 1) {
                        browser.activeTab = i - 1;
                    }
                    else {
                        browser.activeTab = i;
                    }
                }
                browser.tab.splice(i, 1);
                i--;
            }
        }
    });
}

removeSocialTabs(browserTabs);
console.log(browserTabs);