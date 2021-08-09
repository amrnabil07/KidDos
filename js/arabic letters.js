$(document).ready(function(){
      var typecolors = {'v':'#8E44AD;','c':'#E74C3C','s':'#F39C12','d':'#B7950B'};
      var ipa = {
        "a":"<b>a</b> as in <b>a</b>ll",
        "b":"<b>b</b> as in <b>b</b>oy",
        "v":"<b>v</b> as in <b>v</b>alley",
        "g":"<b>g</b> as in <b>g</b>oat",
        "d":"<b>d</b> as in <b>d</b>oor",
        "e":"<b>e</b> as in <b>e</b>gg",
        "yo":"<b>yo</b> as in <b>yo</b>del",
        "zh":"<b>z</b> as in sei<b>z</b>ure",
        "z":"<b>z</b> as in <b>z</b>ebra",
        "i":"<b>i</b> as in sk<b>i</b>",
        "y":"<b>y</b> as in <b>y</b>es",
        "k":"<b>k</b> as in <b>k</b>id",
        "l":"<b>l</b> as in <b>l</b>emon",
        "m":"<b>m</b> as in <b>m</b>an",
        "n":"<b>n</b> as in <b>n</b>o",
        "o":"<b>o</b> as in <b>o</b>pen",
        "p":"<b>p</b> as in <b>p</b>ast",
        "r":"<b>r</b> as in <b>r</b>ace",
        "s":"<b>s</b> as in <b>s</b>auce",
        "t":"<b>t</b> as in <b>t</b>all",
        "u":"<b>u</b> as in r<b>u</b>de",
        "f":"<b>f</b> as in <b>f</b>ight",
        "x":"Hard <b>ch</b> as in Lo<b>ch</b>",
        "ts":"<b>ts</b> as in hi<b>ts</b>",
        "ch":"<b>ch</b> as in <b>ch</b>oose",
        "sh":"<b>sh</b> as in <b>sh</b>oe",
        "sch":"Like <b>sh</b> as in <b>sh</b>oe but with the tongue farther back in the mouth",
        "npl.":"Indicates that the previous letter should not be palatized",
        "ih":"<b>i</b> as in h<b>i</b>t",
        "pl.":"Indicates that the previous letter should be palatized",
        "yu":"<b>u</b> as in f<b>u</b>ture",
        "ya":"<b>ya</b> as <b>ya</b>cht",
        "gy":"Like <b>g</b> as in <b>g</b>oat but farther back in the mouth",
        "th":"<b>th</b> as in <b>th</b>ing",
        "dh":"<b>th</b> as in <b>th</b>at",
        "ks":"<b>x</b> as in a<b>x</b>e",
        "ps":"<b>ps</b> as in li<b>ps</b>",
        "?":"Silent",
        "h":"<b>h</b> as in <b>h</b>air",
        "uh":"<b>u</b> as in <b>u</b>nder",
        "dz":"<b>ds</b> as in li<b>ds</b>",
        "aa":"<b>ough</b> as in th<b>ough</b>t",
        "j":"<b>j</b> as in <b>j</b>am",
        "ev":"<b>ev</b> as in <b>ev</b>er",
        "q":"<b>k</b> as in <b>k</b>id but farther back in the mouth"
      };
      var language = {
        'cyrillic': {
          'letters': [
            ["Аа",'v','a'], ["Бб",'c','b'], ["Вв",'c','v'],
            ["Гг",'c','g'], ["Дд",'c','d'], ["Ее",'v','e'],
            ["Ёё",'v','yo'], ["Жж",'c','zh'], ["Зз",'c','z'],
            ["Ии",'v','i'], ["Йй",'v','y'], ["Кк",'c','k'],
            ["Лл",'c','l'], ["Мм",'c','m'], ["Нн",'c','n'],
            ["Оо",'v','o'], ["Пп",'c','p'], ["Рр",'c','r'],
            ["Сс",'c','s'], ["Тт",'c','t'], ["Уу",'v','u'],
            ["Фф",'c','f'], ["Хх",'c','x'], ["Цц",'c','ts'],
            ["Чч",'c','ch'], ["Шш",'c','sh'], ["Щщ",'c','sch'],
            ["Ъъ",'s','npl.'], ["Ыы",'v','ih'], ["Ьь",'s','pl.'],
            ["Ээ",'v','e'], ["Юю",'v','yu'], ["Яя",'v','ya']
          ],
          'direction': 'ltr',
          'name': 'Cyrillic Alphabet'
        },
        'greek': {
          'letters': [
            ["Αα",'v','a'], ["Ββ",'c','v'], ["Γγ",'c','gy'],
            ["Δδ",'c','dh'], ["Εε",'v','e'], ["Ζζ",'c','z'],
            ["Ηη",'v','i'], ["Θθ",'c','th'], ["Ιι",'v','i'],
            ["Κκ",'c','k'], ["Λλ",'c','l'], ["Μμ",'c','m'],
            ["Νν",'c','n'], ["Ξξ",'c','ks'], ["Οο",'v','o'],
            ["Ππ",'c','p'], ["Ρρ",'c','r'], ["Σσς",'c','s'],
            ["Ττ",'c','t'], ["Υυ",'v','y'], ["Φφ",'c','f'],
            ["Χχ",'c','x'], ["Ψψ",'c','ps'], ["Ωω",'v','o']
          ],
          'direction': 'ltr',
          'name': 'Greek Alphabet'
        },
        'hebrew': {
          'letters': [
            ['&#1488;','v','?'],['&#64305;','c','b'],['&#1489;','c','v'],
            ['&#1490;','c','g'],['&#1491;','c','d'],['&#1492;','c','h'],
            ['&#1493;','c','v'],['&#64331;','v','o'],['&#64309;','v','u'],
            ['&#1494;','c','z'],['&#1495;','c','x'],
            ['&#1496;','c','t'],['&#1497;','v','y'],['&#64315;','c','k'],
            ['&#1499;&#1498;','c','x'],['&#1500;','c','l'],['&#1502;&#1501;','c','m'],
            ['&#1504;&#1503','c','n'],['&#1505;','c','s'],['&#1506;','v','?'],
            ['&#64324;','c','p'],['&#1508;&#1507;','c','f'],['&#1510;&#1509;','c','ts'],
            ['&#1511;','c','k'],['&#1512;','c','r'],['&#64298;','c','sh'],
            ['&#64299;','c','s'],['&#1514;','c','t'],['&#1463;A','d','a'],
            ['&#1464;A','d','a'],['&#1461;A','d','e'],['&#1462;A','d','e'],
            ['&#1465;A','d','o'],['&#1467;A','d','u'],['&#1460;A','d','i'],
            ['&#1456;A','d','?']
          ],
          'direction': 'rtl',
          'name': 'Hebrew Alphabet'
        },
        'armenian': {
          'letters': [
            ['Աա','v','a'],['Բբ','c','b'],['Գգ','c','g'],
            ['Դդ','c','d'],['Եե','v','e'],['Զզ','c','z'],
            ['Էէ','v','e'],['Ըը','v','uh'],['Թթ','c','t'],
            ['Ժժ','c','zh'],['Իի','v','i'],['Լլ','c','l'],
            ['Խխ','c','x'],['Ծծ','c','ts'],['Կկ','c','k'],
            ['Հհ','c','h'],['Ձձ','c','dz'],['Ղղ','c','r'],
            ['Ճճ','c','ch'],['Մմ','c','m'],['Յյ','v','y'],
            ['Նն','c','n'],['Շշ','c','sh'],['Ոո','c','aa'],
            ['Չչ','c','ch'],['Պպ','c','p'],['Ջջ','c','j'],
            ['Ռռ','c','r'],['Սս','c','s'],['Վվ','c','v'],
            ['Տտ','c','t'],['Րր','c','r'],['Ցց','c','ts'],
            ['Ււ','c','v'],['Փփ','c','p'],['Քք','c','k'],
            ['և','b','ev'],['Օօ','v','o'],['Ֆֆ','c','f']
          ],
          'direction': 'ltr',
          'name': 'Armenian Alphabet'
        },
        'georgian': {
          'letters': [
            ['ა','v','a'],['ბ','c','b'],['გ','c','g'],
            ['დ','c','d'],['ე','v','e'],['ვ','c','v'],
            ['ზ','c','z'],['თ','c','t'],['ი','v','i'],
            ['კ','c','k'],['ლ','c','l'],['მ','c','m'],
            ['ნ','c','n'],['ო','v','aa'],['პ','c','p'],
            ['ჟ','c','zh'],['რ','c','r'],['ს','c','s'],
            ['ტ','c','t'],['უ','v','u'],['ფ','c','p'],
            ['ქ','c','k'],['ღ','c','gy'],['ყ','c','q'],
            ['შ','c','sh'],['ჩ','c','ch'],['ც','c','ts'],
            ['ძ','c','dz'],['წ','c','ts'],['ჭ','c','ch'],
            ['ხ','c','x'],['ჯ','c','j'],['ჰ','c','h']
          ],
          'direction': 'ltr',
          'name': 'Georgian Alphabet'
        },
        'arabic': {
          'letters':[
            ['&#1575; &#1600;&#1575;','v','a'],
            ['&#1600;&#1576;	&#1600;&#1576;&#1600;	&#1576;&#1600;	&#1576;','c','b']
          ],
          'direction': 'rtl',
          'name': 'Arabic Script'
        }
      };
      for(var script in language) {
        $("body").append("<div class='script' id='" + script + "'><h1>" + language[script].name + "</h1><div class='info' id='" + script + "script'</div>");
        for(var lett in language[script]['letters']){
          var l = language[script]['letters'][lett];
          $("#" + script).append("<div class='let " + l[1] + " " + language[script]['direction'] + "' id ='" + script + "," + lett + "'><p>" + l[0] + "</p></div>");
        }
      }
      $(".let").hover(function(){
        var set = this.id;
        set = set.split(",");
        var scr = set[0];
        var num = set[1];
        var info = language[set[0]].letters[set[1]];
        $("#" + set[0] + "script").empty();
        $("#" + set[0] + "script").append(
          "<p id='in'>" + (info[0]) + ": " + (ipa[info[2]]) + "</p>"
        );
      });
    });