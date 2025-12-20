const translations = {
  fr: {
    global: {
      'nav.primary': 'Navigation principale',
      'nav.toggle': 'Basculer la navigation',
      'nav.home': 'Accueil',
      'nav.create': 'Excursions',
      'nav.reviews': 'Avis',
      'nav.story': 'Notre histoire',
      'footer.rights': '© 2025 Québec Mexique (A beyondthereefmexico brand). Tous droits réservés.',
      'floatingContact.aria': 'Options de contact rapide',
      'floatingContact.whatsappAria': 'Discuter sur WhatsApp',
      'floatingContact.emailAria': 'Envoyer un courriel à Québec Mexique',
      'floatingContact.instagramAria': 'Ouvrir Instagram',
      'floatingContact.whatsappLabel': 'WhatsApp',
      'floatingContact.emailLabel': 'Courriel',
      'floatingContact.instagramLabel': 'Instagram',
      'heroSlider.goToSlide': 'Aller à la diapositive {{index}}',
      'tourBuilder.remove': 'Retirer',
      'inquiry.emailSubject': 'Idée de journée sur mesure de {{name}}',
      'inquiry.emailBody.nameLabel': 'Nom',
      'inquiry.emailBody.emailLabel': 'Courriel',
      'inquiry.emailBody.phoneLabel': 'Téléphone',
      'inquiry.emailBody.ideaLabel': 'Idée de voyage',
      'inquiry.status.missing':
        'Veuillez ajouter votre nom, votre courriel et votre idée afin que nous puissions préparer votre devis.',
      'inquiry.status.sending': 'Nous envoyons votre demande à notre équipe concierge.',
      'inquiry.status.sent': 'Merci! Votre demande est reçue. Nous vous répondons sous peu.',
      'inquiry.status.error': 'Une erreur est survenue lors de l’envoi. Veuillez réessayer.',
      'inquiry.status.unavailable': 'Impossible d’envoyer votre demande pour le moment. Réessayez dans quelques instants.',
      'inquiry.status.missingService':
        'Veuillez connecter ce formulaire à un service de courriel pour recevoir les demandes.',
      'tour.card.viewDetails': 'Voir les détails',
      'tour.card.bookNow': 'Réserver',
      'tour.card.privateBadge': 'Excursion privée',
      'tour.card.halfDay': 'Demi-journée',
      'tour.card.fullDay': 'Journée complète',
      'tour.card.viewAria': 'Voir {{name}}'
    },
    home: {
      'page.title': 'Québec Mexique',
      'home.hero.aria': 'Expériences à la une',
      'home.hero.heading': 'Adrénaline pure. Nature indomptée. Votre histoire en train de s’écrire.',
      'home.hero.description':
        'Pas juste une sortie : c’est la liberté totale. Nagez avec les tortues, plongez dans les cenotes, filez à travers les lagunes et explorez d’anciennes ruines mayas. Pas de foule. Pas de limites. Juste l’aventure brute au cœur de la Riviera Maya. Vos règles. Votre rythme. Votre souvenir inoubliable. Ce n’est pas du tourisme. C’est Québec Mexique.',
      'home.hero.cta': 'Voir toutes nos excursions privées',
      'home.hero.previous': 'Diapositive précédente',
      'home.hero.next': 'Diapositive suivante',
      'home.hero.dots': 'Diapositives vedettes',
      'home.difference.heading': 'Vivez la différence',
      'home.difference.captured.title': 'Immortalisé',
      'home.difference.captured.copy':
        'Photos offertes gratuitement à chaque excursion Privée (Promo non valide pour tour avec transport partagé)',
      'home.difference.pace.title': 'À votre rythme',
      'home.difference.pace.copy': 'Choisissez votre heure de départ, évitez les prises en charge, créez votre horaire',
      'home.difference.journey.title': 'Votre aventure',
      'home.difference.journey.copy': 'Snorkel, exploration, saveurs, détente — à vous de choisir',
      'home.difference.surprises.title': 'Sans surprises',
      'home.difference.surprises.copy': 'Aucun coût caché, aucun extra, juste l’aventure',
      'home.difference.excellence.title': 'Excellence',
      'home.difference.excellence.copy': 'Ce n’est pas nous qui le disons : nos invités. Cinq étoiles, toujours.',
      'home.favorites.heading': 'Aventures adorées par nos voyageurs',
      'home.favorites.copy':
        'Faites défiler les offres à durée limitée sur les excursions que nos invités adorent le plus.',
      'home.favorites.previous': 'Excursions précédentes',
      'home.favorites.next': 'Excursions suivantes',
      'home.favorites.card1.tag': 'Coup de cœur',
      'home.favorites.card1.title': 'Nage avec les requins-baleines',
      'home.favorites.card1.badge': '-30 %',
      'home.favorites.card1.deal': 'Jusqu’à 30 % de rabais',
      'home.favorites.card1.copy':
        'Affrétez un bateau privé avec des guides biologistes marins et glissez dans l’eau avec ces géants paisibles au lever du soleil.',
      'home.favorites.card1.cta': 'Plus d’infos',
      'home.favorites.card2.tag': 'Favori des invités',
      'home.favorites.card2.title': 'Le Taco Tour',
      'home.favorites.card2.badge': '-25 %',
      'home.favorites.card2.deal': 'Jusqu’à 25 % de rabais',
      'home.favorites.card2.copy':
        'Goûtez aux taquerías cachées avec un hôte local qui marie les mezcals et les légendes de rue.',
      'home.favorites.card2.cta': 'Plus d’infos',
      'home.favorites.card3.tag': 'Places limitées',
      'home.favorites.card3.title': 'Snorkel à El Cielo Cozumel',
      'home.favorites.card3.badge': '-22 %',
      'home.favorites.card3.deal': 'Jusqu’à 22 % de rabais',
      'home.favorites.card3.copy':
        'Flottez au-dessus des jardins d’étoiles de mer et des récifs éclatants à Cozumel avec un capitaine qui choisit le banc de sable à son meilleur.',
      'home.favorites.card3.cta': 'Plus d’infos',
      'home.favorites.card4.tag': 'Prêt pour les photos',
      'home.favorites.card4.title': 'Expérience Insta à Tulum',
      'home.favorites.card4.badge': '-18 %',
      'home.favorites.card4.deal': 'Jusqu’à 18 % de rabais',
      'home.favorites.card4.copy':
        'Capturez des images cinématographiques dans les ruines et les cenotes de Tulum avec une direction artistique pour chaque moment.',
      'home.favorites.card4.cta': 'Plus d’infos',
      'home.builder.eyebrow': 'Planifiez avec notre équipe concierge',
      'home.builder.heading': 'On crée votre journée parfaite',
      'home.builder.copy':
        'Partagez votre idée par courriel et recevez un devis personnalisé, ou réservez un appel vidéo pour peaufiner chaque détail.',
      'home.builder.formAria': 'Envoyer les détails de votre journée idéale',
      'home.builder.nameLabel': 'Nom',
      'home.builder.namePlaceholder': 'Votre nom',
      'home.builder.emailLabel': 'Courriel',
      'home.builder.emailPlaceholder': 'vous@exemple.com',
      'home.builder.phoneLabel': 'Téléphone',
      'home.builder.phonePlaceholder': '+52 1 555 555 5555',
      'home.builder.notesLabel': 'Parlez-nous de votre idée',
      'home.builder.notesPlaceholder': 'Indiquez la date, l’ambiance et les incontournables.',
      'home.builder.submit': 'Envoyer mon idée',
      'home.builder.listHeading': 'Parlez-nous de votre journée rêvée',
      'home.builder.pointOne':
        'Partagez l’ambiance souhaitée : relax, pleine d’énergie, romantique ou hors réseau.',
      'home.builder.pointTwo': 'Ajoutez les activités incontournables, le style de repas ou vos préférences d’horaire.',
      'home.builder.pointThree':
        'Vous recevrez un devis personnalisé ou l’option de discuter en vidéo avec notre équipe.',
      'home.builder.emailFallback':
        'Vous préférez le courriel? Écrivez-nous à <a href="mailto:info@quebecmexique.com">info@quebecmexique.com</a>.',
      'home.builder.emailSubject': 'Idée de journée sur mesure de {{name}}',
      'home.builder.status.missing':
        'Veuillez ajouter votre nom, votre courriel et votre idée afin que nous puissions préparer votre devis.',
      'home.builder.status.prompt': 'Ouverture de votre appli courriel pour envoyer les détails à notre concierge.',
      'home.accent.eyebrow': 'Pourquoi on nous choisit',
      'home.accent.heading': 'Excursions privées, sans stress',
      'home.accent.locals.title': 'Guides certifiés',
      'home.accent.locals.copy':
        'Nos guides certifiés cumulent des années d’expérience et créent des moments privilégiés introuvables dans les brochures.',
      'home.accent.collab.title': 'Vous ne trouvez pas l’excursion parfaite?',
      'home.accent.collab.copy':
        'Écrivez-nous et nous planifierons un appel ou une visioconférence pour créer votre excursion idéale.',
      'home.accent.execution.title': 'Excursions sans souci',
      'home.accent.execution.copy':
        'Votre excursion, votre horaire, sans frais cachés : transferts, billets et horaires sont gérés pour que vous profitiez.',
      'home.cta.heading': 'Prêt à créer votre excursion de rêve?',
      'home.cta.copy': 'Écrivez-nous et nous créerons l’expérience parfaite pour vous.',
      'home.cta.button': 'Nous écrire maintenant'
    },
    tours: {
      'page.title': 'Excursions et visites privées | Québec Mexique',
      'tours.hero.aria': 'Aperçu des excursions',
      'tours.hero.previous': 'Diapositive précédente',
      'tours.hero.next': 'Diapositive suivante',
      'tours.hero.dots': 'Diapositives des excursions',
      'tours.hero.eyebrow': 'Créez votre excursion',
      'tours.hero.heading': 'Des expériences aussi uniques que votre groupe',
      'tours.hero.copy':
        'Glissez-déposez des activités sélectionnées, ajustez le rythme et invitez vos compagnons de voyage à collaborer en temps réel.',
      'tours.assurance.eyebrow': 'Seulement vous et les gens que vous aimez',
      'tours.assurance.heading': 'Plus de 14 ans d’expérience en excursions',
      'tours.assurance.copy':
        '<span class="assurance-line">Les vans les plus récentes de l’industrie</span><span class="assurance-line">Guides certifiés</span><span class="assurance-line">Repas sécuritaires pour allergies et diètes spéciales</span>',
      'tours.assurance.item1.title': 'Flotte privée et vans modernes',
      'tours.assurance.item1.copy':
        'Voyagez dans nos vans les plus récentes avec A/C froide, sièges en cuir, capitaines pros et aucun groupe partagé.',
      'tours.assurance.item2.title': 'Guides certifiés et professionnels',
      'tours.assurance.item2.copy':
        'Des guides certifiés et bilingues mènent chaque excursion avec des protocoles axés sur la sécurité.',
      'tours.assurance.item3.title': 'Nourriture sécuritaire pour chaque diète',
      'tours.assurance.item3.copy':
        'Nous incluons des repas frais et adaptons les menus pour végans, sans gluten, allergies et demandes spéciales.',
      'tours.grid.eyebrow': 'Voir toutes les excursions rapidement',
      'tours.grid.heading': 'Nos excursions privées les plus populaires',
      'tours.grid.custom.title': 'Combinaisons sur mesure',
      'tours.grid.custom.copy':
        'Mélangez plongées, surprises culinaires et randonnées isolées. Notre planificateur intelligent orchestre la logistique.',
      'tours.grid.pacing.title': 'Rythme équilibré',
      'tours.grid.pacing.copy':
        'Nous équilibrons les aventures énergiques avec des pauses réparatrices pour que chacun recharge ses batteries.',
      'tours.grid.collab.title': 'Co-créez en direct',
      'tours.grid.collab.copy':
        'Partagez un lien privé pour que votre groupe vote, commente ou ajoute des idées. Nos concierges ajustent en direct.',
      'tours.steps.heading': 'Comment fonctionne le créateur sur mesure',
      'tours.steps.one.title': 'Parlez-nous de votre rêve',
      'tours.steps.one.copy': 'Répondez à quelques questions ou partagez un moodboard. On pré-sélectionne les expériences.',
      'tours.steps.two.title': 'Ajustez le plan',
      'tours.steps.two.copy':
        'Déplacez les activités, ajustez les horaires et ajoutez des demandes spéciales comme un photographe privé.',
      'tours.steps.three.title': 'Validez le tout',
      'tours.steps.three.copy':
        'Collaborez avec votre concierge pour finaliser les transferts, paiements et l’assistance sur place.',
      'tours.contact.eyebrow': 'Votre excursion sur mesure',
      'tours.contact.heading': 'Vous voulez une excursion qui n’est pas dans la liste?',
      'tours.contact.copy':
        'Indiquez la date et toute diète spéciale ou besoin d’accessibilité : on la conçoit, on la chiffre et on confirme vite.',
      'tours.contact.point1': 'Promo combo : réservez 3 excursions et économisez de 20 % à 30 %.',
      'tours.contact.point2': 'Service 100 % privé avec vans neuves, capitaines pros et guides certifiés.',
      'tours.contact.point3': 'Normes de nourriture sécuritaire avec menus adaptés aux végans, sans gluten et allergies.',
      'tours.contact.channels':
        'Vous préférez un contact direct? Écrivez à <a href="mailto:info@quebecmexique.com">info@quebecmexique.com</a> ou WhatsApp <a href="https://wa.me/529841670697" target="_blank" rel="noopener noreferrer">+52 984 167 0697</a>.',
      'tours.contact.formAria': 'Partagez l’excursion souhaitée',
      'tours.contact.nameLabel': 'Nom',
      'tours.contact.namePlaceholder': 'Votre nom',
      'tours.contact.emailLabel': 'Courriel',
      'tours.contact.emailPlaceholder': 'vous@exemple.com',
      'tours.contact.phoneLabel': 'Téléphone',
      'tours.contact.phonePlaceholder': '+52 1 555 555 5555',
      'tours.contact.ideaLabel': 'Parlez-nous de votre idée',
      'tours.contact.ideaPlaceholder': 'Ajoutez la date, l’ambiance, les diètes et les incontournables.',
      'tours.contact.submit': 'Envoyer mon idée'
    },
    reviews: {
      'page.title': 'Avis des voyageurs | Québec Mexique',
      'reviews.hero.eyebrow': 'Lettres d’amour de nos voyageurs',
      'reviews.hero.heading': 'Histoires de voyageurs qui sont allés plus loin',
      'reviews.hero.copy':
        'Découvrez comment des voyages sur mesure et des attentions bien pensées ont transformé des rêves en escapades sans effort.',
      'reviews.featured.heading': 'Avis en vedette',
      'reviews.featured.one.title': '“Ils ont pensé à chaque détail.”',
      'reviews.featured.one.copy':
        '“De la nage nocturne avec les raies manta au souper surprise d’anniversaire sur un banc de sable, l’équipe de Québec Mexique a tout dépassé. On n’a jamais regardé l’heure.” - <strong>Cam &amp; Jordan</strong>',
      'reviews.featured.two.title': '“Planifier, c’était vraiment le fun.”',
      'reviews.featured.two.copy':
        '“On a bâti l’itinéraire ensemble en appel vidéo et on voyait les disponibilités en direct. Leur concierge a réservé un guide privé pour mon père afin qu’il explore à son rythme.” - <strong>Riya</strong>',
      'reviews.featured.three.title': '“Nos amis en parlent encore.”',
      'reviews.featured.three.copy':
        '“Le chat de groupe débordait d’idées. Le planificateur de Québec Mexique a tout gardé organisé et a même ajouté des cours de mixologie inspirés de notre liste Spotify.” - <strong>Diego &amp; crew</strong>',
      'reviews.featured.four.title': '“Chichén Itzá sans stress.”',
      'reviews.featured.four.copy':
        '“Ils ont planifié l’entrée au lever du soleil pour avoir El Castillo presque à nous, avec un guide passionné d’histoire. Les tacos du déjeuner étaient un moment fort.” - <strong>Mariela &amp; Tomás</strong>',
      'reviews.featured.five.title': '“Pêche en famille, facile.”',
      'reviews.featured.five.copy':
        '“Québec Mexique a rempli la glacière, géré les permis et nous a jumelés à un capitaine patient pour que nos enfants attrapent leur premier mahi. Zéro stress, juste des sourires.” - <strong>The Greene crew</strong>',
      'reviews.featured.six.title': '“Parfaite tournée de tacos de rue.”',
      'reviews.featured.six.copy':
        '“On a mangé au centre-ville : al pastor, cochinita, birria, sans jamais faire la file. Notre hôte connaissait les vendeurs par leur prénom et a trouvé des options végés pour mon amie.” - <strong>Avery</strong>',
      'reviews.featured.seven.title': '“Cenote sans foule.”',
      'reviews.featured.seven.copy':
        '“Ils ont trouvé un cenote caché et ont calé notre arrivée entre les autobus. On flottait dans une eau cristalline avec seulement les oiseaux en fond. Serviettes, collations et photos étaient gérées.” - <strong>Jess &amp; Priya</strong>',
      'reviews.featured.eight.title': '“Snorkel digne d’un documentaire.”',
      'reviews.featured.eight.copy':
        '“Notre guide a pointé tortues, raies et même un petit hippocampe timide. L’équipement était parfait et le bateau avait de l’ombre, ce que mon père a apprécié. Ils se sont occupés de tout.” - <strong>Samir</strong>',
      'reviews.featured.nine.title': '“Soirée tacos romantique sur la plage.”',
      'reviews.featured.nine.copy':
        '“Ils ont transformé une envie en soirée complète : tacos grillés, aguas frescas et lumières sous les palmiers. C’était notre date préférée du voyage.” - <strong>Lena &amp; Marco</strong>',
      'reviews.featured.ten.title': '“Aventure accessible, bien organisée.”',
      'reviews.featured.ten.copy':
        '“J’utilise un fauteuil roulant et ils ont coordonné rampes, transport et un guide patient pour Tulum. Je n’ai jamais eu à répéter quoi que ce soit. Tout a roulé.” - <strong>Natalie</strong>',
      'reviews.featured.eleven.title': '“Cours de pêche sous-marine très personnalisés.”',
      'reviews.featured.eleven.copy':
        '“On voulait apprendre en sécurité et ils nous ont jumelés à un expert local axé sur la technique et le respect du récif. On est repartis avec de nouvelles compétences et un dîner préparé avec notre prise.” - <strong>Darius &amp; Cole</strong>',
      'reviews.featured.twelve.title': '“Les enfants ont adoré la sortie nocturne sur la lagune.”',
      'reviews.featured.twelve.copy':
        '“Bioluminescence, histoires et chocolat chaud sur le pont : chaque détail était bien pensé. Même notre ado a laissé son cell pour regarder les étoiles.” - <strong>Ruth &amp; family</strong>',
      'reviews.featured.thirteen.title': '“Journée gourmande du marché au mezcal.”',
      'reviews.featured.thirteen.copy':
        '“On a commencé au marché local pour les épices, pris un cours de cuisine et terminé par une dégustation de mezcal avec un maître. C’était authentique, jamais touristique.” - <strong>Eduardo</strong>',
      'reviews.share.heading': 'Partagez votre expérience',
      'reviews.share.copy':
        'Écrivez-nous à <a href="mailto:info@quebecmexique.com">info@quebecmexique.com</a> avec vos meilleurs moments ou identifiez-nous avec <strong>#QuebecMexique</strong> pour avoir la chance d’apparaître.'
    },
    story: {
      'page.title': 'Notre histoire | Québec Mexique',
      'story.hero.eyebrow': 'Notre histoire',
      'story.hero.heading': 'Nés de l’amour de la mer et des récits',
      'story.hero.copy':
        'Nous croyons que chaque voyageur mérite un récit sur mesure, créé par notre équipe, soutenu par la technologie et rempli d’hospitalité authentique.',
      'story.intro.heading': 'Québec Mexique',
      'story.intro.p1':
        'Notre entreprise est née d’un constat simple : les expériences de voyage étaient devenues précipitées, impersonnelles et déconnectées.',
      'story.intro.p2': 'On savait qu’il devait y avoir une meilleure façon.',
      'story.intro.p3':
        'Au lieu des autobus bondés, des prises en charge partagées qui grugent vos vacances et des visites scénarisées, on a choisi une autre voie : le temps, le confort et la connexion humaine.',
      'story.intro.p4':
        'Chaque expérience est pensée pour vous. Aucun transport partagé. Aucun long détour. Aucun compromis. Des transferts privés aux guides locaux soigneusement choisis, tout est conçu pour une journée fluide, mémorable et significative.',
      'story.intro.p5':
        'Nos guides ne sont pas de simples employés : ce sont des pros passionnés, bien rémunérés, respectés et fiers de leur travail. Cette fierté se ressent dans l’énergie, le soin et l’authenticité de chaque sortie.',
      'story.intro.p6':
        'Nous croyons que les meilleurs moments arrivent quand les gens se sentent détendus, écoutés et vraiment connectés. Cette conviction guide tout ce que nous faisons.',
      'story.intro.p7':
        'Si une expérience ne répond pas à vos attentes, on la corrige. Parce que la confiance, l’intégrité et la connexion humaine comptent plus que le volume.',
      'story.intro.p8': 'Ce n’est pas du tourisme de masse. C’est voyager avec intention.',
      'story.values.connection.title': 'Connexions authentiques',
      'story.values.connection.copy':
        'Nous concevons chaque expérience autour d’une vraie connexion humaine pour que nos invités se sentent accueillis et compris.',
      'story.values.wages.title': 'Guides bien rémunérés',
      'story.values.wages.copy':
        'Nos guides reçoivent des revenus stables et justes, avec respect et stabilité, pour se consacrer entièrement à l’hospitalité.',
      'story.values.awareness.title': 'Conscience sociale',
      'story.values.awareness.copy':
        'Nous agissons avec empathie et sensibilité culturelle, en collaborant avec les communautés locales pour que le tourisme bénéficie à tous.',
      'story.crew.heading': 'Rencontrez l’équipe',
      'story.crew.lila.title': 'Lila Reyes - Fondatrice',
      'story.crew.lila.copy':
        'Biologiste marine devenue conceptrice de voyages, Lila a créé Québec Mexique pour partager des récifs cachés et des communautés insulaires avec des explorateurs respectueux.',
      'story.crew.makai.title': 'Makai Thompson - Architecte d’expériences',
      'story.crew.makai.copy':
        'Élevé entre trois îles, Makai tisse rituels culturels, artisans locaux et saveurs uniques dans chaque itinéraire.',
      'story.crew.sami.title': 'Sami Chen - Responsable technologie',
      'story.crew.sami.copy':
        'Sami a développé notre plateforme collaborative avec disponibilités en direct et messages concierge qui ressemblent à un texto.',
      'story.values.heading': 'Nos valeurs',
      'story.values.regen.title': 'Voyages régénératifs',
      'story.values.regen.copy':
        'Nous nous associons à des projets communautaires de conservation et consacrons une partie de chaque itinéraire à la restauration des récifs.',
      'story.values.hospitality.title': 'Hospitalité avec cœur',
      'story.values.hospitality.copy':
        'Vos hôtes vous accueillent comme de la famille, avec des surprises et de petites attentions tout au long du parcours.',
      'story.values.tech.title': 'Technologie qui s’efface',
      'story.values.tech.copy':
        'Nos outils de planification sont puissants, mais simples, pour que vous pensiez à l’émotion plutôt qu’à la logistique.'
    },
    'tour-detail': {
      'page.title': 'Québec Mexique | Détails de l’excursion',
      'tour.hero.aria': 'Aperçu de l’excursion',
      'tour.hero.eyebrow': 'Aventures favorites des voyageurs',
      'tour.gallery.previous': 'Photo précédente',
      'tour.gallery.next': 'Photo suivante',
      'tour.details.heading': 'Planifiez chaque détail en toute confiance',
      'tour.details.copy': 'Tout ce qu’il faut savoir avant de réserver.',
      'tour.details.about': 'À propos de cette expérience',
      'tour.details.includes': 'Ce qui est inclus',
      'tour.booking.label': 'Réserver maintenant',
      'tour.booking.from': 'À partir de',
      'tour.booking.currency': 'USD',
      'tour.booking.perPerson': 'par personne',
      'tour.booking.helper': 'Les prix baissent lorsque vous ajoutez plus de personnes.',
      'tour.booking.guestsLabel': 'Combien de personnes?',
      'tour.booking.nameLabel': 'Nom',
      'tour.booking.namePlaceholder': 'Votre nom complet',
      'tour.booking.emailLabel': 'Courriel',
      'tour.booking.emailPlaceholder': 'vous@exemple.com',
      'tour.booking.phoneLabel': 'Numéro de téléphone',
      'tour.booking.phonePlaceholder': '+52 984 167 0697',
      'tour.booking.datetimeLabel': 'Date et heure de l’activité',
      'tour.booking.datetimeUnknown': 'Je ne sais pas encore',
      'tour.booking.pickupLabel': 'Lieu de prise en charge',
      'tour.booking.pickupPlaceholder': 'Hôtel ou point de rencontre',
      'tour.booking.submit': 'Réserver maintenant',
      'tour.booking.note':
        'Aucun paiement n’est perçu ici : nous confirmons la disponibilité et vous répondons rapidement.',
      'tour.booking.disclaimer': 'Les prix et promotions peuvent changer sans préavis.',
      'tour.booking.status.hold':
        'Nous bloquons {{guests}} place(s) pour {{tour}}. Nous confirmerons la prise en charge à {{pickup}} sans délai.',
      'tour.booking.status.missingService':
        'Veuillez connecter le formulaire de réservation à votre service de courriel pour recevoir les demandes.',
      'tour.booking.status.sent': 'Demande envoyée! Nous confirmerons la disponibilité et vous répondons rapidement.',
      'tour.booking.status.error': 'Une erreur est survenue lors de l’envoi. Veuillez réessayer dans quelques minutes.',
      'tour.booking.status.unavailable':
        'Impossible d’envoyer votre demande pour le moment. Veuillez réessayer plus tard.',
      'tour.booking.pickupFallback': 'votre lieu',
      'tour.booking.datetimeFallback': 'Non fourni',
      'tour.related.aria': 'Autres aventures',
      'tour.related.heading': 'Continuez à explorer',
      'tour.related.copy': 'D’autres voyageurs ont aussi adoré ces excursions.',
      'tour.related.previous': 'Excursions précédentes',
      'tour.related.next': 'Excursions suivantes'
    }
  }
};

