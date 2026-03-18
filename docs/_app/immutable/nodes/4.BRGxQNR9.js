import"../chunks/DsnmJJEf.js";import{ap as g,ab as d,ac as p,ad as L,t as S,$ as v,aq as O,Q as $,X as N,U as z,ah as Z,a1 as A,aD as ae,aR as E,bi as oe,a0 as se}from"../chunks/BIw2RV23.js";import{b as x,f as w,c as P,t as re}from"../chunks/BDs6KoYZ.js";import{s as T}from"../chunks/DADpEelK.js";import{e as H,i as Y,c as ie,d as le}from"../chunks/BYBCm-bL.js";import{e as ce}from"../chunks/0YW4uvuD.js";import{c as ue,i as me}from"../chunks/Bra46fdc.js";import{s as ve,p as q}from"../chunks/B54qoXHg.js";import{s as ee}from"../chunks/DbjAeVms.js";import{b as he}from"../chunks/mZYnPZho.js";import{C as pe,c as de}from"../chunks/C-lK1TR3.js";import{j as fe,g as K}from"../chunks/CPat7MoR.js";import{b as ge}from"../chunks/DKkF8UVj.js";import"../chunks/DlOzM7pa.js";var Q={},J={},V=34,F=10,W=13;function te(t){return new Function("d","return {"+t.map(function(n,a){return JSON.stringify(n)+": d["+a+'] || ""'}).join(",")+"}")}function ye(t,n){var a=te(t);return function(o,s){return n(a(o),s,t)}}function G(t){var n=Object.create(null),a=[];return t.forEach(function(o){for(var s in o)s in n||a.push(n[s]=s)}),a}function C(t,n){var a=t+"",o=a.length;return o<n?new Array(n-o+1).join(0)+a:a}function be(t){return t<0?"-"+C(-t,6):t>9999?"+"+C(t,6):C(t,4)}function xe(t){var n=t.getUTCHours(),a=t.getUTCMinutes(),o=t.getUTCSeconds(),s=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":be(t.getUTCFullYear())+"-"+C(t.getUTCMonth()+1,2)+"-"+C(t.getUTCDate(),2)+(s?"T"+C(n,2)+":"+C(a,2)+":"+C(o,2)+"."+C(s,3)+"Z":o?"T"+C(n,2)+":"+C(a,2)+":"+C(o,2)+"Z":a||n?"T"+C(n,2)+":"+C(a,2)+"Z":"")}function _e(t){var n=new RegExp('["'+t+`
\r]`),a=t.charCodeAt(0);function o(e,c){var _,b,m=s(e,function(D,f){if(_)return _(D,f-1);b=D,_=c?ye(D,c):te(D)});return m.columns=b||[],m}function s(e,c){var _=[],b=e.length,m=0,D=0,f,k=b<=0,j=!1;e.charCodeAt(b-1)===F&&--b,e.charCodeAt(b-1)===W&&--b;function M(){if(k)return J;if(j)return j=!1,Q;var B,U=m,I;if(e.charCodeAt(U)===V){for(;m++<b&&e.charCodeAt(m)!==V||e.charCodeAt(++m)===V;);return(B=m)>=b?k=!0:(I=e.charCodeAt(m++))===F?j=!0:I===W&&(j=!0,e.charCodeAt(m)===F&&++m),e.slice(U+1,B-1).replace(/""/g,'"')}for(;m<b;){if((I=e.charCodeAt(B=m++))===F)j=!0;else if(I===W)j=!0,e.charCodeAt(m)===F&&++m;else if(I!==a)continue;return e.slice(U,B)}return k=!0,e.slice(U,b)}for(;(f=M())!==J;){for(var R=[];f!==Q&&f!==J;)R.push(f),f=M();c&&(R=c(R,D++))==null||_.push(R)}return _}function l(e,c){return e.map(function(_){return c.map(function(b){return i(_[b])}).join(t)})}function u(e,c){return c==null&&(c=G(e)),[c.map(i).join(t)].concat(l(e,c)).join(`
`)}function h(e,c){return c==null&&(c=G(e)),l(e,c).join(`
`)}function y(e){return e.map(r).join(`
`)}function r(e){return e.map(i).join(t)}function i(e){return e==null?"":e instanceof Date?xe(e):n.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:o,parseRows:s,format:u,formatBody:h,formatRows:y,formatRow:r,formatValue:i}}var we=_e(","),ke=we.parse,je=w('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function Ce(t){var n=je();x(t,n)}var Te=w('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function De(t){var n=Te();x(t,n)}var Se=w('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Ae(t){const n=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var a=Se(),o=g(d(a),2);H(o,17,()=>n,Y,(s,l)=>{let u=()=>v(l).tag,h=()=>v(l).text;var y=P(),r=L(y);ce(r,u,!1,(i,e)=>{var c=re();S(()=>T(c,h())),x(e,c)}),x(s,y)}),p(a),x(t,a)}var Ie=w("<p> </p>");function qe(t,n){var a=Ie(),o=d(a);p(a),S(()=>T(o,`I am component A and my favorite number is ${n.number??""}.`)),x(t,a)}var Ee=w("<p> </p>");function Me(t,n){var a=Ee(),o=d(a);p(a),S(()=>T(o,`I am component B and my name is ${n.name??""}.`)),x(t,a)}var Re=w('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Be(t){const n={A:qe,B:Me},a=[{component:"A",number:42},{component:"B",name:"Russell"}];var o=Re(),s=g(d(o),2);H(s,17,()=>a,Y,(l,u)=>{const h=O(()=>n[v(u).component]);var y=P(),r=L(y);ue(r,()=>v(h),(i,e)=>{e(i,ve(()=>v(u)))}),x(l,y)}),p(o),x(t,o)}var Ue=w("<div><!></div>");function Le(t,n){$(n,!0);let a=q(n,"root",3,null),o=q(n,"top",3,0),s=q(n,"bottom",3,0),l=q(n,"increments",3,100),u=q(n,"value",15,void 0),h=[],y=[],r=[],i=[],e;function c(){let f=0,k=0;for(let j=0;j<h.length;j++)h[j]>f&&(f=h[j],k=j);f>0?u(k):u(void 0)}function _(f,k){const j=X=>{X[0].isIntersecting;const ne=X[0].intersectionRatio;h[k]=ne,c()},M=o()?o()*-1:0,R=s()?s()*-1:0,B=`${M}px 0px ${R}px 0px`,U={root:a(),rootMargin:B,threshold:y};i[k]&&i[k].disconnect();const I=new IntersectionObserver(j,U);I.observe(f),i[k]=I}function b(){r.length&&r.forEach(_)}N(()=>{for(let f=0;f<l()+1;f++)y.push(f/l());r=e.querySelectorAll(":scope > *:not(iframe)"),b()}),N(()=>{o(),s(),b()});var m=Ue(),D=d(m);ee(D,()=>n.children??Z),p(m),he(m,f=>e=f,()=>e),x(t,m),z()}var Fe=w('<div><p class="svelte-1sxgmm9"> </p></div>'),Ne=w('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Oe(t){let n=E(void 0);var a=Ne(),o=d(a),s=g(d(o)),l=d(s,!0);p(s),p(o);var u=g(o,4);Le(u,{get value(){return v(n)},set value(h){A(n,h,!0)},children:(h,y)=>{var r=P(),i=L(r);H(i,16,()=>[0,1,2,3,4],Y,(e,c,_)=>{const b=O(()=>v(n)===_);var m=Fe();let D;var f=d(m),k=d(f,!0);p(f),p(m),S(()=>{D=ie(m,1,"step svelte-1sxgmm9",null,D,{active:v(b)}),T(k,c)}),x(e,m)}),x(h,r)},$$slots:{default:!0}}),ae(2),p(a),S(()=>T(l,v(n)||"-")),x(t,a)}const $e=`{
  "meta": {
    "title": "Comparisons as predictable as the sunrise",
    "description": "An analysis of 200,000 similes from popular fiction."
  },
  "body": [
    {
      "section": "intro",
      "content": [
        {
          "type": "text",
          "value": "I pulled every simile in the form <strong>“as ___ as ___”</strong> from tens of thousands of books."
        },
        {
          "type": "text",
          "value": "Let’s play a quick game: for each adjective, the most popular completion is revealed. The rest are hidden."
        },
        {
          "type": "text",
          "value": "You have ten seconds to guess a completion. The catch? More common = fewer points. Like Family Feud, but reversed. Ready?"
        },
        {
          "type": "text",
          "value": "<mark>[game here] - plan is 3 questions to give a variety and opportunity to experience the challenge. could be sold on 1 as less game and more playful example interaction. (@shelly?)"
        },
        {
          "type": "text",
          "value": "</mark>"
        },
        {
          "type": "Game",
          "value": {
            "responses": [
              "as common as dirt",
              "as weak as a kitten"
            ]
          }
        },
        {
          "type": "text",
          "value": "The game you just played reflects real patterns I found after analyzing ~200,000 similes. I thought it would be a trivial exercise, but the more I poked around, the more questions I had. Let’s explore what I learned."
        },
        {
          "type": "Details",
          "value": {
            "summary": "Why <strong>as ___ as ___</strong>?",
            "content": "English has lots of ways to make comparisons. “Eyes like daggers,” “razor-sharp wit,” “moved like water.” But most of these forms get challenging to extract from text at scale. “As ___ as ___” is the exception because of its rigid structure. This makes it the most reliable to parse programmatically while minimizing the need for human judgement. It’s also surprisingly common in all forms of fiction. So while it’s just a sample of figurative language, it gives us one solid quantifiable perspective on the topic."
          }
        }
      ]
    },
    {
      "section": "adjectives",
      "content": [
        {
          "type": "h2",
          "value": "The adjectives"
        },
        {
          "type": "text",
          "value": "First, a notable disclaimer: most of the following sections look only at nouns that are mono/bi-grams (1-2 words) to simplify the analysis. There is a lot of noise when you include noun phrases, like “In the doorway stood Kristen, Dylan, and Alicia, looking as stunned as Taylor Swift during the 2009 VMAs when Kanye stole her acceptance speech.” This one-offs are fun (more on those later) but not useful when looking for data trends."
        },
        {
          "type": "text",
          "value": "Every adjective has a signature. If you look at the usage of the nouns* that are compared to it, you can see whether it’s dominated by a single cliché or has more variety. Here is the last one from the game: <strong>fragile</strong>."
        },
        {
          "type": "text",
          "value": "<mark>a bar chart of all nouns and their usage counts for fragile.</mark>"
        },
        {
          "type": "text",
          "value": "You’ll notice that x, y, and z make up X% of all usage, and there is a pretty quick drop-off after that with a long tail of one-offs. Let’s zoom out to see what it looks like across more adjectives."
        },
        {
          "type": "text",
          "value": "<mark>small multiple of top adjectives ~50 maybe</mark>"
        },
        {
          "type": "text",
          "value": "Each tiny chart is one adjective’s signature. Most have a similar skewed distribution, with some key distinctions:"
        },
        {
          "type": "text",
          "value": "* A few have a gentler slope which tells us there is no real cultural default standard."
        },
        {
          "type": "text",
          "value": "* Most are dominated by a few go-to nouns then have a long tail of one-offs."
        },
        {
          "type": "text",
          "value": "* The clichés are apparent with a single tall spike and virtually nothing else registering."
        },
        {
          "type": "text",
          "value": "<mark>walk through an example or two? (@shelly not sure if this whole section should be scrolly or static, options)</mark>"
        },
        {
          "type": "text",
          "value": "All similes follow a similar shape probably because of a blend of reasons: Cultural connections, literary precedent, and perhaps sometimes laziness could all be factors. Some writers may want a novel comparison to make it their own, while some may just want a reliable and accessible one."
        },
        {
          "type": "text",
          "value": "todo - brief note on it still being used in popular fiction from this year."
        }
      ]
    },
    {
      "section": "nouns",
      "content": [
        {
          "type": "h2",
          "value": "The nouns"
        },
        {
          "type": "text",
          "value": "Now let’s flip it around and look at it from the noun’s perspective. Some are wielded as a comparison for dozens of different adjectives (generalists), while some are uniquely tied to a single quality (specialists)."
        },
        {
          "type": "text",
          "value": "<strong>As cool as a cucumber</strong> is the paragon a specialist. It doesn’t even crack the top ten for any other adjective."
        },
        {
          "type": "text",
          "value": "On the other hand, you have <strong>hell</strong> which is the top noun for nineteen different adjectives."
        },
        {
          "type": "text",
          "value": "<mark>Beeswarm chart. x-axis is a spectrum from generalist to specialist. Each dot is a noun (@shelly images?)</mark>"
        },
        {
          "type": "text",
          "value": "Most nouns land somewhere in between. They have some reliable pairings, sometimes because of distinct qualities (e.g., glass is smooth, fragile, transparent) or amplified because of similar adjectives (e.g., the sun is bright, brilliant, radiant)."
        },
        {
          "type": "text",
          "value": "But like most things, the interesting stuff lies at the extremes–nouns so tightly coupled with a single noun they’ve become common expressions, or so plamigerent that they’ve lost all meaning."
        },
        {
          "type": "text",
          "value": "A noun’s gravity can shape what a writer reaches for (or avoids) over time."
        }
      ]
    },
    {
      "section": "trio",
      "content": [
        {
          "type": "h2",
          "value": "Three cases"
        },
        {
          "type": "text",
          "value": "Let’s focus on three different nouns that each tell a different story about what similes do."
        },
        {
          "type": "h3",
          "value": "Hell"
        },
        {
          "type": "text",
          "value": "<strong>Hell</strong> is one of the most-used nouns in the entire dataset, and definitely the most versatile. While similes are usually used as a paragon of a quality, hell functions more as an intensifier."
        },
        {
          "type": "text",
          "value": "<strong>As hot as hell</strong> makes sense (if you subscribe to religious depictions of the place). But sexy as hell? Nervous as hell? Sure as hell? Hell doesn’t describe a quality, but is more of a replacement for “really,” a word to emphasize the adjective."
        },
        {
          "type": "text",
          "value": "<mark>chart showing hell’s adjectives, their size, and color-coded if they have a real connection to the word or not</mark>"
        },
        {
          "type": "text",
          "value": "tbd temporal call-out?"
        },
        {
          "type": "h3",
          "value": "Child"
        },
        {
          "type": "text",
          "value": "While hell tells us something about language, <strong>child</strong> tells us more about society and culture."
        },
        {
          "type": "text",
          "value": "<mark>chart of some buckets of child’s adjectives</mark>"
        },
        {
          "type": "text",
          "value": "The adjectives for the simile <strong>as _ as a child</strong> are more about what adults project onto children."
        },
        {
          "type": "h3",
          "value": "Cat"
        },
        {
          "type": "text",
          "value": "<strong>Cat</strong> is curious because its usage is as dynamic as a chameleon’s colors."
        },
        {
          "type": "text",
          "value": "<mark>a chart showing the breadth of adjectives (can i use some quant. metric like cosine sim to make the point with data?)"
        },
        {
          "type": "text",
          "value": "X as a cat. Y as a cat. Z as a cat. These are all over the characteristic map. The flexibility of the cat is rare, especially in the animal kingdom where animals tend to get pigeon-holed into one or two adjectives and that is their lot."
        },
        {
          "type": "text",
          "value": "<mark>chart of cats vs other animals</mark>"
        },
        {
          "type": "text",
          "value": "Cats are useful because they can represent so many different qualities."
        }
      ]
    },
    {
      "section": "temporal",
      "content": [
        {
          "type": "h2",
          "value": "Fading similes"
        },
        {
          "type": "text",
          "value": "Sometimes things are around so long they become linguistic canon. But sometimes things get played out, whether because they are no longer culturally relevant, or because they are just tired."
        },
        {
          "type": "text",
          "value": "<mark>example charts</mark>"
        },
        {
          "type": "text",
          "value": "tk tk"
        }
      ]
    },
    {
      "section": "irony",
      "content": [
        {
          "type": "h2",
          "value": "The funny ones"
        },
        {
          "type": "text",
          "value": "But not all similes are used as designed. The counter-culture of similes invert the comparison and use the mechanic for humor or irony. These are a small subset of the dataset that exist to undermine the form."
        },
        {
          "type": "text",
          "value": "These tend to work best with positive-sentiment adjectives to set up a punch line. For example:"
        },
        {
          "type": "text",
          "value": "“he looks about as happy as a dad at a Taylor Swift concert, but at least he’s in control of his rage.”"
        },
        {
          "type": "text",
          "value": "A popular adjective for the inverted simile is <strong>useful</strong>:"
        },
        {
          "type": "text",
          "value": "<mark>wall of similes</mark>"
        }
      ]
    }
  ]
}`;var ze=w('<p> </p> <progress max="100"></progress>',1);function He(t,n){let a=q(n,"label",3,"A"),o=q(n,"value",3,0);var s=ze(),l=L(s),u=d(l,!0);p(l);var h=g(l,2);S(()=>{T(u,a()),le(h,o())}),x(t,s)}var Ye=w('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Je(t,n){$(n,!0);const{body:a}=de,o={Test:He};var s=Ye(),l=g(d(s),2),u=d(l),h=d(u,!0);p(u),p(l);var y=g(l,2);pe(y,{get components(){return o},get body(){return a}}),p(s),S(r=>T(h,r),[()=>$e.replace(/\t/g," ")]),x(t,s),z()}const Ve=(t,n=Z)=>{var a=We(),o=d(a),s=d(o,!0);p(o);var l=g(o,2),u=d(l,!0);p(l),p(a),S(()=>{T(s,n().name),T(u,n().age)}),x(t,a)};var We=w('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Ze=w('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Pe(t,n){$(n,!0),q(n,"age",3,30);const a=[{name:"John",age:30},{name:"Jill",age:45}];let o=E(0),s=O(()=>v(o)*2),l=O(()=>v(o)*2),u=E(0);N(()=>{A(u,v(o)*2)});var h=Ze(),y=g(L(h),4),r=g(y,2),i=d(r);p(r);var e=g(r,2),c=d(e);p(e);var _=g(e,2),b=d(_);p(_);var m=g(_,4),D=d(m);ee(D,()=>n.children??Z),p(m);var f=g(m,4),k=g(f,4);H(k,21,()=>a,Y,(j,M)=>{Ve(j,()=>v(M))}),p(k),S(()=>{T(i,`${v(o)??""} doubled is ${v(s)??""} (derived)`),T(c,`${v(o)??""} doubled is ${v(l)??""} (derived by)`),T(b,`${v(o)??""} doubled is ${v(u)??""} ($effect)`)}),K("click",y,()=>oe(o)),K("click",f,()=>n.random(Math.floor(Math.random()*10))),x(t,h),z()}fe(["click"]);const Xe=(t,n)=>{let a=E(se(t)),o=E(null),s=E(!0),l=E(void 0);const u=(r=!0)=>{A(s,r,!0),r===!0&&(A(l,null),A(o,null))},h=async()=>{try{const r=await fetch(v(a),n);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let i;if(v(a).includes(".csv")){const e=await r.text();i=ke(e)}else i=await r.json();return[null,i]}catch(r){const{errorMessage:i="Unexpected error eccurred"}=r;return[i,null]}},y=async r=>{u(!0);const[i,e]=await h();if(r===v(a)){if(i){u(!1),A(l,i,!0);return}u(!1),A(o,e,!0)}};return N(()=>{y(v(a))}),{get data(){return v(o)},get loading(){return v(s)},get error(){return v(l)},get url(){return v(a)},set url(r){v(a)!==r&&A(a,r,!0)}}};var Ke=w("<p>loading data...</p>"),Qe=w("<p> </p>"),Ge=w("<p>data loaded</p> <pre> </pre>",1),et=w('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function tt(t,n){$(n,!0);const a=`${ge}/assets/demo/test.csv`,o=Xe(a);N(()=>{});var s=et(),l=g(d(s),2),u=d(l);{var h=i=>{var e=Ke();x(i,e)},y=i=>{var e=Qe(),c=d(e);p(e),S(()=>T(c,`error: ${o.error??""}`)),x(i,e)},r=i=>{var e=Ge(),c=g(L(e),2),_=d(c,!0);p(c),S(b=>T(_,b),[()=>JSON.stringify(o.data,null,2)]),x(i,e)};me(u,i=>{o.loading?i(h):o.error?i(y,1):i(r,!1)})}p(l),p(s),x(t,s),z()}var nt=w('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function at(t){let n=E(0);function a(c){console.log(c)}var o=nt(),s=g(d(o),2);Ce(s);var l=g(s,2);De(l);var u=g(l,2);Ae(u);var h=g(u,2);Be(h);var y=g(h,2);Je(y,{});var r=g(y,2);tt(r,{});var i=g(r,2);Oe(i);var e=g(i,2);Pe(e,{random:a,get value(){return v(n)},set value(c){A(n,c,!0)}}),p(o),x(t,o)}function yt(t){at(t)}export{yt as component};
