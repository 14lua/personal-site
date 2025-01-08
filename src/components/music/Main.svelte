<script>
    let names = ["ENDORPHIN", "ACCELERATE", "two eyes open, welcome"];
    let filenames = ["endorphin.jpg", "accelerate.jpg", "twoeyes.jpg"];
    let descriptions = [
        "Wave music had it's influence on me and I continued developing my skill with this genre. It feels like a mix of heavy trap and ambient. Emotional and loud.",
        "I got into Wave and made this track in the style of classic Hardwave. This was actually made in one big rush of inspiration over only a few days.\nNot my proudest work, but I learnt a lot.",
        "This was my first ever track. I wanted to go with something simple so this is a very atmospheric and thoughtful track that was\nmeant to set the mood for my entire project.",
    ];
    let links = [
        "",
        "https://open.spotify.com/track/3pXeUJ5L6Tkqdnuj8mFaps?si=94f0f97e2074436b",
        "https://open.spotify.com/track/6MP728l6GUAIVqqvoktAGd?si=15d2439ab2d34e8a",
    ];
</script>

<main class="flex flex-col pl-24 pr-24 items-center justify-center">
    {#each names as name, i}
        <div class="grid grid-cols-2 w-[80%] h-[calc(100vh-75px)] items-center">
            <div class="flex pr-20">
                <img
                    src="../images/{filenames[i]}"
                    alt=""
                    class="max-h-[50vh] whiteGlow"
                />
            </div>
            <div class="flex flex-col pl-20 gap-8 justify-center">
                <div>
                    <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                        {name}
                    </h2>
                </div>
                <div>
                    <p>{descriptions[i]}</p>
                </div>
                <div>
                    <a href={links[i]} target="_blank" class="luaButton">
                        Listen on Spotify &rarr;
                    </a>
                </div>
            </div>
        </div>
    {/each}
</main>