const SUPPORTED_LANGUAGES = ['fr'];
const DEFAULT_LANGUAGE = 'fr';

function getTourContent(tour, lang = DEFAULT_LANGUAGE) {
  const translation = tour.translations?.[lang] || {};
  return {
    name: translation.name || tour.name,
    duration: translation.duration || tour.duration,
    tagline: translation.tagline || tour.tagline,
    description: translation.description || tour.description,
    includes: translation.includes || tour.includes,
    badge: translation.badge || tour.badge
  };
}

const adventureTours = [
  {
    slug: 'promo-mercredi',
    name: 'Promo mercredi : Tortues + Cenote',
    duration: 'Demi-journée • Promo mercredi',
    tagline: '· Tortues marines<br>· Cenote cristallin<br>· Collation fraîche',
    description:
      'Profitez de notre offre spéciale du mercredi pour nager avec les tortues puis vous rafraîchir dans un cenote lumineux. C’est le combo parfait pour une matinée douce, simple et pleine de magie bleue. Places limitées chaque mercredi.',
    includes: [
      '🐢 Snorkel avec les tortues',
      '🌊 2 cenotes',
      '🧗 1 rappel (optionnel, sans frais supplémentaires)',
      '🥪 Snack box et eau'
    ],
    image:
      'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: [
      'assets/TurtlePromo/AkumalPromo01.mov'
    ],
    prices: {
      1: 89,
      2: 89,
      3: 89,
      4: 89,
      5: 89,
      6: 89,
      7: 89,
      8: 89,
      9: 89,
      10: 89,
      11: 89,
      12: 89
    },
    badge: 'Promo mercredi'
  },
  {
    slug: 'tulum-turtles-cenotes',
    name: 'Tulum sous l’eau',
    duration: 'Journée complète • Culture + eau',
    tagline: '· Ruines de Tulum<br>· Snorkel avec tortues<br>· 2 cenotes<br>· Dîner local complet',
    description:
      'Parcourez les falaises de Tulum avec un guide chaleureux, puis plongez pour faire du snorkel avec les tortues avant de vous rafraîchir dans deux superbes cenotes. La journée se déroule en douceur avec des arrêts photo, un rythme facile et un dîner local complet aux saveurs du Yucatán. Une excursion à la fois magique et simple.',
    includes: ['🏛️ Visite des ruines de Tulum', '🐢 Snorkel avec les tortues', '🌊 Nage dans 2 cenotes', '🌮 Dîner local complet'],
    image:
      'https://images.pexels.com/photos/5992273/pexels-photo-5992273.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: [
      'https://images.pexels.com/photos/5992273/pexels-photo-5992273.jpeg?auto=format&fit=crop&w=1200&q=70',
      'https://images.pexels.com/photos/5992273/pexels-photo-5992273.jpeg?auto=format&fit=crop&w=1200&q=70&sat=-6'
    ],
    prices: {
      1: 390,
      2: 268,
      3: 257,
      4: 234,
      5: 212,
      6: 201,
      7: 190,
      8: 179,
      9: 174,
      10: 169,
      11: 169,
      12: 169
    },
    badge: 'Meilleure vente'
  },
  {
    slug: 'cenotes-express',
    name: 'Cenotes Express',
    duration: 'Demi-journée • Circuit de cenotes',
    tagline: '· 4 cenotes<br>· Descente en rappel dans une caverne<br>· Collation et bières',
    description:
      'Plongez dans quatre cenotes différents, chacun plus beau que le précédent, puis descendez en rappel dans une caverne pour un vrai moment wow. Entre les baignades, vous aurez le temps de reprendre des forces avec une collation et une boisson froide. Une aventure compacte remplie de moments aquatiques.',
    includes: ['🌊 Visite de 4 cenotes', '🧗 Descente en rappel dans une caverne', '🍺 Collation et bières'],
    image:
      'https://images.pexels.com/photos/2410870/pexels-photo-2410870.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: ['https://images.pexels.com/photos/2410870/pexels-photo-2410870.jpeg?auto=format&fit=crop&w=1200&q=70'],
    prices: {
      1: 295,
      2: 173,
      3: 162,
      4: 140,
      5: 118,
      6: 107,
      7: 95,
      8: 84,
      9: 79,
      10: 74,
      11: 74,
      12: 74
    },
    badge: 'Nouvel itinéraire'
  },
  {
    slug: 'turtles-cenotes',
    name: 'Tortues + Cenotes',
    duration: 'Demi-journée • Océan + jungle',
    tagline: '· Tortues marines<br>· 3 cenotes<br>· Collation et boissons',
    description:
      'Passez une matinée de rêve dans l’eau, en commençant par un snorkel doux avec les tortues de mer et en terminant dans trois cenotes cristallins cachés dans la jungle. Chaque arrêt ressemble à une carte postale, avec du temps pour flotter, respirer et profiter. Une aventure simple et mémorable qui reste grandiose et inoubliable.',
    includes: ['🐢 Nager avec les tortues marines', '🤿 Snorkel dans 3 cenotes', '🥤 Collation et boissons'],
    image:
      'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?_gl=1*1leu1xd*_ga*NTc3NjYyMTQzLjE3NjU4MTE2NzU.*_ga_8JE65Q40S6*czE3NjU5MDM2NjEkbzMkZzEkdDE3NjU5MDM2ODckajM0JGwwJGgw',
    gallery: [
      'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?_gl=1*1leu1xd*_ga*NTc3NjYyMTQzLjE3NjU4MTE2NzU.*_ga_8JE65Q40S6*czE3NjU5MDM2NjEkbzMkZzEkdDE3NjU5MDM2ODckajM0JGwwJGgw',
      'https://images.pexels.com/photos/32865198/pexels-photo-32865198.jpeg?auto=format&fit=crop&w=1200&q=70',
      'https://images.pexels.com/photos/32865198/pexels-photo-32865198.jpeg?auto=format&fit=crop&w=1200&q=70&sat=-8'
    ],
    prices: {
      1: 340,
      2: 218,
      3: 207,
      4: 184,
      5: 162,
      6: 151,
      7: 140,
      8: 129,
      9: 124,
      10: 119,
      11: 119,
      12: 119
    },
    badge: 'Coup de cœur'
  },
  {
    slug: 'tulum-express',
    name: 'Tulum Express',
    duration: 'Demi-journée • Touche culturelle',
    tagline: '· Ruines de Tulum<br>· Boissons et bières<br>· (Optionnel) Temps libre à Tulum',
    description:
      'Explorez les ruines de Tulum avec un guide certifié qui rend l’histoire claire et agréable. Vous aurez le temps pour les vues iconiques, de belles photos et une marche relax. Après la visite, profitez d’un temps libre optionnel pour magasiner, prendre un café ou une collation.',
    includes: ['🏛️ Entrée des ruines de Tulum', '🍹 Boissons et bières', '🛍️ Temps libre optionnel à Tulum'],
    image:
      'https://images.pexels.com/photos/13713189/pexels-photo-13713189.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: ['https://images.pexels.com/photos/13713189/pexels-photo-13713189.jpeg?auto=format&fit=crop&w=1200&q=70'],
    prices: {
      1: 290,
      2: 168,
      3: 157,
      4: 135,
      5: 113,
      6: 102,
      7: 90,
      8: 79,
      9: 74,
      10: 69,
      11: 69,
      12: 69
    },
    badge: 'Escapade rapide'
  },
  {
    slug: 'tacos-tour',
    name: 'Tournée tacos',
    duration: 'Soirée • Parcours gourmand',
    tagline: '· Tacos authentiques<br>· Bières, tequila et mezcal<br>· Temps libre à Playa del Carmen',
    description:
      'Goûtez des tacos authentiques dans des adresses locales, dégustez tequila ou mezcal et profitez d’une soirée animée à Playa del Carmen sans se presser. Chaque arrêt est simple, savoureux et plein de charme local. Une soirée délicieuse qui ressemble à une célébration.',
    includes: ['🌮 Tacos authentiques', '🥃 Bières, tequila et mezcal', '🌆 Temps libre à Playa del Carmen'],
    image:
      'https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: ['https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=format&fit=crop&w=1200&q=70'],
    prices: {
      1: 280,
      2: 158,
      3: 147,
      4: 125,
      5: 103,
      6: 92,
      7: 80,
      8: 69,
      9: 64,
      10: 59,
      11: 59,
      12: 59
    },
    badge: 'Favori gourmand'
  },
  {
    slug: 'tulum-coba',
    name: 'Tulum + Cobá',
    duration: 'Journée complète • Ruines + cenote',
    tagline: '· Ruines de Tulum<br>· Ruines de Cobá<br>· Cenote avec tyrolienne<br>· Buffet local et boissons',
    description:
      'Passez une journée complète à visiter les ruines de Tulum et de Cobá avec des guides qui expliquent tout simplement et clairement. Rafraîchissez-vous dans un cenote avec tyrolienne, puis terminez avec un buffet local et des boissons. Une excursion complète qui reste fluide.',
    includes: ['🏛️ Ruines de Tulum', '🌿 Ruines de Cobá', '🪂 Cenote avec tyrolienne', '🥘 Buffet local et boissons'],
    image:
      'https://images.pexels.com/photos/17179205/pexels-photo-17179205.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: ['https://images.pexels.com/photos/17179205/pexels-photo-17179205.jpeg?auto=format&fit=crop&w=1200&q=70'],
    prices: {
      1: 534,
      2: 300,
      3: 267,
      4: 256,
      5: 234,
      6: 212,
      7: 200,
      8: 189,
      9: 184,
      10: 179,
      11: 179,
      12: 179
    },
    badge: 'Aventure d’une journée'
  },
  {
    slug: 'coba',
    name: 'Cobá',
    duration: 'Journée complète • Histoire dans la jungle',
    tagline: '· Ruines de Cobá<br>· Tour à vélo sur le site<br>· Cenote avec tyrolienne<br>· Buffet régional et boissons',
    description:
      'Parcourez à vélo les ruines de Cobá dans la jungle avec un guide qui fait revivre l’histoire de façon simple et captivante. Ensuite, rafraîchissez-vous dans un cenote avec tyrolienne et profitez d’un buffet régional avec boissons. Une grande journée qui reste relax.',
    includes: ['🌿 Ruines de Cobá', '🚲 Tour à vélo sur le site', '🪂 Cenote avec tyrolienne', '🥘 Buffet régional et boissons'],
    image:
      'https://images.pexels.com/photos/14902028/pexels-photo-14902028.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: ['https://images.pexels.com/photos/14902028/pexels-photo-14902028.jpeg?auto=format&fit=crop&w=1200&q=70'],
    prices: {
      1: 367,
      2: 234,
      3: 228,
      4: 189,
      5: 167,
      6: 156,
      7: 164,
      8: 134,
      9: 129,
      10: 124,
      11: 124,
      12: 124
    },
    badge: 'Histoire vivante'
  },
  {
    slug: 'chichen-itza',
    name: 'Chichén Itzá',
    duration: 'Journée complète • Merveille du monde',
    tagline: '· Ruines de Chichén Itzá<br>· Cenote avec tyrolienne<br>· Buffet local avec boissons',
    description:
      'Découvrez Chichén Itzá avec un guide passionné qui partage les histoires des temples de façon claire et mémorable. Puis nagez dans un cenote avec tyrolienne avant un buffet régional avec boissons. Une excursion de classe mondiale, fluide et exaltante.',
    includes: ['🗿 Ruines de Chichén Itzá', '🪂 Cenote avec tyrolienne', '🥘 Buffet local avec boissons'],
    image:
      'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: ['https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=format&fit=crop&w=1200&q=70'],
    prices: {
      2: 317,
      3: 317,
      4: 272,
      5: 239,
      6: 217,
      7: 205,
      8: 194,
      9: 189,
      10: 184,
      11: 184,
      12: 184
    },
    badge: 'Site UNESCO'
  },
  {
    slug: 'coba-chichen-itza',
    name: 'Cobá + Chichén Itzá',
    duration: 'Journée complète • Deux merveilles',
    tagline: '· Ruines de Cobá<br>· Ruines de Chichén Itzá<br>· Cenote avec tyrolienne<br>· Buffet local avec boissons',
    description:
      'Visitez Cobá au cœur de la jungle et Chichén Itzá sur la plaine en une seule journée bien rythmée. Coupez l’aventure avec une tyrolienne en cenote et un buffet régional avec boissons. Une excursion unique, facile et amusante.',
    includes: ['🌿 Ruines de Cobá', '🗿 Ruines de Chichén Itzá', '🪂 Cenote avec tyrolienne', '🥘 Buffet local avec boissons'],
    image:
      'https://images.pexels.com/photos/31657162/pexels-photo-31657162.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: ['https://images.pexels.com/photos/31657162/pexels-photo-31657162.jpeg?auto=format&fit=crop&w=1200&q=70'],
    prices: {
      2: 352,
      3: 352,
      4: 307,
      5: 274,
      6: 252,
      7: 240,
      8: 229,
      9: 224,
      10: 219,
      11: 219,
      12: 219
    },
    badge: 'Circuit épique'
  },
  {
    slug: 'holbox-express',
    name: 'Holbox Express',
    duration: 'Journée complète • Saut d’îles',
    tagline:
      '· Bateau rapide privé<br>· Saut entre 3 îles<br>· Car de golf<br>· Temps libre sur l’île<br>· Buffet de beach club avec bar ouvert',
    description:
      'Montez à bord d’un bateau rapide privé pour sauter entre les îles de Holbox, relaxer sur des bancs de sable blancs et explorer à votre rythme. L’eau est superbe, l’ambiance décontractée et la journée ressemble à un film tropical. Un buffet de beach club avec bar ouvert garde le tout festif et simple.',
    includes: ['🚤 Bateau rapide privé', '🏝️ Saut entre 3 îles', '🛺 Car de golf', '🏖️ Temps libre sur l’île', '🍹 Buffet de beach club avec bar ouvert'],
    image:
      'https://images.pexels.com/photos/11481626/pexels-photo-11481626.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: ['https://images.pexels.com/photos/11481626/pexels-photo-11481626.jpeg?auto=format&fit=crop&w=1200&q=70'],
    prices: {
      1: 740,
      2: 384,
      3: 329,
      4: 273,
      5: 229,
      6: 195,
      7: 173,
      8: 151,
      9: 146,
      10: 141,
      11: 141,
      12: 141
    },
    badge: 'Vie insulaire'
  },
  {
    slug: 'dolphin-turtle',
    name: 'Dauphins + Tortues',
    duration: 'Journée complète • Réserve UNESCO',
    tagline:
      '· Sian Ka’an en bateau rapide<br>· Dauphins + tortues<br>· Observation d’oiseaux<br>· Snorkel sur récif<br>· Buffet local',
    description:
      'Parcourez la réserve de Sian Ka’an en bateau rapide pour chercher dauphins, tortues et vie récifale dans un paradis protégé. Ralentissez pour l’observation d’oiseaux, puis faites du snorkel avant de terminer par un buffet en bord de mer. Une excursion époustouflante qui mélange faune, eau et détente.',
    includes: ['🚤 Sian Ka’an en bateau rapide', '🐬 Dauphins et tortues', '🦜 Observation d’oiseaux', '🤿 Snorkel sur récif', '🍽️ Buffet local'],
    image:
      'https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: ['https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=format&fit=crop&w=1200&q=70'],
    prices: {
      1: 707,
      2: 376,
      3: 254,
      4: 210,
      5: 176,
      6: 198,
      7: 176,
      8: 165,
      9: 160,
      10: 155,
      11: 155,
      12: 155
    },
    badge: 'Réserve UNESCO'
  },
  {
    slug: 'fishing-half-day',
    name: 'Pêche demi-journée',
    duration: 'Demi-journée • Bateau privé',
    tagline: '· Bateau privé<br>· Équipement de pêche<br>· Ceviche et poisson frais<br>· Boissons et bières',
    description:
      'Profitez d’une sortie de pêche privée avec des guides pros, des eaux calmes et un rythme facile le long de la côte. Ramenez votre prise, puis savourez ceviche frais, poisson et boissons froides à bord. Une façon simple et incroyable de passer une demi-journée dans les Caraïbes.',
    includes: ['🛥️ Bateau privé', '🎣 Équipement de pêche', '🐟 Ceviche frais et poisson', '🍺 Boissons et bières'],
    image:
      'https://images.pexels.com/photos/3793366/pexels-photo-3793366.jpeg?auto=format&fit=crop&w=1200&q=70',
    gallery: [
      'https://images.pexels.com/photos/3793366/pexels-photo-3793366.jpeg?auto=format&fit=crop&w=1200&q=70',
      'https://images.pexels.com/photos/3793366/pexels-photo-3793366.jpeg?auto=format&fit=crop&w=1200&q=70&sat=-10'
    ],
    prices: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0
    },
    badge: 'Bateau privé'
  }
];


