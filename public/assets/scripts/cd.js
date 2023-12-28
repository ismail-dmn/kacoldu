var chartCurrencies = {};
function getClockFromTimestamp(e) {
    var n = new Date(1e3 * e)
        , t = n.getHours()
        , a = "0" + n.getMinutes()
        , i = "0" + n.getSeconds();
    return t <= 9 && (t = "0" + t),
        t + ":" + a.substr(-2) + ":" + i.substr(-2)
}
// temp parse
function parseWithoutNanDiff ( current, p, c){

  

    if(p === undefined || p === null || p === '' || p !== p) {
        return current;
    }

    if(c === undefined || c === null || c === '' || c !== c) {
        return current;
    }

    return parseFloat(p).toFixed(2) + " ("+parsePercentWithoutNaN(c,c)+")";
}


function parseWithoutNan(current, v) {
    if(v === undefined || v === null || v === '' || v!==v) {
        return current;
    }

    return v;
}

function parsePercentWithoutNaN(current, v) {
    if(v === undefined || v === null || v === '' || v!==v) {
        return current;
    }
    
    return '% ' + v;
}

function parseFloatWithoutNaN(current, v, fractionDigits) {
    if(v === undefined || v === null || v === '' || v!==v) {
        return current;
    }

    return parseFloat(v).toFixed(fractionDigits);
}

