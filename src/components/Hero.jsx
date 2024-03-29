import focusList from "../../utils/focusList"
import playlistList from "../../utils/playlistList"
import Section from "./Section"

const Hero = () => {
  return (
    <div className="h-full w-full overflow-y-scroll no-scrollbar pl-[29px] pr-[11px] pt-[21px] pb-[28px] flex flex-col gap-[24px] black-gradient ">
      <Section data={focusList} name='Focus' />
      <Section data={playlistList} name='Spotify Playlists' />
    </div>
  )
}

export default Hero