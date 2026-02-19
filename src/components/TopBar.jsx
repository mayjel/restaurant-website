
function TopBar() {
  return (
    <div className="bg-[#452829] text-white py-4 flex justify-end pr-4">
      <button className="flex items-center gap-2 hover:text-gray-300 transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8639/8639414.png"
          alt="Login icon"
          className="w-4 h-4 invert"
        />
        <span>Log in</span>
      </button>
    </div>
  );
}

export default TopBar;
