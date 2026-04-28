import"../chunks/DsnmJJEf.js";import{aq as m,Y as d,_ as D,t as _,G as l,Z as h,ar as B,W as L,ae as M,X as E,ab as O,J as q,aH as Y,ag as T,bb as K,I as Q}from"../chunks/CCxHhvyJ.js";import{b as v,f,c as R,t as X}from"../chunks/BawtTf_u.js";import{a as w,f as Z,e as W}from"../chunks/BZ8UElFc.js";import{e as H,i as z,c as ee,d as ne}from"../chunks/VJ--3aYi.js";import{e as te}from"../chunks/aJf7s6Jm.js";import{c as se,b as ae,i as oe}from"../chunks/DzQqPtxv.js";import{s as ie,p as j}from"../chunks/BlokMLgL.js";import{s as $}from"../chunks/DVIlHIMN.js";import{c as re,C as le,a as ce}from"../chunks/BcIqYMi0.js";import{b as ue}from"../chunks/DCusFHyd.js";import"../chunks/HvopnIf4.js";var he=f('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function pe(i){var n=he();v(i,n)}var de=f('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function me(i){var n=de();v(i,n)}var ve=f('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function ge(i){const n=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var t=ve(),e=m(d(t),2);H(e,17,()=>n,z,(r,a)=>{let c=()=>l(a).tag,p=()=>l(a).text;var g=R(),s=D(g);te(s,c,!1,(o,u)=>{var y=X();_(()=>w(y,p())),v(u,y)}),v(r,g)}),h(t),v(i,t)}var fe=f("<p> </p>");function ye(i,n){var t=fe(),e=d(t);h(t),_(()=>w(e,`I am component A and my favorite number is ${n.number??""}.`)),v(i,t)}var be=f("<p> </p>");function we(i,n){var t=be(),e=d(t);h(t),_(()=>w(e,`I am component B and my name is ${n.name??""}.`)),v(i,t)}var xe=f('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function ke(i){const n={A:ye,B:we},t=[{component:"A",number:42},{component:"B",name:"Russell"}];var e=xe(),r=m(d(e),2);H(r,17,()=>t,z,(a,c)=>{const p=B(()=>n[l(c).component]);var g=R(),s=D(g);se(s,()=>l(p),(o,u)=>{u(o,ie(()=>l(c)))}),v(a,g)}),h(e),v(i,e)}var _e=f("<div><!></div>");function Ie(i,n){L(n,!0);let t=j(n,"root",3,null),e=j(n,"top",3,0),r=j(n,"bottom",3,0),a=j(n,"increments",3,100),c=j(n,"value",15,void 0),p=[],g=[],s=[],o=[],u;function y(){let b=0,k=0;for(let S=0;S<p.length;S++)p[S]>b&&(b=p[S],k=S);b>0?c(k):c(void 0)}function I(b,k){const S=P=>{P[0].isIntersecting;const V=P[0].intersectionRatio;p[k]=V,y()},G=e()?e()*-1:0,J=r()?r()*-1:0,N=`${G}px 0px ${J}px 0px`,U={root:t(),rootMargin:N,threshold:g};o[k]&&o[k].disconnect();const F=new IntersectionObserver(S,U);F.observe(b),o[k]=F}function A(){s.length&&s.forEach(I)}M(()=>{for(let b=0;b<a()+1;b++)g.push(b/a());s=u.querySelectorAll(":scope > *:not(iframe)"),A()}),M(()=>{e(),r(),A()});var x=_e(),C=d(x);$(C,()=>n.children??O),h(x),ae(x,b=>u=b,()=>u),v(i,x),E()}var Se=f('<div><p class="svelte-1sxgmm9"> </p></div>'),qe=f('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ae(i){let n=T(void 0);var t=qe(),e=d(t),r=m(d(e)),a=d(r,!0);h(r),h(e);var c=m(e,4);Ie(c,{get value(){return l(n)},set value(p){q(n,p,!0)},children:(p,g)=>{var s=R(),o=D(s);H(o,16,()=>[0,1,2,3,4],z,(u,y,I)=>{const A=B(()=>l(n)===I);var x=Se();let C;var b=d(x),k=d(b,!0);h(b),h(x),_(()=>{C=ee(x,1,"step svelte-1sxgmm9",null,C,{active:l(A)}),w(k,y)}),v(u,x)}),v(p,s)},$$slots:{default:!0}}),Y(2),h(t),_(()=>w(a,l(n)||"-")),v(i,t)}const je=`{
  "meta": {
    "title": "Comparisons as Predictable as the Sunrise",
    "description": "An analysis of 200,000 similes from popular fiction.",
    "url": "https://pudding.cool/2026/05/similes",
    "keywords": "simile, fiction, book, figurative, comparison"
  },
  "body": [
    {
      "section": "hero",
      "content": [
        {
          "type": "h1",
          "value": "<span>Comparisons</span><small><br>as <span>Predictable</span>  as<br> <span>the Sunrise</span></small>"
        },
        {
          "type": "text",
          "value": "<span class=dek>An analysis of 200,000 similes from popular fiction.</span>"
        },
        {
          "type": "text",
          "value": "<span class=byline>By <a href=https://pudding.cool/author/russell-samora>Russell Samora.</a> Design &amp; Illustration by <a href=https://pudding.cool/author/shelly-tan>Shelly Tan.</a>"
        },
        {
          "type": "TopperImages",
          "value": {
            "images": [
              {
                "src": "assets/topper/book.png",
                "alt": "Illustration of an open book.",
                "class": "book"
              },
              {
                "src": "assets/topper/pages-topleft.png",
                "alt": "Book pages flying through the air.",
                "class": "pages-left"
              },
              {
                "src": "assets/topper/pages-topright.png",
                "alt": "Book pages flying through the air.",
                "class": "pages-right"
              }
            ]
          }
        }
      ]
    },
    {
      "section": "intro",
      "content": [
        {
          "type": "img",
          "value": {
            "src": "assets/pages-intro.png",
            "alt": "Illustration of book pages floating through the air."
          }
        },
        {
          "type": "text",
          "value": "Similes are all around us. But, if you haven’t considered this figure of speech since grade school, here’s a refresher: similes compare a shared quality of two things, often using “like” or “as.”"
        },
        {
          "type": "text",
          "value": "I pulled every simile in the form <strong>“as ___ as ___”</strong> from tens of thousands of fiction books for the top 500 most common adjectives."
        },
        {
          "type": "text",
          "value": "To put you in a writer’s mindset, fill in the blank of the simile below."
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
            ],
            "images": [
              {
                "src": "assets/topper/pages-bottomleft.png",
                "alt": "Book pages flying through the air.",
                "class": "pages-left"
              },
              {
                "src": "assets/topper/pages-bottomright.png",
                "alt": "Book pages flying through the air.",
                "class": "pages-right"
              }
            ]
          }
        },
        {
          "type": "text",
          "value": "Above are real results from my extensive analysis of this specific form of simile. Once you start looking, you see them everywhere, from the classics like <cite>Jane Eyre</cite> to last year’s darling <cite>Heart the Lover</cite>."
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
                "quote": "They were of a greater variety this time—some <strong>as tiny as kittens</strong>, a few the size of wolves, and their skulls cobbled from every kind of animal.",
                "title": "Katabasis",
                "year": "2025"
              },
              {
                "quote": "My mouth has gone <strong>as dry as sawdust.</strong>",
                "title": "The Hunger Games",
                "year": "2008"
              },
              {
                "quote": "Sparrows, awake even at night, chittered in the rafters, high above men who sat with meager scatterings of field mushrooms and pond greens, buckets whose bottoms were populated with <strong>shrimp as slender as pins,</strong> and snails collected from village porches.",
                "title": "A Guardian and a Thief",
                "year": "2025"
              },
              {
                "quote": "It offered twenty-one guest rooms, commanding sea views, and a lobby fireplace <strong>as big as a truck.</strong>",
                "title": "All the Light we Cannot See",
                "year": "2014"
              },
              {
                "quote": "And Sunny remembered Ulla, who was so nonchalant about such matters that it made negotiations around sex <strong>as natural as a conversation between children playing in a sandbox.</strong>",
                "title": "The Loneliness of Sonia and Sunny",
                "year": "2025"
              }
            ]
          }
        },
        {
          "type": "text",
          "value": "I thought it would be a trivial exercise, but the more I poked around, the more questions I had."
        },
        {
          "type": "text",
          "value": "<small class=font-sans><strong>Why “as ___ as ___”:</strong> English has lots of ways to make comparisons. “Eyes like daggers,” “razor-sharp wit.” Most of these figurative forms are difficult to extract from text at scale. “As ___ as ___” is the exception because of its rigid structure. This makes it the most reliable to parse programmatically while minimizing the need for human judgement. It’s also surprisingly common in all forms of fiction. So while it’s just a sample of figurative language, it provides a quantifiable glimpse into the topic.</small>"
        }
      ]
    },
    {
      "section": "adjectives",
      "content": [
        {
          "type": "img",
          "value": {
            "src": "assets/section-illos/shakespeare.png",
            "alt": "Illustration of Shakespeare, stacking blocks with words to form the quote “To be or not to be, that is the question.”",
            "class": "section-illo"
          }
        },
        {
          "type": "h2",
          "value": "Every Adjective has a Fingerprint"
        },
        {
          "type": "text",
          "value": "So that we’re on the same page, here is a structural diagram for this form of simile:"
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
          "value": "First, a notable disclaimer. We’ll mostly just look at a simplified version of this form; <span class=underline-ground-light>grounds that are adjectives</span>, and <span class=underline-vehicle-light>vehicles that are nouns</span> (specifically mono/bi-grams, i.e., one or two words). This reduces the noise in favor of a clearer signal. For example:"
        },
        {
          "type": "blockquote",
          "value": "“You looked as <span class=underline-ground-light>surprised</span> as <span class=underline-vehicle-light>a senator who’s passed a lie detector test</span>.”"
        },
        {
          "type": "text",
          "value": "These one-offs can be fun and evocative if you know the context, but aren’t helpful when looking for data trends."
        },
        {
          "type": "text",
          "value": "In similes, every adjective has a distinct shape. If you look at the usage of the nouns that follow, you can see whether an adjective is dominated by a single cliché or has range. Here is the shape of <span class=underline-ground-light>dry</span> from our pop quiz."
        },
        {
          "type": "ShapeExample",
          "value": {
            "ground": "dry"
          }
        },
        {
          "type": "text",
          "value": "You’ll notice that the top 3&mdash;bone, desert, and dust&mdash;make up 43% of all usage, and there is a pretty quick drop-off after that with a long tail of rarer choices. Let’s zoom out to see the shape of more adjectives. Below, each tiny chart is an <span class=underline-ground-light>adjective</span>, and its bars show the top 20 <span class=underline-vehicle-light>nouns</span> it pairs with. I’ve included every adjective with at least 200 occurrences."
        },
        {
          "type": "ShapeAll",
          "value": {}
        },
        {
          "type": "text",
          "value": "Most adjectives’ shape have a similar skewed distribution, with some key distinctions:"
        },
        {
          "type": "Ul",
          "value": {
            "li": [
              "Gentler slopes tell us there are no dominant idioms.",
              "Many have a couple go-to nouns, then a long tail.",
              "The clichés are obvious, marked by a single tall spike that overshadows the others."
            ]
          }
        },
        {
          "type": "text",
          "value": "While some writers reach for a novel comparison to make it their own, most just want one that’s reliable and accessible. Check out this 1964 textbook <cite>Examine Your English</cite>, which implants the patterns from the start."
        },
        {
          "type": "img",
          "value": {
            "src": "assets/idioms.webp",
            "alt": "A list of idioms from the 1964 textbook Examine Your English.",
            "class": "border-decorative border-1"
          }
        },
        {
          "type": "text",
          "value": "Plenty of these idioms have endured the test of time, like “as <span class=underline-ground-light>busy</span> as a <span class=underline-vehicle-light>bee</span>” or “as <span class=underline-ground-light>fit</span> as a <span class=underline-vehicle-light>fiddle</span>,” though many have fallen out of fashion in recent decades, like “as <span class=underline-ground-light>drunk</span> as a <span class=underline-vehicle-light>lord</span>” or “as <span class=underline-ground-light>rich</span> as <span class=underline-vehicle-light>Croesus</span>.”"
        }
      ]
    },
    {
      "section": "nouns",
      "content": [
        {
          "type": "img",
          "value": {
            "src": "assets/section-illos/devil-cucumber.png",
            "alt": "Illustration of the Devil and an anthropomorphic cucumber, having tea together. The Devil’s tea cup is on fire, and the cucumber’s is cooling as the cucumber blows on it.",
            "class": "section-illo"
          }
        },
        {
          "type": "h2",
          "value": "Specialists and Generalists"
        },
        {
          "type": "text",
          "value": "Now let’s flip it around. While most adjectives lean on a small set of go-to comparisons, the nouns do the opposite work: a handful get reused constantly, often to make different points. Some are wielded as comparisons for dozens of different adjectives (generalists), while others are uniquely tied to a single quality (specialists)."
        },
        {
          "type": "text",
          "value": "Nothing exemplifies the specialist better than the cucumber. “As <span class=underline-ground>cool</span> as a <span class=underline-vehicle>cucumber</span>”</strong> is the paragon specialist."
        },
        {
          "type": "img",
          "value": {
            "src": "assets/pippi.webp",
            "alt": "A box from the comic Pippi Longstocking showing a speech bubble that has “as cool as a cucumber” in it.",
            "class": "border-decorative border-1"
          }
        },
        {
          "type": "text",
          "value": "“Cucumber” (or as I learned that it sometimes was referred to as <a href=https://historyfacts.com/world-history/fact/cucumbers-used-to-be-called-cowcumbers/ target=_blank rel=noreferrer>cowcumber</a>) doesn’t even crack the top ten in usage for any other adjective. On the other hand, you have the noun “hell,” which is a top-10 noun for 17 different adjectives."
        },
        {
          "type": "text",
          "value": "To quantify this, I looked at the diversity of adjectives for each noun using the <a href=https://en.wikipedia.org/wiki/Diversity_index#Simpson_index target=_blank rel=noreferrer>Simpson index.</a> Put plainly: if you pick two similes for a noun at random, what is the chance that the adjectives match? For example, if you were to randomly look at two sentences with “cool as a ___,” there is a 92% chance they are both “cucumber.”"
        },
        {
          "type": "Swarm",
          "value": {
            "axisLabel": "Predictability score <br>(Simpson’s diversity index)"
          }
        },
        {
          "type": "text",
          "value": "Most nouns are closer to being generalists, sometimes because they have some reliable pairings because of distinct qualities (e.g., glass is smooth, fragile, transparent) or because of conceptually similar adjectives (e.g., the sun is bright, brilliant, radiant)."
        },
        {
          "type": "text",
          "value": "But like most things, the interesting stuff lies at the extremes. Certain nouns are so tightly coupled with a single adjective that they’ve become idioms. While others are so versatile or overused they’ve become generic."
        }
      ]
    },
    {
      "section": "specific",
      "content": [
        {
          "type": "h2",
          "value": "Four Nouns, Four Stories"
        },
        {
          "type": "text",
          "value": "Let’s focus on four of the generalist nouns that each reveal something different about how writers use comparisons."
        },
        {
          "type": "h3",
          "value": "As <span class=underline-ground>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> as a <span class=underline-vehicle>Cat</span>"
        },
        {
          "type": "img",
          "value": {
            "src": "assets/cat.png",
            "alt": "Illustration of a cat stretching.",
            "class": "img-cat"
          }
        },
        {
          "type": "text",
          "value": "<span class=underline-vehicle>Cat</span> is a noun that is used to represent all sorts of different qualities. Writers use it to mean everything from graceful to weak."
        },
        {
          "type": "text",
          "value": "While most animals are pigeon-holed&mdash;think stubborn as a mule&mdash;cats span a huge range of observed behavior. And <span class=underline-vehicle>cat</span> is the most used noun for four different adjectives: nervous, active, agile, nimble."
        },
        {
          "type": "Cat",
          "value": {}
        },
        {
          "type": "h3",
          "value": "As <span class=underline-ground>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> as a <span class=underline-vehicle>Stone</span>"
        },
        {
          "type": "img",
          "value": {
            "src": "assets/stone.png",
            "alt": "Illustration of a stone with googly eyes attached.",
            "class": "img-stone"
          }
        },
        {
          "type": "text",
          "value": "Although <span class=underline-vehicle>stone</span> has one dominant physical quality where it tops seven adjectives (hard/solid/impenetrable, etc.,), where a cat is defined by the range of things it does, stone is often defined by what it lacks."
        },
        {
          "type": "text",
          "value": "These four buckets are mostly a bunch of different ways to say “nothing is happening here,” which makes <span class=underline-vehicle>stone</span> a perfectly blank, and oft-used canvas for a simile."
        },
        {
          "type": "Stone",
          "value": {}
        },
        {
          "type": "h3",
          "value": "As <span class=underline-ground>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> as a <span class=underline-vehicle>Child</span>"
        },
        {
          "type": "img",
          "value": {
            "src": "assets/child.png",
            "alt": "Illustration of an anxious kid, looking between two theater masks. One is smiling, the other crying.",
            "class": "img-child"
          }
        },
        {
          "type": "text",
          "value": "In fiction, <span class=underline-vehicle>a child</span> has become shorthand for two things; being defenseless and wholesome. The scale tips towards the defenseless side with the highest usage coming with “as <span class=underline-ground>helpless</span> as <span class=underline-vehicle>a child</span>.”"
        },
        {
          "type": "Child",
          "value": {}
        },
        {
          "type": "text",
          "value": "On the wholesome side, the top usage is “as <span class=underline-ground>innocent</span> as <span class=underline-vehicle>a child</span>.” But <span class=underline-vehicle>child</span> is only the second most-used noun for both of these adjectives, trailing the less evolved form: <span class=underline-vehicle>baby</span>."
        },
        {
          "type": "h3",
          "value": "As <span class=underline-ground>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> as <span class=underline-vehicle>Hell</span>"
        },
        {
          "type": "img",
          "value": {
            "src": "assets/hell.png",
            "alt": "Illustration of the devil, balancing a stack of different hats on his head.",
            "class": "img-hell"
          }
        },
        {
          "type": "text",
          "value": "<span class=underline-vehicle>Hell</span> is one of the most versatile nouns in the dataset. However, most of them have nothing to do with hell itself."
        },
        {
          "type": "text",
          "value": "“As <span class=underline-ground>hot</span> as <span class=underline-vehicle>hell</span>” makes sense, if you subscribe to the religious imagery. But “as <span class=underline-ground>cute</span> as <span class=underline-vehicle>hell</span>?” “As <span class=underline-ground>sexy</span> as <span class=underline-vehicle>hell</span>?” Similes usually work because the noun possesses the quality. <span class=underline-vehicle>Hell</span> often functions more as an amplifier."
        },
        {
          "type": "text",
          "value": "I was curious about when this phenomenon started. According to <a href=https://books.google.com/ngrams/ target=_blank rel=noreferrer>Google Books Ngram Viewer</a>, the first use of “sexy as hell” that I could verify was from the 1948 novel <cite>Innocent Villa</cite>:"
        },
        {
          "type": "blockquote",
          "value": "“She looks like an old harpy but thinks she’s <span class=underline-ground>sexy</span> as <span class=underline-vehicle>hell</span>.”</strong>"
        },
        {
          "type": "img",
          "value": {
            "src": "assets/innocent-villa-cover.webp",
            "alt": "Book cover for The Innocent Villa.",
            "class": "border-decorative border-1"
          }
        },
        {
          "type": "text",
          "value": "If we want to get pedantic, the first use with the exact structure (“as _ as _”) was from the 1954 novel <cite>The Refuge:</cite>"
        },
        {
          "type": "blockquote",
          "value": "“‘Any woman with eyes like hers gets a reputation for being as  <span class=underline-ground>sexy</span> as  <span class=underline-vehicle>hell</span>, old boy.’”"
        },
        {
          "type": "text",
          "value": "This makes <span class=underline-vehicle>hell</span> pretty unique in the dataset. Most nouns earn their place by embodying something, whereas hell just became another way to say “very.”"
        }
      ]
    },
    {
      "section": "irony",
      "content": [
        {
          "type": "img",
          "value": {
            "src": "assets/section-illos/dad-swift.png",
            "alt": "Illustration of a tired and bored dad at a Taylor Swift concert. He’s leaning against a barricade, looking off into the distance as the crowd behind him cheers and dances.",
            "class": "section-illo"
          }
        },
        {
          "type": "h2",
          "value": "The Ironic Ones"
        },
        {
          "type": "text",
          "value": "Not all similes play it straight. Take the classic “as <span class=underline-ground-light>clear</span> as <span class=underline-vehicle-light>mud</span>.” It inverts the expectation by using a contrasting quality of the noun, usually for humor. The artistry deepens as the comparison gets more specific."
        },
        {
          "type": "blockquote",
          "value": "“He looks about as <span class=underline-ground-light>happy</span> as <span class=underline-vehicle-light>a dad at a Taylor Swift concert</span>, but at least he’s in control of his rage.”"
        },
        {
          "type": "text",
          "value": "<em>(As a dad, this would be me.) </em>"
        },
        {
          "type": "text",
          "value": "While these are a small subset of the dataset, a kind of plamigerent counterculture of the simile world, they often paint more vivid and memorable pictures. They tend to work best with positive-sentiment adjectives, setting up the noun as the punch line."
        },
        {
          "type": "Irony",
          "value": {}
        },
        {
          "type": "img",
          "value": {
            "src": "assets/pages-ender.png",
            "alt": "Book pages flying through the air."
          }
        }
      ]
    },
    {
      "section": "method",
      "content": [
        {
          "type": "h2",
          "value": "Data and Methods"
        },
        {
          "type": "text",
          "value": "For this project, we focused on the most recognizable form: classic \\"as ___ as ___\\" similes. Those give us a clean ground (e.g., “white”) paired with a clean vehicle (e.g., “snow”) which makes them easier to count, compare, and cluster."
        },
        {
          "type": "text",
          "value": "I used a natural language library to scan grammatical patterns looking for the simile form, restricted to the top 500 most-used adjectives according to this <a href=https://www.wordfrequency.info/intro.asp target=_blank rel=noreferrer>word frequency corpus.</a>"
        },
        {
          "type": "text",
          "value": "A lot of time was spent filtering out junk. Common idioms (“as soon as”), structural stuff, like ending in pronouns (“as tall as him”) or proper nouns (“as fast as John”) or possessives (“as nasty as their reputation”). Basically similes that weren’t figurative comparisons. A second pass was done via three LLMs (Gemini, OpenAI, Anthropic) to help detect false positives, and flag whether it was a figurative or literal simile. LLMs were also used to extract and normalize the tenor and vehicle."
        },
        {
          "type": "text",
          "value": "A handful of genuine similes probably got caught in the net and filtered out, but I did a lot of spot-checking and refining the scripts to minimize these occurrences."
        },
        {
          "type": "text",
          "value": "The most involved part of the pipeline was vehicle aggregation. It can be both an obvious and blurry line of what should get binned together. For example, “wolf, “the wolves,” and “a pack of wolves,” are the same figurative image to humans, but to a computer, those are four different items. Alternatively, is a “kitten” the same or different from a “cat?” (I chose different). There were many techniques I combined to solve this problem, including normalization, embedding similarity, synonym detection, containment checks, and LLM judging. Generally speaking I leaned towards being conservative so things weren’t falsely merged."
        },
        {
          "type": "text",
          "value": "The dataset is not perfect, but a good sample of how writers compare things in English-language fiction. It is accurate in aggregate but imperfect at the sentence level."
        },
        {
          "type": "text",
          "value": "Most ranking stats referenced in the text related to noun usage was based on filtering down to the ones with 100+ occurrences in the dataset."
        }
      ]
    }
  ]
}`;var Te=f('<p> </p> <progress max="100"></progress>',1);function Ce(i,n){let t=j(n,"label",3,"A"),e=j(n,"value",3,0);var r=Te(),a=D(r),c=d(a,!0);h(a);var p=m(a,2);_(()=>{w(c,t()),ne(p,e())}),v(i,r)}var De=f('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Me(i,n){L(n,!0);const{body:t}=re,e={Test:Ce};var r=De(),a=m(d(r),2),c=d(a),p=d(c,!0);h(c),h(a);var g=m(a,2);le(g,{get components(){return e},get body(){return t}}),h(r),_(s=>w(p,s),[()=>je.replace(/\t/g," ")]),v(i,r),E()}const Be=(i,n=O)=>{var t=Le(),e=d(t),r=d(e,!0);h(e);var a=m(e,2),c=d(a,!0);h(a),h(t),_(()=>{w(r,n().name),w(c,n().age)}),v(i,t)};var Le=f('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Ee=f('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function He(i,n){L(n,!0),j(n,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let e=T(0),r=B(()=>l(e)*2),a=B(()=>l(e)*2),c=T(0);M(()=>{q(c,l(e)*2)});var p=Ee(),g=m(D(p),4),s=m(g,2),o=d(s);h(s);var u=m(s,2),y=d(u);h(u);var I=m(u,2),A=d(I);h(I);var x=m(I,4),C=d(x);$(C,()=>n.children??O),h(x);var b=m(x,4),k=m(b,4);H(k,21,()=>t,z,(S,G)=>{Be(S,()=>l(G))}),h(k),_(()=>{w(o,`${l(e)??""} doubled is ${l(r)??""} (derived)`),w(y,`${l(e)??""} doubled is ${l(a)??""} (derived by)`),w(A,`${l(e)??""} doubled is ${l(c)??""} ($effect)`)}),W("click",g,()=>K(e)),W("click",b,()=>n.random(Math.floor(Math.random()*10))),v(i,p),E()}Z(["click"]);const ze=(i,n)=>{let t=T(Q(i)),e=T(null),r=T(!0),a=T(void 0);const c=(s=!0)=>{q(r,s,!0),s===!0&&(q(a,null),q(e,null))},p=async()=>{try{const s=await fetch(l(t),n);if(!s.ok)throw new Error(`Unexpected error occurred (status ${s.status})`);let o;if(l(t).includes(".csv")){const u=await s.text();o=ce(u)}else o=await s.json();return[null,o]}catch(s){const{errorMessage:o="Unexpected error eccurred"}=s;return[o,null]}},g=async s=>{c(!0);const[o,u]=await p();if(s===l(t)){if(o){c(!1),q(a,o,!0);return}c(!1),q(e,u,!0)}};return M(()=>{g(l(t))}),{get data(){return l(e)},get loading(){return l(r)},get error(){return l(a)},get url(){return l(t)},set url(s){l(t)!==s&&q(t,s,!0)}}};var Ge=f("<p>loading data...</p>"),Oe=f("<p> </p>"),Re=f("<p>data loaded</p> <pre> </pre>",1),Fe=f('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Pe(i,n){L(n,!0);const t=`${ue}/assets/demo/test.csv`,e=ze(t);M(()=>{});var r=Fe(),a=m(d(r),2),c=d(a);{var p=o=>{var u=Ge();v(o,u)},g=o=>{var u=Oe(),y=d(u);h(u),_(()=>w(y,`error: ${e.error??""}`)),v(o,u)},s=o=>{var u=Re(),y=m(D(u),2),I=d(y,!0);h(y),_(A=>w(I,A),[()=>JSON.stringify(e.data,null,2)]),v(o,u)};oe(c,o=>{e.loading?o(p):e.error?o(g,1):o(s,-1)})}h(a),h(r),v(i,r),E()}var We=f('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function $e(i){let n=T(0);function t(y){console.log(y)}var e=We(),r=m(d(e),2);pe(r);var a=m(r,2);me(a);var c=m(a,2);ge(c);var p=m(c,2);ke(p);var g=m(p,2);Me(g,{});var s=m(g,2);Pe(s,{});var o=m(s,2);Ae(o);var u=m(o,2);He(u,{random:t,get value(){return l(n)},set value(y){q(n,y,!0)}}),h(e),v(i,e)}function sn(i){$e(i)}export{sn as component};
