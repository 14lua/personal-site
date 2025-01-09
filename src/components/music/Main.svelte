<script lang="ts">
  import { tracksStore } from "../../stores/tracks";
  let tracks = $tracksStore?.tracks;
</script>

<main class="flex flex-col pl-24 pr-24 items-center justify-center">
  {#if tracks}
    {#each tracks as track, i}
      <div class="grid grid-cols-2 w-[80%] h-[calc(100vh-75px)] items-center">
        <div class="flex pr-20">
          <img
            src="../images/{track.filename}"
            alt=""
            class="max-h-[50vh] whiteGlow"
          />
        </div>
        <div class="flex flex-col pl-20 gap-8 justify-center">
          <div>
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
              {track.name}
            </h2>
          </div>
          <div>
            <p>{track.description}</p>
          </div>
          <div>
            <a href={track.link} target="_blank" class="luaButton">
              Listen on Spotify &rarr;
            </a>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</main>
