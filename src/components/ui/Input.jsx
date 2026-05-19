import React from 'react';

export default function Input({
  label,
  id,
  value,
  onChange,
  onBlur,
  error,
  assistiveText,
  placeholder,
  type = 'text',
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left select-none">
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-bold text-stone-100 tracking-wide block"
      >
        {label}
      </label>

      {/* Input Element Wrapper */}
      <div className="relative">
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full bg-white text-stone-900 px-4 py-2.5 rounded-lg border-2 font-medium transition-all duration-200 outline-none focus:ring-2 focus:ring-purple-400 ${
            error
              ? 'border-red-500 focus:border-red-500 pr-10'
              : 'border-stone-300 focus:border-purple-400'
          }`}
          {...props}
        />
        
        {/* Mockup Red Exclamation Mark Icon on Error */}
        {error && (
          <div className="absolute right-3.5 top-3 text-red-500 pointer-events-none animate-bounce">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        )}
      </div>

      {/* Assistive / Error Message */}
      {error ? (
        <span className="text-xs text-red-200 font-extrabold tracking-wide flex items-center gap-1.5 animate-slide-in">
          <span className="inline-block w-1.5 h-1.5 bg-red-400 rounded-full" />
          {error}
        </span>
      ) : (
        assistiveText && (
          <span className="text-xs text-stone-300 font-medium tracking-wide italic opacity-80">
            {assistiveText}
          </span>
        )
      )}
    </div>
  );
}
