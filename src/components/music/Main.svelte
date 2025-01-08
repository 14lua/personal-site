<script>
    let names = ["ENDORPHIN", "ACCELERATE", "two eyes open, welcome"];
    let filenames = ["endorphin.jpg", "accelerate.jpg", "twoeyes.jpg"];
    let descriptions = [
        "Wave music had it's influence on me and I continued developing my skill with this genre. It feels like a mix of heavy trap and ambient. Emotional and loud.",
        "I got into Wave and made this track in the style of classic Hardwave. This was actually made in one big rush of inspiration over only a few days.\nNot my proudest work, but I learnt a lot.",
        "This was my first ever track. I wanted to go with something simple so this is a very atmospheric and thoughtful track that was\nmeant to set the mood for my entire project."
    ];
    let embeds = ["", "", "https://open.spotify.com/embed/track/6MP728l6GUAIVqqvoktAGd?utm_source=generator&theme=0"]
</script>

<main class="flex flex-col pl-24 pr-24 items-center justify-center">
    {#each names as name, i}
        <div class="grid grid-cols-2 w-[80%] h-[calc(100vh-75px)] items-center">
            <div class="flex">  
                <img src="../images/{filenames[i]}" alt="" class="max-h-[50vh]"/>
            </div>
            <div class="flex flex-col gap-12 justify-center">
                <div>
                    <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">{name}</h2>
                </div>
                <div>
                    <p>{descriptions[i]}</p>
                </div>
            </div>
        </div>
    <div class="w-[45%]">
        <iframe style="border-radius:12px" src="{embeds[i]}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    {/each}
</main>