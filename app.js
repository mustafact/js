


document.body.style.backgroundColor = "gray";


// DATABASE


const dataChinese = [

    { japanese : "watashi wa kuruma ga hoshii desu" , meaning : "araba istiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "watashi wa kareshi ga hoshii desu" , meaning : "erkek arkadaş istiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "watashi wa kuruma ga hoshikunai desu" , meaning : "araba istemiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "watashi wa kareshi ga hoshikunai desu" , meaning : "erkek arkadaş istemiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "anata wa kuruma ga hoshii desu ka" , meaning : "araba istiyor musun",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "ja, nani ga hoshii desu ka" , meaning : "o zaman, ne istiyorsun",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "donna kareshi ga hoshii desu ka" , meaning : "nasıl bir erkek arkadaş istiyorsun",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "eeto ikemen kareshi ga ichiban hoshii desu" , meaning : "hot bir erkek arkadaş istiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "watashi wa kuruma ga hoshikatta desu" , meaning : "araba istiyordum",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "watashi wa kuruma ga hoshikunakatta desu, demo ima wa hoshii desu" , meaning : "araba istemiyordum ama şimdi istiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshii || hoshikunai || hoshikatta || hoshikunakatta desu", },
    { japanese : "kare wa atarashii kuruma o hoshi gatte imasu" , meaning : "o yeni bir araba istiyor",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N ga hoshigatte desu", },
    { japanese : "watashi wa kuruma ga/o kaitai desu" , meaning : "araba almak istiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "watashi wa biyonse ni aitai desu" , meaning : "beyonce ile tanışmak istiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "watashi wa kankoku e ikitai desu" , meaning : "koreye gitmek istiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "onaka ga sukimashita hambaagaa ga/o tabetai desu" , meaning : "karnım acıktı hamburger yemek istiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "watashi wa benkyoo o shitakunai desu" , meaning : "ders çalışmak istemiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "watashi wa asobitakunai desu" , meaning : "oynamak istemiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "watashi wa oyogitakunai desu" , meaning : "yüzmek istemiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "watashi wa kekkon shitakunai desu" , meaning : "evlenmek istemiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "anata wa nani o kaitai desu ka" , meaning : "ne satın almak istiyosun",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "anata wa dare ni aitai desu ka" , meaning : "kimle buluşmak istiyosun",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "anata wa doko e ikitai desu ka" , meaning : "nereye gitmek istiyosun",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "anata wa itsu kankoku e ikitai desu ka" , meaning : "ne zaman koreye gitmek istiosun",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "anata wa nani o shitai desu ka" , meaning : "ne yapmak istiyosun",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "kankoku e ikitakatta desu" , meaning : "koreye gitmek istedim",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "kekkon shitakunakatta desu" , meaning : "evelenmek istemedim",  book : "minna", unit : "13",  type : "sentence", pattern : "Vtai || Vtakunai || Vtakatta || Vtakunakatta desu", },
    { japanese : "kanojo wa roshia e ikita gatte imasu" , meaning : "o rusyaya gitmek istiyor",  book : "minna", unit : "13",  type : "sentence", pattern : "N wa N o Vta gatte imasu", },
    { japanese : "watashi wa honkon e kaimono ni ikimasu" , meaning : "hong konga alışverişe gidiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "watashi wa nihon e benkyou shi ni kimashita" , meaning : "i came to japan to study",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "watashi wa uchi e ryoushin ni ai ni kaerimashita" , meaning : "i went back home to see my parents",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "tomodachi to sakkaa o shi ni ikimasu" , meaning : "arkadaşımla futbol oynamaya gidiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "kazoku wa nihon de hajimete kara, kuukou e mukae ni ikimasu" , meaning : "ailem japonyaya ilk kez geldiğinden (başladığından), alana karşılamaya gidiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "hokkaido e sukii ni ikimasu" , meaning : "hokkaidoya kayağa gidiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "maitoshi sapporo no yuki matsuri ni ikimasu" , meaning : "her sene sapporo kar festivaline gidiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "doko e benkyou ni ikimasu ka" , meaning : "nereye çalışmaya gidiyosun",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "sutoa e nani o kai ni ikimasu ka" , meaning : "dükkana ne almaya gidiosun",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "dare ni ai ni kimashita ka" , meaning : "kimi görmeye (kimle buluşmaya) geldin",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "nanji goro watashi o mukae ni kimasu ka" , meaning : "saat kaç civarı beni almaya (alandan) geleceksin",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "anata wa nani o shi ni ikimasu ka" , meaning : "ne yapmaya gidiyosun",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "ano mise ni hairimashou" , meaning : "o dükkana girelim",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "watashi wa shinjuku ni kutsu o kaini ikimasu." , meaning : "",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "watashitachi wa doobutsu-en ni raion o mini ikimasu." , meaning : "",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "kodomotachi wa puuru ni oyogi ni ikimasu." , meaning : "",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "kare wa gakkoo ni tomodachi ni aini ikimasu." , meaning : "",  book : "minna", unit : "13",  type : "sentence", pattern : "N e Vstem || N ni V", },
    { japanese : "kare wa shichiji goro uchi o demashita" , meaning : "saat 7'de evi terk etti (evden çıktı)",  book : "minna", unit : "13",  type : "sentence", pattern : "N ni hairimasu || o demasu", },
    { japanese : "densha ni norimasu" , meaning : "trene biniyor",  book : "minna", unit : "13",  type : "sentence", pattern : "N ni hairimasu || o demasu", },
    { japanese : "densha o orimasu" , meaning : "trenden iniyor",  book : "minna", unit : "13",  type : "sentence", pattern : "N ni hairimasu || o demasu", },
    { japanese : "nanika (o) tabemasen ka" , meaning : "(herhangi) bir şey yemez misin",  book : "minna", unit : "13",  type : "sentence", pattern : "nanika || dokoka", },
    { japanese : "nodo ga kawakimashita nanika nomitai desu" , meaning : "susadım, bir şey içmek istiyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "nanika || dokoka", },
    { japanese : "kono shumatsu ni dokoka e asobimasu" , meaning : "bu hafta sonu biryerde eğleniyorum",  book : "minna", unit : "13",  type : "sentence", pattern : "nanika || dokoka", },
    { japanese : "natsu yasumi wa dokoka ikimashita ka" , meaning : "yaz tatilinde biryere gittin mi",  book : "minna", unit : "13",  type : "sentence", pattern : "nanika || dokoka", },
    { japanese : "sumimasen o namae o oshiete kudasai" , meaning : "afedersin ismi söyleyin lütfen",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "samui kara mado o shimete kudasai" , meaning : "sağuk olduğundan pencereyi kapayın lütfen",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "rozu to yonde kudasai" , meaning : "rose ile (ismi ile) çağırın lütfen)",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "ashita koko ni kite kudasai" , meaning : "yarın buraya gelin lütfen",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "isoide kudasai" , meaning : "acele edin lütfen",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "ganbatte kudasai" , meaning : "gayret edin lütfen",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "chotto matte kudasai" , meaning : "biraz bekleyin lütfen",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "minnasan kiite kudasai" , meaning : "herkes dinlesin lütfen",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "kono heya wa atsui desu. douzo mado o akete kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "kono heya wa kurai desu. denki o tsukete kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "sono iriguchi kara haitte kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "ano deguchi kara dete kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "anata no pen o kashite kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "sono hon o yonde kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "sono hon o akete kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "sono hon o motte kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "sono hon o misete kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "sono hon o kashite kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "sono hon o katte kudasai" , meaning : "",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte kudasai", },
    { japanese : "ame ga futte imasu" , meaning : "yağmur yağıyor",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "tegami o kaite imasu" , meaning : "mektup yazıyor",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "akachan ga nete imasu" , meaning : "bebek uyuyor",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "yamadasan wa denwa o kakete imasu" , meaning : "yamadasan telefon açıyor",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "ame ga futte imasu ka" , meaning : "yağmur yağıyor mu?",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "nani o kaite imasu ka" , meaning : "ne yazıyorsun?",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "anata wa kiite imasu ka" , meaning : "sen dinliyor musun?",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "anata wa ima nani o shite imasu ka" , meaning : "sen şimdi ne yapıyorsun?",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "ame ga futte imasen" , meaning : "yağmur yağmıyor",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "watashi wa kiite imashita" , meaning : "dinliyordum",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "watashi wa kinou nani mo shite imasen deshita" , meaning : "dün hiçbirşey yapmıyordum",  book : "minna", unit : "14",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "nimotsu o mochimashou ka?" , meaning : "valizinizi taşıyayım mı?",  book : "minna", unit : "14",  type : "sentence", pattern : "Vmashou ka", },
    { japanese : "Atsukunai desu ka? Mado o akemashou ka? soo desu ne. sukoshi akete kudasai." , meaning : "sıcak değil mi? (sıcak olmadı mı?) Pencereyi açalım mı? Evet, öyle, biraz açın lütfen.",  book : "minna", unit : "14",  type : "sentence", pattern : "Vmashou ka", },
    { japanese : "shigoto o tetsudaimashou ka? İie, kekkou desu." , meaning : "işe yardım edeyim mi? Hayır, gerek yok / böyle iyi",  book : "minna", unit : "14",  type : "sentence", pattern : "Vmashou ka", },
    { japanese : "nihon no tabemono wa oishii desu ga, totemo takai desu" , meaning : "japon yemekleri lezzetli ama çok pahalı",  book : "minna", unit : "14",  type : "sentence", pattern : "S ga, S", },
    { japanese : "shitsurei desu ga, onamae wa?" , meaning : "rahatsız ediyorum ama isminiz?",  book : "minna", unit : "14",  type : "sentence", pattern : "S ga, S", },
    { japanese : "sumimasen ga, shio o totte kudasai?" , meaning : "afedersiniz, tuzu alabilir miyim lütfen?",  book : "minna", unit : "14",  type : "sentence", pattern : "S ga, S", },
    { japanese : "yuki ga futte imasu" , meaning : "kar yağıyor",  book : "minna", unit : "14",  type : "sentence", pattern : "N ga V", },
    { japanese : "kaze ga fuite imasu" , meaning : "rüzgar esiyor",  book : "minna", unit : "14",  type : "sentence", pattern : "N ga V", },
    { japanese : "watashi no pasokon o tsukatte mo ii desu" , meaning : "bnim bilgisayarımı kullansan olur",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte mo ii desu", },
    { japanese : "asoko de suwatte mo ii desu" , meaning : "orada otursan olur",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte mo ii desu", },
    { japanese : "sono heya no naka ni nimotsu o oite mo ii desu" , meaning : "şu odanın içine valizini koysan olur",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte mo ii desu", },
    { japanese : "haitte mo ii desu" , meaning : "girsen olur",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte mo ii desu", },
    { japanese : "tabako o sutte mo ii desu ka? Ee, ii desu, douzo / sumimasen, chotto…" , meaning : "sigara içsem olur mu? Evet, olur buyur / afedersin, olmaz",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte mo ii desu", },
    { japanese : "kono shashin o moratte mo ii desu ka" , meaning : "bu resmi alsam olur mu?",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte mo ii desu", },
    { japanese : "pen o karite mo ii desu ka" , meaning : "kalem ödünç alsam olur mu?",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte mo ii desu", },
    { japanese : "koko de tabako o sutte wa ikemasen" , meaning : "burada sigara içmek olmaz",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "bijutsukan no naka de shashin o totte wa ikemasen" , meaning : "müzenin içinde foto çekmek olur mu? Hayır, olmaz / evet olur",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "koko de kuruma o tomete mo ii desu ka? iie, ikemasen / iie, dame desu" , meaning : "burada araba parketmek olur mu? Hayır olmaz / hayır, yasak",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "koko ni kuruma o tomete wa ikemasen" , meaning : "",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "kodomo wa osake o nonde wa ikemasen" , meaning : "",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "nihonde kuruma wa migi hashitte wa ikemasen" , meaning : "",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "sakkaa de te o tsukatte wa ikemasen" , meaning : "",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "koko de shashin o totte wa ikemasen" , meaning : "",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "koko de tabako o sutte mo ii desu ka" , meaning : "",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "koko de tabako o sutte wa ikemasen" , meaning : "",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "kono michi o tootte wa ikemasen" , meaning : "",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte wa ikemasen", },
    { japanese : "kare wa kekkon shite imasu" , meaning : "o evlidir (evli durumda)",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "kazoku wa nagoya ni sunde imasu" , meaning : "ailem nagoya'da yaşamakta",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "ninen nihongo o benkyou shite imasu" , meaning : "iki yıldır japonca çalışmaktayım",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "iphone10 o motte imasu" , meaning : "iphone 10um var",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "anata wa kekkon shite imasu ka? Hai, kekkon shite imasu / iie, dokushin desu" , meaning : "sen evli misin? Evet, evliyim / hayır bekarım",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "doko ni sunde imasu ka? Saitama ken ni sunde imasu" , meaning : "nerede yaşamaktasın? Saitama semtinde yaşıyorum",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "mainichi sutaabakkusu no koohii o katte imasu" , meaning : "hergün starbucks kahvesi satın alıyorum",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "maiasa hashitte imasu" , meaning : "her sabah koşuyorum",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "oosaka no nippon bashi de yasui denki seihin o utte imasu" , meaning : "osaka nippon bashi'de ucuz elektronik ürünleri satın alıyorum",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "tesla wa denki jidousha o tsukutte imasu." , meaning : "tesla elektrikli arama üretiyor",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "nani o shite imasu ka" , meaning : "ne yapıyorsun? / ne iş yapıyorsun?",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "o shigoto wa nan desu ka" , meaning : "işin nedir?",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "guuguru de hataraite imasu" , meaning : "google'da çalışıyorum",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "watashi wa toudai de benkyou shite imasu" , meaning : "tokyo üniversitesinde okuyorum",  book : "minna", unit : "15",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "enjiniabu no hashimotosan o shitte imasu ka? Hai, shitte imasu / iie, shirimasen" , meaning : "mühendislik bölümünden hashimotosanı tanıyo musun? Evet tanıyorum / hayır tanımıyorum.",  book : "minna", unit : "15",  type : "sentence", pattern : "shitte imasu || shirimasen || wakarimasen", },
    { japanese : "watashi no juusho o shitte imasu ka? Hai, shitte imasu / iie, shirimasen." , meaning : "benim adresimi biliyo musun? Evet biliyorum / hayır, bilmiyorum",  book : "minna", unit : "15",  type : "sentence", pattern : "shitte imasu || shirimasen || wakarimasen", },
    { japanese : "shuumatsu wa nani o shimasu ka? Kaimono ni ikimasu / eeto, mada wakarimasen. (shirimasen would be rude here)" , meaning : "haftasonu ne yapıyorsun? Alışverişe gidiyorum / hmm, hala bilmiyorum",  book : "minna", unit : "15",  type : "sentence", pattern : "shitte imasu || shirimasen || wakarimasen", },
    { japanese : "eigo ga wakarimasu ka? Hai, wakarimasu / iie, wakarimasen." , meaning : "ingilizce bilio musun? Evet biliyorum / hayır bilmiyorum",  book : "minna", unit : "15",  type : "sentence", pattern : "shitte imasu || shirimasen || wakarimasen", },
    { japanese : "asa (wa) shawa o abite, asagohan o tabete, shigoto o shimasu" , meaning : "sabah duş alıp, kahvaltı yiyip, iş yaparım",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte Vte V", },
    { japanese : "shibuya de tomodachi ni atte, eiga o mite, yuushoku o tabemashita" , meaning : "shibuyada arkadaşla buluşup, film izleyip, akşam yemeği yedik",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte Vte V", },
    { japanese : "yokohama eki kara, jr densha ni notte, shimbashi de orite, sorekara chikatetsu ni norikaete, ginza eki de orite kudasai" , meaning : "yokohama durağından jr trenine binip, shimbaşi'de inip, ondan sonra metroya geçip, ginza durağında inin lütfen",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte Vte V", },
    { japanese : "otousan wa yasashi kute atama ga ii hito desu" , meaning : "babam kibar ve zeki bir insandır",  book : "minna", unit : "16",  type : "sentence", pattern : "Adj-i => Adj kute || Adj-na => Adj de || N => N de", },
    { japanese : "hokkaido wa tenki ga yokute, suzushikatta desu" , meaning : "hokkaidoda hava güzel ve serindir",  book : "minna", unit : "16",  type : "sentence", pattern : "Adj-i => Adj kute || Adj-na => Adj de || N => N de", },
    { japanese : "tabemono wa oishikute, yasukute, sugoku osusume desu" , meaning : "yemek lezzetli ucuz ve tavsiye edilebilir",  book : "minna", unit : "16",  type : "sentence", pattern : "Adj-i => Adj kute || Adj-na => Adj de || N => N de", },
    { japanese : "kyooto wa kirei de, omoshiroi mono ga takusan arimasu" , meaning : "kyoto güzel ve ilginç şeyler çok vardır",  book : "minna", unit : "16",  type : "sentence", pattern : "Adj-i => Adj kute || Adj-na => Adj de || N => N de", },
    { japanese : "guensan wa betonamu jin de, ryuugakusei desu" , meaning : "nguyen vietnamlı ve yabancı öğrencidir",  book : "minna", unit : "16",  type : "sentence", pattern : "Adj-i => Adj kute || Adj-na => Adj de || N => N de", },
    { japanese : "chichi wa pairotto de, haha wa kangoshi desu" , meaning : "babam pilot annem ise hemşiredir",  book : "minna", unit : "16",  type : "sentence", pattern : "Adj-i => Adj kute || Adj-na => Adj de || N => N de", },
    { japanese : "shinkansen wa hayai desu ga, takai desu" , meaning : "hızlı tren hızlı ama pahalıdır",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte kara, V", },
    { japanese : "kaado o irete kara, kono botan o oshite kudasai" , meaning : "kartı soktukan sonra, bu düğmeye basınız",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte kara, V", },
    { japanese : "daigaku o dete kara, sekai o ryokou shimasu" , meaning : "üniversiteden mezun olduktan sonra, dünya seyahati yapıcam",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte kara, V", },
    { japanese : "shigoto o owatte kara, biiru o nomimasen ka" , meaning : "iş bittikten sonra bira içmeyelim mi",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte kara, V", },
    { japanese : "shigoto o yamete kara, nani o shimasu ka" , meaning : "işten ayrıldıktan sonra (quit), ne yapacaksın",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte kara, V", },
    { japanese : "kyouto e itte (kara), nani o shimashita ka" , meaning : "kyotoya gidip ne yaptın",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte kara, V", },
    { japanese : "kaigi ga owatte kara, dokoka e ikimasu ka" , meaning : "toplantı bittikten sonra, biryere gidiyor musun?",  book : "minna", unit : "16",  type : "sentence", pattern : "Vte kara, V", },
    { japanese : "annasan wa kami ga kurokute, me ga ookii desu" , meaning : "anna'nın saçı siyah, gözleri büyüktür",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "sono senshu wa se ga hikui desu ga, ashi ga hayai desu" , meaning : "bu oyuncudun boyu kısa ama ayakları hızlıdır",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "furansu (de) wa tabemono ga oishikute, wain ga sekaijuu de yuumei desu" , meaning : "fransız yemekleri lezzetli, şarabı da dünyaca ünlüdür",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "kirin wa kubi ga nagai desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "zoo wa hana ga nagai desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "kanojo wa kami ga nagai desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "satoosan wa kami ga chairoi desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "usagi wa me ga akai desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "kare wa atama ga ii desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "uma wa ashi ga hayai desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "watashi wa atama / ha / i / te / ashi / koshi / oshiri ga itai desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "kanojo wa nihongo / eigo / piano / tenisu / ryoori / kuruma no unten / dansu ga joozu desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "hana wa chuurippu to ojisai ga suki desu." , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "nomimono wa nihoncha ga suki desu" , meaning : "",  book : "minna", unit : "16",  type : "sentence", pattern : "N wa N ga Adj", },
    { japanese : "gakkou made douyatte ikimasu ka? /  Eki kara ichiban no basu ni notte, jinja no mae de orimasu. soko kara gakkou made gofun gurai arukimasu. " , meaning : "okula kadar nasıl gidersin? Duraktan ilk önce otobüse binerim, tapınağın önünde inerim. Oradan okula 5 dakika yürürüm.",  book : "minna", unit : "16",  type : "sentence", pattern : "douyatte V ka", },
    { japanese : "kono jidouhanbaiki wa douyatte tsukaimasu ka / mazu okane o irete, suki na dorinku no botan o oshite kudasai" , meaning : "bu vending machine nasıl kullanılır?",  book : "minna", unit : "16",  type : "sentence", pattern : "douyatte V ka", },
    { japanese : "oniisan wa dono hito desu ka? Ano ichiban se ga takai hito desu" , meaning : "ağbin hangi kişidir? O en uzun boylu olan kişidir",  book : "minna", unit : "16",  type : "sentence", pattern : "kono || sono || ano || dono N", },
    { japanese : "anata no kuruma wa dono kuruma desu ka? Sono kuruma wa watashi no kuruma desu" , meaning : "senin araban hangi arabadır? Şu araba benim arabamdır",  book : "minna", unit : "16",  type : "sentence", pattern : "kono || sono || ano || dono N", },
    { japanese : "anata no kuruma wa dore desu ka" , meaning : "senin araban hangisidir?",  book : "minna", unit : "16",  type : "sentence", pattern : "kono || sono || ano || dono N", },
    { japanese : "chiketto o nakusanaide kudasai" , meaning : "biletleri kaybetme lütfen",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "naka de shashin o toranaide kudasai" , meaning : "içerde foto çekme lütfen",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "watashi wa daijoubu desu, shinpai shinaide kudasai" , meaning : "ben iyiyim, endişelenme lütfen",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "anata no pasupooto o wasurenaide kudasai" , meaning : "pasaportunu unutma lütfen",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "jidoosha o unten shimasu. osake o nomanaide kudasai" , meaning : "",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "soto wa samui desu. mado o akenaide kudasai" , meaning : "",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "sono hon o minaide kudasai" , meaning : "",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "sono hon o wasuranaide kudasai" , meaning : "",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "sono hon o yomanaide kudasai" , meaning : "",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "sono hon o sutenaide kudasai" , meaning : "",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai de", },
    { japanese : "raishuu made ni kono hon o kaesanakereba narimasen" , meaning : "gelecek haftaya kadar bu kitabı iade etmezsem olmaz",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kereba narimasen", },
    { japanese : "yasai o tabenakereba narimasen" , meaning : "sebze yemezsen olmaz",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kereba narimasen", },
    { japanese : "otto to dekakemasu kara, hayaku kaeranakereba narimasen" , meaning : "kocamla dışarı çıktığımızdan, eve erken dönmezsem olmaz",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kereba narimasen", },
    { japanese : "tabete kara kusuri o nomanakereba narimasen" , meaning : "yemekten itibaren (sonra) ilacını içmezsen olmaz",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kereba narimasen", },
    { japanese : "raishuu made ni kono hon o kaesanakereba narimasen ka" , meaning : "bu kitabı haftaya kadar iade etmezsem olmaz mı?",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kereba narimasen", },
    { japanese : "yasai o tabenakereba narimasen ka" , meaning : "sebze yemezsem olmaz mı?",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kereba narimasen", },
    { japanese : "nanji ni kaeranakereba narimasen ka" , meaning : "saat kaçta dönmem lazım?",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kereba narimasen", },
    { japanese : "nankai kusuri o nomanakereba narimasen ka" , meaning : "ilacı kaç kere almam lazım",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kereba narimasen", },
    { japanese : "daijoubu, harawanakute mo ii desu" , meaning : "tamam, ödemesen de olur",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kute mo ii desu", },
    { japanese : "nani mo mottekonakute mo ii desu" , meaning : "hiçbişey almasan(getirmesen) da olur",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kute mo ii desu", },
    { japanese : "douzo oagari kudasai, kutsu o noganakute mo ii desu" , meaning : "girin lütfen, ayakkabıları çıkarmasanız da olur",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kute mo ii desu", },
    { japanese : "ashita youji ga arimasu kara, watashi wa ikanakute mo ii desu ka" , meaning : "yarın yapacak işler olduğundan, gelmesem olur mu",  book : "minna", unit : "17",  type : "sentence", pattern : "Vnai => Vna kute mo ii desu", },
    { japanese : "keeki wa tabenaide kudasai" , meaning : "keki (söz konusuysa) yemeyin lütfen",  book : "minna", unit : "17",  type : "sentence", pattern : "N o => N wa", },
    { japanese : "repooto wa kinyobi made ni dashite kudasai" , meaning : "rapor (söz konusuysa) cumaya kadar teslim et lütfen",  book : "minna", unit : "17",  type : "sentence", pattern : "N o => N wa", },
    { japanese : "getsuyoubi made ni kite kudasai" , meaning : "pazartesiye kadar gel lütfen",  book : "minna", unit : "17",  type : "sentence", pattern : "made ni", },
    { japanese : "paatii wa juuji made ni owarimasu" , meaning : "parti saat 10a kadar bitecek",  book : "minna", unit : "17",  type : "sentence", pattern : "made ni", },
    { japanese : "ashita made ni repooto o dasana kereba narimasen kara, zangyou shimasu" , meaning : "yarına kadar bu raporu teslim etmezsem olmayacağından, fazla mesai yapacağım",  book : "minna", unit : "17",  type : "sentence", pattern : "made ni", },
    { japanese : "lilisan wa utau koto ga dekimasu" , meaning : "lili şarkı söyleyebilir",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu", },
    { japanese : "adamsan wa oyogu koto ga dekimasu" , meaning : "adam yüzme yapabilir",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu", },
    { japanese : "natarisan wa kanji o yomu koto ga dekimasu" , meaning : "natali kanji okuyabilir",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu", },
    { japanese : "onrain de chiketto o yoyaku suru koto ga dekimashita" , meaning : "online bilet reservasyonu yapabilirim",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu", },
    { japanese : "watashi wa gorufu ga dekimasu" , meaning : "golf oynayabilirim",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu", },
    { japanese : "otto wa ryouri ga jouzu ni dekimasu" , meaning : "kocam gerçekten iyi yemek yapabilir",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu", },
    { japanese : "watashi wa piano ga dekimasu" , meaning : "piano çalabilirim",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu", },
    { japanese : "watashi wa porutogarugo ga dekimasu" , meaning : "portkeizce konuşabilirim",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu", },
    { japanese : "anata wa unten suru koto ga dekimasu ka" , meaning : "araba kullanabilir misin",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu", },
    { japanese : "unten ga dekimasu ka? Hai, unten ga dekimasu / iie, unten ga dekimasen" , meaning : "araba kullanabilir misin",  book : "minna", unit : "18",  type : "sentence", pattern : "N ga dekimasu", },
    { japanese : "kinou (wa) benkyou ga dekimashita ka? Hai, dekimashita / iie, dekimasen deshita" , meaning : "dün ders çalışabildin mi? Evet çalışabildim / hayır çalışamadım",  book : "minna", unit : "18",  type : "sentence", pattern : "N ga dekimasu", },
    { japanese : "watashi wa kuukou de en o doru ni kaeru koto ga dekimasu ka? Hai, dekimasu yo" , meaning : "havalimanında yeni dolara çevirebilir miyim? Evet, yapabilirsin",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu ka", },
    { japanese : "anata wa nan meetoru oyogu koto ga dekimasu ka? 50 meetoru gurai oyogu koto ga dekimasu" , meaning : "sen kaç metre yüzebilirsin? Yaklaşık 50 metre yüzebilirim",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu ka", },
    { japanese : "anata wa nanigo o hanasu koto ga dekimasu ka? Porutogaru ga dekimasu" , meaning : "hangi dili konuşabilirsin? Portekizce konuşabilirim",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd koto ga dekimasu ka", },
    { japanese : "watashi no shumi wa  tsuri desu" , meaning : "hobim balık tutmaktır",  book : "minna", unit : "18",  type : "sentence", pattern : "shumi wa Vd || N desu", },
    { japanese : "watashi no shumi wa konpyuutaa geemu desu" , meaning : "hobim bilgisayar oyunlarıdır",  book : "minna", unit : "18",  type : "sentence", pattern : "shumi wa Vd || N desu", },
    { japanese : "watashi no shumi wa shashin o toru koto desu" , meaning : "hobim resim çekmektir",  book : "minna", unit : "18",  type : "sentence", pattern : "shumi wa Vd || N desu", },
    { japanese : "watashi no shumi wa akushon figyua o atsumeru koto desu" , meaning : "hobim action figürleri biriktirmektir",  book : "minna", unit : "18",  type : "sentence", pattern : "shumi wa Vd || N desu", },
    { japanese : "neru mae ni shawa o abimasu" , meaning : "uyumadan önce duş alacağım",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "taberu mae ni te o aratte kudasai" , meaning : "yemekten önce elleri yıka lütfen",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "gakkou e iku mae ni, inu no sanpo o shimasu" , meaning : "okula gitmeden önce köpeği yürüteceğim (köpeğin yürüyüşünü yapacağım)",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "neru mae ni nani o shimasu ka" , meaning : "uyumadan önce ne yaparsın?",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "ryokou no mae ni, hoteru no yoyaku o kakunin shimasu" , meaning : "geziden önce otel rezervasyonunu onaylıyorum",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "shokuji no mae ni, inori o shimasu" , meaning : "yemekten önce dua ederim",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "kaigi no mae ni, kono shiryou o kopii shite kudasai" , meaning : "toplantıdan önce bu dokümanı kopyapa lütfen",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "watashi wa juunen mae ni, amerika ni kimashita" , meaning : "10 yıl önce amerikaya geldim",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "rokka-getsu mae ni kaisha o yamemashita" , meaning : "6 ay önce şirketten emekli oldum",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "kusuri wa sanjuu pun mae ni nomimashita" , meaning : "ilacı 30 dakika önce içtim",  book : "minna", unit : "18",  type : "sentence", pattern : "Vd || N || Period of time no mae ni, V", },
    { japanese : "keeki wa nakanaka oishii desu" , meaning : "kek oldukça/bayağı lezzetli",  book : "minna", unit : "18",  type : "sentence", pattern : "nakanaka", },
    { japanese : "kareshi wa nakanaka hansamu desu ne" , meaning : "erken arkadaşın bayağı/oldukça yakışıklı",  book : "minna", unit : "18",  type : "sentence", pattern : "nakanaka", },
    { japanese : "tesuto wa nakanaka muzukashikatta desu" , meaning : "test oldukça/bayağı zordu",  book : "minna", unit : "18",  type : "sentence", pattern : "nakanaka", },
    { japanese : "nakanaka hito no namae o oboeru koto ga dekimasen" , meaning : "insanların ismini hatırlamayı  pek beceremem",  book : "minna", unit : "18",  type : "sentence", pattern : "nakanaka", },
    { japanese : "nihon de wa nakanaka furui pasokon o suteru koto ga dekimasen" , meaning : "eski bilgisayarlardan kurtulmak biraz zordur (pek mümkün değildir)",  book : "minna", unit : "18",  type : "sentence", pattern : "nakanaka", },
    { japanese : "nihon de wa ooganiku sutoaa ga nakanaka arimasen" , meaning : "japonyada organik mağaza pek yoktur",  book : "minna", unit : "18",  type : "sentence", pattern : "nakanaka", },
    { japanese : "watashi wa hawai de zehi kekkon shitai desu" , meaning : "kesin hawaide evlenmeyi isterim",  book : "minna", unit : "18",  type : "sentence", pattern : "zehi", },
    { japanese : "watashi no tanjoubi desu kara, zehi paati ni kite kudasai ne" , meaning : "benim yaşgünüm olduğundan, kesin partime gelin.",  book : "minna", unit : "18",  type : "sentence", pattern : "zehi", },
    { japanese : "keeki o zehi tabete kudasai, oishii desu yo" , meaning : "kesin kekten yiyin, lezzetli ha",  book : "minna", unit : "18",  type : "sentence", pattern : "zehi", },
    { japanese : "issho ni asobi ni ikimasen ka? Ee, zehi" , meaning : "birlikte dışarı çıkalım mı (gezelim mi) ? Evet, kesin / mutlaka",  book : "minna", unit : "18",  type : "sentence", pattern : "zehi", },
    { japanese : "fujisan ni nobotta koto ga arimasu" , meaning : "fuji dağına (tepesine) tırmanmışlığım vardır",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta koto ga arimasu", },
    { japanese : "itaria ni itta koto ga arimasu" , meaning : "italyaya gitmişliğim vardır",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta koto ga arimasu", },
    { japanese : "baniku o tabeta koto ga arimasen" , meaning : "at eti yemişiğim yoktur",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta koto ga arimasu", },
    { japanese : "pachinko o shita koto ga arimasen" , meaning : "pachinko çalmışlığım yoktur",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta koto ga arimasu", },
    { japanese : "shinkansen o notta koto ga arimasu ka" , meaning : "hızlı trene binmişliğin var mıdır",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta koto ga arimasu", },
    { japanese : "sushi o tabeta koto ga arimasu ka? hai, ikkai dake arimasu / iie, ichidomo arimasen" , meaning : "sushi yemişlğin var mıdır? Evet, bir kere / hayır hiç yoktur",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta koto ga arimasu", },
    { japanese : "shumatsu wa sentaku shita ri, souji shita ri, kaimono shita ri shimasu" , meaning : "hafta sonu çamaşır yıkar, temizlik yapar, alışveriş yapar yaparım.",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta ri Vta ri Vta ri shimasu", },
    { japanese : "toukyou e itta ri, tomodachi to asonda ri, geemu o shita ri shimashita" , meaning : "tokyoya gider, arkadaşlarla eğlenir, oyun oynar yaptım.",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta ri Vta ri Vta ri shimasu", },
    { japanese : "anata wa atarashii kaban o katta ri, hoteru no yoyaku o kakunishita ri, puran o tsukutta ri, shina kereba narimasen." , meaning : "yeni bir çanta satın alma, otel rezervasyonu yapma, gezi planı yapma, yapmazsan olmaz.",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta ri Vta ri Vta ri shimasu", },
    { japanese : "watashi no shumi wa hon o yonda ri, ongaku o kiita ri, geemu o shita ri suru koto desu" , meaning : "hobilerim kitap okumak, müzik dinlemek, oyun oynamak yapmakdır",  book : "minna", unit : "19",  type : "sentence", pattern : "Vta ri Vta ri Vta ri shimasu", },
    { japanese : "watashi wa tsuyoku naritai desu" , meaning : "güçlü olmak istiyorum (güçlenmek)",  book : "minna", unit : "19",  type : "sentence", pattern : "Adj-i => Adj ku || Adj-na => Adj ni || N => N ni arimasu", },
    { japanese : "anata wa nihongo ga jouzu ni narimashita" , meaning : "japoncan iyileşmiş (gelişmiş)",  book : "minna", unit : "19",  type : "sentence", pattern : "Adj-i => Adj ku || Adj-na => Adj ni || N => N ni arimasu", },
    { japanese : "kotoshi 30 sai ni narimasu" , meaning : "bu yıl 30 yaşıma giriyorum",  book : "minna", unit : "19",  type : "sentence", pattern : "Adj-i => Adj ku || Adj-na => Adj ni || N => N ni arimasu", },
    { japanese : "musuko wa pairotto ni narita gatte imasu" , meaning : "oğlum pilot olmak istiyor",  book : "minna", unit : "19",  type : "sentence", pattern : "Adj-i => Adj ku || Adj-na => Adj ni || N => N ni arimasu", },
    { japanese : "tabako o suu koto ga karada ni yokunai desu yo / sou desu ne" , meaning : "sigara içmek sağlığa iyi değil. Katılıyorum (evet öyle ya)",  book : "minna", unit : "19",  type : "sentence", pattern : "sou desu ne", },
    { japanese : "mou osoku narimasu kaeranai to / aa, sou desu ne." , meaning : "geç oldu dönmem lazım. Ya, öyle.",  book : "minna", unit : "19",  type : "sentence", pattern : "sou desu ne", },
    { japanese : "aihon ten wa aihon eitto yori ii desu ne? sou desu ne (dochira mo tsukatta koto ga arimasen kara, wakarimasen)" , meaning : "iphone 10 iphone 8'den daha iyi di mi? Öyle.",  book : "minna", unit : "19",  type : "sentence", pattern : "sou desu ne", },
    { japanese : "10ji ni nemasu / 10ji ni neru" , meaning : "saat 10da uyurum",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "mainichi benkyou shimasen / mainichi benkyou shinai" , meaning : "hergün ders çalışıyorum",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "asagohan o tamemashita / asagohan o tabeta" , meaning : "kahvaltıyı yedim",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "asagohan o tabemasu ka? || asagohan o taberu ? / Hai tabemasu / un taberu / iie, tabemasen / iie, tabenai" , meaning : "kahvaltı ediyor musun? Evet ediyorum / hayır etmiyorum",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "kyou hatarakimasen deshita / kyou hatarakanakatta " , meaning : "dün çalışmadım",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "issho ni biiru o nomimasen ka / issho ni biiru o nomanai  " , meaning : "birlikte bira içmeyelim mi",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "ikimashou / ikou" , meaning : "gidelim",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "tabemashou / tabeyou" , meaning : "yiyelim",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "benkyou shimashou / benkyou shyou" , meaning : "ders yapalım",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "kirei desu / kirei da" , meaning : "güzel",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "ashita hima ja arimasen / ashita hima janai" , meaning : "yarın boş değilim",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "kare wa yuumei deshita / kare wa yuumei datta" , meaning : "o ünlüydü",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "suteki ja arimasen deshita / suteki ja nakatta" , meaning : "güzel değildi",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "ii desu / ii" , meaning : "iyi",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "yokunai desu / yokunai" , meaning : "iyiydi",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "osihikatta desu / oishikatta" , meaning : "ilginçti",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "omoshirokunakatta desu / omoshirokunakatta" , meaning : "ilginç değildi",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "dou desu ka / dou" , meaning : "nasıl?",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "dou deshita ka / dou datta" , meaning : "nasıldı?",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "kamera ga arimasu / kamera ga aru" , meaning : "kamera var",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "pasokon ga arimasen / pasokon ga nai" , meaning : "bilgisayar yok",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "kuruma ga arimashita / kuruma ga atta" , meaning : "araba vardı",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "wakarimashita / wakatta" , meaning : "anladım",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "inu ga oshii desu / inu ga oshii" , meaning : "köpek istiyorum",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "supein e ikitai desu / supein e ikitai" , meaning : "ispanyaya gitmek istiyorum",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "koko ni kite kudasai / kochi ni kite" , meaning : "buraya gel",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "wasurenaide kudasai / wasurenaide ne" , meaning : "unutma",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "kore o tsukatte mo ii desu ka / kore o tsukatte ii" , meaning : "bunu kullanabilir miyim",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "koko de tabako o sutte wa ikemasen / koko de tabako o sutte wa ikenai" , meaning : "burada sigara içmek olmaz",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "ikanakereba narimasen / ikanakereba naranai" , meaning : "gitmezsek olmaz",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "isogonai to ikemasen / isogonai to ikenai" , meaning : "acele etmezsek olmaz",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "harawanakute mo ii desu / harawanakute mo ii" , meaning : "ödemezsen de olur",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "unten ga dekimasu ka / unten ga dekiru? Hai dekimasu / un, dekiru" , meaning : "araba kullanabilir misin? Evet, kullanabilirim",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "unten ga dekimasu ka / unten ga dekiru? İie dekimasen / uun, dekinai" , meaning : "araba kullanabilir misin? Hayır kullanamam",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "fujisan ni nobotta koto ga arimasu ka / fujisan ni nobotta koto ga aru" , meaning : "fujisana çıkmışlığın (tepesine) var mı?",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "hai nobotta koto ga arimasu / un, nobotta koto ga aru" , meaning : "evet çokmışlığım var",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "iie nobotta koto ga arimasen / uun nobotta koto ga nai" , meaning : "hayır çıkmışlığım yok",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "keeki o tabemasu ka / keeki o taberu" , meaning : "kek yer misin?",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "hai tabemasu / iie tabemasen" , meaning : "yes i eat / no i dont eat",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "un taberu / uun tabenai" , meaning : "yes i eat / no i dont eat",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "ie ni dare ka arimasu ka / iie ni dare ka aru?" , meaning : "evde kimse var mı? ",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "hai yuki ga imasu / iie dare mo imasen" , meaning : "evet yuki var / hayır kimse yok",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "un, yuki ga iru (yo) / uun, dare mo inai" , meaning : "evet yuki var / hayır kimse yok",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "doko ikimasu ka / doko iku?" , meaning : "where r u going?",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "tokyou e ikimasu / tokyou e iku" , meaning : "tokyo'ya gidiyorum",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "genki desu ka / genki ?" , meaning : "sağlıklı mi?",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "hai genki desu / un, genki" , meaning : "evet sağlıklıyım",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "iie, genki ja arimasen / uun, genki janai" , meaning : "hayır, sağlıklı değilim",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "sou desu ka / souka" , meaning : "haa demek öyle",  book : "minna", unit : "20",  type : "sentence", pattern : "Polite / Plain", },
    { japanese : "kare de tariru to omoimasu" , meaning : "bu yeter diye düşünüyorum",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "nihonjin wa biza ga iranai to omoimasu" , meaning : "japon vizeye ihtiyaç yok diye düşünüyorum",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "densha wa totemo benri da to omoimasu" , meaning : "tren çok pratiktir diye düşünüyorum",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "terebi o miru koto wa jikan no muda da to omoimasu" , meaning : "tv izlemenin zaman kaybı olduğunu düşünüyorum",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "soosharu media wa ii to omoimasu ka? Hai, ii to omoimasu / iie, yokunai to omoimasu" , meaning : "sosyal medyanın iyi olduğunu düşünüo musun? Evet, iyi olduğunu düşünüyorum / hayır kötü olduğunu düşünüyorum ",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "jasutisu riigu to abenjaazu to dochira ga katsu to omoimasu ka? Abenjaazu ga katsu to omoimasu" , meaning : "justice league ve avengers arasından hangisi kazanır diye düşünüosun? Avnegers kazanır diye düşünüyorum",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "firipinjin ni tsuite dou omoimasu ka" , meaning : "filipinliler hakkında ne/nasıl düşünüosun",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "fakusuki ga yakunitatanaku natta to omoimasu! Watashi mo sou omoimasu / watashi wa sou omoimasen" , meaning : "faks makinesi gereksiz oldu diye düşünüyo musun? Evet, öyle düşünüyorum / hayır, öyle düşünmüyorum.",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "nihonjin wa shokuji mae ni 'itadakimasu' to iimasu" , meaning : "japonlar yemek yemeden önce 'itadakimasu' derler",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "shingusan wa 'mata atodo denwa shimasu' to iimashita" , meaning : "shingusan 'daha sonra tekrar ararım' diye söyledi.",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "shingusan wa mata atodo denwa suru to iimashita" , meaning : "shingusan daha sonra tekrar ararım diye söyledi.",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "shokuji no owari ni nan to iimasu ka / gochisou samadeshita to iimasu" , meaning : "yemek bittikten sonra ne diye söylersin",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "you're welcome' wa nihongo de nan to iimasu ka? Dou itashimashite to iimasu" , meaning : "you're welcome' japoncada nasıl söylenir? 'dou itashimashite' diye söylenir",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "suuzii wa ashita no yotei ni tsuite nan to iimashita ka? Daijoubu da to iimashita" , meaning : "suzy yarının planı üzerine ne diye söylüyor? Tamam diye söylüyor.",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "watashi wa 'musty' to iimasu" , meaning : "",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "kore wa nihongo de me to iimasu" , meaning : "",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "kore wa nihongo de mimi / hana / kuchi / ha / hoho / kami to iimasu" , meaning : "",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "nihonjin wa kaerutoki 'sayoonara' to iimasu" , meaning : "",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp to iimasu", },
    { japanese : "asatte yuki ga furu deshou?" , meaning : "yarın kar yağar di mi? (yağar mı)",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp deshou", },
    { japanese : "jettokoosutaa wa tanoshii deshou?" , meaning : "kaykay eğlenceli di mi?",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp deshou", },
    { japanese : "watashi no kanojo wa kirei deshou?" , meaning : "benim kız arkadaşım güzel di mi?",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp deshou", },
    { japanese : "jonsonsan wa daigakusei deshou?" , meaning : "jonson üniversite öğrencisi di mi?",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp deshou", },
    { japanese : "kyou wa yuki ga furu deshou" , meaning : "bugün kar yağabilir",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp deshou", },
    { japanese : "kare wa kakkoii. kanojo ga mou iru deshou" , meaning : "o çok cool. Kız arkadaşı olmalı (vardır)",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp deshou", },
    { japanese : "juunen ni nihon ni sunde iru kara, anata wa hontouni nihongo ga jouzu deshou" , meaning : "10 yıldır japonyada yaşadığından, senin gerçekten japoncan iyi olmalı.",  book : "minna", unit : "21",  type : "sentence", pattern : "Splain || Vp deshou", },
    { japanese : "maitoshi sapporo de yuki matsuri ga arimasu" , meaning : "her sene sapporo'da kar festivali vardır",  book : "minna", unit : "21",  type : "sentence", pattern : "Place de N ga arimasu", },
    { japanese : "teiraa suuifuto wa manira de konsaato ga arimashita" , meaning : "taylor swift manila'da konseri vardı",  book : "minna", unit : "21",  type : "sentence", pattern : "Place de N ga arimasu", },
    { japanese : "nisen nijuu nen ni toukyou de tsugi no orinpikku ga arimasu" , meaning : "2020 yılında tokya'da gelecek olimpiyatlar var",  book : "minna", unit : "21",  type : "sentence", pattern : "Place de N ga arimasu", },
    { japanese : "nijusan nen mae ni koube de ookii jishin ga arimashita" , meaning : "23 yıl önce kobe'de deprem olmuştu",  book : "minna", unit : "21",  type : "sentence", pattern : "Place de N ga arimasu", },
    { japanese : "paatii de kare ni aimashita ka" , meaning : "partide onunla karşılaştım/tanıştım",  book : "minna", unit : "21",  type : "sentence", pattern : "Occasion de", },
    { japanese : "kaigi de iken o iimasu" , meaning : "toplantıda fikrimi söyleyeceğim",  book : "minna", unit : "21",  type : "sentence", pattern : "Occasion de", },
    { japanese : "omatsuri de kaimashita" , meaning : "festivalde satın aldım",  book : "minna", unit : "21",  type : "sentence", pattern : "Occasion de", },
    { japanese : "eiga demo mimasen ka" , meaning : "film falan izlemeyelim mi",  book : "minna", unit : "21",  type : "sentence", pattern : "… demo", },
    { japanese : "koohii demo nomimasen ka" , meaning : "kahve falan içmeyelim mi",  book : "minna", unit : "21",  type : "sentence", pattern : "… demo", },
    { japanese : "ranchi demo ikanai" , meaning : "öğle yemeğine falan gitmeyelim mi",  book : "minna", unit : "21",  type : "sentence", pattern : "… demo", },
    { japanese : "mou ikanai to" , meaning : "artık gitmem lazım",  book : "minna", unit : "21",  type : "sentence", pattern : "Vnai to", },
    { japanese : "sorosoro jikan da, shito o owaranai to" , meaning : "neredeyse zaman geldi, işi bitirmem lazım",  book : "minna", unit : "21",  type : "sentence", pattern : "Vnai to", },
    { japanese : "saigo no chansu da, ganbaranai to" , meaning : "en son şansım, elimden geleni yapmam lazım",  book : "minna", unit : "21",  type : "sentence", pattern : "Vnai to", },
    { japanese : "yuki no kaban" , meaning : "yukinin çantası",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "suteki na kaban" , meaning : "güzel çanta",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "furui kaban" , meaning : "eski çanta",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "niku o taberu hito" , meaning : "et yiyen insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "niku o tabenai hito" , meaning : "et yemeyen insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "niku o tabeta hito" , meaning : "et yemiş olan insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "niku o tabenakatta hito" , meaning : "et yememiş olan insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "akai kooto o kite iru hito" , meaning : "kırmızı mont giymekte olan insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "boushi o kabutte iru hito" , meaning : "şapka takmakta olan insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "hon o yonde iru hito" , meaning : "kitap okumakta olan insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "kimurasan no tonari ni iru hito" , meaning : "kimurusan'ın yanında (duran) insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "akarukute ii hito" , meaning : "neşeli ve iyi insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "kirei de yuumei na hito" , meaning : "güzel ve ünlü insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "kyuujuu sai no hito" , meaning : "90 yaşındaki insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "eigo no sensei" , meaning : "ingilizce öğretmeni",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "watashi wa toshokan kara hon o karimashita" , meaning : "ben kütüphaneden kitap ödünç aldım",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "watashi ga toshokan kara karita hon" , meaning : "kütüphaneden ödünç aldığım kitap",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "chichi wa resutoran de hataraite imasu" , meaning : "babam restoranda çalışmaktadır",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "chichi ga harataite iru resutoran" , meaning : "bababım çalışmakta olduğu restoran",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "watashi wa dareka ni agemasu" , meaning : "ben birisine veriyorum",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "watashi ga ageru hito" , meaning : "benim verdiğim insan",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "akai kooto o kite iru hito wa jonson san desu" , meaning : "kırmızı mont giymekte olan insan jonsondur",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "jonsonsan wa akai kooto o kite iru hito desu" , meaning : "jonson kırmızı mont giymekte olan insandır",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "watashi wa watashi ga toshokan kara karita hon o nakushimashita" , meaning : "ben kütüphaneden ödünç aldığım kitabı kaybettim",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "anata wa nisen nen ni umareta hito o shitte imasu ka" , meaning : "sen 2000 yıldında doğmuş birini tanıyo musun",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "kimurasan no tonari ni iru hito wa dare desu ka" , meaning : "kimurusan'ın yanında (duran) insan kimdir?",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier N", },
    { japanese : "anata ga sunde ita apaato wa doko desu ka" , meaning : "senin yaşamış olduğun apartman nerededir?",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier ga", },
    { japanese : "suki na kuruma ga dore desu ka" , meaning : "beğendiğin hoşuna giden araba hangisidir?",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier ga", },
    { japanese : "kinou mita eiga wa dou deshita ka" , meaning : "dün izlediğin film nasıldı",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier ga", },
    { japanese : "watashi wa toshokan kara hon o karimashita" , meaning : "kütüphaneden kitap ödünç aldım",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier ga", },
    { japanese : "watashi ga toshokan kara karita hon o nakushimashita" , meaning : "kütüphaneden ödünç aldığım kitabı kaybettim",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier ga", },
    { japanese : "chichi wa resutoran de hataraite imasu" , meaning : "babam restoranda çalışmaktadır",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier ga", },
    { japanese : "chichi ga harataite iru resutoran e ikimasu" , meaning : "babamın çalışmakta olduğu restorana gidiyorum",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier ga", },
    { japanese : "anata wa byouin de umaremashita" , meaning : "sen hastanede doğdun",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier ga", },
    { japanese : "anata ga umareta byouin o shitte imasu ka" , meaning : "sen doğduğun hastaneyi biliyor musun?",  book : "minna", unit : "22",  type : "sentence", pattern : "Smodifier ga", },
    { japanese : "supiichi o renshuu suru jikan ga arimasen" , meaning : "konuşma pratiği zamanı yoktur",  book : "minna", unit : "22",  type : "sentence", pattern : "Vd jikan || yakusoku || yotei", },
    { japanese : "atode tsuma to shokuji suru yakusoku o omoidashimashita" , meaning : "sonra karımla yemek yeme sözümü hatırladım",  book : "minna", unit : "22",  type : "sentence", pattern : "Vd jikan || yakusoku || yotei", },
    { japanese : "haisha ni iku yotei o wasurenaide" , meaning : "dişçiye gitme planını unutma",  book : "minna", unit : "22",  type : "sentence", pattern : "Vd jikan || yakusoku || yotei", },
    { japanese : "shiyakusho ni iku toki, zairyuu kaado o mottekite" , meaning : "valiliğe gittiğin zaman, oturma izni kartını alıp git",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "benkyou suru toki, ongaku o kikimasu" , meaning : "çalıştığım zaman, müzik dinlerim",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "wakaranai koto ga aru toki, watashi ni kiite kudasai" , meaning : "anlamadığın birşey olduğu zaman, bana sor lütfen",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "uchi de asagohan o taberu jikan ga nai toki, onigiri o densha de tabemasu" , meaning : "evde kahvaltı yeme zamanı olmadığı zaman, onigiriyi trende yerim",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "samui toki, amari dekakemasen" , meaning : "soğuk olduğu zaman, pek dışarı çıkmam",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "hima na toki, nomi ni ikimasu" , meaning : "boş olduğum zaman, içmeye giderim",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "kodomo no toki, yoku anime o mimashita" , meaning : "çocuk zamanı, sık sık anime izlerdim",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "yasumi no toki, nani o shimasu ka" , meaning : "tatil olduğu zaman, ne yaparsın?",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "unten shite iru toki, keitai denwa o tsukaimasen" , meaning : "araba kullanıyor olduğum zaman, cep telefonu kullanmam",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "nete iru toki, jishin ga arimashita" , meaning : "uyuyorken (uğuduğum esnada), deprem oldu",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "uchi e kaeru toki, denwa shimashita" , meaning : "eve dönerken (varmadan önce), telefon ediyorum",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "uchi e kaetta toki, denwa shimashita" , meaning : "eve döndüğümde (dönünce), telefon ettim",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "kuni e kaetta toki, fuku o kaimasu" , meaning : "ülkeme döndüğümde, giysi satın alıcam",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "taberu toki, 'itadakimasu' to iimasu" , meaning : "yemek yerken (öncesinde), 'itadakimasu' deriz",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "tabeta toki, 'gochisousama deshita' to iimasu" , meaning : "yemek yediğimizde (sonrasında)'afiyet olsun' deriz.",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "dekakeru toki, ittekimasu to iimasu" , meaning : "evi terkederken 'ittekimasu' deriz",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "uchi e kaetta toki, tadaima to iimasu" , meaning : "eve geri geldiğimiz zaman 'tadaima' deriz",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "watashi wa tegami o kaku toki pen o tsukaimasu." , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "watashi wa neru toki pajama o kimasu." , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "gohan o taberu toki ohashi de tabemasu." , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "densha ni noru toki, kippu o kaimasu." , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "michi ga wakaranai toki, hito ni kikimasu." , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "eiga ni ikanai toki, denwa shimasu." , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "doa o suru toki, shizuka ni shimete kudasai" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "michi o wataru toki, ki o tsukete kudasai" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "ryokoo o suru toki, kamara o motte ikimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "watashi wa jikan ga aru toki, nihongo o benkyou shimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "supootsu o suru toki, supootsuwea fuku o kimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "nerarenai toki, muzukashii hon o yomimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "okane ga nai toki, hatarakimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "kodomo ga inai toki, shizuka desu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "samui toki, oobaa o kimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "ha ga itai toki, haishasan ni ikimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "tenki ga ii toki, oyogi ni ikimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "sabishii toki, tomodachi ni denwa shimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "ongaku ga ikitai toki, anata wa doo shimasu ka?" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "hon ya yomitai toki, toshokan ni ikimasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "watashi wa gakusei no toki, yoku tenisu o shimashita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "watashi wa kodomo no toki, toukyou ni sunde imasu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "kyooto ni itta toki, takusan otera o mimashita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "shigakoogen ni itta taki, sukii o shimashita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "nihon ni itta toki, omiyage o kaimashita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "doa o aketa toki, hito ni butsukarimashita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "shinkansen ni notta toki, tomodachi ni aimashita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "toruko ni kita toki, aki deshita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "eiga ga owatta toki, yuki ga futte imashita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "tomodachi ga kita toki, watashi wa ofuro ni haitte imashita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "denwa o shita toki, anata wa imasen deshita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "tomodachi ga heya ni haitte kita toki, watashi wa benkyou o shite imashita" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "hajimete hikooki ni notta toki, kowakatta desu" , meaning : "",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai || Vta || Adj-i || Adj-na || N no toki, V", },
    { japanese : "akai botan o osu to, kaado ga demasu" , meaning : "kırmızı düğmeye basmanla, kart çıkar",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai to, V", },
    { japanese : "tsunami o hidari e mawasu to, oto ga ookiku narimasu" , meaning : "kolu sola döndürmenle ses büyük olur (ses yükselir)",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai to, V", },
    { japanese : "kousaten o migi e magaru to, shiyakusho ga arimasu" , meaning : "dört yol ağzında sola dönmenle, valiliği göreceksin (valilik var)",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai to, V", },
    { japanese : "asagohan o tabenai to, atama ga itakunaru" , meaning : "kahvaltıyı yememekle,başım ağırır",  book : "minna", unit : "23",  type : "sentence", pattern : "Vd || Vnai to, V", },
    { japanese : "shingou ga aka ni narimashita" , meaning : "trafik ışığı kırmızı oldu (kırmızı yandı)",  book : "minna", unit : "23",  type : "sentence", pattern : "N ga Adj || V", },
    { japanese : "atama ga itai" , meaning : "başım ağrıyor",  book : "minna", unit : "23",  type : "sentence", pattern : "N ga Adj || V", },
    { japanese : "tokei ga ugoite inai" , meaning : "saat hareket etmiyo (saat çalışmıyo)",  book : "minna", unit : "23",  type : "sentence", pattern : "N ga Adj || V", },
    { japanese : "kono botan o osu to, otsuri ga demasu" , meaning : "bu düğmeye basmanla, bozuk çıkar (makineden)",  book : "minna", unit : "23",  type : "sentence", pattern : "N ga Adj || V", },
    { japanese : "kouen o sampo shimasu" , meaning : "i take a stroll in the park",  book : "minna", unit : "23",  type : "sentence", pattern : "N o Vmovement", },
    { japanese : "michi o arukimasu" , meaning : "i walk along the road",  book : "minna", unit : "23",  type : "sentence", pattern : "N o Vmovement", },
    { japanese : "hashi o watarimasu" , meaning : "i go across the bridge",  book : "minna", unit : "23",  type : "sentence", pattern : "N o Vmovement", },
    { japanese : "kousaten o migi e magatte kudasai" , meaning : "turn right at the intersection",  book : "minna", unit : "23",  type : "sentence", pattern : "N o Vmovement", },
    { japanese : "ramasan wa watashi ni kono hon o kuremashita" , meaning : "ramasan bana bu kitabı verdi",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o kuremasu || agemasu", },
    { japanese : "samitasan wa ototo ni kono hon o kuremashita" , meaning : "samitasan ağbime bu kitabı verdi",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o kuremasu || agemasu", },
    { japanese : "obaasan wa watashi ni kono hon o kuremashita" , meaning : "büyükannem bana bu kitabı verdi",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o kuremasu || agemasu", },
    { japanese : "ramasan wa samitasan ni kono hon o agemashita" , meaning : "ramasan samitasana bu kitabı verdi",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o kuremasu || agemasu", },
    { japanese : "watashi wa ramsan ni kono hon o agemashita" , meaning : "ben ramsana bu kitabı verdim",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o kuremasu || agemasu", },
    { japanese : "watashi wa ototo ni kono hon o agemashita" , meaning : "ben ağbime bu kitabı verdim",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o kuremasu || agemasu", },
    { japanese : "sensei wa watashi ni ressun o oshiemashita" , meaning : "öğretmen bana ders verdi (öğretti anlamı)",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", },
    { japanese : "sensei wa watashi ni ressun o oshiete kuremashita / kureta" , meaning : "öğretmen bana ders verdi (ahlaki anlamda)",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", },
    { japanese : "amiru wa  yoshidasan ni kuruma o kashite agemasu" , meaning : "amir yoshidasana arabayı ödünç verdi",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", },
    { japanese : "watashi wa ojiichan ni koohii o irete agemashita" , meaning : "ben büyükbabaya kahve verdim",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", },
    { japanese : "watashi wa tanakasan o kuukou e okutte agemasu" , meaning : "tanakasan'ı havalimanına götürdüm (geçirdim, yolcu ettim)",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte agemasu || moraimasu || kuremasu", },
    { japanese : "watashi wa samita ni basunoriba made annai shite moraimashita" , meaning : "samita bana otobüs durağına kadar eşlik etti (verdi)",  book : "minna", unit : "24",  type : "sentence", pattern : "Receiver wa Giver ni Vte moraimasu", },
    { japanese : "watashi wa ani ni koko ni tsurete kite moraimashita" , meaning : "abim beni buraya getirdi (verdi)",  book : "minna", unit : "24",  type : "sentence", pattern : "Receiver wa Giver ni Vte moraimasu", },
    { japanese : "watashi wa tomodachi ni anime o shoukai shite moraimashita" , meaning : "arkadaşın beni animeyle tanıştırdı (verdi)",  book : "minna", unit : "24",  type : "sentence", pattern : "Receiver wa Giver ni Vte moraimasu", },
    { japanese : "sensei wa (watashi ni) kotae o setsumei shite kuremashita" , meaning : "öğretmen bana cevabı açıkladı",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", },
    { japanese : "haha wa watashi ni mainichi obentou o tsukette kuremasu  " , meaning : "annem hergün yemeği bana hazırladı (yaptı)",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", },
    { japanese : "ane wa watashini hikkoshi o tetsudatte kuremasu" , meaning : "kız kardeşim hareket etmeme yardım etti (verdi)",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", },
    { japanese : "watashi wa ane ni hikkoshi o tetsudatte moraimasu" , meaning : "ben kız kardeşimden hareket etmede yardımı aldım (verdim)",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", },
    { japanese : "ane wa watashi ni hikkoshi o tetsudatte kuremasu" , meaning : "kız kardeşim hareket etmeme yardım etti (verdi)",  book : "minna", unit : "24",  type : "sentence", pattern : "Giver wa Receiver ni Object o Vte kuremasu || moraimasu", },
    { japanese : "okaasan ga katte kuremashita" , meaning : "annem (bana) satın aldı (satın alıp verdi)",  book : "minna", unit : "24",  type : "sentence", pattern : "N ga V", },
    { japanese : "tanaka sensei ga oshiete kuremashita" , meaning : "tanaka hoca (bana) öğretti (verdi)",  book : "minna", unit : "24",  type : "sentence", pattern : "N ga V", },
    { japanese : "dare ga anata ni kono hon o kuremashita ka / agemashita ka? ramasan ga kuremashita" , meaning : "kim sana bu kitabı verdi? ramasan verdi",  book : "minna", unit : "24",  type : "sentence", pattern : "N ga V", },
    { japanese : "dare ga shiryou o junbi shimasu ka? haradasan ga junbi shimasu" , meaning : "kim belgeleri hazırladı? Haradasan hazırladı",  book : "minna", unit : "24",  type : "sentence", pattern : "N ga V", },
    { japanese : "dare ga barentain choko o moraimashita ka? Jon dake ga moraimashita" , meaning : "kim valentine çikolatası aldı? Jon sadece aldı",  book : "minna", unit : "24",  type : "sentence", pattern : "N ga V", },
    { japanese : "dare ni/kara moraimashita ka?" , meaning : "kimden aldın?",  book : "minna", unit : "24",  type : "sentence", pattern : "dare ni || kara", },
    { japanese : "dare ni kono hon o moraimashita ka? " , meaning : "kimden bu kitabı aldın?",  book : "minna", unit : "24",  type : "sentence", pattern : "dare ni || kara", },
    { japanese : "dare ni eigo o oshiete moraimashita ka? simusu sensei ni oshiete moraimashita" , meaning : "kimden ingilizce öğrendin (aldın)? Sumisu hocadan öğrendim",  book : "minna", unit : "24",  type : "sentence", pattern : "dare ni || kara", },
    { japanese : "dare kara/ni barentain choko o moraimashita ka? maria kara moraimashita" , meaning : "kimden valentine çikolatası aldın? Maria'dan aldım",  book : "minna", unit : "24",  type : "sentence", pattern : "dare ni || kara", },
    { japanese : "ichioku en ga atta ra, shigoto o yamemasu" , meaning : "yüz milyon yenim olursa, işimi bırakacağım",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vta ra) , Main Sentence", },
    { japanese : "jikan ga nakatta ra, konakute mo ii desu" , meaning : "eğer zaman yoksa, gelmesen de olur",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vta ra) , Main Sentence", },
    { japanese : "yokatta ra, douzo" , meaning : "istersen buyur (al)",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vta ra) , Main Sentence", },
    { japanese : "hima datta ra, asobimashou" , meaning : "eğer boşsan, dışarı çıkıp oynayalım",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vta ra) , Main Sentence", },
    { japanese : "genki ni natta ra, ippai nomimashou" , meaning : "iylişence, bir kadeh içelim",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vta ra) , Main Sentence", },
    { japanese : "toshi o totta ra, inaka ni sumitai" , meaning : "yaşım ilerleyince, kırsala (köye) yerleşmek istiyorum",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vta ra) , Main Sentence", },
    { japanese : "eki ni tsuita ra, denwa shite kudasai" , meaning : "durağa vardığında, telefon aç lütfen",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vta ra) , Main Sentence", },
    { japanese : "shigoto ga owatta ra, kaette mo ii desu" , meaning : "işi bitirdikten sonra, eve gidebilirsin",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vta ra) , Main Sentence", },
    { japanese : "watashi wa benkyou shite mo, wakarimasen" , meaning : "çalışsam da, anlamıyorum",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vte mo), Main Sentence", },
    { japanese : "yasukute mo watashi wa guruupu ryokou ga suki ja nai" , meaning : "ucuz olsa da, grup seyahatlerini sevmiyorum",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vte mo), Main Sentence", },
    { japanese : "benri de mo sumaho o kaimasen" , meaning : "kullanışlı olsa da akıllı telefonları sevmiyorum",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vte mo), Main Sentence", },
    { japanese : "yasumi de mo, isogashii desu" , meaning : "tatil olsam da, meşgulum",  book : "minna", unit : "25",  type : "sentence", pattern : "Vconditional (Vte mo), Main Sentence", },
    { japanese : "moshi ichioku en ga atta ra, shigoto o yamemasu" , meaning : "ola ki yüz milyon yenim olsa, işi terkederim",  book : "minna", unit : "25",  type : "sentence", pattern : "Moshi Vconditional(Vta ra), Main Sentence", },
    { japanese : "moshi yokatta ra, douzo" , meaning : "ola ki istersen, buyur",  book : "minna", unit : "25",  type : "sentence", pattern : "Moshi Vconditional(Vta ra), Main Sentence", },
    { japanese : "moshi nihon ni itta ra, fankopoppu o katte kuremasen ka" , meaning : "ola ki japonyaya gittin, bana fankopop oyuncağı alıp vermez misin?",  book : "minna", unit : "25",  type : "sentence", pattern : "Moshi Vconditional(Vta ra), Main Sentence", },
    { japanese : "ikura kangaete mo, kanojo no koto o omoida shimasen" , meaning : "ne kadar düşünsem de, onu hatırlayamıyorum",  book : "minna", unit : "25",  type : "sentence", pattern : "Ikura Vconditional (Vte mo), Main Sentence", },
    { japanese : "ikura takakute mo, anata ni katte agemasu" , meaning : "ne kadar pahalı olsa da, sana alıp vereceğim",  book : "minna", unit : "25",  type : "sentence", pattern : "Ikura Vconditional (Vte mo), Main Sentence", },
    { japanese : "ikura benri de mo, sumaho o kaimasen" , meaning : "ne kadar kullanışlı olsa da, akıllı telefon satın almıyorum",  book : "minna", unit : "25",  type : "sentence", pattern : "Ikura Vconditional (Vte mo), Main Sentence", },
    { japanese : "migeru ga tsuita ra, watashi ni oshiete kudasai" , meaning : "miguel vardığında, bana söyle lütfen (haber ver)",  book : "minna", unit : "25",  type : "sentence", pattern : "Subject ga Subrdinate || Conditional", },
    { japanese : "sumaho ga benri de mo, kaimasen" , meaning : "akıllı telefon kullanışlı olsa da, almıyorum",  book : "minna", unit : "25",  type : "sentence", pattern : "Subject ga Subrdinate || Conditional", },
    { japanese : "okaasan ga byouki no toki, jibun de ryouri o shimasu" , meaning : "annem hasta olduğu zaman, ben kendim yemek yapıyorum",  book : "minna", unit : "25",  type : "sentence", pattern : "Subject ga Subrdinate || Conditional", },
    { japanese : "yuki ga furu to, densha ga tomarimasu" , meaning : "kar yağmasıyla, trene bindik",  book : "minna", unit : "25",  type : "sentence", pattern : "Subject ga Subrdinate || Conditional", },
    { japanese : "akachan ga umareru mae ni, iroiro junbi shinai to" , meaning : "bebeğim doğmasından önce, onubunu hazırlamak zorundayım",  book : "minna", unit : "25",  type : "sentence", pattern : "Subject ga Subrdinate || Conditional", },
    { japanese : "samui n desu" , meaning : "because it is cold",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "kireina n desu" , meaning : "because it is beautiful",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "yamaguchisan eigo ga jouzu desu ne. kaigai ni sunde ita n desu ka / ee, amerika de benkyou o shimashita" , meaning : "yamaguchisan ingilizceniz çok iyi? Acaba yurt dışında yaşadığınız için mi? / evet, amerika'da öğrenim gördüm.",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "sutekina shatsu desu ne. doko de katta n desu ka? / harajuku de kaimashita" , meaning : "tshirtün güzelmiş. Nereden aldın acaba? / harajuku'da aldım",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "doushite okureta n desu ka / densha ga okereta n desu" , meaning : "neden geç kaldın acaba? / tren geç kaldığından",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "doushita n desu ka / atama ga itai n desu" , meaning : "ne oldu acaba? Problem ne ki? / başım ağırıyor da",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "mainichi hirugohan o tsukurimasu ka / iie, jikan ga nai n desu" , meaning : "her gün akşam yemeği yapar mısın / hayır, zamanım olmadığından",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "okane ga nai n desu ga, ashita haratte mo ii desu ka" , meaning : "ummm, param yok da, yarın ödesem olur mu?",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "watashi wa kristinasan no paatii iku n desu ga, issho ni ikimasen ka" , meaning : "kristinasan'ın partisine gidiyorum da, birlikte gidelim mi?",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "yarikata ga wakaranai n desu ga, oshiete itadakemasen ka" , meaning : "I don't know how to do it, could you please help me? (very polite)",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "repooto o owarimashita, dasu mae ni mite itadakemasen ka" , meaning : "I finished the report, before submitting could you please have a look?",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "sochira de denwa o wasuremashita ga, sogashite itadakemasen ka" , meaning : "I forgot my phone there, could you please search for it?",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "onaka ga suita, doko de tabeta ra ii desu ka" , meaning : "karnım acıktı, nerde yesem iyi olur?",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "omiyage o kaitai n desu ga, nani o katta ra ii desu ka" , meaning : "souvenir almak istiyorum da, ne alsam iyi olur?",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "pasupooto o nakukarimashita, dou shita ra ii desu ka" , meaning : "pasaportumu kaybettim, nasıl yapsam acaba?",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "kanojo ni kudamono o ageta hou ga ii desu ka / ummm, kudamono wa suki ja nai to omoimasu" , meaning : "ona meyve versek daha ii olur mu? / umm, meyve sevmez diye düşünüyorum",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "basuketto booru o shimashou / gomen, supootsu wa jouzu ja nai n desu" , meaning : "basketbol oynayalım hadi / üzgünüm, spora yeteneğim yok da",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "tesuto wa nai n desu ka / iie, tesuto wa arimasu" , meaning : "test yok mu acaba? / hayır, test var",  book : "minna", unit : "26",  type : "sentence", pattern : "", },
    { japanese : "watashi wa eigo o hanasemasu" , meaning : "I can speak english",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "hitori de kuukou de ikemasu ka" , meaning : "tek başına alana gidebilir misin?",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "ashita roku ji ni okiraremasu ka" , meaning : "yarın saat 6da kalkabilir misin?",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "chuumon ga mada kaeraremasu ka" , meaning : "can I still change my order?",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "ashita kara sono eiga ga miraremasu" , meaning : "you can watch the movie staring tomorrow",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "kono machi kara fujiyama ga miemasu" , meaning : "from this road fujiyama can be seen",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "oodyoo gaido de setsumei ga kikemasu " , meaning : "audio guide ile açıklamayı dinleyebilirsin",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "ano heya kara fushigina oto ga kikoemasu" , meaning : "o odadan tuhaf bir ses duyuluyor",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "gakkou no chikaku ni atarashii biru ga dekimashita" , meaning : "okulun yakınında yeni bir bina yapıldı",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "bangohan ga dekimashita" , meaning : "dinner is ready",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "heya ni wa terebi ga arimasu" , meaning : "odada tv var (vurgu odada)",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "heya ni terebi ga arimasu" , meaning : "odada tv var (vurgu tvde)",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "mise dewa sake ga kaemasu" , meaning : "dükkanda içki alabilirsin",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "kono biru kara wa hanabi ga miemasu" , meaning : "from this building fireworks can be seen",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "sarada o tabemashita, keeki mo tabemashita" , meaning : "salata yedim, kek de yedim",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "shimizusan wa eigo ga hanasemasu, chuugokugo mo hanasemasu" , meaning : "shumizu ingilizce konuşabilir, çince de konuşabilir",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "heya ni wa terebi ga arimasu, ribinguruumu ni mo terebi ga arimasu" , meaning : "odada tv var, oturma odasında da tv var",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "kopii wa hitotsu shika arimasen" , meaning : "bir tane dışında fotokopi yok",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "kopiiwa hitotsu dake arimasu" , meaning : "sadece bir tane fotokopi var",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "kanojo ni shika katte agenai" , meaning : "onun haricinde kimseye almıyorum",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "kanojo dake ni katte ageru" , meaning : "sadece ona alıyorum",  book : "minna", unit : "27",  type : "sentence", pattern : "", },
    { japanese : "warai nagara, omoshiroi bangumi o mimashita" , meaning : "gülerek, ilginç bir tv programı izledim",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "arubaito o yari nagara, daigaku de benkyou shimasu" , meaning : "bir yandan part time çalışarak, diğer yandan üniversitede okuyorum",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "hon o kaki nagara, eigo o oshiemashita" , meaning : "bir yandan kitap yazarak, diğer yandan ingilizce öğretiyordum.",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "maiasa, gohan o taberu mae ni, jogingu o shite imasu" , meaning : "her sabah, kahvaltı yemeden önce koşu yapıyorum",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "do nichi wa sentaku o shite imasu" , meaning : "Her Cumartesi Pazar çamaşır yıkıyorum",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "maiban biiru o nonde imashita" , meaning : "her akşam bira içiyordum",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "ane no apaato wa atarashii shi, niwa mo arimasu" , meaning : "kız kardeşimin apartmanı yeni ve (ayrıca), bahçesi de var.",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "sukina hito wa yasashii shi, kirei da shi, ninki ga arimasu" , meaning : "sevdiğim insan, nazik, güzel ve popülerdir",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "shachou wa garciasan o erabimashita. Kanojo wa eigo ga hanaseru shi, nesshin da shi, keiken mo arimasu" , meaning : "müdür garciasan'ı seçti. O ingilizce konuşablir, çalışkandır ve tecrübelidir (başka da çok özelliği vardır)",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "koohii demo nomimasen ka / gomen, haha o tetsudau shi, repooto o yarana kereba naranai" , meaning : "kahve falan içmesek mi / üzgünüm, anneme yarım etmem (bunun yaında), raporu halletmezsem olmaz",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "eki kara mo chikai shi, kono manshon o kaimasu" , meaning : "istanyona yakın falan (ve başka özelliklerden), bu evi satın alıyorum",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "doushite kono manshon o erandan desu ka / jimu ga aru shi, yasui shi, sore ni eki kara mo chikai desu" , meaning : "neden bu evi seçtiniz acaba? / gym var, ucuz ve istasyona yakındır (ve daha başka)",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "Kanojo wa eigo ga hanaseru shi, nesshin da shi, keiken mo arimasu, sore de shachou wa garciasan o erabimashita." , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "yoku kono kissaten ni kurun desu ka" , meaning : "sık sık bu kafeye kelir misin acaba?",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "doa ga aite imasu" , meaning : "kapı açıktır (açık durumda)",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "mado ga warete imasu" , meaning : "pencere bozuktur (kırıktır)",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "denki ga tsuite imasu" , meaning : "lamba açık (açık halde)",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "densha ga konde imasu" , meaning : "tren kalabalıktır",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "kono jidouhanbaiki wa kowarate imasu" , meaning : "bu vending machine bozuktur",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "ano fukuro wa yaburete imasu" , meaning : "bu torba yırtık",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "sono esukareetaa wa koshou shite imasu" , meaning : "o asansör bozuk (arızalı)",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "inouesan ga kureta kureta keeki wa zenbu tabete shimaimashita" , meaning : "inouesan'ın bana verdiği keki yiyip bitirdim (tamamen hepsini yedim)",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "shukudai wa mou yatte shimaimashita ka" , meaning : "ödevini artık bitirdin mi (tamamen)",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "kaeru jikan made ni repooto o kaite shimaimasu" , meaning : "gitme zamanım gelene kadar raporu (tamamlamış) bitirmiş olurum",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "kippu o nakushite shimaimashita ga, dou shitara ii desu ka" , meaning : "bileti kaybettim (mahçup), ne yapsam iyi olur?",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "machigaete shimaimashita, mou ikkai yarimasu" , meaning : "yanlış yaptım (mahçup), bir kere daha deniyim",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "hito ga ookatta desu, sore de supiichi o wasurete shimaimashita" , meaning : "çok insan vardı, bu yüzden konuşmamı unuttum (mahçup)",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "kippu ga arimashita, otoshimashita yo" , meaning : "bilet (çıktı ortaya) buldum, düşürdün mü ki.",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "atta!, aa, yokatta" , meaning : "buldum (ortaya çıktı, işte burda), yaşasın",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "nanka iitai koto ga arimasu, dokoka de hanasemasu ka" , meaning : "konuşmak istediğim bir şey var, biryerde konuşabilir miyiz",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "haha wa souji shita toki, ii osara ga dokoka ni katazukemashita" , meaning : "annem temizlik yaptığında, tabakları kaldırır (başka yere koyar)",  book : "minna", unit : "29",  type : "sentence", pattern : "", },
    { japanese : "tana ni ningyou ga kazatte arimasu" , meaning : "rafta oyuncak bebek sergilenmekte var (bu amaçla konulmuş)",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "kabe ni kagami ga kakete arimasu" , meaning : "duvarda asılı ayna var",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "ningyou wa tana ni kazatte arimasu" , meaning : "oyuncak bebek (vurgu bebekte) rafta sergilenmekte (bu amaçla konulmuş)",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "gamibako wa sumi ni oite arimasu" , meaning : "çöp tenekesi köşede konulmuş var",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "puresento wa mou katte arimasu" , meaning : "hediyeleri çoktan satın aldım",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "paatii no jikan wa mou shirasete arimasu ka" , meaning : "parti zamanı çoktan bildirildi mi?",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "hoteru wa mou yoyaku shite arimasu" , meaning : "çoktan otel reserve ettim",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "mado ga shimete arimasu" , meaning : "pencere kapatılmış durumda",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "mado ga shimatte imasu" , meaning : "pencere kapalı durumda",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "otousan kuru mae ni heya o souji shite oite kudasai" , meaning : "baban gelmeden önce odayı temizlemeyi hallet (temizle bitir) lütfen",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "jugyou no mae ni, yoshuu shite okimasu" , meaning : "dersten önce, dersi hazırlayıp bitir",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "shokuji ga owattara, osara wa soko ni oite oite kudasai" , meaning : "yemeğini bitirdiğinde, tabakları orada bırak lüften",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "mada yuki ga futte imasu" , meaning : "hala kar yağıyor",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "dougu o mada tsukatte imasu kara, sonomama ni shite oite kudasai" , meaning : "aletleri hala kullandığımdan, öylece orada bırak lütfen",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "buroodoweide muujikaru o mitai desu / sore wa ii desu ne" , meaning : "brodway'de muzikal izlemek istiyorum / o çok iyi",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "okane o kashite moraimasu ka / sore wa chotto…" , meaning : "para ödünç alabilir miyim? / o biraz (zor) …",  book : "minna", unit : "30",  type : "sentence", pattern : "", },
    { japanese : "tsukareta kara, chotto kyuukei shiyou (shimashou)" , meaning : "yarolduğumdan, biraz ara verelim",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "yoku mienai kara, mae no hou ni suwarou (suwarimashou)" , meaning : "iyi göremediğimizden, daha öne oturalım",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "kore suki? Kaou ka? (kaimashou ka)" , meaning : "beğendin mi? Satın alalım mı?",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "omoi desu yo, tetsudaou ka? (tetsudaimashou ka)" , meaning : "ağır galiba, yardım edeyim mi?",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "kodomo wa daigaku o sotsugyou shite kara, shujin to ryokou e ikou to omotte imasu" , meaning : "çocuğum üniversiteden mezun olduğundan sonra, kocamla dünya seyahatine çıkmayı düşünmekteyim (uzun zamandır)",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "ie de tabeyou to omoimasu" , meaning : "evde yemek yemeyi düşünüyorum",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "onii san wa eigo no shiken o ukeyou to omotte imasu" , meaning : "abim ingilizce sınavına girmeyi düşünüyor",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "roku gatsu matsu made ni resson 50 made owaru tsumori desu" , meaning : "altıncı aya kadar ders 50 sonuna kadar bitirmeyi planlıyorum",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "rainen kanojo to kekkon suru tsumori desu" , meaning : "gelecek yıl onunla evlenmeyi planlıyorum",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "natsu yasumi o toranai tsumori desu" , meaning : "yaz tatili almamayı planlıyorum",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "jibun no kuni ni kaeru tsumori wa arimasen" , meaning : "kendi ülkeme dönmeyi planlamıyorum",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "kaigi wa ichi ji ni hajimaru yotei desu" , meaning : "toplantının saat birde başlaması ayarlandı",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "kekkon shiki ni okyaku san wa 50 nin gurai kuru yotei desu" , meaning : "düğün törenin davetli olarak 50 kişinin gelmesi ayarlandı",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "ryokou wa 3 shuukan no yotei desu" , meaning : "gezi 3 hafta olarak ayarlandı",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "shucchou wa Cebu no yotei desu" , meaning : "iş gezisi Cebu'da ayarlandı",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "kono hon wa mou yomimashita ka / iie, mada yonde imasen" , meaning : "bu kitabı çoktan okudun mu? / Hayır hala okumadım",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "mada tabete inai kara, issho ni tabenai?" , meaning : "hala yemek yemediğinden, birlikte yiyelim mi?",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "toukyou ni nai mono ga hitotsu dake aru. Sore wa utsukushii shizen da" , meaning : "tokyoda olmayan (eksiklik) bir tanedir. O da güzel doğa (doğal alan).",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "ii shigoto o mitsukemashita. Kono shigoto ga kyuuryou wa takai desu" , meaning : "iyi bir iş buldum. Bu işin maaşı yüksek.",  book : "minna", unit : "31",  type : "sentence", pattern : "", },
    { japanese : "neko no hou ga kawai desu" , meaning : "kediler daha tatlıdır",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "karada ni warui desu kara, tabako o yameta hou ga ii desu" , meaning : "sağlığa kötü (zaralı) olduğundan, tütünü bırakman daha iyi olur",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "natsu yasumi mi hoteru ga komimasu no de, hayaku yoyaku shita hou ga ii desu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "kinou kara netsu ga tsuduite imasu ka? Byouin e itta hou ga ii desu" , meaning : "dünden beri ateşin devam ediyo mu? Hastaneye gitsen daha iyi olur",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "choushi ga warui desu ka?  Muri o shinai hou ga ii desu" , meaning : "durumun (halin) kötü mü (kötü mü hissediyosun?) Aşırı çalışmasan daha iyi olur",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "yuugata ni wa ame ga yamu deshou " , meaning : "akşamleyin yağmur duracak gibi (olsasılık)",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "gogo wa kaigi desu kara, buchou wa isogashii deshou" , meaning : "öğleden sonra toplantı olduğundan, müdür meşgul olur gibi (olasılık)",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "ni shuukan no ryokou ni wa goman en ga juubun deshou" , meaning : "iki haftalık gezi için elli bin yen yeterli olur gibi (olasılık)",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "mikka kan netsu ga tsuduite irun desu ka? İnfuruenza deshou" , meaning : "3 gün sürmekte olan ateş mi? İnfluenza olabilir (olasılık)",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "densha ni maniau deshou ka" , meaning : "trene zmanında varabilecek miyiz acaba?",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "zairyou ga tarinai kedo, sore de iin deshou ka" , meaning : "malzeme eksik ama, bu iyi olur mu?",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "chotto souji shimasu, okyakusan kuru kamoshiremasen" , meaning : "biraz temizlik yapıyorum, misafir gelebilir (daha düşük olasılık, ola ki)",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "kooto o motteikinasu, yuugata ni wa samui kamoshiremasen" , meaning : "montumu yanıma alıyorum, akşamleyin soğuk olabilir (daha düşük olsasılık, ola ki)",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "densha de ikimasu, chuushajyou ga nai kamoshiremasen" , meaning : "trenle gidiyorum, otopark olmayabilir (daha düşük olasılık, ola ki)",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "otoosan wa sugoi kibishii kara, dame kamoshiremasen" , meaning : "babam acaip sert olduğundan, olmaz sanırım",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "serenasan wa anna ni shite iru kara, kitto shiai de katsu deshou" , meaning : "serenasan o kadar çok pratik yaptı ki, maçta kesin kazanır sanırım.",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "mou jikan desu, sensei wa kuru deshou ka / tabun kuru deshou, tabun kuru to omoimasu" , meaning : "zaman doldu, öğretmen gelir mi acaba? belki, gelebilir, belki geleceğini düşünüyorum.",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "gomen, repooto o yaranai to ikenai, moshikashitara paatii ni ikenai kamoshiremasen" , meaning : "üzgünüm, raporu bitirmezsem olmaz, partiye gelemeyebilirim",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "nani ka shinpaina koto ga arun desu ka" , meaning : "endişelendiğin herhangi bir şey var mı?",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "dareka shiranai hito ni chokoreeto o moraimashita" , meaning : "tanımadığım birsisinden çikolata aldım",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "dokoka ii resutoran arimasu ka" , meaning : "herhangi biryerde iyi restoran var mı?",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "itsuka toukyou ni iru toki, aimashou" , meaning : "tokyo'da olduğun herhangi bir zaman buluşalım",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "juuman en de geemingu pasokon ga kaemasu ka" , meaning : "on onbin ile oyun bilgisayaru alınabilir mi?",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "ichi jikan de kuruma o naosemasu ka" , meaning : "bir saatte arabayı onarılabilir mi?",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "100 mai no koopi de tarimasu ka" , meaning : "100 adet kopya yeterli midir?",  book : "minna", unit : "32",  type : "sentence", pattern : "", },
    { japanese : "hayaku nero!" , meaning : "erken uyu",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "koutsuu kisoko o mamore!" , meaning : "trafik kurallarına riayet et",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "sake o nomuna!" , meaning : "alkol içme",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "urusai! Sawaguna!" , meaning : "çok gürültülü! Gürültü yapmayın!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "ashita hima deshou? Uchi e koi yo!" , meaning : "yarın müsaitsin? Eve gel ya!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "kane o dase yo! Betsu betsu ni haraou!" , meaning : "para çıkar ya! Ayrı ayrı ödeyelim!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "koko de dame da yo, tabako o suuna" , meaning : "burada olmaz ya, sigara içmeyin!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "itai! Booru o nageruna yo!" , meaning : "acıdı! Topu atma ya!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "nigero!" , meaning : "koşun! (kaçın!)",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "yamero!" , meaning : "yeter! Kes şunu! Dur artık!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "abunai yo! Hashiruna!" , meaning : "tehlikeli ya! Koşmayın!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "kowarete imasu! Erebeetaa o tsukauna" , meaning : "arızalı! Asansörü kullanmayın!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "yasume!" , meaning : "dinlenin!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "yasumuna!" , meaning : "dinlenmeyin! Durmayın!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "ganbare!" , meaning : "haydi! Jia you!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "makeruna!" , meaning : "kaybetmeyin! Yenilmeyin!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "tomare!" , meaning : "dur!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "hairuna!" , meaning : "don't enter!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "supiido otose!" , meaning : "hızını azalt!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "zenbu tabenasai!" , meaning : "hepsini ye!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "nenasai!" , meaning : "uyu!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "shukudai o dashinasai!" , meaning : "ödevini teslim et!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "suwarinasai!" , meaning : "otur!",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "ano kanji nan to yomimasu ka (yomin desu ka) / 'hijouguchi' to yomimasu" , meaning : "o kanji nasıl okunur? / 'hijouguchi' diye okunur",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "asoko ni nan to kaite arimasu ka / 'honjitsu kyuugyou' to kaite arimasu" , meaning : "orada ne yazılı (var) ? / 'honjitsu kyuugyou' yazılı var",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "kono kanji wa dou iu imi desu ka / 'eigyouchuu' wa mise ga aite iru to iu imi desu" , meaning : "bu kanji ne anlama gelir / 'eigyouchuu' dükkan açık anlamına gelir",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "shiyoukinshi' dou iu imi desu ka / tsukatte wa ikenai to iu imi desu" , meaning : "shiyoukinshi' ne anlama gelir / 'kullanmak yasak' anlamına gelir",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "shachou wa nan to itte imashita ka / 'ato de kaigi ga atte, seki o hazushimasu' to itte imashita" , meaning : "müdür ne söyledi / 'daha sonra bir toplantı var, yerimde olmayacağım (yerimi terkedeceğim)' diye söyledi.",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "sensei wa nan to itte imashita la / oji san wa mou nakunatta to itte imashita" , meaning : "doktor ne söyledi / amcamın (artık, çoktan) öldüğünü söyledi",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "sofia san ni 'ato de denwa o kudasai' to tsutaete itadakimasen ka" , meaning : "sofia'ya 'sonra beni ara' diye iletebilir misin lütfen",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "minna ni kaigi wa ashita no juu ji da to tsutaete itadakimasen ka" , meaning : "herkese toplantı yarın saat 10dadır diye iletebilir misin lütfen",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "choushi ga warui no de, kachou ni kyou yasumi to tsutaete itadakimasen ka" , meaning : "keyfim biraz kötü olduğundan, bölüm müdürüne bugün izin yapacağımı iletir misin lütfen",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "obaachan ni gomen, gogo wa isogashii to tsutaete itadakimasen ka" , meaning : "nineme maalesef, öğleden sonra meşgul olduğumu iletebilir misin lütfen",  book : "minna", unit : "33",  type : "sentence", pattern : "", },
    { japanese : "watashi ga suru toori ni yatte kudasai " , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "watashi ga iu toori ni kaite kudasai" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "haha ni naratta toori ni ryouri o tsukurimashita " , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "haisha ni oshiete moratta toori ni ha o migaite imasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "yajirushi no toori ni itte kudasai" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "sen no toori ni kami o kirimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "zu no toori ni kami o omimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "setsumeisho no toori ni kagu o kumitatemasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "undou shita ato de biiru o nomimashita" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "atarashii no o katta ato de nakushita tokei ga mitsukarimashita" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "konsaato no ato de shokuji o shimashou" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "jogingu no ato de shawa o abimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "shouyu o tsukete sushi o tabemasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "itsumo kasa o motte dekakemasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "shiito beruto o shinai de unten suru koto ga abunai desu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "satou o irenai de koohii o nomimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "yuube wa nenai de, ikea no atarashii kagu o kumitatemashita" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "keeki wa kawanai de, jibun de tsukurimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "reshiito wa sutenai de, atsumete imasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "kinoo wa doko mo ikanai de uchi de geemu o shimashita" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "", },
    { japanese : "aki ni nareba, ki no ha no iro ga kawarimasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "michi ga dekireba, mura no seikatsu wa motto benri ni narimasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "tabeteba, suki ni naru kamoshirenai" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "minna san wa hayaku kureba, kuu ji no denja ni maniau deshou " , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "kotae ga tadashii kereba, maru o tsukete kudasai" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "tenki ga yo kereba, okujyou kara fujisan ga miemasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "kono houhou ga dame nara, ano houhou de yarimashou" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "25 meetoru gurai nara oyogimasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "kyou nimotsu ga tsukana kereba, sugu renraku shite ne" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "isogashi kuna kereba, chotto hanashite mo ii desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "kirei de na kereba (kire ja na kereba), mou ikkai aratte ne" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "muryou de na kereba (muryou ja na kereba), hoshikunai desu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "kaado ga denai n desu ga… / akai botan o osu to, kaado ga demasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "akai botan o oseba, kaado ga demasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "jikan ga nakattara, tabemasen" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "jikan ga nakereba, tabemasen" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "isogashi kunakattara, kite kudasai" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "wakaranakattara, kiite kudasai" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "onsen nara, hakuba ga ii desu yo" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "yarikata ga wakaranain desu ga, dou sureba ii desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "kopii ki wa kami ga nain desu ga, dare ni ieba ii desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "osou shiki ni ikun desu ga, nani o motte ikeba ii desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "tomodachi ga kekkon surun desu ga, donna mono o agereba ii desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "kono ongaku o kikeba, kiku houdo suki narimasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "ninniku o takusan ireba ireru houdo oishi to omoimasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "kikai wa botan ga sukuna kereba, sukunai houdo ii desu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "", },
    { japanese : "ryokou ni iku n desu ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "ame ga futte iru n desu ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "atarashii pasokon o katta n desu ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "erebeetaa ni noranai n desu ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "omoshiroi dezain no kutsu desu ne. doko de katta n desu ka " , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "kireina shashin desu ne. doko de totta n desu ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "doushite okureta n desu ka / basu ga konakatta n desu" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "doushite kaisha o yameru n desu ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "doushita n desu ka / chotto kibun ga warui n desu ne" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "saifu o wasureta n desu" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "doushite keeki o tabenai n desu ka / daietto o shite iru n desu" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "yoku karaoke ni ikimasu ka / iie, amari ikimasen. karaoke wa suki ja nai n desu" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "mai asa shinbun o yomimasu ka / iie, yomimasen. jikan ga nai n desu" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "konban shokuji ni ikimasen ka / sumimasen. kyou wa chotto yakusoku ga aru n desu" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "atama ga itai n desu ga, kaette mo ii desu ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "ashita tomodachi to sukii ni iku n desu ga, sasakisan mo issho ni ikimasen ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "oyu ga denai n desu ga…" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  n desu (ka)", },
    { japanese : "ii sensei o shoukai shite itadakemasen ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vte itadakemasen ka", },
    { japanese : "denwa bango ga wakaranai n desu ga, oshiete itadakemasen ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vte itadakemasen ka", },
    { japanese : "shiyakusho e ikitai n desu ga, dono basu ni notta ra ii desu ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vta ra ii desu ka", },
    { japanese : "kabuki o mitai n desu ga, doko de chiketto o katta ra ii desu ka" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vta ra ii desu ka", },
    { japanese : "bijutsukan o kengaku o shitai n desu ga, dou shita ra ii desu ka / chokusetsu itta ra ii desu yo" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "N wa suki || kirai || n desu", },
    { japanese : "yoku karaoke ni ikimasu ka / iie, amari ikimasen. karaoke wa suki ja nai n desu" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "N wa suki || kirai || n desu", },
    { japanese : "neko ga suki desu ka / iie, kirai desu. inu wa sukina n desu" , meaning : "",  book : "minna", unit : "26",  type : "sentence", pattern : "Vpotential", },
    { japanese : "kanji o yomu koto ga dekimasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi wa hashi ga tsukaemasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "kanji ga yomemasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "jitensha ga shuuri dekimasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "kono konbini de kaemasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "pasokon ga kaemasen. okane ga tarinai n desu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "hashiremasen. ashi ga itai n desu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "kochira de paatii ga dekimasu ka" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "doko de mo hitori de ikemasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "yama no ue kara umi ga miemasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "tonari no heya kara gitaa no oto ga kikoemasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "sensei no koe ga kikoemasen" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "anou, ushiro made kikoenai n desu ga…" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "eki no mae ni ookii suupaa ga dekimashita" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "suiyoubi ni dekimasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "kouen no tonari ni dekimasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "bangohan ga dekimashita" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi wa osake ga nomemasu" , meaning : "ben içki içebilirim",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi no chichi wa furansugo ga hanasemasu" , meaning : "benim babam fransızca konuşabilir",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi wa kono tsukue ga motemasu" , meaning : "ben bu masayı taşıyabilirim",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi no ani wa eigo no shinbun ga yomemasu" , meaning : "benim abim ingilizce gazete okuyabilir",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "konban watashi wa anata ni aemasu ka" , meaning : "bu akşam ben seninle buluşabilir miyim",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "ashita anata wa eiga ni ikemasu ka / ikemasen" , meaning : "yarın sen sinemaya gidebilir misin? Gidemem",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi wa doitsugo ga amari hanasemasen" , meaning : "ben almancayı pek konuşamam",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi wa supeingo ga zenzen hanasemasen" , meaning : "ben ispanyolcayı hiç konuşamam",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi wa katakana ga sukushi / yoku kakemasu" , meaning : "ben katakanayı biraz okuyabilirim / iyi okuyabilirim",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "anata wa osushi ga taberaremasu ka? Hai, watashi wa osushi ga taberaremasu." , meaning : "sen sushi yiyebilir misin? Evet, ben sushi yiyebilirim.",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "anata wa densha no naka de nerare masu ka? İie, watashi wa densha no naka de neraremasen." , meaning : "sen trenin içinde uyuyabilir misim? Hayır ben trenin içinde uyuyamam",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "laion wa afurika de miraremasu." , meaning : "aslan afrikada yaşayabilir",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi wa gakkoo ni sanji ni koraremasu." , meaning : "ben okula saat 3'te gelebilirim",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "asa watashi wa hayaku okiraremasen." , meaning : "sabah ben erken uyanamam",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "zasshi wa honyasan de kaemasu." , meaning : "magazini kitapçıda satın alabilirsin",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "osushi wa sushiyasan de taberaremasu." , meaning : "sushiyi sushicide yiyebilirsin",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "saru wa doobutsu-en ya yama nado de miraremasu." , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "budoo wa aki taberaremasu." , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "sakura wa haru miraremasu." , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "tabako wa doko de mo kaemasu." , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "denwa wa koshuu-denwa de kakeraremasu." , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "rekoodo wa itsu de mo kikemasu." , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watasgi wa tenisu ya sukii nado ga dekimasu." , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "watashi wa kuruma no unten ga dekimasu." , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "Vpotential", },
    { japanese : "hiragana ga kakemasen / hiragana shika kakemasen" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "shika", },
    { japanese : "koko ni yasai dake arimasu / koko ni yasai shika arimasen" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "shika", },
    { japanese : "kantanna ryouri shika tsukuremasen kara, ryouri o narai ni ikimasu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "shika", },
    { japanese : "asa pan shika tabemasen deshita kara, onaka ga sukimashita" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "shika", },
    { japanese : "kyonen wa yuki ga sukoshi shika furimasen deshita kara, sukii ga dekimasen deshita" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "shika", },
    { japanese : "doyoubi shika yasumemasen kara, nakanaka ryokou ni ikemasen" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "shika", },
    { japanese : "ano manshon de petto ga kaemasu ka / chiisai tori wa kaemasu ga, inu ya neko wa kaemasen" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "wa sentence", },
    { japanese : "nihon ryouri ga taberaremasu ka / tenpura ya sukiyaki wa taberaremasu ga, osushi wa taberaremasen" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "wa sentence", },
    { japanese : "akaru kute, ii heya desu ne. tenki ga ii hi ni wa umi ga mieru n desu" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "wa sentence", },
    { japanese : "nihon e kite kara, uma no shashin o torimashita ka / nihon de wa uma o miru koto ga dekimasen" , meaning : "",  book : "minna", unit : "27",  type : "sentence", pattern : "wa sentence", },
    { japanese : "denwa o shi nagara unten shimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V2", },
    { japanese : "ongaku o kiki nagara shokuji shimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V2", },
    { japanese : "kare wa hataraki nagara daigaku de benkyou shite imasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V2", },
    { japanese : "ongaku o kiki nagara benkyou o shimasu ka" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V2", },
    { japanese : "shashin o mise nagara setsumei shimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V2", },
    { japanese : "hanashi o kiki nagara memo shite kudasai" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V2", },
    { japanese : "koohii o nomi nagara hanashi o shitai desu ka" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V2", },
    { japanese : "ongaku o kiki nagara gakkou e aruku no ga suki desu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V2", },
    { japanese : "watashi wa hon o yomi nagara arukimasu." , meaning : "kitap okuyarak yürüyorum.",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V3", },
    { japanese : "watashi wa aisukuriimu o tabe nagara Istkiklal doori o arukimasu." , meaning : "dondurma yiyerek istiklal caddesinde yürüyorum.",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V4", },
    { japanese : "watashi wa rajio o kiki nagara jidousha o unten shimasu." , meaning : "radyo dinleyerek bisiklet sürüyorum.",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V5", },
    { japanese : "kare wa nani o nomi nagara gohan o tabemasu ka / Kare wa osake o nomi nagara gohan o tabemasu." , meaning : "o ne içerek yemek yiyor? Osake içerek yemek yiyor.",  book : "minna", unit : "28",  type : "sentence", pattern : "V1stem nagara, V6", },
    { japanese : "yasumi no hi wa e o kaite imasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "itsumo jitensha de kayotte imasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "kodomo no toki, maiban 8-ji ni nete imashita" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "maiasa pan o tabete imasu ga, kesa wa koohii shika nomimasen deshita " , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vte imasu", },
    { japanese : "ringo to ichigo ga suki desu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "hako no naka ni tegami ya shashin ga arimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "kono ryouri wa oishikute yasui desu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "koube e itte, tomodachi ni aimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "toshokan e itte, hon o karite, kouen de yomimashita" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "", },
    { japanese : "suzukisan wa piano mo hikeru shi, uta mo utaeru shi, dansu mo dekimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp shi || Adj-i shi || Adj-na da shi || N da shi", },
    { japanese : "kono kuruma wa katachi mo ii shi, iro mo kirei dashi, sore ni nedan mo sonnani takakunai desu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp shi || Adj-i shi || Adj-na da shi || N da shi", },
    { japanese : "kono mise wa yasui shi, shinamono mo ooi shi, itsumo koko de kaimono shite imasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp shi || Adj-i shi || Adj-na da shi || N da shi", },
    { japanese : "dezain mo suteki dashi, saizu mo choudo ii shi, kono kutsu o kaimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp shi || Adj-i shi || Adj-na da shi || N da shi", },
    { japanese : "nedan mo yasui shi, sakana mo atarashii shi…" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp shi || Adj-i shi || Adj-na da shi || N da shi", },
    { japanese : "mise mo kirei dashi, saabisu(servis) mo ii shi…" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp shi || Adj-i shi || Adj-na da shi || N da shi", },
    { japanese : "doushite inaka ni sumitai n desu ka / midori mo ooi shi, tabemono mo oishii desu kara" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp shi || Adj-i shi || Adj-na da shi || N da shi", },
    { japanese : "doushite kaisha o yameta n desu ka / boonasu(bonus) mo nai shi, kyuuryou mo sukunai desu kara" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp shi || Adj-i shi || Adj-na da shi || N da shi", },
    { japanese : "doushite sensei ni naritai n desu ka / kodomo mo suki da shi, taisetsuna shigoto da to omoimasu kara" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp shi || Adj-i shi || Adj-na da shi || N da shi", },
    { japanese : "koko wa nedan mo yasui shi, ii ongaku mo kikeru shi… / sore de ninki ga aru n desu ne" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "sore de", },
    { japanese : "itsuka konpyuutaa no kaisha o tsukuritai desu, sore de ima wa kaisha de hataraki nagara yoru daigaku de benkyou shite imasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "sore de", },
    { japanese : "watashi wa gakusei no toki, yoku benkyou shita" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "watashi wa gakusei no toki ni, yoku benkyou shita" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "watashi wa wakai toki ni, iroirona supootsu o shimashita" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "itai toki ni, kusuri o yonde kudasai" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "watashi wa yasui toki ni, takusan no kudamono o kaimashita" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "nihon de wa shokuji o suru toki ni, 'itadakimasu' to iimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "benkyou suru toki wa, ongaku o kikimasen" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "ochikomu toki wa, itsumo biichi (beach) o arukimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "jikan ga nai toki wa, asagohan o tabemasen" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "nihon ni iku toki wa, kore o kaimasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "tsukareta toki wa , nemasu" , meaning : "",  book : "minna", unit : "28",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N no toki", },
    { japanese : "suupaa ga shimatte imasu kara, konbini de kaimashou" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vinstantenious te imasu", },
    { japanese : "eakon (air condition) ga tsuite imasu kara, suzushii desu" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vinstantenious te imasu", },
    { japanese : "kaigishitsu no denki ga kiete imasu kara, kaigi wa mou owatta to omoimasu" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vinstantenious te imasu", },
    { japanese : "kagi ga kakatte imasu kara, hairemasen" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vinstantenious te imasu", },
    { japanese : "kono koppu wa yogorete imasu" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vinstantenious te imasu", },
    { japanese : "sono fukuro wa yaburete imasu yo" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vinstantenious te imasu", },
    { japanese : "sono soujiki wa koshou shite imasu yo" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vinstantenious te imasu", },
    { japanese : "sasakisan ga mottekita wain wa minna de nonde shimaimashita" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vte shimaimasu || shimaimashita", },
    { japanese : "kono meeru (mail) o kaite shimaimasu kara, osakini douzo" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vte shimaimasu || shimaimashita", },
    { japanese : "eki made hashirimashita ga, densha wa itte shimaimashita" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vte shimaimasu || shimaimashita", },
    { japanese : "gomennasai, denwa bango o machigaete shimaimashita" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vte shimaimasu || shimaimashita", },
    { japanese : "mou repooto o kakite shimaimashita ka" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vte shimaimasu || shimaimashita", },
    { japanese : "ikikata o oshiete moraimashita ga, michi o machigaete shimaimashita" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vte shimaimasu || shimaimashita", },
    { japanese : "doushite konakatta n desu ka / kaze o hiite shimatta n desu" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vte shimaimasu || shimaimashita", },
    { japanese : "kanji no shukudai wa zenbu yatte shimatta desu" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Vte shimaimasu || shimaimashita", },
    { japanese : "dokoka de saifu o otoshite (otoshimasu) shimatta n desu. sugu kouban ni ikanai to" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Nplace ni ikimasu || kimasu || kaerimasu", },
    { japanese : "yasumi no hi wa doko ni ikimasu ka / yoku toshokan ni ikimasu" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "Nplace ni ikimasu || kimasu || kaerimasu", },
    { japanese : "densha ni shorui o wasurete shimatta n desu / sore wa taihen desu ne. ekiin ni iwanai to" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "sore || sono || sou", },
    { japanese : "raigetsu kara toukyou no honsha ni tenkin na n desu / sore wa omedetou gozaimasu!" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "sore || sono || sou", },
    { japanese : "anou, tochuu de tametai baai wa? / sono baai wa, chikaku no kakariin ni namae o itte, kaette kudasai." , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "sore || sono || sou", },
    { japanese : "uchi e kaette, yasunda hou ga ii desu yo / ee, sou shimasu" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "sore || sono || sou", },
    { japanese : "kaban ga arimashita yo!" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "arimashita", },
    { japanese : "atta!" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "arimashita", },
    { japanese : "dokoka de saifu o nakushite shimaimashita" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "dokoka de || dokoka ni", },
    { japanese : "dokoka de mata aimashou" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "dokoka de || dokoka ni", },
    { japanese : "dokoka ni ryokou ni ikimashou" , meaning : "",  book : "minna", unit : "29",  type : "sentence", pattern : "dokoka de || dokoka ni", },
    { japanese : "teeburu no ue ni kabin ga oite arimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte arimasu", },
    { japanese : "rouka ni hon ga narabete arimasu ne" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte arimasu", },
    { japanese : "tana no ue ni ningyou ga kazatte arimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte arimasu", },
    { japanese : "fuutou ni kitte ga hatte arimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte arimasu", },
    { japanese : "karendaa wa doko desu ka / reizouko no yoko ni kakete arimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte arimasu", },
    { japanese : "hasami wa doko desu ka / hikidashi no naka ni irete arimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte arimasu", },
    { japanese : "tomodachi ga kuru mae ni, heya o katadukete okimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte okimasu", },
    { japanese : "ryouri o hajimeru mae ni, dougu o junbi shite okimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte okimasu", },
    { japanese : "getsuyoubi made ni repooto o matomete oite kudasai" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte okimasu", },
    { japanese : "tsugi no kaigi made ni, kono mondai ni tsuite kangaete oite kudasai" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte okimasu", },
    { japanese : "kono denshijisho o karite mo ii desu ka / ee, tsukatta ra, kono hikidashi ni shimatte oite kudasai" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte okimasu", },
    { japanese : "kono chizu o karite mo ii desu ka / ee, tsukatta ra, tsukue no ue ni oite oite kudasai" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte okimasu", },
    { japanese : "shokuji ga owatta ra, chawan ya osara o aratte okimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte okimasu", },
    { japanese : "ashita kaigi ga arimasu kara, isu wa kono mama ni shite oite kudasai" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte okimasu", },
    { japanese : "ashita kaigi ga arimasu kara, isu wa kono heya ni oite okimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "Vte okimasu", },
    { japanese : "kaigishitsu o katadukemashou ka / mada tsukatte imasu kara, sono mama ni shite oite kudasai" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "mada Vaffirmative", },
    { japanese : "mada ame ga futte imasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "mada Vaffirmative", },
    { japanese : "kare wa mada nonde imasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "mada Vaffirmative", },
    { japanese : "donna supootsu o shite imasu ka / sou desu ne, tenisu toka suiei toka…." , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "N1 toka N2 toka || V1p toka V2p toka", },
    { japanese : "osushi toka raamen toka ga suki desu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "N1 toka N2 toka || V1p toka V2p toka", },
    { japanese : "rokku toka jazu toka J-pop o yoku kikimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "N1 toka N2 toka || V1p toka V2p toka", },
    { japanese : "nichiyoubi ni wa donna koto o shite imasu ka / ongaku o kiku toka, hon o yomu toka shite imasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "N1 toka N2 toka || V1p toka V2p toka", },
    { japanese : "wakaranai toki wa, hito ni kiku toka netto de shiraberu toka suru" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "N1 toka N2 toka || V1p toka V2p toka", },
    { japanese : "gakusei no toki wa, yoku eiga o miru toka keeki o yaku toka shimashita" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "N1 toka N2 toka || V1p toka V2p toka", },
    { japanese : "toukyou ni ikimashita. oosaka ni mo ikimashita" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "mo", },
    { japanese : "getsuyoubi ni wa kurasu ga arimasu. suiyoubi ni mo kurasu ga arimasu" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "mo", },
    { japanese : "otera o mo ikimashou" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "mo", },
    { japanese : "sasakisan to hanashimashita. yamadasan to mo hanashimashita" , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "mo", },
    { japanese : "toshokan de benkyou dekimasen. uchi de mo benkyou dekimasen." , meaning : "",  book : "minna", unit : "30",  type : "sentence", pattern : "mo", },
    { japanese : "yoku mienai kara, mae no hou ni suwarou" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional", },
    { japanese : "ashita wa yasumi da kara, doubutsuen e ikou" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional", },
    { japanese : "nodo ga kawaita, juusu (juice) demo nomou" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional", },
    { japanese : "tsukareta kara, chotto kyuukei shiyou" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional", },
    { japanese : "kyou wa eiga o miyou to omoimasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "shousetsu o kakou to omotte imasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "kondo no shuumatsu wa nani o shimasu ka / yama ni noborou to omotte imasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "renkyuu wa nani o shimasu ka / uchi de yukkuri yasumou to omotte imasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "eki no chikaku no hoteru o yoyaku shiyou to omotte imasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "ryoushin to issho ni sumeru ie o tsukurou to omotte imasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "ane wa nihon de eigo o oshieyou to omotte imasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "tanakasan wa arubaito o sagasou to omotte imasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "ashita ame ga furu to omoimasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "ima kare wa nete iru to omoimasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "kono hon wa takai to omoimasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "ima ano kooen wa shizuka da to omoimasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "kono e wa kirei da to omoimasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "kore wa kanojo da to omoimasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "anata wa ashita mo ii otenki da to omoimasu ka? Hai, soo omoimasu / iie, soo omoimasen" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vvolitional to omoimasu || to omotte imasu", },
    { japanese : "daigaku no chikaku ni sumu tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "hokkaido o ryokou suru tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "kekkon shiki wa doko de shimasu ka / jinja de suru tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "ryokou wa doko e ikimasu ka / bari e iku tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "dare ni hikkoshi o tetsudatte moraimasu ka / kaisha no hito ni tetsudatte morau tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "natsu yasumi ni kuni e kaerimasu ka / iie, kurisumasu made kaeranai tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "toukyou e itta ra, sasakisan ni aimasu ka / iie, awanai tsumori desu. jikan ga nai n desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "watashi wa kotoshi no natsu fujisan ni noboru tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "watashi wa shuumatsu eiga ni iku tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "watashi wa sarainen uchi o tsukuru tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "watashi wa rainen no natsu daigaku o sotsugyoo suru tsumori" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "watashi wa raigetsu jidousha o kau tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "atama ga itai kara, ashita kaisha o yasumu tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "konban mitai bangumi ga aru kara, hayaku ie ni kaeru tsumori desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp tsumori desu", },
    { japanese : "buchou wa shiten e iku yotei desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp || N no yotei desu", },
    { japanese : "yamadasan to taberu yotei desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp || N no yotei desu", },
    { japanese : "nanji ni shibuya ni tsukimasu ka / 9-ji 36-pun ni tsuku yotei desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp || N no yotei desu", },
    { japanese : "atarashii eki wa itsu dekimasu ka / rainen no 3 gatsu no yotei desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp || N no yotei desu", },
    { japanese : "okosan wa itsu umaremasu ka / 5 gatsu no owari no yotei desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vp || N no yotei desu", },
    { japanese : "repooto o mada matomete imasen" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "mada Vte imasen", },
    { japanese : "mada yonde imasen kara, wakarimasen" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "mada Vte imasen", },
    { japanese : "mada kaite imasen. ashita kakou to omotte imasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "mada Vte imasen", },
    { japanese : "mada kimete imasen. kao o mite kara, kimeyou to omotte imasu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "mada Vte imasen", },
    { japanese : "yasumi wa nanyoubi desu ka" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vstem => N", },
    { japanese : "kaeri no shinkansen wa doko kara norimasu ka" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vstem => N", },
    { japanese : "ano sensei no hanashi wa itsumo omoshiroi desu" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vstem => N", },
    { japanese : "donna asobi ga suki desu ka" , meaning : "",  book : "minna", unit : "31",  type : "sentence", pattern : "Vstem => N", },
    { japanese : "byoin e itta hou ga ii desu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vta hou ga ii desu", },
    { japanese : "yakedo o shita n desu / jya, sugu hiyashita hou ga ii desu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vta hou ga ii desu", },
    { japanese : "ashi ni kega o shita n desu / jya renshuu o yasunda hou ga ii desu yo" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vta hou ga ii desu", },
    { japanese : "natsuyasumi wa hayaku hotero o yoyaku shita hou ga ii desu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vta hou ga ii desu", },
    { japanese : "toshi o tottara, kuruma wa unten shinai hou ga ii desu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vnai hou ga ii desu", },
    { japanese : "yoru osoku hitori de arukanai hou ga ii desu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vnai hou ga ii desu", },
    { japanese : "chotto karada no choushi ga warui n desu / jya, amari muri o shinai hou ga ii desu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vnai hou ga ii desu", },
    { japanese : "ashita ame ga furu deshou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N deshou", },
    { japanese : "ashita wa hareru deshou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N deshou", },
    { japanese : "ashita no asa wa kaze ga tsuyoi deshou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N deshou", },
    { japanese : "8-ji no shinkansen ni maniau deshou ka / ee, michi ga suite imasu kara, tabun maniau deshou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N deshou", },
    { japanese : "sasakisan wa kyou uchi ni iru deshou ka / iie, nichiyoubi wa itsumo tsuri ni itte imasu kara, tabun inai deshou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N deshou", },
    { japanese : "kare wa shiai ni deru deshou ka / iie, kega o shimashita kara, denai deshou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N deshou", },
    { japanese : "yoku benkyou shite imashita kara, kitto goukaku suru deshou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N deshou", },
    { japanese : "raishuu toukyou e iku kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "kare wa paatii ni konai kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "tonari wa karaoke no mise desu ne / ee, urusai kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "kaeri no kippu o katte oku n desu ka / ee, komu kamo shiremasen kara, katte okimasu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "7-ji no densha ni maniawanai kamo shiremasen kara, hashirimashou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "kyoo no gogo ame ga furu kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "watashi wa rainen shigoto de yooroppa ni iku kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "kyoo wa doyoobi dakara, tomodachi ga kuru kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "jimusho wa kurai kara, kare wa moo kaetta kamoshiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "moo ma yonaka no 12-ji desu, satoosan wa neta kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "kono zasshi wa watashi niwa omoshiroi desu, shikashi anata niwa tsumaranai kamo shiremasen." , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "kono kutsu wa watashi niwa choodo ii desu, shikashi otooto niwa ookii kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "kono hon wa otona niwa ii keredomo, kodomo niwa warui kamoshiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "atama ga itai-kara, kaze kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "kono wasuremono wa kare no kasa kamo shiremasen" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "3-kagetsu mae wa 50-en deshita, ima wa 100-en kamo shiremasen." , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "kaze kamo shiremasen, kaisha o yasunda hoo ga ii desu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N kamo shiremasen", },
    { japanese : "watashi ga nimotsu o hakobimashou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vmashou", },
    { japanese : "sorede wa watashi ga kare ni hanashimashou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vmashou", },
    { japanese : "koshou kamo shiremasen. chotto shirabemashou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vmashou", },
    { japanese : "watashitachi ga tetsudaimashou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Vmashou", },
    { japanese : "kare wa futsuka de shigoto o oeta" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Quantifier de", },
    { japanese : "1 jikan de shukudai o shimasu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Quantifier de", },
    { japanese : "haruyasumi wa gogatsu tooka de owarimasu" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Quantifier de", },
    { japanese : "kono hon o gohyaku en de kaimashita" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Quantifier de", },
    { japanese : "3 man en de pasokon ga kaemasu ka" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Quantifier de", },
    { japanese : "kono ringo wa yon ko (counter) de 2 hyaku en shimashita" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "Quantifier de", },
    { japanese : "nanika shinpaina koto ga aru n desu ka" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "nanika || itsuka || dokoka", },
    { japanese : "itsuka himana toki ni aimashou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "nanika || itsuka || dokoka", },
    { japanese : "dokoka shizukana tokoro ni ikimashou" , meaning : "",  book : "minna", unit : "32",  type : "sentence", pattern : "nanika || itsuka || dokoka", },
    { japanese : "hayaku nero!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "okureru na!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "naku na!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "ashita uchi e koi!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "amari nomu na!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "nigero!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "erebeetaa o tsukau na!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "kike!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "yasumu na!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "ganbare!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "makeru na!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "tomare!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "chuui. kakariin igai hairu na!" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Imperative || Prohibitive", },
    { japanese : "sore wa nan to yomimasu ka / 'jidouhanbaiki' to yomimasu" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", },
    { japanese : "tachiiri kinshi' to yomimasu" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", },
    { japanese : "sono maaku (mark) ni wa nan to kaite arimasu ka / 'kinen' to kaite arimasu / 'deguchi' to kaite arimasu" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", },
    { japanese : "are wa dou iu imi desu ka / yukkuri ike to iu imi desu / kuruma o tomeru na to iu imi desu" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", },
    { japanese : "yoyaku wa nan to iu imi desu ka / 'rizabeeshon' to iu imi desu" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "… to yomimasu ||... to kaite arimasu ||… to iu imi desu", },
    { japanese : "sensei wa nan to itte imashita ka / kanji no shiken wa raishuu no kayoubi da to itte imashita" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Sp to itte imashita", },
    { japanese : "sasakisan wa toukyou wa kirei da to itte imashita" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Sp to itte imashita", },
    { japanese : "sasakisan wa miitingu ni shusseki dekinai to itte imashita" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Sp to itte imashita", },
    { japanese : "okaasan ni yoroshiku to tsutaete itadakemasen ka" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Sp to tsutaete itadakemasen ka", },
    { japanese : "tanakasan ni 5-ji ni eki de matte iru to tsutaete itadakemasen ka" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Sp to tsutaete itadakemasen ka", },
    { japanese : "sensei ni kyou wa yakyuu no renshuu ni ikenai to tsutaete itadakemasen ka" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Sp to tsutaete itadakemasen ka", },
    { japanese : "buchou ni hoteru o yoyaku shita to tsutaete itadakemasen ka" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Sp to tsutaete itadakemasen ka", },
    { japanese : "suzuki kachou ni ashita wa tsugou ga warui to tsutaete itadakemasen ka" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Sp to tsutaete itadakemasen ka", },
    { japanese : "kare ni kaigi wa 2-ji kara da to tsutaete itadakemasen ka" , meaning : "",  book : "minna", unit : "33",  type : "sentence", pattern : "Sp to tsutaete itadakemasen ka", },
    { japanese : "watashi ga shita toori ni shite kudasai" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no toori ni, V2", },
    { japanese : "sakki kaita toori ni, kanji o kaite kudasai" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no toori ni, V2", },
    { japanese : "haisha ni oshiete moratta toori ni, ha o migaite imasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no toori ni, V2", },
    { japanese : "ryouri bangumi de mita toori ni, tsukurimashita" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no toori ni, V2", },
    { japanese : "hito ga shita toori ni, nandemo suru n desu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no toori ni, V2", },
    { japanese : "setsumeisho no toori ni, kagu o kumitatete kudasai" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no toori ni, V2", },
    { japanese : "yajirushi no toori ni, itte kudasai" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no toori ni, V2", },
    { japanese : "sen no toori ni, kami o kitte kudasai" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no toori ni, V2", },
    { japanese : "jikan no toori ni, tsukimashita" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no toori ni, V2", },
    { japanese : "kono toori ni, kaite kudasai" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "kono || sono || ano toori ni", },
    { japanese : "gohan o tabeta ato de, ha o migakimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no ato de, V2", },
    { japanese : "doyoubi shigoto ga owatta ato de, renshuu o shimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no ato de, V2", },
    { japanese : "atarashii no o katta ato de, nakushita tokei ga mitsukarimashita" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no ato de, V2", },
    { japanese : "kaimono o shita ato de, eiga o mimashou" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no ato de, V2", },
    { japanese : "konsaato no ato de, shokuji o shimashou" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no ato de, V2", },
    { japanese : "jogingu no ato de, shawaa o abimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no ato de, V2", },
    { japanese : "itsumo shokuji no ato de, koohii o nomimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no ato de, V2", },
    { japanese : "shigoto no ato de, nomi ni ikimasen ka" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1ta || N no ato de, V2", },
    { japanese : "kasa o motte dekakemasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1te || V1nai de, V2", },
    { japanese : "soosu o tsukete tabemasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1te || V1nai de, V2", },
    { japanese : "satou o irede nomimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1te || V1nai de, V2", },
    { japanese : "eakon o tsukete nemasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1te || V1nai de, V2", },
    { japanese : "saikin wa basu ni noranai de, eki made aruite imasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1te || V1nai de, V2", },
    { japanese : "keeki wa kawanai de, jibun de tsukutte imasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1te || V1nai de, V2", },
    { japanese : "furui hon wa sutenai de, furii maaketto de urimasu" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1te || V1nai de, V2", },
    { japanese : "kinou wa dekanai de, uchi de yukkuri yasumimashita" , meaning : "",  book : "minna", unit : "34",  type : "sentence", pattern : "V1te || V1nai de, V2", },
    { japanese : "botan o oseba, mado ga hirakimasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "kare ga ikeba, watashi mo ikimasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "isogeba 9-ji no basu ni maniaimasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "aki ni nareba, ki no ha no iro ga kawarimasu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "kotae ga tadashi kereba, maru o tsukete kudasai" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "tsugou ga yo kereba, zehi kite kudasai" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "hima nara, tetsudatte kudasai" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "konshuu ga dame nara, raishuu wa dou desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "hokkaido ryokou nara, 6 gatsu ga ii desu" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "ashita ame nara, ikimasen" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "kusuri o nomana kereba, naorimasen" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "megane o kakena kereba, jisho no ji ga yomemasen" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba || Adj-i => Adj kereba || Adj-na => Adj nara || N nara", },
    { japanese : "kabuki o mitai n desu ga, dou sureba ii desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba ii desu ka", },
    { japanese : "kimono o karitai n desu ga, doko e ikeba ii desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba ii desu ka", },
    { japanese : "kono hon wa dare ni kaeseba ii desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba ii desu ka", },
    { japanese : "tomodachi ga kekkon suru n desu ga, donna mono o agereba ii desu ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "Vba ii desu ka", },
    { japanese : "onsen ni ikitai n desu ga, doko ga ii desu ka / onsen nara, hakuba ga ii desu yo" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "N nara …", },
    { japanese : "suihanki o kaitai n desu ga / suihanki nara, pawaa denki no ga ii desu yo" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "N nara …", },
    { japanese : "hanami ni ikou to omotte iru n desu ga / hanami nara, yoshino yama ga ii desu yo" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "N nara …", },
    { japanese : "pasokon kyoushitsu o sagashite iru n desu ga / pasokon kyoushitsu nara, 'IMC pasokon kyoushitsu' ga ii desu yo" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "N nara …", },
    { japanese : "biyouin o sagashite iru n desu ga, dokoka ii tokoro wa arimasen ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "…wa arimasen ka", },
    { japanese : "ryokou o shiyou to omotte iru n desu ga, dokoka ii tokoro wa arimasen ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "…wa arimasen ka", },
    { japanese : "kono kamera wa taka sugimasu. motto yasui no wa arimasen ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "…wa arimasen ka", },
    { japanese : "kore wa ooki sugimasu. motto chiisai no wa arimasen ka" , meaning : "",  book : "minna", unit : "35",  type : "sentence", pattern : "…wa arimasen ka", },
    { japanese : "oishii ryouri ga tsukureru you ni, ryouri kyooshitsu ni kayotte imasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "shiai ni derareru you ni, mainichi renshuu shite imasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "yoku mieru you ni, mae no hou ni suwarimashou" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "kaze ga naoru you ni, hayaku nemasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "minna ga tanoshimeru you ni, chokoreeto o agemashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "watashi ga wakaru you ni. sasakisan wa yukkuri nihongo o hanashite kuremashita." , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "wasurenai you ni, memo shimasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "michi o machigaenai you ni, chizu o motte ikimashou" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "toshi o totte kara, komaranai you ni, chokin shimasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "tabemono ga kusuranai you ni, reizouko ni irete oite kudasai" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni, V", },
    { japanese : "yatto jitensha ni noreru you ni narimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni narimasu", },
    { japanese : "kanji ga yomemasu ka / hai, san-byaku gurai yomeru you ni narimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni narimasu", },
    { japanese : "terebi no nihongo ga kanari wakaru you ni narimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni narimasu", },
    { japanese : "oosaka-ben ga wakarimasu ka / hai, sukoshi wakaru you ni narimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni narimasu", },
    { japanese : "katakana ga kakemasu ka / hai, hotondo kakeru you ni narimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni narimasu", },
    { japanese : "mainichi, yasai o taberu you ni narimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni narimasu", },
    { japanese : "mukashi wa uchuu e daremo ikemasen deshita ga, ima wa ikeru you ni narimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni narimasu", },
    { japanese : "hyaku meetoru oyogeru you ni narimashita ka / iie, mada oyogemasen. hayaku oyogeru you ni naritai desu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni narimasu", },
    { japanese : "nihongo no shinbun ga yomeru you ni narimashita ka / iie, mada yomemasen. hayaku yomeru you ni naritai desu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni narimasu", },
    { japanese : "mainichi nikki o kaku you ni shite imasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "dekirudake maiban kuu-ji made ni neru you ni shite imasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "mainichi undou shite, nandemo taberu you ni shite imasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "ha ni warui desu kara, amai mono o tabenai you ni shite imasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "dekirudake muri o shinai you ni shite imasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "dekirudake iranai mono wa kawanai you ni shite imasu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "tsukatta mono wa kanarazu moto no tokoro ni modosu you ni shite kudasai" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "yoru jyuu ichi-ji o sugitara, sentaku shinai you ni shite kudasai" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "tomodachi no uchi ni tomaru toki wa, kanarazu renraku suru you ni shite kudasai" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "zettai ni pasupooto o nakusanai you ni shite kudasai" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Vp you ni shimasu", },
    { japanese : "kinou watashi wa toshokan de shizuka ni nihongo o benkyou shimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Adj-i => Ajd-ku || Adj-na => Adj-ni", },
    { japanese : "hayaku jouzu ni ocha ga taterareru you ni naritai desu" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Adj-i => Ajd-ku || Adj-na => Adj-ni", },
    { japanese : "kodomo ga neteiru kara, shizuka ni hana shite kudasai" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Adj-i => Ajd-ku || Adj-na => Adj-ni", },
    { japanese : "shousetsu ga omoshiroku narimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Adj-i => Ajd-ku || Adj-na => Adj-ni", },
    { japanese : "nimotsu ga omoku narimashita" , meaning : "",  book : "minna", unit : "36",  type : "sentence", pattern : "Adj-i => Ajd-ku || Adj-na => Adj-ni", },
    { japanese : "watashi wa kachou ni yobaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni Vpassive", },
    { japanese : "watashi wa sasakisan ni eiga ni sasowaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni Vpassive", },
    { japanese : "watashi wa imouto ni tomodachi o shoukai saremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni Vpassive", },
    { japanese : "watashi wa chichi ni kaimono o tanomaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni Vpassive", },
    { japanese : "watashi wa yamadasan ni kabuki ni tsuite shitsumon saremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni Vpassive", },
    { japanese : "watashi wa inu ni kamaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni Vpassive", },
    { japanese : "wastashi wa mushi ni sasaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni Vpassive", },
    { japanese : "chichi wa dorobou ni tokei o nusumaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni N o Vpassive", },
    { japanese : "dorobou ga watashi no kamera o torimashita / watashi wa dorobou ni kamera o toraremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni N o Vpassive", },
    { japanese : "densha no tonari no hito ga watashi no ashi o fumimashita / watashi wa densha de tonari no hito ni ashi o fumaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni N o Vpassive", },
    { japanese : "watashi wa kodomo ni fuku o yogosaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni N o Vpassive", },
    { japanese : "watashi wa otouto ni pasokon o kowasaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni N o Vpassive", },
    { japanese : "watashi wa kare ni nimotsu o shiraberaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N wa N ni N o Vpassive", },
    { japanese : "1936-nen ni kokkai gijidou ga tateraremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N ga || wa Vpassive", },
    { japanese : "1964-nen ni toukyou de orinpikku ga okonawaremashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N ga || wa Vpassive", },
    { japanese : "oosaka de tenrankai ga hirakaremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N ga || wa Vpassive", },
    { japanese : "kono bijutsukan wa raigetsu kowasaremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N ga || wa Vpassive", },
    { japanese : "kono kuruma wa doko e yushutsu saremasu ka / sekaiju e yushutsu saremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N ga || wa Vpassive", },
    { japanese : "tsugi no kaigi wa doko de hirakaremasu ka / koobe de hirakaremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N ga || wa Vpassive", },
    { japanese : "wain wa budou kara tsukuraremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N kara || de tsukuraremasu", },
    { japanese : "pan wa komugi kara tsukuraremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N kara || de tsukuraremasu", },
    { japanese : "toufu wa daizu kara tsukuraremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N kara || de tsukuraremasu", },
    { japanese : "nihonshu wa kome kara tsukuraremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N kara || de tsukuraremasu", },
    { japanese : "onigiri wa kome de tsukuraremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N kara || de tsukuraremasu", },
    { japanese : "kono osara wa garasu de tsukuraremasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N kara || de tsukuraremasu", },
    { japanese : "biru wa mugi kara tsukuraremasu / kore ga genryou no mugi desu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N kara || de tsukuraremasu", },
    { japanese : "petto no inu ga shinimashita" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N no N", },
    { japanese : "musuko no hansu desu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "N no N", },
    { japanese : "ginkou wa ano tatemono no naka desu / ano naka ni hairemasu ka" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "kono || sono || ano no N", },
    { japanese : "shinbun wa ano hon no shita desu / shinbun wa ano shita desu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "kono || sono || ano no N", },
    { japanese : "kono naka ni tamago ga arimasu" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "kono || sono || ano no N", },
    { japanese : "ano shita ni nani ga arimasu ka" , meaning : "",  book : "minna", unit : "37",  type : "sentence", pattern : "kono || sono || ano no N", },
    { japanese : "gasurin sutando de tabako o suu no wa abunai desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vd no wa Adj desu", },
    { japanese : "nihon ni sumu no wa benri desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vd no wa Adj desu", },
    { japanese : "basuketto booru o suru no wa tanoshii desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vd no wa Adj desu", },
    { japanese : "gaikoku go o oboeru no wa muzukashii desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vd no wa Adj desu", },
    { japanese : "kudamono o taberu no ga suki desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vd no ga suki || kirai  || jouzu ||  heta", },
    { japanese : "kanojo wa sakkaa o suru no ga jouzu desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vd no ga suki || kirai  || jouzu ||  heta", },
    { japanese : "mainichi undou suru no ga kirai desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vd no ga suki || kirai  || jouzu ||  heta", },
    { japanese : "nihongo no uta o utau no ga heta desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vd no ga suki || kirai  || jouzu ||  heta", },
    { japanese : "haha wa nihongo o hanasu no ga totemo hayai desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vd no ga suki || kirai  || jouzu ||  heta", },
    { japanese : "kazoku de ichiban kireina no wa haha desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  no wa N desu", },
    { japanese : "disneyland ni ikitai no wa musume desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  no wa N desu", },
    { japanese : "nihon de ichiban samui no wa hokkaido desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  no wa N desu", },
    { japanese : "nihongo no shiken o uketa no wa kyonen deshita" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  no wa N desu", },
    { japanese : "kono tegami o kaita no wa johnsan desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N-na  no wa N desu", },
    { japanese : "kanji o yomuno wa muzukashii desu. oboeru no mo muzukashi desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no mo", },
    { japanese : "basuketto booru o suru no wa omoshiroi desu. miru no mo omoshiroi desu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no mo", },
    { japanese : "nihon de hataraku no wa watashi no yume desu. sumu no mo watashi no yume desu." , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no mo", },
    { japanese : "kare ga shiken ni goukaku shita no o kikimashita" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no o VofPerception", },
    { japanese : "kanojoo ga naite iru no o mimashita" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no o VofPerception", },
    { japanese : "kanojoo no shinzou ga dokidoki suru no o kanjimashita" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no o VofPerception", },
    { japanese : "soto ni iru tomodachi ga te o furu no ga miemasu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no ga miemasu || kikoemasu", },
    { japanese : "oogoe de tasuke o yobu no ga kikoemasu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no ga miemasu || kikoemasu", },
    { japanese : "pasupooto o motteiku no o wasuremashita " , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no o wasuremasu", },
    { japanese : "juusho o  kaku no o wasurenaide kudasai" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no o wasuremasu", },
    { japanese : "tamago o kau no o wasuremashita" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no o wasuremasu", },
    { japanese : "shachou ga kuru no o shitte imasu ka" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no o shitte imasu ka", },
    { japanese : "ashita yuki ga furu no o shitte imasu ka / iie, shirimasen || hai, shitte imasu" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "Vp no o shitte imasu ka", },
    { japanese : "paatii o suru toki no shashin o okutte kudasai" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "toki ni || ya || no || mo || kara || …", },
    { japanese : "unten o suru toki ni shiito beruto o tsukena kereba narimasen" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "toki ni || ya || no || mo || kara || …", },
    { japanese : "nihon ni tsuita toki kara, tomodachi ni mada atte imasen" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "toki ni || ya || no || mo || kara || …", },
    { japanese : "nakitai toki mo atta" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "toki ni || ya || no || mo || kara || …", },
    { japanese : "kaze o hi ita toki ya dekakeru toki wa masuku o shite kudasai" , meaning : "",  book : "minna", unit : "38",  type : "sentence", pattern : "toki ni || ya || no || mo || kara || …", },
    { japanese : "mou nihon ni iru no o kiite bikkuri shimashita" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", },
    { japanese : "nihongo no shiken ni goukaku shite anshin shimashita" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", },
    { japanese : "youji ni maniawana kute komatte iru" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", },
    { japanese : "shiai ni katta no o kiite ureshii desu" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", },
    { japanese : "kibun ga waru kute paatii ni ikemasen" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", },
    { japanese : "sono mondai wa fukuzatsu rikai dekimasen deshita" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", },
    { japanese : "kono kouen wa sema kute asobenai" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vte || Vnai => V nakute || Adj-i => Adj kute || Adj-na => Adj na", },
    { japanese : "juutai de chikoku shimashita" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "N de…", },
    { japanese : "taifuu de kaerenai desu" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "N de…", },
    { japanese : "hikouki no jiko de ooku no hito ga shibou shimashita" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "N de…", },
    { japanese : "kaji de inu ga shinimashita" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "N de…", },
    { japanese : "kouzui de kuruma ga kowareta" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "N de…", },
    { japanese : "youjiga aru no de hayaku kaerana kereba narimasen" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N na no de", },
    { japanese : "kin en na no de koko de tabako o suwanai de kudasai" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N na no de", },
    { japanese : "ame ga futte iru no de dekakenai desu" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N na no de", },
    { japanese : "ashita haha no tanjoubina no de keeki o katte agemasu" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N na no de", },
    { japanese : "atsui no de mado o akete itadakemasen ka" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na || N na no de", },
    { japanese : "" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "", },
    { japanese : "shiken wa nan ji ni hajimaru ka, sensei ni kikou" , meaning : "",  book : "minna", unit : "39",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N ka, … ", },
    { japanese : "tomodachi ni itsu hima ka kikareta" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N ka, … ", },
    { japanese : "kore wa dare no kaban ka wakarimasen" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N ka, … ", },
    { japanese : "douyatte raamen o tsukuru ka haha ni oshiete moraimashita" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N ka, … ", },
    { japanese : "doko ni sunde iru ka oshiete moo ii desu ka" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N ka, … ", },
    { japanese : "dekiru kadouka, wakarimasen" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", },
    { japanese : "watashi no kotae wa tadashii kadouka, oshiete kudasai" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", },
    { japanese : "kare wa dokujin kadouka, shiritai desu" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", },
    { japanese : "kono eiga wa omoshiroi kadouka, mite mimashou" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", },
    { japanese : "kaeru kadouka, kangaete iru" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vp || Adj-i  || Adj-na => Adj || N kadouka, … ", },
    { japanese : "kaigai de hataraite mimasu" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vte mimasu", },
    { japanese : "kono keeki wa oishii kadou ka, tabete mite kudasai" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vte mimasu", },
    { japanese : "atarashii konpyutaa o tsukatte mite mo ii desu ka" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vte mimasu", },
    { japanese : "nihon no tabemono o tsukutte mimashou" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vte mimasu", },
    { japanese : "nihongo de hanashite mitai desu" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Vte mimasu", },
    { japanese : "kono nimotsu no omosa wa 50 kiro desu" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Adj-i => Adj-sa", },
    { japanese : "anata no yasashisa ga suki desu" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Adj-i => Adj-sa", },
    { japanese : "kono keshiki no utsukushisa o anata ni tsutaetai desu" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Adj-i => Adj-sa", },
    { japanese : "tonneru ni wa takasa seigen ga arimasu" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Adj-i => Adj-sa", },
    { japanese : "kono ryouri no oishisa wa kotoba ni suru koto ga dekimasen" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "Adj-i => Adj-sa", },
    { japanese : "" , meaning : "",  book : "minna", unit : "40",  type : "sentence", pattern : "", },
    { japanese : "kinou watashi wa hana ni mizu o yarimashita" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "N ni N o yarimasu", },
    { japanese : "musume ni kono atarashii kaban o yarimasu (agemasu)" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "N ni N o yarimasu", },
    { japanese : "gakusei wa sensei ni purezento o sashi agemashita" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "N ni N o yarimasu", },
    { japanese : "okyaku sama ni nengajyou o itadakimashita" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "N ni N o itadakimasu", },
    { japanese : "kyou jyushi ni kyuuryou o itadakimasu" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "N ni N o itadakimasu", },
    { japanese : "watashi wa neko ni esa o katte yarimasu" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "N ni N o itadakimasu", },
    { japanese : "watashi wa musume ni uta o utatte yarimasu" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "N ni N o itadakimasu", },
    { japanese : "sensei ni watashi no tanjyou kaini kite itadakimashita" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "Vte itadakimasu", },
    { japanese : "watashi wa kachou ni kaisha no ruuru o setsumei shite itadakimashita" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "Vte itadakimasu", },
    { japanese : "sensei wa watashi ni nihongo o oshiete kudasaimashita" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "Vte kudasaimasu", },
    { japanese : "kachou wa watashi o hounenkai ni shoutai shite kudasaimashita" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "Vte kudasaimasu", },
    { japanese : "kono kanji no kakikata o oshiete kudasaimasen ka" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "Vte kudasaimasu", },
    { japanese : "mou ichido setsumei shite kudasaimasen ka" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "Vte kudasaimasu", },
    { japanese : "toukyou ni itta toki, omiyage ni kono shatsu o kaimashita" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "N ni V", },
    { japanese : "otto ga kinenbi no oiwai ni yubiwa o kuremashita" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "N ni V", },
    { japanese : "" , meaning : "",  book : "minna", unit : "41",  type : "sentence", pattern : "", },
    { japanese : "tiimu no tame ni, kyouryoku shina kereba naranai" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no tame ni, …", },
    { japanese : "shourai no tame ni, chokin shimasu" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no tame ni, …", },
    { japanese : "shiken ni goukaku suru tame ni, benkyou o ganbaritai desu" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no tame ni, …", },
    { japanese : "nihon de hataraku tame ni, nihongo o benkyou shinakereba narimasen" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no tame ni, …", },
    { japanese : "nihon de hatarakeruyou ni, nihongo o benkyou shinakereba narimasen" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no tame ni, …", },
    { japanese : "soko e iku no ni donogurai kakarimasu ka" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no ni, …", },
    { japanese : "kono suteeki o taberu no ni, naifu to fooku o tsukatte kudasai" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no ni, …", },
    { japanese : "youfuku kau no ni, okane o tamemashita" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no ni, …", },
    { japanese : "kono jisho wa benkyou ni benri desu" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no ni, …", },
    { japanese : "kuruma wa watashi no tsuukin ni hitsuyou desu" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Vd || N no ni, …", },
    { japanese : "nihon ni iku no ni juu hon en wa hitsuyou desu" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Quantifier wa", },
    { japanese : "atarashii kuruma o kau no ni nihyaku hon en mo hitsuyou kamoshiremasen" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Quantifier mo", },
    { japanese : "kouen de tomodachi o ni jikan mo machimashita" , meaning : "",  book : "minna", unit : "42",  type : "sentence", pattern : "Quantifier mo", },
    { japanese : "kanojo ga naki sou desu" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "konkai wa karera ga shiai ni kachi sou desu ne" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "kuruma no ushiro ni atari sou desu" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "kanojo wa jibun no jinsei ni manzoku sou desu" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "tomodachi ga katta kuruma wa benri sou desu" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "kono suteeki wa oishi sou desu" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "kare wa waka sou desu" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "sono ringo wa oishi sou desu ne / ee kono ringo wa totemo oishii desu yo." , meaning : "şu elma lezzetli gibi. Evet, bu elma çok lezzetlidir.",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "kyoo anata wa totemo tanoshi sou desu ne / ee, konban paatii ga arimasu." , meaning : "bugün çok neşeli gibi. Evet, bu akşam parti var.",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "kare wa itsumo kanashi sou desu ne / ee, kare wa itsumo okane ga arimasen." , meaning : "o her zaman üzgün gibi. Evet, onun her zaman parası yoktur.",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "sono jisho wa totemo muzukashi sou desu ne / ee, kono jisho wa furui kanji no jisho desu." , meaning : "şu sözlük zor gibi görünüyor. Evet, bu sözlük eski kanjinin sözlüğüdür.",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "kono hon wa yosa sou desu ne / ee, kono hon wa totemo ii hon desu." , meaning : "bu kitap iyi gibi. Evet bu kitap çok iyi kitaptır.",  book : "minna", unit : "43",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sou desu", },
    { japanese : "konbini de pan o katte kimasu" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vte kimasu", },
    { japanese : "nani mo shite inai kara, kouen o sanpo shite kimasu ne" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vte kimasu", },
    { japanese : "doko e iku n desu ka / kuruma no naka ni saifu o wasureta no de chotto totte kuru" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vte kimasu", },
    { japanese : "gakkou e itte kimasu" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vte kimasu", },
    { japanese : "chotto dekakete kimasu" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "Vte kimasu", },
    { japanese : "" , meaning : "",  book : "minna", unit : "43",  type : "sentence", pattern : "", },
    { japanese : "tabe sugita kara onaka ga itai desu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", },
    { japanese : "shiken wa kantan sugimasu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", },
    { japanese : "tabako o sui sugiru to byouki ni naru yo" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", },
    { japanese : "okachan wa kawai sugiru" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", },
    { japanese : "tomodachi ga katta kuruma wa taka sugiru" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", },
    { japanese : "sono kutsu wa watashi ni wa ookii sugiru yo" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", },
    { japanese : "chichi wa hataraki sugimasu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem || Adj-i => Adj || Adj-na => Adj sugimasu", },
    { japanese : "kono keitai denwa wa tsukai yasui desu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem yasui desu || nikui desu", },
    { japanese : "kinou watashi ga tsukutta keeki wa tsukuri yasui desu " , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem yasui desu || nikui desu", },
    { japanese : "kanojo no setsumei wa wakari yasui desu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem yasui desu || nikui desu", },
    { japanese : "kuruma ga nakatta ra, inaka ni sumi nikui desu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem yasui desu || nikui desu", },
    { japanese : "kanji wa oboe nikui desu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Vstem yasui desu || nikui desu", },
    { japanese : "okachan ga nete iru no de, terebi no oto o chiisaku shimasu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Adj-i => Adj ku|| Adj-na => Adj ni  || N ni shimasu", },
    { japanese : "heya ni hana o kazatte kirei ni shimasu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Adj-i => Adj ku|| Adj-na => Adj ni  || N ni shimasu", },
    { japanese : "nomimono wa nani ni shimasu ka / koohii ni shimasu" , meaning : "",  book : "minna", unit : "44",  type : "sentence", pattern : "Adj-i => Adj ku|| Adj-na => Adj ni  || N ni shimasu", },
    { japanese : "kaji no baai wa, hijouguchi o tsukatte kudasai" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N no baai wa", },
    { japanese : "kikenna baai wa, keisatsu o yonde kudasai" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N no baai wa", },
    { japanese : "kaigi ni sanka dekinai baai wa, hayaku renraku shinakereba narimasen" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N no baai wa", },
    { japanese : "shigoto ni ou hoshitai baai wa, watashi ni chokusetsu rirekisho o okutte mo ii desu" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N no baai wa", },
    { japanese : "zairyuu kaado o nakushita baai wa, sugu nyuukoku kanrikyoku ni renraku shite kudasai" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N no baai wa", },
    { japanese : "yuusou no baai wa, kitte o haritsukete, kono juusho ni okutte kudasai" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N no baai wa", },
    { japanese : "takusan benkyou shita no ni, shiken ni shippai shita" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N na no ni …", },
    { japanese : "ie wa chikai no ni, itsumo okurete iru ne" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N na no ni …", },
    { japanese : "kyou wa shukujitsuna no ni, shigoto ni ikanai to imasen" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N na no ni …", },
    { japanese : "kare ni soto ni ikanai to itta no ni, dekaketa" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N na no ni …", },
    { japanese : "konpyuutaa wa atarashii no ni, mou kowaremashita" , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N na no ni …", },
    { japanese : "daietto shite iru no ni, yasenai " , meaning : "",  book : "minna", unit : "45",  type : "sentence", pattern : "Vp || Adj-i || Adj-na || N na no ni …", },
    { japanese : "kanojo ga kita toki ni dekakeru tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vd tokoro desu", },
    { japanese : "ima kara shiken wa hajimaru tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vd tokoro desu", },
    { japanese : "watashi wa supaa e kudamono o kaini iku tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vd tokoro desu", },
    { japanese : "jonsan wa repooto o kaku tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vd tokoro desu", },
    { japanese : "ima jonsan wa repooto o kaite iru tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vte iru tokoro", },
    { japanese : "ima unten shite iru tokoro desu kara, juuppun go ni denwa o kakena oshite mo ii desu ka" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vte iru tokoro", },
    { japanese : "haha ni tanjoubi no puresento wa nani o kau ka ima kangaete iru tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vte iru tokoro", },
    { japanese : "shukudai wa mou owarimashita ka / iie, mada desu. ima shite iru tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vte iru tokoro", },
    { japanese : "tattaima jonsan wa repooto o kaita tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vta tokoro desu", },
    { japanese : "chichi wa choudoima kaetta tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vta tokoro desu", },
    { japanese : "kuukou ni tsuita tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vta tokoro desu", },
    { japanese : "sensei ni messaiji o (message) tsutaeta tokoro desu " , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vta tokoro desu", },
    { japanese : "konbini de obentou o katta tokoro desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vta tokoro desu", },
    { japanese : "sengetsu kuruma o katta bakari desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vta bakari desu", },
    { japanese : "nakayamasan wa atarashii ie ni hikko shita bakari desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vta bakari desu", },
    { japanese : "senshuu kaetta bakari no ni, mada kono shuumatsu ni kaeritai desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", },
    { japanese : "kinou kanojo wa taiin shita bakarina no de, kyou konai hazu desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", },
    { japanese : "raishuu nihonjin no tomodachi wa fuiripin ni iku hazu desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", },
    { japanese : "kinou takusan benkyou shimashita kara, kyou no kuizu wa kantanna hazu desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", },
    { japanese : "sono kuruma wa toyota no saishin moderuna no de, takai hazu desu" , meaning : "",  book : "minna", unit : "46",  type : "sentence", pattern : "Vd || Vnai || Adj-i || Adj-na || N no hazu desu", },
    { japanese : "ashita wa yuki ga furu sou desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", },
    { japanese : "taifu wa konai sou desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", },
    { japanese : "kinou hidoi jiko ga atta sou desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", },
    { japanese : "kega o shita hito wa inakatta sou desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", },
    { japanese : "kotoshi wa natsu ga mijikai sou desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", },
    { japanese : "sapporo no yuki matsuri wa kirei da sou desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", },
    { japanese : "ashita no tenki wa kumori da sou desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na => Adj da || N da sou desu", },
    { japanese : "konsaato ga hajimaru you desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na || N no sou desu", },
    { japanese : "kachou wa jimusho ni inai you desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na || N no sou desu", },
    { japanese : "kinou no ban ame ga futta you desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na || N no sou desu", },
    { japanese : "tawapon san wa shiken ni goukaku shinakatta you desu " , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na || N no sou desu", },
    { japanese : "soto wa samui you desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na || N no sou desu", },
    { japanese : "buchou wa amai mono ga sukina you desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na || N no sou desu", },
    { japanese : "ogawa san no hanashi wa hontou no you desu" , meaning : "",  book : "minna", unit : "47",  type : "sentence", pattern : "Vplain || Adj-i || Adj-na || N no sou desu", },
    { japanese : "buchou wa mirasan o amerika e shucchou sasemashita" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsemasu", },
    { japanese : "satousan o kaigi ni shusseki sasemashita" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsemasu", },
    { japanese : "watashi wa kodomo ni hon o yomasemasu" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsemasu", },
    { japanese : "watashi wa otouto ni jibun no heya o souji sasemasu" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsemasu", },
    { japanese : "watashi wa musuko o sukina hito kekkon sasemashita" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsemasu", },
    { japanese : "watashi wa musume o ikitai daigaku ni ikasemashita" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsemasu", },
    { japanese : "watashi wa kodomo ni sukina shigoto o sasemasu" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsemasu", },
    { japanese : "watashi wa musuko o hoshii mono o kawasemasu" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsemasu", },
    { japanese : "sumimasen ga, ashita yasumasete itadakemasen ka" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsete itadakemasen", },
    { japanese : "sumimasen ga, kono shiryou o kopii sasete itadakemasen ka" , meaning : "",  book : "minna", unit : "48",  type : "sentence", pattern : "Vsete itadakemasen", },
    { japanese : "itou sensei wa sakki koraremashita" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "Vremasu", },
    { japanese : "itou sensei wa ashita wa yasumaremasu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "Vremasu", },
    { japanese : "shachou wa odekake ni narimashita" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "Vremasu", },
    { japanese : "shachou wa okaeri ni narimashita" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "Vremasu", },
    { japanese : "ikimasu || kimasu || imasu => irasshaimasu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "tabemasu || nomimasu => meshiagarimasu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "iimasu => osshaimasu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "shitte imasu => gozonjidesu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "mimasu => goran ni narimasu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "shimasu => nasaimasu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "kuremasu => kudasaimasu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "shachou wa kaigishitsu ni irasshaimasu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "shachou wa gorufu o nasaimasu" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "okake kudasai" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "ohairi kudasai" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "gochuui kudasai" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "renraku kudasai" , meaning : "",  book : "minna", unit : "49",  type : "sentence", pattern : "polite form", },
    { japanese : "watakushi ga koohii o ire shimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "watakushi ga eki made o okuri shimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "watakushi ga kyou no yotei o go satsumei shimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "watakushi ga dekirudake hayaku go renraku shimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "ikimasu || kimasu => mairimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "imasu => orimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "tabemasu || nomimasu || moraimasu => itadakimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "iimasu => moushimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "shimasu => itashimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "shitte imasu => zonjite orimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "shirimasen => zonjimasen" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "mimasu => haikenshimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "kikimasu || uchi e ikimasu => ukagaimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "aimasu => omeni kakarimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "ashita 3ji ni otaku e ukagaimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "raishuu omeni kakarimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "watakushi miraa to moushimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "IMC ni tsutomete orimasu" , meaning : "",  book : "minna", unit : "50",  type : "sentence", pattern : "humble / fem form", },
    { japanese : "tsukue no ue ni nani ga arimasu ka / tsukue no ue ni hon ya enpitsu nado ga arimasu." , meaning : "masanın üzerinde ne var? Masanın üzerinde kitap ve kalem vs var.",  book : "minna", unit : "extras",  type : "sentence", pattern : "ya.. ya…", },
    { japanese : "kinou anata wa nani o tabemashita ka / kinoo watashi wa pan ya kudamono o tabemashita." , meaning : "düm sen ne yedin? Dün ben ekmek ve meyve vs yedim.",  book : "minna", unit : "extras",  type : "sentence", pattern : "ya.. ya…", },
    { japanese : "sengetsu anata wa nani o kaimashita ka / sengetsu watashi wa terebi ya reizooko o kaimashita." , meaning : "geçen ay sen ne satın aldın? Geçen ay ben tv ve buzdolabı aldım.",  book : "minna", unit : "extras",  type : "sentence", pattern : "ya.. ya…", },
    { japanese : "kinoo anata wa dare ni aimashita ka / kinoo watashi wa Asan ya Msan ni aimashita." , meaning : "dün kimle buluştun? Dün A ve M ile buluştum.",  book : "minna", unit : "extras",  type : "sentence", pattern : "comparatives (no hou) || ichiban", },
    { japanese : "fujisan to monburan to (dewa) dochira (no hou) ga takai desu ka / fuji-san yori monburan no hou takai desu." , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "comparatives (no hou) || ichiban", },
    { japanese : "jitensha to jidoosha to (dewa) dochira (no hoo) ga hayai desu ka / jitensha yori jidoosha no hou ga hayai desu." , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "comparatives (no hou) || ichiban", },
    { japanese : "watashi wa niku yori sakana no hou ga suki desu." , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "comparatives (no hou) || ichiban", },
    { japanese : "watashi wa sentaku yori sooji no hou ga suki desu." , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "comparatives (no hou) || ichiban", },
    { japanese : "kare wa koohii yori koocha no hou ga suki desu." , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "comparatives (no hou) || ichiban", },
    { japanese : "sekai de ichiban takai yama wa doko desu ka  / sekai de ichiban takai yama wa eberesuto desu." , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "comparatives (no hou) || ichiban", },
    { japanese : "anata wa kudamono no naka de nani ga ichiban suki desu ka / watashi wa kudamono no naka de ringo ga ichiban suki desu." , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "comparatives (no hou) || ichiban", },
    { japanese : "anata wa sakka no naka de dare ga ichiban suki desu ka / watashi wa sakka no naka de dostoyevksi ga ichiban suki desu." , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "comparatives (no hou) || ichiban", },
    { japanese : "kare wa kaisha ni itte, shigoto o shimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "kanojo wa asa okite, ha o migakimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "kare wa koohii ni satoo o irete nomimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa densha ni notte ie ni kaerimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa shibuya de ginzasen ni norikaete, gakkoo ni ikimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa tomodachi no ie ni itte, hanashimashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa shinbun o katte ikimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa hirugohan o tabete ikimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa kasa o motte ikimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa eki made aruite ikimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa tabako o katte kimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa isu o motte kimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa oishasan o yonde kimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "Vte V", },
    { japanese : "watashi wa mou kyooto ni ikimashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "mou || mada", },
    { japanese : "watashi wa mou asagohan o tabemashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "mou || mada", },
    { japanese : "watashi wa mada asagohan o tabete imasen" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "mou || mada", },
    { japanese : "watashi wa mada kimete imasen" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "mou || mada", },
    { japanese : "mou kaette mo ii desu ka? Hai, mou kaette ii desu / iie, mou kaette wa ikemasen" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "mou || mada", },
    { japanese : "ashita shiken ga aru kara, yoku benkyoo shimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "gogo ame ga furu kara, kasa o motte ikimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "jugyoo ga hajimaru kara, isogimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "kono toori wa takusan kuruma ga tooru kara, urusai desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "kyoo okane ga nai kara, nani mo kaemasen" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "konban watashi wa inai kara, ashita kite kudasai" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "kono tabemono wa furu kute taberarenai kara, sutete kudasai" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "kyoo wa nichiyoobi da kara, gakkoo wa yasumi desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "ima natsu da kara, minna umi ni ikimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "booru-pen wa benri da kara, watashi wa yoku tsukaimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "kotoba wa taisetsu da kara, oboete kudasai" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "konban paatii ga aru kara, watashi wa takusan biiru o kaimashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "biru o takusan nonda kara, yopparaimashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "tomodachi ga kita kara, yoru made hanashimashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "yuube amari nenakatta kara, atama ga itai desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "mukashi denki ga nakatta kara, yoru hon ga yomenakatta" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "kinoo totemo isogashi katta kara, tsukaremashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "yuube totemo samukatta kara, kaze o hikimashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "sono hon wa omoshiroku nakatta kara, kaimasen deshita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "kaban wa omoku nakatta kara, hitori de motte ikimashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "kinoo wa nichiyoobi datta kara, kooen wa konde imashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "kirei datta kara, shashin o takusan torimashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "kara", },
    { japanese : "satoosan wa shashin o toru koto ga suki desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "yoshidasan wa rajio o naosu koto ga suki desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "watashi wa ichi-nichi-juu neru koto ga suki desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "watashi wa nonbiri suru koto ga suki desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "watashi wa tsuri o suru koto ga suki desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "suzukisan no shumi wa rekoodo o kiku koto desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "yamadasan no shumi wa kitte o atsumeru koto desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "supootsu o suru koto wa ii koto desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "gaikoku o miru koto wa ii koto desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "tabako o takusan suu koto wa warui koto desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "asa hayaku okiru koto wa ii koto desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "watashi wa sukii o shita koto ga arimasu / arimasen" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "watashi wa uma ni notta koto ga arimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "watashi wa kyooto ni itta koto ga arimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "koto", },
    { japanese : "kono ongaku wa yoku kiku keredomo, namae wa shirimasen" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "tokidoki machigaeru keredomo, nihongo ga yoku hanasemasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "tsukarete iru, tomodachi no shigoto o tetsudaimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "okane ga nai keredomo, tanoshii desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "shashin o amari toranai keredomo, kamera o motte imasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "tomodachi no ie ni itta keredomo, tomodachi wa imasen deshita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "2-jikan matta keredomo, kanojo wa kimasen deshita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "jisho o mita keredomo, imi ga wakarimasen deshita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "kono hon wa yasui keredomo, ii hon desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "ano resutoran wa takai keredomo, oishiku arimasen" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "yuube tonari ga urusakatta keredomo, neraremashita" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "keshiki wa yokatta keredomo, tenki ga warukatta desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "kare wa yuumei da keredomo, binboo desu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "sukiyaki wa suki da keredomo, amari taberaremasen" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },
    { japanese : "kyoo wa nichi yoobi da keredomo, hatarakimasu" , meaning : "",  book : "minna", unit : "extras",  type : "sentence", pattern : "keredomo", },

  
];









// DOM ELEMENTS


const selectedUnit = document.getElementById("select-units");

const divSentencesDisplay = document.getElementById("div-sentences-display");

const divPatternsDisplay = document.getElementById("div-patterns-display")

const divSelectUnits = document.getElementById("select-units");

const divUnits = document.getElementById("div-units");

const backToTop = document.getElementById("back-to-top");

const buttonUnits = document.getElementById("button-units");

const buttonPatterns = document.getElementById("button-patterns");




// FUNCTIONS


// get study patterns

function getPatterns (data) {

    let patternsArray = data.map(item => item.pattern)
    let patternsArraySet = [... new Set(patternsArray)]

    htmlCreatorPatterns(patternsArraySet)

  

}


// make html for patterns 

function htmlCreatorPatterns (array) {

    divSentencesDisplay.innerHTML = "";
    divPatternsDisplay.innerHTML = "";



    array.forEach(item => {


        let patternTitle = document.createElement("h3");
        patternTitle.setAttribute("class", "pattern-title")
        patternTitle.textContent = item
        divPatternsDisplay.append(patternTitle)

        let patternSentencesDiv = document.createElement("div")
        patternSentencesDiv.setAttribute("class", "pattern-sentences-div")
        patternSentencesDiv.style.display = "none"
        divPatternsDisplay.append(patternSentencesDiv)
        




        let filtered = dataChinese.filter(data => data.pattern === item);





    filtered.forEach( item => {

       
        let patternDiv = document.createElement("div");
        patternDiv.setAttribute("class", "pattern-div")
        patternDiv.style.display = "block";


        let japaneseP = document.createElement("p")
        japaneseP.setAttribute("class", "japanese-p")
        japaneseP.textContent = item.japanese
        japaneseP.style.display = "block"

        let meaningP = document.createElement("p")
        meaningP.setAttribute("class", "meaning-p")
        meaningP.textContent = item.meaning
        meaningP.style.display = "none"
        meaningP.style.color = "blue"

    
        patternDiv.append(japaneseP)
        patternDiv.append(meaningP)

        patternSentencesDiv.append(patternDiv)

        

    })






    })

    








}


// get individual pattern by click on dom

function clickOnPattern (data, clickedPattern) {

    let filteredArray = data.filter(item => item.pattern === clickedPattern)
    let mappedArray = filteredArray.map(item => item.japanese)
    return mappedArray

}




// selection per unit in book

function selectUnit (array, bookName, unitNumber) {

    let filteredUnit = array.filter(item => item.book === bookName && item.unit === unitNumber);

    return filteredUnit;
};


// copy and get test

function getSelectedText () {

    let definitionScreen;

    if (window.getSelection) {  // all browsers, except IE before version 9
        var range = window.getSelection();
        var rangeToString = range.toString().trim().toLowerCase();
        var rangeToArray = rangeToString.split(" ");

        if (rangeToArray.length === 1) {
            definitionScreen = window.open(`https://jisho.org/search/${rangeToString}`,"_blank" );
            
        } else if(rangeToArray.length > 1) {
            definitionScreen = window.open(`https://translate.google.com/#view=home&op=translate&sl=ja&tl=en&text=${rangeToString}`, "_blank" ) 
          
        } else {
            console.log("no text selected");
        };
     
    };

};




// Dynamic html Generator from the unit numbers



function htmlGeneratorFromUnitNumber (array, unitNumber) {


    divSentencesDisplay.innerHTML = "";
    htmlCreatorSentences (array, unitNumber);


}



// render the unit sentences

function htmlCreatorSentences (array, unitNumber) {

    let targetArray = selectUnit(array, "minna", unitNumber);

    let targetArrayMapped = targetArray.map(item => item.pattern);


    targetArrayMapped = [... new Set(targetArrayMapped)];

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

function makeOptions (array) {

    let unitNumbers = array.map(item => item.unit);

    let numbers = [...new Set(unitNumbers)];

    let target = []

    numbers.forEach(item => {
        item !== "" ? target.push(item) : null ;
    });

    return target;

};



// create select options by JS

function htmlOptions (array) {

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

    let selectedArray = selectUnit(dataChinese, "minna", unitNumber );

    htmlGeneratorFromUnitNumber (selectedArray, unitNumber);

    backToTop.style.display = "block";

});



backToTop.addEventListener("click", function (){
    document.body.scrollIntoView();
});


// pattern selection button event

buttonPatterns.addEventListener("click", function() {


divUnits.style.display = "none";

    getPatterns(dataChinese)

    backToTop.style.display = "block";
})




buttonUnits.addEventListener("click", function(e) {

divPatternsDisplay.innerHTML = "";
divSentencesDisplay.innerHTML = "";
divUnits.style.display = "block";
backToTop.style.display = "none";

})



function findMeaning (array, japanese) {

    let filtered = array.filter(item => item.japanese === japanese)
    let meaning = filtered[0].meaning
    
    return meaning


}



document.body.addEventListener("click", function(e){

    if (e.target.className === "japanese-p") {
        
       if (e.target.nextElementSibling.style.display === "none") {
        e.target.nextElementSibling.style.display = "block"
       } else if(e.target.nextElementSibling.style.display === "block") {
        e.target.nextElementSibling.style.display = "none" 
       }  
    }


    if (e.target.className === "pattern-title") {

        if( e.target.nextElementSibling.style.display === "none") {
            e.target.nextElementSibling.style.display = "block"
        } else {
            e.target.nextElementSibling.style.display = "none"
        }

       
    }

   
})



