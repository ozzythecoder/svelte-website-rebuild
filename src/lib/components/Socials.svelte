<!-- 
  SOCIALS
 -->

<script>
  const socials = [
    { name: "Bandcamp icon", url: "https://ozzythepainter.bandcamp.com/", src: "/social-icons/bandcamp.png" },
    { name: "Spotify icon", url: "https://open.spotify.com/artist/5Z6R28uhpZFSbuGUYxfFBl", src: "/social-icons/spotify.svg" },
    { name: "Instagram icon", url: "https://instagram.com/ozzythepainter?igshid=Zjc2ZTc4Nzk=", src: "/social-icons/instagram.png" },
    { name: "Twitter icon", url: "https://twitter.com/ozzythepainter", src: "/social-icons/twitter.png" }
  ]
</script>

<ul>
  {#each socials as social}
    <a href={social.url} target="_blank" rel="noreferrer">
      <li>
        <img src={social.src} alt={social.name} />
      </li>
    </a>
  {/each}
</ul>

<style lang="scss">
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    gap: 0.3rem;
    margin: 0 30%;
  }

  img {
    transition: transform 0.2s ease;
    height: 40px;
  }

  a:hover > li img {
    transform: scale(1.2);
  }

  li {
    list-style: none;
    padding: 0.5rem 1rem;
    transition: transform 0.3s ease;
  }

</style>
