import type { BlogTranslations } from '../types';

export const voiceEs: BlogTranslations = {
  'nyeste-ai-teknologi-2026': {
    title: `La tecnología de IA más reciente en 2026: agentes de voz con IA, IA en tiempo real y el recepcionista del futuro`,
    excerpt: `Modelos de voz a voz, turnos de palabra en menos de un segundo, agentes de IA que actúan en tu calendario y tu CRM, y nuevas normas europeas. Qué se ha lanzado de verdad, qué sigue en beta y qué significa para un empresario.`,
    meta_title: `Tecnología de IA 2026: agentes de voz e IA en tiempo real | AIBooking.dk`,
    meta_description: `Voz en tiempo real, turnos de palabra, agentes de IA, integraciones y Reglamento de IA: qué se ha lanzado, qué es beta y qué supone para las pymes.`,
    content: `
      <p>Hace tres años, una IA capaz de atender el teléfono con fluidez era una demo. En 2026 es un producto que puedes comprar por menos de 135 € al mes. No se debe a un único avance, sino a que varias tecnologías han madurado a la vez: modelos que escuchan y hablan en tiempo real, mejor reconocimiento de voz para idiomas pequeños, agentes de IA capaces de realizar acciones y estándares abiertos para conectarlos con los sistemas que las empresas ya usan.</p>
      <p>Este artículo explica la evolución sin palabras de moda. Distinguimos tres cosas: <strong>lanzado</strong> (disponible de forma general y en producción), <strong>beta/preview</strong> (disponible, pero puede cambiar) y <strong>expectativas</strong> (investigación o anuncios, pero aún no listo). Las fuentes y fechas están al final. Los proveedores citados son ejemplos del mercado, no una lista de aquello sobre lo que está construido Aibooking.dk.</p>
      <div class="blog-toc"><strong>En este artículo</strong><ol><li><a href="#realtid">Modelos de voz en tiempo real</a></li><li><a href="#latenstid">Latencia, interrupciones y diálogo natural</a></li><li><a href="#dansk">Reconocimiento y síntesis de voz en danés</a></li><li><a href="#agenter">Agentes de IA que realizan acciones</a></li><li><a href="#integrationer">Calendario, CRM y tienda online</a></li><li><a href="#overtagelse">Paso a una persona y gestión de errores</a></li><li><a href="#regler">Seguridad de datos y Reglamento de IA</a></li><li><a href="#praksis">¿Qué significa para tu empresa?</a></li></ol></div>

      <h2 id="realtid">1. Modelos de voz en tiempo real: de una cadena a un solo paso</h2>
      <p>Tradicionalmente, un asistente telefónico con IA ha sido una <strong>cadena</strong> de tres sistemas: reconocimiento de voz (voz → texto), un modelo de lenguaje (texto → respuesta) y síntesis de voz (respuesta → voz). Cada eslabón añade retraso, y el tono de voz se pierde por el camino porque el modelo de lenguaje solo ve texto.</p>
      <p>Los modelos de <strong>voz a voz</strong> reciben audio y devuelven audio en un único modelo. Pueden notar si quien llama suena estresado y responder con un tono adecuado, y no tienen que esperar a que termine un eslabón para empezar el siguiente.</p>
      <ul>
        <li><strong>Lanzado:</strong> OpenAI puso a disposición general su Realtime API en agosto de 2025 junto con el modelo de voz a voz gpt-realtime, y la API puede recibir llamadas telefónicas directamente por SIP, el estándar que usa la telefonía. Google ofrece conversaciones en tiempo real a través de la Gemini Live API; las notas de versión de Vertex AI indican Gemini 2.5 Flash con audio nativo como disponible de forma general desde diciembre de 2025, y las de la Gemini API indican Gemini 3.8 Live como disponible de forma general desde septiembre de 2026.</li>
        <li><strong>Beta/preview:</strong> Varios modelos en tiempo real más recientes se publican primero como «preview», donde los nombres, los precios y el comportamiento pueden cambiar. Conviene saberlo si un proveedor se basa en un modelo preview.</li>
        <li><strong>Expectativa:</strong> el «dúplex completo»: modelos que escuchan y hablan a la vez, como las personas, y pueden decir «ajá» mientras hablas. Modelos de investigación como Moshi de Kyutai (2024) han demostrado el principio, pero todavía no es estándar en las soluciones telefónicas comerciales.</li>
      </ul>
      <p>La cadena no ha muerto. Muchas soluciones siguen usando reconocimiento y síntesis de voz por separado porque da más control sobre la voz y sobre lo que dice la IA. Lo que te importa no es la arquitectura, sino el resultado: ¿suena natural la conversación y hace la IA lo correcto?</p>

      <h2 id="latenstid">2. Latencia, interrupciones y diálogo natural</h2>
      <p>Las personas somos muy sensibles a las pausas en una conversación. Un conocido estudio sobre diez idiomas observó que el silencio típico entre dos hablantes ronda los 200 milisegundos, y que los daneses tenían los silencios más largos del estudio, casi medio segundo de media.</p>
      <p>Lo difícil no es solo responder rápido, sino saber <strong>cuándo</strong> ha terminado de hablar quien llama. Los sistemas antiguos esperaban al silencio, lo que provocaba pausas largas o interrupciones en mitad de una pausa para pensar. Los nuevos modelos de turno de palabra combinan sonido y significado para juzgar si la frase ha terminado. Deepgram lanzó Flux en octubre de 2025, un modelo de reconocimiento de voz con detección de turno integrada, y los modelos en tiempo real de los grandes proveedores tienen funciones similares.</p>
      <ul>
        <li><strong>Interrupciones («barge-in»):</strong> una buena voz de IA se calla cuando quien llama la interrumpe, y escucha. Pregunta siempre a un proveedor si se la puede interrumpir.</li>
        <li><strong>Muletillas y pausas para pensar:</strong> «Eh, déjeme comprobar…» no debe interpretarse como una frase terminada.</li>
        <li><strong>Audio telefónico:</strong> la red telefónica transmite audio de menor calidad que una app. Prueba siempre por una línea telefónica real, no solo en el navegador.</li>
      </ul>

      <h2 id="dansk">3. Reconocimiento y síntesis de voz en danés</h2>
      <p>El danés es difícil para las máquinas: muchas vocales, el golpe glotal «stød», contracciones y un área lingüística pequeña con menos datos de entrenamiento. Eso ha cambiado de dos maneras.</p>
      <p>Primero, los grandes modelos multilingües han mejorado claramente en danés porque se entrenan con mucho más audio. Segundo, Dinamarca cuenta ahora con recursos abiertos: el <strong>proyecto CoRal</strong>, dirigido por el Alexandra Institute y financiado por Innovation Fund Denmark, ha recopilado cientos de horas de habla danesa de más de mil personas de todas las edades y de todo el país, tanto lectura en voz alta como conversación, y ha publicado un modelo danés de reconocimiento de voz y un conjunto de datos para síntesis de voz. Así se puede comprobar lo bien que un modelo entiende dialectos, personas mayores y jóvenes.</p>
      <p>En síntesis de voz ya hay voces danesas de sonido natural de varios proveedores. Las diferencias están sobre todo en la pronunciación de nombres, números, direcciones y anglicismos. Más información en <a href="/blog/ai-telefonassistent-dansk-sprog">reconocimiento de voz y voces de IA</a>.</p>

      <div class="blog-cta"><strong>Escucha un agente de voz con IA en tus propias llamadas</strong><p>Crea una cuenta gratuita, desvía tu número y pruébalo 7 días. Sin tarjeta de crédito.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prueba gratis 7 días</a><a href="/ind-og-udgaaende-opkald">Ver atención telefónica con IA</a></div></div>

      <h2 id="agenter">4. Agentes de IA que realizan acciones</h2>
      <p>La mayor diferencia entre un chatbot y un <strong>agente de IA</strong> es que el agente puede hacer algo: consultar un hueco libre, crear una reserva, enviar un SMS o recuperar el estado de un pedido. Esto ocurre mediante «function calling» o «herramientas», en las que el modelo de lenguaje decide llamar a una función definida por el proveedor y recibe el resultado.</p>
      <ul>
        <li><strong>Lanzado:</strong> el function calling es estándar en todos los grandes modelos en tiempo real. Para Gemini 3.8 Live, Google describe llamadas a funciones que pueden ejecutarse de forma asíncrona, para que la conversación continúe mientras el sistema trabaja.</li>
        <li><strong>Lanzado como estándar abierto:</strong> el Model Context Protocol (MCP) es un protocolo abierto para conectar la IA con herramientas y datos externos. En diciembre de 2025 se transfirió a la Agentic AI Foundation, bajo la Linux Foundation, y lo apoyan los mayores proveedores de IA.</li>
        <li><strong>Expectativa:</strong> agentes que resuelven de forma autónoma tareas largas a través de varios sistemas. Funciona en entornos controlados, pero en el contacto con clientes las acciones deben ser pocas, bien definidas y registradas.</li>
      </ul>
      <p>Para una empresa, esto significa: no preguntes «¿tenéis IA?», sino «<em>¿qué acciones</em> puede realizar la IA y cómo puedo ver lo que ha hecho?».</p>

      <h2 id="integrationer">5. Integraciones con calendario, CRM y tienda online</h2>
      <p>Un recepcionista con IA es tan bueno como los sistemas a los que está conectado. En la práctica, tres integraciones son decisivas:</p>
      <ul>
        <li><strong>Calendario</strong> (Google Calendar, Outlook, programas sectoriales): para que la IA solo reserve huecos realmente libres. Consulta <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">reservas automáticas con IA</a>.</li>
        <li><strong>CRM</strong>: para que la conversación se guarde en la ficha del cliente y la siguiente llamada empiece con contexto.</li>
        <li><strong>Tienda online</strong> (por ejemplo, Shopify): para que la IA pueda responder sobre stock, envíos y estado del pedido con datos en tiempo real. Consulta <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">IA para tiendas online con integración de Shopify</a>.</li>
      </ul>
      <p>La tendencia técnica es construir las integraciones sobre estándares abiertos (API, webhooks y MCP) en lugar de plugins cerrados. Eso facilita cambiar de proveedor y conectar programas sectoriales.</p>

      <h2 id="overtagelse">6. Paso a una persona y gestión de errores</h2>
      <p>Incluso los mejores modelos se equivocan: pueden entender mal un nombre, malinterpretar una doble negación o «alucinar» una respuesta sin fundamento. Por eso, en 2026 la madurez consiste tanto en redes de seguridad como en inteligencia:</p>
      <ul>
        <li><strong>Repetir y confirmar:</strong> nombres, fechas y direcciones se leen en voz alta antes de guardarse.</li>
        <li><strong>Conocimiento acotado:</strong> la IA solo responde a partir de la información de la empresa que se le ha dado y dice «no lo sé» en lugar de adivinar.</li>
        <li><strong>Paso con contexto:</strong> las reclamaciones, los casos urgentes y las peticiones de hablar con una persona se transmiten con un resumen. Consulta <a href="/blog/ai-receptionist-viderestilling-til-menneske">cuándo transferir a una persona</a>.</li>
        <li><strong>Grabación y transcripción:</strong> para poder encontrar y corregir los errores.</li>
      </ul>

      <h2 id="regler">7. Seguridad de datos y uso responsable: el Reglamento de IA ya se aplica</h2>
      <p>2026 es el año en que el Reglamento de IA de la UE llega de verdad a la atención al cliente. Desde el <strong>2 de agosto de 2026</strong> se aplican los requisitos de transparencia del artículo 50: hay que informar a las personas de que interactúan con un sistema de IA, salvo que sea evidente. Para un recepcionista con IA, esto significa en la práctica que el saludo debe decir que es un asistente digital. En el verano de 2026 la UE aprobó un «ómnibus digital» que aplaza las normas para la IA de alto riesgo, pero, según los análisis jurídicos, no aplazó los requisitos de transparencia para los chatbots.</p>
      <p>El RGPD se aplica como siempre: una llamada contiene datos personales, y grabar llamadas requiere una base jurídica. La autoridad danesa de protección de datos (Datatilsynet) ha publicado orientaciones sobre la grabación de llamadas; consulta también las de tu autoridad nacional. Exige datos en la UE, un contrato de encargo de tratamiento, cifrado y reglas de borrado. Consulta nuestra guía sobre <a href="/blog/ai-widget-gdpr-danske-virksomheder">RGPD y Reglamento de IA para recepcionistas con IA</a>.</p>
      <p>Este artículo no es asesoramiento jurídico: consulta siempre el texto legal vigente o habla con un asesor sobre tu caso concreto.</p>

      <h2 id="praksis">8. ¿Qué significa para tu empresa?</h2>
      <p>La tecnología está preparada para las tareas que necesitan la mayoría de las pequeñas y medianas empresas: atender el teléfono, gestionar preguntas repetidas, reservar en el calendario y enviar recordatorios. No está preparada para sustituir el criterio, la empatía y la responsabilidad. La lista práctica para 2026:</p>
      <ol>
        <li><strong>Escucha antes de comprar.</strong> Llama a una línea de demostración y <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">fíjate en las seis señales de calidad</a>.</li>
        <li><strong>Interrúmpela.</strong> ¿Se calla y escucha?</li>
        <li><strong>Prueba con el idioma de tus clientes</strong>: nombres, direcciones, acentos.</li>
        <li><strong>Pregunta qué acciones</strong> puede realizar y dónde quedan registradas.</li>
        <li><strong>Exige que se identifique como IA, datos en la UE y un contrato de encargo de tratamiento.</strong></li>
        <li><strong>Empieza con un alcance reducido</strong> (por ejemplo, solo las llamadas fuera de horario) y amplía cuando hayas leído las transcripciones de las primeras semanas.</li>
      </ol>
      <p>Para lo básico, empieza por <a href="/blog/hvad-er-en-ai-voice-agent">¿qué es un agente de voz con IA?</a> y <a href="/blog/ai-reception-virtuel-receptionist">¿qué es un recepcionista con IA?</a></p>`,
    faq: [
      { question: `¿Qué es un modelo de voz a voz?`, answer: `Un modelo de IA que recibe voz y devuelve voz en un solo paso, en lugar de convertirla a texto y viceversa. Eso acorta el tiempo de respuesta y conserva el tono de voz.` },
      { question: `¿Tiene que decir un asistente telefónico con IA que es una IA en 2026?`, answer: `Sí. El artículo 50 del Reglamento de IA se aplica desde el 2 de agosto de 2026 y exige informar a las personas de que interactúan con un sistema de IA, salvo que sea evidente.` },
      { question: `¿Entiende la IA el habla lo bastante bien para llamadas telefónicas?`, answer: `Los modelos modernos entienden el habla, los acentos y las interrupciones lo bastante bien para reservas y atención al cliente. Prueba siempre por una línea telefónica real con las expresiones típicas de tus clientes.` },
      { question: `¿Qué es MCP?`, answer: `El Model Context Protocol es un estándar abierto para conectar la IA con herramientas y datos externos, como calendarios y sistemas CRM. Lo gestiona la Agentic AI Foundation, bajo la Linux Foundation.` },
    ],
  },
  'hvad-er-en-ai-voice-agent': {
    title: `¿Qué es un agente de voz con IA? La IA en tiempo real en las llamadas, explicada`,
    excerpt: `Un agente de voz con IA es una IA que escucha, piensa, habla y actúa durante una llamada en directo. Sus componentes, qué ocurre en el medio segundo antes de responder y en qué se diferencia de un chatbot y de un menú telefónico.`,
    meta_title: `¿Qué es un agente de voz con IA? IA en tiempo real | AIBooking.dk`,
    meta_description: `Qué es un agente de voz con IA, sus componentes, por qué importan el tiempo de respuesta y el turno de palabra, y en qué se diferencia de un IVR.`,
    content: `
      <p>Un <strong>agente de voz con IA</strong> es una IA que mantiene una conversación hablada en tiempo real (normalmente por teléfono o en un widget de voz en una web) y puede realizar acciones mientras tanto, como reservar una cita o consultar un pedido. Un recepcionista con IA es un agente de voz con IA configurado para atender las llamadas de una empresa.</p>
      <h2>Agente de voz, chatbot y menú telefónico</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Menú telefónico (IVR)</th><th>Chatbot</th><th>Agente de voz con IA</th></tr></thead><tbody>
        <tr><td>Entrada</td><td>Teclas o palabras sueltas</td><td>Texto escrito</td><td>Habla libre</td></tr>
        <tr><td>Entiende las palabras del propio cliente</td><td>No</td><td>Sí</td><td>Sí</td></tr>
        <tr><td>Presión de tiempo</td><td>Baja</td><td>Baja: el usuario espera unos segundos sin problema</td><td>Alta: las pausas de más de un segundo se hacen largas</td></tr>
        <tr><td>Puede realizar acciones</td><td>Limitado</td><td>A menudo</td><td>Sí, por ejemplo reservas y consultas</td></tr>
      </tbody></table></div>
      <h2>Los componentes</h2>
      <ol>
        <li><strong>Telefonía:</strong> la llamada llega por la red telefónica (SIP) o por un navegador (WebRTC) y se transmite como audio a la IA.</li>
        <li><strong>Escuchar:</strong> el reconocimiento de voz convierte el audio en comprensión, y un modelo de turno de palabra juzga si quien llama ha terminado de hablar.</li>
        <li><strong>Pensar:</strong> un modelo de lenguaje decide qué decir o hacer según las instrucciones y el conocimiento de la empresa.</li>
        <li><strong>Actuar:</strong> mediante «function calling», el agente consulta huecos libres, crea reservas, envía SMS o recupera el estado de un pedido.</li>
        <li><strong>Hablar:</strong> la síntesis de voz (o un modelo de voz a voz que escucha, piensa y habla en uno) entrega la respuesta como habla natural.</li>
        <li><strong>Registrar:</strong> grabación, transcripción y resumen, para poder revisar la conversación después.</li>
      </ol>
      <h2>El medio segundo que lo decide todo</h2>
      <p>En una conversación normal nos respondemos en unos pocos cientos de milisegundos. Un agente de voz debe, en más o menos ese tiempo, oír que quien llama ha terminado, entender, decidir y empezar a hablar. Si espera demasiado, parece lento; si responde demasiado rápido, interrumpe. Por eso, las tres medidas de calidad más importantes de un agente de voz son:</p>
      <ul>
        <li><strong>Tiempo de respuesta</strong> desde que quien llama deja de hablar hasta que el agente empieza.</li>
        <li><strong>Turno de palabra</strong>: ¿interrumpe en mitad de una pausa para pensar?</li>
        <li><strong>Barge-in</strong>: ¿se calla cuando quien llama le interrumpe?</li>
      </ul>
      <p>Un pequeño truco: los buenos agentes dicen «un momento, estoy mirando el calendario» mientras hacen una consulta, igual que haría una persona.</p>
      <div class="blog-cta"><strong>Escucha un agente de voz con IA en tus propias llamadas</strong><p>Crea una cuenta gratuita, desvía tu número y pruébalo 7 días. Sin tarjeta de crédito.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prueba gratis 7 días</a><a href="/ind-og-udgaaende-opkald">Ver atención telefónica con IA</a></div></div>
      <h2>Entrantes y salientes</h2>
      <p>Un agente de voz puede tanto recibir llamadas (entrantes) como llamar (salientes), por ejemplo con recordatorios el día antes de una cita o para hacer seguimiento de un presupuesto. Las reglas para cada caso son distintas; lee <a href="/blog/inbound-outbound-forskel">llamadas entrantes y salientes con IA</a>.</p>
      <h2>¿Qué puede salir mal?</h2>
      <ul>
        <li><strong>Nombres y números mal entendidos:</strong> se resuelve con que el agente repita y confirme.</li>
        <li><strong>Respuestas sin fundamento:</strong> el agente solo debe responder con la información de la empresa y, si no, decir que se pondrán en contacto.</li>
        <li><strong>Ruido y malas conexiones:</strong> el agente debe pedir que se lo repitan en lugar de adivinar.</li>
        <li><strong>Clientes que quieren hablar con una persona:</strong> siempre deben poder hacerlo. Consulta <a href="/blog/ai-receptionist-viderestilling-til-menneske">la transferencia a una persona</a>.</li>
      </ul>
      <h2>¿Quieres profundizar?</h2>
      <p>Consulta la evolución actual de los modelos en tiempo real, la tecnología del habla y la regulación de la IA en <a href="/blog/nyeste-ai-teknologi-2026">la tecnología de IA más reciente en 2026</a>, o escucha <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">cómo suena en la práctica un agente de voz</a>.</p>`,
    faq: [
      { question: `¿Qué diferencia hay entre un agente de voz con IA y un recepcionista con IA?`, answer: `El agente de voz con IA es la tecnología: una IA que habla y actúa en tiempo real. Un recepcionista con IA es un agente de voz configurado para atender llamadas y reservar para una empresa.` },
      { question: `¿Se puede interrumpir a un agente de voz con IA?`, answer: `Un buen agente de voz admite el «barge-in»: deja de hablar y escucha cuando quien llama le interrumpe. Es una de las cosas más importantes que probar.` },
    ],
  },
  'ai-telefonassistent-dansk-sprog': {
    title: `Reconocimiento de voz y voces de IA: así entiende la IA el español`,
    excerpt: `Por qué el español hablado supone un reto para las máquinas, qué ha mejorado y cómo comprobar si una IA entiende a tus clientes, incluidos nombres, direcciones, números y acentos.`,
    meta_title: `Reconocimiento de voz en español y voces de IA | AIBooking.dk`,
    meta_description: `Por qué el español hablado es un reto para las máquinas, qué ha mejorado, dónde falla aún la IA y una prueba en seis pasos con tus clientes.`,
    content: `
      <p>El español parece un idioma fácil para las máquinas porque se escribe casi como se pronuncia. Pero el español hablado es otra cosa: se habla rápido, con muchos acentos (de Andalucía a Galicia, de México a Argentina), con sílabas que se funden y con nombres propios que la IA nunca ha oído. Aun así, hoy una IA puede entender y hablar español lo bastante bien como para atender el teléfono de una empresa. Así funciona, y así puedes comprobarlo.</p>
      <h2>Por qué el español hablado es un reto</h2>
      <ul>
        <li><strong>Sílabas que se funden.</strong> «Pa’l centro» o «¿qué hubo?» son ejemplos clásicos; calles como «Núñez de Balboa» o «Avinguda Diagonal» son los prácticos.</li>
        <li><strong>Mucha variación entre países.</strong> El español de España, de México y del Río de la Plata difiere en pronunciación y vocabulario.</li>
        <li><strong>Acentos y habla coloquial.</strong> Un agricultor andaluz y una joven madrileña pronuncian las mismas palabras de forma muy distinta.</li>
        <li><strong>Audio telefónico.</strong> La red telefónica recorta frecuencias, así que «f» y «s» son más difíciles de distinguir.</li>
      </ul>
      <h2>¿Qué ha cambiado?</h2>
      <p>Los grandes modelos de voz multilingües se entrenan con enormes cantidades de audio en muchos idiomas, y el español es uno de los idiomas con más datos de entrenamiento. A eso se suman conjuntos de datos abiertos como Common Voice de Mozilla, donde voluntarios aportan frases habladas en muchos idiomas y acentos. Estos datos permiten medir lo bien que los modelos entienden los acentos y los distintos grupos de edad.</p>
      <p>Las voces también han mejorado. La síntesis de voz moderna suena natural en español, con un ritmo y unas pausas muy cercanos a los de una persona. Consulta <a href="/blog/nyeste-ai-teknologi-2026">la tecnología de IA más reciente en 2026</a> para ver el panorama general.</p>
      <h2>¿Dónde sigue fallando más la IA?</h2>
      <ul>
        <li><strong>Nombres propios:</strong> apellidos poco comunes y nombres de empresas.</li>
        <li><strong>Números y direcciones:</strong> cifras dichas en voz alta, números de portal con letra, códigos postales.</li>
        <li><strong>Palabras en inglés dentro del español:</strong> nombres de productos y términos técnicos.</li>
        <li><strong>Varias personas hablando a la vez</strong>, o mucho ruido de fondo.</li>
      </ul>
      <p>La solución no es un modelo perfecto, sino una buena técnica de conversación: la IA repite el nombre, el teléfono y la dirección y pide a quien llama que los confirme antes de guardarlos. Una buena recepcionista hace lo mismo.</p>
      <div class="blog-cta"><strong>Escucha un agente de voz con IA en tus propias llamadas</strong><p>Crea una cuenta gratuita, desvía tu número y pruébalo 7 días. Sin tarjeta de crédito.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prueba gratis 7 días</a><a href="/ind-og-udgaaende-opkald">Ver atención telefónica con IA</a></div></div>
      <h2>Cómo probar una voz de IA en español</h2>
      <ol>
        <li><strong>Llama desde un teléfono real</strong>, no solo en el navegador.</li>
        <li><strong>Usa los nombres y direcciones de tus clientes</strong>, por ejemplo «Etxeberria» y «Calle de Alcalá 14, 28014 Madrid».</li>
        <li><strong>Habla como un cliente</strong>: «Eh, quería preguntar por… no, espera, ¿podéis venir el jueves?».</li>
        <li><strong>Interrúmpela</strong> en mitad de una frase.</li>
        <li><strong>Pide a un compañero con otro acento que llame</strong>.</li>
        <li><strong>Lee después la transcripción</strong> y mira dónde falló.</li>
      </ol>
      <h2>Varios idiomas en una misma solución</h2>
      <p>Muchas empresas tienen también clientes que hablan otros idiomas. Una voz de IA puede cambiar al inglés o a otro idioma si quien llama lo habla, así que no necesitas dos configuraciones. El saludo debe ser en español, y la IA debe presentarse como asistente digital.</p>
      <p>Escucha cómo suena en la práctica en <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">¿cómo suena un recepcionista con IA?</a>, o consulta los requisitos de una solución en <a href="/blog/ai-telefonpasning-dansk-ai-receptionist">atención telefónica con IA: qué exigir</a>.</p>`,
    faq: [
      { question: `¿Entiende la IA los acentos regionales?`, answer: `El reconocimiento de voz moderno maneja bien la mayoría de los acentos, pero los muy marcados pueden provocar más errores en nombres y números. Por eso la IA debe repetir y confirmar los datos clave.` },
      { question: `¿Puede la IA hablar en inglés con clientes extranjeros?`, answer: `Sí. La IA puede continuar en inglés si quien llama habla inglés.` },
    ],
  },
  'hvordan-lyder-en-dansk-ai-receptionist': {
    title: `¿Cómo suena un recepcionista con IA? Escúchalo, y 6 cosas en las que fijarte`,
    excerpt: `Todos los proveedores dicen que su voz suena natural. La única forma de saberlo es escuchar. Reproduce nuestra grabación y usa las seis señales de calidad para valorar cualquier recepcionista con IA.`,
    meta_title: `¿Cómo suena un recepcionista con IA? Escúchalo | AIBooking.dk`,
    meta_description: `Escucha un recepcionista con IA y valora a cualquier proveedor con seis señales: voz, comprensión, preguntas, acción, transferencia y honestidad.`,
    content: `
      <p>Muchos empresarios tienen malas experiencias con los sistemas telefónicos automáticos: «pulse 1 para…», voces robóticas y sistemas que no entienden nada. Un recepcionista con IA moderno es otra cosa, pero la calidad varía mucho entre soluciones. La mejor prueba es sencilla: escuchar.</p>
      <p>La grabación de arriba es una demo de nuestra voz de IA; la conversación es en danés. Reprodúcela y usa los seis puntos siguientes como referencia. Puedes aplicar los mismos puntos cuando valores a otros proveedores.</p>
      <h2>1. ¿Suena como una persona?</h2>
      <p>El ritmo, la entonación y las pausas importan más de lo que parece. Una buena voz de IA suena tranquila y amable y no mete prisa a quien llama. Fíjate en si acentúa bien las palabras largas y los nombres.</p>
      <h2>2. ¿Entiende el lenguaje cotidiano?</h2>
      <p>Los clientes no hablan con palabras clave. Explican el problema con sus propias palabras, cambian de idea a mitad de frase y usan expresiones locales. Aun así, la IA tiene que entender lo que quieren. Más información en <a href="/blog/ai-telefonassistent-dansk-sprog">reconocimiento de voz</a>.</p>
      <h2>3. ¿Hace las preguntas adecuadas?</h2>
      <p>Una recepción que solo toma mensajes no vale mucho. Debe preguntar justo lo que tu empresa necesita: a un profesional de oficios, la dirección, el tipo de trabajo y la urgencia; en una clínica, si quien llama es paciente nuevo o habitual.</p>
      <h2>4. ¿Termina la conversación con una acción?</h2>
      <p>La señal de calidad más fuerte es que la llamada termine con algo concreto: una cita en el calendario, una confirmación por SMS o un mensaje con una devolución de llamada acordada. Esa es la diferencia entre un recepcionista con IA y un <a href="/blog/ai-receptionist-vs-telefonpasning">buzón de voz</a>.</p>
      <div class="blog-cta"><strong>Escucha un agente de voz con IA en tus propias llamadas</strong><p>Crea una cuenta gratuita, desvía tu número y pruébalo 7 días. Sin tarjeta de crédito.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prueba gratis 7 días</a><a href="/ind-og-udgaaende-opkald">Ver atención telefónica con IA</a></div></div>
      <h2>5. ¿Sabe cuándo transferir?</h2>
      <p>Las llamadas urgentes o complicadas deben transferirse a una persona con contexto, para que quien llama no tenga que empezar de cero. Consulta <a href="/blog/ai-receptionist-viderestilling-til-menneske">cuándo debe transferirse una llamada</a>.</p>
      <h2>6. ¿Es honesto sobre ser una IA?</h2>
      <p>Un buen recepcionista con IA se presenta como asistente digital. No es solo cortesía: según el Reglamento de IA de la UE, las personas deben saber que hablan con una IA. Los clientes que lo saben desde el principio también tienen más paciencia si les pide que repitan algo.</p>
      <h2>Pruébalo tú mismo, con tu propia empresa</h2>
      <p>Una grabación muestra la voz, pero no cómo gestiona a <em>tus</em> clientes. Llama a nuestra línea de demostración, o empieza una prueba gratuita en la que la IA aprende tus servicios, y llama tú mismo con las preguntas que suelen hacer tus clientes. En la <a href="/ind-og-udgaaende-opkald">página de llamadas entrantes y salientes</a> también puedes leer palabra por palabra dos conversaciones completas: una llamada entrante a un fontanero y una llamada saliente de recordatorio para una clínica.</p>`,
    faq: [
      { question: `¿Puedo elegir yo la voz y el saludo?`, answer: `Sí. Escribes tú mismo el saludo y el tono, y apruebas el texto antes de que la IA empiece a funcionar.` },
    ],
  },
  'ai-indgaaende-opkald': {
    title: `IA para llamadas entrantes: no vuelvas a perder una llamada`,
    excerpt: `Las llamadas perdidas son clientes perdidos. Cómo funciona la IA para llamadas entrantes, entre qué cuatro configuraciones de desvío puedes elegir y cómo medir si recupera las llamadas que hoy pierdes.`,
    meta_title: `IA para llamadas entrantes: no pierdas ni una llamada | AIBooking.dk`,
    meta_description: `Cómo funciona la IA para llamadas entrantes, cuatro configuraciones de desvío para elegir y cómo medir si recupera las llamadas que hoy pierdes.`,
    content: `
      <p>Una llamada perdida rara vez es solo una llamada. Es un cliente con una necesidad ahora mismo, que muy probablemente llamará a la siguiente empresa de la lista en lugar de esperar. La <strong>IA para llamadas entrantes</strong> se asegura de que todas las llamadas se atiendan, aunque estés ocupado, fuera de horario o cerrado.</p>
      <h2>¿Cuántas llamadas pierdes?</h2>
      <p>Empieza por averiguarlo. La mayoría de las centralitas y tarifas móviles muestran las llamadas perdidas. Cuenta durante una semana normal:</p>
      <ul>
        <li>¿Cuántas llamadas no se atendieron?</li>
        <li>¿A cuántas devolviste la llamada y lograste contactar?</li>
        <li>¿En qué momento del día ocurrió?</li>
      </ul>
      <p>El patrón te dice qué configuración necesitas.</p>
      <h2>Cuatro formas de configurar la IA</h2>
      <div class="blog-table"><table><thead><tr><th>Configuración</th><th>Cuándo responde la IA</th><th>Adecuada para</th></tr></thead><tbody>
        <tr><td>Fuera de horario</td><td>Tardes, fines de semana y festivos</td><td>Clínicas y tiendas con personal en horario de apertura</td></tr>
        <tr><td>Con la línea ocupada</td><td>Cuando la línea ya está en uso</td><td>Empresas con picos</td></tr>
        <tr><td>Tras varios tonos</td><td>Si nadie contesta en, por ejemplo, 4 tonos</td><td>Profesionales de oficios y equipos pequeños</td></tr>
        <tr><td>Siempre</td><td>Todas las llamadas; la IA transfiere cuando hace falta</td><td>Empresas que quieren liberar por completo al personal</td></tr>
      </tbody></table></div>
      <p>En los cuatro casos mantienes tu número; solo cambia el desvío.</p>
      <h2>¿Qué ocurre durante la llamada?</h2>
      <ol>
        <li>La IA contesta en segundos y se presenta como la asistente digital de la empresa.</li>
        <li>Averigua por qué llama el cliente.</li>
        <li>Resuelve lo que puede: reserva, cambia citas, responde preguntas repetidas.</li>
        <li>El resto se transfiere o se convierte en un mensaje estructurado.</li>
        <li>El cliente recibe una confirmación por SMS y tú, un resumen en el panel.</li>
      </ol>
      <div class="blog-cta"><strong>Escucha un agente de voz con IA en tus propias llamadas</strong><p>Crea una cuenta gratuita, desvía tu número y pruébalo 7 días. Sin tarjeta de crédito.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prueba gratis 7 días</a><a href="/ind-og-udgaaende-opkald">Ver atención telefónica con IA</a></div></div>
      <h2>Más que un buzón de voz</h2>
      <p>La diferencia entre el buzón de voz y la IA para llamadas entrantes es que el asunto se resuelve mientras el cliente sigue al teléfono. Nadie tiene que devolver la llamada para acordar una hora, y ningún cliente cuelga por pereza de dejar un mensaje. Consulta la comparación completa en <a href="/blog/ai-receptionist-vs-telefonpasning">recepcionista con IA vs. atención telefónica y buzón de voz</a>.</p>
      <h2>¿Cómo se mide el efecto?</h2>
      <ul>
        <li><strong>Proporción de llamadas atendidas</strong> antes y después.</li>
        <li><strong>Número de reservas</strong> hechas por la IA, sobre todo fuera de horario.</li>
        <li><strong>Tiempo dedicado a devolver llamadas</strong> cada semana.</li>
        <li><strong>Proporción de llamadas transferidas</strong>: si es demasiado alta, a la IA le falta conocimiento; si es cero, comprueba que no se queda con casos que debería transmitir.</li>
      </ul>
      <p>Descubre cómo convertir las cifras en dinero en la <a href="/blog/roi-ai-automatisering-virksomheder">guía sobre el ROI de la automatización con IA</a>. ¿Quieres que la IA también llame? Lee <a href="/blog/inbound-outbound-forskel">llamadas entrantes y salientes con IA</a>.</p>`,
    faq: [
      { question: `¿Cuándo atiende la IA mis llamadas?`, answer: `Tú decides: fuera de horario, con la línea ocupada, tras varios tonos o siempre. En todos los casos mantienes tu número.` },
      { question: `¿Me avisan de las llamadas que ha atendido la IA?`, answer: `Sí. Cada llamada está en el panel con grabación, transcripción y resumen, y los mensajes pueden enviarse por SMS o correo.` },
    ],
  },
  'inbound-outbound-forskel': {
    title: `Llamadas entrantes y salientes con IA: la diferencia y las normas`,
    excerpt: `La IA entrante atiende a tus clientes; la IA saliente les llama. Para qué sirve cada una, qué normas se aplican a las llamadas salientes automatizadas y por dónde deberían empezar la mayoría de las empresas.`,
    meta_title: `Llamadas entrantes vs. salientes con IA: diferencia y normas | AIBooking.dk`,
    meta_description: `Para qué sirven las llamadas entrantes y salientes con IA, qué normas rigen las llamadas salientes automatizadas y por dónde deberían empezar las empresas.`,
    content: `
      <p>Un asistente telefónico con IA puede trabajar en dos direcciones. <strong>Entrante</strong> significa que el cliente te llama y la IA contesta. <strong>Saliente</strong> significa que la IA llama al cliente, con un recordatorio, una confirmación o un seguimiento. La misma voz y el mismo número, pero con fines y normas diferentes.</p>
      <h2>Para qué sirve cada dirección</h2>
      <div class="blog-table"><table><thead><tr><th>Tarea</th><th>Entrante</th><th>Saliente</th></tr></thead><tbody>
        <tr><td>Atender las llamadas de los clientes</td><td>Sí</td><td>–</td></tr>
        <tr><td>Reservar, cambiar y cancelar</td><td>Sí</td><td>Sí</td></tr>
        <tr><td>Responder preguntas repetidas</td><td>Sí</td><td>–</td></tr>
        <tr><td>Recordatorio el día antes de una cita</td><td>–</td><td>Sí</td></tr>
        <tr><td>Volver a ocupar huecos cancelados con la lista de espera</td><td>–</td><td>Sí</td></tr>
        <tr><td>Hacer seguimiento de un presupuesto</td><td>–</td><td>Sí, con consentimiento o contacto previo</td></tr>
        <tr><td>Transferir a un compañero</td><td>Sí</td><td>Sí</td></tr>
      </tbody></table></div>
      <h2>Las normas para las llamadas salientes con IA</h2>
      <p>En las llamadas entrantes es el cliente quien contacta contigo; aquí las normas principales son el RGPD y la obligación de que la IA informe de que es una IA. Las llamadas salientes requieren más cuidado:</p>
      <ul>
        <li><strong>Marketing:</strong> la Directiva europea sobre la privacidad y las comunicaciones electrónicas (art. 13) exige consentimiento previo para el marketing directo mediante sistemas de llamada automática; en España, la Ley General de Telecomunicaciones reconoce el derecho a no recibir llamadas comerciales no deseadas sin consentimiento previo. Por tanto, una llamada de IA que vende requiere consentimiento.</li>
        <li><strong>Servicio:</strong> un recordatorio de una cita que el cliente ha reservado, o la confirmación de una visita acordada, es servicio, no marketing. Es el uso más habitual y menos controvertido de la IA saliente.</li>
        <li><strong>Transparencia:</strong> la IA debe decir en nombre de quién llama y que es un asistente digital.</li>
        <li><strong>Horario:</strong> llama a las horas a las que llamarías tú, no a las 21:00 de un domingo.</li>
      </ul>
      <p>La línea entre servicio y marketing puede ser difusa, por ejemplo con «¿quiere reservar ya su próxima cita?». Si tienes dudas, pide que lo valore un experto. Este artículo no es asesoramiento jurídico.</p>
      <div class="blog-cta"><strong>Escucha un agente de voz con IA en tus propias llamadas</strong><p>Crea una cuenta gratuita, desvía tu número y pruébalo 7 días. Sin tarjeta de crédito.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prueba gratis 7 días</a><a href="/ind-og-udgaaende-opkald">Ver atención telefónica con IA</a></div></div>
      <h2>¿Por dónde empezar?</h2>
      <p>La mayoría empieza por las llamadas entrantes, porque resuelven un problema urgente (las llamadas perdidas) y no requieren procesos nuevos. Cuando la IA lleva un par de semanas funcionando, los recordatorios el día antes son el siguiente paso natural: ahí es donde bajan las ausencias. Lee <a href="/blog/outbound-ai-opkald-paamindelser">llamadas de recordatorio automáticas</a> e <a href="/blog/ai-indgaaende-opkald">IA para llamadas entrantes</a>.</p>
      <p>En Aibooking.dk todos los planes incluyen llamadas entrantes y salientes. Consulta <a href="/ind-og-udgaaende-opkald">llamadas entrantes y salientes</a> para ver dos conversaciones de ejemplo completas.</p>`,
    faq: [
      { question: `¿Puede una IA llamar a los clientes?`, answer: `Sí, para servicios como recordatorios y confirmaciones de citas. Si se usa un sistema de llamada automática para marketing directo, la normativa europea y, en España, la Ley General de Telecomunicaciones exigen consentimiento previo.` },
    ],
  },
  'outbound-ai-opkald-paamindelser': {
    title: `Llamadas de recordatorio automáticas: cómo la IA reduce las ausencias`,
    excerpt: `Un SMS de recordatorio es fácil de ignorar; una llamada en la que puedes cambiar la cita al momento, no. Cómo funcionan las llamadas de recordatorio con IA, cuándo llamar y cómo volver a ocupar el hueco cuando alguien cancela.`,
    meta_title: `Llamadas de recordatorio automáticas: menos ausencias con IA | AIBooking.dk`,
    meta_description: `Cómo funcionan las llamadas de recordatorio con IA, por qué superan al SMS, cómo reocupar huecos cancelados y buenas reglas para clínicas.`,
    content: `
      <p>Una ausencia cuesta dos veces: el hueco se queda vacío y otro cliente que lo quería no lo consiguió. Para clínicas, salones y profesionales de oficios es una de las formas más directas de perder ingresos. Las llamadas de recordatorio automáticas atacan el problema un paso antes, antes de que el hueco se pierda.</p>
      <h2>Por qué una llamada funciona distinto que un SMS</h2>
      <p>Un SMS de recordatorio es bueno y barato, y debes seguir enviándolo. Pero se lee y se olvida fácilmente, y es incómodo responder si hay que cambiar la cita. Una breve llamada el día antes permite al cliente decir «pues no me viene bien» y conseguir otra hora al momento. Esa combinación es la que reduce las ausencias: un SMS al reservar y una llamada el día antes.</p>
      <h2>Cómo es una llamada de recordatorio</h2>
      <ol>
        <li>A las 9:15 del día anterior, la IA llama a todas las citas del día siguiente.</li>
        <li>«Hola, Lucía, soy la asistente digital de la clínica. La llamo por su cita de mañana a las 10, ¿le sigue viniendo bien?».</li>
        <li>Si es así: le da las gracias y una breve confirmación.</li>
        <li>Si no: la IA ofrece dos horas nuevas, mueve la cita y envía un SMS nuevo.</li>
        <li>El hueco libre se puede ofrecer al siguiente cliente de la lista de espera.</li>
        <li>Si el cliente no contesta: un SMS con la opción de devolver la llamada, u otro intento más tarde.</li>
      </ol>
      <p>Puedes leer la conversación completa palabra por palabra en la <a href="/ind-og-udgaaende-opkald">página de llamadas entrantes y salientes</a>.</p>
      <h2>Clínicas: donde más cuestan las ausencias</h2>
      <p>Para dentistas, fisioterapeutas y quiroprácticos, un hueco de tratamiento vacío es pura pérdida de ingresos, porque el personal está igualmente. Aquí es donde más compensan las llamadas de recordatorio, sobre todo con pacientes nuevos, tratamientos largos y citas reservadas con mucha antelación. Combínalas con <a href="/blog/totalloesning-klinik">las reservas con IA para clínicas</a> para que tanto las reservas como los recordatorios sean automáticos. Recuerda que la llamada no debe mencionar información de salud: «su cita con nosotros mañana» es suficiente.</p>
      <div class="blog-cta"><strong>Escucha un agente de voz con IA en tus propias llamadas</strong><p>Crea una cuenta gratuita, desvía tu número y pruébalo 7 días. Sin tarjeta de crédito.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prueba gratis 7 días</a><a href="/ind-og-udgaaende-opkald">Ver atención telefónica con IA</a></div></div>
      <h2>Profesionales de oficios: evita desplazamientos en balde</h2>
      <p>Para un profesional de oficios, la ausencia es un cliente que no está en casa. Una llamada de confirmación el día antes («vamos mañana entre las 8 y las 10, ¿habrá alguien en casa?») ahorra un desplazamiento en balde y permite recoger a la vez los datos de acceso. Consulta <a href="/blog/ai-telefonassistent-haandvaerker">IA para profesionales de oficios</a>.</p>
      <h2>Buenas reglas para los recordatorios</h2>
      <ul>
        <li><strong>Llama durante el día</strong>, normalmente la mañana anterior.</li>
        <li><strong>Sé breve</strong>: menos de un minuto si la hora le viene bien.</li>
        <li><strong>Di en nombre de quién llamas</strong> y que es un asistente digital.</li>
        <li><strong>Nada de vender en el recordatorio.</strong> Recordar una cita reservada es servicio; las ofertas requieren consentimiento. Consulta <a href="/blog/inbound-outbound-forskel">las normas para las llamadas salientes con IA</a>.</li>
        <li><strong>Mide el efecto</strong>: ausencias al mes antes y después, y cuántos huecos libres se han vuelto a reservar.</li>
      </ul>`,
    faq: [
      { question: `¿Cuándo debe hacerse la llamada de recordatorio?`, answer: `Normalmente la mañana anterior a la cita. Así queda tiempo para cambiarla y ofrecer el hueco libre a otra persona.` },
      { question: `¿Puede el cliente cambiar la cita durante la llamada?`, answer: `Sí. La IA ofrece nuevos huecos libres, mueve la cita en el calendario y envía una nueva confirmación por SMS.` },
    ],
  },
  'ai-widget-gdpr-danske-virksomheder': {
    title: `Recepcionista con IA, RGPD y Reglamento de IA: lo que las empresas deben saber`,
    excerpt: `Una IA que atiende llamadas o chats trata datos personales y, desde agosto de 2026, debe decir que es una IA. Las normas explicadas con claridad y las preguntas que debes hacer a tu proveedor.`,
    meta_title: `Recepcionista con IA, RGPD y Reglamento de IA | AIBooking.dk`,
    meta_description: `El RGPD, la grabación de llamadas y la transparencia del Reglamento de IA desde agosto de 2026, explicados para recepcionistas con IA.`,
    content: `
      <p>Cuando un recepcionista con IA atiende el teléfono, o un widget de IA de tu web toma una reserva, trata datos personales: nombre, teléfono, quizá una dirección y el motivo del contacto. No es motivo para no hacerlo, pero sí para hacerlo bien. Estas son las normas que se aplican en 2026, explicadas sin jerga jurídica. Este artículo es información general, no asesoramiento jurídico.</p>
      <h2>1. RGPD: las mismas reglas que para un formulario de contacto</h2>
      <ul>
        <li><strong>Finalidad y base jurídica:</strong> puedes tratar los datos para gestionar la consulta y la reserva. No los uses para otra cosa sin una nueva base jurídica.</li>
        <li><strong>Minimización de datos:</strong> pide solo lo necesario. Una peluquería no necesita el DNI.</li>
        <li><strong>Contrato de encargo de tratamiento:</strong> el proveedor de IA trata los datos por cuenta tuya y debe tener un contrato de encargo de tratamiento contigo.</li>
        <li><strong>Conservación y borrado:</strong> acuerda cuánto tiempo se guardan las conversaciones, las grabaciones y las transcripciones.</li>
        <li><strong>Transferencias fuera de la UE:</strong> pregunta dónde se tratan los datos. Lo más sencillo es que se traten en la UE.</li>
        <li><strong>Deber de información:</strong> describe el uso de la IA y de la grabación en tu política de privacidad.</li>
      </ul>
      <h2>2. Grabación de llamadas</h2>
      <p>Muchas soluciones de IA graban y transcriben las llamadas para que veas lo que se acordó. Para ello necesitas una base jurídica, por ejemplo un interés legítimo en documentar que prevalezca sobre el interés de quien llama en no ser grabado, y debes informar de la grabación. La Agencia Española de Protección de Datos (AEPD) y las demás autoridades nacionales publican orientaciones al respecto. Si la conversación contiene datos sensibles, por ejemplo de salud, se aplican normas más estrictas. Por eso, indica en el saludo que la llamada se graba y configura la IA para que no pregunte por cuestiones de salud salvo que sea necesario.</p>
      <h2>3. El Reglamento de IA: decir que es una IA</h2>
      <p>El Reglamento de IA de la UE (Reglamento 2024/1689) contiene en su artículo 50 obligaciones de transparencia que se aplican desde el <strong>2 de agosto de 2026</strong>: los sistemas de IA que interactúan directamente con personas deben diseñarse de forma que estas sepan que están interactuando con un sistema de IA, salvo que sea evidente. Un recepcionista con IA o un chatbot no es IA de alto riesgo, pero está sujeto a esta obligación. El «ómnibus digital» de la UE del verano de 2026 aplazó las normas para la IA de alto riesgo, pero, según los análisis jurídicos, no esta obligación.</p>
      <p>En la práctica: el saludo debe decir algo como «Está hablando con el asistente digital de [empresa]». Es también lo que mejor acogen los clientes.</p>
      <div class="blog-cta"><strong>Escucha un agente de voz con IA en tus propias llamadas</strong><p>Crea una cuenta gratuita, desvía tu número y pruébalo 7 días. Sin tarjeta de crédito.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prueba gratis 7 días</a><a href="/ind-og-udgaaende-opkald">Ver atención telefónica con IA</a></div></div>
      <h2>4. Llamadas salientes y marketing</h2>
      <p>Si la IA llama, se aplica además la normativa de comunicaciones comerciales; en España, la Ley General de Telecomunicaciones. Las llamadas automatizadas de marketing directo requieren consentimiento previo. Los recordatorios de citas reservadas son servicio. Consulta <a href="/blog/inbound-outbound-forskel">las normas para las llamadas salientes con IA</a>.</p>
      <h2>Preguntas para tu proveedor</h2>
      <ol>
        <li>¿Dónde se tratan y almacenan los datos de las conversaciones? ¿En la UE?</li>
        <li>¿Tenéis un contrato de encargo de tratamiento estándar y qué subencargados utilizáis?</li>
        <li>¿Cuánto tiempo se conservan las grabaciones y transcripciones, y puedo cambiarlo?</li>
        <li>¿Se pueden localizar y borrar los datos de un cliente si lo pide?</li>
        <li>¿Se cifran los datos en tránsito y en reposo?</li>
        <li>¿Puedo decidir yo el saludo, para que la IA diga que es una IA y que la llamada se graba?</li>
        <li>¿Se usan las conversaciones de mis clientes para entrenar vuestros modelos o los de terceros?</li>
      </ol>
      <h2>Cómo lo gestiona Aibooking.dk</h2>
      <p>Los datos se tratan en la UE, con almacenamiento cifrado, reglas de borrado acordadas y un contrato de encargo de tratamiento. Las grabaciones y transcripciones solo están disponibles para ti, y tú decides el texto del saludo. Lee <a href="/privatlivspolitik">nuestra política de privacidad</a> o mira cómo encaja con la tecnología en <a href="/blog/nyeste-ai-teknologi-2026">la tecnología de IA más reciente en 2026</a>.</p>`,
    faq: [
      { question: `¿Es un recepcionista con IA una IA de alto riesgo?`, answer: `Normalmente no. Pero está sujeto a la obligación de transparencia del artículo 50 del Reglamento de IA, que se aplica desde el 2 de agosto de 2026: los clientes deben saber que hablan con una IA.` },
      { question: `¿Puede la IA grabar las llamadas?`, answer: `Requiere una base jurídica, por ejemplo un interés legítimo en documentar, e informar de la grabación. Los datos sensibles exigen especial cuidado. Consulta las orientaciones de la AEPD o de tu autoridad de protección de datos.` },
    ],
  },
};
