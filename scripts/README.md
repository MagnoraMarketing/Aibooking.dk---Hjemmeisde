# Sitemap Generator

Dette script genererer automatisk en sitemap.xml baseret på de sider der faktisk eksisterer i projektet.

## Sådan virker det

Scriptet scanner `src/pages/` mappen og finder alle `.tsx` filer. Den genererer derefter en sitemap.xml med:

- **Automatisk URL-mapping**: Hver sidefil mappes til en URL
- **Dynamisk lastmod dato**: Bruger filens sidste ændringsdato
- **Prioriteret rækkefølge**: Vigtige sider får højere prioritet
- **Kun eksisterende sider**: Sider der slettes fjernes automatisk fra sitemap

## Brug

### Automatisk (anbefalet)
Sitemap genereres automatisk ved hver build:

```bash
npm run build
```

### Manuelt
Generer sitemap uden at bygge:

```bash
npm run sitemap
```

## Tilføj nye sider

Når du opretter en ny side:

1. Opret filen i `src/pages/` (f.eks. `NewPage.tsx`)
2. Tilføj mapping i `scripts/generate-sitemap.js`:

```javascript
const routeMap = {
  // ... eksisterende sider
  'NewPage.tsx': '/new-page'
};
```

3. Tilføj prioritet (valgfrit):

```javascript
const priorityMap = {
  // ... eksisterende prioriteter
  '/new-page': 0.8
};
```

4. Kør `npm run sitemap` eller `npm run build`

## Konfiguration

### Domain
Skift domain i `scripts/generate-sitemap.js`:

```javascript
const DOMAIN = 'https://yourdomain.com';
```

### Prioriteter
- 1.0 = Forsiden (højeste prioritet)
- 0.9 = Vigtige sider (demo, email)
- 0.8 = Hovedsektioner (features, integrations)
- 0.7 = Undersider (healthcare, craftsman)
- 0.6 = Support sider (contact, about)

### Change Frequency
- `weekly` = Forsiden (opdateres ofte)
- `monthly` = Alle andre sider

## Output

Sitemap genereres i `public/sitemap.xml` og inkluderes automatisk i build.
