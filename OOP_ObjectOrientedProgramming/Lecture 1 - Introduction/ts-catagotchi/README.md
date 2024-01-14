# Assignment: Catagotchi (Single Class)

> Hi! You just spawned a new *Catagotchi*. Feed it or it will die. If you leave it, it will die. If it doesn't get enough sleep, it will die. Play with it or it will get bored and wreck your browser or format you hard drive. If you feed it too much it will get sick and ruin your computer. Have fun.

The **[Tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi)** was all the rage in the late 1990s. Every child (and many adults) had have one of these virtual pets (remember fidget spinners?). Originally designed in Japan, the Tamagotchi craze quickly swept around the world. You had to feed it, play with it, and in return you could watch it grow until the battery died. Of course there were various knock-off Tamagotchis too. And that is what we will design today.

Since cats can be just as attention seeking and high maintenance as Tamagotchis, we will be designing a Catagotchi.

## Practical Cats

Catagotchi lives in your browser. As long as the page is open (and it has not died, yet) it will continue to do its thing. Catagotchi has three major attributes, namely: energy, hunger, and mood. Each of these exist on a scale of 10. 

![catagotchi-scales.png](assets/catagotchi-scales.png)

Every game tick, Catagotchi's state will change. For example:

- If it's not sleeping, its `energy` will go down.
- If it has not been eating, its `hunger` will go up.
- If it is bored, its `mood` will go down.
- If you play with it, its `mood` will go up, but `energy` will go down.
- If it's sleeping, its `energy` will go up, but `hunger` will also go up.
- If you feed it, its `hunger` will go down.

Feel free to change and experiment as you want.

### Dramatical Cats 
Based on the Catagotchi's state, it will have a status.

Your Catagotchi will be **Okay** if 
 - **Energy** is less than 4
 - **Mood** is less than 4
 - **Hunger** is more than 6

You Catagotchi will be **Unhappy** if
 - **Energy** is less than 2
 - **Mood** is less than 2
 - **Hunger** is more than 8

Otherwise your Catagotchi is **Happy**.

## Pragmatical Cats

You will start by building a procedural implementation of the Catagotchi.

### Metaphorical Cats

In `src/app.ts` you will find the Catagotchi class with a couple of functions already built. Of the functions already there, the most important one is the `gameTick()` function that will be called every 1.5 seconds. Here you can automate whatever needs to happen automatically. 

### Implementing Methods

You then need to implement the following methods:

- `feed()`, `play()`, and `sleep()`. These functions affect the Catagotchi's energy, hunger, and mood. You can decide by how much.
- `catDied()` If you Catagotchi's hunger reaches 10, or its energy reaches 0, you Catagotchi will die. This function will then need to be called.
- `updateCat()` Catagotchi getting tired? Catagotchi getting hungry? Update the relevant attributes. Also update if the cat died.
- `updateScreen()`  Update the relevant display elements on the page.

## Fanatical Cats

Some ideas
- More interactions with your cat that might manipulate a more complex internal state.
- Make it more fun to play with the cat, instead of pushing a button.
- Improve visual representation of the cat and its state (for example, using images).