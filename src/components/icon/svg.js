(function(window){var svgSprite='<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M403.37931026 62C583.3366376 62 729.24137949 212.31007754 729.24137949 397.7009 729.24137949 475.2478083 703.47112051 546.47234932 660.56594785 603.28972461L934.53448291 885.55823281C942.49094785 893.75493008 946.48275898 904.46938349 946.48275898 915.23978633 946.48275898 925.98221709 942.49094785 936.69667051 934.53448291 944.89336777 926.60517266 953.09006504 916.17758633 957.20240146 905.75 957.20240146 895.32241367 957.20240146 884.89482734 953.09006504 876.9383624 944.89336777L602.96982734 662.65283428C547.79051709 706.85345411 478.68060342 733.4018 403.37931026 733.4018 223.42198291 733.4018 77.51724102 583.09172334 77.51724102 397.7009 77.51724102 212.31007754 223.42198291 62 403.37931026 62L403.37931026 62ZM403.37931026 649.47657324C538.15043076 649.47657324 647.7758624 536.54119648 647.7758624 397.7009 647.7758624 258.86060263 538.15043076 145.925225 403.37931026 145.925225 268.60818974 145.925225 158.98275898 258.86060263 158.98275898 397.7009 158.98275898 536.54119648 268.60818974 649.47657324 403.37931026 649.47657324L403.37931026 649.47657324Z"  ></path></symbol><symbol id="icon-cart" viewBox="0 0 1024 1024"><path d="M989.91304344 316.86956563L878.26086969 668.52173938c-8.34782625 25.04347781-30.26086969 41.73913031-56.34782625 41.73913031H390.95652219c-25.04347781 0-49.04347781-15.65217375-57.391305-38.60869594L168.6956525 230.26086969H73.73913031c-22.95652219 0-41.73913031-18.78260906-41.73913031-41.73913032s18.78260906-41.73913031 41.73913031-41.73913031h124.17391313c17.73913031 0 33.39130406 11.47826062 39.65217375 28.17391313L407.65217375 626.78260906h396.52173937l88.6956525-281.73913125H401.39130406c-22.95652219 0-41.73913031-18.78260906-41.73913031-41.73913031s18.78260906-41.73913031 41.73913031-41.73913031H950.26086969c13.56521719 0 26.08695656 7.3043475 33.39130406 17.73913031 8.34782625 10.43478281 10.43478281 25.04347781 6.26086969 37.56521812z m-578.08695657 448.69565156c-17.73913031 0-35.47826062 7.3043475-48 19.82608687-12.52173937 12.52173937-19.82608687 30.26086969-19.82608687 48 0 17.73913031 7.3043475 35.47826062 19.82608687 48 12.52173937 12.52173937 30.26086969 19.82608687 48 19.82608688s35.47826062-7.3043475 48-19.82608688c12.52173937-12.52173937 19.82608687-30.26086969 19.82608688-48 0-17.73913031-7.3043475-35.47826062-19.82608688-48-12.52173937-12.52173937-30.26086969-19.82608687-48-19.82608687z m374.60869594 0c-17.73913031 0-35.47826062 7.3043475-48 19.82608687s-19.82608687 30.26086969-19.82608687 48c0 17.73913031 7.3043475 35.47826062 19.82608687 48 12.52173937 12.52173937 30.26086969 19.82608687 48 19.82608688 17.73913031 0 35.47826062-7.3043475 48-19.82608688 12.52173937-12.52173937 19.82608687-30.26086969 19.82608688-48 0-17.73913031-7.3043475-35.47826062-19.82608688-48s-30.26086969-19.82608687-48-19.82608687z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m185.7 577.1c15.6 15.6 15.6 40.9 0 56.6-7.8 7.8-18 11.7-28.3 11.7s-20.5-3.9-28.3-11.7L512 568.6 382.9 697.7c-7.8 7.8-18 11.7-28.3 11.7s-20.5-3.9-28.3-11.7c-15.6-15.6-15.6-40.9 0-56.6L455.4 512 326.3 382.9c-15.6-15.6-15.6-40.9 0-56.6 15.6-15.6 40.9-15.6 56.6 0L512 455.4l129.1-129.1c15.6-15.6 40.9-15.6 56.6 0 15.6 15.6 15.6 40.9 0 56.6L568.6 512l129.1 129.1z"  ></path></symbol><symbol id="icon-detail" viewBox="0 0 1024 1024"><path d="M614.73581 923.4469925H193.52738469c-51.37374094 0-92.99772-41.62398-92.99772094-92.99772V193.62113188c0-51.37374094 41.62398-93.09146813 92.99772094-93.09146813h636.7343925c24.74939344-0.09374813 48.37381406 9.74976094 65.81088656 27.28058156 17.53082063 17.53082063 27.18683344 40.96774594 27.18683344 65.81088656l-1.40621531 421.11467813v0.09374719c0.18749531 18.93703594 15.65586656 34.21791094 34.5929025 34.03041656 18.6557925-0.18749531 33.74917313-15.18712781 34.03041562-33.93666844l1.40621531-421.20842531v-0.09374813C991.88281531 104.37332 919.60333719 32.00009375 830.4492725 32.00009375H193.52738469C104.37332 31.90634562 32.09384188 104.09207656 32.00009375 193.24614125v637.10938313c-0.09374813 89.15406469 72.09198281 161.52729094 161.15230031 161.62103906h421.58341594c18.93703594 0 34.21791094-15.37462313 34.21791094-34.21791188s-15.280875-34.31165906-34.21791094-34.31165906z"  ></path><path d="M981.94555906 933.47799687L851.16751437 802.69995219c65.90463469-92.7164775 44.24891531-221.24457656-48.46756218-287.24295844s-221.24457656-44.24891531-287.24295844 48.46756125-44.24891531 221.24457656 48.46756125 287.24295937c71.43574875 50.81125406 167.24590031 50.81125406 238.77539719 1e-8l130.77804468 130.77804468c13.40592094 13.40592094 35.06164031 13.40592094 48.46756219 0s13.40592094-35.06164031 0-48.46756218zM683.45287531 820.69951156c-75.74814375 0-137.15288813-61.40474531-137.15288812-137.15288812S607.7047325 546.29998719 683.54662344 546.29998719 820.69951156 607.7047325 820.69951156 683.54662344c0 36.37410844-14.43714656 71.24825344-40.21776469 97.02887156-25.68687 25.68687-60.56101594 40.21776375-97.02887156 40.12401656z m102.93497719-479.80073906c18.93703594 0 34.21791094-15.46837125 34.21791094-34.31165906 0-18.93703594-15.37462313-34.40540625-34.21791094-34.40540719l-548.6115525-0.18749531c-18.93703594 0-34.21791094 15.37462313-34.21791187 34.31165906 0 18.93703594 15.37462313 34.40540625 34.21791187 34.40540625l548.6115525 0.18749625zM443.45875813 546.39373531c18.93703594 0 34.21791094-15.37462313 34.21791093-34.21791187 0-18.93703594-15.37462313-34.21791094-34.21791094-34.21791094H237.7763c-18.93703594 0-34.21791094 15.280875-34.21791187 34.21791094s15.280875 34.21791094 34.21791187 34.21791187h205.68245813zM237.7763 683.45287531c-18.93703594 0-34.21791094 15.37462313-34.21791187 34.21791188 0 18.93703594 15.37462313 34.21791094 34.21791187 34.21791093h137.15288813c18.93703594 0.18749531 34.40540625-14.9996325 34.59290156-33.84292031 0.18749531-18.93703594-14.9996325-34.40540625-33.84292032-34.5929025H237.7763z"  ></path></symbol><symbol id="icon-jianshu" viewBox="0 0 1024 1024"><path d="M512 983.04c-260.096 0-471.04-210.944-471.04-471.04s210.944-471.04 471.04-471.04 471.04 210.944 471.04 471.04-210.944 471.04-471.04 471.04z m-139.264-733.184c-22.528 57.344-57.344 118.784-106.496 180.224 0 6.144 2.048 8.192 4.096 4.096 38.912-32.768 75.776-65.536 110.592-98.304l36.864-2.048c6.144 8.192 10.24 22.528 10.24 47.104 0 8.192 6.144 10.24 18.432 8.192 12.288-2.048 18.432-10.24 20.48-22.528 0-12.288-10.24-24.576-28.672-36.864l96.256-4.096c2.048 0 2.048 0 4.096-2.048l-2.048-4.096-38.912-32.768-28.672 30.72-73.728 4.096 8.192-10.24c8.192-8.192 16.384-14.336 24.576-18.432 4.096-2.048 4.096-6.144 2.048-8.192l-57.344-34.816z m6.144 243.712l6.144-20.48 2.048-4.096c-2.048-2.048-2.048-2.048-4.096-2.048l-49.152-20.48 2.048 77.824v88.064l-4.096 159.744c2.048 4.096 4.096 4.096 10.24 0 20.48-22.528 30.72-43.008 32.768-63.488l4.096-215.04z m20.48-104.448c-4.096-2.048-6.144 0-4.096 4.096 8.192 8.192 18.432 26.624 30.72 59.392 4.096 8.192 10.24 10.24 18.432 6.144 10.24-6.144 16.384-18.432 20.48-34.816-2.048-10.24-24.576-20.48-65.536-34.816z m65.536 260.096l94.208-4.096c2.048 2.048 4.096 8.192 6.144 12.288 4.096 6.144 8.192 10.24 8.192 14.336 4.096 6.144 10.24 6.144 18.432 0 16.384-20.48 24.576-36.864 26.624-53.248l-2.048-94.208 12.288-20.48c0-2.048 0-4.096-2.048-4.096l-43.008-24.576-18.432 24.576-100.352 4.096-30.72-20.48c-4.096-2.048-6.144-2.048-4.096 2.048v186.368c2.048 8.192 4.096 8.192 10.24 4.096 12.288-4.096 20.48-14.336 24.576-26.624z m102.4-135.168v122.88l-102.4 4.096-2.048-61.44 88.064-4.096c4.096 0 6.144-2.048 6.144-4.096s-2.048-4.096-4.096-4.096l-90.112 4.096v-55.296l104.448-2.048z m8.192-69.632l88.064-4.096 2.048 256c2.048 16.384-10.24 22.528-40.96 22.528-2.048 0-2.048 0-2.048 2.048s0 2.048 2.048 4.096c12.288 10.24 20.48 24.576 22.528 45.056-2.048 2.048-2.048 4.096 0 6.144 2.048 2.048 4.096 2.048 6.144 0 47.104-30.72 67.584-65.536 65.536-106.496l-2.048-88.064-2.048-124.928 18.432-22.528c2.048-2.048 4.096-2.048 2.048-4.096-2.048 0-2.048 0-2.048-2.048l-45.056-28.672-22.528 24.576-169.984 8.192 14.336 14.336c16.384 0 38.912-2.048 65.536-2.048z m0-198.656c-12.288 43.008-34.816 96.256-63.488 157.696-2.048 2.048-2.048 4.096 0 4.096s4.096 0 6.144-2.048c12.288-12.288 28.672-30.72 45.056-53.248 8.192-10.24 14.336-18.432 20.48-22.528l34.816-2.048c8.192 12.288 14.336 32.768 14.336 63.488 0 8.192 6.144 12.288 18.432 10.24 14.336-8.192 22.528-18.432 26.624-30.72 0-12.288-14.336-26.624-43.008-43.008l118.784-6.144c2.048 0 2.048-2.048 0-4.096l-38.912-32.768-28.672 30.72-94.208 4.096c2.048-2.048 6.144-6.144 8.192-10.24 2.048-2.048 2.048-4.096 4.096-6.144 6.144-8.192 12.288-14.336 22.528-18.432 4.096-2.048 4.096-4.096 2.048-6.144l-53.248-32.768z"  ></path></symbol><symbol id="icon-lock" viewBox="0 0 1024 1024"><path d="M833.28 437.333333h-70.826667V271.786667c0-138.666667-112.213333-251.306667-250.026666-251.306667-138.24 0-250.453333 112.64-250.453334 251.306667v165.546666H191.146667c-34.133333 0-61.866667 27.733333-61.866667 61.866667v453.12c0 34.133333 27.733333 62.293333 61.866667 62.293333h642.133333c34.133333 0 61.866667-27.733333 61.866667-62.293333V499.2c0-34.133333-27.733333-61.866667-61.866667-61.866667z m-286.293333 300.373334v98.986666c0 4.693333-3.84 8.106667-8.106667 8.106667h-53.333333c-4.693333 0-8.106667-3.84-8.106667-8.106667v-98.986666c-25.173333-12.8-42.24-38.4-42.24-68.693334 0-42.666667 34.56-77.226667 76.8-77.226666 42.666667 0 76.8 34.56 76.8 77.226666 0.426667 29.866667-16.64 55.893333-41.813333 68.693334z m119.466666-300.373334H357.973333V275.626667c0-85.333333 69.12-154.88 154.453334-154.88 84.906667 0 154.026667 69.546667 154.026666 154.88v161.706666z m0 0"  ></path></symbol><symbol id="icon-username" viewBox="0 0 1024 1024"><path d="M512 594.602667a288.768 288.768 0 1 0-288.597333-288.938667A288.768 288.768 0 0 0 512 594.602667z m231.253333-25.258667a350.378667 350.378667 0 0 1-462.506666 0A494.933333 494.933333 0 0 0 17.066667 1006.933333h989.866666a494.933333 494.933333 0 0 0-263.68-437.76z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M768.32 158.24c28.32-28.32 29.28-74.88 0-104.16s-75.84-29.28-105.12 0l-408 406.56c-28.32 28.32-28.32 75.84 0 104.16l408 405.6c28.32 28.32 75.84 28.32 104.16 0 28.32-28.32 28.32-75.84 0-104.16l-355.2-353.76 356.16-354.24z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M913.5 887.1c0-3.2-0.4-6.3-1.1-9.3C894 737.8 800.8 620.9 673.5 567c73.7-49.7 122.1-133 122.1-227.5 0-152.2-125.6-275.6-280.4-275.6-154.9 0-280.4 123.4-280.4 275.6 0 94.5 48.4 177.9 122.2 227.6-126 53.4-218.6 168.5-238.2 306.7-1.6 4.2-2.4 8.7-2.4 13.4l0.4 3.6c0 21.7 17.9 39.3 40 39.3s40-17.6 40-39.3v-0.5h1C216.5 740.2 342.4 622.8 498 614.5c5.8 0.3 11.5 0.5 17.4 0.5 5.9 0 11.7-0.2 17.4-0.5 155.6 8.2 281.6 125.7 300.2 275.8h1.1v0.5c0 21.7 17.9 39.3 40 39.3s40-17.6 40-39.3l-0.6-3.7zM515 536.3c-110.6 0-200.3-88.1-200.3-196.9S404.4 142.6 515 142.6c110.6 0 200.3 88.1 200.3 196.9S625.6 536.3 515 536.3z"  ></path></symbol><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M511.57333333 47.25333333C247.78666667 47.14666667 34.13333333 260.69333333 34.13333333 524.26666667 34.13333333 732.69333333 167.78666667 909.86666667 353.92 974.93333333c25.06666667 6.29333333 21.22666667-11.52 21.22666667-23.68v-82.66666666c-144.74666667 16.96-150.61333333-78.82666667-160.32-94.82666667C195.2 740.26666667 148.8 731.73333333 162.66666667 715.73333333c32.96-16.96 66.56 4.26666667 105.49333333 61.76 28.16 41.70666667 83.09333333 34.66666667 110.93333333 27.73333334 6.08-25.06666667 19.09333333-47.46666667 37.01333334-64.85333334-149.97333333-26.88-212.48-118.4-212.48-227.2 0-52.8 17.38666667-101.33333333 51.52-140.48-21.76-64.53333333 2.02666667-119.78666667 5.22666666-128 61.97333333-5.54666667 126.4 44.37333333 131.41333334 48.32 35.2-9.49333333 75.41333333-14.50666667 120.42666666-14.50666666 45.22666667 0 85.54666667 5.22666667 121.06666667 14.82666666 12.05333333-9.17333333 71.78666667-52.05333333 129.38666667-46.82666666 3.09333333 8.21333333 26.34666667 62.18666667 5.86666666 125.86666666 34.56 39.25333333 52.16 88.21333333 52.16 141.12 0 109.01333333-62.93333333 200.64-213.33333333 227.09333334 25.06666667 24.74666667 40.64 59.09333333 40.64 97.06666666v120c0.85333333 9.6 0 19.09333333 16 19.09333334 188.90666667-63.68 324.90666667-242.13333333 324.90666667-452.37333334 0-263.68-213.76-477.12-477.33333334-477.12z"  ></path></symbol><symbol id="icon-avatar" viewBox="0 0 1024 1024"><path d="M512 32C248 32 32 248 32 512s216 480 480 480 480-216 480-480S776 32 512 32z" fill="#faa912" ></path><path d="M771.99999969 627.99999969c0 144-115.99999969 204-259.99999969 204s-259.99999969-60-259.99999969-204C252.00000031 483.99999969 368 312.00000031 512 312.00000031s259.99999969 172.00000031 259.99999969 315.99999938z" fill="#FFFFFF" ></path><path d="M644 231.99999969c-40.00000031-64.00000031-79.99999969-19.99999969-88.00000031-7.99999969 4.00000031-16.00000031 7.99999969-72-48-72-52.00000031 0-43.99999969 52.00000031-39.99999938 67.99999969-12-12-48-52.00000031-88.00000031 12-43.99999969 76.00000031 88.00000031 187.99999969 88.00000031 188.00000062 7.99999969 4.00000031 12 7.99999969 19.99999969 7.99999969 7.99999969 4.00000031 16.00000031 4.00000031 28.00000031 4.00000031 16.00000031 0 28.00000031-7.99999969 36-12l3.99999938-4.00000031s132-112.00000031 88.00000031-184.00000031z" fill="#fe5b68" ></path><path d="M572 612.00000031c0 31.99999969 28.00000031 60 60 60s60-28.00000031 60-60S663.99999969 552.00000031 632 552.00000031s-60 28.00000031-60 60zM332 612.00000031c0 31.99999969 28.00000031 60 60 60s60-28.00000031 60-60S423.99999969 552.00000031 392 552.00000031s-60 28.00000031-60 60z" fill="#E5E5E5" ></path><path d="M531.99999969 612.00000031c-7.99999969-19.99999969-31.99999969-19.99999969-39.99999938-4.00000031l-4.00000031 24c-4.00000031 12-7.99999969 36-40.00000031 60-36 28.00000031-88.00000031 28.00000031-115.99999969-7.99999969-16.00000031-24-19.99999969-67.99999969-19.99999969-100.00000031s4.00000031-28.00000031 36-31.99999969 100.00000031 4.00000031 123.99999938 12c4.00000031 0 7.99999969 4.00000031 8.00000062 3.99999938 40.00000031 4.00000031 55.99999969 0 60 0 4.00000031 0 4.00000031-4.00000031 7.99999969-3.99999938 28.00000031-7.99999969 91.99999969-16.00000031 127.99999969-12s36 0 36 31.99999969-4.00000031 76.00000031-19.99999969 100.00000031c-28.00000031 36-79.99999969 36-112.00000031 7.99999969-36-24-40.00000031-48-43.99999969-60l-4.00000031-19.99999969z" fill="#fe5b68" ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M255.68 865.76c-28.32 28.32-29.28 74.88 1e-8 104.16s75.84 29.28 105.11999999 1e-8l408-406.56000001c28.32-28.32 28.32-75.84 0-104.16l-408-405.6c-28.32-28.32-75.84-28.32-104.16 0-28.32 28.32-28.32 75.84 0 104.16l355.2 353.76-356.16 354.24z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)