---
title: 'Room System Post Mortem'
description: 'Post graduate build analysis of the room system'
pubDate: 'April 23 2024'
heroImage: '/blog-placeholder-3.jpg'
---

Gnomad's seamless room system was build early on by Kyle. He did a fantastic job for what we knew, but now we know more. We have recently finished our "Graduation Build." This serves as our final build for our senior capstone at SSU. No that it's over, we need to dissect the project and find out what works and what doesn't. 

While the room system was functional for the scale we were operating at, it isn't practical for the map size we need. There are too many little frustrations. 


```markdown
- Scene References
- Door Connections
- Visual Bugs
```

The biggest head ache was connecting the rooms. The simplest way we could find to connect the rooms involved a separate room info scriptable object. This object had to be manually updated with the door locations of each room, the room info objects of the other rooms, as well as a serialized reference to the owning scene. Then a reference to the room info had to be created inside of the scene itself. 

While it was hard find a way to connect our scenes functionally without all these references, they are far from ideal. Between the manually entered door locations and redundant back-and-forth style connections, there were at least 4 (usually more) ways to improperly connect a new room. 

Our plan moving forward is twofold: first, we will explore ways to remove redundancies. Gnomad was originally created as a school project, so a tight schedule was required. With no more such deadlines, we have the time to talk through this problem together.

The other avenue we plan to explore is the creation of another robust editor script. This script would allow you to create new rooms from an editor window. The rooms would be filled in with the proper scene and door references on creation time. 

Another thorn in my side during the creation of these rooms has been numerous visual bugs. While the technical system invited game breaking bugs, it also lead to a lot of visual issues. Assets from adjacent rooms had a habit of overlapping where they aren't wanted. There was also an issue with pop-in. Pop-in happens when some part of a room loads while on screen. This can happen if two rooms are physically close, but not directly connected. The second room wont load until the player enters a third scene which connects the two. 

These issues are both caused by the continuous nature of our room system. Other games, like Hollow Knight, only display one room at a time. This type of room system could be called discrete. A continuous system sounds nice on paper, but these visual bugs are quite annoying to catch and resolve on a large scale. They can only be found by loading in other rooms while building the current room. 

All of these issues are avoidable. Practically speaking though, they waste too much time. These hurdles slow down development too much for the scale of map we want to make. We are debating between two potential paths.

```markdown
- Reworked Design Guidelines
- Switch to a Discrete Room System
```

Better design guidelines could minimize these issues, but they would have to be carefully created, and consciously followed. It would still take some effort to ensure seamless edges with no visual anomalies. 

The option we are leaning towards is a discrete room system. This option is much more achievable with our team size and project scope. The main drawback is the development time cost. A complete overhaul of the room system could take quite a bit of man-power. It's hard to justify this when we already have a working room system. Ultimately, this cost will probably be a necessary evil. 

Issues like this always seem obvious in hindsight. I want to say this could have been avoided with better planning, but it probably wouldn't have been. Sometimes the issues with a system are not obvious until that system is tried out. That was the case here. Now that know, we can move forward with experience and confidence. 