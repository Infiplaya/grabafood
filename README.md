# Grab a food
[https://grabafood.vercel.app/](https://grabafood.vercel.app/)

## Description
I decided to do something more complex this time and an idea for an app that let's you pick up new recipes came up when I was hungry. The whole idea of this app is pretty simple: you click on the start button, and have to options: Search by the dish you would like to see a recipe of, or if you can't decide, like me - just choose a random recipe. The app will display to you the image of the food, it's name, list of ingredients needed, and the instructions.

## Walkthrough

### Update
I'm in the middle of changing the style of this website. After that I will probably try to handle better fetching data because it's poor right now.
#### Update v2
I've change the style, now I practically finished changing the API fetching. I'm using trpc now. I've tried it in my other project and really like it.

This is the preview:
![preview](./public/demo.gif)

If you want to get a recipe, you will get two options: search by the name, or get a random one. Decide!

If you choose option 1, the app will display to you recipes that match your query. Now just click on one of them that you like to get your recipe. Congrats!

Option 2 looks similar, but you just get a random recipe faster.

## Stack

- [T3Stack](https://init.tips/) - Interactive CLI to quickly set up an opinionated, full-stack, typesafe Next.js project.
- [Next.js](https://nextjs.org/) - A React framework that supports hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
- [NextAuth.js](https://next-auth.js.org/) - Authentication for NextJS
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework. My go to for CSS.
