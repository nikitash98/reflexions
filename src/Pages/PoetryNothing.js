import { Component, useEffect, useState} from "react";



class PoetryNothing extends Component {

    constructor(props) {
        super(props)
        this.camSelected = props.camSelected;
        this.poem = "AsParmigianinodidit,therighthandBiggerthanthehead,thrustattheviewerAndswervingeasilyaway,asthoughtoprotectWhatitadvertises.Afewleadedpanes,oldbeams,Fur,pleatedmuslin,acoralringruntogetherInamovementsupportingtheface,whichswimsTowardandawaylikethehandExceptthatitisinrepose.ItiswhatisSequestered.Vasarisays,FrancescoonedaysethimselfTotakehisownportrait,lookingathimselffromthatpurposeInaconvexmirror,suchasisusedbybarbers...HeaccordinglycausedabalofwoodtobemadeByaturner,andhavingdivideditinhalandBroughtittothesizeofthemirror,hesethimselfWithgreatarttocopyallthathesawintheglass,Chieflyhisreflection,ofwhichtheportraitIsthereflection,ofwhichtheportraitIsthereflectiononceremoved.TheglasschosetoreflectonlywhathesawWhichwasenoughforhispurpose:hisimageGlazed,embalmed,projectedata180-degreeangle.ThetimeofdayorthedensityofthelightAdheringtothefacekeepsitLivelyandintactinarecurringwaveOfarrival.Thesoulestablishesitself.ButhowfarcanitswimoutthroughtheeyesAndstillreturnsafelytoitsnest?ThesurfaceOfthemirrorbeingconvex,thedistanceincreasesSignificantly;thatis,enoughtomakethepointThatthesoulisacaptive,treatedhumanely,keptInsuspension,unabletoadvancemuchfartherThanyourlookasitinterceptsthepicture.PopeClementandhiscourtwerestupefiedByit,accordingtoVasari,andpromisedacommissionThatnevermaterialized.Thesoulhastostaywhereitis,Eventhoughrestless,hearingraindropsatthepane,Thesighingofautumnleavesthrashedbythewind,Longingtobefree,outside,butitmuststayPosinginthisplace.ItmustmoveAslittleaspossible.Thisiswhattheportraitsays.ButthereisinthatgazeacombinationOf tenderness,amusementandregret,sopowerfulInitsrestraintthatonecannotlookforlong.Thesecretistooplain.Thepityofitsmarts,Makeshottears spurt:thatthesoulisnotasoul,Hasnosecret,issmall,anditfitsItshollowperfectly:itsroom,ourmomentofattention.Thatisthetunebuttherearenowords.Thewordsareonlyspeculation(FromtheLatinspeculum,mirror):Theyseekandcannotfindthemeaningofthemusic.Weseeonlyposturesofthedream,RidersofthemotionthatswingsthefaceIntoviewundereveningskies,withnoFalse disarrayasproofofauthenticity.Butitislifeenglobed.Onewouldliketostickone'shandOutoftheglobe,butitsdimension,Whatcarriesit,willnotallowit.Nodoubtitisthis,notthereflexTohidesomething,whichmakesthehandloomlargeAsitretreatsslightly.ThereisnowayTobuilditflatlikeasectionofwall:Itmustjointhesegmentofacircle,RovingbacktothebodyofwhichitseemsSolikelyapart,tofenceinandshoreupthefaceOnwhichtheeffortofthisconditionreadsLikeapinpointofasmile,asparkOrstaroneisnotsureofhavseenAsdarknessresumes.AperverselightwhoseImperativeofsubtletydoomsinadvanceitsConceitto lightup:unimportantbutmeant.Francesco,yourhandisbigenoughTowreckthesphere,andtoobig,One wouldthink,toweavedelicatedmeshesThatonlyargueitsfurtherdetention.(Big,butnotcoarse,merelyonanotherscale,LikeadozingwhaleontheseabottomInrelationtothetiny,self-importantslipOnthesurface.)ButyoureyesproclaimThat everythingissurface.Thesurfaceiswhat'sthereAndnothingcanexistexceptwhat'sthere.Therearenorecessesintheroom,onlyalcoves,Andthewindowdoesn'tmattermuch,orthatSliverofwindowormirrorontheright,evenAsagaugeoftheweather,whichinFrenchisLe temps,thewordfortime,andwhichFollowsacoursewhereinchangesaremerelyFeaturesofthewhole.ThewholeisstablewithinInstability,aglobelikeours,restingOnapedestalofvacuum,aping-pongballSecureonitsjetofwater.Andjustastherearenowordsforthesurface,thatis,No wordstosaywhatitreallyis,thatitisnotSuperficialbutavisiblecore,thenthereisNowayoutoftheproblemofpathosvs.experience.Youwillstayon,restive,sereneinYourgesturewhichisneitherembracenorwarningButwhichholdssomethingofbothinpureAffirmationthatdoesn'taffirmanything.Theballoonpops,theattentionTurnsdullyaway.CloudsInthepuddlestirupintosawtoothedfragments.IthinkofthefriendsWhocametoseeme,ofwhatyesterdayWaslike.ApeculiarslantOfmemorythatintrudesonthedreamingmodelInthesilenceofthestudioasheconsidersLiftingthepenciltotheself-portrait.Howmanypeoplecameandstayedacertaintime,UtteredlightordarkspeechthatbecamepartofyouLike lightbehindwindblownfogandsand,Filteredandinfluencedbyit,untilnopartRemainsthatis surelyyou.ThosevoicesintheduskHave toldyouallandstillthetalegoesonIntheformofmemoriesdepositedinirregularClumps of crystals.Whosecurvedhandcontrols,Francesco,theturningseasonsandthethoughtsThatpeeloffandflyawayatbreathlessspeedsLike the laststubbornleavesrippedFromwetbranches?IseeinthisonlythechaosOfyourroundmirrorwhichorganizeseverythingAroundthepolestarofyoureyeswhichareempty,Knownothing,dreambutreveanothing.IfeelthecarouselstartingslowlyAndgoingfasterandfaster:desk,papers,books,Photographsoffriends,thewindowandthetreesMerginginoneneutralbandthatsurroundsMeonallsides,everywhereIlook.AndIcannotexplaintheactionofleveling,WhyitshouldallboildowntooneUniformsubstance,amagmaofinteriors.Myguideinthesemattersisyourselp,Firm,oblique,acceptingeverythingwiththesameWraithofasmile,andastimespeedsupsothatitissoonMuchlater,Icanknowonlythestraightwayout,Thedistancebetweenus.LongagoThestrewevidencemeantsomething,The smallaccidentsandpleasuresOfthedayasitmovedgrace";
        this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let textList = "";
        for(let i = 0; i < 150; i++) {
            for(let j = 0; j < 300; j++) {
                textList += this.alphabet[(i * 300 + j)%this.alphabet.length];
            }
            textList += "\n";
        }
        this.state = {
            time: 0,
            textBox: textList,
            pixelArray: [],
            camSelect: 1,
            
        }


    }



      

    





      render(){
        return <div>
        
            <p id = "textImage" style={{"font-size": "6pt", "fontFamily": "monospace", "  white-space" : "nowrap", "color": "black", "letter-spacing": "1.5px"}}>{this.state.textBox}</p>

                

            </div>


      }
}
export default PoetryNothing