const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

function interpolate(template, replacements = {}) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(replacements, key) ? String(replacements[key]) : ''
  );
}

function createLanguageManager(pageKey) {
  const LANGUAGE_STORAGE_KEY = 'preferred-language';
  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const documentLanguage = document.documentElement.lang;
  let currentLanguage = SUPPORTED_LANGUAGES.includes(storedLanguage || '')
    ? storedLanguage
    : SUPPORTED_LANGUAGES.includes(documentLanguage)
    ? documentLanguage
    : DEFAULT_LANGUAGE;
  const listeners = new Set();

  function getTranslationValue(lang, key) {
    const languageSet = translations[lang];
    if (!languageSet) return null;

    if (languageSet.global && Object.prototype.hasOwnProperty.call(languageSet.global, key)) {
      return languageSet.global[key];
    }

    if (pageKey && languageSet[pageKey] && Object.prototype.hasOwnProperty.call(languageSet[pageKey], key)) {
      return languageSet[pageKey][key];
    }

    return null;
  }

  function translateDocument(lang) {
    const languageSet = translations[lang];
    if (!languageSet) return;

    document.documentElement.lang = lang;

    const groups = [];
    if (languageSet.global) {
      groups.push(languageSet.global);
    }
    if (pageKey && languageSet[pageKey]) {
      groups.push(languageSet[pageKey]);
    }

    groups.forEach((group) => {
      Object.entries(group).forEach(([key, value]) => {
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        if (!elements.length) return;

        elements.forEach((element) => {
          const attr = element.dataset.i18nAttr;
          if (attr === 'html') {
            element.innerHTML = value;
          } else if (attr) {
            element.setAttribute(attr, value);
          } else {
            element.textContent = value;
          }
        });
      });
    });
  }

  function notify(lang) {
    listeners.forEach((callback) => {
      try {
        callback(lang);
      } catch (error) {
        console.error(error);
      }
    });
  }

  function applyLanguage(lang) {
    translateDocument(lang);
    notify(lang);
  }

  return {
    init() {
      applyLanguage(currentLanguage);
    },
    getLanguage() {
      return currentLanguage;
    },
    setLanguage(lang) {
      if (!SUPPORTED_LANGUAGES.includes(lang) || lang === currentLanguage) {
        return;
      }

      currentLanguage = lang;
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      applyLanguage(lang);
    },
    onChange(callback) {
      if (typeof callback !== 'function') {
        return () => {};
      }

      listeners.add(callback);
      callback(currentLanguage);
      return () => listeners.delete(callback);
    },
    translate(key, replacements = {}, lang = currentLanguage) {
      const template = getTranslationValue(lang, key);
      if (typeof template !== 'string') {
        return '';
      }

      return interpolate(template, replacements);
    }
  };
}

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const pageKey = document.body?.dataset.page || 'home';
    const languageManager = createLanguageManager(pageKey);
    const isToursPage = pageKey === 'tours';

    setupNavigation();
    setupLanguageToggle(languageManager);
    window.addEventListener('resize', scheduleNavControlWidthSync, { passive: true });

    const refreshTourLists = () => {
      const catalogTours = isToursPage
        ? adventureTours.filter((tour) => tour.slug !== 'promo-mercredi')
        : adventureTours;
      if (isToursPage) {
        buildToursHeroSlider(catalogTours, languageManager);
        buildToursCatalog(catalogTours, languageManager);
      }
      buildFavoritesCarousel(adventureTours, languageManager);
      setupCardCarousels();
      setupMediaPrefetch();
    };

    refreshTourLists();
    setupHeroSlider(languageManager);
    initTourPage(adventureTours, languageManager);
    setupMediaPrefetch();
    setupInquiryForm(languageManager);
    setCurrentYear();

    languageManager.init();
    languageManager.onChange(refreshTourLists);
    scheduleNavControlWidthSync();
  });
})();