// temp parse end
function updateData(e, n) {
    var t = document.querySelectorAll("[data-code]");
    for (var a in t)
//        if (t.hasOwnProperty(a)) {
if (t.hasOwnProperty(a) && !isNaN(a)) {
            if (t[a].getAttribute("data-code") != e)
                continue;
            var i = $("[data-clock]").text();
            n.hasOwnProperty("lastUpdateTime") && (i = getClockFromTimestamp(n.lastUpdateTime));
            var c = parseFloat(100 * n.dcp);
            c = c.toFixed(2);
            var r = t[a].getAttribute("data-type");
            if (t[a].getAttribute("data-marketId") != n.m)
                continue;
            if ("table" == r) {
                var s = t[a].children[2]
                    , l = t[a].children[3]
                    , d = t[a].children[4]
                    , u = t[a].children[5];
                addMobileText = "",
                    l.className.indexOf("text-mobile-value") > 0 && (addMobileText = "text-mobile-value"),
                    l.className = "",
                    l.innerText > n.s ? l.className = "canli-down " + addMobileText : l.className = "canli-up " + addMobileText,
                    l.innerText = parseFloatWithoutNaN(l.innerText, n.s, 4),
                    s.innerText = parseFloatWithoutNaN(s.innerText, n.b, 4),
                    parseFloat(c) > 0 ? d.className = "status-up" : d.className = "status-down",
                  d.innerText = parsePercentWithoutNaN(d.innerText, c),
                    u.innerText = parseWithoutNan(u.innerText,i)
            }
            if ("summary" == r) {
                var l = t[a].children[1]
                    , d = t[a].children[2];
                l.className = "text-right ",
                    l.innerText > n.s ? l.className = "text-right canli-down " : l.className = "text-right canli-up ",
                    l.innerText = parseFloatWithoutNaN(l.innerText, n.s, 4)
                    parseFloat(c) > 0 ? d.className = "status-up" : d.className = "status-down",
                  d.innerText = parsePercentWithoutNaN(d.innerText, c)
            }
            if ("header" == r) {
                t[a].className = "";
                var d = t[a].children[0].children[1]
                    , l = t[a].children[1];
                l.className = "currency-value",
                    l.innerText > n.s ? l.className = "currency-value canli-down" : l.className = "currency-value canli-up",
                    l.innerText = parseFloatWithoutNaN(l.innerText, n.s, 4)
                    parseFloat(c).toFixed(4) >= 0 ? t[a].className = "up" : t[a].className = "down",
                  d.innerText = parsePercentWithoutNaN(d.innerText, c)
            }
            if ("detail" == r) {
                var s = t[a].children[1]
                    , l = t[a].children[2].children[0]
                    , h = t[a].children[2].children[1].children[0]
                    , d = h.getAttribute("data-percentage");
                try {
                    var u = t[a].children[0].children[0].children[1].children[1].children[1]
                } catch (o) {
                    try {
                        var u = t[a].children[0].children[1].children[1].children[1]
                    } catch (m) {
                        try {
                            var u = t[a].children[0].children[0].children[1].children[1]
                        } catch (x) { }
                    }
                }
                var N = t[a].children[3]
                    , T = t[a].children[4];
                l.className = "",
                    l.innerText > n.s ? l.className = "canli-down" : l.className = "canli-up",
                    l.innerText = parseFloatWithoutNaN(l.innerText, n.s, 4)
                    s.innerText = parseFloatWithoutNaN(s.innerText, n.b, 4)
              //  var p = parseFloat(n.dc);
               // p = p.toFixed(2),
                    N.innerText = parseFloatWithoutNaN(N.innerText, n.thsp, 4),
                    T.innerText = parseFloatWithoutNaN(T.innerText, n.tlsp, 4),
                    parseFloat(c) >= 0 ? h.className = "status-up" : h.className = "status-down",
                    h.innerText = parseWithoutNanDiff(h.innerText, n.dc,c),
                    h.setAttribute("data-percentage", c),
                    u.innerText = parseWithoutNan(u.innerText,i)
            }
            if ("info-head" == r) {
                var l = t[a].children[0].children[1].children[0]
                    , v = t[a].children[0].children[1]
                    , h = t[a].children[0].children[1].children[1]
                    , d = h.getAttribute("data-percentage")
                    , u = t[a].children[2].children[0].children[0].children[1];
                l.className = "",
                    l.innerText > n.s ? l.className = "canli-down" : l.className = "canli-up",
                    l.innerText =parseFloatWithoutNaN(l.innerText, n.s, 4);
                ///var p = parseFloat(n.dc).toFixed(2);
                parseFloat(c) >= 0 ? v.className = "status-up" : v.className = "status-down",
                    h.innerText = parseWithoutNanDiff(h.innerText, n.dc,c),
                    h.setAttribute("data-percentage", c),
                    u.innerText = parseWithoutNan(u.innerText,i)
            }
            if ("info-box" == r) {
                var l = t[a].children[1].children[1]
                    , s = t[a].children[0].children[1]
                    , N = t[a].children[2].children[1]
                    , T = t[a].children[3].children[1];
                l.className = "",
                    l.innerText > n.s ? l.className = "canli-down" : l.className = "canli-up",
                    l.innerText = parseFloatWithoutNaN(l.innerText, n.s, 4),
                    s.innerText = parseFloatWithoutNaN(s.innerText, n.b, 4),
                    N.innerText = parseFloatWithoutNaN(N.innerText, n.thsp, 4),
                    T.innerText = parseFloatWithoutNaN(T.innerText, n.tlsp, 4)
            }
            if ("minimal" == r) {
                var l = t[a].children[1]
                    , h = t[a].children[2]
                    , u = t[a].getAttribute("time");
                l.className = "",
                    l.innerText > n.s ? l.className = "currency-value canli-down" : l.className = "currency-value canli-up",
                    l.innerText = parseFloatWithoutNaN(l.innerText, n.s, 4)
                    parseFloat(c) >= 0 ? h.className = "currency-status status-up" : h.className = "currency-status status-down",
                    h.innerText = parsePercentWithoutNaN(h.innerText, c)
                    t[a].setAttribute("time", i)
            }
            if ("small" == r) {
                var l = t[a].children[1].children[0]
                    , h = t[a].children[0].children[0].children[0]
                    , u = t[a].getAttribute("time");
                l.className = "",
                    l.innerText > n.s ? l.className = "value currency-value canli-down" : l.className = "value currency-value canli-up",
                    l.innerText = parseFloatWithoutNaN(l.innerText, n.s, 4)
                    parseFloat(c) >= 0 ? h.className = "currency-status status-up" : h.className = "currency-status status-down",
                    h.innerText = parsePercentWithoutNaN(h.innerText, c)
                    t[a].setAttribute("time", i)
            }
            if ("mini" == r) {
                var s = t[a].children[1].children[0].children[0]
                    , l = t[a].children[1].children[1]
                    , h = t[a].children[0].children[0].children[0]
                    , u = t[a].getAttribute("time");
                l.className = "",
                    l.innerText > n.s ? l.className = "value currency-value canli-down" : l.className = "value currency-value canli-up",
                    l.innerText = parseFloatWithoutNaN(l.innerText, n.s, 4),
                    s.innerText = parseFloatWithoutNaN(s.innerText, n.b, 4),
                    parseFloat(c) >= 0 ? h.className = "currency-status status-up" : h.className = "currency-status status-down",
                    h.innerText = parsePercentWithoutNaN(h.innerText, c)
                    t[a].setAttribute("time", i)
            }
            if ("big" == r) {
                var s = t[a].children[1].children[0].children[1]
                    , l = t[a].children[1].children[1].children[1]
                    , h = t[a].children[0].children[0].children[0]
                    , T = t[a].children[2].children[1].children[0]
                    , N = t[a].children[2].children[0].children[0]
                    , u = t[a].getAttribute("time");
                l.className = "",
                    l.innerText > n.s ? l.className = "value currency-value canli-down" : l.className = "value currency-value canli-up",
                    l.innerText = parseFloatWithoutNaN(l.innerText, n.s, 4),
                    s.innerText = parseFloatWithoutNaN(s.innerText, n.b, 4),
                    N.innerText = parseFloatWithoutNaN(N.innerText, n.thsp, 4),
                    T.innerText = parseFloatWithoutNaN(T.innerText, n.tlsp, 4)
                    parseFloat(c) >= 0 ? h.className = "currency-status status-up" : h.className = "currency-status status-down",
                    h.innerText = parsePercentWithoutNaN(h.innerText, c)
                    t[a].setAttribute("time", i)
            }
        }
}


