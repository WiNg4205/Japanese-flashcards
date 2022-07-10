var items = []
var item;
for (let i = 0; i < 321; i++) {
    items.push(i)
}

let date = new Date(); 
let hh = date.getHours();
var message;

if (hh < 6) message = 'こんばんは'
else if (hh < 12) message = 'おはようございます'
else if (hh < 18) message = 'こんにちは'
else message = 'こんばんは'
document.getElementById('res3').innerHTML = message;


//0 = Japanese
//1 = English
var language = 0;
var New = true;

var create = true;
var l1 = true;
var l2 = true;
var l3 = true;
var l4 = true;
var l5 = true;
var l6 = true;

// Additional: days, numbers, time
key = {
    //Main
    'L1': [0,66],
    'L2': [67,113],
    'L3': [114,169],
    'L4': [170,221],
    'L5': [222,273],
    'L6': [274,320],
    //L1
    'L1main': [0,30],
    'L1expressions': [31,34],
    'L1countries': [35,42],
    'L1majors': [43,53],
    'L1occupations': [54,60],
    'L1family': [61,66],
    //L2
    'L2main': [67,99],
    'L2places': [100,104],
    'L2money': [105,107],
    'L2expressions': [108,113],
    //L3
    'L3extertainment+sports': [114,120],
    'L3food+drinks': [121,129],
    'L3places': [130,133],
    'L3time': [134,144],
    'L3verbs': [145,157],
    'L3adjectives': [158,159],
    'L3adverbs': [160, 165],
    'L3expressions': [166,169],
    //L4
    'L4activities': [170,173],
    'L4people+things': [174,185],
    'L4places': [186,194],
    'L4time': [195,204],
    'L4verbs': [205,212],
    'L4adverbs+expressions': [213,221],
    //L5
    'L5nouns': [222,237],
    'L5adjectives': [238,262],
    'L5verbs': [263,267],
    'L5adverbs+expressions': [268,273],
    //L6
    'L6main': [274,290],
    'L6adjectives': [291,291],
    'L6verbs': [292,315],
    'L6adverbs+expressions': [316,320]
}

