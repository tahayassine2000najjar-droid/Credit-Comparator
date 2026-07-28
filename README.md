# 1. Nom du projet

**Nom du projet :** Credit Comparator

---

# 2. Présentation du projet

Ce projet est une application web qui permet de comparer les offres de crédit de différentes banques marocaines.

Il s'adresse principalement aux emprunteurs, aux particuliers et aux professionnels qui souhaitent choisir l'offre de crédit la plus avantageuse.

Son objectif principal est de faciliter la comparaison des taux d'intérêt, des mensualités et du coût total des crédits proposés par les banques.

---

# 3. Problématique

Le problème identifié est que les emprunteurs doivent consulter chaque banque individuellement pour comparer les offres de crédit, ce qui est long et complexe.

La solution proposée permet de visualiser toutes les offres sur une seule interface, de calculer automatiquement les mensualités et le coût total, et d'identifier l'offre la plus avantageuse.

---

# 4. Fonctionnalités principales

- Consulter les offres de crédit des banques marocaines (Attijari, CIH, Bank Populaire, BMCE)
- Calculer automatiquement la mensualité pour chaque offre
- Afficher le coût total du crédit
- Visualiser l'offre recommandée avec le taux le plus bas
- Interagir avec des cartes bancaires animées (effet flip)
- Simuler l'évolution d'un capital avec intérêts composés

---

# 5. Technologies utilisées

| Technologie | Utilisation dans le projet |
|-------------|----------------------------|
| React 19 | Développement de l'interface utilisateur interactive |
| Vite 8 | Serveur de développement et build du projet |
| JavaScript (ES Modules) | Logique métier et calculs financiers |
| CSS | Stylisation des composants et animations |
| GitHub | Versionnement et hébergement du code source |

---

# 6. Installation et lancement

## 6.1 Prérequis

- Node.js (version 18 ou supérieure)
- npm
- Git

---

## 6.2 Cloner le dépôt

```bash
git clone https://github.com/tahayassine2000najjar-droid/Credit-Comparator.git
```

---

## 6.3 Ouvrir le dossier

```bash
cd Credit-Comparator
```

---

## 6.4 Installer les dépendances

```bash
npm install
```

---

## 6.5 Variables d'environnement

Aucune variable d'environnement nécessaire pour ce projet.

---

## 6.6 Lancer le projet

```bash
npm run dev
```

---

## 6.7 Ouvrir le projet

Après le lancement :

```
http://localhost:5173
```

---

# 7. Captures d'écran

## Capture 1

### Titre

```
Page d'accueil avec les offres de crédit
```

### Image

```md
![Page d'accueil](public/screenshot-accueil.png)
```

### Explication

Cette capture montre la page principale avec les cartes bancaires interactives présentant les offres de crédit des quatre banques marocaines.

---

## Capture 2

### Titre

```
Visualiseur d'intérêts composés
```

### Image

```md
![Intérêts composés](public/screenshot-interets.png)
```

### Explication

Cette capture montre l'outil de simulation d'intérêts composés permettant de visualiser l'évolution d'un capital sur plusieurs années.

---

# 8. Contribution personnelle

Ma contribution principale a porté sur le développement complet de l'application : architecture des composants React, implémentation des algorithmes de calcul financier (mensualité amortissable, coût total, intérêts composés) et création de l'interface utilisateur avec les cartes bancaires animées.

---

# 9. Difficultés rencontrées

## Difficulté 1

### Problème rencontré

Calcul précis des mensualités avec la formule d'amortissement.

### Recherches / Tests

J'ai recherché la formule mathématique du calcul de mensualité pour un prêt à taux fixe et testé plusieurs implémentations.

### Solution

J'ai implémenté la formule standard d'amortissement : `M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)` où r est le taux mensuel et n le nombre de mensualités.

### Ce que j'ai appris

J'ai appris à convertir un taux annuel en taux mensuel et à appliquer correctement la formule mathématique en JavaScript.

### Texte final

J'ai rencontré le problème suivant : le calcul précis des mensualités de crédit avec la formule d'amortissement.

Pour comprendre l'origine du problème, j'ai recherché la formule mathématique standard et testé plusieurs implémentations.

J'ai résolu le problème en implémentant la formule de calcul de mensualité à taux fixe.

Cette difficulté m'a permis d'apprendre à convertir un taux annuel en taux mensuel et à manipuler des formules financières en JavaScript.

---

## Difficulté 2

### Problème rencontré

Création de l'effet de retournement (flip) des cartes bancaires.

### Recherches / Tests

J'ai testé plusieurs approches CSS avec les propriétés `perspective`, `rotateY` et `backface-visibility`.

### Solution

J'ai utilisé les transformations 3D CSS avec un checkbox caché pour déclencher le flip, combiné avec `perspective` sur le conteneur parent et `backface-visibility: hidden` sur les faces.

### Ce que j'ai appris

J'ai appris à utiliser les transformations 3D en CSS pour créer des animations de retournement sans JavaScript.

---

# 10. Améliorations possibles

- Rendre l'interface responsive pour les appareils mobiles
- Ajouter des graphiques pour visualiser l'évolution des remboursements
- Intégrer une API pour récupérer les taux en temps réel
- Déployer l'application sur Vercel ou Netlify

### Conclusion

Ces améliorations permettraient de rendre l'application plus accessible, plus complète et utilisable en situation réelle par les emprunteurs.

---

# Checklist finale

## Présentation

- [x] Le nom du projet est clair.
- [x] Le projet est présenté en 3 à 5 lignes.
- [x] Le public cible est identifié.
- [x] Le besoin est expliqué.
- [x] L'objectif est précisé.

## Fonctionnalités

- [x] 3 à 6 fonctionnalités.
- [x] Chaque fonctionnalité commence par un verbe.
- [x] Elles correspondent à des actions réelles.

## Technologies

- [x] Les technologies sont indiquées.
- [x] Leur rôle est expliqué.

## Installation

- [x] Les prérequis sont présents.
- [x] Le dépôt est correct.
- [x] Les commandes fonctionnent.
- [x] L'adresse locale est indiquée.
- [x] Aucune donnée sensible n'est publiée.

## Captures

- [x] Deux captures minimum.
- [x] Chaque capture possède un titre.
- [ ] Les images fonctionnent.

## Contribution

- [x] Ma contribution est précise.
- [x] Les tâches sont clairement décrites.
- [x] Je distingue mon travail de celui du groupe.

## Difficultés

- [x] Les difficultés sont expliquées.
- [x] Les recherches sont décrites.
- [x] Les solutions sont précisées.
- [x] Les apprentissages sont présentés.

## Améliorations

- [x] 2 à 4 améliorations.
- [x] Elles sont réalistes.
