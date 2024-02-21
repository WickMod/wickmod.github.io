---
title: 'Prop System'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

Gnomad has sprites. Not just a few. Gnomad has A LOT of sprites. Each room could have hundreds or thousands of hand-placed sprites strewn about. Anybody who has spent time developing code bases knows that we can’t just throw sprites straight into the level. That would have some major code smell (art smell?). What if we need to edit our red mushroom to be blue? We would have to go to every individual room and swap out each sprite by hand. This looks like a job for objects. But what exactly should these objects do? Let’s break it down!





```markdown
- Provide an inheritance based system for defining prop prefabs 
- Allow us to swap out one sprite instead of thousands
- Provide a socket for adding extra components and scripts 
```

To achieve this effect, we implemented several abstract prefabs. The static prop prefab is the parent for all other props. Each of the other props is created as a variant of static prop. This structure is similar to a parent-child relationship.
 
Updates to static prop should cascade down and update all other props. From these basic abstract props, all prop assets are derived. If we want to add a script to wobble bushes as you run through them, we could easily do so from the staticPropFoliage prefab. In fact, we did!

Aside from expandability and maintenance, this hierarchical structure makes it easier to manage props within an environment framework. If we want to process lots of props at once, and treat them all as the same type of game object, it helps to have a common ancestor. This ensures a standard interface. It would suck if all of our bushes store its Sprite Renderer as a component of their base object, but one bush wants to be different. That special bush that stores its Sprite Renderer on a child object has now made it prohibitively difficult to find its sprite. 

Sure, we could loop through every child on every prop until we found a sprite. That technically works. Without a standardized system, what’s our guarantee that we got the right sprite. Plus, we’ve wasted precious precious CPU cycles trying to find a damn picture of a rock. It's just better for everybody if all the props play nice.
Prop seeder scripts can be attached to a prop. This script takes a prop pool, and randomly instantiates one prop from the pool on edit time. This creates free variety in our props as we place them. Because they are randomized in the editor, they will stay consistent in the game. 
