import Product from "./Product";

export default function Home() {
  return (
    <main className="flex h-screen items-center">
      <div className="mx-auto flex max-h-full max-w-[90%] flex-col items-center overflow-y-visible min-[1920px]:max-w-[1640px]">
        <div className=" hidden text-center font-bold md:block">
          <div className="text-[46px] leading-[51px]">
            Best Seller Gaming PC
          </div>
          <div className="text-[30px] leading-[33px]">Prebuilt & Custom</div>
        </div>
        <Product />
      </div>
    </main>
  );
}
