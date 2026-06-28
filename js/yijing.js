// 易经六十四卦数据
const GUA_DATA = {
    0: {
        name: "乾卦",
        symbol: "䷀",
        guaci: "元亨利贞",
        interpretation: "天行健，君子以自强不息。此时阳气最盛，如日中天，象征着大有可为、蓬勃发展之势。",
        advice: "适合积极进取、大胆行动。你的决策方向是正确的，坚持下去必有收获。时机已到，不必犹豫。"
    },
    1: {
        name: "坤卦",
        symbol: "䷁",
        guaci: "元亨，利牝马之贞",
        interpretation: "地势坤，君子以厚德载物。此时宜静不宜动，如大地般包容、承载，顺势而为。",
        advice: "建议保持冷静、稳健行事。不要急于求成，打好基础、稳步推进是最好的策略。耐心等待时机。"
    },
    2: {
        name: "屯卦",
        symbol: "䷂",
        guaci: "元亨利贞，勿用有攸往",
        interpretation: "刚柔始交而难生。万事开头难，当前处于创业或新事物的萌芽阶段，困难是正常的。",
        advice: "现在还不是大举行动的时候。做好充分准备，积累实力，等待更好的时机。坚持但不要冒进。"
    },
    3: {
        name: "蒙卦",
        symbol: "䷃",
        guaci: "亨。匪我求童蒙，童蒙求我",
        interpretation: "山下出泉，蒙。当前处于学习或探索阶段，需要启蒙和指导，保持谦逊学习的态度。",
        advice: "建议多学习、多请教他人。对现状不清晰的方面，可以先观察、了解再决策。不要盲目行动。"
    },
    4: {
        name: "需卦",
        symbol: "䷄",
        guaci: "有孚，光亨，贞吉",
        interpretation: "云上于天，需。时机尚未成熟，需要等待和准备，保持诚信和耐心。",
        advice: "耐心等待是关键。现在适合做准备工作、积累资源。不要急于推进，水到渠成时自然顺利。"
    },
    5: {
        name: "讼卦",
        symbol: "䷅",
        guaci: "有孚，窒。惕中吉。终凶",
        interpretation: "天与水违行，讼。当前容易产生争执和分歧，需要谨慎处理矛盾，避免冲突升级。",
        advice: "建议避免正面冲突，寻求和解或妥协。如果必须争取，要做好充分准备，但和平解决更佳。"
    },
    6: {
        name: "师卦",
        symbol: "䷆",
        guaci: "贞，丈人，吉无咎",
        interpretation: "地中有水，师。当前需要有组织、有纪律的行动，众人齐心协力方能成事。",
        advice: "建议寻求团队合作或专业指导。单打独斗不如借助他人力量，组织好资源和人员是成功关键。"
    },
    7: {
        name: "比卦",
        symbol: "䷇",
        guaci: "吉。原筮元永贞，无咎",
        interpretation: "水在地上，比。当前强调亲密合作、团结一致，与志同道合者并肩而行。",
        advice: "建议寻求合作伙伴、建立联盟。与信任的人一起行动，分享资源和信息，会事半功倍。"
    },
    8: {
        name: "小畜卦",
        symbol: "䷈",
        guaci: "亨。密云不雨，自我西郊",
        interpretation: "风行天上，小畜。当前积蓄力量阶段，规模有限但稳扎稳打，等待时机成熟。",
        advice: "可以小规模尝试，但不要大规模投入。先试水、积累经验，等待条件成熟再扩大。"
    },
    9: {
        name: "履卦",
        symbol: "䷉",
        guaci: "履虎尾，不咥人，亨",
        interpretation: "上天下泽，履。当前如履薄冰，需要谨慎小心，按规矩行事，虽有风险但可平安。",
        advice: "建议小心谨慎，遵循既定规则和流程。不要冒险或走捷径，稳扎稳打最为稳妥。"
    },
    10: {
        name: "泰卦",
        symbol: "䷊",
        guaci: "小往大来，吉亨",
        interpretation: "天地交，泰。当前天地相通、阴阳调和，是最为有利的局面，诸事皆宜。",
        advice: "现在是行动的最佳时机！积极进取、大胆决策，条件已经成熟，成功的概率很高。"
    },
    11: {
        name: "否卦",
        symbol: "䷋",
        guaci: "否之匪人，不利君子贞",
        interpretation: "天地不交，否。当前阴阳不调、闭塞不通，处于不利局面，宜静不宜动。",
        advice: "建议暂缓重要决策，等待局势转变。现在不宜有大动作，保持低调、耐心等待时机改善。"
    },
    12: {
        name: "同人卦",
        symbol: "䷌",
        guaci: "同人于野，亨",
        interpretation: "天与火，同人。当前需要与他人协同合作，打破隔阂，寻求共同点。",
        advice: "建议主动沟通、寻求合作。找到志同道合的伙伴，共同推进会更容易成功。"
    },
    13: {
        name: "大有卦",
        symbol: "䷍",
        guaci: "元亨",
        interpretation: "火在天上，大有。当前如日中天，收获丰盛，是积极进取、大展宏图的好时机。",
        advice: "可以大胆行动！当前形势大好，机会难得，积极把握必有收获。但不要骄傲自满。"
    },
    14: {
        name: "谦卦",
        symbol: "䷎",
        guaci: "亨，君子有终",
        interpretation: "地中有山，谦。当前保持谦逊低调最为有利，不张扬、不争抢，反而能成事。",
        advice: "建议保持谦逊，不要急于表现或争功。低调行事、稳步推进，最终会有好结果。"
    },
    15: {
        name: "豫卦",
        symbol: "䷏",
        guaci: "利建侯行师",
        interpretation: "雷出地奋，豫。当前充满活力和机遇，积极行动可以带来顺利和快乐。",
        advice: "现在是积极行动的好时机！充满信心地推进计划，会有不错的结果。保持热情和主动性。"
    },
    16: {
        name: "随卦",
        symbol: "䷐",
        guaci: "元亨利贞，无咎",
        interpretation: "泽中有雷，随。当前宜顺应时势、灵活变通，不要固执己见。",
        advice: "建议灵活应对，顺应环境变化。不要过于固执，适当调整策略会更有利。"
    },
    17: {
        name: "蛊卦",
        symbol: "䷑",
        guaci: "元亨，利涉大川",
        interpretation: "山下有风，蛊。当前需要整顿改革、消除积弊，虽然过程辛苦但很有必要。",
        advice: "建议正视问题，果断整改。现在虽然是困难时期，但彻底解决问题后会迎来新局面。"
    },
    18: {
        name: "临卦",
        symbol: "䷒",
        guaci: "元亨利贞",
        interpretation: "地泽临，临。当前形势向好，渐进发展，积极把握会有不错的前景。",
        advice: "建议积极推进，把握时机。现在适合从小规模开始，逐步扩大，稳健发展。"
    },
    19: {
        name: "观卦",
        symbol: "䷓",
        guaci: "盥而不荐，有孚颙若",
        interpretation: "风行地上，观。当前宜观察、观望，不宜急于行动，看清形势再决策。",
        advice: "建议先观察、了解情况，不要急于行动。多收集信息、分析局势，时机成熟再做决定。"
    },
    20: {
        name: "噬嗑卦",
        symbol: "䷔",
        guaci: "亨。利用狱",
        interpretation: "火雷噬嗑，噬嗑。当前需要果断处理障碍，如同咬碎硬物，要有决心和执行力。",
        advice: "建议果断行动，解决障碍。不要拖延，直面问题，用强有力的手段推进会有转机。"
    },
    21: {
        name: "贲卦",
        symbol: "䷕",
        guaci: "亨。小利有攸往",
        interpretation: "山下有火，贲。当前适合美化、修饰，小有作为但不宜大规模行动。",
        advice: "建议适度包装和展示。现在适合小规模改进或美化，但不要过度投入。"
    },
    22: {
        name: "剥卦",
        symbol: "䷖",
        guaci: "不利有攸往",
        interpretation: "山附于地，剥。当前处于衰退期，资源或优势在流失，不宜有大动作。",
        advice: "建议保守行事，保护现有资源。现在不宜扩张或冒险，稳住阵脚、等待转机。"
    },
    23: {
        name: "复卦",
        symbol: "䷗",
        guaci: "亨。出入无疾",
        interpretation: "雷在地中，复。当前开始恢复、回升，虽然缓慢但趋势向好，值得期待。",
        advice: "建议开始逐步恢复行动。最困难的时期已经过去，现在可以谨慎推进，会有好转。"
    },
    24: {
        name: "无妄卦",
        symbol: "䷘",
        guaci: "元亨利贞",
        interpretation: "天雷无妄，无妄。当前真诚无欺、实事求是，顺其自然最为有利。",
        advice: "建议保持真诚，不要投机取巧。踏实做事、诚实待人，会有好的回报。"
    },
    25: {
        name: "大畜卦",
        symbol: "䷙",
        guaci: "利贞。不家食，吉",
        interpretation: "天在山中，大畜。当前积蓄力量、储备资源，为将来更大的发展做准备。",
        advice: "建议继续积累和准备。现在适合学习和储备，为将来的机会打好基础。"
    },
    26: {
        name: "颐卦",
        symbol: "䷚",
        guaci: "贞吉。观颐，自求口实",
        interpretation: "山下有雷，颐。当前需要关注自身需求，修养身心，从内部找答案。",
        advice: "建议关注自身，审视内心。从自己的真实需求和情况出发，寻找解决问题的办法。"
    },
    27: {
        name: "大过卦",
        symbol: "䷛",
        guaci: "栋桡，利有攸往",
        interpretation: "泽灭木，大过。当前负担过重、压力很大，需要承担起重任。",
        advice: "建议勇敢承担挑战。虽然压力大，但这是必须经历的阶段，坚持下去会有突破。"
    },
    28: {
        name: "坎卦",
        symbol: "䷜",
        guaci: "习坎，有孚，维心亨",
        interpretation: "水洊至，习坎。当前险阻重重，如同陷落险地，需要诚信和勇气度过难关。",
        advice: "建议保持信心和耐心。困难时期需要坚持，相信困难会过去，保持乐观和韧性。"
    },
    29: {
        name: "离卦",
        symbol: "䷝",
        guaci: "利贞，亨",
        interpretation: "明两作，离。当前光明磊落、清晰明了，积极行动会有好结果。",
        advice: "建议积极行动，保持透明和清晰。现在是推进计划的好时机，会有好的发展。"
    },
    30: {
        name: "咸卦",
        symbol: "䷞",
        guaci: "亨，利贞",
        interpretation: "山泽通气，咸。当前感应相通，能够与他人建立良好的连接和理解。",
        advice: "建议主动沟通、建立联系。与他人合作或寻求支持会比较顺利。"
    },
    31: {
        name: "恒卦",
        symbol: "䷟",
        guaci: "亨，无咎",
        interpretation: "雷风恒，恒。当前需要持之以恒、保持稳定，不要轻易改变方向。",
        advice: "建议坚持既定方向，保持稳定。不要频繁改变，持续努力会有回报。"
    },
    32: {
        name: "遁卦",
        symbol: "䷠",
        guaci: "亨，小利贞",
        interpretation: "天下有山，遁。当前宜退避、隐忍，不宜正面冲突或强行推进。",
        advice: "建议暂时退避或低调行事。不要强行推进，避开锋芒、等待时机会更安全。"
    },
    33: {
        name: "大壮卦",
        symbol: "䷡",
        guaci: "利贞",
        interpretation: "雷在天上，大壮。当前气势正盛、实力强大，可以积极行动。",
        advice: "建议积极行动，把握机会。现在有足够的实力和条件，大胆推进计划。"
    },
    34: {
        name: "晋卦",
        symbol: "䷢",
        guaci: "康侯用锡马蕃庶",
        interpretation: "明出地上，晋。当前如日东升，前景光明，积极进取会有提升。",
        advice: "建议积极进取，把握上升机会。现在适合争取更好的发展，会有进步。"
    },
    35: {
        name: "明夷卦",
        symbol: "䷣",
        guaci: "利艰贞",
        interpretation: "明入地中，明夷。当前光明受损，处于不利境地，需要韬光养晦。",
        advice: "建议低调行事，保护自己。不要张扬，等待时机转好再行动。"
    },
    36: {
        name: "家人卦",
        symbol: "䷤",
        guaci: "利女贞",
        interpretation: "风自火出，家人。当前需要关注内部、巩固基础，处理好身边关系。",
        advice: "建议关注内部事务和人际关系。处理好身边的事，稳固基础，会有好的发展。"
    },
    37: {
        name: "睽卦",
        symbol: "䷥",
        guaci: "小事吉",
        interpretation: "火泽睽，睽。当前存在分歧和冲突，需要谨慎处理矛盾。",
        advice: "建议谨慎处理分歧。小事可以推进，大事需要协调好各方关系。"
    },
    38: {
        name: "蹇卦",
        symbol: "䷦",
        guaci: "利西南，不利东北",
        interpretation: "山上有水，蹇。当前困难重重、前进受阻，需要寻找其他路径。",
        advice: "建议改变策略，寻找其他途径。正面推进困难，可以考虑绕行或改变方向。"
    },
    39: {
        name: "解卦",
        symbol: "䷧",
        guaci: "利西南",
        interpretation: "雷雨作，解。当前困难开始解除，局势逐渐好转。",
        advice: "建议抓住时机，解决问题。困难正在缓解，现在适合采取行动。"
    },
    40: {
        name: "损卦",
        symbol: "䷨",
        guaci: "有孚，元吉",
        interpretation: "山下有泽，损。当前需要有所牺牲或付出，才能换取长远利益。",
        advice: "建议做出适当牺牲。短期损失会换取长远收益，要有大局观。"
    },
    41: {
        name: "益卦",
        symbol: "䷩",
        guaci: "利有攸往",
        interpretation: "风雷益，益。当前形势有利，积极行动会带来增益和提升。",
        advice: "建议积极行动。现在适合推进计划，会有不错的收获和提升。"
    },
    42: {
        name: "夬卦",
        symbol: "䷪",
        guaci: "扬于王庭",
        interpretation: "泽上于天，夬。当前需要果断决策、迅速行动，解决关键问题。",
        advice: "建议果断行动，不要犹豫。现在是解决问题的关键时机，迅速推进。"
    },
    43: {
        name: "姤卦",
        symbol: "䷫",
        guaci: "女壮，勿用取女",
        interpretation: "天下有风，姤。当前可能会遇到意外的情况或新的机会。",
        advice: "建议保持警惕，谨慎应对新情况。不要盲目接受一切，仔细评估再决定。"
    },
    44: {
        name: "萃卦",
        symbol: "䷬",
        guaci: "亨。王假有庙",
        interpretation: "泽上于地，萃。当前人员聚集、资源整合，适合合作和集思广益。",
        advice: "建议寻求合作和整合资源。与他人协作会带来更好的结果。"
    },
    45: {
        name: "升卦",
        symbol: "䷭",
        guaci: "元亨",
        interpretation: "地中生木，升。当前稳步上升、渐进发展，前景看好。",
        advice: "建议稳步推进。现在适合渐进式发展，持续努力会有提升。"
    },
    46: {
        name: "困卦",
        symbol: "䷮",
        guaci: "亨，贞，大人吉",
        interpretation: "泽无水，困。当前资源不足、陷入困境，需要坚持和智慧。",
        advice: "建议保持信心，寻找突破。困难时期需要坚持，相信会找到出路。"
    },
    47: {
        name: "井卦",
        symbol: "䷯",
        guaci: "改邑不改井",
        interpretation: "木上有水，井。当前需要深挖资源、从内部寻找解决方案。",
        advice: "建议深挖内部资源。从自身或内部找答案，充分利用现有条件。"
    },
    48: {
        name: "革卦",
        symbol: "䷰",
        guaci: "己日乃孚",
        interpretation: "泽中有火，革。当前需要改革、变革，打破旧有模式。",
        advice: "建议大胆改革。现在适合改变旧模式，引入新方法，会有突破。"
    },
    49: {
        name: "鼎卦",
        symbol: "䷱",
        guaci: "元吉，亨",
        interpretation: "木上有火，鼎。当前适合建立新秩序、新制度，会有好的结果。",
        advice: "建议建立新体系。现在适合创新和建立新的工作方式。"
    },
    50: {
        name: "震卦",
        symbol: "䷲",
        guaci: "亨。震来虩虩",
        interpretation: "洊雷，震。当前面临冲击和挑战，需要保持镇定和勇气。",
        advice: "建议保持镇定，勇敢面对。虽然面临挑战，但保持冷静和勇气很重要。"
    },
    51: {
        name: "艮卦",
        symbol: "䷳",
        guaci: "艮其背，不获其身",
        interpretation: "兼山，艮。当前需要停止行动、冷静观察，不宜推进。",
        advice: "建议暂停行动，冷静观察。现在不宜推进，等待时机成熟再行动。"
    },
    52: {
        name: "渐卦",
        symbol: "䷴",
        guaci: "女归吉",
        interpretation: "山上有木，渐。当前渐进发展、稳步推进，不急于求成。",
        advice: "建议稳步推进，不要急于求成。按部就班地发展，会有好的结果。"
    },
    53: {
        name: "归妹卦",
        symbol: "䷵",
        guaci: "征凶，无攸利",
        interpretation: "泽上有雷，归妹。当前存在风险，不宜冒险或急进。",
        advice: "建议谨慎行事，不要冒险。现在不宜有大动作，保持稳定。"
    },
    54: {
        name: "丰卦",
        symbol: "䷶",
        guaci: "亨，王假之",
        interpretation: "雷电皆至，丰。当前收获丰盛、形势大好，适合积极行动。",
        advice: "建议积极行动。现在形势大好，把握机会会有收获。"
    },
    55: {
        name: "旅卦",
        symbol: "䷷",
        guaci: "小亨，旅贞吉",
        interpretation: "山上有火，旅。当前处于变动或过渡期，需要谨慎应对。",
        advice: "建议谨慎应对变化。过渡时期需要灵活和谨慎，稳步推进。"
    },
    56: {
        name: "巽卦",
        symbol: "䷸",
        guaci: "小亨",
        interpretation: "随风，巽。当前宜顺从、灵活，不宜强硬推进。",
        advice: "建议灵活变通，顺从形势。不要过于强硬，灵活应对会更顺利。"
    },
    57: {
        name: "兑卦",
        symbol: "䷹",
        guaci: "亨，利贞",
        interpretation: "丽泽，兑。当前适合沟通、交流，建立良好的互动关系。",
        advice: "建议积极沟通。现在适合与他人交流、建立联系，会有好的结果。"
    },
    58: {
        name: "涣卦",
        symbol: "䷺",
        guaci: "亨。王假有庙",
        interpretation: "风行水上，涣。当前需要化解分歧、整合资源，建立统一。",
        advice: "建议化解分歧，统一思想。处理好各方关系，达成共识很重要。"
    },
    59: {
        name: "节卦",
        symbol: "䷻",
        guaci: "亨。苦节不可贞",
        interpretation: "泽上有水，节。当前需要节制和约束，适度控制。",
        advice: "建议适度控制。不要过度投入或扩张，适度节制会更有利。"
    },
    60: {
        name: "中孚卦",
        symbol: "䷼",
        guaci: "豚鱼吉，利涉大川",
        interpretation: "泽上有风，中孚。当前诚信为上，保持真诚和信任会有好结果。",
        advice: "建议保持诚信。真诚待人、办事，会有好的回报。"
    },
    61: {
        name: "小过卦",
        symbol: "䷽",
        guaci: "亨，利贞",
        interpretation: "山上有雷，小过。当前适合小规模行动，不宜大规模推进。",
        advice: "建议小规模尝试。现在适合小试牛刀，不要大规模投入。"
    },
    62: {
        name: "既济卦",
        symbol: "䷾",
        guaci: "亨，小利贞",
        interpretation: "水在火上，既济。当前事情已经成功或接近完成，需要保持和巩固。",
        advice: "建议巩固成果。事情已经基本完成，现在重点是保持成果，不要松懈。"
    },
    63: {
        name: "未济卦",
        symbol: "䷿",
        guaci: "亨。小狐汔济",
        interpretation: "火在水上，未济。当前事情尚未完成，需要继续努力。",
        advice: "建议继续努力。还没有完成，需要坚持推进，不要中途放弃。"
    }
};

