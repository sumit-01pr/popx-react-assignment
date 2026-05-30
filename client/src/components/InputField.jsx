const InputField = ({
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="relative mb-6">
      <label
        className="
        absolute
        -top-2
        left-3
        bg-[#F7F8F9]
        px-1
        text-xs
        text-[#6C25FF]
      "
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          h-10
          px-4
          border
          border-gray-300
          rounded-md
          bg-transparent
          outline-none
        "
      />
    </div>
  );
};

export default InputField;