<script lang="ts">
  import { cubicInOut, cubicOut } from "svelte/easing";
  import { tracksStore } from "../../stores/tracks";
  import { scale, fade } from "svelte/transition";

  let tracks = $tracksStore?.tracks;

  let showModal = $state(false);
  let selectedImage = $state('');

  function openModal(imageSrc: string) {
    selectedImage = imageSrc;
    showModal = true;
  }

  function closeModal(event: Event) {
    if (event.target === event.currentTarget) {
      showModal = false;
    }
  }
</script>

<main class="flex flex-col pl-24 pr-24 align-middle items-center justify-center">
  {#if tracks}
    {#each tracks as track, i}
      <div class="flex flex-col gap-y-12 gap-x-24 md:flex-row w-[80%] h-[calc(100vh-75px)] items-center justify-center">
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div>
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <img
            src="../images/{track.filename}"
            alt=""
            class="cursor-pointer max-h-[80vh] transform transition-transform duration-200 ease-in-out hover:scale-110 whiteGlow"
            onclick={() => openModal("../images/" + track.filename)}
          />
        </div>
        <div class="flex flex-col gap-8 justify-center">
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

  {#if showModal}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      transition:fade={{ duration: 300 }}
      onclick={closeModal}
    >
    <div
    class="relative transform scale-95"
    transition:scale={{duration: 300, easing: cubicOut }}>
      <img src={selectedImage} alt="Enlarged" class="max-w-[90vw] md:max-w-[40vw] object-contain" onclick={closeModal}>
    </div>
  </div>
  {/if}
</main>