vocab = [
    //L1
    //L1main
    ['だ.いがく.', 'college; university'],
    ['こ.うこう.', 'high school'],
    ['が.くせい.', 'student'],
    ['だ.いが.くせい', 'college student'],
    ['りゅ.うが.くせい', 'international student'],
    ['せ.んせ.い', 'teacher; Professor'],
    ['~.ね.んせい', '...year student'],
    ['い.ちね.んせい', 'first-year student'],
    ['せ.んこう.', 'major'],
    ['わ.たし.', 'I'],
    ['と.もだち.', 'friend'],
    ['~.さ.ん', 'Mr./Ms...'],
    ['~.じ.ん', '...people'],
    ['に.ほんじ.ん', 'Japanese people'],
    ['.い.ま', 'now'],
    ['.ご.ぜん', 'A.M.'],
    ['.ご.ご', 'P.M.'],
    ['~じ', "o'clock"],
    ['いちじ', "one o'clock"],
    ['.は.ん', 'half'],
    ['に.じは.ん', 'half past two'],
    ['に.ほ.ん', 'Japan'],
    ['ア.メリカ.', 'U.S.A.'],
    ['~ご', '...language'],
    ['に.ほんご.', 'Japanese language'],
    ['~.さ.い', '...years old'],
    ['で.んわ.', 'telephone'],
    ['~.ば.ん', 'number...'],
    ['ば.んご.う', 'number'],
    ['な.まえ.', 'name'],
    ['.な.ん/.な.に', 'what'],
    //L1expressions
    ['あ.のう.', 'um...'],
    ['.は.い', 'yes'],
    ['.そ.うです', "That's right"],
    ['.そ.うですか', 'I see; Is that so?'],
    //L1countries
    ['イ.ギリス.', 'Britain'],
    ['オ.ーストラ.リア', 'Australia'],
    ['.か.んくこ', 'Korea'],
    ['.カ.ナダ', 'Canada'],
    ['.ちゅ.うごく', 'China'],
    ['.イ.ンド', 'India'],
    ['イ.ジプト.', 'Egypt'],
    ['.フィ.リピン', 'Philippines'],
    //L1majors
    ['ア.ジアけ.んきゅう', 'Asian studies'],
    ['.け.いざい', 'economics'],
    ['.こ.うがく', 'engineering'],
    ['え.いご.', 'English [language]'],
    ['こ.くさいか.んけい', 'international relations'],
    ['コ.ンピュ.ーター', 'computer'],
    ['せ.いじ.', 'politics'],
    ['せ.いぶつ.がく', 'biology'],
    ['.ビ.ジネス', 'business'],
    ['.ぶ.んがく', 'literature'],
    ['れ.きし.', 'history'],
    //L1occupations
    ['い.しゃ.', 'doctor'],
    ['か.いしゃ.いん', 'office worker'],    
    ['か.んご.し', 'nurse'],
    ['こ.うこ.うせい', 'high school student'],
    ['.しゅ.ふ', 'housewife'],
    ['だ.いがくい.んせい', 'graduate student'],
    ['べ.んご.し', 'lawyer'],
    //L1family
    ['お.か.あさん', 'mother'],
    ['お.と.うさん', 'father'],
    ['お.ね.えさん', 'older sister'],
    ['お.に.いさん', 'older brother'],
    ['い.もうと.', 'younger sister'],
    ['お.とうと.', 'younger brother'],
    //L2
    //L2main
    ['こ.れ.', 'this one'],
    ['そ.れ.', 'that one'],
    ['あ.れ.', 'that one [over there]'],
    ['.ど.れ', 'which one'],
    ['こ.の.', 'this...'],
    ['そ.の.', 'that...'],
    ['あ.の.', 'that...[over there]'],
    ['.ど.の', 'which...'],
    ['こ.こ.', 'here'],
    ['そ.こ.', 'there'],
    ['あ.そこ.', 'over there'],
    ['.ど.こ', 'where'],
    ['.だ.れ', 'who'],
    ['お.いしい.', 'delicious'],
    ['さ.かな.', 'fish'],
    ['と.んかつ.', 'pork cutlet'],
    ['に.く.', 'meat'],
    ['.メ.ニュー', 'menu'],
    ['や.さい.', 'vegetable'],
    ['.か.さ', 'umbrella'],
    ['か.ばん.', 'bag'],
    ['く.つ.', 'shoes'],
    ['さ.いふ.', 'wallet'],
    ['.ジ.ーンズ', 'jeans'],
    ['じ.てんしゃ.', 'bicycle'],
    ['し.んぶん.', 'newspaper'],
    ['ス.マホ.', 'smartphone; mobile'],
    ['T.シャツ.', 'T-shirt'],
    ['と.けい.', 'watch; clock'],
    ['.ノ.ート', 'notebook'],
    ['.ペ.ン', 'pen'],
    ['ぼ.うし.', 'hat; cap'],
    ['.ほ.ん', 'book'],
    //L2places
    ['ぎ.んこう.', 'bank'],
    ['コ.ンビニ.', 'convenience store'],
    ['.ト.イレ', 'toilet; restroom'],
    ['と.しょ.かん', 'library'],
    ['ゆ.うび.んきょく', 'post office'],
    //L2money
    ['.い.くら', 'how much'],
    ['~.え.ん', '...yen'],
    ['た.か.い', 'expensive; high'],
    //L2expressions
    ['い.らっしゃいま.せ', 'Welcome [to our store]'],
    ['[~を]お.ねがいしま.す', '..., please'],
    ['[~を]く.ださ.い', 'Please give me...'],
    ['.じゃ.あ', 'then...; if that is the case, ...'],
    ['.ど.うぞ', 'Please.; Here it is.'],
    ['.ど.うも', 'Thank you.'],
    //L3
    //L3entertainment+sports
    ['え.いが.', 'movie'],
    ['.お.んがく', 'music'],
    ['ざっ.し.', 'magazine'],
    ['ス.ポー.ツ', 'sports'],
    ['.デ.ート', 'date (romantic, not calendar!)'],
    ['.テ.ニス', 'tennis'],
    ['.テ.レビ', 'TV'],
    //L3food+drinks
    ['ア.イスクリ.ーム', 'ice cream'],
    ['ハ.ンバ.ーガー', 'hamburger'],
    ['お.さけ.', 'sake; alcoholic drink'],
    ['お.ちゃ.', 'green tea'],
    ['コ.ーヒ.ー', 'coffee'],
    ['み.ず.', 'water'],
    ['あ.さご.はん', 'breakfast'],
    ['ひ.るご.はん', 'lunch'],
    ['ば.んご.はん', 'dinner'],
    //L3places
    ['い.え.', 'home; house'],
    ['う.ち.', 'home; house; my place'],
    ['がっ.こう.', 'school'],
    ['.カ.フェ', 'cafe'],
    //L3time
    ['あ.した.', 'tomorrow'],
    ['.きょ.う', 'today'],
    ['.あ.さ', 'morning'],
    ['.こ.んばん', 'tonight'],
    ['.ま.いにち', 'every day'],
    ['.ま.いばん', 'every night'],
    ['しゅ.うまつ.', 'weekend'],
    ['ど.よ.うび', 'Saturday'],
    ['に.ちよ.うび', 'Sunday'],
    ['.い.つ', 'when'],
    ['~.ご.ろ', 'at about...'],
    //L3verbs
    ['い.く. / い.きま.す', 'to go (destination に/へ)'],
    ['.か.える / か.えりま.す', 'to go back; to return (destination に/へ)'],
    ['き.く. / き.きま.す', 'to listen; to hear (~を)'],
    ['.の.む / の.みま.す', 'to drink (~を)'],
    ['は.な.す / は.なしま.す', 'to speak; to talk (language を/で)'],
    ['.よ.む / よ.みま.す', 'to read (~を)'],
    ['.お.きる / お.きま.す', 'to get up'],
    ['た.べ.る / た.べま.す', 'to eat (~を)'],
    ['ね.る. / ね.ま.す', 'to sleep; to go to sleep'],
    ['.み.る / み.ま.す', 'to see; to look at; to watch (~を)'],
    ['.く.る / き.ま.す', 'to come (destination に/へ)'],
    ['す.る. / し.ま.す', 'to do (~を)'],
    ['べ.んきょうする. / べ.んきょうしま.す', 'to study (~を)'],
    //L3adjectives
    ['.い.い', 'good'],
    ['は.や.い', 'early'],
    //L3adverbs
    ['あ.まり. + negative', 'not much'],
    ['ぜ.んぜん. + negative', 'not at all'],
    ['た.いてい.', 'usually'],
    ['.ちょ.っと', 'a little'],
    ['と.きどき.', 'sometimes'],
    ['.よ.く', 'often; much'],
    //L3expressions
    ['.そ.うですね', "That's right.; Let me see."],
    ['.で.も', 'but'],
    ['.と.うですか', 'How about...?; How is...?'],
    ['.え.え', 'yes'],
    //L4
    //L4activities
    ['.ゲ.ーム / ゲームをします', 'game / play the game'],
    ['ア.ルバ.イト', 'part-time job (more colloquially, バイト)'],
    ['か.いもの.', 'shopping'],
    ['.ク.ラス', 'class'],
    //L4people+things
    ['い.ぬ.', 'dog'],
    ['.ね.こ', 'cat'],
    ['ひ.と.', 'person'],
    ['こ.ども.', 'child'],
    ['あ.な.た', 'you'],
    ['い.す.', 'chair'],
    ['つ.くえ.', 'desk'],
    ['しゃ.しん.', 'picture; photograph'],
    ['は.な.', 'flower'],
    ['レ.ポー.ト', '[term] paper'],
    ['.ご.はん', 'rice; meal'],
    ['.パ.ン', 'bread'],
    //L4places
    ['お.てら.', 'temple'],
    ['こ.うえん.', 'park'],
    ['.ス.ーパー', 'supermarket'],
    ['バ.スてい.', 'bus stop'],
    ['びょ.ういん.', 'hospital'],
    ['.ホ.テル', 'hotel'],
    ['.ほ.んや', 'bookstore'],
    ['ま.ち.', 'town; city'],
    ['.レ.ストラン', 'restaurant'],
    //L4time
    ['き.の.う', 'yesterday'],
    ['~じ.かん.', '...hours'],
    ['い.ちじか.ん', 'one hour'],
    ['せ.んしゅう.', 'last week'],
    ['と.き.', 'when...; at the time of... (~の)'],
    ['げ.つよ.うび', 'Monday'],
    ['か.よ.うび', 'Tuesday'],
    ['す.いよ.うび', 'Wednesday'],
    ['も.くよ.うび', 'Thursday'],
    ['き.んよ.うび', 'Friday'],
    //L4verbs
    ['.あ.う / あ.いま.す', 'to meet; to see (a person) (person に)'],
    ['.あ.る / あ.りま.す', 'there is... (place に thing が)'],
    ['か.う. / か.いま.す', 'to buy (~を)'],
    ['.か.く / か.きま.す', 'to write (person に thing を)'],
    ['.と.る / と.りま.す', 'to take (a picture) (~を)'],
    ['.ま.つ / ま.ちま.す', 'to wait (~を)'],
    ['わ.か.る / わ.かりま.す', 'to understand (~が)'],
    ['い.る. / い.ま.す', '(a person) is in...; stays at... (place に person が)'],
    //L4adverbs+expressions
    ['~.ぐ.らい', 'about (approximate measurement)'],
    ['ご.めんなさ.い', "I'm sorry."],
    ['そ.れから.', 'and then'],
    ['.だ.から', 'so; therefore'],
    ['た.くさ.ん', 'many; a lot'],
    ['~と', 'together with (a person); and'],
    ['.ど.うして', 'why'],
    ['ひ.と.りで', 'alone'],
    ['.も.しもし', 'Hello? (used on the phone)'],
    //L5
    //L5nouns
    ['た.べ.もの', 'food'],
    ['の.み.もの', 'drink'],
    ['く.だ.みの', 'fruit'],
    ['や.すみ.', 'holiday; day off; abscence'],
    ['りょ.こう.', 'travel'],
    ['.う.み', 'sea'],
    ['.サ.ーフィン', 'surfing'],
    ['お.みやげ.', 'souvenir'],
    ['.バ.ス', 'bus'],
    ['.て.んき', 'weather'],
    ['じゅ.くだい.', 'homework'],
    ['.テ.スト', 'test'],
    ['た.んじょ.うび', 'birthday'],
    ['へ.や.', 'room'],
    ['.ぼ.く', 'I (used by men)'],
    ['Lダイズ(エ.ルサ.イズ)', 'size L'],
    //L5adjectives
    ['あ.たらし.い', 'new'],
    ['ふ.る.い', 'old (thing - not used for people)'],
    ['あ.つ.い', 'hot (weather)'],
    ['さ.む.い', 'cold (weather - not used for things)'],
    ['あ.つ.い', 'hot (thing)'],
    ['い.そがし.い', 'busy(people/days)'],
    ['お.おき.い', 'large'],
    ['ち.いさ.い', 'small'],
    ['お.もしろ.い', 'interesting; funny'],
    ['つ.まら.ない', 'boring'],
    ['や.さしい.', 'easy (problem); kind (person)'],
    ['む.ずかしい.', 'difficult'],
    ['か.っこい.い', 'good-looking (conjugates like いい)'],
    ['こ.わ.い', 'frightening'],
    ['た.のし.い', 'fun'],
    ['や.す.い', 'inexpensive; cheap (thing)'],
    ['す.き.(な)', 'fond of; to like (~が)'],
    ['き.らい(な).', 'disgusted with; to dislike (~が)'],
    ['.だ.いすき(な)', 'very fond of; to love (~が)'],
    ['.だ.いきらい(な)', 'to hate (~が)'],
    ['.き.れい(な)', 'beautiful; clean'],
    ['.げ.んき(な)', 'healthy; energetic'],
    ['.し.ずか(な)', 'quiet'],
    ['に.ぎ.やか(な)', 'lively'],
    ['ひ.き(な).', 'not busy; free (time)'],
    //L5verbs
    ['お.よ.ぐ / お.よぎま.す', 'to swim'],
    ['き.く. / き.きま.す', 'to ask (person に)'],
    ['の.る. / の.りま.す', 'to ride; to board (~に)'],
    ['や.る. / や.りま.す', 'to do; to perform (~を)'],
    ['で.かける. / で.かけま.す', 'to go out'],
    //L5adverbs+expressions
    ['いっ.しょに.', 'together'],
    ['す.ご.く', 'extremely'],
    ['だ.いじょ.うぶ', "It's okay; Not to worry; Everything is under control"],
    ['と.ても.', 'very'],
    ['.ど.んな', 'what kind of...'],
    ['~.ま.い', 'counter for flat objects'],
    //L6
    //L6main
    ['かん.じ.', 'kanji; Chinese character'],
    ['きょ.うか.しょ', 'textbook'],
    ['ペ.ージ.', 'page'],
    ['つ.ぎ.', 'next'],
    ['お.かね.', 'money'],
    ['.に.もつ', 'baggage'],
    ['パ.ソコン.', 'personal computer'],
    ['.シャ.ワー', 'shower'],
    ['エ.アコン.', 'air conditioner'],
    ['.で.んき', 'electricity; light'],
    ['.ま.ど', 'window'],
    ['で.んしゃ.', 'train'],
    ['く.に.', 'country; place of origin'],
    ['こ.んしゅう.', 'this week'],
    ['ら.いしゅう.', 'next week'],
    ['ら.いねん.', 'next year'],
    ['.よ.る', 'night'],
    //L6adjectives
    ['た.いへん(な).', 'tough (situation)'],
    //L6verbs
    ['あ.そぶ. / あ.そびま.す', 'to play; to spend time pleasantly'],
    ['い.そ.ぐ / い.そぎま.す', 'to hurry'],
    ['.か.えす / か.えしま.す', 'to return (a thing) (person に thing を)'],
    ['け.す. / け.しま.す', 'to turn off; to erase (~を)'],
    ['し.ぬ. / し.にま.す', 'to die'],
    ['す.わる. / す.わりま.す', 'to sit down'],
    ['.た.つ / た.ちま.す', 'to stand up'],
    ['たば.こを.すう / す.いま.す', 'to smoke'],
    ['つ.かう. / つ.かいま.す', 'to use (~を)'],
    ['て.つだ.う / て.つだいま.す', 'to help (person/task を)'],
    ['.は.いる / は.いりま.す', 'to enter (~に)'],
    ['.も.つ / も.ちま.す', 'to carry; to hold (~を)'],
    ['や.す.む / や.すみま.す', '(1) to be absent (from...) (~を)  (2) to rest'],
    ['あ.ける. / あ.けま.す', 'to open (something) (~を)'],
    ['し.め.る / し.めま.す', 'to close (something) (~を)'],
    ['お.しえる. / お.しえま.す', 'to teach; to instruct (person に thing を)'],
    ['わ.すれる. / わ.すれま.す', 'to forget; to leave behind (~を)'],
    ['お.り.る / お.りま.す', 'to get off (~を)'],
    ['か.り.る / か.りま.す', 'to borrow (person に thing を)'],
    ['.シャ.ワーをあ.びる. / あ.びま.す', 'to take a shower'],
    ['つ.け.る / つ.けま.す', 'to turn on (~を)'],
    ['で.んわする. / し.ま.す', 'to call (~に)'],
    ['つ.れてく.る / .きま.す', 'to bring (a person) (~を)'],
    ['も.ってく.る / .きま.す', 'to bring (a thing) (~を)'],
    //L6adverbs+expressions
    ['.あ.とで', 'later on'],
    ['.す.ぐ', 'right away'],
    ['ゆ.っく.ゆっくり', 'slowly; leisurely; unhurriedly'],
    ['.け.っこうです', "That would be fine; That wouldn't be necessary"],
    ['ほ.んとうで.すか', 'Really?'],
]

