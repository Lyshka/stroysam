import CardNews from "./CardNews"

const News = () => {
  return (
    <div className="py-20 flex flex-col gap-y-8 justify-start items-start">
        <h2 className="text-[32px] leading-10 font-bold">Актуальные статьи</h2>

        <div className="w-full flex justify-center items-center gap-x-6">
            <CardNews />
            <CardNews />
            <CardNews />
        </div>
    </div>
  )
}
export default News