function appendLog(e) { }
function start() {
    // temp 
    var currentPathArray = window.location.pathname.split('/');
    var listenItemTypes = ["CURRENCY", "COIN", "STOCK", "INDEX", "EMTIA", "GOLD", "PARITY"];
    var listenItemCodes = [''];

    if(window.location.pathname === '/'){
        var listenItemTypes = [];
        var listenItemCodes = ['USD', 'EUR', 'GA', 'EUR/USD', 'GBP', 'GBP/USD', 'USD/JPY', 'USD/CHF', 'USD/EUR', 'JPY/USD', 'CAD', 'CHF', 'XAU/USD', 'C', 'Y', 'T', 'XU100', 'XU050', 'XU030', 'KAT50', 'KATLM', 'XBRUSD', 'XAG/USD', 'XPT/USD', 'XPD/USD', 'TCELL', 'BTC', 'XRP', 'ADA', 'LTC', 'TRX', 'JPY', 'RUB'];
    }else{
        if(currentPathArray[1] === 'doviz-kurlari'){
            //GA, EUR/USD, C, USD/RUB, GBP/USD, USD/EUR, JPY/USD, USD/GBP, GBP/EUR, BTC, XBRUSD, XAU/USD
            var listenItemTypes = ['CURRENCY'];
            var listenItemCodes = ['GA','EUR/USD','C','USD/RUB','GBP/USD','USD/EUR','JPY/USD','USD/GBP','GBP/EUR','BTC','XBRUSD','XAU/USD'];
        }

        if(currentPathArray[1] === 'altin-fiyatlari'){
            //USD, EUR, EUR/USD,  USD/RUB, GBP/USD, USD/EUR, JPY/USD, USD/GBP, GBP/EUR, XAU/USD, CHF, BTC, RUB, JPY, XBRUSD
            var listenItemTypes = ['GOLD'];
            var listenItemCodes = ['USD','EUR','EUR/USD', 'USD/RUB', 'GBP/USD', 'USD/EUR', 'JPY/USD', 'USD/GBP', 'GBP/EUR', 'XAU/USD', 'CHF', 'BTC', 'RUB', 'JPY', 'XBRUSD'];
        }

        if(currentPathArray[1] === 'kripto-paralar'){
            //USD, EUR, EUR/USD,   USD/RUB, GBP/USD, USD/EUR, JPY/USD, USD/GBP, GBP/EUR, XAU/USD, CHF, RUB, JPY, XBRUSD, GA, C
            var listenItemTypes = ['COIN'];
            var listenItemCodes = ['USD', 'EUR', 'EUR/USD', 'USD/RUB', 'GBP/USD', 'USD/EUR', 'JPY/USD', 'USD/GBP', 'GBP/EUR', 'XAU/USD', 'CHF', 'RUB', 'JPY', 'XBRUSD', 'GA', 'C'];
        }

        if(currentPathArray[1] === 'emtia-fiyatlari'){
            //USD, EUR, EUR/USD, BRENT,  USD/RUB, GBP/USD, USD/EUR, JPY/USD, USD/GBP, GBP/EUR, XAU/USD, CHF, BTC, RUB, JPY, GA, C
            var listenItemTypes = ['EMTIA'];
            var listenItemCodes = ['USD', 'EUR', 'EUR/USD', 'BRENT', 'USD/RUB', 'GBP/USD', 'USD/EUR', 'JPY/USD', 'USD/GBP', 'GBP/EUR', 'XAU/USD', 'CHF', 'BTC', 'RUB', 'JPY', 'GA', 'C'];
        }

        if(currentPathArray[1] === 'pariteler'){
            //USD, EUR,  XAU/USD, CHF, RUB, JPY, XBRUSD, GA, C
            var listenItemTypes = ['PARITY'];
            var listenItemCodes = ['USD', 'EUR', 'XAU/USD', 'CHF', 'RUB', 'JPY', 'XBRUSD', 'GA', 'C'];
        }

        if(currentPathArray[1] === 'borsa'){
            //USD, EUR, EUR/USD,  USD/RUB, GBP/USD, USD/EUR, JPY/USD, USD/GBP, GBP/EUR, XAU/USD, CHF, BTC, RUB, JPY, GA, C, XBRUSD
            var listenItemTypes = ['STOCK'];
            var listenItemCodes = ['USD', 'EUR', 'EUR/USD', 'USD/RUB', 'GBP/USD', 'USD/EUR', 'JPY/USD', 'USD/GBP', 'GBP/EUR', 'XAU/USD', 'CHF', 'BTC', 'RUB', 'JPY', 'GA', 'C', 'XBRUSD'];
        }

        if(currentPathArray[1] === 'haberler'){
            //XAU/USD, CHF, BTC, RUB, JPY, XBRUSD
            var listenItemTypes = [''];
            var listenItemCodes = ['XAU/USD', 'CHF', 'BTC', 'RUB', 'JPY', 'XBRUSD'];
        }

        if(currentPathArray[1].indexOf('haberler') !== -1){
            //XAU/USD, CHF, BTC, RUB, JPY, XBRUSD
            var listenItemTypes = [''];
            var listenItemCodes = ['XAU/USD', 'CHF', 'BTC', 'RUB', 'JPY', 'XBRUSD'];
        }

        if(currentPathArray.length> 2){
            // sub;
       
            var dataCode = document.querySelector('.page__head').getAttribute('data-code');
            if(dataCode){
                listenItemCodes.push(dataCode);
            }
        }
    }



    $.ajax({
        url: "https://sm.canlidoviz.com",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var e = io(data.server, { transports: ["websocket","polling"] });
            e.on("connect", function () {
                e.emit("us", {
                    itemTypes: listenItemTypes,
                    itemCodes: listenItemCodes,
                    sendMessages: false
                })
            }),
                e.on("c", function (e) {
                    "undefined" !== e && "undefined" !== e.c && void 0 !== chartCurrencies[e.c] && (chartCurrencies[e.c] = e.s)
                }),
                e.on("c", function (e) {
                    e.forEach(function (e, n) {
                        (split = e.split("|")).forEach(function (e, n) {
                            n > 0 && (split[n] = parseSocketValue(e))
                        });
                        var t = {
                            c: split[0],
                            t: "P",
                            b: split[2],
                            s: split[3],
                            m: split[1],
                            thsp: split[5],
                            tlsp: split[4],
                            dc: split[6],
                            dcp: split[7]
                        };
                        t.c && t.s && (chartCurrencies[t.c] = t.s),
                            updateData(t.c, t)
                    })
                })
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
            // Retry the request after 5 seconds if it fails
            setTimeout(start, 5000);
        }
    });
}

function parseSocketValue(e) {
    if("undefined" == typeof e || null == e || "" == e || isNaN(e)) return null;
    return parseFloat(e)
}

document.addEventListener("DOMContentLoaded", function () {
    start()
});






