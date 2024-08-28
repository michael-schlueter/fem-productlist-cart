export default function SelectQuantityButton() {
    return (
      <div className="w-40 h-[44px] rounded-full border bg-red-500 text-sm text-white font-bold flex items-center justify-between p-3 cursor-auto">
        <button className="w-5 h-5 border border-white rounded-full flex items-center justify-center">
          <img
            src="./public/assets/images/icon-decrement-quantity.svg"
            alt="decrement quantity"
          />
        </button>
        1
        <button className="w-5 h-5 border border-white rounded-full flex items-center justify-center">
          <img
            src="./public/assets/images/icon-increment-quantity.svg"
            alt="increment quantity"
          />
        </button>
      </div>
    );
  }