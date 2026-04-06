import"../chunks/DsnmJJEf.js";import{ad as g,a2 as v,a3 as p,a4 as U,t as I,O as m,ae as N,a0 as z,J as F,a1 as $,a5 as Z,R as A,aC as ae,ap as E,bi as oe,Q as se}from"../chunks/K4dKGPOx.js";import{b as x,f as _,c as G,t as re}from"../chunks/BdvQrHyQ.js";import{a as S,f as ie,e as K}from"../chunks/CoMX499p.js";import{e as H,i as J,b as le,d as ue}from"../chunks/-BYd3sga.js";import{e as ce}from"../chunks/3d6D4LyV.js";import{c as he,b as me,i as de}from"../chunks/CaJK6fTl.js";import{s as pe,p as D}from"../chunks/BN8dZ9XC.js";import{s as ee}from"../chunks/GKoVV2Pd.js";import{C as ve,c as fe}from"../chunks/KSz17bD-.js";import{b as ge}from"../chunks/DJqZ4aHj.js";import"../chunks/DlOzM7pa.js";var Q={},V={},W=34,O=10,Y=13;function te(t){return new Function("d","return {"+t.map(function(n,a){return JSON.stringify(n)+": d["+a+'] || ""'}).join(",")+"}")}function ye(t,n){var a=te(t);return function(o,s){return n(a(o),s,t)}}function X(t){var n=Object.create(null),a=[];return t.forEach(function(o){for(var s in o)s in n||a.push(n[s]=s)}),a}function j(t,n){var a=t+"",o=a.length;return o<n?new Array(n-o+1).join(0)+a:a}function be(t){return t<0?"-"+j(-t,6):t>9999?"+"+j(t,6):j(t,4)}function xe(t){var n=t.getUTCHours(),a=t.getUTCMinutes(),o=t.getUTCSeconds(),s=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":be(t.getUTCFullYear())+"-"+j(t.getUTCMonth()+1,2)+"-"+j(t.getUTCDate(),2)+(s?"T"+j(n,2)+":"+j(a,2)+":"+j(o,2)+"."+j(s,3)+"Z":o?"T"+j(n,2)+":"+j(a,2)+":"+j(o,2)+"Z":a||n?"T"+j(n,2)+":"+j(a,2)+"Z":"")}function we(t){var n=new RegExp('["'+t+`
\r]`),a=t.charCodeAt(0);function o(e,u){var w,b,h=s(e,function(T,f){if(w)return w(T,f-1);b=T,w=u?ye(T,u):te(T)});return h.columns=b||[],h}function s(e,u){var w=[],b=e.length,h=0,T=0,f,k=b<=0,C=!1;e.charCodeAt(b-1)===O&&--b,e.charCodeAt(b-1)===Y&&--b;function M(){if(k)return V;if(C)return C=!1,Q;var B,L=h,q;if(e.charCodeAt(L)===W){for(;h++<b&&e.charCodeAt(h)!==W||e.charCodeAt(++h)===W;);return(B=h)>=b?k=!0:(q=e.charCodeAt(h++))===O?C=!0:q===Y&&(C=!0,e.charCodeAt(h)===O&&++h),e.slice(L+1,B-1).replace(/""/g,'"')}for(;h<b;){if((q=e.charCodeAt(B=h++))===O)C=!0;else if(q===Y)C=!0,e.charCodeAt(h)===O&&++h;else if(q!==a)continue;return e.slice(L,B)}return k=!0,e.slice(L,b)}for(;(f=M())!==V;){for(var R=[];f!==Q&&f!==V;)R.push(f),f=M();u&&(R=u(R,T++))==null||w.push(R)}return w}function l(e,u){return e.map(function(w){return u.map(function(b){return i(w[b])}).join(t)})}function c(e,u){return u==null&&(u=X(e)),[u.map(i).join(t)].concat(l(e,u)).join(`
`)}function d(e,u){return u==null&&(u=X(e)),l(e,u).join(`
`)}function y(e){return e.map(r).join(`
`)}function r(e){return e.map(i).join(t)}function i(e){return e==null?"":e instanceof Date?xe(e):n.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:o,parseRows:s,format:c,formatBody:d,formatRows:y,formatRow:r,formatValue:i}}var _e=we(","),ke=_e.parse,Ce=_('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function je(t){var n=Ce();x(t,n)}var Se=_('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function Te(t){var n=Se();x(t,n)}var Ie=_('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Ae(t){const n=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var a=Ie(),o=g(v(a),2);H(o,17,()=>n,J,(s,l)=>{let c=()=>m(l).tag,d=()=>m(l).text;var y=G(),r=U(y);ce(r,c,!1,(i,e)=>{var u=re();I(()=>S(u,d())),x(e,u)}),x(s,y)}),p(a),x(t,a)}var qe=_("<p> </p>");function De(t,n){var a=qe(),o=v(a);p(a),I(()=>S(o,`I am component A and my favorite number is ${n.number??""}.`)),x(t,a)}var Ee=_("<p> </p>");function Me(t,n){var a=Ee(),o=v(a);p(a),I(()=>S(o,`I am component B and my name is ${n.name??""}.`)),x(t,a)}var Re=_('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Be(t){const n={A:De,B:Me},a=[{component:"A",number:42},{component:"B",name:"Russell"}];var o=Re(),s=g(v(o),2);H(s,17,()=>a,J,(l,c)=>{const d=N(()=>n[m(c).component]);var y=G(),r=U(y);he(r,()=>m(d),(i,e)=>{e(i,pe(()=>m(c)))}),x(l,y)}),p(o),x(t,o)}var Le=_("<div><!></div>");function Ue(t,n){z(n,!0);let a=D(n,"root",3,null),o=D(n,"top",3,0),s=D(n,"bottom",3,0),l=D(n,"increments",3,100),c=D(n,"value",15,void 0),d=[],y=[],r=[],i=[],e;function u(){let f=0,k=0;for(let C=0;C<d.length;C++)d[C]>f&&(f=d[C],k=C);f>0?c(k):c(void 0)}function w(f,k){const C=P=>{P[0].isIntersecting;const ne=P[0].intersectionRatio;d[k]=ne,u()},M=o()?o()*-1:0,R=s()?s()*-1:0,B=`${M}px 0px ${R}px 0px`,L={root:a(),rootMargin:B,threshold:y};i[k]&&i[k].disconnect();const q=new IntersectionObserver(C,L);q.observe(f),i[k]=q}function b(){r.length&&r.forEach(w)}F(()=>{for(let f=0;f<l()+1;f++)y.push(f/l());r=e.querySelectorAll(":scope > *:not(iframe)"),b()}),F(()=>{o(),s(),b()});var h=Le(),T=v(h);ee(T,()=>n.children??Z),p(h),me(h,f=>e=f,()=>e),x(t,h),$()}var Oe=_('<div><p class="svelte-1sxgmm9"> </p></div>'),Fe=_('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ne(t){let n=E(void 0);var a=Fe(),o=v(a),s=g(v(o)),l=v(s,!0);p(s),p(o);var c=g(o,4);Ue(c,{get value(){return m(n)},set value(d){A(n,d,!0)},children:(d,y)=>{var r=G(),i=U(r);H(i,16,()=>[0,1,2,3,4],J,(e,u,w)=>{const b=N(()=>m(n)===w);var h=Oe();let T;var f=v(h),k=v(f,!0);p(f),p(h),I(()=>{T=le(h,1,"step svelte-1sxgmm9",null,T,{active:m(b)}),S(k,u)}),x(e,h)}),x(d,r)},$$slots:{default:!0}}),ae(2),p(a),I(()=>S(l,m(n)||"-")),x(t,a)}const ze=`{
  "meta": {
    "title": "Comparisons as predictable as the sunrise",
    "description": "An analysis of 200,000 similes from popular fiction."
  },
  "body": [
    {
      "section": "hero",
      "content": [
        {
          "type": "h1",
          "value": "<span>Comparisons</span> <span>as predictable as</span> <span>the sunrise</span>"
        },
        {
          "type": "text",
          "value": "<span class=dek>An analysis of 200,000 similes from popular fiction.</span>"
        },
        {
          "type": "text",
          "value": "<span class=byline>By <a href=https://pudding.cool/author/russell-samora>Russell Samora.</a> Design by <a href=https://pudding.cool/author/shelly-tan>Shelly Tan.</a>"
        }
      ]
    },
    {
      "section": "intro",
      "content": [
        {
          "type": "text",
          "value": "I pulled every simile in the form <strong>“as ___ as ___”</strong> from tens of thousands of books."
        },
        {
          "type": "text",
          "value": "Maybe you haven’t considered the simile since grade school, so here is a pop-quiz to get you in a writer’s mindset: <strong>Fill in the blank.</strong>"
        },
        {
          "type": "Game",
          "value": {
            "example": "My mouth was <strong>as dry as</strong>",
            "note": "Just use one-two word nouns",
            "responses": [
              "as common as dirt",
              "as familiar as a friend",
              "as rare as a unicorn"
            ]
          }
        },
        {
          "type": "text",
          "value": "Those were real results from my extensive analysis of this specific form of simile. Once you start looking, you see them everywhere, from the classics <em>Jane Eyre</em> to last year’s smash-hit <em>Heart the Lover</em>."
        },
        {
          "type": "text",
          "value": "<mark>some graphic of quotes from old and new books</mark>"
        },
        {
          "type": "Examples",
          "value": {
            "items": [
              {
                "quote": "Remain where you are till I return; be <strong>as still as a mouse.</strong>",
                "title": "Jane Eyre",
                "year": "1847"
              },
              {
                "quote": "I’m like my mother, I’m <strong>as useless as a beggar in Calcutta.</strong>",
                "title": "Heart the Lover",
                "year": "2025"
              },
              {
                "quote": "I had part of a cup of coffee and about half of some cake that was <strong>as hard as a rock.</strong>",
                "title": "The Catcher in the Rye",
                "year": "1951"
              },
              {
                "quote": "My mouth has gone <strong>as dry as sawdust.</strong>",
                "title": "The Hunger Games",
                "year": "2008"
              },
              {
                "quote": "And Sunny remembered Ulla, who was so nonchalant about such matters that it made negotiations around sex <strong>as natural as a conversation between children playing in a sandbox.</strong>",
                "title": "The Loneliness of Sonia and Sunny",
                "year": "2025"
              },
              {
                "quote": "It offered twenty-one guest rooms, commanding sea views, and a lobby fireplace <strong>as big as a truck.</strong>",
                "title": "All the Light we Cannot See",
                "year": "2014"
              },
              {
                "quote": "Sparrows, awake even at night, chittered in the rafters, high above men who sat with meager scatterings of field mushrooms and pond greens, buckets whose bottoms were populated with <strong>shrimp as slender as pins,</strong> and snails collected from village porches.",
                "title": "A Guardian and a Thief",
                "year": "2025"
              }
            ]
          }
        },
        {
          "type": "text",
          "value": "I thought it would be a trivial exercise, but the more I poked around, the more questions I had. Let’s explore what I learned."
        },
        {
          "type": "Details",
          "value": {
            "summary": "Why <strong>as ___ as ___</strong>?",
            "content": "English has lots of ways to make comparisons. “Eyes like daggers,” “razor-sharp wit,” “moved like water.” But most of these forms get challenging to extract from text at scale. “As ___ as ___” is the exception because of its rigid structure. This makes it the most reliable to parse programmatically while minimizing the need for human judgement. It’s also surprisingly common in all forms of fiction. So while it’s just a sample of figurative language, it gives us a quantifiable glimpse into the topic."
          }
        }
      ]
    },
    {
      "section": "adjectives",
      "content": [
        {
          "type": "h2",
          "value": "Every adjective has a fingerprint"
        },
        {
          "type": "text",
          "value": "So we’re on the same page, here is a technical diagram of this form of simile:"
        },
        {
          "type": "text",
          "value": "<mark>chart of technical terms (tenor - the thing being described, vehicle - the comparison (noun), ground - the the thing they have in common (the quality / adjective)</mark>"
        },
        {
          "type": "text",
          "value": "First, a notable disclaimer. From here on we’ll mostly just look at grounds that are adjectives and vehicles that are mono/bi-grams (nouns that are 1-2 words). This simplifies the analysis because including vehicle phrases gets noisy. For example: “In the doorway stood Kristen, Dylan, and Alicia, looking as stunned as <strong>Taylor Swift during the 2009 VMAs when Kanye stole her acceptance speech.</strong>”"
        },
        {
          "type": "text",
          "value": "These one-offs can be fun and evocative if you know the context, but not helpful when looking for data trends."
        },
        {
          "type": "text",
          "value": "In similes, every adjective has a fingerprint. If you look at the usage of the nouns that follow, you can see whether the adjective is dominated by a single cliché or has range. Here is the last one from the game: <strong>dry</strong>."
        },
        {
          "type": "text",
          "value": "<mark>a bar chart of all nouns and their usage counts for dry.</mark>"
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
          "value": "Each tiny chart is one adjective’s fingerprint. Most have a similar skewed distribution, with some key distinctions:"
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
          "value": "<mark>walk through an example or two?</mark>"
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
          "value": "Specialist and generalists"
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
          "value": "<mark>Beeswarm chart. x-axis is a spectrum from generalist to specialist. Each dot is a noun</mark>"
        },
        {
          "type": "text",
          "value": "Most nouns land somewhere in between. They have some reliable pairings, sometimes because of distinct qualities (e.g., glass is smooth, fragile, transparent) or amplified because of similar adjectives (e.g., the sun is bright, brilliant, radiant)."
        },
        {
          "type": "text",
          "value": "But like most things, the interesting stuff lies at the extremes–nouns so tightly coupled with a single adjective they’ve become common expressions, or so plamigerent that they’ve lost all meaning."
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
          "value": "Three nouns, three stories"
        },
        {
          "type": "text",
          "value": "Let’s focus on three different nouns that each tell a different story about what similes do and how language and culture work."
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
          "value": "Disappearing similes"
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
          "value": "“mad as a hatter” - agatha christie and then there were none"
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
}`;var $e=_('<p> </p> <progress max="100"></progress>',1);function He(t,n){let a=D(n,"label",3,"A"),o=D(n,"value",3,0);var s=$e(),l=U(s),c=v(l,!0);p(l);var d=g(l,2);I(()=>{S(c,a()),ue(d,o())}),x(t,s)}var Je=_('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Ve(t,n){z(n,!0);const{body:a}=fe,o={Test:He};var s=Je(),l=g(v(s),2),c=v(l),d=v(c,!0);p(c),p(l);var y=g(l,2);ve(y,{get components(){return o},get body(){return a}}),p(s),I(r=>S(d,r),[()=>ze.replace(/\t/g," ")]),x(t,s),$()}const We=(t,n=Z)=>{var a=Ye(),o=v(a),s=v(o,!0);p(o);var l=g(o,2),c=v(l,!0);p(l),p(a),I(()=>{S(s,n().name),S(c,n().age)}),x(t,a)};var Ye=_('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Ze=_('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Ge(t,n){z(n,!0),D(n,"age",3,30);const a=[{name:"John",age:30},{name:"Jill",age:45}];let o=E(0),s=N(()=>m(o)*2),l=N(()=>m(o)*2),c=E(0);F(()=>{A(c,m(o)*2)});var d=Ze(),y=g(U(d),4),r=g(y,2),i=v(r);p(r);var e=g(r,2),u=v(e);p(e);var w=g(e,2),b=v(w);p(w);var h=g(w,4),T=v(h);ee(T,()=>n.children??Z),p(h);var f=g(h,4),k=g(f,4);H(k,21,()=>a,J,(C,M)=>{We(C,()=>m(M))}),p(k),I(()=>{S(i,`${m(o)??""} doubled is ${m(s)??""} (derived)`),S(u,`${m(o)??""} doubled is ${m(l)??""} (derived by)`),S(b,`${m(o)??""} doubled is ${m(c)??""} ($effect)`)}),K("click",y,()=>oe(o)),K("click",f,()=>n.random(Math.floor(Math.random()*10))),x(t,d),$()}ie(["click"]);const Pe=(t,n)=>{let a=E(se(t)),o=E(null),s=E(!0),l=E(void 0);const c=(r=!0)=>{A(s,r,!0),r===!0&&(A(l,null),A(o,null))},d=async()=>{try{const r=await fetch(m(a),n);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let i;if(m(a).includes(".csv")){const e=await r.text();i=ke(e)}else i=await r.json();return[null,i]}catch(r){const{errorMessage:i="Unexpected error eccurred"}=r;return[i,null]}},y=async r=>{c(!0);const[i,e]=await d();if(r===m(a)){if(i){c(!1),A(l,i,!0);return}c(!1),A(o,e,!0)}};return F(()=>{y(m(a))}),{get data(){return m(o)},get loading(){return m(s)},get error(){return m(l)},get url(){return m(a)},set url(r){m(a)!==r&&A(a,r,!0)}}};var Ke=_("<p>loading data...</p>"),Qe=_("<p> </p>"),Xe=_("<p>data loaded</p> <pre> </pre>",1),et=_('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function tt(t,n){z(n,!0);const a=`${ge}/assets/demo/test.csv`,o=Pe(a);F(()=>{});var s=et(),l=g(v(s),2),c=v(l);{var d=i=>{var e=Ke();x(i,e)},y=i=>{var e=Qe(),u=v(e);p(e),I(()=>S(u,`error: ${o.error??""}`)),x(i,e)},r=i=>{var e=Xe(),u=g(U(e),2),w=v(u,!0);p(u),I(b=>S(w,b),[()=>JSON.stringify(o.data,null,2)]),x(i,e)};de(c,i=>{o.loading?i(d):o.error?i(y,1):i(r,!1)})}p(l),p(s),x(t,s),$()}var nt=_('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function at(t){let n=E(0);function a(u){console.log(u)}var o=nt(),s=g(v(o),2);je(s);var l=g(s,2);Te(l);var c=g(l,2);Ae(c);var d=g(c,2);Be(d);var y=g(d,2);Ve(y,{});var r=g(y,2);tt(r,{});var i=g(r,2);Ne(i);var e=g(i,2);Ge(e,{random:a,get value(){return m(n)},set value(u){A(n,u,!0)}}),p(o),x(t,o)}function ft(t){at(t)}export{ft as component};
