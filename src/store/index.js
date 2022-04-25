import {reactive} from 'vue'

export let array = [
  {
    tags: ["Accademic"],
    userTags: ["favorite", "saved"],
    title: "Women in Type", 
    url: "https://research.reading.ac.uk/women-in-type/",
    img: "https://research.reading.ac.uk/women-in-type/wp-content/uploads/sites/69/Unorganized/slider01.png",
    datetime: "2021-05-01",
    abstract: "Women’s pivotal role in the development of type design is little known. Prof. Fiona Ross and team aim to change this, with an in-depth study of women in type-drawing offices, 1910–90. ‘Women in Type’ is a three-year, Leverhulme-funded research project led at the Department of Typography & Graphic Communication of the University of Reading."
  }, 
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Applying Psychology to Text Design: A Case History", 
    url: "https://web-archive.southampton.ac.uk/cogprints.org/588/1/199801002.html", 
    img: "https://images.unsplash.com/photo-1581080247486-57989c1f14ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    datetime: "2020-01-01",
    abstract: "The aim of this paper is to indicate the nature of applied psychology and the skills that applied psychologists can bring to the area of text design. These skills are illustrated with examples from the authors own work and that of colleagues conducted over a twenty-five year period."
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Effects of Three Typographic Variables on Speed of Reading", 
    url: "http://visiblelanguage.s3.amazonaws.com/pdf/1.1/effects-of-three-typographic-variables-on-speed-of-reading.pdf", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2020-01-01",
    abstract: "An examination of the literature on typographical research reveals a wide gap between research findings a nd practices. Further, there is considerable variation in the results reported by researchers, whose criteria for measurements and experimental methods ha,·e differed. "
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "To Err is human?", 
    url: "http://kate.bada.cc/wp-content/uploads/2015/02/kate_61_3_9.pdf",
    img: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    datetime: "2020-01-01",
    abstract: "Learners who experienced visually enhanced texts improved considerably after the intervention (d=0.84) and they seemed to have outperformed the others who experienced the same texts in a baseline version by a medium-size effect (d=0.43). It was also found that learners’ meaning comprehension was negatively affected by this pedagogic choice (d=-0.27), suggesting a theoretical competition between form and meaning does exist. "
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Approaches to applying spacing methods in seriffed and sans-serif typeface design", 
    url: "http://www.fermello.org/FernandoMello_essay.pdf", 
    img: "https://images.unsplash.com/photo-1610128980054-68d94619e243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    datetime: "2007-01-01",
    abstract: "This essay intends to discuss briefly some existing spacing methods and apply them in seriffed and sans-serif designs. The first part will rapidly present some important optical concepts to correct spacing of letters. The second part is concerned with presenting the results of applying some of these spacing methods to seriffed and sans-serif typefaces"
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "How to make type readable.", 
    url: "https://psycnet.apa.org/record/1941-01004-000", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "1940-01-01",
    abstract: "Subtitled A manual for typographers, printers and advertisers, this book is based on 12 years of research involving speed of reading tests given to 33,031 persons. It deals with the relationship between legibility in the ordinary reading situation and such typographical factors as type style, size, leading, width of line and of margins, columnar arrangement, color of print and of background, and printing surface. "
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Typographical cues that facilitate comprehension.", 
    url: "https://psycnet.apa.org/doiLanding?doi=10.1037%2F0022-0663.71.2.197", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "1979-01-01",
    abstract: "Written sentences often contain several meaningful components (e.g., causes and effects or events in a sequence). Preliminary studies of technical documents showed that typographically segmenting these components improved raters' judgments of the comprehensibility of the information. In the present paper, this segmentation notion is generalized, suggesting that phrase segmentation and indentation can be used to facilitate comprehension. "
  },
  {
    tags: ["Accademic"],
    userTags: ["favorite"],
    title: "Implications of issues in typographical design for an aging population", 
    url: "https://www.tandfonline.com/doi/abs/10.1080/03610739408253954",
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2007-01-01",
    abstract: "The issues in typographical design that inJuence readability in an aging population are explored. The traditional response to age-related changes in vision has been “bigger is better,” but we explore other major variables and vocabulary associated with page layout and design, including type classification and readability, justijcation, traditional rules of page composition, and issues of word forms versus character strategies. Other research areas that should be explored are also considered."
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Typography and research-led practice", 
    url: "https://www.researchgate.net/publication/292302625_Typography_and_research-led_practice",
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2014-01-01",
    abstract: "Typographic design practice continues to evolve by making use of theory, research and analysis in a design process that could lead to more effective visual communication. This includes knowledge available in physiology, psychology and neurology concerning the way we see, the way we read, the way the brain interprets the visual word, and the way that the brain is structured by its experience through learning and the culture of reading. This study will acknowledge that typography functions within cultural and aesthetic expectations that often include considerations to social, aesthetic and human factors."
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Typographic features of text. Outcomes from research and practice", 
    url: "https://eprints.whiterose.ac.uk/82895/", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2014-01-01",
    abstract: "his paper provides a comprehensive review of literature on the legibility of printed text in order to provide informed guidance on the design and preparation of typographic materials. To this end, experimental findings are taken into account, as well as the perspective of typographers, graphic designers, and authors. First, the typographic features of text are reviewed and illustrated individually to identify all the features that specifically characterise text layouts. It is emphasised, however, that the various typographic features should be selected in relation to each other, and that it is the combination and manipulation of all these typographic features as a group that makes the text legible. Studies are then reviewed and illustrated on the typographic structure of text as a whole. This information will prove useful to anyone involved in the development of typographic materials, including typographic and graphic designers, teachers and students."
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Typographic features of text and their contribution to the legibility of academic reading materials: an empirical study", 
    url: "https://core.ac.uk/display/46564170?source=2", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2016-01-01",
    abstract: "An experimental study provided evidence that text layout affects performance when reading text to search for specific information under time pressure in an examination-type situation. The present paper reports a second experimental study conducted to ascertain whether this effect extends to similar academic reading materials and situations that, contrary to examinations, are performed under no time pressure. Three layouts were used for comparison, which replicated real-life examination materials and represented three distinct levels of legibility. The results revealed that text layout affects performance under conditions of search reading even when time pressure is absent. Moreover, participants performed better with the layout conforming to legibility guidelines and considered this layout to be the easiest to use and the most attractive. The outcomes from this study will prove useful to those involved in the development of written materials used in academia such as textbooks, journal articles, magazines, and tests"
  },
  {
    tags: ["Accademic"],
    userTags: ["saved"],
    title: "The impact of the text and background color on the screen reading experience", 
    url: "https://core.ac.uk/display/481928762?source=1&algorithmId=15&similarToDoc=46564170&similarToDocKey=CORE&recSetID=d2ce50f4-c8c4-47d7-a7f5-7b7680005bce&position=5&recommendation_type=same_repo&otherRecs=42609576,199216807,322521798,386372322,481928762", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2017-01-01",
    abstract: "Everyday use of modern technologies implies the need for an optimization of readability and legibility parameters used for the reading of text on screen. A lot of research on readability and legibility in printed materials and digital media has been conducted. It has been noted that the rules for the optimal readability and legibility do not apply equally to both mediums. The choice of proper typeface and font size, foreground and background colour, line spacing, sentence length, and text difficulty have the biggest role in text legibility. There is a tendency in our speaking area to read black text on a white background, which is a standard colour combination in printed materials. Furthermore, many studies have concluded that the above mentioned colour combination is one of the best when it comes to achieving optimal text readability and legibility. The purpose of this study was to test the readability and legibility of text on a computer screen by taking into consideration the different colour combinations of text and background. The factors listed above were used to define the text sample. In this research, for each of the five groups tested, the colour of the text and background were varied, while the content and other parameters of the text sample were constant"
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Applying Psychology to Text Design: A Case History", 
    url: "https://web-archive.southampton.ac.uk/cogprints.org/588/1/199801002.html", 
    img: "https://images.unsplash.com/photo-1581080247486-57989c1f14ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    datetime: "2020-01-01",
    abstract: "The aim of this paper is to indicate the nature of applied psychology and the skills that applied psychologists can bring to the area of text design. These skills are illustrated with examples from the authors own work and that of colleagues conducted over a twenty-five year period."
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Effects of Three Typographic Variables on Speed of Reading", 
    url: "http://visiblelanguage.s3.amazonaws.com/pdf/1.1/effects-of-three-typographic-variables-on-speed-of-reading.pdf", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2020-01-01",
    abstract: "An examination of the literature on typographical research reveals a wide gap between research findings a nd practices. Further, there is considerable variation in the results reported by researchers, whose criteria for measurements and experimental methods ha,·e differed. "
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "To Err is human?", 
    url: "http://kate.bada.cc/wp-content/uploads/2015/02/kate_61_3_9.pdf",
    img: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    datetime: "2020-01-01",
    abstract: "Learners who experienced visually enhanced texts improved considerably after the intervention (d=0.84) and they seemed to have outperformed the others who experienced the same texts in a baseline version by a medium-size effect (d=0.43). It was also found that learners’ meaning comprehension was negatively affected by this pedagogic choice (d=-0.27), suggesting a theoretical competition between form and meaning does exist. "
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Approaches to applying spacing methods in seriffed and sans-serif typeface design", 
    url: "http://www.fermello.org/FernandoMello_essay.pdf", 
    img: "https://images.unsplash.com/photo-1610128980054-68d94619e243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    datetime: "2007-01-01",
    abstract: "This essay intends to discuss briefly some existing spacing methods and apply them in seriffed and sans-serif designs. The first part will rapidly present some important optical concepts to correct spacing of letters. The second part is concerned with presenting the results of applying some of these spacing methods to seriffed and sans-serif typefaces"
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "How to make type readable.", 
    url: "https://psycnet.apa.org/record/1941-01004-000", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "1940-01-01",
    abstract: "Subtitled A manual for typographers, printers and advertisers, this book is based on 12 years of research involving speed of reading tests given to 33,031 persons. It deals with the relationship between legibility in the ordinary reading situation and such typographical factors as type style, size, leading, width of line and of margins, columnar arrangement, color of print and of background, and printing surface. "
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "The impact of the text and background color on the screen reading experience", 
    url: "https://core.ac.uk/display/481928762?source=1&algorithmId=15&similarToDoc=46564170&similarToDocKey=CORE&recSetID=d2ce50f4-c8c4-47d7-a7f5-7b7680005bce&position=5&recommendation_type=same_repo&otherRecs=42609576,199216807,322521798,386372322,481928762", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2017-01-01",
    abstract: "Everyday use of modern technologies implies the need for an optimization of readability and legibility parameters used for the reading of text on screen. A lot of research on readability and legibility in printed materials and digital media has been conducted. It has been noted that the rules for the optimal readability and legibility do not apply equally to both mediums. The choice of proper typeface and font size, foreground and background colour, line spacing, sentence length, and text difficulty have the biggest role in text legibility. There is a tendency in our speaking area to read black text on a white background, which is a standard colour combination in printed materials. Furthermore, many studies have concluded that the above mentioned colour combination is one of the best when it comes to achieving optimal text readability and legibility. The purpose of this study was to test the readability and legibility of text on a computer screen by taking into consideration the different colour combinations of text and background. The factors listed above were used to define the text sample. In this research, for each of the five groups tested, the colour of the text and background were varied, while the content and other parameters of the text sample were constant"
  },
]

export const store = reactive({
  research: array[0],
})

export function setResearch(index = 0) {
  store.research = array[index]
}

export default store