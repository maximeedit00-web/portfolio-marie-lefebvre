# Portfolio — Marie Lefebvre

Portfolio multi-pages (Astro 7 + Tailwind v4) avec **administration Decap CMS** pour
que la cliente modifie elle-même les textes, les vidéos et les avis, sans toucher au code.

## Commandes

```bash
npm install
npm run cms      # serveur d'admin en local (port 8081) — à laisser tourner
npm run dev      # site + admin sur http://localhost:4321
npm run build    # build de production (dist/)
```

## Administration (la cliente)

1. Lance `npm run cms` **puis** `npm run dev`.
2. Ouvre **http://localhost:4321/admin** et clique sur « Login » (aucun mot de passe en local).
3. Elle peut alors :
   - **Réglages** : nom, accroche, contacts, textes de l'accueil et de la page À propos.
   - **Vidéos** : ajouter / modifier / réordonner les vidéos (titre, catégorie, format,
     ID YouTube **ou** fichier vidéo, description, miniature).
   - **Avis** : ajouter / modifier les témoignages.

> En production, l'admin sera accessible sur `https://le-site/admin` après connexion
> (voir « Mise en ligne »).

## Où sont les contenus

| Fichier | Contenu |
|---|---|
| `content/settings.json` | Textes du site |
| `content/projects.json` | Vidéos / projets |
| `content/reviews.json` | Témoignages |
| `public/media/` | Images (miniatures) |
| `public/videos/` | Vidéos hébergées sur le site |

## Mise en ligne avec accès privé (recommandé : Netlify)

1. Pousser le projet sur **GitHub**.
2. Sur **Netlify** : « Add new site » → importer le dépôt (build `npm run build`, dossier `dist`).
3. Activer **Identity** puis **Git Gateway** (Site settings → Identity).
4. Dans Identity → **Invite users**, inviter **uniquement l'e-mail de la cliente**.
5. Elle se connecte sur `https://le-site/admin` avec son e-mail : elle édite, et le site
   se reconstruit automatiquement. Personne d'autre n'a accès.

## Structure

- `/` accueil · `/work` montage · `/work/[slug]` fiche vidéo · `/graphisme` · `/comm`
- `/about` · `/services` · `/avis` · `/contact` · `/admin`
