import type { BlogTranslations } from '../types';

export const voiceFr: BlogTranslations = {
  'nyeste-ai-teknologi-2026': {
    title: `Les dernières technologies d’IA en 2026 : agents vocaux IA, IA en temps réel et le réceptionniste de demain`,
    excerpt: `Modèles de voix à voix, prise de parole en moins d’une seconde, agents IA qui agissent dans votre agenda et votre CRM – et nouvelles règles européennes. Ce qui est vraiment sorti, ce qui est encore en bêta et ce que cela change pour un chef d’entreprise.`,
    meta_title: `Technologies d’IA 2026 : agents vocaux et IA en temps réel | AIBooking.dk`,
    meta_description: `Voix en temps réel, tours de parole, agents IA, intégrations et règlement sur l’IA : ce qui est sorti, ce qui est en bêta et l’impact pour les PME.`,
    content: `
      <p>Il y a trois ans, une IA capable de répondre au téléphone avec aisance était une démo. En 2026, c’est un produit que l’on peut acheter pour moins de 135 € par mois. Ce n’est pas dû à une percée unique, mais à la maturité simultanée de plusieurs technologies : des modèles qui écoutent et parlent en temps réel, une meilleure reconnaissance vocale pour les petites langues, des agents IA capables d’agir et des standards ouverts pour les connecter aux systèmes que les entreprises utilisent déjà.</p>
      <p>Cet article explique ces évolutions sans jargon. Nous distinguons trois choses : <strong>sorti</strong> (disponible pour tous et en production), <strong>bêta/préversion</strong> (disponible, mais susceptible de changer) et <strong>attentes</strong> (recherche ou annonce, mais pas encore prêt). Les sources et les dates figurent en bas. Les fournisseurs cités sont des exemples du marché – pas la liste de ce sur quoi repose Aibooking.dk.</p>
      <div class="blog-toc"><strong>Dans cet article</strong><ol><li><a href="#realtid">Les modèles vocaux en temps réel</a></li><li><a href="#latenstid">Latence, interruptions et dialogue naturel</a></li><li><a href="#dansk">Reconnaissance et synthèse vocales en danois</a></li><li><a href="#agenter">Des agents IA qui agissent</a></li><li><a href="#integrationer">Agenda, CRM et boutique en ligne</a></li><li><a href="#overtagelse">Transfert à un humain et gestion des erreurs</a></li><li><a href="#regler">Sécurité des données et règlement sur l’IA</a></li><li><a href="#praksis">Qu’est-ce que cela change pour votre entreprise ?</a></li></ol></div>

      <h2 id="realtid">1. Les modèles vocaux en temps réel : d’une chaîne à une seule étape</h2>
      <p>Un assistant téléphonique IA était traditionnellement une <strong>chaîne</strong> de trois systèmes : la reconnaissance vocale (voix → texte), un modèle de langage (texte → réponse) et la synthèse vocale (réponse → voix). Chaque maillon ajoute du délai, et le ton de la voix se perd en route, car le modèle de langage ne voit que du texte.</p>
      <p>Les modèles <strong>de voix à voix</strong> reçoivent de l’audio et rendent de l’audio dans un seul modèle. Ils perçoivent si l’appelant semble stressé, répondent sur un ton adapté et n’ont pas à attendre qu’un maillon ait fini pour que le suivant commence.</p>
      <ul>
        <li><strong>Sorti :</strong> OpenAI a rendu son Realtime API disponible pour tous en août 2025, avec le modèle de voix à voix gpt-realtime, et l’API peut recevoir des appels téléphoniques directement via SIP – le standard de la téléphonie. Google propose des conversations en temps réel via la Gemini Live API ; les notes de version de Vertex AI indiquent Gemini 2.5 Flash avec audio natif comme disponible pour tous depuis décembre 2025, et celles de la Gemini API indiquent Gemini 3.8 Live comme disponible pour tous depuis septembre 2026.</li>
        <li><strong>Bêta/préversion :</strong> plusieurs modèles temps réel plus récents sortent d’abord en « preview », où les noms, les prix et le comportement peuvent changer. Bon à savoir si un fournisseur s’appuie sur un modèle en préversion.</li>
        <li><strong>Attente :</strong> le « full duplex » – des modèles qui écoutent et parlent en même temps, comme les humains, et peuvent dire « mm » pendant que vous parlez. Des modèles de recherche comme Moshi de Kyutai (2024) ont démontré le principe, mais ce n’est pas encore la norme dans les solutions téléphoniques commerciales.</li>
      </ul>
      <p>La chaîne n’est pas morte. Beaucoup de solutions utilisent encore une reconnaissance et une synthèse vocales séparées, car cela donne plus de contrôle sur la voix et sur ce que dit l’IA. Ce qui compte pour vous, ce n’est pas l’architecture mais le résultat : la conversation sonne-t-elle naturelle, et l’IA fait-elle ce qu’il faut ?</p>

      <h2 id="latenstid">2. Latence, interruptions et dialogue naturel</h2>
      <p>Nous sommes extrêmement sensibles aux pauses dans une conversation. Une étude bien connue portant sur dix langues a montré que le silence typique entre deux interlocuteurs est d’environ 200 millisecondes – et que les Danois avaient les silences les plus longs de l’étude, près d’une demi-seconde en moyenne.</p>
      <p>La difficulté n’est pas seulement de répondre vite, mais de savoir <strong>quand</strong> l’appelant a fini de parler. Les anciens systèmes attendaient le silence, ce qui donnait soit de longues pauses, soit des interruptions en pleine réflexion. Les nouveaux modèles de prise de parole combinent le son et le sens pour juger si la phrase est terminée. Deepgram a lancé Flux en octobre 2025, un modèle de reconnaissance vocale avec détection intégrée des tours de parole, et les modèles temps réel des grands fournisseurs ont des fonctions similaires.</p>
      <ul>
        <li><strong>Interruptions (« barge-in ») :</strong> une bonne voix IA se tait quand l’appelant l’interrompt, et écoute. Demandez toujours à un fournisseur si l’on peut l’interrompre.</li>
        <li><strong>Mots de remplissage et pauses de réflexion :</strong> « Euh, laissez-moi vérifier… » ne doit pas être pris pour une phrase terminée.</li>
        <li><strong>Son téléphonique :</strong> le réseau téléphonique transmet un son de moindre qualité qu’une application. Testez toujours sur une vraie ligne téléphonique, pas seulement dans le navigateur.</li>
      </ul>

      <h2 id="dansk">3. Reconnaissance et synthèse vocales en danois</h2>
      <p>Le danois est difficile pour les machines : beaucoup de voyelles, le coup de glotte « stød », des contractions et une petite aire linguistique avec moins de données d’entraînement. Cela a changé de deux façons.</p>
      <p>D’abord, les grands modèles multilingues se sont nettement améliorés en danois, car ils sont entraînés sur bien plus d’audio. Ensuite, le Danemark dispose désormais de ressources ouvertes : le <strong>projet CoRal</strong>, piloté par l’Alexandra Institute et financé par Innovation Fund Denmark, a collecté des centaines d’heures de danois parlé auprès de plus d’un millier de personnes de tous âges et de tout le pays – en lecture à voix haute comme en conversation – et publié un modèle danois de reconnaissance vocale ainsi qu’un jeu de données pour la synthèse vocale. Il est ainsi possible de tester la compréhension des dialectes, des personnes âgées et des plus jeunes.</p>
      <p>Côté synthèse, plusieurs fournisseurs proposent désormais des voix danoises au rendu naturel. Les différences portent surtout sur la prononciation des noms, des nombres, des adresses et des anglicismes. Pour en savoir plus, lisez <a href="/blog/ai-telefonassistent-dansk-sprog">la reconnaissance vocale et les voix IA</a>.</p>

      <div class="blog-cta"><strong>Écoutez un agent vocal IA sur vos propres appels</strong><p>Créez un compte gratuit, renvoyez votre numéro et testez pendant 7 jours. Sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/ind-og-udgaaende-opkald">Voir la permanence téléphonique IA</a></div></div>

      <h2 id="agenter">4. Des agents IA qui agissent</h2>
      <p>La grande différence entre un chatbot et un <strong>agent IA</strong>, c’est que l’agent peut faire quelque chose : chercher un créneau libre, créer une réservation, envoyer un SMS ou récupérer un statut de commande. Cela passe par le « function calling » ou les « outils » : le modèle de langage décide d’appeler une fonction définie par le fournisseur et reçoit le résultat.</p>
      <ul>
        <li><strong>Sorti :</strong> le function calling est standard dans tous les grands modèles temps réel. Pour Gemini 3.8 Live, Google décrit des appels de fonctions qui peuvent s’exécuter de manière asynchrone, pour que la conversation continue pendant que le système travaille.</li>
        <li><strong>Sorti en standard ouvert :</strong> le Model Context Protocol (MCP) est un protocole ouvert pour connecter l’IA à des outils et des données externes. En décembre 2025, il a été confié à l’Agentic AI Foundation, sous l’égide de la Linux Foundation, et il est soutenu par les plus grands fournisseurs d’IA.</li>
        <li><strong>Attente :</strong> des agents qui accomplissent seuls des tâches longues à travers plusieurs systèmes. Cela fonctionne dans des environnements contrôlés, mais dans la relation client, les actions doivent être peu nombreuses, bien définies et journalisées.</li>
      </ul>
      <p>Pour une entreprise, cela signifie : ne demandez pas « avez-vous de l’IA ? », mais « <em>quelles actions</em> l’IA peut-elle effectuer, et comment puis-je voir ce qu’elle a fait ? »</p>

      <h2 id="integrationer">5. Intégrations avec l’agenda, le CRM et la boutique en ligne</h2>
      <p>Un réceptionniste IA ne vaut que ce que valent les systèmes auxquels il est connecté. En pratique, trois intégrations sont décisives :</p>
      <ul>
        <li><strong>L’agenda</strong> (Google Agenda, Outlook, logiciels métier) : pour que l’IA ne réserve que des créneaux réellement libres. Voir <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">la réservation automatique par IA</a>.</li>
        <li><strong>Le CRM</strong> : pour que la conversation soit enregistrée sur la fiche client et que l’appel suivant commence avec le contexte.</li>
        <li><strong>La boutique en ligne</strong> (par exemple Shopify) : pour que l’IA réponde sur le stock, la livraison et le statut de commande à partir de données en temps réel. Voir <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">l’IA pour boutique en ligne avec l’intégration Shopify</a>.</li>
      </ul>
      <p>La tendance technique est de bâtir les intégrations sur des standards ouverts (API, webhooks et MCP) plutôt que sur des plugins fermés. Il devient ainsi plus facile de changer de fournisseur et de connecter des logiciels métier.</p>

      <h2 id="overtagelse">6. Transfert à un humain et gestion des erreurs</h2>
      <p>Même les meilleurs modèles se trompent : ils peuvent mal entendre un nom, mal interpréter une double négation ou « halluciner » une réponse sans fondement. En 2026, la maturité tient donc autant aux filets de sécurité qu’à l’intelligence :</p>
      <ul>
        <li><strong>Répéter et confirmer :</strong> les noms, dates et adresses sont relus avant d’être enregistrés.</li>
        <li><strong>Des connaissances bornées :</strong> l’IA ne répond qu’à partir des informations de l’entreprise qu’on lui a fournies, et dit « je ne sais pas » plutôt que de deviner.</li>
        <li><strong>Un transfert avec contexte :</strong> les réclamations, les urgences et les demandes de parler à une personne sont transmises avec un résumé. Voir <a href="/blog/ai-receptionist-viderestilling-til-menneske">quand transférer à un humain</a>.</li>
        <li><strong>Enregistrement et transcription :</strong> pour repérer et corriger les erreurs.</li>
      </ul>

      <h2 id="regler">7. Sécurité des données et usage responsable : le règlement sur l’IA s’applique</h2>
      <p>2026 est l’année où le règlement européen sur l’IA arrive vraiment dans le service client. Depuis le <strong>2 août 2026</strong>, les obligations de transparence de l’article 50 s’appliquent : les personnes doivent être informées qu’elles interagissent avec un système d’IA, sauf si c’est évident. Pour un réceptionniste IA, cela signifie concrètement que le message d’accueil doit indiquer qu’il s’agit d’un assistant numérique. À l’été 2026, l’UE a adopté un « omnibus numérique » qui reporte les règles relatives à l’IA à haut risque, mais selon les analyses juridiques, les obligations de transparence pour les chatbots n’ont pas été reportées.</p>
      <p>Le RGPD s’applique comme toujours : un appel contient des données personnelles, et l’enregistrement des appels nécessite une base légale. L’autorité danoise de protection des données (Datatilsynet) a publié des lignes directrices sur l’enregistrement des appels ; consultez aussi celles de votre autorité nationale, comme la CNIL. Exigez des données dans l’UE, un accord de sous-traitance, le chiffrement et des règles de suppression. Consultez notre guide <a href="/blog/ai-widget-gdpr-danske-virksomheder">RGPD et règlement européen sur l’IA pour les réceptionnistes IA</a>.</p>
      <p>Cet article ne constitue pas un conseil juridique – vérifiez toujours le texte en vigueur ou parlez de votre situation à un conseiller.</p>

      <h2 id="praksis">8. Qu’est-ce que cela change pour votre entreprise ?</h2>
      <p>La technologie est prête pour les tâches dont ont besoin la plupart des petites et moyennes entreprises : répondre au téléphone, traiter les questions récurrentes, réserver dans l’agenda et envoyer des rappels. Elle n’est pas prête à remplacer le discernement, l’empathie et la responsabilité. La check-list pratique pour 2026 :</p>
      <ol>
        <li><strong>Écoutez avant d’acheter.</strong> Appelez une ligne de démonstration et <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">guettez les six signes de qualité</a>.</li>
        <li><strong>Interrompez-la.</strong> Se tait-elle pour écouter ?</li>
        <li><strong>Testez avec la langue de vos clients</strong> – noms, adresses, accents.</li>
        <li><strong>Demandez quelles actions</strong> elle peut effectuer, et où elles sont journalisées.</li>
        <li><strong>Exigez qu’elle se présente comme une IA, des données dans l’UE et un accord de sous-traitance.</strong></li>
        <li><strong>Commencez petit</strong> – par exemple seulement les appels en dehors des heures d’ouverture – et élargissez après avoir lu les transcriptions des premières semaines.</li>
      </ol>
      <p>Pour les bases, commencez par <a href="/blog/hvad-er-en-ai-voice-agent">qu’est-ce qu’un agent vocal IA ?</a> et <a href="/blog/ai-reception-virtuel-receptionist">qu’est-ce qu’un réceptionniste IA ?</a></p>`,
    faq: [
      { question: `Qu’est-ce qu’un modèle de voix à voix ?`, answer: `Un modèle d’IA qui reçoit de la voix et rend de la voix en une seule étape, au lieu de passer par le texte. Cela réduit le temps de réponse et préserve le ton.` },
      { question: `Un assistant téléphonique IA doit-il dire qu’il est une IA en 2026 ?`, answer: `Oui. L’article 50 du règlement sur l’IA s’applique depuis le 2 août 2026 et exige d’informer les personnes qu’elles interagissent avec un système d’IA, sauf si c’est évident.` },
      { question: `L’IA comprend-elle la parole assez bien pour des appels téléphoniques ?`, answer: `Les modèles modernes comprennent la parole, les accents et les interruptions assez bien pour la réservation et le service client. Testez toujours sur une vraie ligne avec les formulations habituelles de vos clients.` },
      { question: `Qu’est-ce que MCP ?`, answer: `Le Model Context Protocol est un standard ouvert pour connecter l’IA à des outils et données externes comme les agendas et les CRM. Il est géré par l’Agentic AI Foundation, sous l’égide de la Linux Foundation.` },
    ],
  },
  'hvad-er-en-ai-voice-agent': {
    title: `Qu’est-ce qu’un agent vocal IA ? L’IA en temps réel au téléphone, expliquée`,
    excerpt: `Un agent vocal IA est une IA qui écoute, réfléchit, parle et agit pendant un appel en direct. Ses briques, ce qui se passe dans la demi-seconde avant qu’il réponde, et ce qui le distingue d’un chatbot et d’un serveur vocal.`,
    meta_title: `Qu’est-ce qu’un agent vocal IA ? L’IA en temps réel | AIBooking.dk`,
    meta_description: `Ce qu’est un agent vocal IA, ses briques, pourquoi le temps de réponse et la prise de parole comptent, et en quoi il diffère d’un serveur vocal.`,
    content: `
      <p>Un <strong>agent vocal IA</strong> est une IA qui mène une conversation orale en temps réel – le plus souvent au téléphone ou dans un widget vocal sur un site – et peut agir en cours de route, par exemple réserver un rendez-vous ou consulter une commande. Un réceptionniste IA est un agent vocal IA configuré pour recevoir les appels d’une entreprise.</p>
      <h2>Agent vocal, chatbot et serveur vocal</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Serveur vocal (SVI)</th><th>Chatbot</th><th>Agent vocal IA</th></tr></thead><tbody>
        <tr><td>Entrée</td><td>Touches ou mots isolés</td><td>Texte écrit</td><td>Parole libre</td></tr>
        <tr><td>Comprend les mots du client</td><td>Non</td><td>Oui</td><td>Oui</td></tr>
        <tr><td>Contrainte de temps</td><td>Faible</td><td>Faible – l’utilisateur attend volontiers quelques secondes</td><td>Forte – une pause de plus d’une seconde paraît longue</td></tr>
        <tr><td>Peut effectuer des actions</td><td>Limité</td><td>Souvent</td><td>Oui, par exemple réservations et recherches</td></tr>
      </tbody></table></div>
      <h2>Les briques</h2>
      <ol>
        <li><strong>La téléphonie :</strong> l’appel arrive par le réseau téléphonique (SIP) ou un navigateur (WebRTC) et est transmis en audio à l’IA.</li>
        <li><strong>L’écoute :</strong> la reconnaissance vocale transforme l’audio en compréhension, et un modèle de prise de parole juge si l’appelant a fini de parler.</li>
        <li><strong>La réflexion :</strong> un modèle de langage décide quoi dire ou faire selon les instructions et les connaissances de l’entreprise.</li>
        <li><strong>L’action :</strong> grâce au « function calling », l’agent cherche des créneaux libres, crée des réservations, envoie des SMS ou récupère le statut d’une commande.</li>
        <li><strong>La parole :</strong> la synthèse vocale – ou un modèle de voix à voix qui écoute, réfléchit et parle d’un seul tenant – restitue la réponse en parole naturelle.</li>
        <li><strong>La journalisation :</strong> enregistrement, transcription et résumé, pour pouvoir revoir la conversation ensuite.</li>
      </ol>
      <h2>La demi-seconde qui décide de tout</h2>
      <p>Dans une conversation normale, nous nous répondons au bout de quelques centaines de millisecondes. Un agent vocal doit, à peu près dans le même temps, entendre que l’appelant a terminé, comprendre, décider et commencer à parler. S’il attend trop, il paraît lent ; s’il répond trop vite, il coupe la parole. Les trois critères de qualité les plus importants d’un agent vocal sont donc :</p>
      <ul>
        <li><strong>Le temps de réponse</strong> entre le moment où l’appelant se tait et celui où l’agent commence.</li>
        <li><strong>La prise de parole</strong> : coupe-t-il la parole en pleine pause de réflexion ?</li>
        <li><strong>Le barge-in</strong> : se tait-il quand l’appelant l’interrompt ?</li>
      </ul>
      <p>Une petite astuce : les bons agents disent « un instant, je regarde l’agenda » pendant une recherche, comme le ferait une personne.</p>
      <div class="blog-cta"><strong>Écoutez un agent vocal IA sur vos propres appels</strong><p>Créez un compte gratuit, renvoyez votre numéro et testez pendant 7 jours. Sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/ind-og-udgaaende-opkald">Voir la permanence téléphonique IA</a></div></div>
      <h2>Entrants et sortants</h2>
      <p>Un agent vocal peut à la fois recevoir des appels (entrants) et appeler (sortants) – par exemple pour un rappel la veille d’un rendez-vous ou une relance sur un devis. Les règles diffèrent selon le cas ; lisez <a href="/blog/inbound-outbound-forskel">les appels IA entrants et sortants</a>.</p>
      <h2>Qu’est-ce qui peut mal tourner ?</h2>
      <ul>
        <li><strong>Des noms et numéros mal compris :</strong> l’agent répète et fait confirmer.</li>
        <li><strong>Des réponses sans fondement :</strong> l’agent ne doit répondre qu’à partir des informations de l’entreprise, et sinon dire qu’on reviendra vers le client.</li>
        <li><strong>Le bruit et les mauvaises connexions :</strong> l’agent doit demander de répéter plutôt que de deviner.</li>
        <li><strong>Les clients qui veulent une personne :</strong> ils doivent toujours pouvoir l’obtenir. Voir <a href="/blog/ai-receptionist-viderestilling-til-menneske">le transfert à un humain</a>.</li>
      </ul>
      <h2>Envie d’aller plus loin ?</h2>
      <p>Découvrez les évolutions actuelles des modèles temps réel, des technologies vocales et de la régulation de l’IA dans <a href="/blog/nyeste-ai-teknologi-2026">les dernières technologies d’IA en 2026</a>, ou écoutez <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">ce que donne un agent vocal en pratique</a>.</p>`,
    faq: [
      { question: `Quelle est la différence entre un agent vocal IA et un réceptionniste IA ?`, answer: `L’agent vocal IA, c’est la technologie : une IA qui parle et agit en temps réel. Un réceptionniste IA est un agent vocal configuré pour recevoir les appels et réserver pour une entreprise.` },
      { question: `Peut-on interrompre un agent vocal IA ?`, answer: `Un bon agent vocal gère le « barge-in » : il arrête de parler et écoute quand l’appelant l’interrompt. C’est l’un des points les plus importants à tester.` },
    ],
  },
  'ai-telefonassistent-dansk-sprog': {
    title: `Reconnaissance vocale et voix IA : comment l’IA comprend le français`,
    excerpt: `Pourquoi le français parlé est un défi pour les machines, ce qui s’est amélioré et comment vérifier qu’une IA comprend vos clients – noms, adresses, nombres et accents compris.`,
    meta_title: `Reconnaissance vocale en français et voix IA | AIBooking.dk`,
    meta_description: `Pourquoi le français parlé est un défi pour les machines, ce qui s’est amélioré, où l’IA échoue encore et un test en six étapes.`,
    content: `
      <p>Le français a la réputation d’être une langue exigeante – aussi pour ceux qui l’apprennent. Pour une machine, le défi est comparable : des liaisons et des élisions, beaucoup d’homophones, des lettres muettes et une grande variété d’accents, de Marseille à Montréal en passant par Bruxelles. Malgré tout, une IA peut aujourd’hui comprendre et parler le français assez bien pour répondre au téléphone d’une entreprise. Voici comment – et comment le tester.</p>
      <h2>Pourquoi le français parlé est difficile</h2>
      <ul>
        <li><strong>La prononciation et l’orthographe se correspondent mal.</strong> « Ils parlent » et « il parle » se prononcent pareil ; des rues comme « rue du Faubourg-Saint-Honoré » sont les exemples concrets.</li>
        <li><strong>Liaisons et élisions.</strong> Les mots se fondent les uns dans les autres, et « j’sais pas » remplace souvent « je ne sais pas ».</li>
        <li><strong>Accents et langage parlé.</strong> Un agriculteur du Sud-Ouest et une jeune Parisienne prononcent les mêmes mots très différemment.</li>
        <li><strong>Le son téléphonique.</strong> Le réseau téléphonique coupe certaines fréquences, si bien que « f » et « s » sont plus difficiles à distinguer.</li>
      </ul>
      <h2>Qu’est-ce qui a changé ?</h2>
      <p>Les grands modèles vocaux multilingues sont entraînés sur d’énormes quantités d’audio dans de nombreuses langues, et le français fait partie des langues les mieux dotées en données d’entraînement. S’y ajoutent des jeux de données ouverts comme Common Voice de Mozilla, où des bénévoles enregistrent des phrases dans de nombreuses langues et accents. Ces données permettent de mesurer à quel point les modèles comprennent les accents et les différentes tranches d’âge.</p>
      <p>Les voix se sont aussi améliorées. La synthèse vocale moderne sonne naturelle en français, avec un rythme et des pauses proches de ceux d’une personne. Pour une vue d’ensemble, lisez <a href="/blog/nyeste-ai-teknologi-2026">les dernières technologies d’IA en 2026</a>.</p>
      <h2>Où l’IA échoue-t-elle encore le plus souvent ?</h2>
      <ul>
        <li><strong>Les noms propres :</strong> les noms de famille rares et les noms d’entreprises.</li>
        <li><strong>Les nombres et les adresses :</strong> les nombres dits à voix haute (« soixante-dix-sept »), les numéros avec « bis » ou « ter », les codes postaux.</li>
        <li><strong>Les mots anglais en français :</strong> noms de produits et termes techniques.</li>
        <li><strong>Plusieurs personnes qui parlent en même temps</strong>, ou un fort bruit de fond.</li>
      </ul>
      <p>La solution n’est pas un modèle parfait, mais une bonne technique de conversation : l’IA répète le nom, le numéro de téléphone et l’adresse, et demande à l’appelant de confirmer avant d’enregistrer. Une réceptionniste expérimentée fait exactement la même chose.</p>
      <div class="blog-cta"><strong>Écoutez un agent vocal IA sur vos propres appels</strong><p>Créez un compte gratuit, renvoyez votre numéro et testez pendant 7 jours. Sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/ind-og-udgaaende-opkald">Voir la permanence téléphonique IA</a></div></div>
      <h2>Comment tester une voix IA en français</h2>
      <ol>
        <li><strong>Appelez depuis un vrai téléphone</strong> – pas seulement dans le navigateur.</li>
        <li><strong>Utilisez les noms et adresses de vos clients</strong>, par exemple « Lefèvre » et « 14 bis rue de la République, 69002 Lyon ».</li>
        <li><strong>Parlez comme un client</strong> : « Euh, je voulais juste demander pour… non, attendez, vous pouvez passer jeudi ? »</li>
        <li><strong>Interrompez-la</strong> en pleine phrase.</li>
        <li><strong>Faites appeler un collègue avec un autre accent</strong>.</li>
        <li><strong>Lisez ensuite la transcription</strong> et regardez où cela a coincé.</li>
      </ol>
      <h2>Plusieurs langues dans une même solution</h2>
      <p>Beaucoup d’entreprises ont aussi des clients qui parlent d’autres langues. Une voix IA peut passer à l’anglais ou à une autre langue si l’appelant la parle, vous n’avez donc pas besoin de deux configurations. Le message d’accueil doit être en français, et l’IA doit se présenter comme un assistant numérique.</p>
      <p>Écoutez ce que cela donne en pratique dans <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">à quoi ressemble un réceptionniste IA ?</a>, ou découvrez les exigences à poser dans <a href="/blog/ai-telefonpasning-dansk-ai-receptionist">la permanence téléphonique IA : que faut-il exiger</a>.</p>`,
    faq: [
      { question: `L’IA comprend-elle les accents régionaux ?`, answer: `La reconnaissance vocale moderne gère bien la plupart des accents, mais un accent très marqué peut entraîner plus d’erreurs sur les noms et les nombres. L’IA doit donc répéter et faire confirmer les informations clés.` },
      { question: `L’IA peut-elle parler anglais avec des clients étrangers ?`, answer: `Oui. L’IA peut poursuivre en anglais si l’appelant parle anglais.` },
    ],
  },
  'hvordan-lyder-en-dansk-ai-receptionist': {
    title: `À quoi ressemble un réceptionniste IA ? Écoutez – et 6 points à surveiller`,
    excerpt: `Tous les fournisseurs disent que leur voix sonne naturelle. La seule façon de le savoir, c’est d’écouter. Lancez notre enregistrement et utilisez les six signes de qualité pour juger n’importe quel réceptionniste IA.`,
    meta_title: `À quoi ressemble un réceptionniste IA ? Écoutez | AIBooking.dk`,
    meta_description: `Écoutez un réceptionniste IA et jugez tout fournisseur sur six signes de qualité : voix, compréhension, questions, action, transfert et honnêteté.`,
    content: `
      <p>Beaucoup de chefs d’entreprise ont de mauvais souvenirs des systèmes téléphoniques automatisés : « tapez 1 pour… », des voix robotiques et des systèmes qui ne comprennent rien. Un réceptionniste IA moderne, c’est autre chose – mais la qualité varie beaucoup d’une solution à l’autre. Le meilleur test est simple : écouter.</p>
      <p>L’enregistrement ci-dessus est une démo de notre voix IA ; la conversation est en danois. Lancez-le et servez-vous des six points ci-dessous comme grille de lecture. Vous pouvez appliquer les mêmes points pour évaluer d’autres fournisseurs.</p>
      <h2>1. Sonne-t-elle comme une personne ?</h2>
      <p>Le rythme, l’intonation et les pauses comptent plus qu’on ne le croit. Une bonne voix IA est calme et aimable et ne presse pas l’appelant. Vérifiez qu’elle accentue correctement les mots longs et les noms.</p>
      <h2>2. Comprend-elle le langage courant ?</h2>
      <p>Les clients ne parlent pas par mots-clés. Ils expliquent leur problème avec leurs mots, changent d’avis en pleine phrase et utilisent des expressions régionales. L’IA doit malgré tout comprendre ce qu’ils veulent. Pour en savoir plus, lisez <a href="/blog/ai-telefonassistent-dansk-sprog">la reconnaissance vocale</a>.</p>
      <h2>3. Pose-t-elle les bonnes questions ?</h2>
      <p>Un accueil qui se contente de prendre un message ne vaut pas grand-chose. Il doit demander exactement ce dont votre entreprise a besoin – pour un artisan, l’adresse, le type d’intervention et l’urgence ; pour un cabinet, si l’appelant est un nouveau patient ou un patient suivi.</p>
      <h2>4. La conversation se termine-t-elle par une action ?</h2>
      <p>Le signe de qualité le plus fort, c’est que l’appel se termine par quelque chose de concret : un rendez-vous dans l’agenda, une confirmation par SMS ou un message avec un rappel convenu. C’est la différence entre un réceptionniste IA et une <a href="/blog/ai-receptionist-vs-telefonpasning">messagerie</a>.</p>
      <div class="blog-cta"><strong>Écoutez un agent vocal IA sur vos propres appels</strong><p>Créez un compte gratuit, renvoyez votre numéro et testez pendant 7 jours. Sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/ind-og-udgaaende-opkald">Voir la permanence téléphonique IA</a></div></div>
      <h2>5. Sait-elle quand transférer ?</h2>
      <p>Les appels urgents ou compliqués doivent être transférés à une personne avec le contexte, pour que l’appelant n’ait pas à tout recommencer. Voir <a href="/blog/ai-receptionist-viderestilling-til-menneske">quand un appel doit être transféré</a>.</p>
      <h2>6. Dit-elle honnêtement qu’elle est une IA ?</h2>
      <p>Un bon réceptionniste IA se présente comme un assistant numérique. Ce n’est pas qu’une question de politesse : selon le règlement européen sur l’IA, les personnes doivent savoir qu’elles parlent à une IA. Les clients qui le savent dès le départ sont aussi plus patients quand on leur demande de répéter.</p>
      <h2>Essayez vous-même – avec votre propre entreprise</h2>
      <p>Un enregistrement montre la voix, mais pas la façon dont elle gère <em>vos</em> clients. Appelez notre ligne de démonstration, ou démarrez un essai gratuit où l’IA apprend vos prestations, et appelez vous-même avec les questions que posent habituellement vos clients. Sur la <a href="/ind-og-udgaaende-opkald">page des appels entrants et sortants</a>, vous pouvez aussi lire mot à mot deux conversations complètes – un appel entrant chez un plombier et un appel sortant de rappel pour un cabinet.</p>`,
    faq: [
      { question: `Puis-je choisir moi-même la voix et le message d’accueil ?`, answer: `Oui. Vous rédigez vous-même le message d’accueil et le ton, et vous validez le texte avant la mise en service de l’IA.` },
    ],
  },
  'ai-indgaaende-opkald': {
    title: `L’IA pour les appels entrants : ne manquez plus jamais un appel`,
    excerpt: `Les appels manqués sont des clients perdus. Comment fonctionne l’IA pour les appels entrants, les quatre configurations de renvoi possibles et comment mesurer si elle rattrape les appels que vous perdez aujourd’hui.`,
    meta_title: `L’IA pour les appels entrants : ne manquez plus un appel | AIBooking.dk`,
    meta_description: `Le fonctionnement de l’IA pour les appels entrants, quatre configurations de renvoi et comment mesurer si elle rattrape les appels perdus.`,
    content: `
      <p>Un appel manqué est rarement un simple appel. C’est un client qui a un besoin, maintenant – et qui appellera très probablement l’entreprise suivante sur la liste plutôt que d’attendre. <strong>L’IA pour les appels entrants</strong> garantit que chaque appel reçoit une réponse, même quand vous êtes occupé, en repos ou fermé.</p>
      <h2>Combien d’appels perdez-vous ?</h2>
      <p>Commencez par le découvrir. La plupart des standards et des forfaits mobiles affichent les appels manqués. Comptez pendant une semaine normale :</p>
      <ul>
        <li>Combien d’appels sont restés sans réponse ?</li>
        <li>Combien en avez-vous rappelé – et joint ?</li>
        <li>À quel moment de la journée ?</li>
      </ul>
      <p>Le schéma vous indique la configuration dont vous avez besoin.</p>
      <h2>Quatre façons de configurer l’IA</h2>
      <div class="blog-table"><table><thead><tr><th>Configuration</th><th>Quand l’IA répond</th><th>Convient à</th></tr></thead><tbody>
        <tr><td>En dehors des heures d’ouverture</td><td>Le soir, le week-end et les jours fériés</td><td>Cabinets et commerces avec du personnel pendant les heures d’ouverture</td></tr>
        <tr><td>Quand la ligne est occupée</td><td>Quand la ligne est déjà prise</td><td>Entreprises avec des pics d’appels</td></tr>
        <tr><td>Après un certain nombre de sonneries</td><td>Si personne ne répond après, par exemple, 4 sonneries</td><td>Artisans et petites équipes</td></tr>
        <tr><td>Toujours</td><td>Tous les appels – l’IA transfère si nécessaire</td><td>Entreprises qui veulent libérer complètement le personnel</td></tr>
      </tbody></table></div>
      <p>Dans les quatre cas, vous gardez votre numéro ; seul le renvoi change.</p>
      <h2>Que se passe-t-il pendant l’appel ?</h2>
      <ol>
        <li>L’IA répond en quelques secondes et se présente comme l’assistante numérique de l’entreprise.</li>
        <li>Elle identifie le motif de l’appel.</li>
        <li>Elle règle ce qu’elle peut : réserve, déplace un rendez-vous, répond aux questions récurrentes.</li>
        <li>Le reste est transféré ou devient un message structuré.</li>
        <li>Le client reçoit une confirmation par SMS, et vous recevez un résumé dans le tableau de bord.</li>
      </ol>
      <div class="blog-cta"><strong>Écoutez un agent vocal IA sur vos propres appels</strong><p>Créez un compte gratuit, renvoyez votre numéro et testez pendant 7 jours. Sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/ind-og-udgaaende-opkald">Voir la permanence téléphonique IA</a></div></div>
      <h2>Bien plus qu’une messagerie</h2>
      <p>La différence entre la messagerie et l’IA pour les appels entrants, c’est que la demande est réglée pendant que le client est en ligne. Personne n’a à rappeler pour convenir d’un horaire, et aucun client ne raccroche parce qu’il n’a pas envie de laisser un message. Voir la comparaison complète dans <a href="/blog/ai-receptionist-vs-telefonpasning">réceptionniste IA vs permanence téléphonique et messagerie</a>.</p>
      <h2>Comment mesurer l’effet ?</h2>
      <ul>
        <li><strong>La part d’appels pris</strong> avant et après.</li>
        <li><strong>Le nombre de réservations</strong> faites par l’IA, surtout en dehors des heures d’ouverture.</li>
        <li><strong>Le temps passé à rappeler</strong> chaque semaine.</li>
        <li><strong>La part d’appels transférés</strong> – trop élevée, l’IA manque de connaissances ; nulle, vérifiez qu’elle ne garde pas des cas qu’elle devrait transmettre.</li>
      </ul>
      <p>Découvrez comment traduire ces chiffres en argent dans le <a href="/blog/roi-ai-automatisering-virksomheder">guide sur le ROI de l’automatisation par IA</a>. Vous voulez que l’IA appelle aussi ? Lisez <a href="/blog/inbound-outbound-forskel">les appels IA entrants et sortants</a>.</p>`,
    faq: [
      { question: `Quand l’IA prend-elle mes appels ?`, answer: `C’est vous qui décidez : en dehors des heures d’ouverture, quand la ligne est occupée, après un certain nombre de sonneries ou toujours. Vous gardez votre numéro dans tous les cas.` },
      { question: `Suis-je informé des appels pris par l’IA ?`, answer: `Oui. Chaque appel figure dans le tableau de bord avec l’enregistrement, la transcription et le résumé, et les messages peuvent vous être envoyés par SMS ou par e-mail.` },
    ],
  },
  'inbound-outbound-forskel': {
    title: `Appels IA entrants et sortants : la différence et les règles`,
    excerpt: `L’IA entrante répond à vos clients ; l’IA sortante les appelle. À quoi sert chacune, quelles règles s’appliquent aux appels sortants automatisés et par où la plupart des entreprises devraient commencer.`,
    meta_title: `Appels IA entrants vs sortants : différence et règles | AIBooking.dk`,
    meta_description: `À quoi servent les appels IA entrants et sortants, les règles des appels automatisés et par où la plupart des entreprises devraient commencer.`,
    content: `
      <p>Un assistant téléphonique IA peut fonctionner dans deux sens. <strong>Entrant</strong> signifie que le client vous appelle et que l’IA répond. <strong>Sortant</strong> signifie que l’IA appelle le client – pour un rappel, une confirmation ou une relance. Même voix, même numéro, mais des objectifs et des règles différents.</p>
      <h2>À quoi sert chaque sens</h2>
      <div class="blog-table"><table><thead><tr><th>Tâche</th><th>Entrant</th><th>Sortant</th></tr></thead><tbody>
        <tr><td>Répondre aux appels des clients</td><td>Oui</td><td>–</td></tr>
        <tr><td>Réserver, déplacer et annuler</td><td>Oui</td><td>Oui</td></tr>
        <tr><td>Répondre aux questions récurrentes</td><td>Oui</td><td>–</td></tr>
        <tr><td>Rappel la veille d’un rendez-vous</td><td>–</td><td>Oui</td></tr>
        <tr><td>Réattribuer des créneaux annulés via une liste d’attente</td><td>–</td><td>Oui</td></tr>
        <tr><td>Relancer un devis</td><td>–</td><td>Oui, avec consentement/contact préalable</td></tr>
        <tr><td>Transférer à un collègue</td><td>Oui</td><td>Oui</td></tr>
      </tbody></table></div>
      <h2>Les règles des appels IA sortants</h2>
      <p>Pour les appels entrants, c’est le client qui vous contacte – ici, les règles principales sont le RGPD et l’obligation pour l’IA d’indiquer qu’elle est une IA. Les appels sortants demandent plus de précautions :</p>
      <ul>
        <li><strong>Prospection :</strong> la directive européenne « vie privée et communications électroniques » (art. 13) impose un consentement préalable pour la prospection directe au moyen d’automates d’appel ; en France, c’est l’article L. 34-5 du Code des postes et des communications électroniques. Un appel IA à visée commerciale nécessite donc un consentement.</li>
        <li><strong>Service :</strong> un rappel pour un rendez-vous que le client a pris, ou la confirmation d’une visite convenue, relève du service – pas de la prospection. C’est l’usage le plus courant et le moins controversé de l’IA sortante.</li>
        <li><strong>Transparence :</strong> l’IA doit dire pour le compte de qui elle appelle et qu’elle est un assistant numérique.</li>
        <li><strong>Horaires :</strong> appelez aux heures où vous appelleriez vous-même – pas à 21 h un dimanche.</li>
      </ul>
      <p>La frontière entre service et prospection peut être floue, par exemple avec « souhaitez-vous réserver votre prochain rendez-vous ? ». En cas de doute, faites-le vérifier. Cet article ne constitue pas un conseil juridique.</p>
      <div class="blog-cta"><strong>Écoutez un agent vocal IA sur vos propres appels</strong><p>Créez un compte gratuit, renvoyez votre numéro et testez pendant 7 jours. Sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/ind-og-udgaaende-opkald">Voir la permanence téléphonique IA</a></div></div>
      <h2>Par où commencer ?</h2>
      <p>La plupart commencent par les appels entrants, car ils règlent un problème urgent (les appels manqués) et ne demandent pas de nouveaux processus. Une fois que l’IA tourne depuis quelques semaines, les rappels la veille sont l’étape suivante naturelle – c’est là que les absences diminuent. Lisez <a href="/blog/outbound-ai-opkald-paamindelser">les appels de rappel automatiques</a> et <a href="/blog/ai-indgaaende-opkald">l’IA pour les appels entrants</a>.</p>
      <p>Chez Aibooking.dk, toutes les formules incluent les appels entrants et sortants. Consultez <a href="/ind-og-udgaaende-opkald">les appels entrants et sortants</a> pour deux exemples de conversations complètes.</p>`,
    faq: [
      { question: `Une IA a-t-elle le droit d’appeler des clients ?`, answer: `Oui, pour du service comme les rappels et les confirmations de rendez-vous. Si un automate d’appel est utilisé pour de la prospection directe, le droit européen et, en France, l’article L. 34-5 du CPCE exigent un consentement préalable.` },
    ],
  },
  'outbound-ai-opkald-paamindelser': {
    title: `Les appels de rappel automatiques : comment l’IA réduit les rendez-vous manqués`,
    excerpt: `Un SMS de rappel s’ignore facilement ; un appel où l’on peut déplacer son rendez-vous sur-le-champ, non. Comment fonctionnent les appels de rappel par IA, quand appeler et comment réattribuer le créneau quand quelqu’un annule.`,
    meta_title: `Appels de rappel automatiques : moins d’absences avec l’IA | AIBooking.dk`,
    meta_description: `Comment fonctionnent les appels de rappel par IA, pourquoi un appel fait mieux qu’un SMS et comment réattribuer les créneaux annulés.`,
    content: `
      <p>Un rendez-vous manqué coûte deux fois : le créneau reste vide, et un autre client qui le voulait ne l’a pas eu. Pour les cabinets, les salons et les artisans, c’est l’une des façons les plus directes de perdre du chiffre d’affaires. Les appels de rappel automatiques s’attaquent au problème une étape plus tôt – avant que le créneau ne soit perdu.</p>
      <h2>Pourquoi un appel n’a pas le même effet qu’un SMS</h2>
      <p>Un SMS de rappel est utile et peu coûteux, et vous devez continuer à l’envoyer. Mais il se lit et s’oublie vite, et il est peu pratique d’y répondre quand il faut déplacer le rendez-vous. Un court appel la veille permet au client de dire « finalement, ça ne m’arrange pas » – et d’obtenir aussitôt un nouvel horaire. C’est cette combinaison qui fait baisser les absences : un SMS à la réservation, un appel la veille.</p>
      <h2>Comment se déroule un appel de rappel</h2>
      <ol>
        <li>À 9 h 15 la veille, l’IA appelle tous les rendez-vous du lendemain.</li>
        <li>« Bonjour Madame Martin, je suis l’assistante numérique du cabinet. Je vous appelle au sujet de votre rendez-vous demain à 10 h – vous convient-il toujours ? »</li>
        <li>Si oui : un remerciement et une courte confirmation.</li>
        <li>Si non : l’IA propose deux nouveaux horaires, déplace le rendez-vous et envoie un nouveau SMS.</li>
        <li>Le créneau libéré peut être proposé au client suivant sur la liste d’attente.</li>
        <li>Si le client ne répond pas : un SMS avec la possibilité de rappeler, ou une nouvelle tentative plus tard.</li>
      </ol>
      <p>Vous pouvez lire la conversation complète mot à mot sur la <a href="/ind-og-udgaaende-opkald">page des appels entrants et sortants</a>.</p>
      <h2>Cabinets : là où les absences coûtent le plus</h2>
      <p>Pour les dentistes, kinésithérapeutes et chiropracteurs, un créneau de soin vide est une perte sèche, car le personnel est là de toute façon. C’est là que les appels de rappel sont les plus rentables – en particulier pour les nouveaux patients, les soins longs et les rendez-vous pris longtemps à l’avance. Combinez-les avec <a href="/blog/totalloesning-klinik">la réservation par IA pour les cabinets</a> pour que la réservation et les rappels se fassent automatiquement. N’oubliez pas que l’appel ne doit pas mentionner d’informations de santé – « votre rendez-vous chez nous demain » suffit.</p>
      <div class="blog-cta"><strong>Écoutez un agent vocal IA sur vos propres appels</strong><p>Créez un compte gratuit, renvoyez votre numéro et testez pendant 7 jours. Sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/ind-og-udgaaende-opkald">Voir la permanence téléphonique IA</a></div></div>
      <h2>Artisans : éviter les déplacements inutiles</h2>
      <p>Pour un artisan, le rendez-vous manqué, c’est un client absent de chez lui. Un appel de confirmation la veille (« nous passons demain entre 8 h et 10 h – y aura-t-il quelqu’un ? ») évite un déplacement inutile et permet de recueillir en même temps les informations d’accès. Voir <a href="/blog/ai-telefonassistent-haandvaerker">l’IA pour les artisans</a>.</p>
      <h2>Les bonnes règles pour les rappels</h2>
      <ul>
        <li><strong>Appelez en journée</strong>, en général la veille au matin.</li>
        <li><strong>Soyez bref</strong> – moins d’une minute si l’horaire convient.</li>
        <li><strong>Dites pour le compte de qui vous appelez</strong>, et qu’il s’agit d’un assistant numérique.</li>
        <li><strong>Pas de vente dans le rappel.</strong> Rappeler un rendez-vous pris relève du service ; les offres nécessitent un consentement. Voir <a href="/blog/inbound-outbound-forskel">les règles des appels IA sortants</a>.</li>
        <li><strong>Mesurez l’effet</strong> : rendez-vous manqués par mois avant et après, et nombre de créneaux libérés réattribués.</li>
      </ul>`,
    faq: [
      { question: `Quand faut-il passer l’appel de rappel ?`, answer: `En général la veille au matin. Cela laisse le temps de déplacer le rendez-vous et de proposer le créneau libéré à quelqu’un d’autre.` },
      { question: `Le client peut-il déplacer son rendez-vous pendant l’appel ?`, answer: `Oui. L’IA propose de nouveaux créneaux libres, déplace le rendez-vous dans l’agenda et envoie une nouvelle confirmation par SMS.` },
    ],
  },
  'ai-widget-gdpr-danske-virksomheder': {
    title: `Réceptionniste IA, RGPD et règlement sur l’IA : ce que les entreprises doivent savoir`,
    excerpt: `Une IA qui prend des appels ou des chats traite des données personnelles – et à partir d’août 2026, elle doit dire qu’elle est une IA. Les règles expliquées simplement, et les questions à poser à votre fournisseur.`,
    meta_title: `Réceptionniste IA, RGPD et règlement sur l’IA | AIBooking.dk`,
    meta_description: `Le RGPD, l’enregistrement des appels et la transparence du règlement sur l’IA dès août 2026, expliqués pour les réceptionnistes IA.`,
    content: `
      <p>Quand un réceptionniste IA répond au téléphone, ou qu’un widget IA sur votre site prend une réservation, il traite des données personnelles : nom, numéro de téléphone, parfois une adresse et un motif de contact. Ce n’est pas une raison de s’en priver – mais une raison de bien faire les choses. Voici les règles applicables en 2026, expliquées sans jargon juridique. Cet article est une information générale, pas un conseil juridique.</p>
      <h2>1. RGPD : les mêmes règles que pour un formulaire de contact</h2>
      <ul>
        <li><strong>Finalité et base légale :</strong> vous pouvez traiter les données pour gérer la demande et la réservation. Ne les utilisez pas à d’autres fins sans nouvelle base légale.</li>
        <li><strong>Minimisation des données :</strong> ne demandez que le nécessaire. Un coiffeur n’a pas besoin d’un numéro de sécurité sociale.</li>
        <li><strong>Accord de sous-traitance :</strong> le fournisseur d’IA traite les données pour votre compte et doit avoir signé avec vous un accord de sous-traitance.</li>
        <li><strong>Conservation et suppression :</strong> convenez de la durée de conservation des conversations, des enregistrements et des transcriptions.</li>
        <li><strong>Transferts hors UE :</strong> demandez où les données sont traitées. Un traitement dans l’UE est le plus simple.</li>
        <li><strong>Obligation d’information :</strong> décrivez l’usage de l’IA et de l’enregistrement dans votre politique de confidentialité.</li>
      </ul>
      <h2>2. L’enregistrement des appels</h2>
      <p>Beaucoup de solutions d’IA enregistrent et transcrivent les appels pour que vous puissiez voir ce qui a été convenu. Il vous faut pour cela une base légale – par exemple un intérêt légitime à documenter qui l’emporte sur l’intérêt de l’appelant à ne pas être enregistré – et vous devez informer de l’enregistrement. En France, la CNIL a publié des recommandations sur l’écoute et l’enregistrement des appels. Si la conversation contient des données sensibles – par exemple de santé –, des règles plus strictes s’appliquent. Indiquez donc dans le message d’accueil que l’appel est enregistré, et configurez l’IA pour qu’elle ne pose pas de questions de santé, sauf nécessité.</p>
      <h2>3. Le règlement sur l’IA : dire qu’il s’agit d’une IA</h2>
      <p>Le règlement européen sur l’IA (règlement 2024/1689) contient, à son article 50, des obligations de transparence applicables à partir du <strong>2 août 2026</strong> : les systèmes d’IA qui interagissent directement avec des personnes doivent être conçus de manière à ce que ces personnes soient informées qu’elles interagissent avec un système d’IA, sauf si c’est évident. Un réceptionniste IA ou un chatbot n’est pas une IA à haut risque, mais il est soumis à cette obligation. L’« omnibus numérique » adopté par l’UE à l’été 2026 a reporté les règles relatives à l’IA à haut risque, mais pas, selon les analyses juridiques, cette obligation.</p>
      <p>En pratique : le message d’accueil doit dire quelque chose comme « Vous êtes en ligne avec l’assistant numérique de [entreprise] ». C’est aussi ce qui est le mieux accueilli par les clients.</p>
      <div class="blog-cta"><strong>Écoutez un agent vocal IA sur vos propres appels</strong><p>Créez un compte gratuit, renvoyez votre numéro et testez pendant 7 jours. Sans carte bancaire.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Essayez gratuitement 7 jours</a><a href="/ind-og-udgaaende-opkald">Voir la permanence téléphonique IA</a></div></div>
      <h2>4. Appels sortants et prospection</h2>
      <p>Si l’IA appelle elle-même, les règles de la prospection commerciale s’appliquent aussi ; en France, l’article L. 34-5 du Code des postes et des communications électroniques. Les appels automatisés de prospection directe nécessitent un consentement préalable. Les rappels de rendez-vous pris relèvent du service. Voir <a href="/blog/inbound-outbound-forskel">les règles des appels IA sortants</a>.</p>
      <h2>Les questions à poser à votre fournisseur</h2>
      <ol>
        <li>Où les données de conversation sont-elles traitées et stockées – dans l’UE ?</li>
        <li>Avez-vous un accord de sous-traitance standard, et quels sous-traitants ultérieurs utilisez-vous ?</li>
        <li>Combien de temps les enregistrements et transcriptions sont-ils conservés, et puis-je modifier cette durée ?</li>
        <li>Les données d’un client peuvent-elles être retrouvées et supprimées sur demande ?</li>
        <li>Les données sont-elles chiffrées en transit et au repos ?</li>
        <li>Puis-je définir moi-même le message d’accueil, pour que l’IA dise qu’elle est une IA et que l’appel est enregistré ?</li>
        <li>Les conversations de mes clients servent-elles à entraîner vos modèles ou ceux de tiers ?</li>
      </ol>
      <h2>Comment Aibooking.dk s’y prend</h2>
      <p>Les données sont traitées dans l’UE, avec un stockage chiffré, des règles de suppression convenues et un accord de sous-traitance. Les enregistrements et transcriptions ne sont accessibles qu’à vous, et vous décidez vous-même du texte du message d’accueil. Lisez <a href="/privatlivspolitik">notre politique de confidentialité</a>, ou voyez comment cela s’articule avec la technologie dans <a href="/blog/nyeste-ai-teknologi-2026">les dernières technologies d’IA en 2026</a>.</p>`,
    faq: [
      { question: `Un réceptionniste IA est-il une IA à haut risque ?`, answer: `Normalement non. Mais il est soumis à l’obligation de transparence de l’article 50 du règlement sur l’IA, applicable depuis le 2 août 2026 : les clients doivent savoir qu’ils parlent à une IA.` },
      { question: `L’IA peut-elle enregistrer les appels ?`, answer: `Cela nécessite une base légale, par exemple un intérêt légitime à documenter, et d’informer de l’enregistrement. Les données sensibles demandent une vigilance particulière. Consultez les recommandations de la CNIL sur l’enregistrement des appels.` },
    ],
  },
};
