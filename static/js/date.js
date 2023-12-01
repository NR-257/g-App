console.log(x);
console.log(garbage_name);

// HTMLエンティティをデコード
var decodedString = document.createElement("textarea");
decodedString.innerHTML = garbage_name;
var garbageArray = JSON.parse(decodedString.value.replace(/'/g, '"'));

console.log(garbageArray); // ["ペットボトル", "空き缶"] が表示されます

for (var element of garbageArray) {
    // element を使って繰り返し処理を行うコードをここに書きます
    console.log(element);
}
// ゴミの日を判断するif文
var isBinKanPet = garbageArray.includes('ペットボトル') || garbageArray.includes('空き缶') || garbageArray.includes("びん");
var isCombustible = garbageArray.includes("衣類");
var isPlastic = garbageArray.includes("プラスチック容器") || garbageArray.includes('プラスチックバッグ');
var isPaper = garbageArray.includes("新聞紙") || garbageArray.includes('ダンボール');
var isNoncombustible = garbageArray.includes("電池");

if (isBinKanPet) {
    console.log("ビン・缶・ペットボトル");
} else if (isCombustible) {
    console.log("可燃");
} else if (isPlastic) {
    console.log("プラスチック");
} else if (isPaper) {
    console.log("古紙");
} else if (isNoncombustible) {
    console.log("不燃");
} else {
    console.log("ゴミの日が特定できません");
}

function getAddres(option) {
    var selectedAddres = option.value;
    console.log(selectedAddres);
    // ビン・缶・ペットボトル
    if (isBinKanPet) {
        getNextCollectionDate("ビン・缶・ペットボトル", selectedAddres); // 関数 getNextCollectionDate を呼び出して次の収集日を取得
    }
    // 可燃ごみ
    if (isCombustible) {
        getNextCollectionDate("可燃ごみ", selectedAddres); // 関数 getNextCollectionDate を呼び出して次の収集日を取得
    }
    // プラスチック
    if (isPlastic) {
        getNextCollectionDate("プラスチック", selectedAddres); // 関数 getNextCollectionDate を呼び出して次の収集日を取得
    }
    // 古紙
    if (isPaper) {
        getNextCollectionDate("古紙", selectedAddres); // 関数 getNextCollectionDate を呼び出して次の収集日を取得
    }

    // 不燃ごみ
    if (isNoncombustible) {
        getNextCollectionDate("不燃ごみ", selectedAddres); // 関数 getNextCollectionDate を呼び出して次の収集日を取得
    }
}

// 指定した種類のゴミの次の収集日を計算する関数
function getNextCollectionDate(garbageType, addres) {
    console.log("動いた")
    // 現在の日付を取得
    var currentDate = new Date();
    var Data;

    // 指定した日付の曜日と日を取得
    var currentDayOfWeek = currentDate.getDay(); // 0 (日曜) から 6 (土曜) の値
    var currentDayOfMonth = Math.floor(currentDate.getDate() / 7) + 1; //第何週目か
    console.log(currentDayOfMonth);

    switch (addres) {
        case "赤羽1":
            Data = Window.Akabane1;
            break;
        case "赤羽2":
            Data = Window.Akabane2;
            break;
        case "赤羽3":
            Data = Window.Akabane3;
            break;
        case "赤羽4":
            Data = Window.Akabane4;
            break;
        case "赤羽5":
            Data = Window.Akabane5;
            break;
        case "赤羽6":
            Data = Window.Akabane6;
            break;
        case "赤羽北1":
            Data = Window.AkabaneKita1;
            break;
        case "赤羽北2":
            Data = Window.AkabaneKita2;
            break;
        case "赤羽北3":
            Data = Window.AkabaneKita3;
            break;
        case "赤羽北4":
            Data = Window.AkabaneKita4;
            break;
        case "赤羽台1":
            Data = Window.AkabaneDai1;
            break;
        case "赤羽台2":
            Data = Window.AkabaneDai2;
            break;
        case "赤羽台3":
            Data = Window.AkabaneDai3;
            break;
        case "赤羽台4":
            Data = Window.AkabaneDai4;
            break;
        case "赤羽台5":
            Data = Window.AkabaneDai5;
        case "赤羽西1":
            Data = Window.Akabane1;
            break;
        case "赤羽西2":
            Data = Window.Akabane2;
            break;
        case "赤羽南":
            Data = Window.Akabane3;
            break;
        case "岩渕町1":
            Data = Window.Akabane4;
            break;
        case "岩渕町2":
            Data = Window.Akabane5;
            break;
        case "浮間1":
            Data = Window.Ukima1;
            break;
        case "浮間2":
            Data = Window.Ukima2;
            break;
        case "浮間3":
            Data = Window.Ukima3;
            break;
        case "浮間4":
            Data = Window.Ukima4;
            break;
        case "浮間5":
            Data = Window.Ukima5;
            break;
        case "浮間6":
            Data = Window.Ukima6;
            break;
        case "浮間7":
            Data = Window.Ukima7;
            break;
        case "浮間8":
            Data = Window.Ukima8;
            break;
        case "浮間9":
            Data = Window.Ukima9;
            break;
        case "浮間10":
            Data = Window.Ukima10;
            break;
        case "浮間11":
            Data = Window.Ukima11;
            break;
        case "王子1":
            Data = Window.Oji1;
            break;
        case "王子2":
            Data = Window.Oji2;
            break;
        case "王子3":
            Data = Window.Oji3;
            break;
        case "王子4":
            Data = Window.Oji4;
            break;
        case "王子5":
            Data = Window.Oji5;
            break;
        case "王子6":
            Data = Window.Oji6;
            break;
        case "王子7":
            Data = Window.Oji7;
            break;
        case "王子8":
            Data = Window.Oji8;
            break;
        case "王子9":
            Data = Window.Oji9;
            break;
        case "王子本町1":
            Data = Window.OjiHoncho1;
            break;
        case "王子本町2":
            Data = Window.OjiHoncho2;
            break;
        case "上十条1":
            Data = Window.KamiJujo1;
            break;
        case "上十条2":
            Data = Window.KamiJujo2;
            break;
        case "上十条3":
            Data = Window.KamiJujo3;
            break;
        case "上十条4":
            Data = Window.KamiJujo4;
            break;
        case "上十条5":
            Data = Window.KamiJujo5;
            break;
        case "上十条6":
            Data = Window.KamiJujo6;
            break;
        case "神谷1":
            Data = Window.Kamiya1;
            break;
        case "神谷2":
            Data = Window.Kamiya2;
            break;
        case "神谷3":
            Data = Window.Kamiya3;
            break;
        case "神谷4":
            Data = Window.Kamiya4;
            break;
        case "岸町":
            Data = Window.Kishimachi;
            break;
        case "桐ヶ丘1":
            Data = Window.Kirigaoka1;
            break;
        case "桐ヶ丘2":
            Data = Window.Kirigaoka2;
            break;
        case "桐ヶ丘3":
            Data = Window.Kirigaoka3;
            break;
        case "志茂1":
            Data = Window.Shimo1;
            break;
        case "志茂2":
            Data = Window.Shimo2;
            break;
        case "志茂3":
            Data = Window.Shimo3;
            break;
        case "志茂4":
            Data = Window.Shimo4;
            break;
        case "志茂5":
            Data = Window.Shimo5;
            break;
        case "志茂6":
            Data = Window.Shimo6;
            break;
        case "志茂7":
            Data = Window.Shimo7;
            break;
        case "十条台1":
            Data = Window.Jujodai1;
            break;
        case "十条台2":
            Data = Window.Jujodai2;
            break;
        case "十条仲原1":
            Data = Window.JujoNakahara1;
            break;
        case "十条仲原2":
            Data = Window.JujoNakahara2;
            break;
        case "豊島1":
            Data = Window.Toshima1;
            break;
        case "豊島2":
            Data = Window.Toshima2;
            break;
        case "豊島3":
            Data = Window.Toshima3;
            break;
        case "豊島4":
            Data = Window.Toshima4;
            break;
        case "豊島5":
            Data = Window.Toshima5;
            break;
        case "豊島6":
            Data = Window.Toshima6;
            break;
        case "豊島7":
            Data = Window.Toshima7;
            break;
        case "豊島8":
            Data = Window.Toshima8;
            break;
        case "豊島9":
            Data = Window.Toshima9;
            break;
        case "豊島10":
            Data = Window.Toshima10;
            break;
        case "豊島11":
            Data = Window.Toshima11;
            break;
        case "豊島12":
            Data = Window.Toshima12;
            break;
        case "豊島13":
            Data = Window.Toshima13;
            break;
        case "豊島14":
            Data = Window.Toshima14;
            break;
        case "中十条1":
            Data = Window.NakaJujo1;
            break;
        case "中十条2":
            Data = Window.NakaJujo2;
            break;
        case "中十条3":
            Data = Window.NakaJujo3;
            break;
        case "中十条4":
            Data = Window.NakaJujo4;
            break;
        case "中十条5":
            Data = Window.NakaJujo5;
            break;
        case "中十条6":
            Data = Window.NakaJujo6;
            break;
        case "中十条7":
            Data = Window.NakaJujo7;
            break;
        case "西が丘1":
            Data = Window.NIshigaoka1;
            break;
        case "西が丘2":
            Data = Window.NIshigaoka2;
            break;
        case "西が丘3":
            Data = Window.NIshigaoka3;
            break;
        case "西が丘4":
            Data = Window.NIshigaoka4;
            break;
        case "東十条":
            Data = Window.HigashiJujo;
            break;
        case "堀船":
            Data = Window.Horifune;
            break;
        default:
            var nextCollectionResultElement = document.getElementById("nextCollectionResult");
            nextCollectionResultElement.textContent = "収集日のデータがありません。";
    }
    console.log(Data);
    // ゴミのスケジュールデータから次の収集日を検索
    for (var i = 0; i < Data.length; i++) {
        var schedule = Data[i];
        var daysUntilDesiredDayOfWeek;

        if (garbageType === schedule.type && schedule.nthWeek === 0 && garbageType !== "可燃ごみ") {
            console.log("動いた3");

            var daysUntilDesiredDayOfWeek = (schedule.dayOfWeek + 7 - currentDate.getDay()) % 7;

            // 来週の指定曜日の日付を計算
            const nextWeekDate = new Date(currentDate);
            nextWeekDate.setDate(currentDate.getDate() + daysUntilDesiredDayOfWeek);
            var year = nextWeekDate.getFullYear();
            var month = nextWeekDate.getMonth() + 1; // 月は0から始まるため、1を加えて補正
            var day = nextWeekDate.getDate();

            var resultParagraph = document.createElement("p");

            // テキストコンテンツを設定
            resultParagraph.textContent = "次の収集日: " + month + "/" + day + " 種類: " + garbageType;

            // ドキュメント内の要素（ID: "extended-addres"）を取得
            var ID = document.getElementById("nextCollectionResult");

            // 新しい段落要素を "extended-addres" 要素に追加
            ID.appendChild(resultParagraph);
            //var nextCollectionResultElement = document.getElementById("nextCollectionResult");
            //nextCollectionResultElement.textContent = "次のゴミの収集日: " + month + "/" + day + " 種類: " + garbageType;

            // 結果を表示
            console.log(`来週の指定曜日（${schedule.dayOfWeek}）の日付は ${year}-${month}-${day} です。`);
            break;
        } else if (schedule.nthWeek instanceof Array && garbageType == "不燃ごみ") {
            //不燃ごみの処理
            console.log("動いた4");
            for (var j = 0; j < schedule.nthWeek.length; j++) {
                var nthWeek = schedule.nthWeek[j];
                // 指定週が今週の週よりも後で、かつ指定曜日が今日よりも後の場合
                if ((garbageType === schedule.type) && ((nthWeek > currentDayOfMonth) || (nthWeek === currentDayOfMonth && schedule.dayOfWeek > currentDate.getDay()))) {
                    console.log("動いた5");
                    // 今週からの日数を計算
                    if ((nthWeek === currentDayOfMonth && schedule.dayOfWeek > currentDate.getDay())) {
                        daysUntilDesiredDayOfWeek = (schedule.dayOfWeek + 7 - currentDate.getDay()) % 7;
                    } else {
                        daysUntilDesiredDayOfWeek = (schedule.dayOfWeek - currentDate.getDay());
                    }

                    console.log(daysUntilDesiredDayOfWeek);

                    // 指定曜日の日付を計算
                    const nextDesiredDayDate = new Date(currentDate);
                    nextDesiredDayDate.setDate(currentDate.getDate() + daysUntilDesiredDayOfWeek + (nthWeek - currentDayOfMonth) * 7);
                    var year = nextDesiredDayDate.getFullYear();
                    var month = nextDesiredDayDate.getMonth() + 1; // 月は0から始まるため、1を加えて補正
                    var day = nextDesiredDayDate.getDate();
                    //var nextCollectionResultElement = document.getElementById("nextCollectionResult");
                    //nextCollectionResultElement.textContent = "次のゴミの収集日: " + month + "/" + day + " 種類: " + garbageType;
                    var resultParagraph = document.createElement("p");

                    // テキストコンテンツを設定
                    resultParagraph.textContent = "次の収集日: " + month + "/" + day + " 種類: " + garbageType;

                    // ドキュメント内の要素（ID: "extended-addres"）を取得
                    var ID = document.getElementById("nextCollectionResult");

                    // 新しい段落要素を "extended-addres" 要素に追加
                    ID.appendChild(resultParagraph);

                    // 結果を表示
                    console.log(`次の${nthWeek}週の指定曜日（${schedule.dayOfWeek}）の日付は ${year}-${month}-${day} です.`);
                    break;
                } else{
                    //daysUntilDesiredDayOfWeek = (schedule.dayOfWeek + 7 - currentDate.getDay()) % 7;
                    daysUntilDesiredDayOfWeek = (schedule.dayOfWeek - currentDate.getDay());
                    

                    console.log(daysUntilDesiredDayOfWeek);

                    // 指定曜日の日付を計算
                    const nextDesiredDayDate = new Date(currentDate);
                    nextDesiredDayDate.setDate(currentDate.getDate() + daysUntilDesiredDayOfWeek + (nthWeek - currentDayOfMonth) * 7);
                    var year = nextDesiredDayDate.getFullYear();
                    var month = nextDesiredDayDate.getMonth() + 1; // 月は0から始まるため、1を加えて補正
                    var day = nextDesiredDayDate.getDate();
                    //var nextCollectionResultElement = document.getElementById("nextCollectionResult");
                    //nextCollectionResultElement.textContent = "次のゴミの収集日: " + month + "/" + day + " 種類: " + garbageType;

                    var resultParagraph = document.createElement("p");

                    // テキストコンテンツを設定
                    resultParagraph.textContent = "次の収集日: " + month + "/" + day + " 種類: " + garbageType;

                    // ドキュメント内の要素（ID: "extended-addres"）を取得
                    var ID = document.getElementById("nextCollectionResult");

                    // 新しい段落要素を "extended-addres" 要素に追加
                    ID.appendChild(resultParagraph);
                    // 結果を表示
                    console.log(`次の${nthWeek}週の指定曜日（${schedule.dayOfWeek}）の日付は ${year}-${month}-${day} です.`);
                    break;
                }
            }
        } else if (garbageType === "可燃ごみ") {
            //可燃ごみの処理
            var found = false; // マッチングフラグ

            for (var j = 0; j < schedule.dayOfWeek.length; j++) {
                if (currentDayOfWeek < schedule.dayOfWeek[j]) {
                    daysUntilDesiredDayOfWeek = (schedule.dayOfWeek[j] + 7 - currentDate.getDay()) % 7;
                    found = true; // マッチしたことを記録

                    // ここで処理を行います
                    const nextWeekDate = new Date(currentDate);
                    nextWeekDate.setDate(currentDate.getDate() + daysUntilDesiredDayOfWeek);
                    var year = nextWeekDate.getFullYear();
                    var month = nextWeekDate.getMonth() + 1;
                    var day = nextWeekDate.getDate();
                    //var nextCollectionResultElement = document.getElementById("nextCollectionResult");
                    //nextCollectionResultElement.textContent = "次のゴミの収集日: " + month + "/" + day + " 種類: " + garbageType;
                    var resultParagraph = document.createElement("p");

                    // テキストコンテンツを設定
                    resultParagraph.textContent = "次の収集日: " + month + "/" + day + " 種類: " + garbageType;

                    // ドキュメント内の要素（ID: "extended-addres"）を取得
                    var ID = document.getElementById("nextCollectionResult");

                    // 新しい段落要素を "extended-addres" 要素に追加
                    ID.appendChild(resultParagraph);
                    console.log(`来週の指定曜日（${schedule.dayOfWeek[j]}）の日付は ${year}-${month}-${day} です。`);
                    break;
                }
            }

            // マッチしなかった場合の代替処理
            if (!found) {
                daysUntilDesiredDayOfWeek = (schedule.dayOfWeek[0] + 7 - currentDate.getDay()) % 7;
                const nextWeekDate = new Date(currentDate);
                nextWeekDate.setDate(currentDate.getDate() + daysUntilDesiredDayOfWeek);
                var year = nextWeekDate.getFullYear();
                var month = nextWeekDate.getMonth() + 1;
                var day = nextWeekDate.getDate();
                //var nextCollectionResultElement = document.getElementById("nextCollectionResult");
                //nextCollectionResultElement.textContent = "次のゴミの収集日: " + month + "/" + day + " 種類: " + garbageType;
                console.log(`来週の指定曜日（${schedule.dayOfWeek[0]}）の日付は ${year}-${month}-${day} です。`);

                var resultParagraph = document.createElement("p");

                // テキストコンテンツを設定
                resultParagraph.textContent = "次の収集日: " + month + "/" + day + " 種類: " + garbageType;

                // ドキュメント内の要素（ID: "extended-addres"）を取得
                var ID = document.getElementById("nextCollectionResult");

                // 新しい段落要素を "extended-addres" 要素に追加
                ID.appendChild(resultParagraph);
                break;
            }

            break;
        }
    }

    return ""; // 該当する収集日が見つからない場合は空の文字列を返す
}