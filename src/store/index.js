import {reactive} from 'vue'

export let array = [
  {
    tags: ["Accademic"],
    userTags: ["favorite", "saved"],
    title: "Women in Type", 
    url: "https://research.reading.ac.uk/women-in-type/",
    img: "https://images.unsplash.com/photo-1506782081254-09bcfd996fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    datetime: "2021-05-01" 
  }, 
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Applying Psychology to Text Design: A Case History", 
    url: "https://web-archive.southampton.ac.uk/cogprints.org/588/1/199801002.html", 
    img: "https://images.unsplash.com/photo-1581080247486-57989c1f14ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    datetime: "2020-01-01"
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Effects of Three Typographic Variables on Speed of Reading", 
    url: "http://visiblelanguage.s3.amazonaws.com/pdf/1.1/effects-of-three-typographic-variables-on-speed-of-reading.pdf", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2020-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "To Err is human?", 
    url: "http://kate.bada.cc/wp-content/uploads/2015/02/kate_61_3_9.pdf",
    img: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    datetime: "2020-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Capturing Readers' Attention by Means of Typographical Cuing Strategies", 
    url: "https://www.jstor.org/stable/44418459", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "1978-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "How to make type readable.", 
    url: "https://psycnet.apa.org/record/1941-01004-000", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "1940-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Typographical cues that facilitate comprehension.", 
    url: "https://psycnet.apa.org/doiLanding?doi=10.1037%2F0022-0663.71.2.197", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "1979-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: ["favorite"],
    title: "Implications of issues in typographical design for an aging population", 
    url: "https://www.tandfonline.com/doi/abs/10.1080/03610739408253954",
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2007-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Typography and research-led practice", 
    url: "https://www.researchgate.net/publication/292302625_Typography_and_research-led_practice",
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2014-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Typographic features of text. Outcomes from research and practice", 
    url: "https://eprints.whiterose.ac.uk/82895/", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2014-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Typographic features of text and their contribution to the legibility of academic reading materials: an empirical study", 
    url: "https://core.ac.uk/display/46564170?source=2", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2016-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: ["saved"],
    title: "The impact of the text and background color on the screen reading experience", 
    url: "https://core.ac.uk/display/481928762?source=1&algorithmId=15&similarToDoc=46564170&similarToDocKey=CORE&recSetID=d2ce50f4-c8c4-47d7-a7f5-7b7680005bce&position=5&recommendation_type=same_repo&otherRecs=42609576,199216807,322521798,386372322,481928762", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2017-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Deconstruction, legibility and space: four experimental typographic practices", 
    url: "https://core.ac.uk/display/32327816?source=2", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2013-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: ["saved"],
    title: "Framework of influential factors on the typographic quality of text perceived by its audience", 
    url: "https://core.ac.uk/display/74486735?source=2",
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2009-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Reading in examination-type situations: the effects of text layout on performance", 
    url: "https://core.ac.uk/display/42609576?source=2", 
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2006-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Great type", 
    url: "https://www.google.com",
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2020-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Great type", 
    url: "https://www.google.com",
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2020-01-01" 
  },
  {
    tags: ["Accademic"],
    userTags: [],
    title: "Great type", 
    url: "https://www.google.com",
    img: "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    datetime: "2020-01-01" 
  },
]

export const store = reactive({
  research: array[0],
})

export function setResearch(index = 0) {
  store.research = array[index]
}

export default store