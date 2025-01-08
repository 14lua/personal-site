<script>
    export let y;

    let tabs = [
        {name: 'About', link: '/#about'},
        {name: 'Music', link: 'music'},
        // {name: 'Interact', '#interact'},
    ]
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid ' + (
    y > 0 ? ' py-4 bg-black border-gray-950' : ' py-4 bg-transparent border-transparent'
)}>
    <h1 class="font-medium">
        <b class="font-bold poppins">Lua</b> Music
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab}
            <a href={tab.link} class="duration-200 hover:text-green-300">
                <p>{tab.name}</p>
            </a>
        {/each}
        <a 
        href="https://bsky.app/profile/luafourteen.bsky.social"
        target="_blank"
        class="greenShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-gray-950">
            <div class="absolute top-0 right-full w-full h-full bg-green-950 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
            <h4 class="relative z-9">Talk to me</h4>
        </a>
    </div>
</header>