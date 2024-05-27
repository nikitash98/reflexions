import { Component, useEffect, useState} from "react";



class Poetry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            textBox: "",
            pixelArray: [],
            camSelect: 1
        }
        this.goLeft = props.goLeft;
        this.camSelected = props.camSelected;
        this.poem = "AsParmigianinodidit,therighthandBiggerthanthehead,thrustattheviewerAndswervingeasilyaway,asthoughtoprotectWhatitadvertises.Afewleadedpanes,oldbeams,Fur,pleatedmuslin,acoralringruntogetherInamovementsupportingtheface,whichswimsTowardandawaylikethehandExceptthatitisinrepose.ItiswhatisSequestered.Vasarisays,FrancescoonedaysethimselfTotakehisownportrait,lookingathimselffromthatpurposeInaconvexmirror,suchasisusedbybarbers...HeaccordinglycausedabalofwoodtobemadeByaturner,andhavingdivideditinhalandBroughtittothesizeofthemirror,hesethimselfWithgreatarttocopyallthathesawintheglass,Chieflyhisreflection,ofwhichtheportraitIsthereflection,ofwhichtheportraitIsthereflectiononceremoved.TheglasschosetoreflectonlywhathesawWhichwasenoughforhispurpose:hisimageGlazed,embalmed,projectedata180-degreeangle.ThetimeofdayorthedensityofthelightAdheringtothefacekeepsitLivelyandintactinarecurringwaveOfarrival.Thesoulestablishesitself.ButhowfarcanitswimoutthroughtheeyesAndstillreturnsafelytoitsnest?ThesurfaceOfthemirrorbeingconvex,thedistanceincreasesSignificantly;thatis,enoughtomakethepointThatthesoulisacaptive,treatedhumanely,keptInsuspension,unabletoadvancemuchfartherThanyourlookasitinterceptsthepicture.PopeClementandhiscourtwerestupefiedByit,accordingtoVasari,andpromisedacommissionThatnevermaterialized.Thesoulhastostaywhereitis,Eventhoughrestless,hearingraindropsatthepane,Thesighingofautumnleavesthrashedbythewind,Longingtobefree,outside,butitmuststayPosinginthisplace.ItmustmoveAslittleaspossible.Thisiswhattheportraitsays.ButthereisinthatgazeacombinationOf tenderness,amusementandregret,sopowerfulInitsrestraintthatonecannotlookforlong.Thesecretistooplain.Thepityofitsmarts,Makeshottears spurt:thatthesoulisnotasoul,Hasnosecret,issmall,anditfitsItshollowperfectly:itsroom,ourmomentofattention.Thatisthetunebuttherearenowords.Thewordsareonlyspeculation(FromtheLatinspeculum,mirror):Theyseekandcannotfindthemeaningofthemusic.Weseeonlyposturesofthedream,RidersofthemotionthatswingsthefaceIntoviewundereveningskies,withnoFalse disarrayasproofofauthenticity.Butitislifeenglobed.Onewouldliketostickone'shandOutoftheglobe,butitsdimension,Whatcarriesit,willnotallowit.Nodoubtitisthis,notthereflexTohidesomething,whichmakesthehandloomlargeAsitretreatsslightly.ThereisnowayTobuilditflatlikeasectionofwall:Itmustjointhesegmentofacircle,RovingbacktothebodyofwhichitseemsSolikelyapart,tofenceinandshoreupthefaceOnwhichtheeffortofthisconditionreadsLikeapinpointofasmile,asparkOrstaroneisnotsureofhavseenAsdarknessresumes.AperverselightwhoseImperativeofsubtletydoomsinadvanceitsConceitto lightup:unimportantbutmeant.Francesco,yourhandisbigenoughTowreckthesphere,andtoobig,One wouldthink,toweavedelicatedmeshesThatonlyargueitsfurtherdetention.(Big,butnotcoarse,merelyonanotherscale,LikeadozingwhaleontheseabottomInrelationtothetiny,self-importantslipOnthesurface.)ButyoureyesproclaimThat everythingissurface.Thesurfaceiswhat'sthereAndnothingcanexistexceptwhat'sthere.Therearenorecessesintheroom,onlyalcoves,Andthewindowdoesn'tmattermuch,orthatSliverofwindowormirrorontheright,evenAsagaugeoftheweather,whichinFrenchisLe temps,thewordfortime,andwhichFollowsacoursewhereinchangesaremerelyFeaturesofthewhole.ThewholeisstablewithinInstability,aglobelikeours,restingOnapedestalofvacuum,aping-pongballSecureonitsjetofwater.Andjustastherearenowordsforthesurface,thatis,No wordstosaywhatitreallyis,thatitisnotSuperficialbutavisiblecore,thenthereisNowayoutoftheproblemofpathosvs.experience.Youwillstayon,restive,sereneinYourgesturewhichisneitherembracenorwarningButwhichholdssomethingofbothinpureAffirmationthatdoesn'taffirmanything.Theballoonpops,theattentionTurnsdullyaway.CloudsInthepuddlestirupintosawtoothedfragments.IthinkofthefriendsWhocametoseeme,ofwhatyesterdayWaslike.ApeculiarslantOfmemorythatintrudesonthedreamingmodelInthesilenceofthestudioasheconsidersLiftingthepenciltotheself-portrait.Howmanypeoplecameandstayedacertaintime,UtteredlightordarkspeechthatbecamepartofyouLike lightbehindwindblownfogandsand,Filteredandinfluencedbyit,untilnopartRemainsthatis surelyyou.ThosevoicesintheduskHave toldyouallandstillthetalegoesonIntheformofmemoriesdepositedinirregularClumps of crystals.Whosecurvedhandcontrols,Francesco,theturningseasonsandthethoughtsThatpeeloffandflyawayatbreathlessspeedsLike the laststubbornleavesrippedFromwetbranches?IseeinthisonlythechaosOfyourroundmirrorwhichorganizeseverythingAroundthepolestarofyoureyeswhichareempty,Knownothing,dreambutreveanothing.IfeelthecarouselstartingslowlyAndgoingfasterandfaster:desk,papers,books,Photographsoffriends,thewindowandthetreesMerginginoneneutralbandthatsurroundsMeonallsides,everywhereIlook.AndIcannotexplaintheactionofleveling,WhyitshouldallboildowntooneUniformsubstance,amagmaofinteriors.Myguideinthesemattersisyourselp,Firm,oblique,acceptingeverythingwiththesameWraithofasmile,andastimespeedsupsothatitissoonMuchlater,Icanknowonlythestraightwayout,Thedistancebetweenus.LongagoThestrewevidencemeantsomething,The smallaccidentsandpleasuresOfthedayasitmovedgrace";
        this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    }



      



    accessPixels() {

        var poem = ""

        var textList = ""
        var videoElement = document.getElementById('videoElement');
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        
        // You can access pixel data in the imageData object
        // For example, to get pixel data of top-left corner:
        var pixelData = imageData.data;
        var red = pixelData[0];
        var green = pixelData[1];
        var blue = pixelData[2];
        var alpha = pixelData[3];
        
        // Accessing specific pixel coordinates:
        var x = 10; // x-coordinate
        var y = 10; // y-coordinate

        
        var index = (y * canvas.width + x) * 4; // index in the pixel data array


        let pixArrayTest = []
        

        let less = 5;
        for(let i = 0; i < canvas.height; i++) {
            for(let j = 0; j < canvas.width; j++) {
                if(pixelData[(i * canvas.width + j) * 4] > 120) {
                    textList += this.alphabet[(i * canvas.width + j)%this.alphabet.length];
                    
                    if(i % less == 0 && j % less == 0) {
                      pixArrayTest.push(true);
                  }
  
                } else {
                    //textList += this.alphabet[(i * canvas.width + j + Math.floor(Math.random() *20))%this.alphabet.length];
                    textList += "_" 

                    if(i % less == 0 && j % less == 0) {
                      pixArrayTest.push(false);
                  }
  
                    //textList += this.poem[(i * canvas.width + j)%this.poem.length];

                    //textList += " "
                    //textList += "X";
                }
            }
            textList += "\n";

        }
         this.setState({textBox: textList })
         this.setState({pixelArray: pixArrayTest })
         return textList
         
      }

      componentDidMount() {
        console.log("RERENDERED")
        this.interval = setInterval(() => {this.setState({ time: Date.now()}); this.accessPixels();} ,100);

        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          var videoElement = document.getElementById('videoElement');
          var canvas = document.getElementById('canvas');
          var context = canvas.getContext('2d');
  
          videoElement.srcObject = stream;

          console.log(canvas.width)
          console.log(canvas.height)
  
          // Draw the webcam stream onto the canvas
          function drawToCanvas() {
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(drawToCanvas);
          }
          drawToCanvas();
  
          // Access pixel data from the canvas
          // Call accessPixels function to access pixel data
          this.accessPixels();
        })
        .catch(function (error) {
          console.error('Error accessing the webcam:', error);
        });
      }



      componentWillUnmount() {
        clearInterval(this.interval);
      }


        incrementCount = () => {
        this.accessPixels();


    };

      render(){
        return <div>
        
                <div style = {{"display": "none"}}>
                <video id="videoElement" autoPlay></video>
                <canvas id="canvas" onClick={this.incrementCount} ></canvas>
                </div>

                {this.camSelected == 0 && (

                 <p id = "textImage" style={{"font-size": "6pt", "fontFamily": "monospace", "  white-space" : "nowrap", "color": "black", "letter-spacing": "1.5px"}}>{this.state.textBox}</p>
                )}
                

                {this.camSelected == 1 && (
                  <>
                  <h1>I believe in other people's experiences</h1>
                  <div className="pixelContainer">

                  {this.state.pixelArray.map((pixel, index) => {
                    var canvas = document.getElementById('canvas');
                    
                      if(index % Math.round(canvas.width/5) == 0 ) {
                        return (
                          <>
                          <br/>
                          <span className="pixelInput">
                            <div className="textAdd">
                            {pixel?"Yes":"No"}

                            </div>
                            <input type="radio" checked = {pixel} onClick={this.goLeft}/></span>
                          </>
                        )
                      } 
                      return(
                        <span className="pixelInput">
                            
                            <div className="textAdd">
                              {pixel?"Yes":"No"}
                            </div>

                          <input type="radio" checked = {pixel} onClick={this.goLeft}/></span>
                      )

                  })}
                  </div>

                  </>
              )}

            </div>


      }
}
export default Poetry




