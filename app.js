//document.body.style.backgroundColor = "gray";


// DATABASE


const dataChinese = [
    { japanese: "watashi wa kuruma ga hoshii desu", meaning: "araba istiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "1" },
    { japanese: "watashi wa kareshi ga hoshii desu", meaning: "erkek arkadaş istiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "2" },
    { japanese: "watashi wa kuruma ga hoshikunai desu", meaning: "araba istemiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "3" },
    { japanese: "watashi wa kareshi ga hoshikunai desu", meaning: "erkek arkadaş istemiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "4" },
    { japanese: "anata wa kuruma ga hoshii desu ka", meaning: "araba istiyor musun", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "5" },
    { japanese: "ja, nani ga hoshii desu ka", meaning: "o zaman, ne istiyorsun", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "6" },
    { japanese: "donna kareshi ga hoshii desu ka", meaning: "nasıl bir erkek arkadaş istiyorsun", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "7" },
    { japanese: "eeto ikemen kareshi ga ichiban hoshii desu", meaning: "hot bir erkek arkadaş istiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "8" },
    { japanese: "watashi wa kuruma ga hoshikatta desu", meaning: "araba istiyordum", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "9" },
    { japanese: "watashi wa kuruma ga hoshikunakatta desu, demo ima wa hoshii desu", meaning: "araba istemiyordum ama şimdi istiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", id: "10" },
    { japanese: "kare wa atarashii kuruma o hoshi gatte imasu", meaning: "o yeni bir araba istiyor", source: "minna", unit: "13", type: "sentence", pattern: "N wa N ga hoshigatte desu", id: "11" },
    { japanese: "watashi wa kuruma ga/o kaitai desu", meaning: "araba almak istiyorum", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "12" },
    { japanese: "watashi wa biyonse ni aitai desu", meaning: "beyonce ile tanışmak istiyorum", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "13" },
    { japanese: "watashi wa kankoku e ikitai desu", meaning: "koreye gitmek istiyorum", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "14" },
    { japanese: "onaka ga sukimashita hambaagaa ga/o tabetai desu", meaning: "karnım acıktı hamburger yemek istiyorum", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "15" },
    { japanese: "watashi wa benkyoo o shitakunai desu", meaning: "ders çalışmak istemiyorum", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "16" },
    { japanese: "watashi wa asobitakunai desu", meaning: "oynamak istemiyorum", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "17" },
    { japanese: "watashi wa oyogitakunai desu", meaning: "yüzmek istemiyorum", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "18" },
    { japanese: "watashi wa kekkon shitakunai desu", meaning: "evlenmek istemiyorum", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "19" },
    { japanese: "anata wa nani o kaitai desu ka", meaning: "ne satın almak istiyosun", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "20" },
    { japanese: "anata wa dare ni aitai desu ka", meaning: "kimle buluşmak istiyosun", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "21" },
    { japanese: "anata wa doko e ikitai desu ka", meaning: "nereye gitmek istiyosun", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "22" },
    { japanese: "anata wa itsu kankoku e ikitai desu ka", meaning: "ne zaman koreye gitmek istiosun", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "23" },
    { japanese: "anata wa nani o shitai desu ka", meaning: "ne yapmak istiyosun", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "24" },
    { japanese: "kankoku e ikitakatta desu", meaning: "koreye gitmek istedim", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "25" },
    { japanese: "kekkon shitakunakatta desu", meaning: "evelenmek istemedim", source: "minna", unit: "13", type: "sentence", pattern: "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", id: "26" },
    { japanese: "kanojo wa roshia e ikita gatte imasu", meaning: "o rusyaya gitmek istiyor", source: "minna", unit: "13", type: "sentence", pattern: "N wa N o Vta gatte imasu", id: "27" },
    { japanese: "watashi wa honkon e kaimono ni ikimasu", meaning: "hong konga alışverişe gidiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "28" },
    { japanese: "watashi wa nihon e benkyou shi ni kimashita", meaning: "i came to japan to study", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "29" },
    { japanese: "watashi wa uchi e ryoushin ni ai ni kaerimashita", meaning: "i went back home to see my parents", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "30" },
    { japanese: "tomodachi to sakkaa o shi ni ikimasu", meaning: "arkadaşımla futbol oynamaya gidiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "31" },
    { japanese: "kazoku wa nihon de hajimete kara, kuukou e mukae ni ikimasu", meaning: "ailem japonyaya ilk kez geldiğinden (başladığından), alana karşılamaya gidiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "32" },
    { japanese: "hokkaido e sukii ni ikimasu", meaning: "hokkaidoya kayağa gidiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "33" },
    { japanese: "maitoshi sapporo no yuki matsuri ni ikimasu", meaning: "her sene sapporo kar festivaline gidiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "34" },
    { japanese: "doko e benkyou ni ikimasu ka", meaning: "nereye çalışmaya gidiyosun", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "35" },
    { japanese: "sutoa e nani o kai ni ikimasu ka", meaning: "dükkana ne almaya gidiosun", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "36" },
    { japanese: "dare ni ai ni kimashita ka", meaning: "kimi görmeye (kimle buluşmaya) geldin", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "37" },
    { japanese: "nanji goro watashi o mukae ni kimasu ka", meaning: "saat kaç civarı beni almaya (alandan) geleceksin", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "38" },
    { japanese: "anata wa nani o shi ni ikimasu ka", meaning: "ne yapmaya gidiyosun", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "39" },
    { japanese: "ano mise ni hairimashou", meaning: "o dükkana girelim", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "40" },
    { japanese: "watashi wa shinjuku ni kutsu o kaini ikimasu.", meaning: "shinjukuya ayakkabı almaya gidiyorum", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "41" },
    { japanese: "watashitachi wa doobutsu-en ni raion o mini ikimasu.", meaning: "hayvanat bahçesine aslan görmeye gidiyoruz", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "42" },
    { japanese: "kodomotachi wa puuru ni oyogi ni ikimasu.", meaning: "çocuklar havuza yüzmeye gidiyorlar", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "43" },
    { japanese: "kare wa gakkoo ni tomodachi ni aini ikimasu.", meaning: "o okula arkadaşlarıyla buluşmaya gidiyor", source: "minna", unit: "13", type: "sentence", pattern: "N e Vstem || N ni V", id: "44" },
    { japanese: "kare wa shichiji goro uchi o demashita", meaning: "saat 7'de evi terk etti (evden çıktı)", source: "minna", unit: "13", type: "sentence", pattern: "N ni hairimasu || o demasu", id: "45" },
    { japanese: "densha ni norimasu", meaning: "trene biniyor", source: "minna", unit: "13", type: "sentence", pattern: "N ni hairimasu || o demasu", id: "46" },
    { japanese: "densha o orimasu", meaning: "trenden iniyor", source: "minna", unit: "13", type: "sentence", pattern: "N ni hairimasu || o demasu", id: "47" },
    { japanese: "nanika (o) tabemasen ka", meaning: "(herhangi) bir şey yemez misin", source: "minna", unit: "13", type: "sentence", pattern: "nanika || dokoka", id: "48" },
    { japanese: "nodo ga kawakimashita nanika nomitai desu", meaning: "susadım, bir şey içmek istiyorum", source: "minna", unit: "13", type: "sentence", pattern: "nanika || dokoka", id: "49" },
    { japanese: "kono shumatsu ni dokoka e asobimasu", meaning: "bu hafta sonu biryerde eğleniyorum", source: "minna", unit: "13", type: "sentence", pattern: "nanika || dokoka", id: "50" },
    { japanese: "natsu yasumi wa dokoka ikimashita ka", meaning: "yaz tatilinde biryere gittin mi", source: "minna", unit: "13", type: "sentence", pattern: "nanika || dokoka", id: "51" },
    { japanese: "sumimasen o namae o oshiete kudasai", meaning: "afedersin ismi söyleyin lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "52" },
    { japanese: "samui kara mado o shimete kudasai", meaning: "sağuk olduğundan pencereyi kapayın lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "53" },
    { japanese: "rozu to yonde kudasai", meaning: "rose ile (ismi ile) çağırın lütfen)", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "54" },
    { japanese: "ashita koko ni kite kudasai", meaning: "yarın buraya gelin lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "55" },
    { japanese: "isoide kudasai", meaning: "acele edin lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "56" },
    { japanese: "ganbatte kudasai", meaning: "gayret edin lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "57" },
    { japanese: "chotto matte kudasai", meaning: "biraz bekleyin lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "58" },
    { japanese: "minnasan kiite kudasai", meaning: "herkes dinlesin lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "59" },
    { japanese: "kono heya wa atsui desu. douzo mado o akete kudasai", meaning: "bu oda sıcak. pencereyi açın lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "60" },
    { japanese: "kono heya wa kurai desu. denki o tsukete kudasai", meaning: "bu oda karanlık. ışığı açın lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "61" },
    { japanese: "sono iriguchi kara haitte kudasai", meaning: "bu girişten giriniz lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "62" },
    { japanese: "ano deguchi kara dete kudasai", meaning: "o çıkıştan çıkın lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "63" },
    { japanese: "anata no pen o kashite kudasai", meaning: "kalemini ödünç alayım lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "64" },
    { japanese: "sono hon o yonde kudasai", meaning: "şu kitabı okuyun lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "65" },
    { japanese: "sono hon o akete kudasai", meaning: "şu kitabı açın lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "66" },
    { japanese: "sono hon o motte kudasai", meaning: "şu kitabı alın lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "67" },
    { japanese: "sono hon o misete kudasai", meaning: "şu kitabı gösterin lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "68" },
    { japanese: "sono hon o kashite kudasai", meaning: "şu kitabı ödünç verin lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "69" },
    { japanese: "sono hon o katte kudasai", meaning: "şu kitabı satın alın lütfen", source: "minna", unit: "14", type: "sentence", pattern: "Vte kudasai", id: "70" },
    { japanese: "ame ga futte imasu", meaning: "yağmur yağıyor", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "71" },
    { japanese: "tegami o kaite imasu", meaning: "mektup yazıyor", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "72" },
    { japanese: "akachan ga nete imasu", meaning: "bebek uyuyor", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "73" },
    { japanese: "yamadasan wa denwa o kakete imasu", meaning: "yamadasan telefon açıyor", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "74" },
    { japanese: "ame ga futte imasu ka", meaning: "yağmur yağıyor mu?", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "75" },
    { japanese: "nani o kaite imasu ka", meaning: "ne yazıyorsun?", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "76" },
    { japanese: "anata wa kiite imasu ka", meaning: "sen dinliyor musun?", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "77" },
    { japanese: "anata wa ima nani o shite imasu ka", meaning: "sen şimdi ne yapıyorsun?", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "78" },
    { japanese: "ame ga futte imasen", meaning: "yağmur yağmıyor", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "79" },
    { japanese: "watashi wa kiite imashita", meaning: "dinliyordum", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "80" },
    { japanese: "watashi wa kinou nani mo shite imasen deshita", meaning: "dün hiçbirşey yapmıyordum", source: "minna", unit: "14", type: "sentence", pattern: "Vte imasu", id: "81" },
    { japanese: "nimotsu o mochimashou ka?", meaning: "valizinizi taşıyayım mı?", source: "minna", unit: "14", type: "sentence", pattern: "Vmashou ka", id: "82" },
    { japanese: "Atsukunai desu ka? Mado o akemashou ka? soo desu ne. sukoshi akete kudasai.", meaning: "sıcak değil mi? (sıcak olmadı mı?) Pencereyi açalım mı? Evet, öyle, biraz açın lütfen.", source: "minna", unit: "14", type: "sentence", pattern: "Vmashou ka", id: "83" },
    { japanese: "shigoto o tetsudaimashou ka? İie, kekkou desu.", meaning: "işe yardım edeyim mi? Hayır, gerek yok / böyle iyi", source: "minna", unit: "14", type: "sentence", pattern: "Vmashou ka", id: "84" },
    { japanese: "nihon no tabemono wa oishii desu ga, totemo takai desu", meaning: "japon yemekleri lezzetli ama çok pahalı", source: "minna", unit: "14", type: "sentence", pattern: "S ga, S", id: "85" },
    { japanese: "shitsurei desu ga, onamae wa?", meaning: "rahatsız ediyorum ama isminiz?", source: "minna", unit: "14", type: "sentence", pattern: "S ga, S", id: "86" },
    { japanese: "sumimasen ga, shio o totte kudasai?", meaning: "afedersiniz, tuzu alabilir miyim lütfen?", source: "minna", unit: "14", type: "sentence", pattern: "S ga, S", id: "87" },
    { japanese: "yuki ga futte imasu", meaning: "kar yağıyor", source: "minna", unit: "14", type: "sentence", pattern: "N ga V", id: "88" },
    { japanese: "kaze ga fuite imasu", meaning: "rüzgar esiyor", source: "minna", unit: "14", type: "sentence", pattern: "N ga V", id: "89" },
    { japanese: "watashi no pasokon o tsukatte mo ii desu", meaning: "bnim bilgisayarımı kullansan olur", source: "minna", unit: "15", type: "sentence", pattern: "Vte mo ii desu", id: "90" },
    { japanese: "asoko de suwatte mo ii desu", meaning: "orada otursan olur", source: "minna", unit: "15", type: "sentence", pattern: "Vte mo ii desu", id: "91" },
    { japanese: "sono heya no naka ni nimotsu o oite mo ii desu", meaning: "şu odanın içine valizini koysan olur", source: "minna", unit: "15", type: "sentence", pattern: "Vte mo ii desu", id: "92" },
    { japanese: "haitte mo ii desu", meaning: "girsen olur", source: "minna", unit: "15", type: "sentence", pattern: "Vte mo ii desu", id: "93" },
    { japanese: "tabako o sutte mo ii desu ka? Ee, ii desu, douzo / sumimasen, chotto…", meaning: "sigara içsem olur mu? Evet, olur buyur / afedersin, olmaz", source: "minna", unit: "15", type: "sentence", pattern: "Vte mo ii desu", id: "94" },
    { japanese: "kono shashin o moratte mo ii desu ka", meaning: "bu resmi alsam olur mu?", source: "minna", unit: "15", type: "sentence", pattern: "Vte mo ii desu", id: "95" },
    { japanese: "pen o karite mo ii desu ka", meaning: "kalem ödünç alsam olur mu?", source: "minna", unit: "15", type: "sentence", pattern: "Vte mo ii desu", id: "96" },
    { japanese: "koko de tabako o sutte wa ikemasen", meaning: "burada sigara içmek olmaz", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "97" },
    { japanese: "bijutsukan no naka de shashin o totte wa ikemasen", meaning: "müzenin içinde foto çekmek olur mu? Hayır, olmaz / evet olur", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "98" },
    { japanese: "koko de kuruma o tomete mo ii desu ka? iie, ikemasen / iie, dame desu", meaning: "burada araba parketmek olur mu? Hayır olmaz / hayır, yasak", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "99" },
    { japanese: "koko ni kuruma o tomete wa ikemasen", meaning: "buraya araba bırakmak olmaz", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "100" },
    { japanese: "kodomo wa osake o nonde wa ikemasen", meaning: "çocukların içki içmesi olmaz", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "101" },
    { japanese: "nihon de kuruma wa migi hashitte wa ikemasen", meaning: "japonyada arabayı sağdan sürmek olmaz", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "102" },
    { japanese: "sakkaa de te o tsukatte wa ikemasen", meaning: "futbolda el kullanmak olmaz", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "103" },
    { japanese: "koko de shashin o totte wa ikemasen", meaning: "burada foto çekmek olmaz", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "104" },
    { japanese: "koko de tabako o sutte mo ii desu ka / koko de tabako o sutte wa ikemasen", meaning: "burada sigara içmek olur mu? / burada sigara içmek olmaz", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "105" },
    { japanese: "kono michi o tootte wa ikemasen", meaning: "bu yoldan geçmek olmaz", source: "minna", unit: "15", type: "sentence", pattern: "Vte wa ikemasen", id: "107" },
    { japanese: "kare wa kekkon shite imasu", meaning: "o evlidir (evli durumda)", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "108" },
    { japanese: "kazoku wa nagoya ni sunde imasu", meaning: "ailem nagoya'da yaşamakta", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "109" },
    { japanese: "ninen nihongo o benkyou shite imasu", meaning: "iki yıldır japonca çalışmaktayım", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "110" },
    { japanese: "iphone10 o motte imasu", meaning: "iphone 10um var", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "111" },
    { japanese: "anata wa kekkon shite imasu ka? Hai, kekkon shite imasu / iie, dokushin desu", meaning: "sen evli misin? Evet, evliyim / hayır bekarım", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "112" },
    { japanese: "doko ni sunde imasu ka? Saitama ken ni sunde imasu", meaning: "nerede yaşamaktasın? Saitama semtinde yaşıyorum", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "113" },
    { japanese: "mainichi sutaabakkusu no koohii o katte imasu", meaning: "hergün starbucks kahvesi satın alıyorum", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "114" },
    { japanese: "maiasa hashitte imasu", meaning: "her sabah koşuyorum", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "115" },
    { japanese: "oosaka no nippon bashi de yasui denki seihin o utte imasu", meaning: "osaka nippon bashi'de ucuz elektronik ürünleri satın alıyorum", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "116" },
    { japanese: "tesla wa denki jidousha o tsukutte imasu.", meaning: "tesla elektrikli arama üretiyor", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "117" },
    { japanese: "nani o shite imasu ka", meaning: "ne yapıyorsun? / ne iş yapıyorsun?", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "118" },
    { japanese: "o shigoto wa nan desu ka", meaning: "işin nedir?", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "119" },
    { japanese: "guuguru de hataraite imasu", meaning: "google'da çalışıyorum", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "120" },
    { japanese: "watashi wa toudai de benkyou shite imasu", meaning: "tokyo üniversitesinde okuyorum", source: "minna", unit: "15", type: "sentence", pattern: "Vte imasu", id: "121" },
    { japanese: "enjiniabu no hashimotosan o shitte imasu ka? Hai, shitte imasu / iie, shirimasen", meaning: "mühendislik bölümünden hashimotosanı tanıyo musun? Evet tanıyorum / hayır tanımıyorum.", source: "minna", unit: "15", type: "sentence", pattern: "shitte imasu || shirimasen || wakarimasen", id: "122" },
    { japanese: "watashi no juusho o shitte imasu ka? Hai, shitte imasu / iie, shirimasen.", meaning: "benim adresimi biliyo musun? Evet biliyorum / hayır, bilmiyorum", source: "minna", unit: "15", type: "sentence", pattern: "shitte imasu || shirimasen || wakarimasen", id: "123" },
    { japanese: "shuumatsu wa nani o shimasu ka? Kaimono ni ikimasu / eeto, mada wakarimasen. (shirimasen would be rude here)", meaning: "haftasonu ne yapıyorsun? Alışverişe gidiyorum / hmm, hala bilmiyorum", source: "minna", unit: "15", type: "sentence", pattern: "shitte imasu || shirimasen || wakarimasen", id: "124" },
    { japanese: "eigo ga wakarimasu ka? Hai, wakarimasu / iie, wakarimasen.", meaning: "ingilizce bilio musun? Evet biliyorum / hayır bilmiyorum", source: "minna", unit: "15", type: "sentence", pattern: "shitte imasu || shirimasen || wakarimasen", id: "125" },
    { japanese: "asa (wa) shawa o abite, asagohan o tabete, shigoto o shimasu", meaning: "sabah duş alıp, kahvaltı yiyip, iş yaparım", source: "minna", unit: "16", type: "sentence", pattern: "Vte Vte V", id: "126" },
    { japanese: "shibuya de tomodachi ni atte, eiga o mite, yuushoku o tabemashita", meaning: "shibuyada arkadaşla buluşup, film izleyip, akşam yemeği yedik", source: "minna", unit: "16", type: "sentence", pattern: "Vte Vte V", id: "127" },
    { japanese: "yokohama eki kara, jr densha ni notte, shimbashi de orite, sorekara chikatetsu ni norikaete, ginza eki de orite kudasai", meaning: "yokohama durağından jr trenine binip, shimbaşi'de inip, ondan sonra metroya geçip, ginza durağında inin lütfen", source: "minna", unit: "16", type: "sentence", pattern: "Vte Vte V", id: "128" },
    { japanese: "otousan wa yasashi kute atama ga ii hito desu", meaning: "babam kibar ve zeki bir insandır", source: "minna", unit: "16", type: "sentence", pattern: "Adj-i => Adj kute || Adj-na => Adj de || N => N de", id: "129" },
    { japanese: "hokkaido wa tenki ga yokute, suzushikatta desu", meaning: "hokkaidoda hava güzel ve serindir", source: "minna", unit: "16", type: "sentence", pattern: "Adj-i => Adj kute || Adj-na => Adj de || N => N de", id: "130" },
    { japanese: "tabemono wa oishikute, yasukute, sugoku osusume desu", meaning: "yemek lezzetli ucuz ve tavsiye edilebilir", source: "minna", unit: "16", type: "sentence", pattern: "Adj-i => Adj kute || Adj-na => Adj de || N => N de", id: "131" },
    { japanese: "kyooto wa kirei de, omoshiroi mono ga takusan arimasu", meaning: "kyoto güzel ve ilginç şeyler çok vardır", source: "minna", unit: "16", type: "sentence", pattern: "Adj-i => Adj kute || Adj-na => Adj de || N => N de", id: "132" },
    { japanese: "guensan wa betonamu jin de, ryuugakusei desu", meaning: "nguyen vietnamlı ve yabancı öğrencidir", source: "minna", unit: "16", type: "sentence", pattern: "Adj-i => Adj kute || Adj-na => Adj de || N => N de", id: "133" },
    { japanese: "chichi wa pairotto de, haha wa kangoshi desu", meaning: "babam pilot annem ise hemşiredir", source: "minna", unit: "16", type: "sentence", pattern: "Adj-i => Adj kute || Adj-na => Adj de || N => N de", id: "134" },
    { japanese: "shinkansen wa hayai desu ga, takai desu", meaning: "hızlı tren hızlı ama pahalıdır", source: "minna", unit: "16", type: "sentence", pattern: "Vte kara, V", id: "135" },
    { japanese: "kaado o irete kara, kono botan o oshite kudasai", meaning: "kartı soktukan sonra, bu düğmeye basınız", source: "minna", unit: "16", type: "sentence", pattern: "Vte kara, V", id: "136" },
    { japanese: "daigaku o dete kara, sekai o ryokou shimasu", meaning: "üniversiteden mezun olduktan sonra, dünya seyahati yapıcam", source: "minna", unit: "16", type: "sentence", pattern: "Vte kara, V", id: "137" },
    { japanese: "shigoto o owatte kara, biiru o nomimasen ka", meaning: "iş bittikten sonra bira içmeyelim mi", source: "minna", unit: "16", type: "sentence", pattern: "Vte kara, V", id: "138" },
    { japanese: "shigoto o yamete kara, nani o shimasu ka", meaning: "işten ayrıldıktan sonra (quit), ne yapacaksın", source: "minna", unit: "16", type: "sentence", pattern: "Vte kara, V", id: "139" },
    { japanese: "kyouto e itte (kara), nani o shimashita ka", meaning: "kyotoya gidip ne yaptın", source: "minna", unit: "16", type: "sentence", pattern: "Vte kara, V", id: "140" },
    { japanese: "kaigi ga owatte kara, dokoka e ikimasu ka", meaning: "toplantı bittikten sonra, biryere gidiyor musun?", source: "minna", unit: "16", type: "sentence", pattern: "Vte kara, V", id: "141" },
    { japanese: "annasan wa kami ga kurokute, me ga ookii desu", meaning: "anna'nın saçı siyah, gözleri büyüktür", source: "minna", unit: "16", type: "sentence", pattern: "N wa N ga Adj", id: "142" },
    { japanese: "sono senshu wa se ga hikui desu ga, ashi ga hayai desu", meaning: "bu oyuncudun boyu kısa ama ayakları hızlıdır", source: "minna", unit: "16", type: "sentence", pattern: "N wa N ga Adj", id: "143" },
    { japanese: "furansu (de) wa tabemono ga oishikute, wain ga sekaijuu de yuumei desu", meaning: "fransız yemekleri lezzetli, şarabı da dünyaca ünlüdür", source: "minna", unit: "16", type: "sentence", pattern: "N wa N ga Adj", id: "144" },
    { japanese: "watashi wa atama / ha / i / te / ashi / koshi / oshiri ga itai desu.", meaning: "", source: "minna", unit: "16", type: "sentence", pattern: "N wa N ga Adj", id: "152" },
    { japanese: "kanojo wa nihongo / eigo / piano / tenisu / ryoori / kuruma no unten / dansu ga joozu desu.", meaning: "", source: "minna", unit: "16", type: "sentence", pattern: "N wa N ga Adj", id: "153" },
    { japanese: "hana wa chuurippu to ojisai ga suki desu.", meaning: "", source: "minna", unit: "16", type: "sentence", pattern: "N wa N ga Adj", id: "154" },
    { japanese: "nomimono wa nihoncha ga suki desu", meaning: "", source: "minna", unit: "16", type: "sentence", pattern: "N wa N ga Adj", id: "155" },
    { japanese: "gakkou made douyatte ikimasu ka? /  Eki kara ichiban no basu ni notte, jinja no mae de orimasu. soko kara gakkou made gofun gurai arukimasu. ", meaning: "okula kadar nasıl gidersin? Duraktan ilk önce otobüse binerim, tapınağın önünde inerim. Oradan okula 5 dakika yürürüm.", source: "minna", unit: "16", type: "sentence", pattern: "douyatte V ka", id: "156" },
    { japanese: "kono jidouhanbaiki wa douyatte tsukaimasu ka / mazu okane o irete, suki na dorinku no botan o oshite kudasai", meaning: "bu vending machine nasıl kullanılır?", source: "minna", unit: "16", type: "sentence", pattern: "douyatte V ka", id: "157" },
    { japanese: "oniisan wa dono hito desu ka? Ano ichiban se ga takai hito desu", meaning: "ağbin hangi kişidir? O en uzun boylu olan kişidir", source: "minna", unit: "16", type: "sentence", pattern: "kono || sono || ano || dono N", id: "158" },
    { japanese: "anata no kuruma wa dono kuruma desu ka? Sono kuruma wa watashi no kuruma desu", meaning: "senin araban hangi arabadır? Şu araba benim arabamdır", source: "minna", unit: "16", type: "sentence", pattern: "kono || sono || ano || dono N", id: "159" },
    { japanese: "anata no kuruma wa dore desu ka", meaning: "senin araban hangisidir?", source: "minna", unit: "16", type: "sentence", pattern: "kono || sono || ano || dono N", id: "160" },
    { japanese: "chiketto o nakusanaide kudasai", meaning: "biletleri kaybetme lütfen", source: "minna", unit: "17", type: "sentence", pattern: "Vnai de", id: "161" },
    { japanese: "naka de shashin o toranaide kudasai", meaning: "içerde foto çekme lütfen", source: "minna", unit: "17", type: "sentence", pattern: "Vnai de", id: "162" },
    { japanese: "watashi wa daijoubu desu, shinpai shinaide kudasai", meaning: "ben iyiyim, endişelenme lütfen", source: "minna", unit: "17", type: "sentence", pattern: "Vnai de", id: "163" },
    { japanese: "anata no pasupooto o wasurenaide kudasai", meaning: "pasaportunu unutma lütfen", source: "minna", unit: "17", type: "sentence", pattern: "Vnai de", id: "164" },
    { japanese: "raishuu made ni kono hon o kaesanakereba narimasen", meaning: "gelecek haftaya kadar bu kitabı iade etmezsem olmaz", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kereba narimasen", id: "171" },
    { japanese: "yasai o tabenakereba narimasen", meaning: "sebze yemezsen olmaz", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kereba narimasen", id: "172" },
    { japanese: "otto to dekakemasu kara, hayaku kaeranakereba narimasen", meaning: "kocamla dışarı çıktığımızdan, eve erken dönmezsem olmaz", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kereba narimasen", id: "173" },
    { japanese: "tabete kara kusuri o nomanakereba narimasen", meaning: "yemekten itibaren (sonra) ilacını içmezsen olmaz", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kereba narimasen", id: "174" },
    { japanese: "raishuu made ni kono hon o kaesanakereba narimasen ka", meaning: "bu kitabı haftaya kadar iade etmezsem olmaz mı?", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kereba narimasen", id: "175" },
    { japanese: "yasai o tabenakereba narimasen ka", meaning: "sebze yemezsem olmaz mı?", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kereba narimasen", id: "176" },
    { japanese: "nanji ni kaeranakereba narimasen ka", meaning: "saat kaçta dönmem lazım?", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kereba narimasen", id: "177" },
    { japanese: "nankai kusuri o nomanakereba narimasen ka", meaning: "ilacı kaç kere almam lazım", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kereba narimasen", id: "178" },
    { japanese: "daijoubu, harawanakute mo ii desu", meaning: "tamam, ödemesen de olur", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kute mo ii desu", id: "179" },
    { japanese: "nani mo mottekonakute mo ii desu", meaning: "hiçbişey almasan(getirmesen) da olur", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kute mo ii desu", id: "180" },
    { japanese: "douzo oagari kudasai, kutsu o noganakute mo ii desu", meaning: "girin lütfen, ayakkabıları çıkarmasanız da olur", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kute mo ii desu", id: "181" },
    { japanese: "ashita youji ga arimasu kara, watashi wa ikanakute mo ii desu ka", meaning: "yarın yapacak işler olduğundan, gelmesem olur mu", source: "minna", unit: "17", type: "sentence", pattern: "Vnai => Vna kute mo ii desu", id: "182" },
    { japanese: "keeki wa tabenaide kudasai", meaning: "keki (söz konusuysa) yemeyin lütfen", source: "minna", unit: "17", type: "sentence", pattern: "N o => N wa", id: "183" },
    { japanese: "repooto wa kinyobi made ni dashite kudasai", meaning: "rapor (söz konusuysa) cumaya kadar teslim et lütfen", source: "minna", unit: "17", type: "sentence", pattern: "N o => N wa", id: "184" },
    { japanese: "getsuyoubi made ni kite kudasai", meaning: "pazartesiye kadar gel lütfen", source: "minna", unit: "17", type: "sentence", pattern: "made ni", id: "185" },
    { japanese: "paatii wa juuji made ni owarimasu", meaning: "parti saat 10a kadar bitecek", source: "minna", unit: "17", type: "sentence", pattern: "made ni", id: "186" },
    { japanese: "ashita made ni repooto o dasana kereba narimasen kara, zangyou shimasu", meaning: "yarına kadar bu raporu teslim etmezsem olmayacağından, fazla mesai yapacağım", source: "minna", unit: "17", type: "sentence", pattern: "made ni", id: "187" },
    { japanese: "lilisan wa utau koto ga dekimasu", meaning: "lili şarkı söyleyebilir", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu", id: "188" },
    { japanese: "adamsan wa oyogu koto ga dekimasu", meaning: "adam yüzme yapabilir", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu", id: "189" },
    { japanese: "natarisan wa kanji o yomu koto ga dekimasu", meaning: "natali kanji okuyabilir", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu", id: "190" },
    { japanese: "onrain de chiketto o yoyaku suru koto ga dekimashita", meaning: "online bilet reservasyonu yapabilirim", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu", id: "191" },
    { japanese: "watashi wa gorufu ga dekimasu", meaning: "golf oynayabilirim", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu", id: "192" },
    { japanese: "otto wa ryouri ga jouzu ni dekimasu", meaning: "kocam gerçekten iyi yemek yapabilir", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu", id: "193" },
    { japanese: "watashi wa piano ga dekimasu", meaning: "piano çalabilirim", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu", id: "194" },
    { japanese: "watashi wa porutogarugo ga dekimasu", meaning: "portkeizce konuşabilirim", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu", id: "195" },
    { japanese: "anata wa unten suru koto ga dekimasu ka", meaning: "araba kullanabilir misin", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu", id: "196" },
    { japanese: "unten ga dekimasu ka? Hai, unten ga dekimasu / iie, unten ga dekimasen", meaning: "araba kullanabilir misin", source: "minna", unit: "18", type: "sentence", pattern: "N ga dekimasu", id: "197" },
    { japanese: "kinou (wa) benkyou ga dekimashita ka? Hai, dekimashita / iie, dekimasen deshita", meaning: "dün ders çalışabildin mi? Evet çalışabildim / hayır çalışamadım", source: "minna", unit: "18", type: "sentence", pattern: "N ga dekimasu", id: "198" },
    { japanese: "watashi wa kuukou de en o doru ni kaeru koto ga dekimasu ka? Hai, dekimasu yo", meaning: "havalimanında yeni dolara çevirebilir miyim? Evet, yapabilirsin", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu ka", id: "199" },
    { japanese: "anata wa nan meetoru oyogu koto ga dekimasu ka? 50 meetoru gurai oyogu koto ga dekimasu", meaning: "sen kaç metre yüzebilirsin? Yaklaşık 50 metre yüzebilirim", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu ka", id: "200" },
    { japanese: "anata wa nanigo o hanasu koto ga dekimasu ka? Porutogaru ga dekimasu", meaning: "hangi dili konuşabilirsin? Portekizce konuşabilirim", source: "minna", unit: "18", type: "sentence", pattern: "Vd koto ga dekimasu ka", id: "201" },
    { japanese: "watashi no shumi wa  tsuri desu", meaning: "hobim balık tutmaktır", source: "minna", unit: "18", type: "sentence", pattern: "shumi wa Vd || N desu", id: "202" },
    { japanese: "watashi no shumi wa konpyuutaa geemu desu", meaning: "hobim bilgisayar oyunlarıdır", source: "minna", unit: "18", type: "sentence", pattern: "shumi wa Vd || N desu", id: "203" },
    { japanese: "watashi no shumi wa shashin o toru koto desu", meaning: "hobim resim çekmektir", source: "minna", unit: "18", type: "sentence", pattern: "shumi wa Vd || N desu", id: "204" },
    { japanese: "watashi no shumi wa akushon figyua o atsumeru koto desu", meaning: "hobim action figürleri biriktirmektir", source: "minna", unit: "18", type: "sentence", pattern: "shumi wa Vd || N desu", id: "205" },
    { japanese: "neru mae ni shawa o abimasu", meaning: "uyumadan önce duş alacağım", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "206" },
    { japanese: "taberu mae ni te o aratte kudasai", meaning: "yemekten önce elleri yıka lütfen", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "207" },
    { japanese: "gakkou e iku mae ni, inu no sanpo o shimasu", meaning: "okula gitmeden önce köpeği yürüteceğim (köpeğin yürüyüşünü yapacağım)", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "208" },
    { japanese: "neru mae ni nani o shimasu ka", meaning: "uyumadan önce ne yaparsın?", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "209" },
    { japanese: "ryokou no mae ni, hoteru no yoyaku o kakunin shimasu", meaning: "geziden önce otel rezervasyonunu onaylıyorum", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "210" },
    { japanese: "shokuji no mae ni, inori o shimasu", meaning: "yemekten önce dua ederim", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "211" },
    { japanese: "kaigi no mae ni, kono shiryou o kopii shite kudasai", meaning: "toplantıdan önce bu dokümanı kopyapa lütfen", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "212" },
    { japanese: "watashi wa juunen mae ni, amerika ni kimashita", meaning: "10 yıl önce amerikaya geldim", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "213" },
    { japanese: "rokka-getsu mae ni kaisha o yamemashita", meaning: "6 ay önce şirketten emekli oldum", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "214" },
    { japanese: "kusuri wa sanjuu pun mae ni nomimashita", meaning: "ilacı 30 dakika önce içtim", source: "minna", unit: "18", type: "sentence", pattern: "Vd || N || Period of time no mae ni, V", id: "215" },
    { japanese: "keeki wa nakanaka oishii desu", meaning: "kek oldukça/bayağı lezzetli", source: "minna", unit: "18", type: "sentence", pattern: "nakanaka", id: "216" },
    { japanese: "kareshi wa nakanaka hansamu desu ne", meaning: "erken arkadaşın bayağı/oldukça yakışıklı", source: "minna", unit: "18", type: "sentence", pattern: "nakanaka", id: "217" },
    { japanese: "tesuto wa nakanaka muzukashikatta desu", meaning: "test oldukça/bayağı zordu", source: "minna", unit: "18", type: "sentence", pattern: "nakanaka", id: "218" },
    { japanese: "nakanaka hito no namae o oboeru koto ga dekimasen", meaning: "insanların ismini hatırlamayı  pek beceremem", source: "minna", unit: "18", type: "sentence", pattern: "nakanaka", id: "219" },
    { japanese: "nihon de wa nakanaka furui pasokon o suteru koto ga dekimasen", meaning: "eski bilgisayarlardan kurtulmak biraz zordur (pek mümkün değildir)", source: "minna", unit: "18", type: "sentence", pattern: "nakanaka", id: "220" },
    { japanese: "nihon de wa ooganiku sutoaa ga nakanaka arimasen", meaning: "japonyada organik mağaza pek yoktur", source: "minna", unit: "18", type: "sentence", pattern: "nakanaka", id: "221" },
    { japanese: "watashi wa hawai de zehi kekkon shitai desu", meaning: "kesin hawaide evlenmeyi isterim", source: "minna", unit: "18", type: "sentence", pattern: "zehi", id: "222" },
    { japanese: "watashi no tanjoubi desu kara, zehi paati ni kite kudasai ne", meaning: "benim yaşgünüm olduğundan, kesin partime gelin.", source: "minna", unit: "18", type: "sentence", pattern: "zehi", id: "223" },
    { japanese: "keeki o zehi tabete kudasai, oishii desu yo", meaning: "kesin kekten yiyin, lezzetli ha", source: "minna", unit: "18", type: "sentence", pattern: "zehi", id: "224" },
    { japanese: "issho ni asobi ni ikimasen ka? Ee, zehi", meaning: "birlikte dışarı çıkalım mı (gezelim mi) ? Evet, kesin / mutlaka", source: "minna", unit: "18", type: "sentence", pattern: "zehi", id: "225" },
    { japanese: "fujisan ni nobotta koto ga arimasu", meaning: "fuji dağına (tepesine) tırmanmışlığım vardır", source: "minna", unit: "19", type: "sentence", pattern: "Vta koto ga arimasu", id: "226" },
    { japanese: "itaria ni itta koto ga arimasu", meaning: "italyaya gitmişliğim vardır", source: "minna", unit: "19", type: "sentence", pattern: "Vta koto ga arimasu", id: "227" },
    { japanese: "baniku o tabeta koto ga arimasen", meaning: "at eti yemişiğim yoktur", source: "minna", unit: "19", type: "sentence", pattern: "Vta koto ga arimasu", id: "228" },
    { japanese: "pachinko o shita koto ga arimasen", meaning: "pachinko çalmışlığım yoktur", source: "minna", unit: "19", type: "sentence", pattern: "Vta koto ga arimasu", id: "229" },
    { japanese: "shinkansen o notta koto ga arimasu ka", meaning: "hızlı trene binmişliğin var mıdır", source: "minna", unit: "19", type: "sentence", pattern: "Vta koto ga arimasu", id: "230" },
    { japanese: "sushi o tabeta koto ga arimasu ka? hai, ikkai dake arimasu / iie, ichidomo arimasen", meaning: "sushi yemişlğin var mıdır? Evet, bir kere / hayır hiç yoktur", source: "minna", unit: "19", type: "sentence", pattern: "Vta koto ga arimasu", id: "231" },
    { japanese: "shumatsu wa sentaku shita ri, souji shita ri, kaimono shita ri shimasu", meaning: "hafta sonu çamaşır yıkar, temizlik yapar, alışveriş yapar yaparım.", source: "minna", unit: "19", type: "sentence", pattern: "Vta ri Vta ri Vta ri shimasu", id: "232" },
    { japanese: "toukyou e itta ri, tomodachi to asonda ri, geemu o shita ri shimashita", meaning: "tokyoya gider, arkadaşlarla eğlenir, oyun oynar yaptım.", source: "minna", unit: "19", type: "sentence", pattern: "Vta ri Vta ri Vta ri shimasu", id: "233" },
    { japanese: "anata wa atarashii kaban o katta ri, hoteru no yoyaku o kakunishita ri, puran o tsukutta ri, shina kereba narimasen.", meaning: "yeni bir çanta satın alma, otel rezervasyonu yapma, gezi planı yapma, yapmazsan olmaz.", source: "minna", unit: "19", type: "sentence", pattern: "Vta ri Vta ri Vta ri shimasu", id: "234" },
    { japanese: "watashi no shumi wa hon o yonda ri, ongaku o kiita ri, geemu o shita ri suru koto desu", meaning: "hobilerim kitap okumak, müzik dinlemek, oyun oynamak yapmakdır", source: "minna", unit: "19", type: "sentence", pattern: "Vta ri Vta ri Vta ri shimasu", id: "235" },
    { japanese: "watashi wa tsuyoku naritai desu", meaning: "güçlü olmak istiyorum (güçlenmek)", source: "minna", unit: "19", type: "sentence", pattern: "Adj-i => Adj ku || Adj-na => Adj ni || N => N ni arimasu", id: "236" },
    { japanese: "anata wa nihongo ga jouzu ni narimashita", meaning: "japoncan iyileşmiş (gelişmiş)", source: "minna", unit: "19", type: "sentence", pattern: "Adj-i => Adj ku || Adj-na => Adj ni || N => N ni arimasu", id: "237" },
    { japanese: "kotoshi 30 sai ni narimasu", meaning: "bu yıl 30 yaşıma giriyorum", source: "minna", unit: "19", type: "sentence", pattern: "Adj-i => Adj ku || Adj-na => Adj ni || N => N ni arimasu", id: "238" },
    { japanese: "musuko wa pairotto ni narita gatte imasu", meaning: "oğlum pilot olmak istiyor", source: "minna", unit: "19", type: "sentence", pattern: "Adj-i => Adj ku || Adj-na => Adj ni || N => N ni arimasu", id: "239" },
    { japanese: "tabako o suu koto ga karada ni yokunai desu yo / sou desu ne", meaning: "sigara içmek sağlığa iyi değil. Katılıyorum (evet öyle ya)", source: "minna", unit: "19", type: "sentence", pattern: "sou desu ne", id: "240" },
    { japanese: "mou osoku narimasu kaeranai to / aa, sou desu ne.", meaning: "geç oldu dönmem lazım. Ya, öyle.", source: "minna", unit: "19", type: "sentence", pattern: "sou desu ne", id: "241" },
    { japanese: "aihon ten wa aihon eitto yori ii desu ne? sou desu ne (dochira mo tsukatta koto ga arimasen kara, wakarimasen)", meaning: "iphone 10 iphone 8'den daha iyi di mi? Öyle.", source: "minna", unit: "19", type: "sentence", pattern: "sou desu ne", id: "242" },
    { japanese: "10ji ni nemasu / 10ji ni neru", meaning: "saat 10da uyurum", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "243" },
    { japanese: "mainichi benkyou shimasen / mainichi benkyou shinai", meaning: "hergün ders çalışıyorum", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "244" },
    { japanese: "asagohan o tamemashita / asagohan o tabeta", meaning: "kahvaltıyı yedim", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "245" },
    { japanese: "asagohan o tabemasu ka? || asagohan o taberu ? / Hai tabemasu / un taberu / iie, tabemasen / iie, tabenai", meaning: "kahvaltı ediyor musun? Evet ediyorum / hayır etmiyorum", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "246" },
    { japanese: "kyou hatarakimasen deshita / kyou hatarakanakatta ", meaning: "dün çalışmadım", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "247" },
    { japanese: "issho ni biiru o nomimasen ka / issho ni biiru o nomanai  ", meaning: "birlikte bira içmeyelim mi", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "248" },
    { japanese: "ikimashou / ikou", meaning: "gidelim", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "249" },
    { japanese: "tabemashou / tabeyou", meaning: "yiyelim", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "250" },
    { japanese: "benkyou shimashou / benkyou shyou", meaning: "ders yapalım", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "251" },
    { japanese: "kirei desu / kirei da", meaning: "güzel", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "252" },
    { japanese: "ashita hima ja arimasen / ashita hima janai", meaning: "yarın boş değilim", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "253" },
    { japanese: "kare wa yuumei deshita / kare wa yuumei datta", meaning: "o ünlüydü", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "254" },
    { japanese: "suteki ja arimasen deshita / suteki ja nakatta", meaning: "güzel değildi", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "255" },
    { japanese: "ii desu / ii", meaning: "iyi", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "256" },
    { japanese: "yokunai desu / yokunai", meaning: "iyiydi", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "257" },
    { japanese: "osihikatta desu / oishikatta", meaning: "ilginçti", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "258" },
    { japanese: "omoshirokunakatta desu / omoshirokunakatta", meaning: "ilginç değildi", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "259" },
    { japanese: "dou desu ka / dou", meaning: "nasıl?", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "260" },
    { japanese: "dou deshita ka / dou datta", meaning: "nasıldı?", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "261" },
    { japanese: "kamera ga arimasu / kamera ga aru", meaning: "kamera var", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "262" },
    { japanese: "pasokon ga arimasen / pasokon ga nai", meaning: "bilgisayar yok", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "263" },
    { japanese: "kuruma ga arimashita / kuruma ga atta", meaning: "araba vardı", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "264" },
    { japanese: "wakarimashita / wakatta", meaning: "anladım", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "265" },
    { japanese: "inu ga oshii desu / inu ga oshii", meaning: "köpek istiyorum", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "266" },
    { japanese: "supein e ikitai desu / supein e ikitai", meaning: "ispanyaya gitmek istiyorum", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "267" },
    { japanese: "koko ni kite kudasai / kochi ni kite", meaning: "buraya gel", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "268" },
    { japanese: "wasurenaide kudasai / wasurenaide ne", meaning: "unutma", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "269" },
    { japanese: "kore o tsukatte mo ii desu ka / kore o tsukatte ii", meaning: "bunu kullanabilir miyim", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "270" },
    { japanese: "koko de tabako o sutte wa ikemasen / koko de tabako o sutte wa ikenai", meaning: "burada sigara içmek olmaz", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "271" },
    { japanese: "ikanakereba narimasen / ikanakereba naranai", meaning: "gitmezsek olmaz", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "272" },
    { japanese: "isogonai to ikemasen / isogonai to ikenai", meaning: "acele etmezsek olmaz", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "273" },
    { japanese: "harawanakute mo ii desu / harawanakute mo ii", meaning: "ödemezsen de olur", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "274" },
    { japanese: "unten ga dekimasu ka / unten ga dekiru? Hai dekimasu / un, dekiru", meaning: "araba kullanabilir misin? Evet, kullanabilirim", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "275" },
    { japanese: "unten ga dekimasu ka / unten ga dekiru? İie dekimasen / uun, dekinai", meaning: "araba kullanabilir misin? Hayır kullanamam", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "276" },
    { japanese: "fujisan ni nobotta koto ga arimasu ka / fujisan ni nobotta koto ga aru", meaning: "fujisana çıkmışlığın (tepesine) var mı?", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "277" },
    { japanese: "hai nobotta koto ga arimasu / un, nobotta koto ga aru", meaning: "evet çokmışlığım var", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "278" },
    { japanese: "iie nobotta koto ga arimasen / uun nobotta koto ga nai", meaning: "hayır çıkmışlığım yok", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "279" },
    { japanese: "keeki o tabemasu ka / keeki o taberu", meaning: "kek yer misin?", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "280" },
    { japanese: "hai tabemasu / iie tabemasen", meaning: "yes i eat / no i dont eat", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "281" },
    { japanese: "un taberu / uun tabenai", meaning: "yes i eat / no i dont eat", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "282" },
    { japanese: "ie ni dare ka arimasu ka / iie ni dare ka aru?", meaning: "evde kimse var mı? ", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "283" },
    { japanese: "hai yuki ga imasu / iie dare mo imasen", meaning: "evet yuki var / hayır kimse yok", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "284" },
    { japanese: "un, yuki ga iru (yo) / uun, dare mo inai", meaning: "evet yuki var / hayır kimse yok", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "285" },
    { japanese: "doko ikimasu ka / doko iku?", meaning: "where r u going?", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "286" },
    { japanese: "tokyou e ikimasu / tokyou e iku", meaning: "tokyo'ya gidiyorum", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "287" },
    { japanese: "genki desu ka / genki ?", meaning: "sağlıklı mi?", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "288" },
    { japanese: "hai genki desu / un, genki", meaning: "evet sağlıklıyım", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "289" },
    { japanese: "iie, genki ja arimasen / uun, genki janai", meaning: "hayır, sağlıklı değilim", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "290" },
    { japanese: "sou desu ka / souka", meaning: "haa demek öyle", source: "minna", unit: "20", type: "sentence", pattern: "Polite / Plain", id: "291" },
    { japanese: "kare de tariru to omoimasu", meaning: "bu yeter diye düşünüyorum", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "292" },
    { japanese: "nihonjin wa biza ga iranai to omoimasu", meaning: "japon vizeye ihtiyaç yok diye düşünüyorum", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "293" },
    { japanese: "densha wa totemo benri da to omoimasu", meaning: "tren çok pratiktir diye düşünüyorum", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "294" },
    { japanese: "terebi o miru koto wa jikan no muda da to omoimasu", meaning: "tv izlemenin zaman kaybı olduğunu düşünüyorum", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "295" },
    { japanese: "soosharu media wa ii to omoimasu ka? Hai, ii to omoimasu / iie, yokunai to omoimasu", meaning: "sosyal medyanın iyi olduğunu düşünüo musun? Evet, iyi olduğunu düşünüyorum / hayır kötü olduğunu düşünüyorum ", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "296" },
    { japanese: "jasutisu riigu to abenjaazu to dochira ga katsu to omoimasu ka? Abenjaazu ga katsu to omoimasu", meaning: "justice league ve avengers arasından hangisi kazanır diye düşünüosun? Avnegers kazanır diye düşünüyorum", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "297" },
    { japanese: "firipinjin ni tsuite dou omoimasu ka", meaning: "filipinliler hakkında ne/nasıl düşünüosun", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "298" },
    { japanese: "fakusuki ga yakunitatanaku natta to omoimasu! Watashi mo sou omoimasu / watashi wa sou omoimasen", meaning: "faks makinesi gereksiz oldu diye düşünüyo musun? Evet, öyle düşünüyorum / hayır, öyle düşünmüyorum.", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "299" },
    { japanese: "nihonjin wa shokuji mae ni 'itadakimasu' to iimasu", meaning: "japonlar yemek yemeden önce 'itadakimasu' derler", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "300" },
    { japanese: "shingusan wa 'mata atodo denwa shimasu' to iimashita", meaning: "shingusan 'daha sonra tekrar ararım' diye söyledi.", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "301" },
    { japanese: "shingusan wa mata atodo denwa suru to iimashita", meaning: "shingusan daha sonra tekrar ararım diye söyledi.", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "302" },
    { japanese: "shokuji no owari ni nan to iimasu ka / gochisou samadeshita to iimasu", meaning: "yemek bittikten sonra ne diye söylersin", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "303" },
    { japanese: "you're welcome' wa nihongo de nan to iimasu ka? Dou itashimashite to iimasu", meaning: "you're welcome' japoncada nasıl söylenir? 'dou itashimashite' diye söylenir", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "304" },
    { japanese: "suuzii wa ashita no yotei ni tsuite nan to iimashita ka? Daijoubu da to iimashita", meaning: "suzy yarının planı üzerine ne diye söylüyor? Tamam diye söylüyor.", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "305" },
    { japanese: "watashi wa 'musty' to iimasu", meaning: "beni 'musty' diye çağırırlar", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "306" },
    { japanese: "kore wa nihongo de 'me' to iimasu", meaning: "bu japoncada 'me' diye söylenir", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "307" },
    { japanese: "kore wa nihongo de mimi / hana / kuchi / ha / hoho / kami to iimasu", meaning: "bu japoncada 'mimi / hana / kuchi / ha / hoho / kami' diye söylenir", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "308" },
    { japanese: "nihonjin wa kaerutoki 'sayoonara' to iimasu", meaning: "japonlar dönerken 'sayoonara' derler", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp to iimasu", id: "309" },
    { japanese: "asatte yuki ga furu deshou?", meaning: "yarın kar yağar di mi? (yağar mı)", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp deshou", id: "310" },
    { japanese: "jettokoosutaa wa tanoshii deshou?", meaning: "kaykay eğlenceli di mi?", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp deshou", id: "311" },
    { japanese: "watashi no kanojo wa kirei deshou?", meaning: "benim kız arkadaşım güzel di mi?", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp deshou", id: "312" },
    { japanese: "jonsonsan wa daigakusei deshou?", meaning: "jonson üniversite öğrencisi di mi?", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp deshou", id: "313" },
    { japanese: "kyou wa yuki ga furu deshou", meaning: "bugün kar yağabilir", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp deshou", id: "314" },
    { japanese: "kare wa kakkoii. kanojo ga mou iru deshou", meaning: "o çok cool. Kız arkadaşı olmalı (vardır)", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp deshou", id: "315" },
    { japanese: "juunen ni nihon ni sunde iru kara, anata wa hontouni nihongo ga jouzu deshou", meaning: "10 yıldır japonyada yaşadığından, senin gerçekten japoncan iyi olmalı.", source: "minna", unit: "21", type: "sentence", pattern: "Splain || Vp deshou", id: "316" },
    { japanese: "maitoshi sapporo de yuki matsuri ga arimasu", meaning: "her sene sapporo'da kar festivali vardır", source: "minna", unit: "21", type: "sentence", pattern: "Place de N ga arimasu", id: "317" },
    { japanese: "teiraa suuifuto wa manira de konsaato ga arimashita", meaning: "taylor swift manila'da konseri vardı", source: "minna", unit: "21", type: "sentence", pattern: "Place de N ga arimasu", id: "318" },
    { japanese: "nisen nijuu nen ni toukyou de tsugi no orinpikku ga arimasu", meaning: "2020 yılında tokya'da gelecek olimpiyatlar var", source: "minna", unit: "21", type: "sentence", pattern: "Place de N ga arimasu", id: "319" },
    { japanese: "nijusan nen mae ni koube de ookii jishin ga arimashita", meaning: "23 yıl önce kobe'de deprem olmuştu", source: "minna", unit: "21", type: "sentence", pattern: "Place de N ga arimasu", id: "320" },
    { japanese: "paatii de kare ni aimashita ka", meaning: "partide onunla karşılaştım/tanıştım", source: "minna", unit: "21", type: "sentence", pattern: "Occasion de", id: "321" },
    { japanese: "kaigi de iken o iimasu", meaning: "toplantıda fikrimi söyleyeceğim", source: "minna", unit: "21", type: "sentence", pattern: "Occasion de", id: "322" },
    { japanese: "omatsuri de kaimashita", meaning: "festivalde satın aldım", source: "minna", unit: "21", type: "sentence", pattern: "Occasion de", id: "323" },
    { japanese: "eiga demo mimasen ka", meaning: "film falan izlemeyelim mi", source: "minna", unit: "21", type: "sentence", pattern: "… demo", id: "324" },
    { japanese: "koohii demo nomimasen ka", meaning: "kahve falan içmeyelim mi", source: "minna", unit: "21", type: "sentence", pattern: "… demo", id: "325" },
    { japanese: "ranchi demo ikanai", meaning: "öğle yemeğine falan gitmeyelim mi", source: "minna", unit: "21", type: "sentence", pattern: "… demo", id: "326" },
    { japanese: "mou ikanai to", meaning: "artık gitmem lazım", source: "minna", unit: "21", type: "sentence", pattern: "Vnai to", id: "327" },
    { japanese: "sorosoro jikan da, shito o owaranai to", meaning: "neredeyse zaman geldi, işi bitirmem lazım", source: "minna", unit: "21", type: "sentence", pattern: "Vnai to", id: "328" },
    { japanese: "saigo no chansu da, ganbaranai to", meaning: "en son şansım, elimden geleni yapmam lazım", source: "minna", unit: "21", type: "sentence", pattern: "Vnai to", id: "329" },
    { japanese: "yuki no kaban", meaning: "yukinin çantası", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "330" },
    { japanese: "suteki na kaban", meaning: "güzel çanta", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "331" },
    { japanese: "furui kaban", meaning: "eski çanta", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "332" },
    { japanese: "niku o taberu hito", meaning: "et yiyen insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "333" },
    { japanese: "niku o tabenai hito", meaning: "et yemeyen insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "334" },
    { japanese: "niku o tabeta hito", meaning: "et yemiş olan insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "335" },
    { japanese: "niku o tabenakatta hito", meaning: "et yememiş olan insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "336" },
    { japanese: "akai kooto o kite iru hito", meaning: "kırmızı mont giymekte olan insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "337" },
    { japanese: "boushi o kabutte iru hito", meaning: "şapka takmakta olan insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "338" },
    { japanese: "hon o yonde iru hito", meaning: "kitap okumakta olan insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "339" },
    { japanese: "kimurasan no tonari ni iru hito", meaning: "kimurusan'ın yanında (duran) insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "340" },
    { japanese: "akarukute ii hito", meaning: "neşeli ve iyi insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "341" },
    { japanese: "kirei de yuumei na hito", meaning: "güzel ve ünlü insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "342" },
    { japanese: "kyuujuu sai no hito", meaning: "90 yaşındaki insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "343" },
    { japanese: "eigo no sensei", meaning: "ingilizce öğretmeni", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "344" },
    { japanese: "watashi wa toshokan kara hon o karimashita", meaning: "ben kütüphaneden kitap ödünç aldım", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "345" },
    { japanese: "watashi ga toshokan kara karita hon", meaning: "kütüphaneden ödünç aldığım kitap", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "346" },
    { japanese: "chichi wa resutoran de hataraite imasu", meaning: "babam restoranda çalışmaktadır", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "347" },
    { japanese: "chichi ga harataite iru resutoran", meaning: "bababım çalışmakta olduğu restoran", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "348" },
    { japanese: "watashi wa dareka ni agemasu", meaning: "ben birisine veriyorum", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "349" },
    { japanese: "watashi ga ageru hito", meaning: "benim verdiğim insan", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "350" },
    { japanese: "akai kooto o kite iru hito wa jonson san desu", meaning: "kırmızı mont giymekte olan insan jonsondur", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "351" },
    { japanese: "jonsonsan wa akai kooto o kite iru hito desu", meaning: "jonson kırmızı mont giymekte olan insandır", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "352" },
    { japanese: "watashi wa watashi ga toshokan kara karita hon o nakushimashita", meaning: "ben kütüphaneden ödünç aldığım kitabı kaybettim", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "353" },
    { japanese: "anata wa nisen nen ni umareta hito o shitte imasu ka", meaning: "sen 2000 yıldında doğmuş birini tanıyo musun", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "354" },
    { japanese: "kimurasan no tonari ni iru hito wa dare desu ka", meaning: "kimurusan'ın yanında (duran) insan kimdir?", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier N", id: "355" },
    { japanese: "anata ga sunde ita apaato wa doko desu ka", meaning: "senin yaşamış olduğun apartman nerededir?", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier ga", id: "356" },
    { japanese: "suki na kuruma ga dore desu ka", meaning: "beğendiğin hoşuna giden araba hangisidir?", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier ga", id: "357" },
    { japanese: "kinou mita eiga wa dou deshita ka", meaning: "dün izlediğin film nasıldı", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier ga", id: "358" },
    { japanese: "watashi wa toshokan kara hon o karimashita", meaning: "kütüphaneden kitap ödünç aldım", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier ga", id: "359" },
    { japanese: "watashi ga toshokan kara karita hon o nakushimashita", meaning: "kütüphaneden ödünç aldığım kitabı kaybettim", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier ga", id: "360" },
    { japanese: "chichi wa resutoran de hataraite imasu", meaning: "babam restoranda çalışmaktadır", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier ga", id: "361" },
    { japanese: "chichi ga harataite iru resutoran e ikimasu", meaning: "babamın çalışmakta olduğu restorana gidiyorum", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier ga", id: "362" },
    { japanese: "anata wa byouin de umaremashita", meaning: "sen hastanede doğdun", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier ga", id: "363" },
    { japanese: "anata ga umareta byouin o shitte imasu ka", meaning: "sen doğduğun hastaneyi biliyor musun?", source: "minna", unit: "22", type: "sentence", pattern: "Smodifier ga", id: "364" },
    { japanese: "supiichi o renshuu suru jikan ga arimasen", meaning: "konuşma pratiği zamanı yoktur", source: "minna", unit: "22", type: "sentence", pattern: "Vd jikan || yakusoku || yotei", id: "365" },
    { japanese: "atode tsuma to shokuji suru yakusoku o omoidashimashita", meaning: "sonra karımla yemek yeme sözümü hatırladım", source: "minna", unit: "22", type: "sentence", pattern: "Vd jikan || yakusoku || yotei", id: "366" },
    { japanese: "haisha ni iku yotei o wasurenaide", meaning: "dişçiye gitme planını unutma", source: "minna", unit: "22", type: "sentence", pattern: "Vd jikan || yakusoku || yotei", id: "367" },
    { japanese: "shiyakusho ni iku toki, zairyuu kaado o mottekite", meaning: "valiliğe gittiğin zaman, oturma izni kartını alıp git", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "368" },
    { japanese: "benkyou suru toki, ongaku o kikimasu", meaning: "çalıştığım zaman, müzik dinlerim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "369" },
    { japanese: "wakaranai koto ga aru toki, watashi ni kiite kudasai", meaning: "anlamadığın birşey olduğu zaman, bana sor lütfen", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "370" },
    { japanese: "uchi de asagohan o taberu jikan ga nai toki, onigiri o densha de tabemasu", meaning: "evde kahvaltı yeme zamanı olmadığı zaman, onigiriyi trende yerim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "371" },
    { japanese: "samui toki, amari dekakemasen", meaning: "soğuk olduğu zaman, pek dışarı çıkmam", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "372" },
    { japanese: "hima na toki, nomi ni ikimasu", meaning: "boş olduğum zaman, içmeye giderim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "373" },
    { japanese: "kodomo no toki, yoku anime o mimashita", meaning: "çocuk zamanı, sık sık anime izlerdim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "374" },
    { japanese: "yasumi no toki, nani o shimasu ka", meaning: "tatil olduğu zaman, ne yaparsın?", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "375" },
    { japanese: "unten shite iru toki, keitai denwa o tsukaimasen", meaning: "araba kullanıyor olduğum zaman, cep telefonu kullanmam", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "376" },
    { japanese: "nete iru toki, jishin ga arimashita", meaning: "uyuyorken (uğuduğum esnada), deprem oldu", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "377" },
    { japanese: "uchi e kaeru toki, denwa shimashita", meaning: "eve dönerken (varmadan önce), telefon ediyorum", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "378" },
    { japanese: "uchi e kaetta toki, denwa shimashita", meaning: "eve döndüğümde (dönünce), telefon ettim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "379" },
    { japanese: "kuni e kaetta toki, fuku o kaimasu", meaning: "ülkeme döndüğümde, giysi satın alıcam", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "380" },
    { japanese: "taberu toki, 'itadakimasu' to iimasu", meaning: "yemek yerken (öncesinde), 'itadakimasu' deriz", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "381" },
    { japanese: "tabeta toki, 'gochisousama deshita' to iimasu", meaning: "yemek yediğimizde (sonrasında)'afiyet olsun' deriz.", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "382" },
    { japanese: "dekakeru toki, ittekimasu to iimasu", meaning: "evi terkederken 'ittekimasu' deriz", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "383" },
    { japanese: "uchi e kaetta toki, tadaima to iimasu", meaning: "eve geri geldiğimiz zaman 'tadaima' deriz", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "384" },
    { japanese: "watashi wa tegami o kaku toki pen o tsukaimasu.", meaning: "mektup yazdığım zaman kalem kullanırım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "385" },
    { japanese: "watashi wa neru toki pajama o kimasu.", meaning: "uyuduğum zaman pijama giyerim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "386" },
    { japanese: "gohan o taberu toki ohashi de tabemasu.", meaning: "yemek yediğim zaman çubukla yerim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "387" },
    { japanese: "densha ni noru toki, kippu o kaimasu.", meaning: "trene bindiğim zaman bilet satın alırım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "388" },
    { japanese: "michi ga wakaranai toki, hito ni kikimasu.", meaning: "yolu bilmediğim zaman birine sorarım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "389" },
    { japanese: "eiga ni ikanai toki, denwa shimasu.", meaning: "filme gitmediğim zaman telefon açarım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "390" },
    { japanese: "doa o suru toki, shizuka ni shimete kudasai", meaning: "kapıyı kapadığın zaman sessizce kapat lütfen", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "391" },
    { japanese: "michi o wataru toki, ki o tsukete kudasai", meaning: "yolu geçerken dikkat et lütfen", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "392" },
    { japanese: "ryokoo o suru toki, kamara o motte ikimasu", meaning: "tatite çıkarken kameramı alırım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "393" },
    { japanese: "watashi wa jikan ga aru toki, nihongo o benkyou shimasu", meaning: "zamanım olunca japonca çalışırım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "394" },
    { japanese: "supootsu o suru toki, supootsuwea fuku o kimasu", meaning: "spor yaparken spor kıyafetler giyerim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "395" },
    { japanese: "nerarenai toki, muzukashii hon o yomimasu", meaning: "uyuyamadığım zaman zor kitap okurum", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "396" },
    { japanese: "okane ga nai toki, hatarakimasu", meaning: "para olmadığında çalışırız", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "397" },
    { japanese: "kodomo ga inai toki, shizuka desu", meaning: "çocuk olmadığında sessiz", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "398" },
    { japanese: "ha ga itai toki, haishasan ni ikimasu", meaning: "dişim ağırınca dişçiye giderim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "400" },
    { japanese: "tenki ga ii toki, oyogi ni ikimasu", meaning: "hava güzel olursa, yüzmeye gideriz", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "401" },
    { japanese: "sabishii toki, tomodachi ni denwa shimasu", meaning: "yalnızsam arkadaşıma telefon açarım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "402" },
    { japanese: "watashi wa gakusei no toki, yoku tenisu o shimashita", meaning: "öğrenciyken, sık sık tenis oynardım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "405" },
    { japanese: "watashi wa kodomo no toki, toukyou ni sunde imasu", meaning: "çocukken, tokyoda yaşardık", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "406" },
    { japanese: "kyooto ni itta toki, takusan otera o mimashita", meaning: "kyotoya gittiğimde birçok tapınak gördük", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "407" },
    { japanese: "nihon ni itta toki, omiyage o kaimashita", meaning: "japonyaya gittiğimde hatıra satın aldım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "409" },
    { japanese: "doa o aketa toki, hito ni butsukarimashita", meaning: "kapıyı açtığımda biriyle burun buruna geldim", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "410" },
    { japanese: "shinkansen ni notta toki, tomodachi ni aimashita", meaning: "hızlı trene bindiğimde arkadaşımla karşılaştım", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "411" },
    { japanese: "toruko ni kita toki, aki deshita", meaning: "türkiyeye geldiğimde sonbahardı", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "412" },
    { japanese: "eiga ga owatta toki, yuki ga futte imashita", meaning: "film bittiğinde yağmur yağıyordu", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "413" },
    { japanese: "tomodachi ga kita toki, watashi wa ofuro ni haitte imashita", meaning: "arkadaşım geldiğimde banyoya giriyordum", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "414" },
    { japanese: "denwa o shita toki, anata wa imasen deshita", meaning: "telefon açtığımda sen yoktun", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "415" },
    { japanese: "tomodachi ga heya ni haitte kita toki, watashi wa benkyou o shite imashita", meaning: "arkadaşım odaya girip geldiğinde ben ders çalışıyordum", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "416" },
    { japanese: "hajimete hikooki ni notta toki, kowakatta desu", meaning: "ilk defa uçağa bindiğimde korkmuştum", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", id: "417" },
    { japanese: "akai botan o osu to, kaado ga demasu", meaning: "kırmızı düğmeye basmanla, kart çıkar", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai to, V", id: "418" },
    { japanese: "tsunami o hidari e mawasu to, oto ga ookiku narimasu", meaning: "kolu sola döndürmenle ses büyük olur (ses yükselir)", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai to, V", id: "419" },
    { japanese: "kousaten o migi e magaru to, shiyakusho ga arimasu", meaning: "dört yol ağzında sola dönmenle, valiliği göreceksin (valilik var)", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai to, V", id: "420" },
    { japanese: "asagohan o tabenai to, atama ga itakunaru", meaning: "kahvaltıyı yememekle,başım ağırır", source: "minna", unit: "23", type: "sentence", pattern: "Vd || Vnai to, V", id: "421" },
    { japanese: "shingou ga aka ni narimashita", meaning: "trafik ışığı kırmızı oldu (kırmızı yandı)", source: "minna", unit: "23", type: "sentence", pattern: "N ga Adj || V", id: "422" },
    { japanese: "atama ga itai", meaning: "başım ağrıyor", source: "minna", unit: "23", type: "sentence", pattern: "N ga Adj || V", id: "423" },
    { japanese: "tokei ga ugoite inai", meaning: "saat hareket etmiyo (saat çalışmıyo)", source: "minna", unit: "23", type: "sentence", pattern: "N ga Adj || V", id: "424" },
    { japanese: "kono botan o osu to, otsuri ga demasu", meaning: "bu düğmeye basmanla, bozuk çıkar (makineden)", source: "minna", unit: "23", type: "sentence", pattern: "N ga Adj || V", id: "425" },
    { japanese: "kouen o sampo shimasu", meaning: "i take a stroll in the park", source: "minna", unit: "23", type: "sentence", pattern: "N o Vmovement", id: "426" },
    { japanese: "michi o arukimasu", meaning: "i walk along the road", source: "minna", unit: "23", type: "sentence", pattern: "N o Vmovement", id: "427" },
    { japanese: "hashi o watarimasu", meaning: "i go across the bridge", source: "minna", unit: "23", type: "sentence", pattern: "N o Vmovement", id: "428" },
    { japanese: "kousaten o migi e magatte kudasai", meaning: "turn right at the intersection", source: "minna", unit: "23", type: "sentence", pattern: "N o Vmovement", id: "429" },
    { japanese: "ramasan wa watashi ni kono hon o kuremashita", meaning: "ramasan bana bu kitabı verdi", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o kuremasu || agemasu", id: "430" },
    { japanese: "samitasan wa ototo ni kono hon o kuremashita", meaning: "samitasan ağbime bu kitabı verdi", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o kuremasu || agemasu", id: "431" },
    { japanese: "obaasan wa watashi ni kono hon o kuremashita", meaning: "büyükannem bana bu kitabı verdi", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o kuremasu || agemasu", id: "432" },
    { japanese: "ramasan wa samitasan ni kono hon o agemashita", meaning: "ramasan samitasana bu kitabı verdi", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o kuremasu || agemasu", id: "433" },
    { japanese: "watashi wa ramsan ni kono hon o agemashita", meaning: "ben ramsana bu kitabı verdim", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o kuremasu || agemasu", id: "434" },
    { japanese: "watashi wa ototo ni kono hon o agemashita", meaning: "ben ağbime bu kitabı verdim", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o kuremasu || agemasu", id: "435" },
    { japanese: "sensei wa watashi ni ressun o oshiemashita", meaning: "öğretmen bana ders verdi (öğretti anlamı)", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", id: "436" },
    { japanese: "sensei wa watashi ni ressun o oshiete kuremashita / kureta", meaning: "öğretmen bana ders verdi (ahlaki anlamda)", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", id: "437" },
    { japanese: "amiru wa  yoshidasan ni kuruma o kashite agemasu", meaning: "amir yoshidasana arabayı ödünç verdi", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", id: "438" },
    { japanese: "watashi wa ojiichan ni koohii o irete agemashita", meaning: "ben büyükbabaya kahve verdim", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", id: "439" },
    { japanese: "watashi wa tanakasan o kuukou e okutte agemasu", meaning: "tanakasan'ı havalimanına götürdüm (geçirdim, yolcu ettim)", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", id: "440" },
    { japanese: "watashi wa samita ni basunoriba made annai shite moraimashita", meaning: "samita bana otobüs durağına kadar eşlik etti (verdi)", source: "minna", unit: "24", type: "sentence", pattern: "Receiver wa Giver ni Vte moraimasu", id: "441" },
    { japanese: "watashi wa ani ni koko ni tsurete kite moraimashita", meaning: "abim beni buraya getirdi (verdi)", source: "minna", unit: "24", type: "sentence", pattern: "Receiver wa Giver ni Vte moraimasu", id: "442" },
    { japanese: "watashi wa tomodachi ni anime o shoukai shite moraimashita", meaning: "arkadaşın beni animeyle tanıştırdı (verdi)", source: "minna", unit: "24", type: "sentence", pattern: "Receiver wa Giver ni Vte moraimasu", id: "443" },
    { japanese: "sensei wa (watashi ni) kotae o setsumei shite kuremashita", meaning: "öğretmen bana cevabı açıkladı", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", id: "444" },
    { japanese: "haha wa watashi ni mainichi obentou o tsukette kuremasu  ", meaning: "annem hergün yemeği bana hazırladı (yaptı)", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", id: "445" },
    { japanese: "ane wa watashini hikkoshi o tetsudatte kuremasu", meaning: "kız kardeşim hareket etmeme yardım etti (verdi)", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", id: "446" },
    { japanese: "watashi wa ane ni hikkoshi o tetsudatte moraimasu", meaning: "ben kız kardeşimden hareket etmede yardımı aldım (verdim)", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", id: "447" },
    { japanese: "ane wa watashi ni hikkoshi o tetsudatte kuremasu", meaning: "kız kardeşim hareket etmeme yardım etti (verdi)", source: "minna", unit: "24", type: "sentence", pattern: "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", id: "448" },
    { japanese: "okaasan ga katte kuremashita", meaning: "annem (bana) satın aldı (satın alıp verdi)", source: "minna", unit: "24", type: "sentence", pattern: "N ga V", id: "449" },
    { japanese: "tanaka sensei ga oshiete kuremashita", meaning: "tanaka hoca (bana) öğretti (verdi)", source: "minna", unit: "24", type: "sentence", pattern: "N ga V", id: "450" },
    { japanese: "dare ga anata ni kono hon o kuremashita ka / agemashita ka? ramasan ga kuremashita", meaning: "kim sana bu kitabı verdi? ramasan verdi", source: "minna", unit: "24", type: "sentence", pattern: "N ga V", id: "451" },
    { japanese: "dare ga shiryou o junbi shimasu ka? haradasan ga junbi shimasu", meaning: "kim belgeleri hazırladı? Haradasan hazırladı", source: "minna", unit: "24", type: "sentence", pattern: "N ga V", id: "452" },
    { japanese: "dare ga barentain choko o moraimashita ka? Jon dake ga moraimashita", meaning: "kim valentine çikolatası aldı? Jon sadece aldı", source: "minna", unit: "24", type: "sentence", pattern: "N ga V", id: "453" },
    { japanese: "dare ni/kara moraimashita ka?", meaning: "kimden aldın?", source: "minna", unit: "24", type: "sentence", pattern: "dare ni || kara", id: "454" },
    { japanese: "dare ni kono hon o moraimashita ka? ", meaning: "kimden bu kitabı aldın?", source: "minna", unit: "24", type: "sentence", pattern: "dare ni || kara", id: "455" },
    { japanese: "dare ni eigo o oshiete moraimashita ka? simusu sensei ni oshiete moraimashita", meaning: "kimden ingilizce öğrendin (aldın)? Sumisu hocadan öğrendim", source: "minna", unit: "24", type: "sentence", pattern: "dare ni || kara", id: "456" },
    { japanese: "dare kara/ni barentain choko o moraimashita ka? maria kara moraimashita", meaning: "kimden valentine çikolatası aldın? Maria'dan aldım", source: "minna", unit: "24", type: "sentence", pattern: "dare ni || kara", id: "457" },
    { japanese: "ichioku en ga atta ra, shigoto o yamemasu", meaning: "yüz milyon yenim olursa, işimi bırakacağım", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vta ra) , Main Sentence", id: "458" },
    { japanese: "jikan ga nakatta ra, konakute mo ii desu", meaning: "eğer zaman yoksa, gelmesen de olur", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vta ra) , Main Sentence", id: "459" },
    { japanese: "yokatta ra, douzo", meaning: "istersen buyur (al)", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vta ra) , Main Sentence", id: "460" },
    { japanese: "hima datta ra, asobimashou", meaning: "eğer boşsan, dışarı çıkıp oynayalım", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vta ra) , Main Sentence", id: "461" },
    { japanese: "genki ni natta ra, ippai nomimashou", meaning: "iylişence, bir kadeh içelim", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vta ra) , Main Sentence", id: "462" },
    { japanese: "toshi o totta ra, inaka ni sumitai", meaning: "yaşım ilerleyince, kırsala (köye) yerleşmek istiyorum", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vta ra) , Main Sentence", id: "463" },
    { japanese: "eki ni tsuita ra, denwa shite kudasai", meaning: "durağa vardığında, telefon aç lütfen", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vta ra) , Main Sentence", id: "464" },
    { japanese: "shigoto ga owatta ra, kaette mo ii desu", meaning: "işi bitirdikten sonra, eve gidebilirsin", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vta ra) , Main Sentence", id: "465" },
    { japanese: "watashi wa benkyou shite mo, wakarimasen", meaning: "çalışsam da, anlamıyorum", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vte mo), Main Sentence", id: "466" },
    { japanese: "yasukute mo watashi wa guruupu ryokou ga suki ja nai", meaning: "ucuz olsa da, grup seyahatlerini sevmiyorum", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vte mo), Main Sentence", id: "467" },
    { japanese: "benri de mo sumaho o kaimasen", meaning: "kullanışlı olsa da akıllı telefonları sevmiyorum", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vte mo), Main Sentence", id: "468" },
    { japanese: "yasumi de mo, isogashii desu", meaning: "tatil olsam da, meşgulum", source: "minna", unit: "25", type: "sentence", pattern: "Vconditional (Vte mo), Main Sentence", id: "469" },
    { japanese: "moshi ichioku en ga atta ra, shigoto o yamemasu", meaning: "ola ki yüz milyon yenim olsa, işi terkederim", source: "minna", unit: "25", type: "sentence", pattern: "Moshi Vconditional(Vta ra), Main Sentence", id: "470" },
    { japanese: "moshi yokatta ra, douzo", meaning: "ola ki istersen, buyur", source: "minna", unit: "25", type: "sentence", pattern: "Moshi Vconditional(Vta ra), Main Sentence", id: "471" },
    { japanese: "moshi nihon ni itta ra, fankopoppu o katte kuremasen ka", meaning: "ola ki japonyaya gittin, bana fankopop oyuncağı alıp vermez misin?", source: "minna", unit: "25", type: "sentence", pattern: "Moshi Vconditional(Vta ra), Main Sentence", id: "472" },
    { japanese: "ikura kangaete mo, kanojo no koto o omoida shimasen", meaning: "ne kadar düşünsem de, onu hatırlayamıyorum", source: "minna", unit: "25", type: "sentence", pattern: "Ikura Vconditional (Vte mo), Main Sentence", id: "473" },
    { japanese: "ikura takakute mo, anata ni katte agemasu", meaning: "ne kadar pahalı olsa da, sana alıp vereceğim", source: "minna", unit: "25", type: "sentence", pattern: "Ikura Vconditional (Vte mo), Main Sentence", id: "474" },
    { japanese: "ikura benri de mo, sumaho o kaimasen", meaning: "ne kadar kullanışlı olsa da, akıllı telefon satın almıyorum", source: "minna", unit: "25", type: "sentence", pattern: "Ikura Vconditional (Vte mo), Main Sentence", id: "475" },
    { japanese: "migeru ga tsuita ra, watashi ni oshiete kudasai", meaning: "miguel vardığında, bana söyle lütfen (haber ver)", source: "minna", unit: "25", type: "sentence", pattern: "Subject ga Subrdinate || Conditional", id: "476" },
    { japanese: "sumaho ga benri de mo, kaimasen", meaning: "akıllı telefon kullanışlı olsa da, almıyorum", source: "minna", unit: "25", type: "sentence", pattern: "Subject ga Subrdinate || Conditional", id: "477" },
    { japanese: "okaasan ga byouki no toki, jibun de ryouri o shimasu", meaning: "annem hasta olduğu zaman, ben kendim yemek yapıyorum", source: "minna", unit: "25", type: "sentence", pattern: "Subject ga Subrdinate || Conditional", id: "478" },
    { japanese: "yuki ga furu to, densha ga tomarimasu", meaning: "kar yağmasıyla, trene bindik", source: "minna", unit: "25", type: "sentence", pattern: "Subject ga Subrdinate || Conditional", id: "479" },
    { japanese: "akachan ga umareru mae ni, iroiro junbi shinai to", meaning: "bebeğim doğmasından önce, onubunu hazırlamak zorundayım", source: "minna", unit: "25", type: "sentence", pattern: "Subject ga Subrdinate || Conditional", id: "480" },
    { japanese: "samui n desu", meaning: "because it is cold", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "481" },
    { japanese: "kireina n desu", meaning: "because it is beautiful", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "482" },
    { japanese: "yamaguchisan eigo ga jouzu desu ne. kaigai ni sunde ita n desu ka / ee, amerika de benkyou o shimashita", meaning: "yamaguchisan ingilizceniz çok iyi? Acaba yurt dışında yaşadığınız için mi? / evet, amerika'da öğrenim gördüm.", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "483" },
    { japanese: "sutekina shatsu desu ne. doko de katta n desu ka? / harajuku de kaimashita", meaning: "tshirtün güzelmiş. Nereden aldın acaba? / harajuku'da aldım", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "484" },
    { japanese: "doushite okureta n desu ka / densha ga okereta n desu", meaning: "neden geç kaldın acaba? / tren geç kaldığından", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "485" },
    { japanese: "doushita n desu ka / atama ga itai n desu", meaning: "ne oldu acaba? Problem ne ki? / başım ağırıyor da", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "486" },
    { japanese: "mainichi hirugohan o tsukurimasu ka / iie, jikan ga nai n desu", meaning: "her gün akşam yemeği yapar mısın / hayır, zamanım olmadığından", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "487" },
    { japanese: "okane ga nai n desu ga, ashita haratte mo ii desu ka", meaning: "ummm, param yok da, yarın ödesem olur mu?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "488" },
    { japanese: "watashi wa kristinasan no paatii iku n desu ga, issho ni ikimasen ka", meaning: "kristinasan'ın partisine gidiyorum da, birlikte gidelim mi?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "489" },
    { japanese: "ryokou ni iku n desu ka", meaning: "tatile mi gidiyosun ki?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "690" },
    { japanese: "ame ga futte iru n desu ka", meaning: "yağmur mu yağıyo ki?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "691" },
    { japanese: "atarashii pasokon o katta n desu ka", meaning: "yeni bilgisayar alsak mı ki?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "692" },
    { japanese: "erebeetaa ni noranai n desu ka", meaning: "asansöre binsek mi ki?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "693" },
    { japanese: "omoshiroi dezain no kutsu desu ne. doko de katta n desu ka ", meaning: "ilginç dizayn ayakkabı. nereden satın aldın ki?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "694" },
    { japanese: "kireina shashin desu ne. doko de totta n desu ka", meaning: "güzel foto. nerde çektin ki?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "695" },
    { japanese: "doushite okureta n desu ka / basu ga konakatta n desu", meaning: "neden geç kaldın ki? / otobüs gelmediğinden", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "696" },
    { japanese: "doushite kaisha o yameru n desu ka", meaning: "neden firmadan ayrıldın ki?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "697" },
    { japanese: "doushita n desu ka / chotto kibun ga warui n desu ne", meaning: "ne oldu ki? / biraz kötü hissediyorum gibi", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "698" },
    { japanese: "saifu o wasureta n desu", meaning: "cüzdanımı unuttum", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "699" },
    { japanese: "doushite keeki o tabenai n desu ka / daietto o shite iru n desu", meaning: "keki neden yeniyorsunuz ki? / diyet yaptığımdan", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "700" },
    { japanese: "yoku karaoke ni ikimasu ka / iie, amari ikimasen. karaoke wa suki ja nai n desu", meaning: "sık sık karaokeye gider misiniz acaba / yok, pek gitmeyiz. karaoke'den hoşlanmam", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "701" },
    { japanese: "mai asa shinbun o yomimasu ka / iie, yomimasen. jikan ga nai n desu", meaning: "her sabah gazete okur musun ki / yok, okuman. zamanım olmuyor", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "702" },
    { japanese: "konban shokuji ni ikimasen ka / sumimasen. kyou wa chotto yakusoku ga aru n desu", meaning: "yarın akşam yemeğine gidelim mi / üzgünüm, bugün bir randevum var da", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "703" },
    { japanese: "atama ga itai n desu ga, kaette mo ii desu ka", meaning: "başım ağrıyor da geri dönsek olur mu?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "704" },
    { japanese: "ashita tomodachi to sukii ni iku n desu ga, sasakisan mo issho ni ikimasen ka", meaning: "yarın arkadaşımla kayağa gidiyoruz da, sasakisan da birlikte gitmez mi?", source: "minna", unit: "26", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", id: "705" },
    { japanese: "ii sensei o shoukai shite itadakemasen ka", meaning: "iyi bir hocayla tanıştırabilir misiniz?", source: "minna", unit: "26", type: "sentence", pattern: "Vte itadakemasen ka", id: "707" },
    { japanese: "denwa bango ga wakaranai n desu ga, oshiete itadakemasen ka", meaning: "telefon numarasını bilmiyorum da, söyleyebilir misiniz lütfen?", source: "minna", unit: "26", type: "sentence", pattern: "Vte itadakemasen ka", id: "708" },
    { japanese: "yarikata ga wakaranai n desu ga, oshiete itadakemasen ka", meaning: "I don't know how to do it, could you please help me? (very polite)", source: "minna", unit: "26", type: "sentence", pattern: "Vte itadakemasen ka", id: "490" },
    { japanese: "repooto o owarimashita, dasu mae ni mite itadakemasen ka", meaning: "I finished the report, before submitting could you please have a look?", source: "minna", unit: "26", type: "sentence", pattern: "Vte itadakemasen ka", id: "491" },
    { japanese: "sochira de denwa o wasuremashita ga, sogashite itadakemasen ka", meaning: "I forgot my phone there, could you please search for it?", source: "minna", unit: "26", type: "sentence", pattern: "Vte itadakemasen ka", id: "492" },
    { japanese: "shiyakusho e ikitai n desu ga, dono basu ni notta ra ii desu ka", meaning: "shiyakushoya gitmek istiyorum da, hangi otobüse binsem iyi olur?", source: "minna", unit: "26", type: "sentence", pattern: "Vta ra ii desu ka", id: "709" },
    { japanese: "kabuki o mitai n desu ga, doko de chiketto o katta ra ii desu ka", meaning: "kabuki izlemek istiyorum da, nerede bilet satın alsam iyi olur", source: "minna", unit: "26", type: "sentence", pattern: "Vta ra ii desu ka", id: "710" },
    { japanese: "bijutsukan o kengaku o shitai n desu ga, dou shita ra ii desu ka / chokusetsu itta ra ii desu yo", meaning: "müze gezisi yapmak istiyorum da, ne yapsam iyi olur / direk gidersen iyidir", source: "minna", unit: "26", type: "sentence", pattern: "Vta ra ii desu ka", id: "711" },
    { japanese: "onaka ga suita, doko de tabeta ra ii desu ka", meaning: "karnım acıktı, nerde yesem iyi olur?", source: "minna", unit: "26", type: "sentence", pattern: "Vta ra ii desu ka", id: "493" },
    { japanese: "omiyage o kaitai n desu ga, nani o katta ra ii desu ka", meaning: "souvenir almak istiyorum da, ne alsam iyi olur?", source: "minna", unit: "26", type: "sentence", pattern: "Vta ra ii desu ka", id: "494" },
    { japanese: "pasupooto o nakukarimashita, dou shita ra ii desu ka", meaning: "pasaportumu kaybettim, nasıl yapsam acaba?", source: "minna", unit: "26", type: "sentence", pattern: "Vta ra ii desu ka", id: "495" },
    { japanese: "kanojo ni kudamono o ageta hou ga ii desu ka / ummm, kudamono wa suki ja nai to omoimasu", meaning: "ona meyve versek daha ii olur mu? / umm, meyve sevmez diye düşünüyorum", source: "minna", unit: "26", type: "sentence", pattern: "N wa suki || kirai || n desu", id: "496" },
    { japanese: "basuketto booru o shimashou / gomen, supootsu wa jouzu ja nai n desu", meaning: "basketbol oynayalım hadi / üzgünüm, spora yeteneğim yok da", source: "minna", unit: "26", type: "sentence", pattern: "N wa suki || kirai || n desu", id: "497" },
    { japanese: "watashi wa eigo o hanasemasu", meaning: "I can speak english", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "499" },
    { japanese: "hitori de kuukou de ikemasu ka", meaning: "tek başına alana gidebilir misin?", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "500" },
    { japanese: "ashita roku ji ni okiraremasu ka", meaning: "yarın saat 6da kalkabilir misin?", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "501" },
    { japanese: "chuumon ga mada kaeraremasu ka", meaning: "can I still change my order?", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "502" },
    { japanese: "ashita kara sono eiga ga miraremasu", meaning: "you can watch the movie staring tomorrow", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "503" },
    { japanese: "kono machi kara fujiyama ga miemasu", meaning: "from this road fujiyama can be seen", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "504" },
    { japanese: "oodyoo gaido de setsumei ga kikemasu ", meaning: "audio guide ile açıklamayı dinleyebilirsin", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "505" },
    { japanese: "ano heya kara fushigina oto ga kikoemasu", meaning: "o odadan tuhaf bir ses duyuluyor", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "506" },
    { japanese: "kanji o yomu koto ga dekimasu", meaning: "kanji okyumabilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "714" },
    { japanese: "watashi wa hashi ga tsukaemasu", meaning: "çubuk kullanabilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "715" },
    { japanese: "kanji ga yomemasu", meaning: "kanji okyumabilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "716" },
    { japanese: "jitensha ga shuuri dekimasu", meaning: "araba tamiri yapabilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "717" },
    { japanese: "kono konbini de kaemasu", meaning: "bu dükkandan satın alabiliriz", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "718" },
    { japanese: "pasokon ga kaemasen. okane ga tarinai n desu", meaning: "bilgisayar alamayız. para yeterli değil.", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "719" },
    { japanese: "hashiremasen. ashi ga itai n desu", meaning: "koşamıyorum. ayağım acıyor da.", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "720" },
    { japanese: "kochira de paatii ga dekimasu ka", meaning: "burada parti yapabilir miyiz", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "721" },
    { japanese: "doko de mo hitori de ikemasu", meaning: "heryere tek gidebilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "722" },
    { japanese: "yama no ue kara umi ga miemasu", meaning: "dağın tepesinden deniz görülebilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "723" },
    { japanese: "tonari no heya kara gitaa no oto ga kikoemasu", meaning: "yan odadan gitar sesi duyulabilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "724" },
    { japanese: "sensei no koe ga kikoemasen", meaning: "öğretmenin sesi duyulamıyor", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "725" },
    { japanese: "anou, ushiro made kikoenai n desu ga…", meaning: "hmm, arkadan ses duyulamıyor", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "726" },
    { japanese: "eki no mae ni ookii suupaa ga dekimashita", meaning: "istasyonun karşısında buyük bir süpermarket açıldı", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "727" },
    { japanese: "suiyoubi ni dekimasu", meaning: "Perşembe günü hazır haşde olur", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "728" },
    { japanese: "kouen no tonari ni dekimasu", meaning: "parkın yanında açıldı", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "729" },
    { japanese: "bangohan ga dekimashita", meaning: "akşam yemeği hazır", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "730" },
    { japanese: "watashi wa osake ga nomemasu", meaning: "ben içki içebilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "731" },
    { japanese: "watashi no chichi wa furansugo ga hanasemasu", meaning: "benim babam fransızca konuşabilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "732" },
    { japanese: "watashi wa kono tsukue ga motemasu", meaning: "ben bu masayı taşıyabilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "733" },
    { japanese: "watashi no ani wa eigo no shinbun ga yomemasu", meaning: "benim abim ingilizce gazete okuyabilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "734" },
    { japanese: "konban watashi wa anata ni aemasu ka", meaning: "bu akşam ben seninle buluşabilir miyim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "735" },
    { japanese: "ashita anata wa eiga ni ikemasu ka / ikemasen", meaning: "yarın sen sinemaya gidebilir misin? Gidemem", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "736" },
    { japanese: "watashi wa doitsugo ga amari hanasemasen", meaning: "ben almancayı pek konuşamam", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "737" },
    { japanese: "watashi wa supeingo ga zenzen hanasemasen", meaning: "ben ispanyolcayı hiç konuşamam", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "738" },
    { japanese: "watashi wa katakana ga sukushi / yoku kakemasu", meaning: "ben katakanayı biraz okuyabilirim / iyi okuyabilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "739" },
    { japanese: "anata wa osushi ga taberaremasu ka? Hai, watashi wa osushi ga taberaremasu.", meaning: "sen sushi yiyebilir misin? Evet, ben sushi yiyebilirim.", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "740" },
    { japanese: "anata wa densha no naka de nerare masu ka? İie, watashi wa densha no naka de neraremasen.", meaning: "sen trenin içinde uyuyabilir misim? Hayır ben trenin içinde uyuyamam", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "741" },
    { japanese: "laion wa afurika de miraremasu.", meaning: "aslan afrikada yaşayabilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "742" },
    { japanese: "watashi wa gakkoo ni sanji ni koraremasu.", meaning: "ben okula saat 3'te gelebilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "743" },
    { japanese: "asa watashi wa hayaku okiraremasen.", meaning: "sabah ben erken uyanamam", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "744" },
    { japanese: "zasshi wa honyasan de kaemasu.", meaning: "magazini kitapçıda satın alabilirsin", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "745" },
    { japanese: "osushi wa sushiyasan de taberaremasu.", meaning: "sushiyi sushicide yiyebilirsin", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "746" },
    { japanese: "saru wa doobutsu-en ya yama nado de miraremasu.", meaning: "maymun hayvanat bahçesi veya dağda falan görülebilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "747" },
    { japanese: "budou wa aki taberaremasu.", meaning: "üzüm sonbaharda yenilebilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "748" },
    { japanese: "sakura wa haru miraremasu.", meaning: "sakura baharda görülebilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "749" },
    { japanese: "tabako wa doko de mo kaemasu.", meaning: "sigara heryerde satın alınabilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "750" },
    { japanese: "rekoodo wa itsu de mo kikemasu.", meaning: "kayıt heryerde dinlenebilir", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "752" },
    { japanese: "watashi wa tenisu ya sukii nado ga dekimasu.", meaning: "ben tenis ve kayak vs gibi aktiviteler yapabilirim", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "753" },
    { japanese: "watashi wa kuruma no unten ga dekimasu.", meaning: "ben araba sürmeyi biliyorum", source: "minna", unit: "27", type: "sentence", pattern: "Vpotential", id: "754" },
    { japanese: "heya ni terebi ga arimasu", meaning: "odada tv var (vurgu tvde)", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "510" },
    { japanese: "mise de wa sake ga kaemasu", meaning: "dükkanda içki alabilirsin", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "511" },
    { japanese: "kono biru kara wa hanabi ga miemasu", meaning: "from this building fireworks can be seen", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "512" },
    { japanese: "sarada o tabemashita, keeki mo tabemashita", meaning: "salata yedim, kek de yedim", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "513" },
    { japanese: "shimizusan wa eigo ga hanasemasu, chuugokugo mo hanasemasu", meaning: "shumizu ingilizce konuşabilir, çince de konuşabilir", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "514" },
    { japanese: "heya ni wa terebi ga arimasu, ribinguruumu ni mo terebi ga arimasu", meaning: "odada tv var, oturma odasında da tv var", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "515" },
    { japanese: "ano manshon de petto ga kaemasu ka / chiisai tori wa kaemasu ga, inu ya neko wa kaemasen", meaning: "o evde pet beslenebilir mi / küçük kuş olur ama kedi köpek vs olmaz", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "761" },
    { japanese: "nihon ryouri ga taberaremasu ka / tenpura ya sukiyaki wa taberaremasu ga, osushi wa taberaremasen", meaning: "japon yemeği yiyebilir misin / tenpura ve sukiyaki yiyebilirim ama sushi yiyemem", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "762" },
    { japanese: "akaru kute, ii heya desu ne. tenki ga ii hi ni wa umi ga mieru n desu", meaning: "aydınlık ve iyi oda. hava iyi olan bir günde deniz de görülebilir", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "763" },
    { japanese: "nihon e kite kara, uma no shashin o torimashita ka / nihon de wa uma o miru koto ga dekimasen", meaning: "japonyaya gittiğimde atların fotolarını çektin mi / japonyada atları görme olayı olmadı", source: "minna", unit: "27", type: "sentence", pattern: "wa sentence", id: "764" },
    { japanese: "kopii wa hitotsu shika arimasen", meaning: "bir tane dışında fotokopi yok", source: "minna", unit: "27", type: "sentence", pattern: "shika", id: "516" },
    { japanese: "kopiiwa hitotsu dake arimasu", meaning: "sadece bir tane fotokopi var", source: "minna", unit: "27", type: "sentence", pattern: "shika", id: "517" },
    { japanese: "kanojo ni shika katte agenai", meaning: "onun haricinde kimseye almıyorum", source: "minna", unit: "27", type: "sentence", pattern: "shika", id: "518" },
    { japanese: "kanojo dake ni katte ageru", meaning: "sadece ona alıyorum", source: "minna", unit: "27", type: "sentence", pattern: "shika", id: "519" },
    { japanese: "hiragana ga kakemasen / hiragana shika kakemasen", meaning: "hiragana yazamam / hiragana dışında yazamam", source: "minna", unit: "27", type: "sentence", pattern: "shika", id: "755" },
    { japanese: "koko ni yasai dake arimasu / koko ni yasai shika arimasen", meaning: "burada sadece ucuz var / burada ucuz dışında yok", source: "minna", unit: "27", type: "sentence", pattern: "shika", id: "756" },
    { japanese: "asa pan shika tabemasen deshita kara, onaka ga sukimashita", meaning: "sabah ekmek dışında bişey yemediğimden, karnım acıktı", source: "minna", unit: "27", type: "sentence", pattern: "shika", id: "758" },
    { japanese: "kyonen wa yuki ga sukoshi shika furimasen deshita kara, sukii ga dekimasen deshita", meaning: "bu kış çok az dışında kar yağmadığından, kayak yapamadık", source: "minna", unit: "27", type: "sentence", pattern: "shika", id: "759" },
    { japanese: "denwa o shi nagara unten shimasu", meaning: "telefon açarken araba kullanıyor", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "765" },
    { japanese: "ongaku o kiki nagara shokuji shimasu", meaning: "muzik dinleyerek yemek yapıyor", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "766" },
    { japanese: "kare wa hataraki nagara daigaku de benkyou shite imasu", meaning: "bir yandan çalışırken bir yandan üniversitede okuyor", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "767" },
    { japanese: "ongaku o kiki nagara benkyou o shimasu ka", meaning: "müzik dinleyerek mi çalışıyorsun?", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "768" },
    { japanese: "shashin o mise nagara setsumei shimasu", meaning: "resmi göstererek açıklama yapıyor", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "769" },
    { japanese: "hanashi o kiki nagara memo shite kudasai", meaning: "konuşmayı dinlerken not alıyor", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "770" },
    { japanese: "koohii o nomi nagara hanashi o shitai desu ka", meaning: "kahve içerek sohbet etmek ister misin?", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "771" },
    { japanese: "ongaku o kiki nagara gakkou e aruku no ga suki desu", meaning: "müzik dinleyerek okula yürümeyi severim", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "772" },
    { japanese: "watashi wa hon o yomi nagara arukimasu.", meaning: "kitap okuyarak yürüyorum.", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "773" },
    { japanese: "watashi wa aisukuriimu o tabe nagara Istkiklal doori o arukimasu.", meaning: "dondurma yiyerek istiklal caddesinde yürüyorum.", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "774" },
    { japanese: "watashi wa rajio o kiki nagara jidousha o unten shimasu.", meaning: "radyo dinleyerek bisiklet sürüyorum.", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "775" },
    { japanese: "kare wa nani o nomi nagara gohan o tabemasu ka / Kare wa osake o nomi nagara gohan o tabemasu.", meaning: "o ne içerek yemek yiyor? Osake içerek yemek yiyor.", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "776" },
    { japanese: "warai nagara, omoshiroi bangumi o mimashita", meaning: "gülerek, ilginç bir tv programı izledim", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "520" },
    { japanese: "arubaito o yari nagara, daigaku de benkyou shimasu", meaning: "bir yandan part time çalışarak, diğer yandan üniversitede okuyorum", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "521" },
    { japanese: "hon o kaki nagara, eigo o oshiemashita", meaning: "bir yandan kitap yazarak, diğer yandan ingilizce öğretiyordum.", source: "minna", unit: "28", type: "sentence", pattern: "V1stem nagara, V2", id: "522" },
    { japanese: "yasumi no hi wa e o kaite imasu", meaning: "tatil günlerimde resim yaparım", source: "minna", unit: "28", type: "sentence", pattern: "Vte imasu", id: "777" },
    { japanese: "itsumo jitensha de kayotte imasu", meaning: "her zaman bisikletimle giderim", source: "minna", unit: "28", type: "sentence", pattern: "Vte imasu", id: "778" },
    { japanese: "kodomo no toki, maiban 8-ji ni nete imashita", meaning: "çocukken her akşam 8de uyurdum", source: "minna", unit: "28", type: "sentence", pattern: "Vte imasu", id: "779" },
    { japanese: "maiasa pan o tabete imasu ga, kesa wa koohii shika nomimasen deshita ", meaning: "her sabah ekmek yerim ama bu sabah kahve dışında bi şey içmedim", source: "minna", unit: "28", type: "sentence", pattern: "Vte imasu", id: "780" },
    { japanese: "maiasa, gohan o taberu mae ni, jogingu o shite imasu", meaning: "her sabah, kahvaltı yemeden önce koşu yapıyorum", source: "minna", unit: "28", type: "sentence", pattern: "Vte imasu", id: "523" },
    { japanese: "do nichi wa sentaku o shite imasu", meaning: "Her Cumartesi Pazar çamaşır yıkıyorum", source: "minna", unit: "28", type: "sentence", pattern: "Vte imasu", id: "524" },
    { japanese: "maiban biiru o nonde imashita", meaning: "her akşam bira içiyordum", source: "minna", unit: "28", type: "sentence", pattern: "Vte imasu", id: "525" },
    { japanese: "suzukisan wa piano mo hikeru shi, uta mo utaeru shi, dansu mo dekimasu", meaning: "suzukisan piyano da çalabilir, şarkı da söyleyebilir ve dans da edebilir", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "786" },
    { japanese: "kono kuruma wa katachi mo ii shi, iro mo kirei da shi, sore ni nedan mo sonnani takakunai desu", meaning: "bu araba hem ucuz, hem güzel, hem fiyatı da pek öyle yüksek değil", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "787" },
    { japanese: "kono mise wa yasui shi, shinamono mo ooi shi, itsumo koko de kaimono shite imasu", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "788" },
    { japanese: "dezain mo suteki dashi, saizu mo choudo ii shi, kono kutsu o kaimasu", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "789" },
    { japanese: "nedan mo yasui shi, sakana mo atarashii shi…", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "790" },
    { japanese: "mise mo kirei dashi, saabisu(servis) mo ii shi…", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "791" },
    { japanese: "doushite inaka ni sumitai n desu ka / midori mo ooi shi, tabemono mo oishii desu kara", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "792" },
    { japanese: "doushite kaisha o yameta n desu ka / boonasu(bonus) mo nai shi, kyuuryou mo sukunai desu kara", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "793" },
    { japanese: "doushite sensei ni naritai n desu ka / kodomo mo suki da shi, taisetsuna shigoto da to omoimasu kara", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "794" },
    { japanese: "ane no apaato wa atarashii shi, niwa mo arimasu", meaning: "kız kardeşimin apartmanı yeni ve (ayrıca), bahçesi de var.", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "526" },
    { japanese: "sukina hito wa yasashii shi, kirei da shi, ninki ga arimasu", meaning: "sevdiğim insan, nazik, güzel ve popülerdir", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "527" },
    { japanese: "shachou wa garciasan o erabimashita. Kanojo wa eigo ga hanaseru shi, nesshin da shi, keiken mo arimasu", meaning: "müdür garciasan'ı seçti. O ingilizce konuşablir, çalışkandır ve tecrübelidir (başka da çok özelliği vardır)", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "528" },
    { japanese: "koohii demo nomimasen ka / gomen, haha o tetsudau shi, repooto o yarana kereba naranai", meaning: "kahve falan içmesek mi / üzgünüm, anneme yarım etmem (bunun yaında), raporu halletmezsem olmaz", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "529" },
    { japanese: "eki kara mo chikai shi, kono manshon o kaimasu", meaning: "istanyona yakın falan (ve başka özelliklerden), bu evi satın alıyorum", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "530" },
    { japanese: "doushite kono manshon o erandan desu ka / jimu ga aru shi, yasui shi, sore ni eki kara mo chikai desu", meaning: "neden bu evi seçtiniz acaba? / gym var, ucuz ve istasyona yakındır (ve daha başka)", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "531" },
    { japanese: "Kanojo wa eigo ga hanaseru shi, nesshin da shi, keiken mo arimasu, sore de shachou wa garciasan o erabimashita.", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp shi || Adj-i shi || Adj-na da shi || N da shi", id: "532" },
    { japanese: "koko wa nedan mo yasui shi, ii ongaku mo kikeru shi… / sore de ninki ga aru n desu ne", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "sore de", id: "795" },
    { japanese: "itsuka konpyuutaa no kaisha o tsukuritai desu, sore de ima wa kaisha de hataraki nagara yoru daigaku de benkyou shite imasu", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "sore de", id: "796" },
    { japanese: "watashi wa gakusei no toki, yoku benkyou shita", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "797" },
    { japanese: "watashi wa gakusei no toki ni, yoku benkyou shita", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "798" },
    { japanese: "watashi wa wakai toki ni, iroirona supootsu o shimashita", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "799" },
    { japanese: "itai toki ni, kusuri o yonde kudasai", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "800" },
    { japanese: "watashi wa yasui toki ni, takusan no kudamono o kaimashita", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "801" },
    { japanese: "nihon de wa shokuji o suru toki ni, 'itadakimasu' to iimasu", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "802" },
    { japanese: "benkyou suru toki wa, ongaku o kikimasen", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "803" },
    { japanese: "ochikomu toki wa, itsumo biichi (beach) o arukimasu", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "804" },
    { japanese: "jikan ga nai toki wa, asagohan o tabemasen", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "805" },
    { japanese: "nihon ni iku toki wa, kore o kaimasu", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "806" },
    { japanese: "tsukareta toki wa , nemasu", meaning: "", source: "minna", unit: "28", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N no toki", id: "807" },
    { japanese: "suupaa ga shimatte imasu kara, konbini de kaimashou", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "808" },
    { japanese: "eakon (air condition) ga tsuite imasu kara, suzushii desu", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "809" },
    { japanese: "kaigishitsu no denki ga kiete imasu kara, kaigi wa mou owatta to omoimasu", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "810" },
    { japanese: "kagi ga kakatte imasu kara, hairemasen", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "811" },
    { japanese: "kono koppu wa yogorete imasu", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "812" },
    { japanese: "sono fukuro wa yaburete imasu yo", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "813" },
    { japanese: "sono soujiki wa koshou shite imasu yo", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "814" },
    { japanese: "doa ga aite imasu", meaning: "kapı açıktır (açık durumda)", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "534" },
    { japanese: "mado ga warete imasu", meaning: "pencere bozuktur (kırıktır)", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "535" },
    { japanese: "denki ga tsuite imasu", meaning: "lamba açık (açık halde)", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "536" },
    { japanese: "densha ga konde imasu", meaning: "tren kalabalıktır", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "537" },
    { japanese: "kono jidouhanbaiki wa kowarate imasu", meaning: "bu vending machine bozuktur", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "538" },
    { japanese: "ano fukuro wa yaburete imasu", meaning: "bu torba yırtık", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "539" },
    { japanese: "sono esukareetaa wa koshou shite imasu", meaning: "o asansör bozuk (arızalı)", source: "minna", unit: "29", type: "sentence", pattern: "Vinstantenious te imasu", id: "540" },
    { japanese: "sasakisan ga mottekita wain wa minna de nonde shimaimashita", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "815" },
    { japanese: "kono meeru (mail) o kaite shimaimasu kara, osakini douzo", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "816" },
    { japanese: "eki made hashirimashita ga, densha wa itte shimaimashita", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "817" },
    { japanese: "gomennasai, denwa bango o machigaete shimaimashita", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "818" },
    { japanese: "mou repooto o kakite shimaimashita ka", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "819" },
    { japanese: "ikikata o oshiete moraimashita ga, michi o machigaete shimaimashita", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "820" },
    { japanese: "doushite konakatta n desu ka / kaze o hiite shimatta n desu", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "821" },
    { japanese: "kanji no shukudai wa zenbu yatte shimatta desu", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "822" },
    { japanese: "inouesan ga kureta kureta keeki wa zenbu tabete shimaimashita", meaning: "inouesan'ın bana verdiği keki yiyip bitirdim (tamamen hepsini yedim)", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "541" },
    { japanese: "shukudai wa mou yatte shimaimashita ka", meaning: "ödevini artık bitirdin mi (tamamen)", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "542" },
    { japanese: "kaeru jikan made ni repooto o kaite shimaimasu", meaning: "gitme zamanım gelene kadar raporu (tamamlamış) bitirmiş olurum", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "543" },
    { japanese: "kippu o nakushite shimaimashita ga, dou shitara ii desu ka", meaning: "bileti kaybettim (mahçup), ne yapsam iyi olur?", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "544" },
    { japanese: "machigaete shimaimashita, mou ikkai yarimasu", meaning: "yanlış yaptım (mahçup), bir kere daha deniyim", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "545" },
    { japanese: "hito ga ookatta desu, sore de supiichi o wasurete shimaimashita", meaning: "çok insan vardı, bu yüzden konuşmamı unuttum (mahçup)", source: "minna", unit: "29", type: "sentence", pattern: "Vte shimaimasu || shimaimashita", id: "546" },
    { japanese: "dokoka de saifu o otoshite (otoshimasu) shimatta n desu. sugu kouban ni ikanai to", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Nplace ni ikimasu || kimasu || kaerimasu", id: "823" },
    { japanese: "yasumi no hi wa doko ni ikimasu ka / yoku toshokan ni ikimasu", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "Nplace ni ikimasu || kimasu || kaerimasu", id: "824" },
    { japanese: "densha ni shorui o wasurete shimatta n desu / sore wa taihen desu ne. ekiin ni iwanai to", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "sore || sono || sou", id: "825" },
    { japanese: "raigetsu kara toukyou no honsha ni tenkin na n desu / sore wa omedetou gozaimasu!", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "sore || sono || sou", id: "826" },
    { japanese: "anou, tochuu de tametai baai wa? / sono baai wa, chikaku no kakariin ni namae o itte, kaette kudasai.", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "sore || sono || sou", id: "827" },
    { japanese: "uchi e kaette, yasunda hou ga ii desu yo / ee, sou shimasu", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "sore || sono || sou", id: "828" },
    { japanese: "kaban ga arimashita yo!", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "arimashita", id: "829" },
    { japanese: "atta!", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "arimashita", id: "830" },
    { japanese: "kippu ga arimashita, otoshimashita yo", meaning: "bilet (çıktı ortaya) buldum, düşürdün mü ki.", source: "minna", unit: "29", type: "sentence", pattern: "arimashita", id: "547" },
    { japanese: "atta!, aa, yokatta", meaning: "buldum (ortaya çıktı, işte burda), yaşasın", source: "minna", unit: "29", type: "sentence", pattern: "arimashita", id: "548" },
    { japanese: "dokoka de saifu o nakushite shimaimashita", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "dokoka de || dokoka ni", id: "831" },
    { japanese: "dokoka de mata aimashou", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "dokoka de || dokoka ni", id: "832" },
    { japanese: "dokoka ni ryokou ni ikimashou", meaning: "", source: "minna", unit: "29", type: "sentence", pattern: "dokoka de || dokoka ni", id: "833" },
    { japanese: "nanka iitai koto ga arimasu, dokoka de hanasemasu ka", meaning: "konuşmak istediğim bir şey var, biryerde konuşabilir miyiz", source: "minna", unit: "29", type: "sentence", pattern: "dokoka de || dokoka ni", id: "549" },
    { japanese: "haha wa souji shita toki, ii osara ga dokoka ni katazukemashita", meaning: "annem temizlik yaptığında, tabakları kaldırır (başka yere koyar)", source: "minna", unit: "29", type: "sentence", pattern: "dokoka de || dokoka ni", id: "550" },
    { japanese: "teeburu no ue ni kabin ga oite arimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "834" },
    { japanese: "rouka ni hon ga narabete arimasu ne", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "835" },
    { japanese: "tana no ue ni ningyou ga kazatte arimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "836" },
    { japanese: "fuutou ni kitte ga hatte arimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "837" },
    { japanese: "karendaa wa doko desu ka / reizouko no yoko ni kakete arimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "838" },
    { japanese: "hasami wa doko desu ka / hikidashi no naka ni irete arimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "839" },
    { japanese: "tana ni ningyou ga kazatte arimasu", meaning: "rafta oyuncak bebek sergilenmekte var (bu amaçla konulmuş)", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "551" },
    { japanese: "kabe ni kagami ga kakete arimasu", meaning: "duvarda asılı ayna var", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "552" },
    { japanese: "ningyou wa tana ni kazatte arimasu", meaning: "oyuncak bebek (vurgu bebekte) rafta sergilenmekte (bu amaçla konulmuş)", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "553" },
    { japanese: "gamibako wa sumi ni oite arimasu", meaning: "çöp tenekesi köşede konulmuş var", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "554" },
    { japanese: "puresento wa mou katte arimasu", meaning: "hediyeleri çoktan satın aldım", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "555" },
    { japanese: "paatii no jikan wa mou shirasete arimasu ka", meaning: "parti zamanı çoktan bildirildi mi?", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "556" },
    { japanese: "hoteru wa mou yoyaku shite arimasu", meaning: "çoktan otel reserve ettim", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "557" },
    { japanese: "mado ga shimete arimasu", meaning: "pencere kapatılmış durumda", source: "minna", unit: "30", type: "sentence", pattern: "Vte arimasu", id: "558" },
    { japanese: "tomodachi ga kuru mae ni, heya o katadukete okimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "840" },
    { japanese: "ryouri o hajimeru mae ni, dougu o junbi shite okimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "841" },
    { japanese: "getsuyoubi made ni repooto o matomete oite kudasai", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "842" },
    { japanese: "tsugi no kaigi made ni, kono mondai ni tsuite kangaete oite kudasai", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "843" },
    { japanese: "kono denshijisho o karite mo ii desu ka / ee, tsukatta ra, kono hikidashi ni shimatte oite kudasai", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "844" },
    { japanese: "kono chizu o karite mo ii desu ka / ee, tsukatta ra, tsukue no ue ni oite oite kudasai", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "845" },
    { japanese: "shokuji ga owatta ra, chawan ya osara o aratte okimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "846" },
    { japanese: "ashita kaigi ga arimasu kara, isu wa kono mama ni shite oite kudasai", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "847" },
    { japanese: "ashita kaigi ga arimasu kara, isu wa kono heya ni oite okimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "848" },
    { japanese: "otousan kuru mae ni heya o souji shite oite kudasai", meaning: "baban gelmeden önce odayı temizlemeyi hallet (temizle bitir) lütfen", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "560" },
    { japanese: "jugyou no mae ni, yoshuu shite okimasu", meaning: "dersten önce, dersi hazırlayıp bitir", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "561" },
    { japanese: "shokuji ga owattara, osara wa soko ni oite oite kudasai", meaning: "yemeğini bitirdiğinde, tabakları orada bırak lüften", source: "minna", unit: "30", type: "sentence", pattern: "Vte okimasu", id: "562" },
    { japanese: "kaigishitsu o katadukemashou ka / mada tsukatte imasu kara, sono mama ni shite oite kudasai", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "mada Vaffirmative", id: "849" },
    { japanese: "mada ame ga futte imasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "mada Vaffirmative", id: "850" },
    { japanese: "kare wa mada nonde imasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "mada Vaffirmative", id: "851" },
    { japanese: "mada yuki ga futte imasu", meaning: "hala kar yağıyor", source: "minna", unit: "30", type: "sentence", pattern: "mada Vaffirmative", id: "563" },
    { japanese: "dougu o mada tsukatte imasu kara, sonomama ni shite oite kudasai", meaning: "aletleri hala kullandığımdan, öylece orada bırak lütfen", source: "minna", unit: "30", type: "sentence", pattern: "mada Vaffirmative", id: "564" },
    { japanese: "donna supootsu o shite imasu ka / sou desu ne, tenisu toka suiei toka….", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "N1 toka N2 toka || V1p toka V2p toka", id: "852" },
    { japanese: "osushi toka raamen toka ga suki desu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "N1 toka N2 toka || V1p toka V2p toka", id: "853" },
    { japanese: "rokku toka jazu toka J-pop o yoku kikimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "N1 toka N2 toka || V1p toka V2p toka", id: "854" },
    { japanese: "nichiyoubi ni wa donna koto o shite imasu ka / ongaku o kiku toka, hon o yomu toka shite imasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "N1 toka N2 toka || V1p toka V2p toka", id: "855" },
    { japanese: "wakaranai toki wa, hito ni kiku toka netto de shiraberu toka suru", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "N1 toka N2 toka || V1p toka V2p toka", id: "856" },
    { japanese: "gakusei no toki wa, yoku eiga o miru toka keeki o yaku toka shimashita", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "N1 toka N2 toka || V1p toka V2p toka", id: "857" },
    { japanese: "toukyou ni ikimashita. oosaka ni mo ikimashita", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "mo", id: "858" },
    { japanese: "getsuyoubi ni wa kurasu ga arimasu. suiyoubi ni mo kurasu ga arimasu", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "mo", id: "859" },
    { japanese: "otera o mo ikimashou", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "mo", id: "860" },
    { japanese: "sasakisan to hanashimashita. yamadasan to mo hanashimashita", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "mo", id: "861" },
    { japanese: "toshokan de benkyou dekimasen. uchi de mo benkyou dekimasen.", meaning: "", source: "minna", unit: "30", type: "sentence", pattern: "mo", id: "862" },
    { japanese: "buroodoweide muujikaru o mitai desu / sore wa ii desu ne", meaning: "brodway'de muzikal izlemek istiyorum / o çok iyi", source: "minna", unit: "30", type: "sentence", pattern: "sore wa", id: "565" },
    { japanese: "okane o kashite moraimasu ka / sore wa chotto…", meaning: "para ödünç alabilir miyim? / o biraz (zor) …", source: "minna", unit: "30", type: "sentence", pattern: "sore wa", id: "566" },
    { japanese: "yoku mienai kara, mae no hou ni suwarou", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional", id: "863" },
    { japanese: "ashita wa yasumi da kara, doubutsuen e ikou", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional", id: "864" },
    { japanese: "nodo ga kawaita, juusu (juice) demo nomou", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional", id: "865" },
    { japanese: "tsukareta kara, chotto kyuukei shiyou", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional", id: "866" },
    { japanese: "tsukareta kara, chotto kyuukei shiyou (shimashou)", meaning: "yarolduğumdan, biraz ara verelim", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional", id: "567" },
    { japanese: "yoku mienai kara, mae no hou ni suwarou (suwarimashou)", meaning: "iyi göremediğimizden, daha öne oturalım", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional", id: "568" },
    { japanese: "kore suki? Kaou ka? (kaimashou ka)", meaning: "beğendin mi? Satın alalım mı?", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional", id: "569" },
    { japanese: "omoi desu yo, tetsudaou ka? (tetsudaimashou ka)", meaning: "ağır galiba, yardım edeyim mi?", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional", id: "570" },
    { japanese: "kyou wa eiga o miyou to omoimasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "867" },
    { japanese: "shousetsu o kakou to omotte imasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "868" },
    { japanese: "kondo no shuumatsu wa nani o shimasu ka / yama ni noborou to omotte imasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "869" },
    { japanese: "renkyuu wa nani o shimasu ka / uchi de yukkuri yasumou to omotte imasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "870" },
    { japanese: "eki no chikaku no hoteru o yoyaku shiyou to omotte imasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "871" },
    { japanese: "ryoushin to issho ni sumeru ie o tsukurou to omotte imasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "872" },
    { japanese: "ane wa nihon de eigo o oshieyou to omotte imasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "873" },
    { japanese: "tanakasan wa arubaito o sagasou to omotte imasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "874" },
    { japanese: "ashita ame ga furu to omoimasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "875" },
    { japanese: "ima kare wa nete iru to omoimasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "876" },
    { japanese: "kono hon wa takai to omoimasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "877" },
    { japanese: "ima ano kooen wa shizuka da to omoimasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "878" },
    { japanese: "kono e wa kirei da to omoimasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "879" },
    { japanese: "kore wa kanojo da to omoimasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "880" },
    { japanese: "anata wa ashita mo ii otenki da to omoimasu ka? Hai, soo omoimasu / iie, soo omoimasen", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "881" },
    { japanese: "kodomo wa daigaku o sotsugyou shite kara, shujin to ryokou e ikou to omotte imasu", meaning: "çocuğum üniversiteden mezun olduğundan sonra, kocamla dünya seyahatine çıkmayı düşünmekteyim (uzun zamandır)", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "571" },
    { japanese: "ie de tabeyou to omoimasu", meaning: "evde yemek yemeyi düşünüyorum", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "572" },
    { japanese: "onii san wa eigo no shiken o ukeyou to omotte imasu", meaning: "abim ingilizce sınavına girmeyi düşünüyor", source: "minna", unit: "31", type: "sentence", pattern: "Vvolitional to omoimasu || to omotte imasu", id: "573" },
    { japanese: "daigaku no chikaku ni sumu tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "882" },
    { japanese: "hokkaido o ryokou suru tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "883" },
    { japanese: "kekkon shiki wa doko de shimasu ka / jinja de suru tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "884" },
    { japanese: "ryokou wa doko e ikimasu ka / bari e iku tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "885" },
    { japanese: "dare ni hikkoshi o tetsudatte moraimasu ka / kaisha no hito ni tetsudatte morau tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "886" },
    { japanese: "natsu yasumi ni kuni e kaerimasu ka / iie, kurisumasu made kaeranai tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "887" },
    { japanese: "toukyou e itta ra, sasakisan ni aimasu ka / iie, awanai tsumori desu. jikan ga nai n desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "888" },
    { japanese: "watashi wa kotoshi no natsu fujisan ni noboru tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "889" },
    { japanese: "watashi wa shuumatsu eiga ni iku tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "890" },
    { japanese: "watashi wa sarainen uchi o tsukuru tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "891" },
    { japanese: "watashi wa rainen no natsu daigaku o sotsugyoo suru tsumori", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "892" },
    { japanese: "watashi wa raigetsu jidousha o kau tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "893" },
    { japanese: "atama ga itai kara, ashita kaisha o yasumu tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "894" },
    { japanese: "konban mitai bangumi ga aru kara, hayaku ie ni kaeru tsumori desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "895" },
    { japanese: "roku gatsu matsu made ni resson 50 made owaru tsumori desu", meaning: "altıncı aya kadar ders 50 sonuna kadar bitirmeyi planlıyorum", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "574" },
    { japanese: "rainen kanojo to kekkon suru tsumori desu", meaning: "gelecek yıl onunla evlenmeyi planlıyorum", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "575" },
    { japanese: "natsu yasumi o toranai tsumori desu", meaning: "yaz tatili almamayı planlıyorum", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "576" },
    { japanese: "jibun no kuni ni kaeru tsumori wa arimasen", meaning: "kendi ülkeme dönmeyi planlamıyorum", source: "minna", unit: "31", type: "sentence", pattern: "Vp tsumori desu", id: "577" },
    { japanese: "buchou wa shiten e iku yotei desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp || N no yotei desu", id: "896" },
    { japanese: "yamadasan to taberu yotei desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp || N no yotei desu", id: "897" },
    { japanese: "nanji ni shibuya ni tsukimasu ka / 9-ji 36-pun ni tsuku yotei desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp || N no yotei desu", id: "898" },
    { japanese: "atarashii eki wa itsu dekimasu ka / rainen no 3 gatsu no yotei desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp || N no yotei desu", id: "899" },
    { japanese: "okosan wa itsu umaremasu ka / 5 gatsu no owari no yotei desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vp || N no yotei desu", id: "900" },
    { japanese: "kaigi wa ichi ji ni hajimaru yotei desu", meaning: "toplantının saat birde başlaması ayarlandı", source: "minna", unit: "31", type: "sentence", pattern: "Vp || N no yotei desu", id: "578" },
    { japanese: "kekkon shiki ni okyaku san wa 50 nin gurai kuru yotei desu", meaning: "düğün törenin davetli olarak 50 kişinin gelmesi ayarlandı", source: "minna", unit: "31", type: "sentence", pattern: "Vp || N no yotei desu", id: "579" },
    { japanese: "ryokou wa 3 shuukan no yotei desu", meaning: "gezi 3 hafta olarak ayarlandı", source: "minna", unit: "31", type: "sentence", pattern: "Vp || N no yotei desu", id: "580" },
    { japanese: "shucchou wa Cebu no yotei desu", meaning: "iş gezisi Cebu'da ayarlandı", source: "minna", unit: "31", type: "sentence", pattern: "Vp || N no yotei desu", id: "581" },
    { japanese: "repooto o mada matomete imasen", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "mada Vte imasen", id: "901" },
    { japanese: "mada yonde imasen kara, wakarimasen", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "mada Vte imasen", id: "902" },
    { japanese: "mada kaite imasen. ashita kakou to omotte imasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "mada Vte imasen", id: "903" },
    { japanese: "mada kimete imasen. kao o mite kara, kimeyou to omotte imasu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "mada Vte imasen", id: "904" },
    { japanese: "kono hon wa mou yomimashita ka / iie, mada yonde imasen", meaning: "bu kitabı çoktan okudun mu? / Hayır hala okumadım", source: "minna", unit: "31", type: "sentence", pattern: "mada Vte imasen", id: "582" },
    { japanese: "mada tabete inai kara, issho ni tabenai?", meaning: "hala yemek yemediğinden, birlikte yiyelim mi?", source: "minna", unit: "31", type: "sentence", pattern: "mada Vte imasen", id: "583" },
    { japanese: "yasumi wa nanyoubi desu ka", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vstem => N", id: "905" },
    { japanese: "kaeri no shinkansen wa doko kara norimasu ka", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vstem => N", id: "906" },
    { japanese: "ano sensei no hanashi wa itsumo omoshiroi desu", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vstem => N", id: "907" },
    { japanese: "donna asobi ga suki desu ka", meaning: "", source: "minna", unit: "31", type: "sentence", pattern: "Vstem => N", id: "908" },
    { japanese: "toukyou ni nai mono ga hitotsu dake aru. Sore wa utsukushii shizen da", meaning: "tokyoda olmayan (eksiklik) bir tanedir. O da güzel doğa (doğal alan).", source: "minna", unit: "31", type: "sentence", pattern: "", id: "584" },
    { japanese: "ii shigoto o mitsukemashita. Kono shigoto ga kyuuryou wa takai desu", meaning: "iyi bir iş buldum. Bu işin maaşı yüksek.", source: "minna", unit: "31", type: "sentence", pattern: "", id: "585" },
    { japanese: "byoin e itta hou ga ii desu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vta hou ga ii desu", id: "909" },
    { japanese: "yakedo o shita n desu / jya, sugu hiyashita hou ga ii desu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vta hou ga ii desu", id: "910" },
    { japanese: "ashi ni kega o shita n desu / jya renshuu o yasunda hou ga ii desu yo", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vta hou ga ii desu", id: "911" },
    { japanese: "natsuyasumi wa hayaku hotero o yoyaku shita hou ga ii desu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vta hou ga ii desu", id: "912" },
    { japanese: "karada ni warui desu kara, tabako o yameta hou ga ii desu", meaning: "sağlığa kötü (zaralı) olduğundan, tütünü bırakman daha iyi olur", source: "minna", unit: "32", type: "sentence", pattern: "Vta hou ga ii desu", id: "587" },
    { japanese: "kinou kara netsu ga tsuduite imasu ka? Byouin e itta hou ga ii desu", meaning: "dünden beri ateşin devam ediyo mu? Hastaneye gitsen daha iyi olur", source: "minna", unit: "32", type: "sentence", pattern: "Vta hou ga ii desu", id: "589" },
    { japanese: "choushi ga warui desu ka?  Muri o shinai hou ga ii desu", meaning: "durumun (halin) kötü mü (kötü mü hissediyosun?) Aşırı çalışmasan daha iyi olur", source: "minna", unit: "32", type: "sentence", pattern: "Vnai hou ga ii desu", id: "590" },
    { japanese: "toshi o tottara, kuruma wa unten shinai hou ga ii desu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vnai hou ga ii desu", id: "913" },
    { japanese: "yoru osoku hitori de arukanai hou ga ii desu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vnai hou ga ii desu", id: "914" },
    { japanese: "chotto karada no choushi ga warui n desu / jya, amari muri o shinai hou ga ii desu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vnai hou ga ii desu", id: "915" },
    { japanese: "ashita ame ga furu deshou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "916" },
    { japanese: "ashita wa hareru deshou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "917" },
    { japanese: "ashita no asa wa kaze ga tsuyoi deshou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "918" },
    { japanese: "8-ji no shinkansen ni maniau deshou ka / ee, michi ga suite imasu kara, tabun maniau deshou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "919" },
    { japanese: "sasakisan wa kyou uchi ni iru deshou ka / iie, nichiyoubi wa itsumo tsuri ni itte imasu kara, tabun inai deshou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "920" },
    { japanese: "kare wa shiai ni deru deshou ka / iie, kega o shimashita kara, denai deshou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "921" },
    { japanese: "yoku benkyou shite imashita kara, kitto goukaku suru deshou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "922" },
    { japanese: "yuugata ni wa ame ga yamu deshou ", meaning: "akşamleyin yağmur duracak gibi (olsasılık)", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "591" },
    { japanese: "gogo wa kaigi desu kara, buchou wa isogashii deshou", meaning: "öğleden sonra toplantı olduğundan, müdür meşgul olur gibi (olasılık)", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "592" },
    { japanese: "ni shuukan no ryokou ni wa goman en ga juubun deshou", meaning: "iki haftalık gezi için elli bin yen yeterli olur gibi (olasılık)", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "593" },
    { japanese: "mikka kan netsu ga tsuduite irun desu ka? İnfuruenza deshou", meaning: "3 gün sürmekte olan ateş mi? İnfluenza olabilir (olasılık)", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "594" },
    { japanese: "densha ni maniau deshou ka", meaning: "trene zmanında varabilecek miyiz acaba?", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "595" },
    { japanese: "zairyou ga tarinai kedo, sore de iin deshou ka", meaning: "malzeme eksik ama, bu iyi olur mu?", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N deshou", id: "596" },
    { japanese: "raishuu toukyou e iku kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "923" },
    { japanese: "kare wa paatii ni konai kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "924" },
    { japanese: "tonari wa karaoke no mise desu ne / ee, urusai kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "925" },
    { japanese: "kaeri no kippu o katte oku n desu ka / ee, komu kamo shiremasen kara, katte okimasu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "926" },
    { japanese: "7-ji no densha ni maniawanai kamo shiremasen kara, hashirimashou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "927" },
    { japanese: "kyoo no gogo ame ga furu kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "928" },
    { japanese: "watashi wa rainen shigoto de yooroppa ni iku kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "929" },
    { japanese: "kyoo wa doyoobi dakara, tomodachi ga kuru kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "930" },
    { japanese: "jimusho wa kurai kara, kare wa moo kaetta kamoshiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "931" },
    { japanese: "moo ma yonaka no 12-ji desu, satoosan wa neta kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "932" },
    { japanese: "kono zasshi wa watashi niwa omoshiroi desu, shikashi anata niwa tsumaranai kamo shiremasen.", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "933" },
    { japanese: "kono kutsu wa watashi niwa choodo ii desu, shikashi otooto niwa ookii kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "934" },
    { japanese: "kono hon wa otona niwa ii keredomo, kodomo niwa warui kamoshiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "935" },
    { japanese: "atama ga itai-kara, kaze kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "936" },
    { japanese: "kono wasuremono wa kare no kasa kamo shiremasen", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "937" },
    { japanese: "3-kagetsu mae wa 50-en deshita, ima wa 100-en kamo shiremasen.", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "938" },
    { japanese: "kaze kamo shiremasen, kaisha o yasunda hoo ga ii desu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "939" },
    { japanese: "chotto souji shimasu, okyakusan kuru kamoshiremasen", meaning: "biraz temizlik yapıyorum, misafir gelebilir (daha düşük olasılık, ola ki)", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "597" },
    { japanese: "kooto o motteikinasu, yuugata ni wa samui kamoshiremasen", meaning: "montumu yanıma alıyorum, akşamleyin soğuk olabilir (daha düşük olsasılık, ola ki)", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "598" },
    { japanese: "densha de ikimasu, chuushajyou ga nai kamoshiremasen", meaning: "trenle gidiyorum, otopark olmayabilir (daha düşük olasılık, ola ki)", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "599" },
    { japanese: "otoosan wa sugoi kibishii kara, dame kamoshiremasen", meaning: "babam acaip sert olduğundan, olmaz sanırım", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "600" },
    { japanese: "serenasan wa anna ni shite iru kara, kitto shiai de katsu deshou", meaning: "serenasan o kadar çok pratik yaptı ki, maçta kesin kazanır sanırım.", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "601" },
    { japanese: "mou jikan desu, sensei wa kuru deshou ka / tabun kuru deshou, tabun kuru to omoimasu", meaning: "zaman doldu, öğretmen gelir mi acaba? belki, gelebilir, belki geleceğini düşünüyorum.", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "602" },
    { japanese: "gomen, repooto o yaranai to ikenai, moshikashitara paatii ni ikenai kamoshiremasen", meaning: "üzgünüm, raporu bitirmezsem olmaz, partiye gelemeyebilirim", source: "minna", unit: "32", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N kamo shiremasen", id: "603" },
    { japanese: "watashi ga nimotsu o hakobimashou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vmashou", id: "940" },
    { japanese: "sorede wa watashi ga kare ni hanashimashou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vmashou", id: "941" },
    { japanese: "koshou kamo shiremasen. chotto shirabemashou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vmashou", id: "942" },
    { japanese: "watashitachi ga tetsudaimashou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Vmashou", id: "943" },
    { japanese: "kare wa futsuka de shigoto o oeta", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Quantifier de", id: "944" },
    { japanese: "1 jikan de shukudai o shimasu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Quantifier de", id: "945" },
    { japanese: "haruyasumi wa gogatsu tooka de owarimasu", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Quantifier de", id: "946" },
    { japanese: "kono hon o gohyaku en de kaimashita", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Quantifier de", id: "947" },
    { japanese: "3 man en de pasokon ga kaemasu ka", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Quantifier de", id: "948" },
    { japanese: "kono ringo wa yon ko (counter) de 2 hyaku en shimashita", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "Quantifier de", id: "949" },
    { japanese: "juuman en de geemingu pasokon ga kaemasu ka", meaning: "on onbin ile oyun bilgisayaru alınabilir mi?", source: "minna", unit: "32", type: "sentence", pattern: "Quantifier de", id: "608" },
    { japanese: "ichi jikan de kuruma o naosemasu ka", meaning: "bir saatte arabayı onarılabilir mi?", source: "minna", unit: "32", type: "sentence", pattern: "Quantifier de", id: "609" },
    { japanese: "100 mai no koopi de tarimasu ka", meaning: "100 adet kopya yeterli midir?", source: "minna", unit: "32", type: "sentence", pattern: "Quantifier de", id: "610" },
    { japanese: "nanika shinpaina koto ga aru n desu ka", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "nanika || itsuka || dokoka", id: "950" },
    { japanese: "itsuka himana toki ni aimashou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "nanika || itsuka || dokoka", id: "951" },
    { japanese: "dokoka shizukana tokoro ni ikimashou", meaning: "", source: "minna", unit: "32", type: "sentence", pattern: "nanika || itsuka || dokoka", id: "952" },
    { japanese: "nani ka shinpaina koto ga arun desu ka", meaning: "endişelendiğin herhangi bir şey var mı?", source: "minna", unit: "32", type: "sentence", pattern: "nanika || itsuka || dokoka", id: "604" },
    { japanese: "dareka shiranai hito ni chokoreeto o moraimashita", meaning: "tanımadığım birsisinden çikolata aldım", source: "minna", unit: "32", type: "sentence", pattern: "nanika || itsuka || dokoka", id: "605" },
    { japanese: "dokoka ii resutoran arimasu ka", meaning: "herhangi biryerde iyi restoran var mı?", source: "minna", unit: "32", type: "sentence", pattern: "nanika || itsuka || dokoka", id: "606" },
    { japanese: "itsuka toukyou ni iru toki, aimashou", meaning: "tokyo'da olduğun herhangi bir zaman buluşalım", source: "minna", unit: "32", type: "sentence", pattern: "nanika || itsuka || dokoka", id: "607" },
    { japanese: "hayaku nero!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "953" },
    { japanese: "okureru na!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "954" },
    { japanese: "naku na!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "955" },
    { japanese: "ashita uchi e koi!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "956" },
    { japanese: "amari nomu na!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "957" },
    { japanese: "nigero!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "958" },
    { japanese: "erebeetaa o tsukau na!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "959" },
    { japanese: "kike!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "960" },
    { japanese: "yasumu na!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "961" },
    { japanese: "ganbare!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "962" },
    { japanese: "makeru na!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "963" },
    { japanese: "tomare!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "964" },
    { japanese: "chuui. kakariin igai hairu na!", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "965" },
    { japanese: "hayaku nero!", meaning: "erken uyu", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "611" },
    { japanese: "koutsuu kisoko o mamore!", meaning: "trafik kurallarına riayet et", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "612" },
    { japanese: "sake o nomuna!", meaning: "alkol içme", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "613" },
    { japanese: "urusai! Sawaguna!", meaning: "çok gürültülü! Gürültü yapmayın!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "614" },
    { japanese: "ashita hima deshou? Uchi e koi yo!", meaning: "yarın müsaitsin? Eve gel ya!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "615" },
    { japanese: "kane o dase yo! Betsu betsu ni haraou!", meaning: "para çıkar ya! Ayrı ayrı ödeyelim!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "616" },
    { japanese: "koko de dame da yo, tabako o suuna", meaning: "burada olmaz ya, sigara içmeyin!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "617" },
    { japanese: "itai! Booru o nageruna yo!", meaning: "acıdı! Topu atma ya!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "618" },
    { japanese: "nigero!", meaning: "koşun! (kaçın!)", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "619" },
    { japanese: "yamero!", meaning: "yeter! Kes şunu! Dur artık!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "620" },
    { japanese: "abunai yo! Hashiruna!", meaning: "tehlikeli ya! Koşmayın!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "621" },
    { japanese: "kowarete imasu! Erebeetaa o tsukauna", meaning: "arızalı! Asansörü kullanmayın!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "622" },
    { japanese: "yasume!", meaning: "dinlenin!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "623" },
    { japanese: "yasumuna!", meaning: "dinlenmeyin! Durmayın!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "624" },
    { japanese: "ganbare!", meaning: "haydi! Jia you!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "625" },
    { japanese: "makeruna!", meaning: "kaybetmeyin! Yenilmeyin!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "626" },
    { japanese: "tomare!", meaning: "dur!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "627" },
    { japanese: "hairuna!", meaning: "don't enter!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "628" },
    { japanese: "supiido otose!", meaning: "hızını azalt!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "629" },
    { japanese: "zenbu tabenasai!", meaning: "hepsini ye!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "630" },
    { japanese: "nenasai!", meaning: "uyu!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "631" },
    { japanese: "shukudai o dashinasai!", meaning: "ödevini teslim et!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "632" },
    { japanese: "suwarinasai!", meaning: "otur!", source: "minna", unit: "33", type: "sentence", pattern: "Imperative || Prohibitive", id: "633" },
    { japanese: "sore wa nan to yomimasu ka / 'jidouhanbaiki' to yomimasu", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", id: "966" },
    { japanese: "tachiiri kinshi' to yomimasu", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", id: "967" },
    { japanese: "sono maaku (mark) ni wa nan to kaite arimasu ka / 'kinen' to kaite arimasu / 'deguchi' to kaite arimasu", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", id: "968" },
    { japanese: "are wa dou iu imi desu ka / yukkuri ike to iu imi desu / kuruma o tomeru na to iu imi desu", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", id: "969" },
    { japanese: "yoyaku wa nan to iu imi desu ka / 'rizabeeshon' to iu imi desu", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", id: "970" },
    { japanese: "kono kanji wa dou iu imi desu ka / 'eigyouchuu' wa mise ga aite iru to iu imi desu", meaning: "bu kanji ne anlama gelir / 'eigyouchuu' dükkan açık anlamına gelir", source: "minna", unit: "33", type: "sentence", pattern: "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", id: "636" },
    { japanese: "shiyoukinshi' dou iu imi desu ka / tsukatte wa ikenai to iu imi desu", meaning: "shiyoukinshi' ne anlama gelir / 'kullanmak yasak' anlamına gelir", source: "minna", unit: "33", type: "sentence", pattern: "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", id: "637" },
    { japanese: "ano kanji nan to yomimasu ka (yomin desu ka) / 'hijouguchi' to yomimasu", meaning: "o kanji nasıl okunur? / 'hijouguchi' diye okunur", source: "minna", unit: "33", type: "sentence", pattern: "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", id: "634" },
    { japanese: "asoko ni nan to kaite arimasu ka / 'honjitsu kyuugyou' to kaite arimasu", meaning: "orada ne yazılı (var) ? / 'honjitsu kyuugyou' yazılı var", source: "minna", unit: "33", type: "sentence", pattern: "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", id: "635" },
    { japanese: "sensei wa nan to itte imashita ka / kanji no shiken wa raishuu no kayoubi da to itte imashita", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Sp to itte imashita", id: "971" },
    { japanese: "sasakisan wa toukyou wa kirei da to itte imashita", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Sp to itte imashita", id: "972" },
    { japanese: "sasakisan wa miitingu ni shusseki dekinai to itte imashita", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Sp to itte imashita", id: "973" },
    { japanese: "shachou wa nan to itte imashita ka / 'ato de kaigi ga atte, seki o hazushimasu' to itte imashita", meaning: "müdür ne söyledi / 'daha sonra bir toplantı var, yerimde olmayacağım (yerimi terkedeceğim)' diye söyledi.", source: "minna", unit: "33", type: "sentence", pattern: "Sp to itte imashita", id: "638" },
    { japanese: "sensei wa nan to itte imashita la / oji san wa mou nakunatta to itte imashita", meaning: "doktor ne söyledi / amcamın (artık, çoktan) öldüğünü söyledi", source: "minna", unit: "33", type: "sentence", pattern: "Sp to itte imashita", id: "639" },
    { japanese: "okaasan ni yoroshiku to tsutaete itadakemasen ka", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "974" },
    { japanese: "tanakasan ni 5-ji ni eki de matte iru to tsutaete itadakemasen ka", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "975" },
    { japanese: "sensei ni kyou wa yakyuu no renshuu ni ikenai to tsutaete itadakemasen ka", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "976" },
    { japanese: "buchou ni hoteru o yoyaku shita to tsutaete itadakemasen ka", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "977" },
    { japanese: "suzuki kachou ni ashita wa tsugou ga warui to tsutaete itadakemasen ka", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "978" },
    { japanese: "kare ni kaigi wa 2-ji kara da to tsutaete itadakemasen ka", meaning: "", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "979" },
    { japanese: "sofia san ni 'ato de denwa o kudasai' to tsutaete itadakimasen ka", meaning: "sofia'ya 'sonra beni ara' diye iletebilir misin lütfen", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "640" },
    { japanese: "minna ni kaigi wa ashita no juu ji da to tsutaete itadakimasen ka", meaning: "herkese toplantı yarın saat 10dadır diye iletebilir misin lütfen", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "641" },
    { japanese: "choushi ga warui no de, kachou ni kyou yasumi to tsutaete itadakimasen ka", meaning: "keyfim biraz kötü olduğundan, bölüm müdürüne bugün izin yapacağımı iletir misin lütfen", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "642" },
    { japanese: "obaachan ni gomen, gogo wa isogashii to tsutaete itadakimasen ka", meaning: "nineme maalesef, öğleden sonra meşgul olduğumu iletebilir misin lütfen", source: "minna", unit: "33", type: "sentence", pattern: "Sp to tsutaete itadakemasen ka", id: "643" },
    { japanese: "watashi ga shita toori ni shite kudasai", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V2", id: "980" },
    { japanese: "sakki kaita toori ni, kanji o kaite kudasai", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V2", id: "981" },
    { japanese: "haisha ni oshiete moratta toori ni, ha o migaite imasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V2", id: "982" },
    { japanese: "ryouri bangumi de mita toori ni, tsukurimashita", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V2", id: "983" },
    { japanese: "hito ga shita toori ni, nandemo suru n desu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V2", id: "984" },
    { japanese: "setsumeisho no toori ni, kagu o kumitatete kudasai", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V2", id: "985" },
    { japanese: "yajirushi no toori ni, itte kudasai", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V2", id: "986" },
    { japanese: "sen no toori ni, kami o kitte kudasai", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V2", id: "987" },
    { japanese: "jikan no toori ni, tsukimashita", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V2", id: "988" },
    { japanese: "watashi ga suru toori ni yatte kudasai ", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V3", id: "644" },
    { japanese: "watashi ga iu toori ni kaite kudasai", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V4", id: "645" },
    { japanese: "haha ni naratta toori ni ryouri o tsukurimashita ", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V5", id: "646" },
    { japanese: "haisha ni oshiete moratta toori ni ha o migaite imasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V6", id: "647" },
    { japanese: "yajirushi no toori ni itte kudasai", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V7", id: "648" },
    { japanese: "sen no toori ni kami o kirimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V8", id: "649" },
    { japanese: "zu no toori ni kami o omimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V9", id: "650" },
    { japanese: "setsumeisho no toori ni kagu o kumitatemasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no toori ni, V10", id: "651" },
    { japanese: "kono toori ni, kaite kudasai", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "kono || sono || ano toori ni", id: "989" },
    { japanese: "gohan o tabeta ato de, ha o migakimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "990" },
    { japanese: "doyoubi shigoto ga owatta ato de, renshuu o shimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "991" },
    { japanese: "atarashii no o katta ato de, nakushita tokei ga mitsukarimashita", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "992" },
    { japanese: "kaimono o shita ato de, eiga o mimashou", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "993" },
    { japanese: "konsaato no ato de, shokuji o shimashou", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "994" },
    { japanese: "jogingu no ato de, shawaa o abimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "995" },
    { japanese: "itsumo shokuji no ato de, koohii o nomimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "996" },
    { japanese: "shigoto no ato de, nomi ni ikimasen ka", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "997" },
    { japanese: "undou shita ato de biiru o nomimashita", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "652" },
    { japanese: "atarashii no o katta ato de nakushita tokei ga mitsukarimashita", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "653" },
    { japanese: "konsaato no ato de shokuji o shimashou", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "654" },
    { japanese: "jogingu no ato de shawa o abimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1ta || N no ato de, V2", id: "655" },
    { japanese: "kasa o motte dekakemasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "998" },
    { japanese: "soosu o tsukete tabemasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "999" },
    { japanese: "satou o irede nomimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "1000" },
    { japanese: "eakon o tsukete nemasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "1001" },
    { japanese: "saikin wa basu ni noranai de, eki made aruite imasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "1002" },
    { japanese: "keeki wa kawanai de, jibun de tsukutte imasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "1003" },
    { japanese: "furui hon wa sutenai de, furii maaketto de urimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "1004" },
    { japanese: "kinou wa dekanai de, uchi de yukkuri yasumimashita", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "1005" },
    { japanese: "shiito beruto o shinai de unten suru koto ga abunai desu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "658" },
    { japanese: "satou o irenai de koohii o nomimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "659" },
    { japanese: "yuube wa nenai de, ikea no atarashii kagu o kumitatemashita", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "660" },
    { japanese: "keeki wa kawanai de, jibun de tsukurimasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "661" },
    { japanese: "reshiito wa sutenai de, atsumete imasu", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "662" },
    { japanese: "kinoo wa doko mo ikanai de uchi de geemu o shimashita", meaning: "", source: "minna", unit: "34", type: "sentence", pattern: "V1te || V1nai de, V2", id: "663" },
    { japanese: "botan o oseba, mado ga hirakimasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1006" },
    { japanese: "kare ga ikeba, watashi mo ikimasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1007" },
    { japanese: "isogeba 9-ji no basu ni maniaimasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1008" },
    { japanese: "aki ni nareba, ki no ha no iro ga kawarimasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1009" },
    { japanese: "kotae ga tadashi kereba, maru o tsukete kudasai", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1010" },
    { japanese: "tsugou ga yo kereba, zehi kite kudasai", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1011" },
    { japanese: "hima nara, tetsudatte kudasai", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1012" },
    { japanese: "konshuu ga dame nara, raishuu wa dou desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1013" },
    { japanese: "hokkaido ryokou nara, 6 gatsu ga ii desu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1014" },
    { japanese: "ashita ame nara, ikimasen", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1015" },
    { japanese: "kusuri o nomana kereba, naorimasen", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1016" },
    { japanese: "megane o kakena kereba, jisho no ji ga yomemasen", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1017" },
    { japanese: "aki ni nareba, ki no ha no iro ga kawarimasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "664" },
    { japanese: "michi ga dekireba, mura no seikatsu wa motto benri ni narimasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "665" },
    { japanese: "tabeteba, suki ni naru kamoshirenai", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "666" },
    { japanese: "minna san wa hayaku kureba, kuu ji no denja ni maniau deshou ", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "667" },
    { japanese: "kotae ga tadashii kereba, maru o tsukete kudasai", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "668" },
    { japanese: "tenki ga yo kereba, okujyou kara fujisan ga miemasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "669" },
    { japanese: "kono houhou ga dame nara, ano houhou de yarimashou", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "670" },
    { japanese: "25 meetoru gurai nara oyogimasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "671" },
    { japanese: "kyou nimotsu ga tsukana kereba, sugu renraku shite ne", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "672" },
    { japanese: "isogashi kuna kereba, chotto hanashite mo ii desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "673" },
    { japanese: "kirei de na kereba (kire ja na kereba), mou ikkai aratte ne", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "674" },
    { japanese: "muryou de na kereba (muryou ja na kereba), hoshikunai desu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "675" },
    { japanese: "onsen ni ikitai n desu ga, doko ga ii desu ka / onsen nara, hakuba ga ii desu yo", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1022" },
    { japanese: "suihanki o kaitai n desu ga / suihanki nara, pawaa denki no ga ii desu yo", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1023" },
    { japanese: "hanami ni ikou to omotte iru n desu ga / hanami nara, yoshino yama ga ii desu yo", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1024" },
    { japanese: "pasokon kyoushitsu o sagashite iru n desu ga / pasokon kyoushitsu nara, 'IMC pasokon kyoushitsu' ga ii desu yo", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", id: "1025" },
    { japanese: "kaado ga denai n desu ga… / akai botan o osu to, kaado ga demasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "676" },
    { japanese: "akai botan o oseba, kaado ga demasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "677" },
    { japanese: "jikan ga nakattara, tabemasen", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "678" },
    { japanese: "jikan ga nakereba, tabemasen", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "679" },
    { japanese: "isogashi kunakattara, kite kudasai", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "680" },
    { japanese: "wakaranakattara, kiite kudasai", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "681" },
    { japanese: "onsen nara, hakuba ga ii desu yo", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "682" },
    { japanese: "kono ongaku o kikeba, kiku houdo suki narimasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "687" },
    { japanese: "ninniku o takusan ireba ireru houdo oishi to omoimasu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "688" },
    { japanese: "kikai wa botan ga sukuna kereba, sukunai houdo ii desu", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "conditional", id: "689" },
    { japanese: "kabuki o mitai n desu ga, dou sureba ii desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba ii desu ka", id: "1018" },
    { japanese: "kimono o karitai n desu ga, doko e ikeba ii desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba ii desu ka", id: "1019" },
    { japanese: "kono hon wa dare ni kaeseba ii desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba ii desu ka", id: "1020" },
    { japanese: "tomodachi ga kekkon suru n desu ga, donna mono o agereba ii desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba ii desu ka", id: "1021" },
    { japanese: "yarikata ga wakaranain desu ga, dou sureba ii desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba ii desu ka", id: "683" },
    { japanese: "kopii ki wa kami ga nain desu ga, dare ni ieba ii desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba ii desu ka", id: "684" },
    { japanese: "osou shiki ni ikun desu ga, nani o motte ikeba ii desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba ii desu ka", id: "685" },
    { japanese: "tomodachi ga kekkon surun desu ga, donna mono o agereba ii desu ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "Vba ii desu ka", id: "686" },
    { japanese: "biyouin o sagashite iru n desu ga, dokoka ii tokoro wa arimasen ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "…wa arimasen ka", id: "1026" },
    { japanese: "ryokou o shiyou to omotte iru n desu ga, dokoka ii tokoro wa arimasen ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "…wa arimasen ka", id: "1027" },
    { japanese: "kono kamera wa taka sugimasu. motto yasui no wa arimasen ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "…wa arimasen ka", id: "1028" },
    { japanese: "kore wa ooki sugimasu. motto chiisai no wa arimasen ka", meaning: "", source: "minna", unit: "35", type: "sentence", pattern: "…wa arimasen ka", id: "1029" },
    { japanese: "shiai ni derareru you ni, mainichi renshuu shite imasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni, V", id: "1031" },
    { japanese: "yoku mieru you ni, mae no hou ni suwarimashou", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni, V", id: "1032" },
    { japanese: "kaze ga naoru you ni, hayaku nemasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni, V", id: "1033" },
    { japanese: "minna ga tanoshimeru you ni, chokoreeto o agemashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni, V", id: "1034" },
    { japanese: "watashi ga wakaru you ni. sasakisan wa yukkuri nihongo o hanashite kuremashita.", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni, V", id: "1035" },
    { japanese: "wasurenai you ni, memo shimasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni, V", id: "1036" },
    { japanese: "michi o machigaenai you ni, chizu o motte ikimashou", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni, V", id: "1037" },
    { japanese: "toshi o totte kara, komaranai you ni, chokin shimasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni, V", id: "1038" },
    { japanese: "tabemono ga kusuranai you ni, reizouko ni irete oite kudasai", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni, V", id: "1039" },
    { japanese: "yatto jitensha ni noreru you ni narimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni narimasu", id: "1040" },
    { japanese: "kanji ga yomemasu ka / hai, san-byaku gurai yomeru you ni narimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni narimasu", id: "1041" },
    { japanese: "terebi no nihongo ga kanari wakaru you ni narimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni narimasu", id: "1042" },
    { japanese: "oosaka-ben ga wakarimasu ka / hai, sukoshi wakaru you ni narimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni narimasu", id: "1043" },
    { japanese: "katakana ga kakemasu ka / hai, hotondo kakeru you ni narimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni narimasu", id: "1044" },
    { japanese: "mainichi, yasai o taberu you ni narimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni narimasu", id: "1045" },
    { japanese: "mukashi wa uchuu e daremo ikemasen deshita ga, ima wa ikeru you ni narimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni narimasu", id: "1046" },
    { japanese: "hyaku meetoru oyogeru you ni narimashita ka / iie, mada oyogemasen. hayaku oyogeru you ni naritai desu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni narimasu", id: "1047" },
    { japanese: "nihongo no shinbun ga yomeru you ni narimashita ka / iie, mada yomemasen. hayaku yomeru you ni naritai desu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni narimasu", id: "1048" },
    { japanese: "mainichi nikki o kaku you ni shite imasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1049" },
    { japanese: "dekirudake maiban kuu-ji made ni neru you ni shite imasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1050" },
    { japanese: "mainichi undou shite, nandemo taberu you ni shite imasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1051" },
    { japanese: "ha ni warui desu kara, amai mono o tabenai you ni shite imasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1052" },
    { japanese: "dekirudake muri o shinai you ni shite imasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1053" },
    { japanese: "dekirudake iranai mono wa kawanai you ni shite imasu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1054" },
    { japanese: "tsukatta mono wa kanarazu moto no tokoro ni modosu you ni shite kudasai", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1055" },
    { japanese: "yoru jyuu ichi-ji o sugitara, sentaku shinai you ni shite kudasai", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1056" },
    { japanese: "tomodachi no uchi ni tomaru toki wa, kanarazu renraku suru you ni shite kudasai", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1057" },
    { japanese: "zettai ni pasupooto o nakusanai you ni shite kudasai", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Vp you ni shimasu", id: "1058" },
    { japanese: "kinou watashi wa toshokan de shizuka ni nihongo o benkyou shimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Adj-i => Ajd-ku || Adj-na => Adj-ni", id: "1059" },
    { japanese: "hayaku jouzu ni ocha ga taterareru you ni naritai desu", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Adj-i => Ajd-ku || Adj-na => Adj-ni", id: "1060" },
    { japanese: "kodomo ga neteiru kara, shizuka ni hana shite kudasai", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Adj-i => Ajd-ku || Adj-na => Adj-ni", id: "1061" },
    { japanese: "shousetsu ga omoshiroku narimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Adj-i => Ajd-ku || Adj-na => Adj-ni", id: "1062" },
    { japanese: "nimotsu ga omoku narimashita", meaning: "", source: "minna", unit: "36", type: "sentence", pattern: "Adj-i => Ajd-ku || Adj-na => Adj-ni", id: "1063" },
    { japanese: "watashi wa kachou ni yobaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni Vpassive", id: "1064" },
    { japanese: "watashi wa sasakisan ni eiga ni sasowaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni Vpassive", id: "1065" },
    { japanese: "watashi wa imouto ni tomodachi o shoukai saremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni Vpassive", id: "1066" },
    { japanese: "watashi wa chichi ni kaimono o tanomaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni Vpassive", id: "1067" },
    { japanese: "watashi wa yamadasan ni kabuki ni tsuite shitsumon saremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni Vpassive", id: "1068" },
    { japanese: "watashi wa inu ni kamaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni Vpassive", id: "1069" },
    { japanese: "wastashi wa mushi ni sasaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni Vpassive", id: "1070" },
    { japanese: "chichi wa dorobou ni tokei o nusumaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni N o Vpassive", id: "1071" },
    { japanese: "dorobou ga watashi no kamera o torimashita / watashi wa dorobou ni kamera o toraremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni N o Vpassive", id: "1072" },
    { japanese: "densha no tonari no hito ga watashi no ashi o fumimashita / watashi wa densha de tonari no hito ni ashi o fumaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni N o Vpassive", id: "1073" },
    { japanese: "watashi wa kodomo ni fuku o yogosaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni N o Vpassive", id: "1074" },
    { japanese: "watashi wa otouto ni pasokon o kowasaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni N o Vpassive", id: "1075" },
    { japanese: "watashi wa kare ni nimotsu o shiraberaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N wa N ni N o Vpassive", id: "1076" },
    { japanese: "1936-nen ni kokkai gijidou ga tateraremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N ga || wa Vpassive", id: "1077" },
    { japanese: "1964-nen ni toukyou de orinpikku ga okonawaremashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N ga || wa Vpassive", id: "1078" },
    { japanese: "oosaka de tenrankai ga hirakaremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N ga || wa Vpassive", id: "1079" },
    { japanese: "kono bijutsukan wa raigetsu kowasaremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N ga || wa Vpassive", id: "1080" },
    { japanese: "kono kuruma wa doko e yushutsu saremasu ka / sekaiju e yushutsu saremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N ga || wa Vpassive", id: "1081" },
    { japanese: "tsugi no kaigi wa doko de hirakaremasu ka / koobe de hirakaremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N ga || wa Vpassive", id: "1082" },
    { japanese: "wain wa budou kara tsukuraremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N kara || de tsukuraremasu", id: "1083" },
    { japanese: "pan wa komugi kara tsukuraremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N kara || de tsukuraremasu", id: "1084" },
    { japanese: "toufu wa daizu kara tsukuraremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N kara || de tsukuraremasu", id: "1085" },
    { japanese: "nihonshu wa kome kara tsukuraremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N kara || de tsukuraremasu", id: "1086" },
    { japanese: "onigiri wa kome de tsukuraremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N kara || de tsukuraremasu", id: "1087" },
    { japanese: "kono osara wa garasu de tsukuraremasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N kara || de tsukuraremasu", id: "1088" },
    { japanese: "biru wa mugi kara tsukuraremasu / kore ga genryou no mugi desu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N kara || de tsukuraremasu", id: "1089" },
    { japanese: "petto no inu ga shinimashita", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N no N", id: "1090" },
    { japanese: "musuko no hansu desu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "N no N", id: "1091" },
    { japanese: "ginkou wa ano tatemono no naka desu / ano naka ni hairemasu ka", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "kono || sono || ano no N", id: "1092" },
    { japanese: "shinbun wa ano hon no shita desu / shinbun wa ano shita desu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "kono || sono || ano no N", id: "1093" },
    { japanese: "kono naka ni tamago ga arimasu", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "kono || sono || ano no N", id: "1094" },
    { japanese: "ano shita ni nani ga arimasu ka", meaning: "", source: "minna", unit: "37", type: "sentence", pattern: "kono || sono || ano no N", id: "1095" },
    { japanese: "gasurin sutando de tabako o suu no wa abunai desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vd no wa Adj desu", id: "1096" },
    { japanese: "nihon ni sumu no wa benri desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vd no wa Adj desu", id: "1097" },
    { japanese: "basuketto booru o suru no wa tanoshii desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vd no wa Adj desu", id: "1098" },
    { japanese: "gaikoku go o oboeru no wa muzukashii desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vd no wa Adj desu", id: "1099" },
    { japanese: "kudamono o taberu no ga suki desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vd no ga suki || kirai  || jouzu ||  heta", id: "1100" },
    { japanese: "kanojo wa sakkaa o suru no ga jouzu desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vd no ga suki || kirai  || jouzu ||  heta", id: "1101" },
    { japanese: "mainichi undou suru no ga kirai desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vd no ga suki || kirai  || jouzu ||  heta", id: "1102" },
    { japanese: "nihongo no uta o utau no ga heta desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vd no ga suki || kirai  || jouzu ||  heta", id: "1103" },
    { japanese: "haha wa nihongo o hanasu no ga totemo hayai desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vd no ga suki || kirai  || jouzu ||  heta", id: "1104" },
    { japanese: "kazoku de ichiban kireina no wa haha desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  no wa N desu", id: "1105" },
    { japanese: "disneyland ni ikitai no wa musume desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  no wa N desu", id: "1106" },
    { japanese: "nihon de ichiban samui no wa hokkaido desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  no wa N desu", id: "1107" },
    { japanese: "nihongo no shiken o uketa no wa kyonen deshita", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  no wa N desu", id: "1108" },
    { japanese: "kono tegami o kaita no wa johnsan desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N-na  no wa N desu", id: "1109" },
    { japanese: "kanji o yomuno wa muzukashii desu. oboeru no mo muzukashi desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no mo", id: "1110" },
    { japanese: "basuketto booru o suru no wa omoshiroi desu. miru no mo omoshiroi desu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no mo", id: "1111" },
    { japanese: "nihon de hataraku no wa watashi no yume desu. sumu no mo watashi no yume desu.", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no mo", id: "1112" },
    { japanese: "kare ga shiken ni goukaku shita no o kikimashita", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no o VofPerception", id: "1113" },
    { japanese: "kanojoo ga naite iru no o mimashita", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no o VofPerception", id: "1114" },
    { japanese: "kanojoo no shinzou ga dokidoki suru no o kanjimashita", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no o VofPerception", id: "1115" },
    { japanese: "soto ni iru tomodachi ga te o furu no ga miemasu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no ga miemasu || kikoemasu", id: "1116" },
    { japanese: "oogoe de tasuke o yobu no ga kikoemasu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no ga miemasu || kikoemasu", id: "1117" },
    { japanese: "pasupooto o motteiku no o wasuremashita ", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no o wasuremasu", id: "1118" },
    { japanese: "juusho o  kaku no o wasurenaide kudasai", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no o wasuremasu", id: "1119" },
    { japanese: "tamago o kau no o wasuremashita", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no o wasuremasu", id: "1120" },
    { japanese: "shachou ga kuru no o shitte imasu ka", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no o shitte imasu ka", id: "1121" },
    { japanese: "ashita yuki ga furu no o shitte imasu ka / iie, shirimasen || hai, shitte imasu", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "Vp no o shitte imasu ka", id: "1122" },
    { japanese: "paatii o suru toki no shashin o okutte kudasai", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "toki ni || ya || no || mo || kara || …", id: "1123" },
    { japanese: "unten o suru toki ni shiito beruto o tsukena kereba narimasen", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "toki ni || ya || no || mo || kara || …", id: "1124" },
    { japanese: "nihon ni tsuita toki kara, tomodachi ni mada atte imasen", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "toki ni || ya || no || mo || kara || …", id: "1125" },
    { japanese: "nakitai toki mo atta", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "toki ni || ya || no || mo || kara || …", id: "1126" },
    { japanese: "kaze o hi ita toki ya dekakeru toki wa masuku o shite kudasai", meaning: "", source: "minna", unit: "38", type: "sentence", pattern: "toki ni || ya || no || mo || kara || …", id: "1127" },
    { japanese: "mou nihon ni iru no o kiite bikkuri shimashita", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", id: "1128" },
    { japanese: "nihongo no shiken ni goukaku shite anshin shimashita", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", id: "1129" },
    { japanese: "youji ni maniawana kute komatte iru", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", id: "1130" },
    { japanese: "shiai ni katta no o kiite ureshii desu", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", id: "1131" },
    { japanese: "kibun ga waru kute paatii ni ikemasen", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", id: "1132" },
    { japanese: "sono mondai wa fukuzatsu rikai dekimasen deshita", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", id: "1133" },
    { japanese: "kono kouen wa sema kute asobenai", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", id: "1134" },
    { japanese: "juutai de chikoku shimashita", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "N de…", id: "1135" },
    { japanese: "taifuu de kaerenai desu", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "N de…", id: "1136" },
    { japanese: "hikouki no jiko de ooku no hito ga shibou shimashita", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "N de…", id: "1137" },
    { japanese: "kaji de inu ga shinimashita", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "N de…", id: "1138" },
    { japanese: "kouzui de kuruma ga kowareta", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "N de…", id: "1139" },
    { japanese: "youjiga aru no de hayaku kaerana kereba narimasen", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N na no de", id: "1140" },
    { japanese: "kin en na no de koko de tabako o suwanai de kudasai", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N na no de", id: "1141" },
    { japanese: "ame ga futte iru no de dekakenai desu", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N na no de", id: "1142" },
    { japanese: "ashita haha no tanjoubina no de keeki o katte agemasu", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N na no de", id: "1143" },
    { japanese: "atsui no de mado o akete itadakemasen ka", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vp || Adj-i  || Adj-na || N na no de", id: "1144" },
    { japanese: "shiken wa nan ji ni hajimaru ka, sensei ni kikou", meaning: "", source: "minna", unit: "39", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N ka, … ", id: "1146" },
    { japanese: "tomodachi ni itsu hima ka kikareta", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N ka, … ", id: "1147" },
    { japanese: "kore wa dare no kaban ka wakarimasen", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N ka, … ", id: "1148" },
    { japanese: "douyatte raamen o tsukuru ka haha ni oshiete moraimashita", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N ka, … ", id: "1149" },
    { japanese: "doko ni sunde iru ka oshiete moo ii desu ka", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N ka, … ", id: "1150" },
    { japanese: "dekiru kadouka, wakarimasen", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", id: "1151" },
    { japanese: "watashi no kotae wa tadashii kadouka, oshiete kudasai", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", id: "1152" },
    { japanese: "kare wa dokujin kadouka, shiritai desu", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", id: "1153" },
    { japanese: "kono eiga wa omoshiroi kadouka, mite mimashou", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", id: "1154" },
    { japanese: "kaeru kadouka, kangaete iru", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", id: "1155" },
    { japanese: "kaigai de hataraite mimasu", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vte mimasu", id: "1156" },
    { japanese: "kono keeki wa oishii kadou ka, tabete mite kudasai", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vte mimasu", id: "1157" },
    { japanese: "atarashii konpyutaa o tsukatte mite mo ii desu ka", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vte mimasu", id: "1158" },
    { japanese: "nihon no tabemono o tsukutte mimashou", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vte mimasu", id: "1159" },
    { japanese: "nihongo de hanashite mitai desu", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Vte mimasu", id: "1160" },
    { japanese: "kono nimotsu no omosa wa 50 kiro desu", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Adj-i => Adj-sa", id: "1161" },
    { japanese: "anata no yasashisa ga suki desu", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Adj-i => Adj-sa", id: "1162" },
    { japanese: "kono keshiki no utsukushisa o anata ni tsutaetai desu", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Adj-i => Adj-sa", id: "1163" },
    { japanese: "tonneru ni wa takasa seigen ga arimasu", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Adj-i => Adj-sa", id: "1164" },
    { japanese: "kono ryouri no oishisa wa kotoba ni suru koto ga dekimasen", meaning: "", source: "minna", unit: "40", type: "sentence", pattern: "Adj-i => Adj-sa", id: "1165" },
    { japanese: "kinou watashi wa hana ni mizu o yarimashita", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "N ni N o yarimasu", id: "1167" },
    { japanese: "musume ni kono atarashii kaban o yarimasu (agemasu)", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "N ni N o yarimasu", id: "1168" },
    { japanese: "gakusei wa sensei ni purezento o sashi agemashita", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "N ni N o yarimasu", id: "1169" },
    { japanese: "okyaku sama ni nengajyou o itadakimashita", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "N ni N o itadakimasu", id: "1170" },
    { japanese: "kyou jyushi ni kyuuryou o itadakimasu", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "N ni N o itadakimasu", id: "1171" },
    { japanese: "watashi wa neko ni esa o katte yarimasu", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "N ni N o itadakimasu", id: "1172" },
    { japanese: "watashi wa musume ni uta o utatte yarimasu", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "N ni N o itadakimasu", id: "1173" },
    { japanese: "sensei ni watashi no tanjyou kaini kite itadakimashita", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "Vte itadakimasu", id: "1174" },
    { japanese: "watashi wa kachou ni kaisha no ruuru o setsumei shite itadakimashita", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "Vte itadakimasu", id: "1175" },
    { japanese: "sensei wa watashi ni nihongo o oshiete kudasaimashita", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "Vte kudasaimasu", id: "1176" },
    { japanese: "kachou wa watashi o hounenkai ni shoutai shite kudasaimashita", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "Vte kudasaimasu", id: "1177" },
    { japanese: "kono kanji no kakikata o oshiete kudasaimasen ka", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "Vte kudasaimasu", id: "1178" },
    { japanese: "mou ichido setsumei shite kudasaimasen ka", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "Vte kudasaimasu", id: "1179" },
    { japanese: "toukyou ni itta toki, omiyage ni kono shatsu o kaimashita", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "N ni V", id: "1180" },
    { japanese: "otto ga kinenbi no oiwai ni yubiwa o kuremashita", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "N ni V", id: "1181" },
    { japanese: "", meaning: "", source: "minna", unit: "41", type: "sentence", pattern: "", id: "1182" },
    { japanese: "tiimu no tame ni, kyouryoku shina kereba naranai", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no tame ni, …", id: "1183" },
    { japanese: "shourai no tame ni, chokin shimasu", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no tame ni, …", id: "1184" },
    { japanese: "shiken ni goukaku suru tame ni, benkyou o ganbaritai desu", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no tame ni, …", id: "1185" },
    { japanese: "nihon de hataraku tame ni, nihongo o benkyou shinakereba narimasen", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no tame ni, …", id: "1186" },
    { japanese: "nihon de hatarakeruyou ni, nihongo o benkyou shinakereba narimasen", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no tame ni, …", id: "1187" },
    { japanese: "soko e iku no ni donogurai kakarimasu ka", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no ni, …", id: "1188" },
    { japanese: "kono suteeki o taberu no ni, naifu to fooku o tsukatte kudasai", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no ni, …", id: "1189" },
    { japanese: "youfuku kau no ni, okane o tamemashita", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no ni, …", id: "1190" },
    { japanese: "kono jisho wa benkyou ni benri desu", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no ni, …", id: "1191" },
    { japanese: "kuruma wa watashi no tsuukin ni hitsuyou desu", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Vd || N no ni, …", id: "1192" },
    { japanese: "nihon ni iku no ni juu hon en wa hitsuyou desu", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Quantifier wa", id: "1193" },
    { japanese: "atarashii kuruma o kau no ni nihyaku hon en mo hitsuyou kamoshiremasen", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Quantifier mo", id: "1194" },
    { japanese: "kouen de tomodachi o ni jikan mo machimashita", meaning: "", source: "minna", unit: "42", type: "sentence", pattern: "Quantifier mo", id: "1195" },
    { japanese: "kanojo ga naki sou desu", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1196" },
    { japanese: "konkai wa karera ga shiai ni kachi sou desu ne", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1197" },
    { japanese: "kuruma no ushiro ni atari sou desu", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1198" },
    { japanese: "kanojo wa jibun no jinsei ni manzoku sou desu", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1199" },
    { japanese: "tomodachi ga katta kuruma wa benri sou desu", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1200" },
    { japanese: "kono suteeki wa oishi sou desu", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1201" },
    { japanese: "kare wa waka sou desu", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1202" },
    { japanese: "sono ringo wa oishi sou desu ne / ee kono ringo wa totemo oishii desu yo.", meaning: "şu elma lezzetli gibi. Evet, bu elma çok lezzetlidir.", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1203" },
    { japanese: "kyoo anata wa totemo tanoshi sou desu ne / ee, konban paatii ga arimasu.", meaning: "bugün çok neşeli gibi. Evet, bu akşam parti var.", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1204" },
    { japanese: "kare wa itsumo kanashi sou desu ne / ee, kare wa itsumo okane ga arimasen.", meaning: "o her zaman üzgün gibi. Evet, onun her zaman parası yoktur.", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1205" },
    { japanese: "sono jisho wa totemo muzukashi sou desu ne / ee, kono jisho wa furui kanji no jisho desu.", meaning: "şu sözlük zor gibi görünüyor. Evet, bu sözlük eski kanjinin sözlüğüdür.", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1206" },
    { japanese: "kono hon wa yosa sou desu ne / ee, kono hon wa totemo ii hon desu.", meaning: "bu kitap iyi gibi. Evet bu kitap çok iyi kitaptır.", source: "minna", unit: "43", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", id: "1207" },
    { japanese: "konbini de pan o katte kimasu", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vte kimasu", id: "1208" },
    { japanese: "nani mo shite inai kara, kouen o sanpo shite kimasu ne", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vte kimasu", id: "1209" },
    { japanese: "doko e iku n desu ka / kuruma no naka ni saifu o wasureta no de chotto totte kuru", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vte kimasu", id: "1210" },
    { japanese: "gakkou e itte kimasu", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vte kimasu", id: "1211" },
    { japanese: "chotto dekakete kimasu", meaning: "", source: "minna", unit: "43", type: "sentence", pattern: "Vte kimasu", id: "1212" },
    { japanese: "tabe sugita kara onaka ga itai desu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", id: "1214" },
    { japanese: "shiken wa kantan sugimasu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", id: "1215" },
    { japanese: "tabako o sui sugiru to byouki ni naru yo", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", id: "1216" },
    { japanese: "okachan wa kawai sugiru", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", id: "1217" },
    { japanese: "tomodachi ga katta kuruma wa taka sugiru", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", id: "1218" },
    { japanese: "sono kutsu wa watashi ni wa ookii sugiru yo", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", id: "1219" },
    { japanese: "chichi wa hataraki sugimasu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", id: "1220" },
    { japanese: "kono keitai denwa wa tsukai yasui desu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem yasui desu || nikui desu", id: "1221" },
    { japanese: "kinou watashi ga tsukutta keeki wa tsukuri yasui desu ", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem yasui desu || nikui desu", id: "1222" },
    { japanese: "kanojo no setsumei wa wakari yasui desu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem yasui desu || nikui desu", id: "1223" },
    { japanese: "kuruma ga nakatta ra, inaka ni sumi nikui desu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem yasui desu || nikui desu", id: "1224" },
    { japanese: "kanji wa oboe nikui desu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Vstem yasui desu || nikui desu", id: "1225" },
    { japanese: "okachan ga nete iru no de, terebi no oto o chiisaku shimasu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Adj-i => Adj ku|| Adj-na => Adj ni  || N ni shimasu", id: "1226" },
    { japanese: "heya ni hana o kazatte kirei ni shimasu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Adj-i => Adj ku|| Adj-na => Adj ni  || N ni shimasu", id: "1227" },
    { japanese: "nomimono wa nani ni shimasu ka / koohii ni shimasu", meaning: "", source: "minna", unit: "44", type: "sentence", pattern: "Adj-i => Adj ku|| Adj-na => Adj ni  || N ni shimasu", id: "1228" },
    { japanese: "kaji no baai wa, hijouguchi o tsukatte kudasai", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N no baai wa", id: "1229" },
    { japanese: "kikenna baai wa, keisatsu o yonde kudasai", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N no baai wa", id: "1230" },
    { japanese: "kaigi ni sanka dekinai baai wa, hayaku renraku shinakereba narimasen", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N no baai wa", id: "1231" },
    { japanese: "shigoto ni ou hoshitai baai wa, watashi ni chokusetsu rirekisho o okutte mo ii desu", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N no baai wa", id: "1232" },
    { japanese: "zairyuu kaado o nakushita baai wa, sugu nyuukoku kanrikyoku ni renraku shite kudasai", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N no baai wa", id: "1233" },
    { japanese: "yuusou no baai wa, kitte o haritsukete, kono juusho ni okutte kudasai", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N no baai wa", id: "1234" },
    { japanese: "takusan benkyou shita no ni, shiken ni shippai shita", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N na no ni …", id: "1235" },
    { japanese: "ie wa chikai no ni, itsumo okurete iru ne", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N na no ni …", id: "1236" },
    { japanese: "kyou wa shukujitsuna no ni, shigoto ni ikanai to imasen", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N na no ni …", id: "1237" },
    { japanese: "kare ni soto ni ikanai to itta no ni, dekaketa", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N na no ni …", id: "1238" },
    { japanese: "konpyuutaa wa atarashii no ni, mou kowaremashita", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N na no ni …", id: "1239" },
    { japanese: "daietto shite iru no ni, yasenai ", meaning: "", source: "minna", unit: "45", type: "sentence", pattern: "Vp || Adj-i || Adj-na || N na no ni …", id: "1240" },
    { japanese: "kanojo ga kita toki ni dekakeru tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vd tokoro desu", id: "1241" },
    { japanese: "ima kara shiken wa hajimaru tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vd tokoro desu", id: "1242" },
    { japanese: "watashi wa supaa e kudamono o kaini iku tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vd tokoro desu", id: "1243" },
    { japanese: "jonsan wa repooto o kaku tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vd tokoro desu", id: "1244" },
    { japanese: "ima jonsan wa repooto o kaite iru tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vte iru tokoro", id: "1245" },
    { japanese: "ima unten shite iru tokoro desu kara, juuppun go ni denwa o kakena oshite mo ii desu ka", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vte iru tokoro", id: "1246" },
    { japanese: "haha ni tanjoubi no puresento wa nani o kau ka ima kangaete iru tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vte iru tokoro", id: "1247" },
    { japanese: "shukudai wa mou owarimashita ka / iie, mada desu. ima shite iru tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vte iru tokoro", id: "1248" },
    { japanese: "tattaima jonsan wa repooto o kaita tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vta tokoro desu", id: "1249" },
    { japanese: "chichi wa choudoima kaetta tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vta tokoro desu", id: "1250" },
    { japanese: "kuukou ni tsuita tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vta tokoro desu", id: "1251" },
    { japanese: "sensei ni messaiji o (message) tsutaeta tokoro desu ", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vta tokoro desu", id: "1252" },
    { japanese: "konbini de obentou o katta tokoro desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vta tokoro desu", id: "1253" },
    { japanese: "sengetsu kuruma o katta bakari desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vta bakari desu", id: "1254" },
    { japanese: "nakayamasan wa atarashii ie ni hikko shita bakari desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vta bakari desu", id: "1255" },
    { japanese: "senshuu kaetta bakari no ni, mada kono shuumatsu ni kaeritai desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", id: "1256" },
    { japanese: "kinou kanojo wa taiin shita bakarina no de, kyou konai hazu desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", id: "1257" },
    { japanese: "raishuu nihonjin no tomodachi wa fuiripin ni iku hazu desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", id: "1258" },
    { japanese: "kinou takusan benkyou shimashita kara, kyou no kuizu wa kantanna hazu desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", id: "1259" },
    { japanese: "sono kuruma wa toyota no saishin moderuna no de, takai hazu desu", meaning: "", source: "minna", unit: "46", type: "sentence", pattern: "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", id: "1260" },
    { japanese: "ashita wa yuki ga furu sou desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", id: "1261" },
    { japanese: "taifu wa konai sou desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", id: "1262" },
    { japanese: "kinou hidoi jiko ga atta sou desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", id: "1263" },
    { japanese: "kega o shita hito wa inakatta sou desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", id: "1264" },
    { japanese: "kotoshi wa natsu ga mijikai sou desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", id: "1265" },
    { japanese: "sapporo no yuki matsuri wa kirei da sou desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", id: "1266" },
    { japanese: "ashita no tenki wa kumori da sou desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", id: "1267" },
    { japanese: "konsaato ga hajimaru you desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na || N no sou desu", id: "1268" },
    { japanese: "kachou wa jimusho ni inai you desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na || N no sou desu", id: "1269" },
    { japanese: "kinou no ban ame ga futta you desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na || N no sou desu", id: "1270" },
    { japanese: "tawapon san wa shiken ni goukaku shinakatta you desu ", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na || N no sou desu", id: "1271" },
    { japanese: "soto wa samui you desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na || N no sou desu", id: "1272" },
    { japanese: "buchou wa amai mono ga sukina you desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na || N no sou desu", id: "1273" },
    { japanese: "ogawa san no hanashi wa hontou no you desu", meaning: "", source: "minna", unit: "47", type: "sentence", pattern: "Vplain || Adj-i || Adj-na || N no sou desu", id: "1274" },
    { japanese: "buchou wa mirasan o amerika e shucchou sasemashita", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsemasu", id: "1275" },
    { japanese: "satousan o kaigi ni shusseki sasemashita", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsemasu", id: "1276" },
    { japanese: "watashi wa kodomo ni hon o yomasemasu", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsemasu", id: "1277" },
    { japanese: "watashi wa otouto ni jibun no heya o souji sasemasu", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsemasu", id: "1278" },
    { japanese: "watashi wa musuko o sukina hito kekkon sasemashita", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsemasu", id: "1279" },
    { japanese: "watashi wa musume o ikitai daigaku ni ikasemashita", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsemasu", id: "1280" },
    { japanese: "watashi wa kodomo ni sukina shigoto o sasemasu", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsemasu", id: "1281" },
    { japanese: "watashi wa musuko o hoshii mono o kawasemasu", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsemasu", id: "1282" },
    { japanese: "sumimasen ga, ashita yasumasete itadakemasen ka", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsete itadakemasen", id: "1283" },
    { japanese: "sumimasen ga, kono shiryou o kopii sasete itadakemasen ka", meaning: "", source: "minna", unit: "48", type: "sentence", pattern: "Vsete itadakemasen", id: "1284" },
    { japanese: "itou sensei wa sakki koraremashita", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "Vremasu", id: "1285" },
    { japanese: "itou sensei wa ashita wa yasumaremasu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "Vremasu", id: "1286" },
    { japanese: "shachou wa odekake ni narimashita", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "Vremasu", id: "1287" },
    { japanese: "shachou wa okaeri ni narimashita", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "Vremasu", id: "1288" },
    { japanese: "ikimasu || kimasu || imasu => irasshaimasu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1289" },
    { japanese: "tabemasu || nomimasu => meshiagarimasu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1290" },
    { japanese: "iimasu => osshaimasu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1291" },
    { japanese: "shitte imasu => gozonjidesu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1292" },
    { japanese: "mimasu => goran ni narimasu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1293" },
    { japanese: "shimasu => nasaimasu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1294" },
    { japanese: "kuremasu => kudasaimasu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1295" },
    { japanese: "shachou wa kaigishitsu ni irasshaimasu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1296" },
    { japanese: "shachou wa gorufu o nasaimasu", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1297" },
    { japanese: "okake kudasai", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1298" },
    { japanese: "ohairi kudasai", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1299" },
    { japanese: "gochuui kudasai", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1300" },
    { japanese: "renraku kudasai", meaning: "", source: "minna", unit: "49", type: "sentence", pattern: "polite form", id: "1301" },
    { japanese: "watakushi ga koohii o ire shimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1302" },
    { japanese: "watakushi ga eki made o okuri shimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1303" },
    { japanese: "watakushi ga kyou no yotei o go satsumei shimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1304" },
    { japanese: "watakushi ga dekirudake hayaku go renraku shimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1305" },
    { japanese: "ikimasu || kimasu => mairimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1306" },
    { japanese: "imasu => orimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1307" },
    { japanese: "tabemasu || nomimasu || moraimasu => itadakimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1308" },
    { japanese: "iimasu => moushimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1309" },
    { japanese: "shimasu => itashimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1310" },
    { japanese: "shitte imasu => zonjite orimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1311" },
    { japanese: "shirimasen => zonjimasen", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1312" },
    { japanese: "mimasu => haikenshimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1313" },
    { japanese: "kikimasu || uchi e ikimasu => ukagaimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1314" },
    { japanese: "aimasu => omeni kakarimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1315" },
    { japanese: "ashita 3ji ni otaku e ukagaimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1316" },
    { japanese: "raishuu omeni kakarimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1317" },
    { japanese: "watakushi miraa to moushimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1318" },
    { japanese: "IMC ni tsutomete orimasu", meaning: "", source: "minna", unit: "50", type: "sentence", pattern: "humble / fem form", id: "1319" },

]









// DOM ELEMENTS


const selectedUnit = document.getElementById("select-units");

const divSentencesDisplay = document.getElementById("div-sentences-display");

const divPatternsDisplay = document.getElementById("div-patterns-display")

const divSelectUnits = document.getElementById("select-units");

const divUnits = document.getElementById("div-units");

const backToTop = document.getElementById("back-to-top");

const buttonUnits = document.getElementById("button-units");

const buttonPatterns = document.getElementById("button-patterns");

const buttonThemes = document.getElementById("button-themes");

const divThemes = document.getElementById("div-themes");

const divSelectThemes = document.getElementById("select-themes");



buttonThemes.addEventListener("click", function() {
    divThemes.style.display = "block";

});


divSelectThemes.addEventListener("change", function(e) {

    let selectedTheme = e.target.value

    switch (selectedTheme) {
        case "white":
            document.body.style.backgroundColor = "white";
            break;
        case "gray":
            document.body.style.backgroundColor = "#d7d7d9";
            break;
        case "dark-gray":
            document.body.style.backgroundColor = "#b9b9bd";
            break;
        case "yellow":
            document.body.style.backgroundColor = "#ffd9b0";
            break;
        case "dark-yellow":
            document.body.style.backgroundColor = "#ffbd77";
            break;
        default:
            document.body.style.backgroundColor = "white";
    };

    divThemes.style.display = "none";

});




// FUNCTIONS


// get study patterns

function getPatterns(data) {

    let patternsArray = data.map(item => item.pattern);
    let patternsArraySet = [...new Set(patternsArray)];

    htmlCreatorPatterns(patternsArraySet);


};


// make html for patterns 

function htmlCreatorPatterns(array) {

    divSentencesDisplay.innerHTML = "";
    divPatternsDisplay.innerHTML = "";



    array.forEach(item => {


        let patternTitle = document.createElement("h3");
        patternTitle.setAttribute("class", "pattern-title");
        patternTitle.textContent = item;
        divPatternsDisplay.append(patternTitle);

        let patternSentencesDiv = document.createElement("div");
        patternSentencesDiv.setAttribute("class", "pattern-sentences-div");
        patternSentencesDiv.style.display = "none";
        divPatternsDisplay.append(patternSentencesDiv);





        let filtered = dataChinese.filter(data => data.pattern === item);





        filtered.forEach(item => {


            let patternDiv = document.createElement("div");
            patternDiv.setAttribute("class", "pattern-div");
            patternDiv.style.display = "block";


            let japaneseP = document.createElement("p");
            japaneseP.setAttribute("class", "japanese-p");
            japaneseP.textContent = item.japanese;
            japaneseP.style.display = "block";

            let meaningP = document.createElement("p");
            meaningP.setAttribute("class", "meaning-p");
            meaningP.textContent = item.meaning;
            meaningP.style.display = "none";
            meaningP.style.color = "blue";


            patternDiv.append(japaneseP);
            patternDiv.append(meaningP);

            patternSentencesDiv.append(patternDiv);



        });






    });










}


// get individual pattern by click on dom

function clickOnPattern(data, clickedPattern) {

    let filteredArray = data.filter(item => item.pattern === clickedPattern)
    let mappedArray = filteredArray.map(item => item.japanese)
    return mappedArray

}




// selection per unit in book

function selectUnit(array, bookName, unitNumber) {

    let filteredUnit = array.filter(item => item.source === bookName && item.unit === unitNumber);

    return filteredUnit;
};


// copy and get test

function getSelectedText() {

    let definitionScreen;

    if (window.getSelection) { // all browsers, except IE before version 9
        var range = window.getSelection();
        var rangeToString = range.toString().trim().toLowerCase();
        var rangeToArray = rangeToString.split(" ");

        if (rangeToArray.length === 1) {
            definitionScreen = window.open(`https://jisho.org/search/${rangeToString}`, "_blank");

        } else if (rangeToArray.length > 1) {
            definitionScreen = window.open(`https://translate.google.com/#view=home&op=translate&sl=ja&tl=en&text=${rangeToString}`, "_blank")

        } else {
            console.log("no text selected");
        };

    };

};




// Dynamic html Generator from the unit numbers



function htmlGeneratorFromUnitNumber(array, unitNumber) {


    divSentencesDisplay.innerHTML = "";
    htmlCreatorSentences(array, unitNumber);


}



// render the unit sentences

function htmlCreatorSentences(array, unitNumber) {

    let targetArray = selectUnit(array, "minna", unitNumber);

    let targetArrayMapped = targetArray.map(item => item.pattern);


    targetArrayMapped = [...new Set(targetArrayMapped)];

    targetArrayMapped.forEach(item => {

        let patternTitle = document.createElement("h3");

        patternTitle.textContent = item;

        divSentencesDisplay.append(patternTitle);


        let filtered = targetArray.filter(data => data.pattern === item);

        console.log(filtered);

        filtered.forEach(veri => {

            let sentenceDiv = document.createElement("div")
            sentenceDiv.setAttribute("class", "sentence-div")

            let japaneseP = document.createElement("p")
            japaneseP.setAttribute("class", "japanese-p")
            japaneseP.textContent = veri.japanese

            let meaningP = document.createElement("p")
            meaningP.setAttribute("class", "meaning-p")
            meaningP.style.display = "none"
            meaningP.style.color = "blue"
            meaningP.textContent = veri.meaning

            sentenceDiv.append(japaneseP)
            sentenceDiv.append(meaningP)

            patternTitle.append(sentenceDiv)


            // let element = document.createElement("p");
            // element.setAttribute("class", "japanese")
            // let meaningElement = document.createElement("p")
            // meaningElement.setAttribute("class", "meaning")
            // element.textContent = veri.japanese;
            // divSentencesDisplay.append(element);
            // divSentencesDisplay.append(meaningElement);


        });
    });
}


// make option numbers in an array

function makeOptions(array) {

    let unitNumbers = array.map(item => item.unit);

    let numbers = [...new Set(unitNumbers)];

    let target = []

    numbers.forEach(item => {
        item !== "" ? target.push(item) : null;
    });

    return target;

};



// create select options by JS

function htmlOptions(array) {

    let numbers = makeOptions(array);


    numbers.forEach(item => {
        let option = document.createElement("option");
        option.setAttribute("value", item);
        option.textContent = item;
        divSelectUnits.append(option);
    });


};


// initializing the options with the assumed book

htmlOptions(dataChinese);



// EVENT LISTENERS



document.oncopy = () => {
    getSelectedText();
};



// select unit event

selectedUnit.addEventListener("change", function() {

    let unitNumber = selectedUnit.value;

    let selectedArray = selectUnit(dataChinese, "minna", unitNumber);

    htmlGeneratorFromUnitNumber(selectedArray, unitNumber);

    backToTop.style.display = "block";

});



backToTop.addEventListener("click", function() {
    document.body.scrollIntoView();
});


// pattern selection button event

buttonPatterns.addEventListener("click", function() {


    divUnits.style.display = "none";
    divThemes.style.display = "none";

    getPatterns(dataChinese)

    backToTop.style.display = "block";
})




buttonUnits.addEventListener("click", function(e) {

    divThemes.style.display = "none";
    divPatternsDisplay.innerHTML = "";
    divSentencesDisplay.innerHTML = "";
    divUnits.style.display = "block";
    backToTop.style.display = "none";

})



function findMeaning(array, japanese) {

    let filtered = array.filter(item => item.japanese === japanese)
    let meaning = filtered[0].meaning

    return meaning


}



document.body.addEventListener("click", function(e) {

    if (e.target.className === "japanese-p") {

        if (e.target.nextElementSibling.style.display === "none") {
            e.target.nextElementSibling.style.display = "block"
        } else if (e.target.nextElementSibling.style.display === "block") {
            e.target.nextElementSibling.style.display = "none"
        }
    }


    if (e.target.className === "pattern-title") {

        if (e.target.nextElementSibling.style.display === "none") {
            e.target.nextElementSibling.style.display = "block"
        } else {
            e.target.nextElementSibling.style.display = "none"
        }


    }


})