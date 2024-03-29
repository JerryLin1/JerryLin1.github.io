export const projects = [
    {
        title: "Angry Rhyme Town",
        years: "2021",
        image: "angryrhymetown.png",
        desc: `An online social game that you can play in the browser. Compete against your friends to see who has the best bars! Angry Rhyme Town has an avatar customizer, lobby with chat, and uses TTS to rap out your bars.

      This is the first large project in which I had a separate front-end and back-end, and it was a lot of work figuring out how servers work.

      Made using React.js for the front end, and socket.io and Express.js for the backend. We also used <a target="__blank" href="https://responsivevoice.org/">Responsive Voice API</a> for the TTS rapping.`,
        github: "https://github.com/JerryLin1/AngryRhymeTown",
    },
    {
        title: "Public Collaborative Paint App",
        years: "2021",
        image: "socketiodrawing.png",
        desc: `A collaborative drawing application that updates in real time whenever anyone makes a change. I made this so I could try out socket.io.
      
      Note that it is completely public and unmoderated, so anyone can draw whatever they want.
      
      Made using p5.js for the front end, and socket.io and Express.js for the backend.`,
        link: "https://socket-io-drawing.herokuapp.com/",
        github: "https://github.com/JerryLin1/Socket.ioDrawingTest",
        hidden: true,
    },
    {
        title: "Maze generator",
        years: "2021",
        image: "generator.png",
        desc: `A collection of various maze generation algorithms, as well as other miscellaneous things. Current features include ability to change iteration speed, cell size, time elapsed, and the ability to change the number of rows and columns. Planning to add a maze solver as well using various traversal algorithms.
      
      Made using vanilla Javascript Canvas.`,
        link: "https://jerrylin1.github.io/CanvasGenerations",
        github: "https://github.com/JerryLin1/CanvasGenerations",
    },
    {
        title: `This portfolio`,
        years: `2021`,
        image: "website.png",
        desc: `This page here! I made this website to show off some of the things that I have been doing. It is made using ReactJS and CSS. The content of the website is loaded in as JSON files, and automatically generated. This lets me easily maintain it and add new things.`,
        github: "https://github.com/JerryLin1/JerryLin1.github.io",
    },
    {
        title: `Northern Hackers`,
        years: `2021`,
        image: "northernHackers.png",
        desc: `You and your friends will play as lumberjacks as you chop down trees, while avoiding giant angry beavers. Whoever gets the most wood at the end of each round gets a point!
      
      This game was made in 36 hours days for Hack the North 2021, and was my first attempt at multiplayer. My teammate and I had never done anything with networking before, so we had a hard time understanding many of the basic concepts. Because of the short time limit for this hackathon, this game is full of bugs (But at least you can experience it with friends). 
      
      Made in Unity using C#.`,
        github: "https://github.com/p-han-tom/NorthernHackers",
        devpost: "https://devpost.com/software/northernhackers",
    },
    {
        title: `Blast to the Past`,
        years: `2020`,
        image: "bttp.png",
        desc: `Play through 15 puzzling levels with your rewinding abilities... you can rewind yourself to a previous position, or use your rewind gun to blast enemies to the past.
      
      This game was made in 5 days for the Brackeys 2020.2 Jam. Blast to the Past placed in the top 10% overall out of around 1.8k entries.
      
      Made in Unity using C#.`,
        github: "https://github.com/p-han-tom/BrackeysGameJam4",
        itchio: "https://project-games.itch.io/blast-to-the-past",
    },
    {
        title: `Skelascent`,
        years: `2020`,
        image: "skelascent.png",
        desc: `Play as a skeleton ascending an endless pit while escaping from a giant monster and throwing bones at enemies. 
      
      This was the first finished game I worked on. It was made in 72 hours for the ScoreSpace #9 Jam. Out of around 120 entries, Skelascent placed 4th overall and 1st place in aesthetics! This project taught me a lot about the general workflow, and how important time management, communication, and teamwork was.

      I am currently developing a port of this game to mobile devices.

      Made in Unity using C#.`,
        github: "https://github.com/JerryLin1/ScoreSpaceJam9",
        itchio: "https://bootleben.itch.io/skelascent",
    },
    {
        title: "WIP Platformer Prototype",
        years: "2021",
        image: "platformerProto.gif",
        desc: `This is quick platformer prototype I made to test out some ideas. You play as a skeleton who can run, jump, slide on walls, and swing around the test arena using a grappling hook.
      
      Made in Unity using C#.`,
        itchio: "https://bootleben.itch.io/platformerproto",
        hidden: true,
    },
];
