<script lang="ts">
  import { tracksStore } from "../stores/tracks";
  let tracks = $tracksStore?.tracks;
  let firstTrackFilename = tracks ? tracks[0].filename : "";
</script>

<main class="flex flex-col flex-1 p-4 justify-center items-center">
  <section
    id="intoPage"
    class="flex flex-col lg:flex-row gap-x- py-8 sm:py-14 h-[calc(100vh-75px)] justify-between items-center"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl pr-12">
        Welcome to the<br /><span class="poppins text-green-700"
          >dark side of the moon</span
        >
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        Thank you for visiting <i class="fa-solid fa-heart"></i>
      </p>
    </div>
    <div class="flex relative shadow-2xl place-items-center">
      <a href="/music" target="_self">
        <img
          src="images/{firstTrackFilename}"
          alt="Profile"
          class="object-cover z-[2] max-h-[50vh] whiteGlow blur-sm hover:blur-none duration-300 ease-in-out"
        />
      </a>
    </div>
  </section>

  <section
    id="about"
    class="py-20 lg:py-32 flex flex-col gap-24 h-[100vh] justify-center items-center"
  >
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">Who even am I?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-6xl">
        I go by the name <span class="poppins text-green-700">Lua</span>
      </h3>
    </div>
    <div class="flex">
      <p class="font-medium text-base text-justify sm:text-lg md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae id
        repudiandae vitae ea ipsam, dolore sed libero, perferendis explicabo
        officia eveniet dolor quis consectetur ad. Fugiat velit repellat eaque
        temporibus quibusdam neque ipsam, quam error dolorum ad consectetur
        similique a animi veritatis corporis odit perferendis consequatur hic
        expedita minus eveniet quia possimus vero sequi? Nisi, quidem reiciendis
        quibusdam repudiandae nostrum, architecto non fuga veritatis natus vero
        porro! Iusto nesciunt voluptatum asperiores ea nulla voluptatem nihil
        optio quo autem assumenda fugit corrupti velit, modi non id illum quae
        libero beatae delectus numquam quis. Blanditiis vel quia voluptatem ad
        aspernatur aliquam sapiente ut modi corrupti repellat dignissimos
        dolorum magnam, in, aperiam fuga reiciendis rerum voluptas hic
        doloremque nihil assumenda deleniti consectetur dolores. Ratione
        aspernatur consequuntur maiores. Ducimus consectetur nihil pariatur,
        autem fugit obcaecati, deserunt ut aspernatur ex labore ea consequuntur
        iure corporis? Corporis dicta ratione modi aspernatur aut, fugit
        blanditiis incidunt ad aliquam praesentium, repudiandae nam eveniet
        voluptatibus minima error debitis veritatis quam fuga laudantium rerum
        culpa similique assumenda quo. Ut qui explicabo ab reiciendis
        praesentium eos rerum, atque natus cum eligendi voluptatibus impedit
        fuga excepturi laboriosam doloribus consectetur vel perspiciatis porro
        hic nemo sunt sapiente? Obcaecati quasi ad in vel dolorum!
      </p>
    </div>
    <div class="flex">
      <a href="/music" target="_self" class="luaButton">
        My music so far &rarr;
      </a>
    </div>
  </section>
</main>
