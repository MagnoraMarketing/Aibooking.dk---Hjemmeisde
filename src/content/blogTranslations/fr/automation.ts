import type { BlogTranslations } from '../types';

export const automationFr: BlogTranslations = {
  'komplet-ai-automatisering-widget-telefon-booking': {
    title: `La réservation automatique par IA : intégration d’agenda, modifications et annulations`,
    excerpt: `Comment l’IA réserve directement dans votre agenda depuis le téléphone et le site, évite les doubles réservations, gère les reports et les annulations et réduit l’administratif autour de chaque rendez-vous.`,
    meta_title: `Réservation automatique par IA : agenda et modifications | AIBooking.dk`,
    meta_description: `Comment l’IA réserve directement dans votre agenda depuis le téléphone et le site, évite les doublons et gère reports, annulations et rappels.`,
    content: `
      <p>Une réservation est rarement une action unique. Le client appelle ou écrit, vous trouvez un créneau, vous le confirmez, vous faites un rappel, le client le déplace, et quelqu’un doit combler le trou. La <strong>réservation automatique par IA</strong> permet de gérer toute la chaîne sans qu’un collaborateur ait à intervenir – au téléphone, sur le site et par SMS.</p>
      <h2>Le cycle de vie d’une réservation – et ce que fait l’IA</h2>
      <div class="blog-table"><table><thead><tr><th>Étape</th><th>Aujourd’hui, à la main</th><th>Avec l’IA</th></tr></thead><tbody>
        <tr><td>Demande</td><td>Téléphone, e-mail, formulaire de contact</td><td>L’IA répond immédiatement au téléphone et dans le widget</td></tr>
        <tr><td>Trouver un créneau</td><td>Consulter l’agenda, proposer des horaires</td><td>Ne voit que les créneaux réellement libres et en propose deux ou trois</td></tr>
        <tr><td>Enregistrement</td><td>Saisir le nom, le numéro, la prestation</td><td>Inscrit directement dans l’agenda</td></tr>
        <tr><td>Confirmation</td><td>Envoyer un e-mail ou un SMS</td><td>SMS/e-mail envoyé automatiquement</td></tr>
        <tr><td>Rappel</td><td>Penser à appeler ou écrire</td><td>SMS et, si vous le souhaitez, un appel la veille</td></tr>
        <tr><td>Report et annulation</td><td>Nouvel appel, nouveau tour</td><td>Le client appelle ou écrit ; l’IA déplace le rendez-vous</td></tr>
        <tr><td>Trou dans l’agenda</td><td>Reste souvent vide</td><td>Peut être proposé au client suivant sur la liste d’attente</td></tr>
      </tbody></table></div>
      <h2>L’intégration d’agenda : elle doit fonctionner</h2>
      <p>La réservation par IA dépend entièrement de l’intégration. Elle doit lire et écrire dans l’agenda que vous utilisez déjà – Google Agenda, Outlook/Microsoft 365 ou un logiciel métier – pour que vous n’ayez pas deux agendas à suivre.</p>
      <ul>
        <li><strong>Aucune double réservation :</strong> l’IA vérifie la disponibilité au moment où elle réserve, et pas seulement quand elle a proposé l’horaire.</li>
        <li><strong>Durée par prestation :</strong> une consultation dure 30 minutes, un soin 60. L’IA doit le savoir.</li>
        <li><strong>Ressources :</strong> le bon praticien, le bon technicien ou la bonne salle.</li>
        <li><strong>Battements et trajets :</strong> du temps entre les rendez-vous, ou le temps de trajet pour les artisans.</li>
        <li><strong>Règles :</strong> par exemple « nouveaux clients uniquement le matin » ou « garder des créneaux d’urgence libres jusqu’à 10 h ».</li>
      </ul>
      <h2>Modifications et annulations</h2>
      <p>C’est là que l’on perd le plus de temps à la main. Avec l’IA, le client peut appeler ou écrire « je ne peux pas jeudi », et l’IA retrouve le rendez-vous, propose un nouvel horaire et met à jour l’agenda. Vous pouvez fixer des règles comme « les annulations à moins de 24 heures sont considérées comme tardives », et l’IA peut informer le client de votre politique d’annulation. Associé à des <a href="/blog/outbound-ai-opkald-paamindelser">appels de rappel la veille</a>, vous repérez les annulations à temps pour attribuer le créneau à quelqu’un d’autre.</p>
      <div class="blog-cta"><strong>Laissez l’IA réserver pour vous</strong><p>Connectez votre agenda, renvoyez votre numéro et regardez les réservations arriver pendant 7 jours – gratuitement et sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/demo">Réserver une démo</a></div></div>
      <h2>Un moteur de réservation, plusieurs canaux</h2>
      <p>Les clients choisissent leur façon de vous contacter. Certains appellent, d’autres cliquent sur le site, et beaucoup font les deux. Quand la même IA est derrière le <a href="/ind-og-udgaaende-opkald">téléphone</a> et le <a href="/widget">widget du site</a>, le client obtient les mêmes réponses et les mêmes créneaux libres – et vous voyez toutes les réservations et conversations au même endroit dans le tableau de bord.</p>
      <h2>Combien d’administratif disparaît ?</h2>
      <p>Comptez pendant une semaine : combien de minutes passent à prendre des réservations, déplacer des rendez-vous, envoyer des confirmations et relancer les absents ? Pour beaucoup de petites entreprises, c’est une à deux heures par jour. Découvrez comment le traduire en argent dans le <a href="/blog/roi-ai-automatisering-virksomheder">guide sur le ROI de l’automatisation par IA</a>.</p>
      <h2>Exemples par secteur</h2>
      <ul>
        <li><strong>Cabinets et salons :</strong> réservation, report et rappels ; voir <a href="/blog/totalloesning-klinik">la réservation par IA pour cabinets et salons</a>.</li>
        <li><strong>Artisans :</strong> visites et interventions dans l’agenda du bon technicien ; voir <a href="/blog/ai-telefonassistent-haandvaerker">l’IA pour les artisans</a>.</li>
        <li><strong>Bureaux :</strong> premiers rendez-vous avec un lien Teams ou Zoom ; voir <a href="/blog/ai-telefonassistent-kontor-administration">l’IA pour les bureaux</a>.</li>
        <li><strong>Boutiques en ligne :</strong> conseil, essayage ou retrait ; voir <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">l’IA pour boutique en ligne</a>.</li>
      </ul>
      <p>Découvrez les systèmes que vous pouvez connecter sur la page <a href="/integrationer">intégrations</a>.</p>`,
    faq: [
      { question: `Dans quels agendas l’IA peut-elle réserver ?`, answer: `Google Agenda, Outlook/Microsoft 365 et les logiciels métier courants. Consultez la liste à jour sur la page des intégrations.` },
      { question: `Comment l’IA évite-t-elle les doubles réservations ?`, answer: `Elle vérifie la disponibilité dans l’agenda au moment précis où la réservation est créée, et ne voit que les créneaux réellement libres.` },
      { question: `Les clients peuvent-ils déplacer ou annuler via l’IA ?`, answer: `Oui. Le client peut appeler ou écrire, et l’IA retrouve le rendez-vous, propose un nouvel horaire et met à jour l’agenda.` },
    ],
  },
  'roi-ai-automatisering-virksomheder': {
    title: `Le ROI de l’automatisation par IA : un calcul à faire avec vos propres chiffres`,
    excerpt: `Du temps gagné, des appels qui ne sont plus perdus et moins de rendez-vous manqués. Un modèle transparent, étape par étape, pour calculer si un réceptionniste et un widget IA sont rentables – sans statistiques inventées.`,
    meta_title: `ROI de l’automatisation par IA : calculez avec vos chiffres | AIBooking.dk`,
    meta_description: `Un modèle transparent en quatre postes pour calculer si un réceptionniste et un widget IA sont rentables : temps libéré, appels perdus, absences et coût.`,
    content: `
      <p>Beaucoup d’articles sur l’IA promettent « jusqu’à 80 % d’économies » sans montrer le calcul. Pas nous. Vous obtenez à la place un modèle en quatre postes à remplir avec vos propres chiffres en un quart d’heure. Si le résultat est négatif, l’IA n’est pas un bon investissement pour vous en ce moment – et c’est aussi une réponse utile.</p>
      <h2>Poste 1 : le temps libéré</h2>
      <p>Pendant une semaine normale, comptez combien de minutes passent à répondre au téléphone, à répondre aux mêmes questions, à chercher des créneaux et à envoyer des confirmations.</p>
      <div class="blog-callout"><strong>Formule :</strong> minutes par semaine ÷ 60 × coût horaire de la personne qui le fait aujourd’hui × 4,3 semaines = valeur par mois</div>
      <p>Utilisez le coût horaire réel, charges comprises. Ne comptez que le temps que l’IA peut réellement reprendre – en général les réservations et les questions récurrentes, pas le conseil.</p>
      <h2>Poste 2 : les appels et demandes perdus aujourd’hui</h2>
      <p>Combien d’appels restent sans réponse, et combien de ces personnes ne recontactez-vous jamais ? Combien de formulaires de contact ne deviennent jamais des clients parce que la réponse est arrivée trop tard ?</p>
      <div class="blog-callout"><strong>Formule :</strong> demandes perdues par mois × part qui serait devenue cliente × valeur d’un client (marge sur coûts variables, pas chiffre d’affaires)</div>
      <p>Soyez prudent avec la part. Tous ceux qui appellent n’auraient pas acheté.</p>
      <h2>Poste 3 : moins de rendez-vous manqués</h2>
      <div class="blog-callout"><strong>Formule :</strong> rendez-vous manqués par mois × part repérée par les rappels et réattribuée × valeur d’un créneau</div>
      <p>Uniquement pertinent si vous travaillez sur rendez-vous avec un agenda. Pour en savoir plus, lisez <a href="/blog/outbound-ai-opkald-paamindelser">les appels de rappel automatiques</a>.</p>
      <h2>Poste 4 : le coût</h2>
      <p>L’abonnement mensuel, d’éventuelles minutes supplémentaires et la mise en place étalée sur 12 mois, par exemple. Chez Aibooking.dk, c’est 134 €, 335 € ou 804 € par mois selon le temps de conversation ; la mise en place est facultative. Voir <a href="/blog/hvad-koster-en-ai-receptionist">combien coûte un réceptionniste IA</a>.</p>
      <div class="blog-cta"><strong>Laissez l’IA réserver pour vous</strong><p>Connectez votre agenda, renvoyez votre numéro et regardez les réservations arriver pendant 7 jours – gratuitement et sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/demo">Réserver une démo</a></div></div>
      <h2>Un exemple chiffré (chiffres illustratifs)</h2>
      <p>Un cabinet de kinésithérapie avec trois praticiens :</p>
      <div class="blog-table"><table><thead><tr><th>Poste</th><th>Hypothèse</th><th>Par mois</th></tr></thead><tbody>
        <tr><td>Temps libéré</td><td>4 h/semaine × 40 €/h × 4,3</td><td>688 €</td></tr>
        <tr><td>Appels perdus</td><td>20 appels × 25 % × 54 € de marge</td><td>270 €</td></tr>
        <tr><td>Rendez-vous manqués</td><td>8 absences × 40 % réattribuées × 67 €</td><td>214 €</td></tr>
        <tr><td>Coût</td><td>Professional</td><td>−335 €</td></tr>
        <tr><td><strong>Net</strong></td><td></td><td><strong>837 €</strong></td></tr>
      </tbody></table></div>
      <p>Les chiffres sont illustratifs – ils n’ont pas été mesurés chez un client en particulier. L’important est la méthode : remplacez chaque hypothèse par votre propre chiffre.</p>
      <h2>Ce que le calcul ne mesure pas</h2>
      <ul>
        <li><strong>La concentration :</strong> moins d’interruptions, c’est un meilleur travail, mais c’est difficile à chiffrer.</li>
        <li><strong>L’expérience client :</strong> des réponses en quelques secondes plutôt que le lendemain.</li>
        <li><strong>La connaissance :</strong> les transcriptions montrent ce que les clients demandent vraiment.</li>
        <li><strong>Le risque :</strong> une IA mal configurée peut aussi faire perdre des clients. Donc : testez, lisez les transcriptions et ajustez.</li>
      </ul>
      <h2>Mesurez-le pendant l’essai</h2>
      <p>Le meilleur calcul de ROI repose sur des données réelles. Pendant l’essai gratuit, vous voyez dans le tableau de bord les appels pris, les réservations et la durée des appels, et vous pouvez les utiliser à la place des hypothèses. Découvrez comment démarrer dans le <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">guide étape par étape</a>.</p>`,
    faq: [
      { question: `En combien de temps un réceptionniste IA est-il rentabilisé ?`, answer: `Cela dépend du nombre d’appels que vous perdez aujourd’hui et de la valeur d’un client. Utilisez le modèle de l’article avec vos propres chiffres, puis mesurez les vrais résultats pendant l’essai gratuit.` },
    ],
  },
  'kom-i-gang-ai-automatisering-trin-for-trin': {
    title: `Démarrer avec un réceptionniste IA : choisir, configurer et tester en 7 étapes`,
    excerpt: `Du « faut-il se lancer ? » à une IA qui prend de vrais appels en moins d’une semaine. Sept étapes concrètes – y compris le document de connaissances, les appels de test et ce qu’il faut vérifier la première semaine.`,
    meta_title: `Démarrer avec un réceptionniste IA en 7 étapes | AIBooking.dk`,
    meta_description: `Sept étapes concrètes, du choix de la solution à une IA qui prend de vrais appels : document de connaissances, accueil, agenda, appels de test et bilan.`,
    content: `
      <p>La plupart des projets d’IA échouent parce qu’ils démarrent trop large. Ce qui fonctionne, c’est l’inverse : un canal, un objectif clair, des données réelles et une semaine d’ajustements. Voici les sept étapes que nous suivons nous-mêmes quand une nouvelle entreprise démarre.</p>
      <h2>Étape 1 : choisir une seule tâche</h2>
      <p>Commencez par ce qui fait le plus mal. Pour la plupart des entreprises, ce sont les appels manqués en dehors des heures d’ouverture ou quand la ligne est occupée. Attendez pour les appels sortants et l’intégration e-commerce que la première tâche fonctionne.</p>
      <h2>Étape 2 : rédiger le document de connaissances</h2>
      <p>L’IA ne sait que ce que vous lui dites. Rédigez sur une page :</p>
      <ul>
        <li>Les prestations avec leur durée et leur prix (ou ce dont dépend le prix).</li>
        <li>Les horaires, l’adresse, le stationnement.</li>
        <li>Les dix questions les plus fréquentes des clients – avec vos réponses.</li>
        <li>Ce que l’IA ne doit <strong>pas</strong> répondre ni promettre.</li>
        <li>Quand transférer, et à qui. Voir <a href="/blog/ai-receptionist-viderestilling-til-menneske">les règles de transfert</a>.</li>
      </ul>
      <h2>Étape 3 : rédiger le message d’accueil</h2>
      <p>Court, aimable et honnête : « Vous êtes en ligne avec l’assistant numérique de [entreprise]. Cet appel est enregistré. Comment puis-je vous aider ? » Vous respectez ainsi l’obligation d’indiquer qu’il s’agit d’une IA et que l’appel est enregistré. Voir <a href="/blog/ai-widget-gdpr-danske-virksomheder">RGPD et règlement européen sur l’IA</a>.</p>
      <h2>Étape 4 : connecter l’agenda</h2>
      <p>Connectez Google Agenda, Outlook ou votre logiciel métier, et définissez la durée de chaque prestation et les éventuels battements. Vérifiez que l’IA ne voit que les créneaux libres.</p>
      <div class="blog-cta"><strong>Laissez l’IA réserver pour vous</strong><p>Connectez votre agenda, renvoyez votre numéro et regardez les réservations arriver pendant 7 jours – gratuitement et sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/demo">Réserver une démo</a></div></div>
      <h2>Étape 5 : appeler vous-même – dix fois</h2>
      <p>Avant les clients, appelez vous-même et demandez à vos collègues d’appeler :</p>
      <ol>
        <li>Une réservation classique.</li>
        <li>Un report et une annulation.</li>
        <li>Les trois questions les plus fréquentes.</li>
        <li>Une question à laquelle l’IA n’a pas de réponse.</li>
        <li>Un cas urgent.</li>
        <li>Un client mécontent.</li>
        <li>Un client qui veut parler à une personne.</li>
        <li>Un collègue avec un autre accent.</li>
      </ol>
      <h2>Étape 6 : renvoyer les appels – progressivement</h2>
      <p>Commencez par le renvoi en dehors des heures d’ouverture ou quand la ligne est occupée. Vous gardez votre numéro, et votre équipe continue de répondre quand elle le peut. Élargissez quand vous êtes en confiance.</p>
      <h2>Étape 7 : lire les transcriptions la première semaine</h2>
      <p>L’étape la plus importante. Lisez chaque conversation les premiers jours et demandez-vous : a-t-elle compris la demande ? A-t-elle bien répondu ? A-t-elle transféré quand il le fallait ? Complétez le document de connaissances chaque fois que vous trouvez une lacune. Au bout d’une semaine, la plupart sont comblées.</p>
      <h2>Comment choisir une solution ?</h2>
      <p>Avant l’étape 1, il faut choisir un prestataire. Utilisez les neuf critères de <a href="/blog/ai-telefonpasning-dansk-ai-receptionist">la permanence téléphonique IA : que faut-il exiger</a>, écoutez <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">une vraie voix IA</a> et comparez les prix dans <a href="/blog/hvad-koster-en-ai-receptionist">combien coûte un réceptionniste IA ?</a>. Chez Aibooking.dk, vous pouvez tout faire vous-même pendant un essai gratuit, ou acheter la mise en place : nous réalisons alors les étapes 2 à 6 avec vous lors d’une séance d’onboarding.</p>`,
    faq: [
      { question: `Combien de temps faut-il pour démarrer ?`, answer: `En général moins d’une semaine entre la première conversation et une IA qui prend de vrais appels. Le renvoi lui-même prend quelques minutes.` },
      { question: `Ai-je besoin d’aide pour la mise en place ?`, answer: `Non, vous pouvez le faire vous-même. La mise en place et l’onboarding peuvent être achetés en paiement unique si vous souhaitez être accompagné.` },
    ],
  },
  'totalloesning-klinik': {
    title: `La réservation par IA pour cabinets et salons : téléphone, réservation en ligne et rappels`,
    excerpt: `Cabinets et salons partagent le même problème : le téléphone sonne pendant les soins. Comment l’IA prend les appels et les réservations en ligne, rappelle les clients la veille et traite les données de santé avec soin.`,
    meta_title: `La réservation par IA pour cabinets et salons | AIBooking.dk`,
    meta_description: `Comment l’IA prend les appels et réservations en ligne des cabinets et salons, rappelle la veille et protège les données de santé.`,
    content: `
      <p>Une dentiste, un kinésithérapeute, une coiffeuse et une prothésiste ongulaire ont un point commun : quand ils travaillent, ils ne peuvent pas répondre au téléphone. Et quand ils le font, ils interrompent le client installé devant eux. La réservation par IA règle ce problème en prenant à la fois les appels et les réservations sur le site – et en veillant à ce que les rendez-vous réservés soient vraiment honorés.</p>
      <h2>Trois canaux, un agenda</h2>
      <ul>
        <li><strong>Téléphone :</strong> l’IA prend les appels pendant les soins, à l’heure du déjeuner et après la fermeture, et réserve directement dans l’agenda. Voir <a href="/blog/ai-indgaaende-opkald">l’IA pour les appels entrants</a>.</li>
        <li><strong>Site web :</strong> un widget de chat et vocal répond aux questions sur les soins et les tarifs et réserve pendant que le client est sur la page – même à 22 h. Voir <a href="/widget">le widget IA</a>.</li>
        <li><strong>Rappels :</strong> un SMS à la réservation et un court appel la veille, pendant lequel le client peut déplacer son rendez-vous. Voir <a href="/blog/outbound-ai-opkald-paamindelser">les appels de rappel automatiques</a>.</li>
      </ul>
      <h2>Cabinets : nouveaux patients et patients suivis</h2>
      <p>Les cabinets ont généralement des règles différentes pour les nouveaux patients et les patients suivis, des soins de durées différentes et des praticiens avec leur propre agenda. L’IA pose les questions dont le cabinet a besoin – nouveau ou déjà suivi, quel praticien, quel type de rendez-vous – et réserve la bonne durée avec le bon praticien.</p>
      <div class="blog-callout"><strong>Données de santé :</strong> l’IA ne doit pas donner d’avis médical, ni poser de questions sur les symptômes au-delà de ce qui est nécessaire pour choisir le bon type de rendez-vous. En cas de symptômes aigus, elle doit orienter vers le médecin de garde ou le 112. Les rappels ne doivent pas mentionner la nature du soin. Voir <a href="/blog/ai-widget-gdpr-danske-virksomheder">RGPD et règlement européen sur l’IA</a>.</div>
      <h2>Salons : beaucoup de réservations courtes</h2>
      <p>Un salon de coiffure ou un institut de beauté a beaucoup de rendez-vous courts, des clients fidèles et une forte proportion de réservations déplacées. L’IA apporte le plus à trois endroits : le téléphone est pris pendant les coupes, les clients peuvent réserver et déplacer leurs rendez-vous le soir, et les trous dans l’agenda peuvent être proposés aux clients en liste d’attente.</p>
      <div class="blog-cta"><strong>Laissez l’IA réserver pour vous</strong><p>Connectez votre agenda, renvoyez votre numéro et regardez les réservations arriver pendant 7 jours – gratuitement et sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/demo">Réserver une démo</a></div></div>
      <h2>Les absences : c’est là qu’est l’argent</h2>
      <p>Pour un cabinet, un rendez-vous manqué est un créneau de soin qui ne peut plus être vendu. La combinaison d’un SMS à la réservation et d’un appel la veille permet de repérer à temps de nombreuses annulations. Mesurez vos propres absences avant et après, et calculez l’effet avec le modèle du <a href="/blog/roi-ai-automatisering-virksomheder">guide sur le ROI</a>.</p>
      <h2>Ce qu’il faut</h2>
      <ol>
        <li>Connecter l’agenda du cabinet ou du salon.</li>
        <li>Décrire les soins avec leur durée et leur prix.</li>
        <li>Rédiger les règles pour les nouveaux clients, les demandes urgentes et ce à quoi l’IA ne doit pas répondre.</li>
        <li>Renvoyer le téléphone quand la ligne est occupée ou après la fermeture.</li>
        <li>Ajouter le widget au site.</li>
      </ol>
      <p>Pour en savoir plus, consultez <a href="/klinik">l’IA pour les cabinets</a> ou lisez <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">la réservation automatique par IA</a>.</p>`,
    faq: [
      { question: `L’IA donne-t-elle des avis médicaux ?`, answer: `Non, et elle ne doit pas le faire. Elle réserve le bon type de rendez-vous et, en cas de symptômes aigus, oriente vers le médecin de garde ou le 112.` },
      { question: `Les clients peuvent-ils réserver sur le site le soir ?`, answer: `Oui. Le widget IA du site répond et réserve à toute heure dans les créneaux libres de l’agenda.` },
    ],
  },
  'ai-kundeservice': {
    title: `Le service client par IA : des réponses plus rapides sans perdre la touche humaine`,
    excerpt: `Ce que le service client par IA fait bien, où il doit s’arrêter et comment répartir le travail entre l’IA et votre équipe au téléphone, dans le chat et par e-mail.`,
    meta_title: `Service client par IA : plus rapide, toujours humain | AIBooking.dk`,
    meta_description: `Ce que le service client par IA fait bien, où il doit s’arrêter et un modèle concret pour répartir le travail entre l’IA et votre équipe.`,
    content: `
      <p>C’est souvent au service client que les entreprises ressentent la pression en premier : les mêmes questions encore et encore, des files d’attente aux heures de pointe et des e-mails traités le lendemain. Le <strong>service client par IA</strong> peut prendre en charge une grande partie du travail prévisible – à condition d’être configuré pour ce qu’il sait bien faire.</p>
      <h2>Ce que l’IA fait bien au service client</h2>
      <ul>
        <li><strong>Les questions récurrentes :</strong> horaires, prix, livraison, retours, adresse.</li>
        <li><strong>Les recherches :</strong> statut de commande, créneaux libres, stock – quand elle est connectée aux systèmes.</li>
        <li><strong>Les réservations et modifications</strong> dans l’agenda.</li>
        <li><strong>Le tri :</strong> comprendre la demande et l’envoyer à la bonne personne avec un résumé.</li>
        <li><strong>Le volume :</strong> de nombreuses conversations en même temps sans file d’attente, y compris en dehors des heures d’ouverture.</li>
      </ul>
      <h2>Où l’IA doit s’arrêter</h2>
      <ul>
        <li>Les réclamations et les clients mécontents.</li>
        <li>Les cas qui demandent du discernement ou une exception aux règles.</li>
        <li>Les compensations, les remboursements hors règles standard et les négociations.</li>
        <li>Quand le client demande à parler à une personne.</li>
      </ul>
      <p>Le meilleur service client par IA est celui qui reconnaît vite qu’il ne doit pas traiter un cas et le transmet sans que le client ait à se répéter. Voir <a href="/blog/ai-receptionist-viderestilling-til-menneske">quand transférer à un humain</a>.</p>
      <h2>Répartir le travail : un modèle concret</h2>
      <div class="blog-table"><table><thead><tr><th>Demande</th><th>IA</th><th>Équipe</th></tr></thead><tbody>
        <tr><td>« Quand êtes-vous ouverts ? »</td><td>Répond</td><td>–</td></tr>
        <tr><td>« Où est mon colis ? »</td><td>Vérifie et répond</td><td>–</td></tr>
        <tr><td>« Puis-je avoir un rendez-vous ? »</td><td>Réserve</td><td>–</td></tr>
        <tr><td>« L’article est cassé »</td><td>Recueille les informations</td><td>Prend la décision</td></tr>
        <tr><td>« Je ne suis pas satisfait »</td><td>Transfère avec un résumé</td><td>Reprend la conversation</td></tr>
      </tbody></table></div>
      <div class="blog-cta"><strong>Laissez l’IA réserver pour vous</strong><p>Connectez votre agenda, renvoyez votre numéro et regardez les réservations arriver pendant 7 jours – gratuitement et sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/demo">Réserver une démo</a></div></div>
      <h2>Téléphone, chat et e-mail : les mêmes réponses partout</h2>
      <p>Les clients changent de canal. Ils commencent dans le chat et appellent s’ils n’obtiennent pas de réponse. Quand la même IA est derrière le <a href="/ind-og-udgaaende-opkald">téléphone</a> et le <a href="/widget">widget de chat et vocal du site</a>, elle donne les mêmes réponses à partir des mêmes connaissances. C’est mieux pour le client et plus simple à maintenir, car vous ne mettez à jour les prix et les règles qu’à un seul endroit.</p>
      <h2>Mesurer la qualité – pas seulement le volume</h2>
      <ul>
        <li><strong>Taux de résolution :</strong> combien de demandes l’IA résout sans transfert.</li>
        <li><strong>Transferts pertinents :</strong> les bons cas ont-ils été transmis ?</li>
        <li><strong>Mauvaises réponses :</strong> lisez un échantillon de transcriptions chaque semaine.</li>
        <li><strong>Délai de réponse</strong> sur les cas repris par l’équipe.</li>
      </ul>
      <p>Vous gérez une boutique en ligne ? Lisez <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">l’IA pour boutique en ligne</a>. Pour l’idée plus large d’un « collègue numérique », lisez <a href="/blog/ai-medarbejder">l’employé IA</a>.</p>`,
    faq: [
      { question: `L’IA peut-elle remplacer le service client ?`, answer: `Elle peut prendre en charge les demandes prévisibles, mais les réclamations, les décisions qui demandent du discernement et les conversations difficiles doivent rester entre les mains de personnes. Le mieux est de répartir le travail.` },
    ],
  },
  'ai-medarbejder': {
    title: `Un employé IA : ce qu’un collègue numérique peut prendre en charge – et ce qu’il ne peut pas`,
    excerpt: `Un « employé IA » n’est pas une personne, mais il peut décharger votre équipe de types de tâches entiers. Une fiche de poste pour un collègue numérique, comment l’intégrer et comment laisser la responsabilité aux humains.`,
    meta_title: `Employé IA : ce que peut faire un collègue numérique | AIBooking.dk`,
    meta_description: `Une fiche de poste pour un employé IA : ce qu’un collègue numérique peut prendre en charge, ce qu’il ne peut pas, et comment l’intégrer comme une recrue.`,
    content: `
      <p>Le terme <strong>employé IA</strong> désigne une IA qui prend en charge des tâches définies pour le compte d’une entreprise – en général répondre au téléphone, répondre sur le site et réserver. L’image est utile, car elle vous oblige à penser comme un employeur : quel est le poste ? Que peut-il décider ? Qui est son responsable ?</p>
      <h2>Une fiche de poste pour un collègue numérique</h2>
      <div class="blog-callout"><strong>Poste :</strong> réceptionniste numérique (temps partiel : soirs, week-ends et quand la ligne est occupée)<br><strong>Missions :</strong> répondre aux appels et aux chats, répondre aux questions récurrentes, réserver et déplacer des rendez-vous, envoyer des confirmations, passer des appels de rappel la veille<br><strong>Ne doit pas :</strong> promettre des prix hors grille tarifaire, traiter les réclamations, donner des conseils professionnels<br><strong>Rend compte à :</strong> la responsable administrative, qui lit les résumés chaque jour<br><strong>Transfère à :</strong> la ligne d’astreinte pour les urgences ; un message à la personne responsable pour tout le reste</div>
      <p>Rédigez-en une pour votre propre entreprise. C’est le meilleur point de départ pour la configuration.</p>
      <h2>Ce qu’un employé IA peut prendre en charge</h2>
      <ul>
        <li><strong>L’accueil :</strong> recevoir les appels et les transférer. Voir <a href="/blog/ai-reception-virtuel-receptionist">qu’est-ce qu’un réceptionniste IA ?</a></li>
        <li><strong>La réservation :</strong> toute la chaîne, de la demande au rappel. Voir <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">la réservation automatique par IA</a>.</li>
        <li><strong>Le service client de premier niveau</strong> au téléphone et sur le site.</li>
        <li><strong>Le suivi :</strong> rappels et confirmations.</li>
      </ul>
      <h2>Ce qu’il ne peut pas faire</h2>
      <ul>
        <li><strong>Assumer la responsabilité.</strong> L’entreprise reste garante de ce que dit l’IA.</li>
        <li><strong>Faire preuve de discernement dans des situations nouvelles</strong> pour lesquelles il n’a pas reçu d’instructions.</li>
        <li><strong>Construire des relations</strong> comme le fait un salarié permanent.</li>
        <li><strong>Apprendre tout seul</strong> sans que quelqu’un corrige ses instructions.</li>
      </ul>
      <div class="blog-cta"><strong>Laissez l’IA réserver pour vous</strong><p>Connectez votre agenda, renvoyez votre numéro et regardez les réservations arriver pendant 7 jours – gratuitement et sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/demo">Réserver une démo</a></div></div>
      <h2>L’intégration : comme pour un nouveau salarié</h2>
      <ol>
        <li><strong>Présentation :</strong> prestations, prix, règles et ton – par écrit.</li>
        <li><strong>Période d’essai :</strong> commencez par les soirs et les week-ends.</li>
        <li><strong>Retours :</strong> lisez les résumés chaque jour la première semaine et corrigez les instructions.</li>
        <li><strong>Élargissement :</strong> confiez-lui plus de tâches une fois qu’il maîtrise les premières.</li>
      </ol>
      <p>Retrouvez les étapes concrètes dans <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">démarrer en 7 étapes</a>.</p>
      <h2>Combien coûte un employé IA ?</h2>
      <p>Chez Aibooking.dk, à partir de 134 € par mois pour 150 minutes de conversation. Il ne prend pas de congés et peut traiter de nombreux appels en même temps, mais il ne remplace pas le discernement d’un collaborateur qualifié. Voir <a href="/blog/hvad-koster-en-ai-receptionist">les prix et le calcul</a> et <a href="/blog/ai-receptionist-vs-telefonpasning">la comparaison avec une permanence téléphonique humaine</a>.</p>`,
    faq: [
      { question: `Qu’est-ce qu’un employé IA ?`, answer: `Une IA qui prend en charge des tâches définies pour l’entreprise, comme répondre au téléphone, répondre sur le site et réserver des rendez-vous – selon des règles fixées par l’entreprise elle-même.` },
    ],
  },
  'ai-i-danmark': {
    title: `L’IA au Danemark : comment les entreprises danoises utilisent l’IA en 2026`,
    excerpt: `Le Danemark compte la plus forte proportion d’entreprises utilisant l’IA dans l’UE. Ce que cela signifie concrètement pour les petites et moyennes entreprises, où l’IA est rentable en premier et ce qu’une bonne solution d’IA doit offrir.`,
    meta_title: `L’IA au Danemark : comment les entreprises l’utilisent | AIBooking.dk`,
    meta_description: `Le Danemark mène l’UE dans l’usage de l’IA en entreprise. Par où commencent les PME, pourquoi la relation client paie d’abord et que choisir.`,
    content: `
      <p>Les entreprises danoises comptent parmi les plus rapides d’Europe à adopter l’IA. Selon Eurostat, environ 42 % des entreprises danoises d’au moins 10 salariés utilisaient l’IA en 2025 – la plus forte proportion de l’UE, où la moyenne tournait autour de 20 %. Mais « utiliser l’IA » recouvre aussi bien un salarié qui rédige des e-mails avec un chatbot que des processus entièrement automatisés.</p>
      <h2>Par où commencent généralement les PME</h2>
      <ol>
        <li><strong>Textes et documents :</strong> e-mails, publications, comptes rendus et traductions. Un seuil d’entrée bas, mais le gain dépend de chaque salarié.</li>
        <li><strong>Relation client :</strong> l’IA sur le site et au téléphone. C’est là qu’une grande partie des gains mesurables se trouve, car il s’agit d’appels et de demandes qui seraient sinon perdus.</li>
        <li><strong>Administration :</strong> réservations, rappels, relances de factures.</li>
        <li><strong>Analyse :</strong> ce que demandent les clients et où les processus se grippent.</li>
      </ol>
      <h2>Pourquoi la relation client est souvent rentable en premier</h2>
      <p>Une IA qui répond au téléphone ou sur le site se mesure directement : demandes traitées, réservations et temps gagné. Il est donc plus facile de voir si l’investissement fonctionne qu’avec des outils d’IA généralistes. Voir <a href="/blog/roi-ai-automatisering-virksomheder">le calcul du ROI</a>.</p>
      <h2>Ce qu’une bonne solution d’IA doit offrir</h2>
      <ul>
        <li><strong>La langue de vos clients, à l’oral comme à l’écrit</strong> – y compris les noms, les adresses et les accents. Voir <a href="/blog/ai-telefonassistent-dansk-sprog">la reconnaissance vocale</a>.</li>
        <li><strong>Des données dans l’UE et un accord de sous-traitance.</strong></li>
        <li><strong>La conformité au règlement européen sur l’IA</strong>, y compris le fait que l’IA indique qu’elle est une IA. Voir <a href="/blog/ai-widget-gdpr-danske-virksomheder">RGPD et règlement européen sur l’IA</a>.</li>
        <li><strong>L’intégration aux systèmes que les entreprises utilisent</strong> – agendas, logiciels métier et boutiques en ligne.</li>
        <li><strong>Des prix transparents</strong> et une période d’essai.</li>
      </ul>
      <div class="blog-cta"><strong>Laissez l’IA réserver pour vous</strong><p>Connectez votre agenda, renvoyez votre numéro et regardez les réservations arriver pendant 7 jours – gratuitement et sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/demo">Réserver une démo</a></div></div>
      <h2>Les technologies vocales en danois ont fait un bond</h2>
      <p>Le danois a longtemps été une petite langue pour l’IA. Cela change : les grands modèles multilingues se sont améliorés en danois, et des ressources danoises ouvertes comme le projet CoRal de l’Alexandra Institute fournissent des données et des modèles pour la reconnaissance vocale en danois. Découvrez les grandes évolutions dans <a href="/blog/nyeste-ai-teknologi-2026">les dernières technologies d’IA en 2026</a>.</p>
      <h2>Démarrer sans grand projet</h2>
      <p>L’erreur la plus fréquente est de démarrer trop grand. Choisissez une tâche – par exemple les appels manqués – et mesurez l’effet pendant un mois. Voir <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">démarrer en 7 étapes</a>, ou lisez <a href="/blog/ai-medarbejder">ce qu’un employé IA peut prendre en charge</a>.</p>`,
    faq: [
      { question: `Combien d’entreprises danoises utilisent l’IA ?`, answer: `Selon Eurostat, environ 42 % des entreprises danoises d’au moins 10 salariés utilisaient l’IA en 2025, soit la plus forte proportion de l’UE.` },
    ],
  },
};
