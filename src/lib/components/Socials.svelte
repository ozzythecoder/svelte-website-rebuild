<!-- 
  SOCIALS
 -->

<script>
  const socials = [
    { name: "Bandcamp icon", url: "https://ozzythepainter.bandcamp.com/", src: "/social-icons/bandcamp.png" },
    { name: "Spotify icon", url: "https://open.spotify.com/artist/5Z6R28uhpZFSbuGUYxfFBl", src: "/social-icons/spotify.png" },
    { name: "Instagram icon", url: "https://instagram.com/ozzythepainter?igshid=Zjc2ZTc4Nzk=", src: "/social-icons/instagram.png" },
    { name: "Twitter icon", url: "https://twitter.com/ozzythepainter", src: "/social-icons/twitter.png" }
  ]
</script>

<ul>
  {#each socials as social}
    <li>
      <a href={social.url} target="_blank" rel="noreferrer">
        <img src={social.src} alt={social.name} />
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0 30%;
  }

  li {
    list-style: none;
    padding: 0.5rem 1rem 0;
  }

  img {
    max-height: 30px;
  }
</style>