function draft(l1, l2, l3, l4, l5, l6) {
    items = []
    if (l1) {
        let start = key['L1'][0];
        let end = key['L1'][1];
        for (let i = start; i <= end; i++) {
            items.push(i)
        }
    }

    if (l2) {
        let start = key['L2'][0];
        let end = key['L2'][1];
        for (let i = start; i <= end; i++) {
            items.push(i)
        }
    }

    if (l3) {
        let start = key['L3'][0];
        let end = key['L3'][1];
        for (let i = start; i <= end; i++) {
            items.push(i)
        }
    }

    if (l4) {
        let start = key['L4'][0];
        let end = key['L4'][1];
        for (let i = start; i <= end; i++) {
            items.push(i)
        }
    }

    if (l5) {
        let start = key['L5'][0];
        let end = key['L5'][1];
        for (let i = start; i <= end; i++) {
            items.push(i)
        }
    }

    if (l6) {
        let start = key['L6'][0];
        let end = key['L6'][1];
        for (let i = start; i <= end; i++) {
            items.push(i)
        }
    }
}

function pitch(word) {
    var positions = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '.') positions.push(i - positions.length);
        
    }
    return positions;
}

document.getElementById('btns').onclick = function() {
    
    if (create) {
        draft(l1, l2, l3, l4, l5, l6);
        create = false;
    } 
    console.log(items);
    if (New) {
        item = items[Math.floor(Math.random()*items.length)];
        New = false;
    } else New = true;

    if (language === 0) {
        //var word = vocab[item][0].replaceAll('.','')
        var word = vocab[item][0];
        positions = pitch(word);
        console.log(positions);
        if (positions.length > 0) {
            word = word.replaceAll('.','')
            start = positions[0];
            end = positions[1];
            word = word.substring(0,start) + "<span class='highlight'>" + word.substring(start,end) + "</span>" + word.substring(end,word.length);
        }

        /*if (positions.length === 4) {
            word = word.replaceAll('.','')
            start = positions[0];
            end = positions[1];
            start2 = positions[2];
            end2 = positions[3];
            word = word.substring(0,start) + "<span class='highlight'>" + word.substring(start,end) + "</span>" + word.substring(end,start2);
            word = word + ("<span class='highlight'>" + word.substring(start2,end2) + "</span>") + word.substring(end2,word.length);
        } */
        
        document.getElementById('res').innerHTML = word;
        document.getElementById('res2').innerHTML = '';
        language = 1;
    } else {
        document.getElementById('res2').innerHTML = vocab[item][1];
        language = 0;
    }
}

