# code de base pour TP (et future SAE 301)

- **Nom : BEUCHAT**
- **Prénom : Corentin**
- **URL maquette Figma: https://www.figma.com/file/hAzwugowPXYU7YNuHSf8Uc/SAE_301?node-id=1%3A3**
- **URL publique du site :**
- **URL projet Supabase : https://app.supabase.com/project/fgziuxaxxqsfjegwwsii**
  - [X] Avez-vous invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase ?

# Auto-évaluation

## R313 | Dev Back (Abdallah Makhoul : [AC 2404](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612670) et [AC 2402](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612669))

Vous avez rendu à la racine du projet :

- [X] Le modèle conceptuel de données (nom : [MCD.png](/MCD.png) ou [MCD.pdf](/MCD.pdf) [^1])
- [X] Et compléter le fichier [bdd.sql](/bdd.sql) détaillant le code pour la création des tables, vues et policies créées
- [X] Avez-vous bien invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase comme développeur ?

## R312 | Intégrer ([Pierre Pracht : AC 2401](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612668))

Pour les liens :
[vers des fichiers](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes#relative-links-and-image-paths-in-readme-files) ou page d'un commit sur Github.

Noté sur 40.

- [README](/README.md) bien rempli (0-2-4pts)
  - Ne cochez que ce que vous avez fait.
- Fonctionnalités "avancées" du site (0-2-4pts)
- Intégration du site (0-2-4-6pts)
- Code et Commit (0-2-4-6pts)
- Code HTML spécifiquement sémantique et accessible (0-1-2pts)

- [ ] usage de Classes utilitaires (1pt)
  - lien vers sa définition
  - lien vers son usage
- [X] Composants graphiques (0-1-2pts)
  - liens 
  - [Les chevrons](https://github.com/MMI-SAE-301/sae-301-2022-cbeuchatmmi/commit/2034e8b00c10d287c4a23ed32e3f32b4107d1c66)
  - [Bouton](https://github.com/MMI-SAE-301/sae-301-2022-cbeuchatmmi/commit/80d20988465760e27bd0ce9e0f192d026eb6f20a)
- Technique CSS (0-1-2pts)
  - Quelles techniques (Eg. Styles graphiques (répétés) tous ajoutés par CSS et/ou
    config. Tailwind (eg. before/after avec content, background...))
    - 
  - liens
- Mise en page CSS (0-1-2pts)
  - Quelles techniques (Grilles Flex...)
    - Flex
    - Grid
  - liens
  - [X] Mise en page fluide
- [X] Mobile First (0-1-2pts)
  - [X] Plusieurs tailles
    - Mobile first et à partir de lg le site s'adapte
- [X] Dark Mode (0-1-2pts)
  - [X] Simple usage de 'dark:' [dark-mode](https://github.com/MMI-SAE-301/sae-301-2022-cbeuchatmmi/commit/4c00d3ffa1ab3de7d7683469eeb6fe685cda9523)
  - [ ] Mise en place avec usage de custom property pour les couleurs. Ou usage de DaisyUI AVEC thèmes perso
    - liens
- "tailwin.config.js" (0-1-2pts)
  - [X] usage basique couleurs/fonts [Tailwindcss](https://github.com/MMI-SAE-301/sae-301-2022-cbeuchatmmi/commit/786a2d315191f2f8b5c214c10e4de59ca9924529)
  - [X] Comporte des données supplémentaires (utilisées !). Eg: "content-xxx", "bg-xxx", "grid-cols-xxx"... [Tailwindcss+] (/src/tailwind.config.js#L27))
    - liens
- Composants "accessibles" (0-1-2pts)
  - [X] textes "accessibles" (eg. 'sr-only') [sr-only](https://github.com/MMI-SAE-301/sae-301-2022-cbeuchatmmi/commit/fba112207e527674b49a4b46af9777688a42fa88)
  - [ ] Contenu accessible ET Usage de composants étudié pour accessibilité (Eg. HeadlessUI)

[^1]: Supprimez les mentions inutiles.
