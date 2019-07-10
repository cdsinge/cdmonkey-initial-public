---
path: "/cat/this-website"
date: "2019-07-09"
title: "This website"
---

###### Technologies
On creating this website, I thought about hand-coding the HTML, CSS and Javascript, but I remembered that someone said that they thought we wouldn't be manually writing HTML (I suspect this may have been Sir Tim Bernes Lee but I've no evidence so don't want to misattribute).  I instead looked at what tooling exists and seems popular (having already decided on a static site).

###### Domain name and hosting
I used NameCheap for my domain name (I'd have chosen Google Domains but it doesn't allow registration of ".uk" domains). All the providers seemed quite similar with varying pros/cons.
I used Google Cloud for static website hosting.

###### Tools
I decided to go with Gatsby/ReactJS as I'd narrowed down my choice to a static site, and wanted more familiarity with React.  The Gatsby tutorials are quite nice.  I understand why it takes its approach but it still feels overly complex to me, with a lot of clever magic and "syntactic sugar" that takes time to get familiar with.  As a result, I took the pragmatic approach of only finding what I need, and looking at very similar examples, but I'd not yet be comfortable writing it from scratch or explaining some of the syntax.  As a non-expert, it's not immediately clear which <i>language</i>'s syntax is currently being used in an expression.  The MIT license to me is a little too restrictive in this case, as it's a little awkward to separate content and what is covered by Gatsby and the Gatsby tutorial I looked at, and this is the main reason I've decided against continually open-sourcing this website, in case I ever expand it to have not-so-open content.  (Not overly taxing, I think it'd basically require a comment in every file, but non-optimal)

###### Verdict
Writing manual HTML/CSS, maybe with lightweight templating, would have been much faster for this site.  The power only really seems to come with much larger sites, but using Gatsby didn't take too much longer or add too much complexity.  This is purely my use case, it's other benefits are quite hard to measure the value of, e.g. being fast, having SEO optimisation (which other users may find more important).