document.getElementById('btns1').onclick = function() {

    create = true;
    if (l1) {
        document.getElementById('btns1').innerHTML = 'L1';
        l1 = false;
    } else {
        document.getElementById('btns1').innerHTML = 'L1✓';
        l1 = true;
    } 
}

document.getElementById('btns2').onclick = function() {
    create = true;
    create = true;
    if (l2) {
        document.getElementById('btns2').innerHTML = 'L2';
        l2 = false;
    } else {
        document.getElementById('btns2').innerHTML = 'L2✓';
        l2 = true;
    }
}

document.getElementById('btns3').onclick = function() {
    create = true;
    if (l3) {
        document.getElementById('btns3').innerHTML = 'L3';
        l3 = false;
    } else {
        document.getElementById('btns3').innerHTML = 'L3✓';
        l3 = true;
    }
}

document.getElementById('btns4').onclick = function() {
    create = true;
    if (l4) {
        document.getElementById('btns4').innerHTML = 'L4';
        l4 = false;
    } else {
        document.getElementById('btns4').innerHTML = 'L4✓';
        l4 = true;
    }
}

document.getElementById('btns5').onclick = function() {
    create = true;
    if (l5) {
        document.getElementById('btns5').innerHTML = 'L5';
        l5 = false;
    } else {
        document.getElementById('btns5').innerHTML = 'L5✓';
        l5 = true;
    }
}

document.getElementById('btns6').onclick = function() {
    create = true;
    if (l6) {
        document.getElementById('btns6').innerHTML = 'L6';
        l6 = false;
    } else {
        document.getElementById('btns6').innerHTML = 'L6✓';
        l6 = true;
    }
}
