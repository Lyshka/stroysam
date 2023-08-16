import FormMain from "./FormMain"
import ProductsMain from "./ProductsMain"

const MainMain = () => {
  return (
    <div className="mt-8 flex justify-start items-start gap-x-[23px]">
      <FormMain />
      <ProductsMain />
    </div>
  )
}
export default MainMain