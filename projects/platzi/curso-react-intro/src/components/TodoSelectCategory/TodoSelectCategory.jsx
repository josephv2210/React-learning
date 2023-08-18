import React from "react";

function TodoSelectCategory() {
  return (
    <>
      <header className="p-6 items-center justify-between flex bg-white rounded-2xl w-full h-28 shadow-lg shadow-light-orange/40 hover:shadow-light-orange/70 cursor-pointer">
        <div className="">
          <p className="font-normal text-sm">Categoría Seleccionada</p>
          <p className="font-medium text-2xl">Universidad</p>
        </div>
        <div className="">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41Z"
              fill="#83C5BE"
              fill-opacity="0.4"
              stroke="#83C5BE"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </header>
    </>
  );
}

export default TodoSelectCategory;
