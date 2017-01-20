import React, { Component } from 'react';
import shortid from 'shortid';

import TeaInfo from './TeaInfo.component';

class Tea extends Component {
  render() {
    const TEA_DATA = [{
      id: shortid.generate(),
      header: 'White tea',
      text: ["Harvested by hand only a few days each spring, white tea is made from baby tea leaves and is the rarest and least processed of all tea varietals. Because it undergoes virtually no processing and is made from the tender, nutrient-rich bud from the tip of the plant, white tea is considered the healthiest of all teas.", "White tea is considered to be the healthiest of all types of tea because it has the highest levels of antioxidants and theanine, a rare amino acid found only in high-quality tea. Antioxidants are believed to maintain health, combat aging and prevent disease. Theanine promotes mental and physical relaxation, improves mood, reduces anxiety, boosts the immune system and increases concentration. White tea also has the lowest caffeine content of all true teas."],
      brewTime: {
        mild: 1,
        strong: 3
      }
    },
      {
        id: shortid.generate(),
        header: 'Black tea',
        text: ["The most widely known variety in the West, Black Tea comes from leaves that are fully oxidized. Classic teas like English Breakfast and Earl Grey fall within this category.", "Black teas are especially rich in theaflavins and thearubigens (potent antioxidants) which have shown impressive cholesterol-lowering abilities and cardiovascular benefits.", "The flavor, color, body, strength and aroma of black tea depend on the tea bush varietal, season of harvest, elevation, country of origin, microclimate and degree of oxidation. High quality black teas yield a deep red or vibrant brown infusion with brisk, malty flavors and notes such as Muscat grapes, raisins, sugar dates, dark chocolate or bold fruit."],
        brewTime: {
          mild: 3,
          strong: 5
        }
      },
      {
        id: shortid.generate(),
        header: 'Oolong tea',
        text: ["A favorite among connoisseurs, oolong teas (often pronounced “wu-long”) are semi-oxidized and express characteristics in-between green and black teas. The leaves are usually brownish in color, large in appearance and produce a very aromatic, smooth and complex brew.", "The cultivation and manufacture of classic oolong tea is restricted to Southeastern China and the island of Taiwan. Often, different tea estates have their preferred ways of making oolong. It is because of the intricacy of this process that oolong teas can have the widest array of flavors and aromas. High quality oolongs are among the world’s most expensive teas."],
        brewTime: {
          mild: 3,
          strong: 5
        }
      },
      {
        id: shortid.generate(),
        header: 'Green tea',
        text: ["Green tea is rich in EGCG (Epigallocatechin gallate; one of nature's most potent antioxidants) and is gaining widespread popularity due to its natural ability to promote weight-loss and good health.", "As a result of minimal processing, green tea retains its natural appearance and vibrant color as well as high levels of the plant's healthy properties. Green tea varies dramatically in flavor from grassy and sweet, to floral and fresh, to nutty and roasted."],
        brewTime: {
          mild: 2,
          strong: 3
        }
      }];
    return(
      <div>
        <TeaInfo teaData={TEA_DATA}/>
      </div>
    )
  }
}

export default Tea;