function setupNavigation() {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('.nav__links');

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

let navControlWidthSyncScheduled = false;

function syncNavControlWidths() {
  navControlWidthSyncScheduled = false;
  const controls = Array.from(document.querySelectorAll('.language-toggle'));
  if (controls.length < 2) {
    return;
  }

  controls.forEach((control) => {
    control.style.removeProperty('--nav-control-width');
  });

  const maxWidth = controls.reduce((largest, control) => {
    const { width } = control.getBoundingClientRect();
    return width > largest ? width : largest;
  }, 0);

  if (!maxWidth) {
    return;
  }

  const widthValue = `${Math.ceil(maxWidth)}px`;
  controls.forEach((control) => {
    control.style.setProperty('--nav-control-width', widthValue);
  });
}

function scheduleNavControlWidthSync() {
  if (navControlWidthSyncScheduled) {
    return;
  }

  navControlWidthSyncScheduled = true;
  const scheduler =
    typeof window.requestAnimationFrame === 'function'
      ? window.requestAnimationFrame.bind(window)
      : (callback) => window.setTimeout(callback, 16);

  scheduler(() => {
    syncNavControlWidths();
  });
}

function setupLanguageToggle(languageManager) {
  const toggle = document.querySelector('[data-language-toggle]');
  if (!toggle) return;

  toggle.textContent = 'Français';
  toggle.setAttribute('aria-pressed', 'true');
  scheduleNavControlWidthSync();
}

function setupHeroSlider(languageManager) {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.hero-slide'));
  const dotsContainer = slider.querySelector('.hero-slider__dots');
  const prevButton = slider.querySelector('[data-slide="prev"]');
  const nextButton = slider.querySelector('[data-slide="next"]');

  if (!slides.length) return;

  let currentIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (currentIndex === -1) {
    slides[0].classList.add('is-active');
    currentIndex = 0;
  }

  const HAVE_CURRENT_DATA =
    typeof HTMLMediaElement !== 'undefined' ? HTMLMediaElement.HAVE_CURRENT_DATA : 2;
  let autoRotateTimer = null;
  const DEFAULT_ROTATE_INTERVAL = 7000;
  const hasMultipleSlides = slides.length > 1;

  const ensureMediaSource = (slide, index, eager = false) => {
    const media = slide.querySelector('.hero-slide__media');
    if (!media) return null;

    if (!media.src && media.dataset?.src && (eager || slide.classList.contains('is-active'))) {
      media.src = media.dataset.src;
    }

    if (media.tagName.toLowerCase() === 'video') {
      media.preload = eager ? 'auto' : 'metadata';
    }

    return media;
  };

  const handleMediaEnded = (index) => {
    if (!hasMultipleSlides) return;
    if (currentIndex !== index) return;
    nextSlide();
  };

  slides.forEach((slide, index) => {
    const media = ensureMediaSource(slide, index, index === currentIndex);
    if (!media) return;
    const isVideo = media.tagName.toLowerCase() === 'video';
    const endOffsetSeconds = Number(media.dataset?.endOffset ?? media.dataset?.endOffsetSeconds ?? 0);

    const markLoaded = () => {
      media.classList.add('is-loaded');
    };

    if (isVideo) {
      media.muted = true;
      media.setAttribute('muted', '');
      media.playsInline = true;
      media.setAttribute('playsinline', '');
      media.loop = false;
      media.preload = index === currentIndex ? 'auto' : 'metadata';

      if (media.readyState >= HAVE_CURRENT_DATA) {
        markLoaded();
      } else {
        ['loadeddata', 'canplay'].forEach((eventName) => {
          media.addEventListener(eventName, markLoaded, { once: true });
        });
      }

      media.addEventListener('loadedmetadata', () => {
        if (index === currentIndex) {
          scheduleAutoRotate();
        }
      });

      if (Number.isFinite(endOffsetSeconds) && endOffsetSeconds > 0) {
        const handleEarlyEnd = () => {
          const { duration, currentTime } = media;
          if (!Number.isFinite(duration)) return;

          const effectiveEnd = Math.max(0, duration - endOffsetSeconds);
          if (currentTime >= effectiveEnd) {
            media.pause();
            media.removeEventListener('timeupdate', handleEarlyEnd);
            handleMediaEnded(index);
          }
        };

        media.addEventListener('timeupdate', handleEarlyEnd);
      }

      media.addEventListener(
        'error',
        () => {
          slide.classList.add('hero-slide--unavailable');
        },
        { once: true }
      );

      media.addEventListener('ended', () => handleMediaEnded(index));
    } else {
      const handleError = () => {
        markLoaded();
        slide.classList.add('hero-slide--unavailable');
      };

      if (media.complete) {
        markLoaded();
      } else {
        media.addEventListener('load', markLoaded, { once: true });
        media.addEventListener('error', handleError, { once: true });
      }
    }
  });

  function setSlideState(slide, isActive, index) {
    slide.classList.toggle('is-active', isActive);
    slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');

    const video = ensureMediaSource(slide, index, isActive);
    if (!video) return;

    if (isActive) {
      if (video.tagName.toLowerCase() === 'video') {
        video.muted = true;
        video.setAttribute('muted', '');
        video.playsInline = true;
        video.setAttribute('playsinline', '');
      }
      if (video.preload !== 'auto') {
        video.preload = 'auto';
      }
      if (video.readyState < HAVE_CURRENT_DATA && typeof video.load === 'function') {
        video.load();
      }
      if (typeof video.play === 'function') {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {});
        }
      }
    } else {
      if (video.preload !== 'metadata') {
        video.preload = 'metadata';
      }
      if (typeof video.pause === 'function') {
        video.pause();
      }
      if (!video.loop) {
        try {
          video.currentTime = 0;
        } catch (error) {
          // Some browsers might not allow resetting the currentTime for certain sources.
        }
      }
    }
  }

  function syncSlides() {
    slides.forEach((slide, index) => {
      setSlideState(slide, index === currentIndex, index);
    });
  }

  function goToSlide(index) {
    const nextIndex = (index + slides.length) % slides.length;
    if (nextIndex === currentIndex) return;

    const previousSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];

    setSlideState(previousSlide, false, currentIndex);
    currentIndex = nextIndex;
    setSlideState(nextSlide, true, currentIndex);
    updateDots();
    restartAutoRotate();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function previousSlide() {
    goToSlide(currentIndex - 1);
  }

  const scheduleAutoRotate = () => {
    if (!hasMultipleSlides) return;
    stopAutoRotate();

    const activeSlide = slides[currentIndex];
    const activeVideo = ensureMediaSource(activeSlide, currentIndex, true);
    const duration = activeVideo?.duration;
    const delay = Number.isFinite(duration) && duration > 0 ? duration * 1000 : DEFAULT_ROTATE_INTERVAL;

    autoRotateTimer = window.setTimeout(nextSlide, delay);
  };

  function startAutoRotate() {
    scheduleAutoRotate();
  }

  function stopAutoRotate() {
    if (autoRotateTimer) {
      window.clearTimeout(autoRotateTimer);
      autoRotateTimer = null;
    }
  }

  function restartAutoRotate() {
    scheduleAutoRotate();
  }

  function updateDotLabels(lang = languageManager.getLanguage()) {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.hero-slider__dot');
    dots.forEach((dot, index) => {
      dot.setAttribute('aria-label', languageManager.translate('heroSlider.goToSlide', { index: index + 1 }, lang));
    });
  }

  function buildDots() {
    if (!dotsContainer || !hasMultipleSlides) return;

    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'hero-slider__dot';
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', languageManager.translate('heroSlider.goToSlide', { index: index + 1 }));
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.append(dot);
    });

    updateDots();
  }

  function updateDots() {
    if (!dotsContainer || !hasMultipleSlides) return;
    const dots = dotsContainer.querySelectorAll('.hero-slider__dot');
    dots.forEach((dot, index) => {
      dot.setAttribute('aria-selected', index === currentIndex ? 'true' : 'false');
    });
    updateDotLabels();
  }

  syncSlides();

  prevButton?.addEventListener('click', previousSlide);
  nextButton?.addEventListener('click', nextSlide);

  if (hasMultipleSlides) {
    slider.addEventListener('mouseenter', stopAutoRotate);
    slider.addEventListener('mouseleave', startAutoRotate);
    slider.addEventListener('focusin', stopAutoRotate);
    slider.addEventListener('focusout', startAutoRotate);
  }

  buildDots();
  startAutoRotate();

  languageManager.onChange(updateDotLabels);
}

