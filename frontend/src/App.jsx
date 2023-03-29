import './App.css';

function App() {
  return (
    <div>
      <nav class="p-5 h-16 flex md:items-center md:justify-between w-11/12 md:m-auto">
        <span class="text-3xl cursor-pointer mx-2 -mt-1.5 md:hidden block">
          <ion-icon class="w-6 h-6" name="menu"></ion-icon>
        </span>
        <div class="flex justify-between items-center">
          <span class="font-[Poppins] cursor-pointer mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              md="viewBox : 0 0 20 20"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 md:ml-10 inline"
            >
              <path
                class=""
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
        <div class="ml-16 md:ml-0">
          <p class="md:text-[32px] font-semibold">Strawberrynet</p>
        </div>
        <ul class="md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 md:pl-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li class="mx-4 my-6 hidden sm:block md:block">
            <a href="#" class="text-xl font-bold">
              EN
            </a>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="md:w-8 md:h-8 md:mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 inline-block mr-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </ul>
      </nav>

      <div class="container h-8 mx-auto p-4">
        <div class="hidden md:block sm:block md:flex w-11/12 md:m-auto flex-row justify-evenly hover:bg-gray-600 text-black font-semibold">
          <p>SHOP BY BRAND</p>
          <p>SKINCARE</p>
          <p>MAKEUP</p>
          <p>HAIRCARE</p>
          <p>MEN'S COLOGIN</p>
          <p>PERFUME</p>
          <p>HOME SCENTS</p>
          <p>MEN'S SKINCARE</p>
          <p>WELLNESS</p>
          <p>LIFESTYLE</p>
        </div>
        <div class="md:w-6/6 md:mt-5">
          <img
            class="w-full"
            src="https://a.cdnsbn.com/images/English/banner_FlashSale29Mar23_1920_1.jpg"
          />
        </div>
        <div class="sm:w-90% w-full flex flex-row justify-evenly md:mt-16 text-center md:ml-20 md:mr-20 mt-10">
          <div class="w-2/12 md:w-2/6">
            <img
              class="h-100 w-100 m-auto rounded-full"
              src="https://d.cdnsbn.com/images/common/giftmain_SBNNewArrival.jpg"
            />
            <p class="mt-4 text-sm md:text-xl">NEW ARRIVALS</p>
          </div>
          <div class="w-2/12 md:w-2/6">
            <img
              class="h-100 w-100 m-auto rounded-full"
              src="https://c.cdnsbn.com/images/common/giftmain_SBNHomeScent.jpg"
            />
            <p class="mt-4 text-sm md:text-xl">HOME SCENT</p>
          </div>
          <div class="w-2/12 md:w-2/6">
            <img
              class="h-100 w-100 m-auto rounded-full"
              src="https://b.cdnsbn.com/images/common/giftmain_SBNClearanec.jpg"
            />
            <p class="mt-4 text-sm md:text-xl">CLEARENCE</p>
          </div>
          <div class="w-2/12 md:w-2/6">
            <img
              class="h-100 w-100 m-auto rounded-full"
              src="https://c.cdnsbn.com/images/common/giftmain_SBNNewExcitment.jpg"
            />
            <p class="mt-4 text-sm md:text-xl">NEW EXCITMENT</p>
          </div>
          <div class="w-2/12 md:w-2/6">
            <img
              class="h-100 w-100 m-auto rounded-full"
              src="https://a.cdnsbn.com/images/common/giftmain_SBNLipCheek.jpg"
            />
            <p class="mt-4 text-sm md:text-xl">LIP &CHEEK</p>
          </div>
          <div class="hidden sm:block w-2/6">
            <img
              class="rounded-full"
              src="https://b.cdnsbn.com/images/common/giftmain_SBNKoreanBrand.jpg"
            />
            <p class="mt-4 text-sm md:text-xl">KOREAN BRANDS</p>
          </div>
          <div class="hidden sm:block w-2/6">
            <img
              class="rounded-full"
              src="https://d.cdnsbn.com/images/common/giftmain_SBNBabyMum.jpg"
            />
            <p class="mt-4 text-sm md:text-xl">BABY AND MUM</p>
          </div>
        </div>

        <div class="text-center md:mt-20 mt-10">
          <h1 class="text-2xl font-bold">WOODY FRAGERANCE</h1>
          <img
            class="mt-10 md:w-4/5 w-full m-auto h-34 sm:h-68 "
            src="https://d.cdnsbn.com/images/English/widget_WoodyFragranceMar23_1133_1.jpg"
          />
        </div>
        <div class="flex flex-row justify-evenly md:mr-0 md:ml-20 mt-20 text-start">
          <div class="md:w-4/6 w-5/6 h-100">
            <img
              class="w-5/6 h-52"
              src="https://a.cdnsbn.com/images/products/250/25549189105.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">MAISON MARGIELA</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="md:w-4/6 w-5/6 ">
            <img
              class="w-5/6 h-52"
              src="https://a.cdnsbn.com/images/products/250/06702140105.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">HERMS</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/17640380205.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">CHANEL</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="md:w-4/6 w-3/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/05442986605.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">VERSACE</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/15919798005.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">TOM FORD</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
        </div>

        <div class="text-center md:mt-24 mt-12">
          <h1 class="text-2xl font-bold">WHAT YOU'RE LOVING</h1>
          <img
            class="mt-10 md:w-4/5 m-auto"
            src="https://b.cdnsbn.com/images/English/widget_BestSellersMar23_1133_1.jpg"
          />
        </div>
        <div class="flex flex-row justify-evenly md:mr-20 md:ml-20 md:mt-20 mt-10 text-start">
          <div class="md:w-4/6 w-5/6 h-100">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/21495580301.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">MAISON MARGIELA</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="md:w-4/6 w-5/6 h-100">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/26531780102.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">HERMS</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/25422480601.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">CHANEL</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/28054817701.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">VERSACE</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/16305336601.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">TOM FORD</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
        </div>

        <div class="text-center md:mt-24 mt-10">
          <h1 class="text-2xl font-bold">FLASH SALE</h1>
          <img
            class="mt-10 md:w-4/5 m-auto"
            src="https://b.cdnsbn.com/images/English/widget_FlashSale29Mar23_1133_1.jpg"
          />
        </div>
        <div class="flex flex-row justify-evenly md:mr-20 md:ml-20 md:mt-20 mt-10 text-start">
          <div class="md:w-4/6 w-5/6 h-100">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/26160480301.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">MAISON MARGIELA</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="md:w-4/6 w-5/6 h-100">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/26347565501.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">HERMS</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/26695680401.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">CHANEL</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/27959183101.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">VERSACE</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/27537669444.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">TOM FORD</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
        </div>

        <div class="text-center md:mt-24 mt-10">
          <h1 class="text-2xl font-bold">FLASH SALE</h1>
          <img
            class="mt-10 md:w-4/5 m-auto"
            src="https://a.cdnsbn.com/images/English/widget_NaturaBeautyMar23_1133_1.jpg"
          />
        </div>
        <div class="md:flex flex-row justify-evenly mr-20 ml-20 mt-20 text-start">
          <div>
            <img
              class="w-6/6"
              src="https://b.cdnsbn.com/images/common/NaturaBeautyMar23_ProdImg1.jpg"
            />
            <h3 class="font-semibold mt-5">TOM FORD</h3>
            <p class="mt-1">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
          </div>
          <div>
            <img
              class="w-6/6"
              src="https://b.cdnsbn.com/images/common/NaturaBeautyMar23_ProdImg2.jpg"
            />
            <h3 class="font-semibold mt-5">TOM FORD</h3>
            <p class="mt-1">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
          </div>
          <div>
            <img
              class="w-6/6"
              src="https://d.cdnsbn.com/images/common/NaturaBeautyMar23_ProdImg3.jpg"
            />
            <h3 class="font-semibold mt-5">TOM FORD</h3>
            <p class="mt-1">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
          </div>
        </div>

        <div class="text-center md:mt-24 mt-10">
          <h1 class="text-2xl font-bold">SUNSCREEN FACE & BODY</h1>
          <img
            class="mt-10 md:w-4/5 m-auto"
            src="https://a.cdnsbn.com/images/English/widget_SunscreenMar23_1133_1.jpg"
          />
        </div>
        <div class="flex flex-row justify-evenly md:mr-20 md:ml-20 md:mt-20 mt-10 text-start">
          <div class="md:w-4/6 w-5/6 h-100">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/20079665901.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">MAISON MARGIELA</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="md:w-4/6 w-5/6 h-100">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/20079765901.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">HERMS</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/21269818101.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">CHANEL</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/20397480401.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">VERSACE</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
          <div class="sm:w-4/6 hidden sm:block">
            <img
              class="w-5/6"
              src="https://a.cdnsbn.com/images/products/250/27840000101.jpg"
            />
            <h3 class="font-semibold mt-5 ml-5">TOM FORD</h3>
            <p class="mt-1 ml-5">
              Replica Jazz Club Eau De Toilette <br />
              Spray 100ml/3.4oz
            </p>
            <p class="text-xs mt-5 ml-5">Size 100ml/3.4oz</p>
            <h1 class="font-bold mt-2 text-xl ml-5">RS.10,287.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
