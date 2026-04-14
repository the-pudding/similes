import"../chunks/DsnmJJEf.js";import{aq as d,$ as p,a1 as C,t as k,K as l,a0 as h,ar as E,Z as L,F as M,_ as B,a2 as z,M as q,aH as N,ag as D,bb as Y,L as Q}from"../chunks/B92FeS2C.js";import{b as v,f as g,c as F,t as Z}from"../chunks/BvRfo2l_.js";import{a as x,f as X,e as O}from"../chunks/BwpuD7DB.js";import{e as H,i as R,c as ee,d as te}from"../chunks/C2Vtx1Y2.js";import{e as ne}from"../chunks/DD47trRG.js";import{c as ae,b as se,i as oe}from"../chunks/DxeqRFj7.js";import{s as re,p as A}from"../chunks/C2wkIQ8G.js";import{s as P}from"../chunks/DGiPyN0h.js";import{c as ie,C as le,a as ce}from"../chunks/VkZvhZvr.js";import{b as ue}from"../chunks/D2E1UgrZ.js";import"../chunks/HvopnIf4.js";var he=g('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function me(r){var t=he();v(r,t)}var pe=g('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function de(r){var t=pe();v(r,t)}var ve=g('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(r){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var n=ve(),e=d(p(n),2);H(e,17,()=>t,R,(i,s)=>{let c=()=>l(s).tag,m=()=>l(s).text;var f=F(),a=C(f);ne(a,c,!1,(o,u)=>{var y=Z();k(()=>x(y,m())),v(u,y)}),v(i,f)}),h(n),v(r,n)}var ge=g("<p> </p>");function ye(r,t){var n=ge(),e=p(n);h(n),k(()=>x(e,`I am component A and my favorite number is ${t.number??""}.`)),v(r,n)}var be=g("<p> </p>");function xe(r,t){var n=be(),e=p(n);h(n),k(()=>x(e,`I am component B and my name is ${t.name??""}.`)),v(r,n)}var we=g('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function _e(r){const t={A:ye,B:xe},n=[{component:"A",number:42},{component:"B",name:"Russell"}];var e=we(),i=d(p(e),2);H(i,17,()=>n,R,(s,c)=>{const m=E(()=>t[l(c).component]);var f=F(),a=C(f);ae(a,()=>l(m),(o,u)=>{u(o,re(()=>l(c)))}),v(s,f)}),h(e),v(r,e)}var ke=g("<div><!></div>");function Se(r,t){L(t,!0);let n=A(t,"root",3,null),e=A(t,"top",3,0),i=A(t,"bottom",3,0),s=A(t,"increments",3,100),c=A(t,"value",15,void 0),m=[],f=[],a=[],o=[],u;function y(){let b=0,_=0;for(let I=0;I<m.length;I++)m[I]>b&&(b=m[I],_=I);b>0?c(_):c(void 0)}function S(b,_){const I=J=>{J[0].isIntersecting;const K=J[0].intersectionRatio;m[_]=K,y()},$=e()?e()*-1:0,U=i()?i()*-1:0,W=`${$}px 0px ${U}px 0px`,V={root:n(),rootMargin:W,threshold:f};o[_]&&o[_].disconnect();const G=new IntersectionObserver(I,V);G.observe(b),o[_]=G}function j(){a.length&&a.forEach(S)}M(()=>{for(let b=0;b<s()+1;b++)f.push(b/s());a=u.querySelectorAll(":scope > *:not(iframe)"),j()}),M(()=>{e(),i(),j()});var w=ke(),T=p(w);P(T,()=>t.children??z),h(w),se(w,b=>u=b,()=>u),v(r,w),B()}var Ie=g('<div><p class="svelte-1sxgmm9"> </p></div>'),qe=g('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function je(r){let t=D(void 0);var n=qe(),e=p(n),i=d(p(e)),s=p(i,!0);h(i),h(e);var c=d(e,4);Se(c,{get value(){return l(t)},set value(m){q(t,m,!0)},children:(m,f)=>{var a=F(),o=C(a);H(o,16,()=>[0,1,2,3,4],R,(u,y,S)=>{const j=E(()=>l(t)===S);var w=Ie();let T;var b=p(w),_=p(b,!0);h(b),h(w),k(()=>{T=ee(w,1,"step svelte-1sxgmm9",null,T,{active:l(j)}),x(_,y)}),v(u,w)}),v(m,a)},$$slots:{default:!0}}),N(2),h(n),k(()=>x(s,l(t)||"-")),v(r,n)}const Ae=`{
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
          "value": "I pulled every simile in the form <strong>“as ___ as ___”</strong> from tens of thousands of books for the top 500 most common adjectives."
        },
        {
          "type": "text",
          "value": "Maybe you haven’t considered the simile since grade school, so here is a pop-quiz to get you in a writer’s mindset: <strong>Fill in the blank.</strong>"
        },
        {
          "type": "Game",
          "value": {
            "example": "My mouth has gone <strong>as dry as</strong>",
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
          "value": "Above are real results from my extensive analysis of this specific form of simile. Once you start looking, you see them everywhere, from the classics <em>Jane Eyre</em> to last year’s darling <em>Heart the Lover</em>."
        },
        {
          "type": "Quotes",
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
            "content": "English has lots of ways to make comparisons. “Eyes like daggers,” “razor-sharp wit.” Most of these figurative forms are difficult to extract from text at scale. “As ___ as ___” is the exception because of its rigid structure. This makes it the most reliable to parse programmatically while minimizing the need for human judgement. It’s also surprisingly common in all forms of fiction. So while it’s just a sample of figurative language, it provides a quantifiable glimpse into the topic."
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
          "value": "So that we’re on the same page, here is a diagram of this form of simile:"
        },
        {
          "type": "Explainer",
          "value": {
            "terms": [
              {
                "term": "Tenor",
                "description": "the thing being described"
              },
              {
                "term": "Ground",
                "description": "the shared quality (adjective)"
              },
              {
                "term": "Vehicle",
                "description": "the comparison (noun)"
              }
            ],
            "example": "My <span>mouth</span> has gone as <span>dry</span> as <span>sawdust.</span>"
          }
        },
        {
          "type": "text",
          "value": "First, a notable disclaimer. We’ll mostly just look at a simplified version of this form; <strong class=color-ground>grounds that are adjectives</strong>, and <strong class=color-vehicle>vehicles that are nouns</strong> (specifically mono/bi-grams, i.e., one or two words). This reduces the noise in favor of a clearer signal. For example:"
        },
        {
          "type": "text",
          "value": "“In the doorway stood Kristen, Dylan, and Alicia, looking <strong>as <span class=color-ground>stunned</span> as <span class=color-vehicle>Taylor Swift during the 2009 VMAs when Kanye stole her acceptance speech.</span></strong>”"
        },
        {
          "type": "text",
          "value": "These one-offs can be fun and evocative if you know the context, but aren’t helpful when looking for data trends."
        },
        {
          "type": "text",
          "value": "In similes, every adjective has a distinct shape. If you look at the usage of the nouns that follow, you can see whether an adjective is dominated by a single cliché or has range. Here is the shape of <strong class=color-ground>dry</strong> from our pop quiz."
        },
        {
          "type": "ShapeExample",
          "value": {
            "ground": "dry"
          }
        },
        {
          "type": "text",
          "value": "You’ll notice that the top 3–bone, desert, and dust–make up 43% of all usage, and there is a pretty quick drop-off after that with a long tail of rarer choices. Let’s zoom out to see the shape of more adjectives. Here are the top 20 nouns for every adjective with at least 200 occurrences."
        },
        {
          "type": "ShapeAll",
          "value": {}
        },
        {
          "type": "text",
          "value": "Each tiny chart is one adjective’s fingerprint. Most have a similar skewed distribution, with some key distinctions:"
        },
        {
          "type": "Ul",
          "value": {
            "li": [
              "Gentler slopes tell us there are no dominant idioms.",
              "Many have a couple go-to nouns followed by a long tail.",
              "The clichés are obvious, marked by a single tall spike that overshadows the others."
            ]
          }
        },
        {
          "type": "text",
          "value": "<mark>walk through an example or two? or just click to enlarge</mark>"
        },
        {
          "type": "text",
          "value": "Most similes follow a similar shape. Some writers reach for a novel comparison to make it their own, while most just want one that’s reliable and accessible. Check out this 1964 textbook <em>Examine Your English</em>, which implants the patterns         from the start."
        },
        {
          "type": "img",
          "value": {
            "src": "assets/idioms.webp",
            "alt": "A list of idioms from the 1964 textbook Examine Your English."
          }
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
          "value": "Now let’s flip it around and look at similes from the noun’s perspective. Some nouns are wielded as a common comparison for dozens of different adjectives (generalists), while some are uniquely tied to a single quality (specialists)."
        },
        {
          "type": "text",
          "value": "Nothing exemplifies the specialist better than the cucumber. <strong>As cool as a cucumber</strong> is the paragon specialist."
        },
        {
          "type": "img",
          "value": {
            "src": "assets/pippi.webp",
            "alt": "A box from the comic Pippi Longstocking showing a speech bubble that has “as cool as a cucumber” in it."
          }
        },
        {
          "type": "text",
          "value": "Cucumber (or as I learned that it sometimes was referred to as “cowcumber”) doesn’t even crack the top ten in usage for any other adjective. On the other hand, you have <strong>hell</strong> which is a top-10 noun for 17 different adjectives."
        },
        {
          "type": "text",
          "value": "To quantify this, I looked at the diversity of adjectives for each noun using the <a href=https://en.wikipedia.org/wiki/Diversity_index#Simpson_index target=_blank rel=noreferrer>Simpson index.</a> Put plainly: if you pick two similes for a noun at random, what is the chance the adjectives match?"
        },
        {
          "type": "Swarm",
          "value": {
            "axisLabel": "Predictability score <br>(Simpson’s diversity index)"
          }
        },
        {
          "type": "text",
          "value": "Most nouns land somewhere in between. They have some reliable pairings, sometimes because of distinct qualities (e.g., glass is smooth, fragile, transparent) or amplified because of similar adjectives (e.g., the sun is bright, brilliant, radiant)."
        },
        {
          "type": "text",
          "value": "But like most things, the interesting stuff lies at the extremes–nouns so tightly coupled with a single adjective they’ve become idioms, or so plamigerent that they’ve lost all meaning."
        }
      ]
    },
    {
      "section": "specific",
      "content": [
        {
          "type": "h2",
          "value": "Four nouns, four stories"
        },
        {
          "type": "text",
          "value": "Let’s focus on four nouns that each reveal something different about how writers use comparisons."
        },
        {
          "type": "h3",
          "value": "Cat"
        },
        {
          "type": "text",
          "value": "Cat is a noun that covers serious ground. Writers use it to mean everything from graceful to weak."
        },
        {
          "type": "text",
          "value": "While most animals are pigeon-holed–think stubborn as a mule–cats span a huge range of observed behavior. And cat is the most used noun for four different adjectives; nervous, active, agile, nimble."
        },
        {
          "type": "img",
          "value": {
            "src": "assets/temp-cat.png"
          }
        },
        {
          "type": "Cat",
          "value": {}
        },
        {
          "type": "h3",
          "value": "Stone"
        },
        {
          "type": "text",
          "value": "Stone is the opposite. Where a cat is defined by the range of things it does, stone is often defined by what it lacks."
        },
        {
          "type": "img",
          "value": {
            "src": "assets/temp-stone.png"
          }
        },
        {
          "type": "text",
          "value": "It ranks first for 13 adjectives, but nearly all of them point in a similar direction. It is mostly a bunch of different words that say “nothing is happening here,” which makes it a perfect blank canvas."
        },
        {
          "type": "h3",
          "value": "Child"
        },
        {
          "type": "text",
          "value": "In fiction, a child has become shorthand for two things; their being defenseless and wholesome."
        },
        {
          "type": "img",
          "value": {
            "src": "assets/temp-child.png"
          }
        },
        {
          "type": "text",
          "value": "The scale tips towards the defenseless side with the highest usage being helpless and innocent. Interestingly, child is still just second in usage in both of those adjectives to the even more defenseless baby."
        },
        {
          "type": "h3",
          "value": "Hell"
        },
        {
          "type": "text",
          "value": "Hell is one of the most versatile nouns in the dataset. However, most of them have nothing to do with hell."
        },
        {
          "type": "text",
          "value": "<strong>As hot as hell</strong> makes sense, if you subscribe to the religious imagery. But as cute as hell? As sexy as hell? Similes usually work because the noun possesses the quality. Hell often functions more as an amplifier."
        },
        {
          "type": "text",
          "value": "I was curious about when this phenomenon started. According to <a href=https://books.google.com/ngrams/ target=_blank rel=noreferrer>Google Books Ngram Viewer</a>, the first use of “sexy as hell” that I could verify was from the 1948 novel <em>Innocent Villa,</em> “She looks like an old harpy but thinks she’s sexy as hell.”"
        },
        {
          "type": "img",
          "value": {
            "src": "assets/innocent-villa-cover.png"
          }
        },
        {
          "type": "text",
          "value": "If we want to get pedantic, the first use with the exact structure (“as _ as _”) was from the 1954 novel <em>The Refuge,</em> “‘Any woman with eyes like hers gets a reputation for being as sexy as hell, old boy.’”"
        },
        {
          "type": "text",
          "value": "This makes hell pretty unique in the dataset. Most nouns earn their place by embodying something, whereas hell just became another way to say “very.”"
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
          "value": "But not all similes are used as intended. Take the classic expression <strong>“as clear as mud.”</strong> It inverts the expectation by using a contrasting quality of the noun, often for humor. This becomes more of an art form as the comparison gets more specific."
        },
        {
          "type": "text",
          "value": "“He looks about <strong>as happy as a dad at a Taylor Swift concert</strong>, but at least he’s in control of his rage.”"
        },
        {
          "type": "text",
          "value": "While these are a small subset of the dataset, a kind of counter-culture of the simile world, they often paint a more vivid and memorable picture. These tend to work best with positive-sentiment adjectives to set up a punch line."
        },
        {
          "type": "Irony",
          "value": {}
        }
      ]
    },
    {
      "section": "method",
      "content": [
        {
          "type": "h2",
          "value": "Data and method"
        },
        {
          "type": "text",
          "value": "TK some note about this is all pre-AI books."
        },
        {
          "type": "text",
          "value": "Used 100+ occurrences for most noun stats."
        }
      ]
    }
  ]
}`;var De=g('<p> </p> <progress max="100"></progress>',1);function Te(r,t){let n=A(t,"label",3,"A"),e=A(t,"value",3,0);var i=De(),s=C(i),c=p(s,!0);h(s);var m=d(s,2);k(()=>{x(c,n()),te(m,e())}),v(r,i)}var Ce=g('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Me(r,t){L(t,!0);const{body:n}=ie,e={Test:Te};var i=Ce(),s=d(p(i),2),c=p(s),m=p(c,!0);h(c),h(s);var f=d(s,2);le(f,{get components(){return e},get body(){return n}}),h(i),k(a=>x(m,a),[()=>Ae.replace(/\t/g," ")]),v(r,i),B()}const Ee=(r,t=z)=>{var n=Le(),e=p(n),i=p(e,!0);h(e);var s=d(e,2),c=p(s,!0);h(s),h(n),k(()=>{x(i,t().name),x(c,t().age)}),v(r,n)};var Le=g('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Be=g('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function He(r,t){L(t,!0),A(t,"age",3,30);const n=[{name:"John",age:30},{name:"Jill",age:45}];let e=D(0),i=E(()=>l(e)*2),s=E(()=>l(e)*2),c=D(0);M(()=>{q(c,l(e)*2)});var m=Be(),f=d(C(m),4),a=d(f,2),o=p(a);h(a);var u=d(a,2),y=p(u);h(u);var S=d(u,2),j=p(S);h(S);var w=d(S,4),T=p(w);P(T,()=>t.children??z),h(w);var b=d(w,4),_=d(b,4);H(_,21,()=>n,R,(I,$)=>{Ee(I,()=>l($))}),h(_),k(()=>{x(o,`${l(e)??""} doubled is ${l(i)??""} (derived)`),x(y,`${l(e)??""} doubled is ${l(s)??""} (derived by)`),x(j,`${l(e)??""} doubled is ${l(c)??""} ($effect)`)}),O("click",f,()=>Y(e)),O("click",b,()=>t.random(Math.floor(Math.random()*10))),v(r,m),B()}X(["click"]);const Re=(r,t)=>{let n=D(Q(r)),e=D(null),i=D(!0),s=D(void 0);const c=(a=!0)=>{q(i,a,!0),a===!0&&(q(s,null),q(e,null))},m=async()=>{try{const a=await fetch(l(n),t);if(!a.ok)throw new Error(`Unexpected error occurred (status ${a.status})`);let o;if(l(n).includes(".csv")){const u=await a.text();o=ce(u)}else o=await a.json();return[null,o]}catch(a){const{errorMessage:o="Unexpected error eccurred"}=a;return[o,null]}},f=async a=>{c(!0);const[o,u]=await m();if(a===l(n)){if(o){c(!1),q(s,o,!0);return}c(!1),q(e,u,!0)}};return M(()=>{f(l(n))}),{get data(){return l(e)},get loading(){return l(i)},get error(){return l(s)},get url(){return l(n)},set url(a){l(n)!==a&&q(n,a,!0)}}};var $e=g("<p>loading data...</p>"),ze=g("<p> </p>"),Fe=g("<p>data loaded</p> <pre> </pre>",1),Ge=g('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Je(r,t){L(t,!0);const n=`${ue}/assets/demo/test.csv`,e=Re(n);M(()=>{});var i=Ge(),s=d(p(i),2),c=p(s);{var m=o=>{var u=$e();v(o,u)},f=o=>{var u=ze(),y=p(u);h(u),k(()=>x(y,`error: ${e.error??""}`)),v(o,u)},a=o=>{var u=Fe(),y=d(C(u),2),S=p(y,!0);h(y),k(j=>x(S,j),[()=>JSON.stringify(e.data,null,2)]),v(o,u)};oe(c,o=>{e.loading?o(m):e.error?o(f,1):o(a,-1)})}h(s),h(i),v(r,i),B()}var Oe=g('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Pe(r){let t=D(0);function n(y){console.log(y)}var e=Oe(),i=d(p(e),2);me(i);var s=d(i,2);de(s);var c=d(s,2);fe(c);var m=d(c,2);_e(m);var f=d(m,2);Me(f,{});var a=d(f,2);Je(a,{});var o=d(a,2);je(o);var u=d(o,2);He(u,{random:n,get value(){return l(t)},set value(y){q(t,y,!0)}}),h(e),v(r,e)}function at(r){Pe(r)}export{at as component};
