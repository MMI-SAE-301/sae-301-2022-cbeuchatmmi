export interface Montre {
    ecran?: string;
    bracelet?: string;
    boitier?: string;
}
export const colors = {
    "#282424": "Antracite",
    "#FFFFFF": "Blanc",
    "#C0C0C0": "Argent",
    "#D4AF37": "Or",
    "#B36700": "Bronze",
    "#B4918F": "Rose",

}
export const ecran = {
    "#000000": "Noir",
    "#FFFFFF": "Blanc",
    "#B40000": "Rouge",
    "#000E8B": "Bleu",
    "#00BF13": "Vert",
    "#7600EC": "Violet",
    "#FAFF00": "Jaune",

}

export const materiaux = [
    {
        value: "http://url/image/cuir",
        label: "Cuir",
    },

];

export const forme = [
    {
        label: "Rond",
        value: "Rond",
    },
    {
        label: "Carré",
        value: "Carre",
    },
]