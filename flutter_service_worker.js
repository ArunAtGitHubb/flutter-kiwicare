'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5b7961c9202105064e381081860f3ec0",
"assets/FontManifest.json": "d1b23a7a6c80bc635ad38e6eb1dfdba4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/appIcon.png": "d078be60c3b05c6ff6188a55ed66598a",
"assets/images/appointment_confirmation.json": "477e8f8868b7d08a874915751a78a125",
"assets/images/darkModeNoImage.png": "c959988ad7a30e0afeec7c8751138251",
"assets/images/doctorAvatars/doctor1.png": "4491bc367edbfa8f528f694e05373ef8",
"assets/images/doctorAvatars/doctor2.png": "57748df6b71fe62aabe3538ca164ee1c",
"assets/images/flags/ic_ar.png": "ead63c82d77a99b1c50230f75153b47f",
"assets/images/flags/ic_bangladesh.png": "8aa34f2604b56fc791870c122670f41e",
"assets/images/flags/ic_chinese.png": "67c9227b03fa9c273188d738c8453d69",
"assets/images/flags/ic_denmark.png": "2eda52fa90bdf7688eab284d909d04d2",
"assets/images/flags/ic_french.png": "535d6d3399aec7572fddc9cbd7e9af7a",
"assets/images/flags/ic_germany.png": "181cf572b93fb29625357e04061631d9",
"assets/images/flags/ic_greek.jpg": "97337d5d4bb8d3a64a0d9e5347ba9cf6",
"assets/images/flags/ic_india.png": "a5f4b487e6b01ff36c6ab3b0017ad34d",
"assets/images/flags/ic_indonesian.png": "3e2f34f46fb3059bced6e953881a78cd",
"assets/images/flags/ic_italy.png": "d2b946c2adaafb64386526e9b5e279a4",
"assets/images/flags/ic_japanese.png": "1c2bbee9d2a8b5e41c0d071be7e71bd8",
"assets/images/flags/ic_korean.png": "38dc15e03d652fd88ec8c8622a0c82bf",
"assets/images/flags/ic_nepali.png": "1c56c28b45a465eb7ffafe577b949b36",
"assets/images/flags/ic_netherlands.png": "26345c43ad618fa2dae511c8e02bb2f1",
"assets/images/flags/ic_pakistan.png": "b29462759dbd0e99ec9a2a3fba41923b",
"assets/images/flags/ic_portuguese.png": "e4ef217b08f59159206c430f102ebc20",
"assets/images/flags/ic_russia.png": "968105d200173c9aea562195b6811f47",
"assets/images/flags/ic_thai.png": "411e06013fcbec654752eae000d3a941",
"assets/images/flags/ic_turkey.png": "f8255db14d2856d02e78a54f676734c8",
"assets/images/flags/ic_ukrainian.png": "2cc45be627255bc03cfbe2d7ef0600ff",
"assets/images/flags/ic_us.png": "da547d78f0813ecfca786901eca9e9a5",
"assets/images/flags/ic_vietnamese.png": "f1ae3a492ab700f4d7214dca026a6a68",
"assets/images/icons/aboutus.png": "0235453ab12e84dff76e32e694fdedd1",
"assets/images/icons/appointment.png": "bbab654b2dec61aa40c59a0384664ed5",
"assets/images/icons/appVersion.png": "9dd62711e2aa812596ae94aacbe38e4b",
"assets/images/icons/app_version.png": "0f6619605b17e0ae4266ed819dfa806d",
"assets/images/icons/arrowDown.png": "95d34e40ac62bd9db45bc8314cc2ab74",
"assets/images/icons/calendar.png": "5652d07c4644fe344b0abacc05ac2760",
"assets/images/icons/calendarFill.png": "42c60518c53cbb92a9160f1e4e146d4d",
"assets/images/icons/camera.png": "e0b96d0c7d40ff91654ac7888b9fa585",
"assets/images/icons/certification.png": "d1390b312df0578a77d494f075ab4b6f",
"assets/images/icons/collage.png": "b87aa876533304ff73da0bde5a416408",
"assets/images/icons/confirm_appointment.png": "5740198c2f962b18410b888078fed171",
"assets/images/icons/contect.png": "8f9366bd3df10b3028ee7cb71568a8a9",
"assets/images/icons/darkmode.png": "6c6023c5e0f56d61f008eb4d7058bc16",
"assets/images/icons/darkmode.svg": "16122f5932652bc75676ab6edd101925",
"assets/images/icons/dashboard.png": "2964bbd2d857df48830d5b9aa206e971",
"assets/images/icons/dashboardFill.png": "3576e299d4c3eea98ab561de636897de",
"assets/images/icons/degree.png": "f69c38605a18d21ac5827cf6264fbace",
"assets/images/icons/description.png": "a0ad49249eb2bc0e2622f0eeda0508ac",
"assets/images/icons/doctar.png": "f02c8ddea847a362039cf878e132279b",
"assets/images/icons/doctor.png": "5f1972ff94b79d97b385cbbee94e5366",
"assets/images/icons/doctorIcon.png": "efa3cd83e3b99a6561363e6cd47129ce",
"assets/images/icons/document.png": "799e505f21c66e5db98b8e9f0e36f917",
"assets/images/icons/document_fill.png": "e3a06b319b4ffbb21ac3805152a6a8fe",
"assets/images/icons/dollarIcon.png": "09d0fd2542380958a6ad8c47328a5d6d",
"assets/images/icons/edit.png": "adbd31aea1544693c71c32798aea0fa1",
"assets/images/icons/email.svg": "497f32a0046558d6cf93197d6069ccc5",
"assets/images/icons/evening.png": "ce0ebad8b5a980935b1eee1b37e2d548",
"assets/images/icons/experience.png": "1cebd4f75d795596f07e589bd3921d31",
"assets/images/icons/feed.svg": "f0451ae7c7a41a7a89c9221e64f8e41f",
"assets/images/icons/fill_doctor.png": "f05e5e5959cf3e10e8e500b4c6ae6256",
"assets/images/icons/google_calendar.png": "a2d073b1928f823a044c9dda3eeb722e",
"assets/images/icons/graduationCap.png": "a9554125489fe7ca038476e454f5492d",
"assets/images/icons/helpandsupport.png": "aab74ec0b1bb45a257b19c95c9fdcc83",
"assets/images/icons/helpandsupport.svg": "efc341f185c7653ba127a5eff1cda1c5",
"assets/images/icons/hi.png": "4d244d8dc0df0939a6d8dfb2415419e6",
"assets/images/icons/hidePassword.png": "481c35cdf68259804e0d978ac9b30f0f",
"assets/images/icons/holiday.png": "3d57a820b7219c319dc0395058a32e4b",
"assets/images/icons/home.png": "37e6d2c24da1a8274d06c7d5bad3d86c",
"assets/images/icons/ic_no_photo.png": "424ca6d9fa7f40beecd76611c9b0cd95",
"assets/images/icons/location.png": "858f484fd76f908d47d7b4a31678be11",
"assets/images/icons/logout.png": "2867437e8290f6b86366f9fdb9d2a1d7",
"assets/images/icons/message.png": "14fc68f002e22e0e33a6b77d72052a1f",
"assets/images/icons/moreitems.png": "ef8a4b50a9b220cb7ee03c12afb1dc0a",
"assets/images/icons/more_item.png": "d94f3822aa96d2a07e07618cbafe3675",
"assets/images/icons/more_item_fill.png": "cce4c37b7c85c9c5aa685cde594ca213",
"assets/images/icons/morning.png": "ed4fef386c806c875d6fb5a15e4bc049",
"assets/images/icons/name.svg": "555b6658b615dc61e348835f1bdb22e1",
"assets/images/icons/notification.png": "74ef2b249ff38253d253ec2a1aab6c8d",
"assets/images/icons/password.png": "01875722f8adc85e1a9574a14853e9e3",
"assets/images/icons/patient.png": "4b0d0915934ccb6bba2d405a380e95f9",
"assets/images/icons/patientFill.png": "b3ddb1f4e224c71a997b95df3c76fbde",
"assets/images/icons/phone.png": "cc3ccf48dcfe3cdc571a394188a14ea3",
"assets/images/icons/phone.svg": "2d80c91768bad858db17f552b79ea517",
"assets/images/icons/profile_fill.png": "a255d334a52667b7a476a9144dc863eb",
"assets/images/icons/purchase.png": "007b4631429275b714d23cfd05de98dd",
"assets/images/icons/rateUs.png": "6af34c9648f94d3f7935d86499de3b0c",
"assets/images/icons/receptionistIcon.png": "9eb899eef01f595ae1aa4f65794ba861",
"assets/images/icons/search.png": "46a3dfb44109de1fa7da0250bdd97595",
"assets/images/icons/services.png": "587ad90c9df534eb9668f88e2f0402a4",
"assets/images/icons/session.png": "b9175c1fb8dd708a75636eae3c68b866",
"assets/images/icons/share.png": "7b8f4366e176c5875ff3c736d4fd19db",
"assets/images/icons/share.svg": "2081c62e08de7bf3316dafee80abd718",
"assets/images/icons/showPassword.png": "262c6498dffc118bf34207e1e7d6a4e0",
"assets/images/icons/speech.png": "9b67c64be260a7c7d101bb06b722c9f5",
"assets/images/icons/telemed.png": "e77530af7ee5c90950b7d82c073656bb",
"assets/images/icons/telemed.svg": "524ef410e92655a9077baca666ee5777",
"assets/images/icons/termsandconition.png": "67b112ecab4c37a9f22c8a9d275e4f06",
"assets/images/icons/timer.png": "623c7ea39df9917b6ce9108442538483",
"assets/images/icons/unlock.png": "28f92619b4cb051b47d3716d81cb2dff",
"assets/images/icons/user.png": "25f99294983b92e63c512a424f7a3934",
"assets/images/icons/versions.png": "b4aa3f00ea9f8a282f2934391794d1de",
"assets/images/icons/video.png": "a82b84872afdc59b613c02b756d7a76c",
"assets/images/icons/voice.png": "f4fcdfeddb9bc7bf7bc73d8606d199ba",
"assets/images/morningslot.png": "d404f21cbd7f6720c9760fcb94fe6a91",
"assets/images/noDataFound.png": "e5a3945781fc0adf115748f60a79139a",
"assets/images/noFound.png": "71601601386e9497b099c4d4637646c1",
"assets/images/no_appointment_widget.svg": "cfb49f55eb8da55ee5e66a7587b12849",
"assets/images/no_internet.png": "0979dd41f8348b3a138f976939faa36d",
"assets/images/patientAvatars/patient3.png": "7001b2e9f6b54eb20b790cd81c603ee7",
"assets/images/patientAvatars/patient6.png": "e0a6e1fe1fb566b53d4070cb3afdba84",
"assets/images/placeholder.jpg": "0d76c36102ab7301fb582fe101acb506",
"assets/images/servicesicon/services1.png": "328dceae770cb76cc67e750a55fe1479",
"assets/images/servicesicon/services2.png": "031b48241e3fc2cc0562c5586bee78b1",
"assets/images/servicesicon/services3.png": "a96078afec8ae51ef6ef6164162a70f9",
"assets/images/servicesicon/services4.png": "7be27def9ad5a9813935392e05dbb826",
"assets/images/servicesicon/services5.png": "80341dc2802e3ed67ad9b7104a009933",
"assets/images/servicesicon/services6.png": "cd76902fd1b44efeac61fe375247e820",
"assets/images/walkThrough1.png": "d8501d9058a3581bacf9c7075947d92e",
"assets/images/walkThrough2.png": "3b50586a67abed0254869cc35bc419c8",
"assets/images/walkThrough3.png": "c1cd624bdb11e773cb7885f807a43206",
"assets/images/walkThrough4.png": "e04c7fae6cf1c085cdbc535b7941a224",
"assets/lang/ar.json": "83fece05b8b63c66d5202cccfafe6a32",
"assets/lang/de.json": "643ae6f666c313cba6b6194d24f84864",
"assets/lang/el.json": "cb5b08254d8339655e42f4ca77cf58f6",
"assets/lang/en.json": "817dbf6d7b14edf163fc00722c2fc60b",
"assets/lang/fr.json": "206698a42c5c2df962ec3628beb3a79b",
"assets/lang/hi.json": "e1819fe3811cbec958dc2e2f43fa24f9",
"assets/lang/temp.json": "3d943f8b3503f54f314356a53dd21ef5",
"assets/NOTICES": "14c4e092fa025d676c542b28bb51ea6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "d073695f17547f733f5dd82c89b4d4d1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9edbcf53ce365efb692566e2010efa34",
"/": "9edbcf53ce365efb692566e2010efa34",
"main.dart.js": "2416ef8c1b1297af6703b37c6074f190",
"manifest.json": "586e5c52e81e409998ab4b91e5328b82",
"version.json": "c2fc9bbc8dd0388bc54133ac3ad4597d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
