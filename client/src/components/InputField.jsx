const InputField = ({
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="relative mb-4">
      <label
        className="
        absolute
        -top-3
        left-3
        bg-[#F7F8F9]
        px-1
        text-[#6C25FF]
        text-sm
      "
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          border
          border-gray-300
          rounded-md
          px-4
          py-3
          outline-none
          bg-transparent
        "
      />
    </div>
  );
};

export default InputField;