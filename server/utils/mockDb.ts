import type { Article, Category } from '~/types'

export const mockCategories: Category[] = [
  { id: '1', name: 'World News', slug: 'world-news' },
  { id: '2', name: 'Politics', slug: 'politics' },
  { id: '3', name: 'Business', slug: 'business' },
  { id: '4', name: 'Technology', slug: 'technology' },
  { id: '5', name: 'Health', slug: 'health' },
  { id: '6', name: 'Sports', slug: 'sports' },
  { id: '7', name: 'Culture', slug: 'culture' },
  { id: '8', name: 'Podcast', slug: 'podcast' }
]

export const mockArticles: Article[] = [
  {
    id: 'culture-deep-dive',
    slug: 'deep-dive-influence-cultural-movements-contemporary-society',
    title: 'A DEEP DIVE INTO THE INFLUENCE OF CULTURAL MOVEMENTS ON CONTEMPORARY SOCIETY',
    excerpt: 'Cultural movements have been catalysing societal change for centuries, historically reshaping values, beliefs, and behaviors. We examine the profound impact on modern culture, technology, and global relationships.',
    content: `
      <p>Cultural movements have been catalysing societal change for centuries, historically reshaping values, beliefs, and behaviors. These movements, ranging from fine arts and literature to science and digital innovations, shape not only individual identity but also collective structures and industries. The growing awareness and accessibility of these groups highlight a societal shift toward inclusivity, diversity, and cultural fluidity—principles that are increasingly guiding the evolution of modern society.</p>
      
      <p>One of the most prominent cultural movements in recent years has been the shift toward intersectionality. This movement, rooted in the work of Black feminist scholars, recognizes that systems of oppression are interconnected and cannot be examined in isolation. In recent decades, organizations and even governments have been compelled to reconsider their practices and policies. Many businesses are implementing diversity and inclusion programs, and cultural organizations are actively working to curate more diverse exhibitions, performances, and representations. The influence of intersectionality is apparent not only in the work of activists but also in entertainment, education, and politics, representing a profound shift in how authentic storytelling is prioritized.</p>
      
      <p>Environmental movements, too, are playing a powerful role in shaping contemporary society. From individual actions to systemic regulations, people around the world are uniting to address climate change and environmental degradation. These efforts have led to a shift in consumer behavior—with more people opting for sustainable, eco-friendly products—as well as prompting policy changes by governments. Many businesses are also beginning to prioritize green practices, acknowledging both the commercial benefits and the urgency of global warming. These environmental movements emphasize the need for systemic change, urging individuals and institutions alike to adopt more sustainable lifestyles.</p>
      
      <p>The rise of global culture and technology driven by digital connectivity has transformed how people engage with one another and participate in cultural shifts. Social media platforms have become powerful tools for awareness, allowing messages to spread globally instantly. From tags and viral campaigns, to online communities, social media has allowed people to rally around dynamic causes, from human rights to education. This digital connectivity has not only broadened the reach of cultural movements but has also allowed individuals from different backgrounds to find common ground. This has led to the creation of a global digital community, bringing together individuals from different backgrounds and regions in pursuit of shared goals.</p>
      
      <p>At the same time, cultural movements have had a significant impact on the arts and media industries. Art forms have always served as a reflection of societal shifts, and contemporary artists continue to use their work to challenge traditional norms and spark conversation. From visual art that tackles difficult social topics to literature that challenges traditional narratives, art has become a medium through which normalized assumptions are discussed and deconstructed. Writers are pushing for representation of a wide range of human experiences, highlighting stories that have historically been overlooked. This trend is not only expanding representation in arts and culture but is also encouraging audiences to think critically about the world around them.</p>
      
      <p>Education systems are also evolving in response to cultural movements. Schools and universities are increasingly incorporating topics such as climate change, mental health, and social justice, equipping students with the knowledge and skills they need to navigate a rapidly changing world. Many educational institutions are shifting away from traditional rote-learning systems toward dynamic models that emphasize critical thinking and creative problem-solving. These changes are preparing younger generations to become more globally minded and socially conscious, focusing on the needs of leaders, value programs, inclusivity, and sustainability.</p>
      
      <p>The effects of cultural movements can be summarized as follows:</p>
      <ul>
        <li><strong>Social justice</strong> movements are influencing business practices, encouraging inclusivity, fair representation, and equality in various sectors.</li>
        <li><strong>Environmentalism</strong> is driving a transition toward sustainable choices, emphasizing green energy, waste reduction, and climate-conscious decision-making.</li>
        <li><strong>Digital connectivity</strong> has transformed how cultural movements spread, enabling individuals to build global networks and support local causes on a global platform.</li>
        <li><strong>Arts and media</strong> are increasingly highlighting diverse perspectives, using storytelling to address complex social issues and foster empathy.</li>
        <li><strong>Educational reforms</strong> are introducing contemporary issues into curricula, preparing future generations to approach global challenges with creativity and analytical thinking.</li>
      </ul>
      
      <p>These cultural movements underscore the importance of collective action, demonstrating that significant change is possible when individuals and communities work together toward common goals. As we face global challenges, from environmental crises to social inequalities, the role of cultural movements will continue to be crucial. These movements not only advocate for progress but also provide a roadmap for building a more inclusive, compassionate, and sustainable society.</p>
      
      <p>Looking ahead, the continued influence of cultural movements will likely lead to even more significant societal changes. As technology continues to evolve, it will likely provide new platforms for activism and expression, while also presenting new challenges that require collective action. In the years ahead, cultural movements will continue to play a vital role in shaping contemporary society, encouraging us to participate in positive change and contribute to a better, more inclusive world.</p>
    `,
    imageUrl: '/optimized/culture.webp',
    imageCaption: 'IN HONOREM PRINCIPIS APOST PAVLVS V BORGHESIVS ROMANVS PONT MAX AN MD C XII PONT VII',
    author: {
      id: 'duf-hawkins',
      name: 'DUF HAWKINS',
      avatar: '/optimized/social.webp',
      role: 'Contributing Writer'
    },
    category: { id: '7', name: 'Culture', slug: 'culture' },
    tags: [
      { id: '1', name: 'Society', slug: 'society' },
      { id: '2', name: 'History', slug: 'history' },
      { id: '3', name: 'Culture', slug: 'culture' }
    ],
    publishedAt: 'Monday, September 18, 2023',
    readingTimeMin: 8,
    isFeatured: true
  },
  {
    id: 'world-news-social-movements',
    slug: 'understanding-social-movements-shaping-world-today',
    title: 'Understanding the social movements shaping our world today',
    excerpt: 'An overview of how modern grassroots organizations are leveraging technology and digital advocacy to create global policy shifts.',
    content: `
        <p>Cultural movements have been catalysing societal change for centuries, historically reshaping values, beliefs, and behaviors. These movements, ranging from fine arts and literature to science and digital innovations, shape not only individual identity but also collective structures and industries. The growing awareness and accessibility of these groups highlight a societal shift toward inclusivity, diversity, and cultural fluidity—principles that are increasingly guiding the evolution of modern society.</p>
      
      <p>One of the most prominent cultural movements in recent years has been the shift toward intersectionality. This movement, rooted in the work of Black feminist scholars, recognizes that systems of oppression are interconnected and cannot be examined in isolation. In recent decades, organizations and even governments have been compelled to reconsider their practices and policies. Many businesses are implementing diversity and inclusion programs, and cultural organizations are actively working to curate more diverse exhibitions, performances, and representations. The influence of intersectionality is apparent not only in the work of activists but also in entertainment, education, and politics, representing a profound shift in how authentic storytelling is prioritized.</p>
      
      <p>Environmental movements, too, are playing a powerful role in shaping contemporary society. From individual actions to systemic regulations, people around the world are uniting to address climate change and environmental degradation. These efforts have led to a shift in consumer behavior—with more people opting for sustainable, eco-friendly products—as well as prompting policy changes by governments. Many businesses are also beginning to prioritize green practices, acknowledging both the commercial benefits and the urgency of global warming. These environmental movements emphasize the need for systemic change, urging individuals and institutions alike to adopt more sustainable lifestyles.</p>
      
      <p>The rise of global culture and technology driven by digital connectivity has transformed how people engage with one another and participate in cultural shifts. Social media platforms have become powerful tools for awareness, allowing messages to spread globally instantly. From tags and viral campaigns, to online communities, social media has allowed people to rally around dynamic causes, from human rights to education. This digital connectivity has not only broadened the reach of cultural movements but has also allowed individuals from different backgrounds to find common ground. This has led to the creation of a global digital community, bringing together individuals from different backgrounds and regions in pursuit of shared goals.</p>
      
      <p>At the same time, cultural movements have had a significant impact on the arts and media industries. Art forms have always served as a reflection of societal shifts, and contemporary artists continue to use their work to challenge traditional norms and spark conversation. From visual art that tackles difficult social topics to literature that challenges traditional narratives, art has become a medium through which normalized assumptions are discussed and deconstructed. Writers are pushing for representation of a wide range of human experiences, highlighting stories that have historically been overlooked. This trend is not only expanding representation in arts and culture but is also encouraging audiences to think critically about the world around them.</p>
      
      <p>Education systems are also evolving in response to cultural movements. Schools and universities are increasingly incorporating topics such as climate change, mental health, and social justice, equipping students with the knowledge and skills they need to navigate a rapidly changing world. Many educational institutions are shifting away from traditional rote-learning systems toward dynamic models that emphasize critical thinking and creative problem-solving. These changes are preparing younger generations to become more globally minded and socially conscious, focusing on the needs of leaders, value programs, inclusivity, and sustainability.</p>
      
      <p>The effects of cultural movements can be summarized as follows:</p>
      <ul>
        <li><strong>Social justice</strong> movements are influencing business practices, encouraging inclusivity, fair representation, and equality in various sectors.</li>
        <li><strong>Environmentalism</strong> is driving a transition toward sustainable choices, emphasizing green energy, waste reduction, and climate-conscious decision-making.</li>
        <li><strong>Digital connectivity</strong> has transformed how cultural movements spread, enabling individuals to build global networks and support local causes on a global platform.</li>
        <li><strong>Arts and media</strong> are increasingly highlighting diverse perspectives, using storytelling to address complex social issues and foster empathy.</li>
        <li><strong>Educational reforms</strong> are introducing contemporary issues into curricula, preparing future generations to approach global challenges with creativity and analytical thinking.</li>
      </ul>
      
      <p>These cultural movements underscore the importance of collective action, demonstrating that significant change is possible when individuals and communities work together toward common goals. As we face global challenges, from environmental crises to social inequalities, the role of cultural movements will continue to be crucial. These movements not only advocate for progress but also provide a roadmap for building a more inclusive, compassionate, and sustainable society.</p>
      
      <p>Looking ahead, the continued influence of cultural movements will likely lead to even more significant societal changes. As technology continues to evolve, it will likely provide new platforms for activism and expression, while also presenting new challenges that require collective action. In the years ahead, cultural movements will continue to play a vital role in shaping contemporary society, encouraging us to participate in positive change and contribute to a better, more inclusive world.</p>
    
    `,
    imageUrl: '/optimized/social.webp',
    author: {
      id: 'sarah-jenkins',
      name: 'Sarah Jenkins',
      avatar: '/optimized/social.webp',
      role: 'Staff Writer'
    },
    category: { id: '1', name: 'World News', slug: 'world-news' },
    tags: [
      { id: '1', name: 'World', slug: 'world' },
      { id: '4', name: 'Activism', slug: 'activism' }
    ],
    publishedAt: 'Sep 18, 2023',
    readingTimeMin: 5
  },
  {
    id: 'health-genetic-profiles',
    slug: 'tailoring-treatments-individual-genetic-profiles',
    title: 'Tailoring treatments to individual genetic profiles',
    excerpt: 'How precision medicine is transforming oncology and chronic disease management, custom-tailoring therapies to the patient genome.',
    content: `
       <p>Cultural movements have been catalysing societal change for centuries, historically reshaping values, beliefs, and behaviors. These movements, ranging from fine arts and literature to science and digital innovations, shape not only individual identity but also collective structures and industries. The growing awareness and accessibility of these groups highlight a societal shift toward inclusivity, diversity, and cultural fluidity—principles that are increasingly guiding the evolution of modern society.</p>
      
      <p>One of the most prominent cultural movements in recent years has been the shift toward intersectionality. This movement, rooted in the work of Black feminist scholars, recognizes that systems of oppression are interconnected and cannot be examined in isolation. In recent decades, organizations and even governments have been compelled to reconsider their practices and policies. Many businesses are implementing diversity and inclusion programs, and cultural organizations are actively working to curate more diverse exhibitions, performances, and representations. The influence of intersectionality is apparent not only in the work of activists but also in entertainment, education, and politics, representing a profound shift in how authentic storytelling is prioritized.</p>
      
      <p>Environmental movements, too, are playing a powerful role in shaping contemporary society. From individual actions to systemic regulations, people around the world are uniting to address climate change and environmental degradation. These efforts have led to a shift in consumer behavior—with more people opting for sustainable, eco-friendly products—as well as prompting policy changes by governments. Many businesses are also beginning to prioritize green practices, acknowledging both the commercial benefits and the urgency of global warming. These environmental movements emphasize the need for systemic change, urging individuals and institutions alike to adopt more sustainable lifestyles.</p>
      
      <p>The rise of global culture and technology driven by digital connectivity has transformed how people engage with one another and participate in cultural shifts. Social media platforms have become powerful tools for awareness, allowing messages to spread globally instantly. From tags and viral campaigns, to online communities, social media has allowed people to rally around dynamic causes, from human rights to education. This digital connectivity has not only broadened the reach of cultural movements but has also allowed individuals from different backgrounds to find common ground. This has led to the creation of a global digital community, bringing together individuals from different backgrounds and regions in pursuit of shared goals.</p>
      
      <p>At the same time, cultural movements have had a significant impact on the arts and media industries. Art forms have always served as a reflection of societal shifts, and contemporary artists continue to use their work to challenge traditional norms and spark conversation. From visual art that tackles difficult social topics to literature that challenges traditional narratives, art has become a medium through which normalized assumptions are discussed and deconstructed. Writers are pushing for representation of a wide range of human experiences, highlighting stories that have historically been overlooked. This trend is not only expanding representation in arts and culture but is also encouraging audiences to think critically about the world around them.</p>
      
      <p>Education systems are also evolving in response to cultural movements. Schools and universities are increasingly incorporating topics such as climate change, mental health, and social justice, equipping students with the knowledge and skills they need to navigate a rapidly changing world. Many educational institutions are shifting away from traditional rote-learning systems toward dynamic models that emphasize critical thinking and creative problem-solving. These changes are preparing younger generations to become more globally minded and socially conscious, focusing on the needs of leaders, value programs, inclusivity, and sustainability.</p>
      
      <p>The effects of cultural movements can be summarized as follows:</p>
      <ul>
        <li><strong>Social justice</strong> movements are influencing business practices, encouraging inclusivity, fair representation, and equality in various sectors.</li>
        <li><strong>Environmentalism</strong> is driving a transition toward sustainable choices, emphasizing green energy, waste reduction, and climate-conscious decision-making.</li>
        <li><strong>Digital connectivity</strong> has transformed how cultural movements spread, enabling individuals to build global networks and support local causes on a global platform.</li>
        <li><strong>Arts and media</strong> are increasingly highlighting diverse perspectives, using storytelling to address complex social issues and foster empathy.</li>
        <li><strong>Educational reforms</strong> are introducing contemporary issues into curricula, preparing future generations to approach global challenges with creativity and analytical thinking.</li>
      </ul>
      
      <p>These cultural movements underscore the importance of collective action, demonstrating that significant change is possible when individuals and communities work together toward common goals. As we face global challenges, from environmental crises to social inequalities, the role of cultural movements will continue to be crucial. These movements not only advocate for progress but also provide a roadmap for building a more inclusive, compassionate, and sustainable society.</p>
      
      <p>Looking ahead, the continued influence of cultural movements will likely lead to even more significant societal changes. As technology continues to evolve, it will likely provide new platforms for activism and expression, while also presenting new challenges that require collective action. In the years ahead, cultural movements will continue to play a vital role in shaping contemporary society, encouraging us to participate in positive change and contribute to a better, more inclusive world.</p>
    `,
    imageUrl: '/optimized/genetic.webp',
    author: {
      id: 'dr-emily-wong',
      name: 'Dr. Emily Wong',
      avatar: '/optimized/social.webp',
      role: 'Medical Editor'
    },
    category: { id: '5', name: 'Health', slug: 'health' },
    tags: [
      { id: '5', name: 'Medicine', slug: 'medicine' },
      { id: '6', name: 'Genetics', slug: 'genetics' }
    ],
    publishedAt: 'Sep 2, 2023',
    readingTimeMin: 6
  },
  {
    id: 'sports-athlete-icon',
    slug: 'journey-aspiring-athlete-global-sports-icon',
    title: 'This journey from aspiring athlete to global sports icon',
    excerpt: 'The rise of a sports superstar, showcasing the rigorous training, mental resilience, and brand building behind global success.',
    content: `
        <p>Cultural movements have been catalysing societal change for centuries, historically reshaping values, beliefs, and behaviors. These movements, ranging from fine arts and literature to science and digital innovations, shape not only individual identity but also collective structures and industries. The growing awareness and accessibility of these groups highlight a societal shift toward inclusivity, diversity, and cultural fluidity—principles that are increasingly guiding the evolution of modern society.</p>
      
      <p>One of the most prominent cultural movements in recent years has been the shift toward intersectionality. This movement, rooted in the work of Black feminist scholars, recognizes that systems of oppression are interconnected and cannot be examined in isolation. In recent decades, organizations and even governments have been compelled to reconsider their practices and policies. Many businesses are implementing diversity and inclusion programs, and cultural organizations are actively working to curate more diverse exhibitions, performances, and representations. The influence of intersectionality is apparent not only in the work of activists but also in entertainment, education, and politics, representing a profound shift in how authentic storytelling is prioritized.</p>
      
      <p>Environmental movements, too, are playing a powerful role in shaping contemporary society. From individual actions to systemic regulations, people around the world are uniting to address climate change and environmental degradation. These efforts have led to a shift in consumer behavior—with more people opting for sustainable, eco-friendly products—as well as prompting policy changes by governments. Many businesses are also beginning to prioritize green practices, acknowledging both the commercial benefits and the urgency of global warming. These environmental movements emphasize the need for systemic change, urging individuals and institutions alike to adopt more sustainable lifestyles.</p>
      
      <p>The rise of global culture and technology driven by digital connectivity has transformed how people engage with one another and participate in cultural shifts. Social media platforms have become powerful tools for awareness, allowing messages to spread globally instantly. From tags and viral campaigns, to online communities, social media has allowed people to rally around dynamic causes, from human rights to education. This digital connectivity has not only broadened the reach of cultural movements but has also allowed individuals from different backgrounds to find common ground. This has led to the creation of a global digital community, bringing together individuals from different backgrounds and regions in pursuit of shared goals.</p>
      
      <p>At the same time, cultural movements have had a significant impact on the arts and media industries. Art forms have always served as a reflection of societal shifts, and contemporary artists continue to use their work to challenge traditional norms and spark conversation. From visual art that tackles difficult social topics to literature that challenges traditional narratives, art has become a medium through which normalized assumptions are discussed and deconstructed. Writers are pushing for representation of a wide range of human experiences, highlighting stories that have historically been overlooked. This trend is not only expanding representation in arts and culture but is also encouraging audiences to think critically about the world around them.</p>
      
      <p>Education systems are also evolving in response to cultural movements. Schools and universities are increasingly incorporating topics such as climate change, mental health, and social justice, equipping students with the knowledge and skills they need to navigate a rapidly changing world. Many educational institutions are shifting away from traditional rote-learning systems toward dynamic models that emphasize critical thinking and creative problem-solving. These changes are preparing younger generations to become more globally minded and socially conscious, focusing on the needs of leaders, value programs, inclusivity, and sustainability.</p>
      
      <p>The effects of cultural movements can be summarized as follows:</p>
      <ul>
        <li><strong>Social justice</strong> movements are influencing business practices, encouraging inclusivity, fair representation, and equality in various sectors.</li>
        <li><strong>Environmentalism</strong> is driving a transition toward sustainable choices, emphasizing green energy, waste reduction, and climate-conscious decision-making.</li>
        <li><strong>Digital connectivity</strong> has transformed how cultural movements spread, enabling individuals to build global networks and support local causes on a global platform.</li>
        <li><strong>Arts and media</strong> are increasingly highlighting diverse perspectives, using storytelling to address complex social issues and foster empathy.</li>
        <li><strong>Educational reforms</strong> are introducing contemporary issues into curricula, preparing future generations to approach global challenges with creativity and analytical thinking.</li>
      </ul>
      
      <p>These cultural movements underscore the importance of collective action, demonstrating that significant change is possible when individuals and communities work together toward common goals. As we face global challenges, from environmental crises to social inequalities, the role of cultural movements will continue to be crucial. These movements not only advocate for progress but also provide a roadmap for building a more inclusive, compassionate, and sustainable society.</p>
      
      <p>Looking ahead, the continued influence of cultural movements will likely lead to even more significant societal changes. As technology continues to evolve, it will likely provide new platforms for activism and expression, while also presenting new challenges that require collective action. In the years ahead, cultural movements will continue to play a vital role in shaping contemporary society, encouraging us to participate in positive change and contribute to a better, more inclusive world.</p>
    `,
    imageUrl: '/optimized/sports.webp',
    author: {
      id: 'marcus-kane',
      name: 'Marcus Kane',
      avatar: '/optimized/sports.webp',
      role: 'Sports Journalist'
    },
    category: { id: '6', name: 'Sports', slug: 'sports' },
    tags: [
      { id: '7', name: 'Athletics', slug: 'athletics' },
      { id: '8', name: 'Inspiration', slug: 'inspiration' }
    ],
    publishedAt: 'Sep 6, 2023',
    readingTimeMin: 7
  },

  
]