// 铜钱投掷法
function throwCoinsResult() {
    // 铜钱有正面（字）和反面（花）
    // 正面为阳，反面为阴
    // 投掷3枚铜钱，计算正面数量
    const results = [];
    for (let i = 0; i < 3; i++) {
        results.push(Math.random() < 0.5 ? 1 : 0); // 1为正面（阳），0为反面（阴）
    }
    const yangCount = results.reduce((sum, val) => sum + val, 0);

    // 根据正面数量确定爻
    // 3个正面 = 老阳（阳变阴）
    // 2个正面 = 少阳（阳）
    // 1个正面 = 少阴（阴）
    // 0个正面 = 老阴（阴变阳）
    let lineValue;
    let isChanging = false;

    if (yangCount === 3) {
        lineValue = 1; // 阳
        isChanging = true; // 老阳变阴
    } else if (yangCount === 2) {
        lineValue = 1; // 阳
        isChanging = false;
    } else if (yangCount === 1) {
        lineValue = 0; // 阴
        isChanging = false;
    } else { // yangCount === 0
        lineValue = 0; // 阴
        isChanging = true; // 老阴变阳
    }

    return {
        results,      // 投掷结果 [1,0,1]
        yangCount,    // 正面数量
        lineValue,    // 爻值 0或1
        isChanging    // 是否动爻
    };
}

// 根据六爻计算卦象
function calculateGua(lines) {
    // lines 是6个爻值的数组，从下到上
    // 将二进制转换为十进制索引
    let index = 0;
    for (let i = 0; i < 6; i++) {
        if (lines[i] === 1) {
            index += Math.pow(2, i);
        }
    }
    return index;
}

// 获取卦象数据
function getGuaData(guaIndex) {
    return GUA_DATA[guaIndex] || GUA_DATA[0];
}

// 渲染卦象线条
function renderGuaLines(lines) {
    const container = document.getElementById('gua-lines');
    container.innerHTML = '';

    // 从上到下渲染（lines数组是从下到上的）
    for (let i = lines.length - 1; i >= 0; i--) {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'gua-line';

        if (lines[i] === 1) {
            // 阳爻：一条连续的线
            const yang = document.createElement('div');
            yang.className = 'yang';
            lineDiv.appendChild(yang);
        } else {
            // 阴爻：两条断开的线
            const yin1 = document.createElement('div');
            yin1.className = 'yin';
            const yin2 = document.createElement('div');
            yin2.className = 'yin';
            lineDiv.appendChild(yin1);
            lineDiv.appendChild(yin2);
        }

        container.appendChild(lineDiv);
    }
}
