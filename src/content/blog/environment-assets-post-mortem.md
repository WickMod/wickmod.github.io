---
title: 'Environment Assets Post Mortem'
description: 'The good, the bad, and the ugly of our props'
pubDate: 'April 23 2024'
heroImage: '/blog-placeholder-3.jpg'
---

The assets used in gnomad follow a simple format. Their line weights are consistent. They are almost always colored flatly. Most of the visual interest comes from the way they are rendered in engine. These limitations are absolutely necessary for our team size. I am the only artist, but I'm also the project manager, technical artist, systems/pipeline developer, and a gameplay programmer. 

We all wear a lot of hats (just like gnomes!), so efficiency and scalability are crucial to the projects success. Initially, I wanted to go for a painterly style. I even considered painting levels by hand with watercolors! I quickly found out that anything more complex than our current style would have been impossible to achieve with our course load. Even cell shaded light and shadow are reserved for objects with special materials, like metallic chains. 

Now let us consider the cons of the current art style and assets. If I were starting over again, I would not vary the line color of assets. Just pure black lines for this artist *points thumbs at self.* I already dropped line color for anything with animation. Coloring the lines does not occupy *that much* time, but the time adds up. Additionally, there are times when the ideal line color is hard to resolve. Assets with multiple materials need to either pick a primary color, or have multicolored lines. These instances are more of a headache than they need to be.

Another unnecessary burden comes in the form of open edges. Some assets have open portions that aren't meant to be seen. The grass, for instance, has no line work on the bottom. This creates an burden on the level designer. In the future, all assets should be viewable from all angles. This doesn't take much extra effort drawing, but it saves a lot of time in level designing. 

Another frequent issue was a lack of smaller environmental set pieces. The large grass knolls frequently intruded into neighboring scenes. This won't be an issue if we decide to switch to a discrete room system (see Room System Post Mortem), but it's certainly an issue now. Either way, we are going to need some smaller assets.

Some larger assets are also a must. Background fillers that add some visual interest and break up the pattern would go a long way. Most of the sprites in the game are actually the exact same grass knoll sprite scaled, rotated, and recolored. That leads me to the biggest con of our art style. 

Any significant scaling or stretching of our sprites is extremely obvious. Painterly sprites can get away with a lot. Our sprites have a uniform line weight that quickly looks bad with any stretching. That means any props with multiple sizes need multiple unique sprites. 