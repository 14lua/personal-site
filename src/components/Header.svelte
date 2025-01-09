<script>
  import { base } from "$app/paths";

  export let y;

  let tabs = [
    { name: "About", link: "#about" },
    { name: "Music", link: "music" },
    // {name: 'Interact', '#interact'},
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " +
    (y > 0
      ? " py-4 bg-black border-gray-950"
      : " py-4 bg-transparent border-transparent")}
>
  <h1 class="font-medium">
    <a href={base} target="_self"><b class="font-bold poppins">Lua</b> Music</a>
  </h1>
  <div class="sm:flex items-center gap-4 hidden">
    {#each tabs as tab}
      <a href="{base}/{tab.link}" class="duration-200 hover:text-green-300">
        <p>{tab.name}</p>
      </a>
    {/each}
    <a
      href="https://bsky.app/profile/luafourteen.bsky.social"
      target="_blank"
      class="luaButton"
    >
      Talk to me
    </a>
  </div>
</header>
