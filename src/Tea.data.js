import black from './images/blacktea.png';
import white from './images/whitetea.png';
import oolong from './images/oolongtea.png';
import green from './images/greentea.png';

const TEA_DATA = [{
  id: 'wtid',
  image: white,
  header: 'White tea',
  text: [
    "Currently there is no generally accepted definition of white tea and very little international agreement - some sources use the term to refer to tea that is merely dried with no additional processing, some to tea made from the buds and immature tea leaves picked shortly before the buds have fully opened and allowed to wither and dry in natural sun,[citation needed] while others include tea buds and very young leaves which have been steamed or fired before drying. Most definitions agree, however, that white tea is not rolled or oxidized, resulting in a flavour characterized as \"lighter\" than green or traditional black teas.",
    "In spite of its name, brewed white tea is pale yellow. Its name derives from the fine silvery-white hairs on the unopened buds of the tea plant, which give the plant a whitish appearance. It is harvested primarily in China, mostly in the Fujian province, but more recently produced in Eastern Nepal, Taiwan, Northern Thailand, Galle (Southern Sri Lanka) and India."
  ],
  brewTime: {
    mild: 1,
    strong: 3
  }
},
  {
    id: 'btid',
    image: black,
    header: 'Black tea',
    text: ["The most widely known variety in the West, Black Tea comes from leaves that are fully oxidized. Classic teas like English Breakfast and Earl Grey fall within this category.",
      "Black teas are especially rich in theaflavins and thearubigens (potent antioxidants) which have shown impressive cholesterol-lowering abilities and cardiovascular benefits.",
      "The flavor, color, body, strength and aroma of black tea depend on the tea bush varietal, season of harvest, elevation, country of origin, microclimate and degree of oxidation. High quality black teas yield a deep red or vibrant brown infusion with brisk, malty flavors and notes such as Muscat grapes, raisins, sugar dates, dark chocolate or bold fruit."],
    brewTime: {
      mild: 3,
      strong: 5
    }
  },
  {
    id: 'otid',
    image: oolong,
    header: 'Oolong tea',
    text: ["A favorite among connoisseurs, oolong teas (often pronounced “wu-long”) are semi-oxidized and express characteristics in-between green and black teas. The leaves are usually brownish in color, large in appearance and produce a very aromatic, smooth and complex brew.",
      "The cultivation and manufacture of classic oolong tea is restricted to Southeastern China and the island of Taiwan. Often, different tea estates have their preferred ways of making oolong. It is because of the intricacy of this process that oolong teas can have the widest array of flavors and aromas. High quality oolongs are among the world’s most expensive teas."],
    brewTime: {
      mild: 3,
      strong: 5
    }
  },
  {
    id: 'gtid',
    image: green,
    header: 'Green tea',
    text: ["Green tea is rich in EGCG (Epigallocatechin gallate; one of nature's most potent antioxidants) and is gaining widespread popularity due to its natural ability to promote weight-loss and good health.",
      "As a result of minimal processing, green tea retains its natural appearance and vibrant color as well as high levels of the plant's healthy properties. Green tea varies dramatically in flavor from grassy and sweet, to floral and fresh, to nutty and roasted."],
    brewTime: {
      mild: 2,
      strong: 3
    }
  }];

export default TEA_DATA;