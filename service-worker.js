if(!self.define){let s,b={};const c=(a,e)=>(a=new URL(a+".js",e).href,b[a]||new Promise(e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()}).then(()=>{var e=b[a];if(e)return e;throw new Error(`Module ${a} didn’t register its module`)}));self.define=(e,i)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(!b[d]){let a={};const f=e=>c(e,d),r={module:{uri:d},exports:a,require:f};b[d]=Promise.all(e.map(e=>r[e]||f(e))).then(e=>(i(...e),a))}}}define(["./workbox-f2efd100"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"a/abc_288.html",revision:"2194eab899cfc23346bbf9e7fb91ca2a"},{url:"a/abc_290.html",revision:"27cbd21988022f75490dc78dac0de8e3"},{url:"a/abc_291.html",revision:"2ec82ad3d4bbb2fe812ae05fe8387ff9"},{url:"a/abc_293.html",revision:"ff4fdcbe263d89dcc2c63a44200a1aa6"},{url:"a/abc_295.html",revision:"b440deb32fcc23588e758fd54b2f5669"},{url:"a/abc_297.html",revision:"9f20d688494360f72a4bb920c75da13f"},{url:"a/abc_298.html",revision:"c8e595b645da8d21c25c06874c2b3dbe"},{url:"a/cf_344.html",revision:"61ed217b2506bdc8ae9bea6b9276f475"},{url:"a/cf_824.html",revision:"2a449dde991b35047491a5e62bc23db4"},{url:"a/cf_825.html",revision:"3a532e06267768d9016f6a20ca7a0715"},{url:"a/cf_826.html",revision:"bd42420d2d56443bb3dd92283fd2d8d3"},{url:"a/cf_827.html",revision:"ff8b378aa57f4dcac17c2065ddc8f055"},{url:"a/cf_828.html",revision:"cf49679b49a4793c527c6ec824736562"},{url:"a/cf_829.html",revision:"c4afc8c8cfc374fd28a59ae75c7fbcd2"},{url:"a/cf_830.html",revision:"42c9a59af6d89d0b32e3d3682a805f49"},{url:"a/cf_831.html",revision:"a6603f254efa3b9557c9b21a3bdffa00"},{url:"a/cf_832.html",revision:"029bcdf52ed67224e779ecb8e639744f"},{url:"a/cf_833.html",revision:"f1d5df83f1f3de6b72272f973d8a8bdf"},{url:"a/cf_834.html",revision:"0f540156a6979d0e3dac46fea50ee781"},{url:"a/cf_835.html",revision:"fbeb86611063f38fb5ef904f0c75bb19"},{url:"a/cf_836.html",revision:"15ddb02180c1ca093f764542e96671af"},{url:"a/cf_837.html",revision:"e1a59819dfef4759824dcee8b65c85ca"},{url:"a/cf_838.html",revision:"a1f2f8d71340b90c383478bde743aba5"},{url:"a/cf_839.html",revision:"c6d7afe279f67a5fe28b45e1cbc2b67a"},{url:"a/cf_840.html",revision:"29e63425a42e82252fa4d97094d4cf72"},{url:"a/cf_841.html",revision:"3febf2646a57aedad54ddcbd21270d65"},{url:"a/cf_842.html",revision:"ffbe074451e0d0e56451423ef988cab1"},{url:"a/cf_843.html",revision:"fa5800d36e5509469a4de4f4848e6dbc"},{url:"a/cf_844.html",revision:"befdc303b4916bc947cf4356aa6ca850"},{url:"a/cf_845.html",revision:"0582dd207369274cf4bdc212861fc301"},{url:"a/cf_846.html",revision:"161ea64977001cf4c7e17ce019df33b9"},{url:"a/cf_847.html",revision:"6b7e803bad98212932087b9d381afc51"},{url:"a/cf_848.html",revision:"65c1926134445013eaa3e684027bfda3"},{url:"a/cf_849.html",revision:"aecf509c74b53fc7e324abc72bdb7249"},{url:"a/cf_850.html",revision:"0ac4c9e6ad447afd7a31e2cb9c459d35"},{url:"a/cf_851.html",revision:"76f93148152a40c3d0b823e45ea4de3d"},{url:"a/cf_852.html",revision:"98581b03557225201ffa82e5fcae580a"},{url:"a/cf_853.html",revision:"ff75d975eff72c4aa39334f094e30693"},{url:"a/cf_854.html",revision:"407e8166d6741eca24b914ba1d25c3cc"},{url:"a/cf_855.html",revision:"21b0a307dc817756154d8f3d9a1cad2f"},{url:"a/cf_856.html",revision:"99d9b4e6054fc585e7210e330b934c51"},{url:"a/cf_857.html",revision:"06938a7a15479c3424cd5cf5eb457dab"},{url:"a/cf_858.html",revision:"06938a7a15479c3424cd5cf5eb457dab"},{url:"a/cf_859.html",revision:"6000258b9a19e345edab9b22ba32c345"},{url:"a/cf_860.html",revision:"74f3105746447252171c5c84045cc028"},{url:"a/cf_861.html",revision:"4f9aa1c890f7eea2f1acab5a383ad0fa"},{url:"a/cf_862.html",revision:"552ae8aa4aa95022452e8d6f4438396d"},{url:"a/cf_863.html",revision:"4f9aa1c890f7eea2f1acab5a383ad0fa"},{url:"a/cf_864.html",revision:"552ae8aa4aa95022452e8d6f4438396d"},{url:"a/cf_865.html",revision:"a6c80d16aff5bb87bada2c414ee8eb00"},{url:"a/cf_866.html",revision:"8c6b680377a3712913cf61eceb69a85f"},{url:"a/cf_april_fool_2023.html",revision:"35dcdbeddc69e0c1a14bc63aed37406e"},{url:"a/cf_codeton_3.html",revision:"f9f722b737644b48bc4864a50c8cbe92"},{url:"a/cf_codeton_4.html",revision:"dcb816c9a950e696cec2b6531eb91e47"},{url:"a/cf_edu_136.html",revision:"3f7978776399dc1ffb2b2b60b9da248e"},{url:"a/cf_edu_137.html",revision:"f585135d297801e5ef2aa85e1e264111"},{url:"a/cf_edu_138.html",revision:"9bb7f2c32bc117aa093101ff207ca4a7"},{url:"a/cf_edu_139.html",revision:"b16b09b14381b040dd6f416a8657b5ec"},{url:"a/cf_edu_140.html",revision:"1a43113f7edef690e62f5aad262c7e5c"},{url:"a/cf_edu_141.html",revision:"d32eb975c63b3d317147777b0a9ab4df"},{url:"a/cf_edu_142.html",revision:"b4b6f80a62deebfd9ba48f74db041e4c"},{url:"a/cf_edu_143.html",revision:"02cf7e4a6335f03a1b9443a7ac5ab464"},{url:"a/cf_edu_144.html",revision:"e02486d0678bf762b7fa00cba01cf4a9"},{url:"a/cf_edu_145.html",revision:"35b3dfa2c997b26fab6025fa10a8774f"},{url:"a/cf_edu_146.html",revision:"35b3dfa2c997b26fab6025fa10a8774f"},{url:"a/cf_good_bye_2022.html",revision:"85b654c0d15c9925312795e65cd230bb"},{url:"a/cf_hello_2023.html",revision:"708c5346bd3a97ec4c4d8ff641307563"},{url:"a/cf_nebius.html",revision:"27a7747e1d9f28eae7304995892bca1a"},{url:"a/cf_pinely_1.html",revision:"bbc250c6ed0036fafe1d6ba4eee0c79a"},{url:"a/cf_polynomial_2022.html",revision:"3b16e4b9920d1a6be063e2a2df71d90f"},{url:"a/cf_swerc_2022_2023.html",revision:"623ede67fa3c572196f1fdd584645083"},{url:"a/cf_typedb_2023.html",revision:"0a7ae328c69aecd957ac804ef4f1482a"},{url:"a/fjnu_jpc_26.html",revision:"acc1131c11db9163b43a67140009a761"},{url:"a/fjnu_oj.html",revision:"8d80781502d81a3876d68f68481e6b6a"},{url:"a/intro.html",revision:"9a9a913cf2b914fd98039ca6042cf016"},{url:"a/nc2023_1.html",revision:"d1152b37817c49215147bbbae88caf67"},{url:"a/nc2023_2.html",revision:"7188e65e8abd1922e1b427dfe1b0b5f9"},{url:"a/nc2023_3.html",revision:"777d6954510db408f38e04569651697e"},{url:"a/nc2023_4.html",revision:"df98cb31445cf1960248f9aa7b1204c5"},{url:"a/nc2023_5.html",revision:"14c2386143f80bf3b72580b2fd52adc7"},{url:"a/nc2023_6.html",revision:"5ef986a021d9da9bebc1e550580d2476"},{url:"about/index.html",revision:"713f4f5df2a9d8292cec1aaac51a1fbe"},{url:"archives/2023/01/index.html",revision:"5b94754c7e69ddc2660287f818c4b3df"},{url:"archives/2023/01/page/2/index.html",revision:"71f4975148711004d46147092bef9695"},{url:"archives/2023/02/index.html",revision:"961c5615dec0b57c964502fd4e5638ce"},{url:"archives/2023/02/page/2/index.html",revision:"78947d5fd392c63ba2c7ce89c24593ad"},{url:"archives/2023/02/page/3/index.html",revision:"c244f1f72bf4a867915a8bd0c8820241"},{url:"archives/2023/02/page/4/index.html",revision:"e833042c94dd38970d783b4e8b759c9e"},{url:"archives/2023/03/index.html",revision:"57fcfaf523f70e8e8ebcc48da97ecd16"},{url:"archives/2023/03/page/2/index.html",revision:"608a52fcd31662b91c3b3c4157a6edab"},{url:"archives/2023/04/index.html",revision:"50eaa60af89db8c695bd48c339567398"},{url:"archives/2023/04/page/2/index.html",revision:"eef90bf00cc74c16f24dc79eb23cc202"},{url:"archives/2023/index.html",revision:"23cbf5e3bb9ac4cba7db31f8a1bafd67"},{url:"archives/2023/page/2/index.html",revision:"b0b361d2fb6cb79ee4b4633fb09a5220"},{url:"archives/2023/page/3/index.html",revision:"12b16e10d8138d6509ee71751b799484"},{url:"archives/2023/page/4/index.html",revision:"e4278c1ff32f278896c48472fc70630f"},{url:"archives/2023/page/5/index.html",revision:"3d58666cb1bedaf08ade67648d592aab"},{url:"archives/2023/page/6/index.html",revision:"95eb9d7d5ec090e9f2f6f853d6d3e233"},{url:"archives/2023/page/7/index.html",revision:"4ef7e5dc5a3d9344d8d1454d2c480c3e"},{url:"archives/2023/page/8/index.html",revision:"1bf4612b4dfe2a68e1c9515a39d41c71"},{url:"archives/2023/page/9/index.html",revision:"9565f6794e7894cf771900eeba3a956b"},{url:"archives/index.html",revision:"24eae58e2b4bd986c95b55553fbbf341"},{url:"archives/page/2/index.html",revision:"d431556f02493d11eca594d740d93b55"},{url:"archives/page/3/index.html",revision:"8c9753e0ca6155bb3d6e9c0ae7800d31"},{url:"archives/page/4/index.html",revision:"d2aad1b9cdf8d09ad86b66ee38495f94"},{url:"archives/page/5/index.html",revision:"72e6db6508cb68142f26103f584915a6"},{url:"archives/page/6/index.html",revision:"20b22c922318ce896d12f0b87ecc2fc2"},{url:"archives/page/7/index.html",revision:"c28a315e44fda18793887263660714b5"},{url:"archives/page/8/index.html",revision:"7eaaedf4c19d8fb4ae1478ec30e28a7a"},{url:"archives/page/9/index.html",revision:"7b67ee443fa6226037f73c15792971bf"},{url:"css/index.css",revision:"4460c8242ab8bd7e2ccaed12e04396b9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"font/Jam Mono.eot",revision:"0968ec61f74f3e7fadf01bd24067ee4f"},{url:"font/Jam Mono.svg",revision:"aa8f3d9b426612b2524b620881f76080"},{url:"font/Jam Mono.ttf",revision:"ebbbdbbd0bd9a08dee7d699b024947da"},{url:"font/Jam Mono.woff",revision:"97ccf684001b58091926cd5b7290c539"},{url:"font/Jam Mono.woff2",revision:"b0772c29e3a8ced0fa6b46661ac553e9"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.webp",revision:"a14f1b63b93ec046a34687b6cd235f10"},{url:"img/fav-icon.png",revision:"fbfdd9bc9237e0dc371b09e9539343ea"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"23b6f753d77116abc0246d71a3fe4581"},{url:"js/main.js",revision:"2727481031884731137cad9f47893a77"},{url:"js/search/algolia.js",revision:"c5c74181af506800d52c57bd95d8fbac"},{url:"js/search/local-search.js",revision:"efdec7d3756fe2af35aa25f48d89636e"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"lib/pace/pace-theme-minimal.min.css",revision:"3a9b8c119602e7578b30de32c4edce98"},{url:"lib/pace/pace.min.js",revision:"4cc4ea2bf8fea4576d66cdc143a2e5ef"},{url:"lib/valine.min.js",revision:"9f04490666d8759c8724a89295fe63ac"},{url:"link/index.html",revision:"f2b17d8475c95844008476d2f49b1ded"},{url:"page/10/index.html",revision:"2ad3de36a2b0ad87748b7d710efca86b"},{url:"page/11/index.html",revision:"ee78073d4e507ca3c3db2f0bd97b542b"},{url:"page/12/index.html",revision:"06bd90355f3a8534302012107ad24124"},{url:"page/13/index.html",revision:"68d2aa385de0516e218ef659736728a2"},{url:"page/14/index.html",revision:"c2cebb64ba3913b02fb9a5ffae99ddd2"},{url:"page/15/index.html",revision:"7efe2a1a9cc921e05761c81fdedb307e"},{url:"page/2/index.html",revision:"56f0746dced36f03bb69a1afe51431fc"},{url:"page/3/index.html",revision:"588b25d3c7c93a52e59e49d6992bf3ec"},{url:"page/4/index.html",revision:"a36b2f34b3db88fda22098e566fb0cc6"},{url:"page/5/index.html",revision:"b7f13cfb5ed9b1bb564291ffe031bf19"},{url:"page/6/index.html",revision:"60d8d65d4684d21b42d8ae44dbdcf613"},{url:"page/7/index.html",revision:"b9287247f3871529493661cc8fa7e967"},{url:"page/8/index.html",revision:"e6ea62bf47f1684beb20093766fa17a3"},{url:"page/9/index.html",revision:"75286a1750cd03005ad2c4fff2796c80"},{url:"posts/1008203407/index.html",revision:"7609102ab2719184d0ab7926cb9955e9"},{url:"posts/1077504397/index.html",revision:"04668fcbea0a74fc76618629b8017e67"},{url:"posts/1090672605/index.html",revision:"649a7ef240400eae70b66d858203950f"},{url:"posts/1232478877/index.html",revision:"e9b1a438b4628977377fed593db1ec53"},{url:"posts/126870515/index.html",revision:"1770ae024f1aa15a56435a70d12d3c74"},{url:"posts/127583546/index.html",revision:"fbf5eeca3ab262f33cec46ea57b18964"},{url:"posts/1344553303/index.html",revision:"101b032b5405f5b5776baf199a2a3634"},{url:"posts/137870688/index.html",revision:"de2657e295b90ca3d711ea40f4a57d7b"},{url:"posts/1381135032/index.html",revision:"d0850973a1816348d44ab4df3870ec20"},{url:"posts/1424911393/index.html",revision:"4a24f08ee0eae9d9f9616257ad66f089"},{url:"posts/1494271354/index.html",revision:"d37d18e58961fc4fb79d79bccc0ba206"},{url:"posts/1495891783/index.html",revision:"32e2ee8668bf8751e56482cba5b36842"},{url:"posts/1514977487/index.html",revision:"84bbbb5f8508a072a14fb171f0e98cd7"},{url:"posts/1524713550/index.html",revision:"f05325ab23a15758ced00f9fc638d76e"},{url:"posts/1549174805/index.html",revision:"83297edea3e6485d28497f1685944ec6"},{url:"posts/1562475734/index.html",revision:"ed746fa45c84620b5dbc4c36b4663432"},{url:"posts/1619629406/index.html",revision:"00b2ddfb9cea34041db8b8b411be798e"},{url:"posts/1640782794/index.html",revision:"f97d67739c79c8c0c8a92640718192f5"},{url:"posts/1644457156/index.html",revision:"3700777ed7f2c10bddbf304e7ee35480"},{url:"posts/1674252080/index.html",revision:"0988765477f4f413cf2e8aa104ec596c"},{url:"posts/1674521260/index.html",revision:"e08704e9779b82811e6f7dd811fa5112"},{url:"posts/1688399541/index.html",revision:"703a6774ba92912e59d1f77a1170eec3"},{url:"posts/1762526761/index.html",revision:"f649d8d6810e365ce53bde1bd21b0f74"},{url:"posts/1795773139/index.html",revision:"8f1cfca7f469a1c84c45ff12c4c9850a"},{url:"posts/1807504053/index.html",revision:"5825f26b4c9c35ae2e8eef03675ee9c1"},{url:"posts/185684192/index.html",revision:"050882a4be91df2af449dd5626799a5d"},{url:"posts/1889400236/index.html",revision:"86a13f3bf4d3601ef2f4aa3235c21166"},{url:"posts/1900600766/index.html",revision:"90c49bea03a87d5092cb49d7f7356f11"},{url:"posts/1909551888/index.html",revision:"77ffbc09cfd04935a7c7962c52a45744"},{url:"posts/2012230069/index.html",revision:"1624b469b60305977befc778feb9607b"},{url:"posts/2191281532/index.html",revision:"e708525288c4928b57a056bcfeaa7d42"},{url:"posts/2241746691/index.html",revision:"a903db46475dbec8ab54c882f7a486ae"},{url:"posts/2326564761/index.html",revision:"0ff539abf60e91b633c918e35d78513d"},{url:"posts/2349105074/index.html",revision:"2651980fae5b34b76f331673ba2fb9e7"},{url:"posts/2378255232/index.html",revision:"4ea7aa5303235c174960bc8ff1751208"},{url:"posts/2422309672/index.html",revision:"208b2f56e56c673ddfb96108a25efda8"},{url:"posts/2576267679/index.html",revision:"e751c5e6605339570eeaa5ddc8102d2c"},{url:"posts/2583580825/index.html",revision:"62645e91dbc243bfa119b34f36a35bf5"},{url:"posts/2626568649/index.html",revision:"2517e67567a433b6c73e566219a3d17e"},{url:"posts/2656694144/index.html",revision:"9b6421571dd1133997e983dd59c42bae"},{url:"posts/266401019/index.html",revision:"2aa31698ab356f25108167c5a6fb7623"},{url:"posts/2672195264/index.html",revision:"5df3d0740e24cd531745c218c69e896b"},{url:"posts/2715179373/index.html",revision:"cebfcac58da346cfde9c5fb25feea8ef"},{url:"posts/2909166420/index.html",revision:"d2ac862d553bd898f3ac0b0238d7b90c"},{url:"posts/2942373806/index.html",revision:"6cb915d126c419a7bc4d28ca05311d12"},{url:"posts/3006209530/index.html",revision:"99681d3854c370916bac972fb7944932"},{url:"posts/302073386/index.html",revision:"dc34c5b155c5f9b93848a8f27e92dc99"},{url:"posts/3024280035/index.html",revision:"28cdfb31ad9e46c23465dd4f13600daf"},{url:"posts/3027651998/index.html",revision:"d499b1bfcbbdcf7dc30b38828d98e74f"},{url:"posts/3095280907/index.html",revision:"1d2905238cc1e2e27f5d3a5c3ffc8679"},{url:"posts/3115409144/index.html",revision:"c5c16e1e8f504a9fca37433ae894cd33"},{url:"posts/3129987947/index.html",revision:"b0a2471c1ab6f8373439aa98eba1e429"},{url:"posts/3139923560/index.html",revision:"3ddc962285aa8dff443a2cdb938bc729"},{url:"posts/3186977285/index.html",revision:"b9c411f04cd4f42aa628a5462f22972d"},{url:"posts/3290967404/index.html",revision:"47033eed9f0004c4603a811922851e87"},{url:"posts/3295897463/index.html",revision:"27f273931cf77fbdba46d0c0b6b69c35"},{url:"posts/3334935914/index.html",revision:"f6054a3705b5b6c6fe83a5acb47373dd"},{url:"posts/3350941822/index.html",revision:"525bfff9cc5904244e8f8951be716573"},{url:"posts/3447609703/index.html",revision:"2a92e5133f96acb751855620a02a4a5d"},{url:"posts/348658234/index.html",revision:"74886be45a89abf00b40760c903ff458"},{url:"posts/3533911585/index.html",revision:"0c4b7c3f437d4f257e7334a9d5ae3d9b"},{url:"posts/3592285520/index.html",revision:"453bc2f11a2239795e82a79e0c0d0e7d"},{url:"posts/3616853689/index.html",revision:"2ecc46ec0e8da4ff79ec72ae8d0e7b99"},{url:"posts/3649205289/index.html",revision:"8ca99c4bb2d68675422dab50349bc429"},{url:"posts/3651755215/index.html",revision:"8aa2263f2aa8df979b5e09b3da198b30"},{url:"posts/3739927720/index.html",revision:"6a1460ebcfa2f8a659b72f81604907fc"},{url:"posts/3765805359/index.html",revision:"09c736a9db2ab5d6bc60b355f2f708f2"},{url:"posts/3787113180/index.html",revision:"28d84cdccaa08a21c7d38add74f4580b"},{url:"posts/3800321871/index.html",revision:"ad993ccbf1126bde8896bfeb07a163a9"},{url:"posts/3863896633/index.html",revision:"c58fde8f92e67774353f86981f10d575"},{url:"posts/3903312395/index.html",revision:"6831c5e1fa73a3b4ace695dd629b46ee"},{url:"posts/3918832662/index.html",revision:"2bce88a2a49e467bef548f2d249c063b"},{url:"posts/4009320463/index.html",revision:"feac5ad019e9d86b7c17194b843fd01c"},{url:"posts/405635716/index.html",revision:"dd54a2225e75779c176eb29c98f85454"},{url:"posts/4132653795/index.html",revision:"7c64994e47fca74f1de20c2cdd8ef783"},{url:"posts/4211298084/index.html",revision:"123a1a12347897125086190987e0215f"},{url:"posts/4284380403/index.html",revision:"75ee35a5240624f11e61de82cc00e35b"},{url:"posts/437490184/index.html",revision:"a8b7c737651da8490dac91d6a1f9f066"},{url:"posts/482042403/index.html",revision:"ce258aa5bee2dd8163ca642cbd4fadbb"},{url:"posts/50897737/index.html",revision:"384fc3c368950877a7da087f09606edb"},{url:"posts/64163075/index.html",revision:"6cf1af0bcad77643636aa0f854ea64ea"},{url:"posts/641661849/index.html",revision:"497ea619151fb48a5a15b72715844a33"},{url:"posts/707152960/index.html",revision:"bef1151e4a4f7e11389a9db330192b19"},{url:"posts/752853425/index.html",revision:"5262c7f2e426f759c2b754f14baa5220"},{url:"posts/759924825/index.html",revision:"eb5497de3a82abec9c2a5a92780fc7d5"},{url:"posts/760099833/index.html",revision:"1c16252526e76c9d4b872aab8b509993"},{url:"posts/871658605/index.html",revision:"ea86609e6ac2519a887946a8d1010c5d"},{url:"posts/959544692/index.html",revision:"1143421210fd32b7709e7f9423b71991"},{url:"posts/989416061/index.html",revision:"73dde14ef656a5ca5f2ff2fa3af45e1c"},{url:"posts/index.html",revision:"31efb7ce85c6126daba7b09c482ec4b1"},{url:"pwa/144.png",revision:"227d7100a2df8789937cf1e922926928"},{url:"pwa/16.png",revision:"b63837061b9abdf37968bf204915d12c"},{url:"pwa/192.png",revision:"a117ea067f27e9fecdc6ac8f32bd0c82"},{url:"pwa/32.png",revision:"147ef62d8eab9761f0eecf2b7579d4d5"},{url:"pwa/36.png",revision:"bc8b63aab89d0d2cbc8135397d5f0cbc"},{url:"pwa/48.png",revision:"cd506c4314ed757a4b2e583864f106bd"},{url:"pwa/512.png",revision:"ec52b3b7a13b4211ae09de172e1b8ee2"},{url:"pwa/72.png",revision:"70ffc1cea62dab3b2496d395673716c1"},{url:"pwa/96.png",revision:"b6ed6292c48136b10a1bfb20c56a963d"},{url:"pwa/apple_touch_icon.png",revision:"1412cba9eb33978db8575a2d2d413bc0"},{url:"tags/AtCoder/index.html",revision:"a7040044fdf7ecf3126af86c82a4c121"},{url:"tags/Codeforces/index.html",revision:"4981961ada0a95e94e35a58edd833a8d"},{url:"tags/Codeforces/page/2/index.html",revision:"ec28e245f83dc520971d7cc0a78e4894"},{url:"tags/Codeforces/page/3/index.html",revision:"95433f6a0a005820671daa75b4e56ac2"},{url:"tags/Codeforces/page/4/index.html",revision:"7a5d1fd0b4ea07f63f206ededf1b26d3"},{url:"tags/Codeforces/page/5/index.html",revision:"5f21ee97270d34045690dd9810c31884"},{url:"tags/Codeforces/page/6/index.html",revision:"64bd493c070b63290ef16f5459d7ea4a"},{url:"tags/Codeforces/page/7/index.html",revision:"b7187980a6129a1e05cf1fc34078624c"},{url:"tags/FjnuOJ/index.html",revision:"709465f9a3d4f4ca8355b5961260393d"},{url:"tags/index.html",revision:"71d264eca41af51b5650ac248fae7827"},{url:"tags/杂项/index.html",revision:"d409eb5e17830eb34b1365248bd75fcb"},{url:"tags/牛客2023寒假集训/index.html",revision:"5d542bbcdda552c38a807aa16920516e"}],{}),e.registerRoute(/^https:\/\/fastly\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/ghproxy\.com\/.*/,new e.CacheFirst,"GET")});