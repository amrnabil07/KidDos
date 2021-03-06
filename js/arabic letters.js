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
            ["????",'v','a'], ["????",'c','b'], ["????",'c','v'],
            ["????",'c','g'], ["????",'c','d'], ["????",'v','e'],
            ["????",'v','yo'], ["????",'c','zh'], ["????",'c','z'],
            ["????",'v','i'], ["????",'v','y'], ["????",'c','k'],
            ["????",'c','l'], ["????",'c','m'], ["????",'c','n'],
            ["????",'v','o'], ["????",'c','p'], ["????",'c','r'],
            ["????",'c','s'], ["????",'c','t'], ["????",'v','u'],
            ["????",'c','f'], ["????",'c','x'], ["????",'c','ts'],
            ["????",'c','ch'], ["????",'c','sh'], ["????",'c','sch'],
            ["????",'s','npl.'], ["????",'v','ih'], ["????",'s','pl.'],
            ["????",'v','e'], ["????",'v','yu'], ["????",'v','ya']
          ],
          'direction': 'ltr',
          'name': 'Cyrillic Alphabet'
        },
        'greek': {
          'letters': [
            ["????",'v','a'], ["????",'c','v'], ["????",'c','gy'],
            ["????",'c','dh'], ["????",'v','e'], ["????",'c','z'],
            ["????",'v','i'], ["????",'c','th'], ["????",'v','i'],
            ["????",'c','k'], ["????",'c','l'], ["????",'c','m'],
            ["????",'c','n'], ["????",'c','ks'], ["????",'v','o'],
            ["????",'c','p'], ["????",'c','r'], ["??????",'c','s'],
            ["????",'c','t'], ["????",'v','y'], ["????",'c','f'],
            ["????",'c','x'], ["????",'c','ps'], ["????",'v','o']
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
            ['????','v','a'],['????','c','b'],['????','c','g'],
            ['????','c','d'],['????','v','e'],['????','c','z'],
            ['????','v','e'],['????','v','uh'],['????','c','t'],
            ['????','c','zh'],['????','v','i'],['????','c','l'],
            ['????','c','x'],['????','c','ts'],['????','c','k'],
            ['????','c','h'],['????','c','dz'],['????','c','r'],
            ['????','c','ch'],['????','c','m'],['????','v','y'],
            ['????','c','n'],['????','c','sh'],['????','c','aa'],
            ['????','c','ch'],['????','c','p'],['????','c','j'],
            ['????','c','r'],['????','c','s'],['????','c','v'],
            ['????','c','t'],['????','c','r'],['????','c','ts'],
            ['????','c','v'],['????','c','p'],['????','c','k'],
            ['??','b','ev'],['????','v','o'],['????','c','f']
          ],
          'direction': 'ltr',
          'name': 'Armenian Alphabet'
        },
        'georgian': {
          'letters': [
            ['???','v','a'],['???','c','b'],['???','c','g'],
            ['???','c','d'],['???','v','e'],['???','c','v'],
            ['???','c','z'],['???','c','t'],['???','v','i'],
            ['???','c','k'],['???','c','l'],['???','c','m'],
            ['???','c','n'],['???','v','aa'],['???','c','p'],
            ['???','c','zh'],['???','c','r'],['???','c','s'],
            ['???','c','t'],['???','v','u'],['???','c','p'],
            ['???','c','k'],['???','c','gy'],['???','c','q'],
            ['???','c','sh'],['???','c','ch'],['???','c','ts'],
            ['???','c','dz'],['???','c','ts'],['???','c','ch'],
            ['???','c','x'],['???','c','j'],['???','c','h']
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