function buildToursHeroSlider(tours, languageManager) {
  const slider = document.querySelector('[data-tour-hero-slider]');
  const track = slider?.querySelector('[data-tour-hero-track]');
  if (!slider || !track || !tours.length) return;

  const lang = languageManager?.getLanguage() || DEFAULT_LANGUAGE;
  const updateSlide = (slide, tour) => {
    const content = getTourContent(tour, lang);
    const title = slide.querySelector('[data-tour-hero-title]');
    const cta = slide.querySelector('[data-tour-hero-cta]');
    const link = slide.querySelector('.hero-slide__link');
    const image = slide.querySelector('img');
    const viewLabel = languageManager?.translate('tour.card.viewAria', { name: content.name }, lang) || content.name;

    if (title) title.textContent = content.name;
    if (cta) cta.textContent = languageManager?.translate('tour.card.bookNow', {}, lang) || 'Book now';
    if (link) link.setAttribute('aria-label', viewLabel);
    if (image) image.alt = viewLabel;
  };

  if (!track.children.length) {
    tours.forEach((tour, index) => {
      const content = getTourContent(tour, lang);
      const slide = document.createElement('article');
      slide.className = `hero-slide${index === 0 ? ' is-active' : ''}`;
      slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
      slide.dataset.tourSlug = tour.slug;
      const viewLabel = languageManager?.translate('tour.card.viewAria', { name: content.name }, lang) || content.name;
      slide.innerHTML = `
        <a class="hero-slide__link" href="tour.html?tour=${tour.slug}" aria-label="${viewLabel}">
          <img class="hero-slide__media" src="${tour.image}" alt="${viewLabel}" loading="lazy" decoding="async" />
          <div class="hero-slide__overlay">
            <h2 data-tour-hero-title>${content.name}</h2>
            <span class="button button--primary hero-slide__cta" data-tour-hero-cta>${languageManager?.translate('tour.card.bookNow', {}, lang) || 'Book now'}</span>
          </div>
        </a>
      `;
      track.appendChild(slide);
    });
  } else {
    Array.from(track.children).forEach((slide) => {
      const slug = slide.dataset.tourSlug;
      const tour = tours.find((item) => item.slug === slug);
      if (tour) {
        updateSlide(slide, tour);
      }
    });
  }
}

