if(document.URL.includes('#meet')) setTimeout(() => {goMeeting()}, 100);
if(document.URL.includes('#hire')) setTimeout(() => {goHire()}, 100);
if(document.URL.includes('#resume')) setTimeout(() => {goResume()}, 100);

        function ReplaceContent(NC) {
        document.body.remove();
        document.open();
        document.write(NC);
        document.close();
      }

      function goMeeting() {
        ReplaceContent(`<!DOCTYPE html><html lang="en"><head> <meta charset="utf-8" /> <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/apple-icon.png"> <link rel="icon" type="image/x-icon" href="./favicon.ico"> <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /> <title> Meeting with (don) Pablo Brincat </title> <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' /></head><body id="navIntro" class="web-page presentation-page sidebar-collapse"> <center> <a href="https://donpablonow.com/"> <img alt="don Pablo" src="https://donpablonow.com/assets/img/signature.png" height="100px" /> </a> </center> <!-- Start of Meetings Embed Script --> <div class="meetings-iframe-container" data-src="https://meetings.hubspot.com/pablo-brin?embed=true"></div> <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script> <!-- End of Meetings Embed Script --> <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7223486.js"></script> <script async defer type="text/javascript" id="slcLiveChat" src="https://widget.sonetel.com/SonetelWidget.min.js" data-account-id="207161307"> </script><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-161901594-1"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-161901594-1');</script></body></html>`);
      }


      function goHire() {
        window.location = 'https://www.freelancer.com/affiliates/email/9538132/'
      }
	  
      function goResume() {
        window.location = 'https://drive.google.com/drive/folders/1DTFc_i4EcLaygVkmkY8-EGesQIYuMH27'
      }