function createFavoriteCard(tour, languageManager) {
  const halfDaySlugs = new Set(['tulum-express', 'cenotes-express', 'tacos-tour', 'turtles-cenotes']);
  const lang = languageManager?.getLanguage() || DEFAULT_LANGUAGE;
  const content = getTourContent(tour, lang);
  const durationKey = halfDaySlugs.has(tour.slug) ? 'tour.card.halfDay' : 'tour.card.fullDay';
  const durationLabel = tour.slug === 'promo-mercredi'
    ? 'Tour Partagé'
    : (languageManager?.translate(durationKey, {}, lang) || content.duration);
  const viewLabel = languageManager?.translate('tour.card.viewDetails', {}, lang) || 'View details';
  const ariaLabel = languageManager?.translate('tour.card.viewAria', { name: content.name }, lang) || content.name;
  const tagLabel = content.badge || content.tagline;
  const article = document.createElement('article');
  article.className = `card favorite-card${tour.slug === 'promo-mercredi' ? ' favorite-card--promo' : ''}`;
  article.setAttribute('role', 'listitem');
  article.innerHTML = `
    <a class="favorite-card__media" href="tour.html?tour=${tour.slug}" aria-label="${ariaLabel}">
      <img src="${tour.image}" alt="${content.name}" loading="lazy" decoding="async" />
      <span class="favorite-card__tag">${tagLabel}</span>
      <span class="favorite-card__badge">${durationLabel}</span>
    </a>
    <div class="favorite-card__body">
      <h3>${content.name}</h3>
      <p class="favorite-card__deal">${content.tagline}</p>
      <p class="favorite-card__copy">${content.description}</p>
      <a class="button button--primary favorite-card__cta" href="tour.html?tour=${tour.slug}">${viewLabel}</a>
    </div>
  `;
  return article;
}

function createTourGridCard(tour, languageManager) {
  const lang = languageManager?.getLanguage() || DEFAULT_LANGUAGE;
  const content = getTourContent(tour, lang);
  const badgeLabel = content.badge || languageManager?.translate('tour.card.privateBadge', {}, lang) || 'Private tour';
  const ctaLabel = languageManager?.translate('tour.card.bookNow', {}, lang) || 'Book now';
  const ariaLabel = languageManager?.translate('tour.card.viewAria', { name: content.name }, lang) || content.name;
  const article = document.createElement('article');
  article.className = 'card tour-grid-card';
  article.setAttribute('role', 'listitem');
  article.innerHTML = `
    <div class="tour-grid-card__media">
      <a href="tour.html?tour=${tour.slug}" aria-label="${ariaLabel}">
        <img src="${tour.image}" alt="${content.name}" loading="lazy" decoding="async" />
        <span class="tour-grid-card__badge">${badgeLabel}</span>
      </a>
    </div>
    <div class="tour-grid-card__body">
      <h3 class="tour-grid-card__title">${content.name}</h3>
      <p class="tour-grid-card__meta">${content.duration}</p>
      <p class="tour-grid-card__copy">${content.description}</p>
      <a class="button button--primary tour-grid-card__cta" href="tour.html?tour=${tour.slug}">${ctaLabel}</a>
    </div>
  `;
  return article;
}

function populateCardTrack(selector, tours, languageManager) {
  const track = document.querySelector(selector);
  if (!track) return null;
  track.innerHTML = '';
  tours.forEach((tour) => track.appendChild(createFavoriteCard(tour, languageManager)));
  return track;
}

function buildToursCatalog(tours, languageManager) {
  const grid = document.querySelector('[data-tour-grid]');
  if (!grid || !tours.length) return;

  grid.innerHTML = '';
  tours.forEach((tour) => grid.appendChild(createTourGridCard(tour, languageManager)));
}

function buildFavoritesCarousel(tours, languageManager) {
  const track = populateCardTrack('[data-favorites-track]', tours, languageManager);
  const viewport = track?.closest('.favorites-carousel')?.querySelector('.favorites-carousel__viewport');
  if (viewport) {
    viewport.scrollLeft = 0;
  }
}

function setupCardCarousels() {
  const carousels = document.querySelectorAll('[data-card-carousel]');
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    if (carousel.dataset.carouselReady === 'true') {
      if (typeof carousel._updateArrowState === 'function') {
        carousel._updateArrowState();
      }
      return;
    }

    const viewport = carousel.querySelector('.favorites-carousel__viewport');
    const track = carousel.querySelector('.favorites-carousel__track');
    const prevButton = carousel.querySelector('[data-carousel-arrow="prev"]');
    const nextButton = carousel.querySelector('[data-carousel-arrow="next"]');

    if (!viewport || !track) return;

    const getGap = () => {
      const styles = window.getComputedStyle(track);
      const gapValue = parseFloat(styles.columnGap || styles.gap || '0');
      return Number.isFinite(gapValue) ? gapValue : 0;
    };

    const updateArrowState = () => {
      const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      const atStart = viewport.scrollLeft <= 1;
      const atEnd = viewport.scrollLeft >= maxScroll - 1;

      if (prevButton) {
        prevButton.disabled = atStart;
      }
      if (nextButton) {
        nextButton.disabled = atEnd;
      }

      carousel.classList.toggle('favorites-carousel--is-scrollable', maxScroll > 1);
    };

    const scrollByDirection = (direction) => {
      const multiplier = direction < 0 ? -1 : 1;
      const card = track.querySelector('.favorite-card');
      const cardWidth = card ? card.getBoundingClientRect().width : viewport.clientWidth;
      const target = viewport.scrollLeft + multiplier * (cardWidth + getGap());
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const clamped = Math.max(0, Math.min(target, maxScroll));
      viewport.scrollTo({ left: clamped, behavior: 'smooth' });
    };

    prevButton?.addEventListener('click', () => scrollByDirection(-1));
    nextButton?.addEventListener('click', () => scrollByDirection(1));

    let scrollRaf = null;
    const handleScroll = () => {
      if (scrollRaf) return;
      scrollRaf = window.requestAnimationFrame(() => {
        scrollRaf = null;
        updateArrowState();
      });
    };

    viewport.addEventListener('scroll', handleScroll, { passive: true });

    let resizeRaf = null;
    const handleResize = () => {
      if (resizeRaf) return;
      resizeRaf = window.requestAnimationFrame(() => {
        resizeRaf = null;
        updateArrowState();
      });
    };

    window.addEventListener('resize', handleResize);

    updateArrowState();
    carousel.dataset.carouselReady = 'true';
    carousel._updateArrowState = updateArrowState;
  });
}

const mediaPreloadSources = new Set();
let mediaPreloadObserver = null;

function preloadImageSource(source) {
  if (!source || mediaPreloadSources.has(source)) return;
  const image = new Image();
  image.decoding = 'async';
  image.src = source;
  mediaPreloadSources.add(source);
}

function getMediaPreloadObserver() {
  if (mediaPreloadObserver || typeof IntersectionObserver === 'undefined') {
    return mediaPreloadObserver;
  }

  mediaPreloadObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        observer.unobserve(target);

        if (target instanceof HTMLImageElement) {
          const source = target.currentSrc || target.src;
          preloadImageSource(source);
        }
      });
    },
    {
      rootMargin: '240px 0px',
      threshold: 0.01
    }
  );

  return mediaPreloadObserver;
}

function setupMediaPrefetch() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]:not([data-preload-ready])');
  if (!lazyImages.length) return;

  const observer = getMediaPreloadObserver();
  lazyImages.forEach((image) => {
    image.dataset.preloadReady = 'true';
    if (observer) {
      observer.observe(image);
    } else {
      preloadImageSource(image.currentSrc || image.src);
    }
  });
}

function setupTourGallery(gallery) {
  if (!gallery) return;

  const track = gallery.querySelector('[data-tour-gallery-track]');
  const prevButton = gallery.querySelector('[data-gallery-arrow="prev"]');
  const nextButton = gallery.querySelector('[data-gallery-arrow="next"]');
  const slides = track ? Array.from(track.children) : [];
  let current = 0;

  const update = () => {
    if (!track) return;
    track.style.transform = `translate3d(-${current * 100}%, 0, 0)`;
    const disableArrows = slides.length <= 1;
    if (prevButton) prevButton.disabled = disableArrows;
    if (nextButton) nextButton.disabled = disableArrows;
  };

  const goTo = (direction) => {
    if (!slides.length) return;
    current = (current + direction + slides.length) % slides.length;
    update();
  };

  prevButton?.addEventListener('click', () => goTo(-1));
  nextButton?.addEventListener('click', () => goTo(1));

  update();
}

function initTourPage(tours, languageManager) {
  const tourPage = document.querySelector('[data-tour-page]');
  if (!tourPage || !tours.length) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('tour') || tourPage.dataset.defaultTour;
  const baseTour = tours.find((item) => item.slug === slug) || tours[0];
  if (!baseTour) return;

  const galleryTrack = document.querySelector('[data-tour-gallery-track]');
  const galleryWrapper = document.querySelector('[data-tour-gallery]');
  const titleEl = document.querySelector('[data-tour-title]');
  const durationEl = document.querySelector('[data-tour-duration]');
  const taglineEl = document.querySelector('[data-tour-tagline]');
  const descriptionEl = document.querySelector('[data-tour-description]');
  const includesEl = document.querySelector('[data-tour-includes]');
  const priceEl = document.querySelector('[data-tour-price]');
  const guestSelect = document.querySelector('[data-tour-guests]');
  const bookingForm = document.querySelector('[data-tour-booking]');
  const noteEl = bookingForm?.querySelector('.tour-booking__note');
  const nameInput = document.querySelector('[data-tour-name]');
  const emailInput = document.querySelector('[data-tour-email]');
  const phoneInput = document.querySelector('[data-tour-phone]');
  const dateTimeInput = document.querySelector('[data-tour-datetime]');
  const dateTimeUnknown = document.querySelector('[data-tour-datetime-unknown]');
  const dateTimeField = document.querySelector('[data-tour-datetime-field]');
  const formspreeEndpoint = 'https://formspree.io/f/xkowoogr';

  const updateTourContent = (lang) => {
    const content = getTourContent(baseTour, lang);
    if (titleEl) titleEl.textContent = content.name;
    if (durationEl) durationEl.textContent = content.duration;
    if (taglineEl) taglineEl.innerHTML = content.tagline;
    if (descriptionEl) descriptionEl.textContent = content.description;
    document.title = `${content.name} | Québec Mexique`;

    if (includesEl) {
      includesEl.innerHTML = '';
      content.includes.forEach((item) => {
        const cleanItem = item.replace(/^·\s*/, '');
        const li = document.createElement('li');
        li.textContent = cleanItem;
        includesEl.appendChild(li);
      });
    }

    if (galleryTrack) {
      const images = baseTour.gallery && baseTour.gallery.length ? baseTour.gallery : [baseTour.image];
      if (!galleryTrack.children.length) {
        galleryTrack.innerHTML = '';
        images.forEach((src, index) => {
          const isVideo = /\.(mov|mp4|webm)(\?.*)?$/i.test(src);
          const slide = document.createElement('figure');
          slide.className = 'tour-gallery__slide';
          slide.innerHTML = isVideo
            ? `<video src="${src}" autoplay muted loop playsinline preload="metadata"></video>`
            : `<img src="${src}" alt="Photo ${index + 1} de ${content.name}" loading="lazy" decoding="async" />`;
          galleryTrack.appendChild(slide);
        });
      } else {
        Array.from(galleryTrack.querySelectorAll('img')).forEach((image, index) => {
          image.alt = `${content.name} photo ${index + 1}`;
        });
      }
    }

    const relatedTours = tours.filter((item) => item.slug !== baseTour.slug);
    populateCardTrack('[data-related-track]', relatedTours, languageManager);
    setupCardCarousels();
  };

  updateTourContent(languageManager?.getLanguage() || DEFAULT_LANGUAGE);

  setupTourGallery(galleryWrapper);

  const buildGuestOptions = () => {
    if (!guestSelect) return;
    if (!baseTour.prices) return;

    const counts = Object.keys(baseTour.prices)
      .map((value) => Number(value))
      .filter((value) => Number.isFinite(value))
      .sort((a, b) => a - b);

    if (!counts.length) return;

    guestSelect.innerHTML = '';
    counts.forEach((count) => {
      const option = document.createElement('option');
      option.value = String(count);
      option.textContent = String(count);
      guestSelect.appendChild(option);
    });

    const defaultCount = counts.includes(2) ? 2 : counts[0];
    guestSelect.value = String(defaultCount);
  };

  buildGuestOptions();

  const updatePrice = () => {
    if (!priceEl || !guestSelect) return;
    const guests = Number(guestSelect.value) || 1;
    const price = baseTour.prices ? baseTour.prices[guests] : baseTour.basePrice;
    priceEl.textContent = currencyFormatter.format(price || 0);
  };

  guestSelect?.addEventListener('change', updatePrice);
  updatePrice();

  const toggleDateTime = () => {
    if (!dateTimeInput || !dateTimeUnknown) return;
    const isUnknown = dateTimeUnknown.checked;
    dateTimeInput.disabled = isUnknown;
    if (isUnknown) {
      dateTimeInput.value = '';
    }
  };

  dateTimeUnknown?.addEventListener('change', toggleDateTime);
  toggleDateTime();

  const openDateTimePicker = () => {
    if (!dateTimeInput || dateTimeInput.disabled) return;
    if (typeof dateTimeInput.showPicker === 'function') {
      dateTimeInput.showPicker();
    }
  };

  dateTimeInput?.addEventListener('click', openDateTimePicker);
  dateTimeInput?.addEventListener('focus', openDateTimePicker);
  dateTimeField?.addEventListener('click', (event) => {
    if (event.target instanceof HTMLInputElement && event.target.type === 'checkbox') return;
    openDateTimePicker();
    dateTimeInput?.focus();
  });

  bookingForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const lang = languageManager?.getLanguage() || DEFAULT_LANGUAGE;
    const tourContent = getTourContent(baseTour, lang);
    const guests = Number(guestSelect?.value) || 1;
    const pickupFallback = languageManager?.translate('tour.booking.pickupFallback', {}, lang) || 'your location';
    const pickup = (document.querySelector('[data-tour-pickup]')?.value || pickupFallback).trim();
    const name = (nameInput?.value || '').trim();
    const email = (emailInput?.value || '').trim();
    const phone = (phoneInput?.value || '').trim();
    const dateTimeValue = (dateTimeInput?.value || '').trim();
    const dateTimeUnknownLabel =
      languageManager?.translate('tour.booking.datetimeUnknown', {}, lang) || 'Not sure yet';
    const dateTimeFallback =
      languageManager?.translate('tour.booking.datetimeFallback', {}, lang) || 'Not provided';
    const dateTimeLabel = dateTimeUnknown?.checked ? dateTimeUnknownLabel : dateTimeValue || dateTimeFallback;
    if (noteEl) {
      noteEl.textContent =
        languageManager?.translate('tour.booking.status.hold', { guests, tour: tourContent.name, pickup }, lang) ||
        `Holding ${guests} spot(s) for ${tourContent.name}. We will confirm pick-up at ${pickup} right away.`;
    }
    if (!formspreeEndpoint || formspreeEndpoint.includes('REPLACE_ME')) {
      if (noteEl) {
        noteEl.textContent =
          languageManager?.translate('tour.booking.status.missingService', {}, lang) ||
          'Please connect the booking form to your email service to receive requests.';
      }
      return;
    }
    const payload = {
      tour: tourContent.name,
      guests,
      name: name || dateTimeFallback,
      email: email || dateTimeFallback,
      phone: phone || dateTimeFallback,
      dateTime: dateTimeLabel,
      pickup
    };
    fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (!noteEl) return;
        noteEl.textContent = response.ok
          ? languageManager?.translate('tour.booking.status.sent', {}, lang) ||
            'Request sent! We will confirm availability and follow up right away.'
          : languageManager?.translate('tour.booking.status.error', {}, lang) ||
            'Something went wrong sending your request. Please try again shortly.';
      })
      .catch(() => {
        if (noteEl) {
          noteEl.textContent =
            languageManager?.translate('tour.booking.status.unavailable', {}, lang) ||
            'Unable to send your request right now. Please try again shortly.';
        }
      });
  });

  languageManager?.onChange(updateTourContent);
}

function setupInquiryForm(languageManager) {
  const form = document.querySelector('#custom-contact-form');
  const status = document.querySelector('#custom-contact-status');
  const formspreeEndpoint = 'https://formspree.io/f/xkowoogr';

  if (!form) return;

  const setStatus = (message = '', isError = false) => {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle('is-error', Boolean(isError));
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();
    const idea = (formData.get('idea') || '').toString().trim();

    if (!name || !email || !idea) {
      setStatus(languageManager.translate('inquiry.status.missing'), true);
      return;
    }

    if (!formspreeEndpoint || formspreeEndpoint.includes('REPLACE_ME')) {
      setStatus(languageManager.translate('inquiry.status.missingService'), true);
      return;
    }

    setStatus(languageManager.translate('inquiry.status.sending'));

    fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          setStatus(languageManager.translate('inquiry.status.sent'));
          form.reset();
          return;
        }
        setStatus(languageManager.translate('inquiry.status.error'), true);
      })
      .catch(() => {
        setStatus(languageManager.translate('inquiry.status.unavailable'), true);
      });
  });

  languageManager.onChange(() => setStatus(''));
}

function setCurrentYear() {
  const year = document.querySelector('#current-year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}
