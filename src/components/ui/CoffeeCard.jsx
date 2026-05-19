import { useState } from 'react';

export default function CoffeeCard({ coffee, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [priceInput, setPriceInput] = useState(coffee.price.toString());
  const [validationError, setValidationError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    const parsedPrice = parseFloat(priceInput);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      setValidationError('Must be a positive number');
      return;
    }
    
    setValidationError('');
    const result = await onUpdate(coffee.id, { price: parsedPrice });
    if (result && result.success) {
      setIsEditing(false);
    } else {
      setValidationError(result?.error || 'Failed to update');
    }
  };

  const handleCancel = () => {
    setPriceInput(coffee.price.toString());
    setValidationError('');
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    if (isDeleting) {
      onDelete(coffee.id);
    } else {
      setIsDeleting(true);
      // Automatically reset deleting state after 3 seconds if not confirmed
      setTimeout(() => setIsDeleting(false), 3000);
    }
  };

  return (
    <div className="bg-[#d8d4d2] text-[#302018] rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-stone-300/40 relative overflow-hidden group select-none">
      
      {/* Dynamic Background Ripple */}
      <div className="absolute inset-0 bg-stone-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Main Content */}
      <div className="space-y-4">
        {/* Name */}
        <h3 className="text-2xl font-bold tracking-tight text-stone-900 border-b border-stone-400/20 pb-2">
          {coffee.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-stone-750 font-medium leading-relaxed italic min-h-[3.5rem]">
          "{coffee.description}"
        </p>

        {/* Details: Origin */}
        <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-stone-600 bg-stone-250/60 py-1 px-3.5 rounded-full w-max">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span>{coffee.origin}</span>
        </div>
      </div>

      {/* Price & Actions Section */}
      <div className="mt-6 pt-4 border-t border-stone-400/25 flex flex-col gap-3">
        {isEditing ? (
          /* Inline Price Editor Form */
          <form onSubmit={handleSave} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">$</span>
              <input
                type="number"
                step="0.01"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
                className="w-full bg-white text-stone-950 px-3 py-1 text-sm rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 font-semibold"
                autoFocus
              />
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-stone-500 hover:bg-stone-600 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                X
              </button>
            </div>
            {validationError && (
              <p className="text-xs text-red-600 font-bold mt-1">
                {validationError}
              </p>
            )}
          </form>
        ) : (
          /* Static Price & Edit Mode Toggle */
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold block">Price</span>
              <span className="text-2xl font-extrabold text-stone-900">
                ${coffee.price.toFixed(2)}
              </span>
            </div>
            
            <button
              onClick={() => setIsEditing(true)}
              className="text-[#6a2c20] hover:text-stone-950 transition-colors p-1.5 rounded-lg hover:bg-stone-300/40 cursor-pointer"
              title="Edit Price"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-2.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
            </button>
          </div>
        )}

        {/* Delete Action Button */}
        {!isEditing && (
          <button
            onClick={handleDeleteClick}
            className={`w-full py-2 px-4 rounded-xl text-sm font-bold transition-all duration-300 border-2 cursor-pointer flex items-center justify-center space-x-1.5 ${
              isDeleting
                ? 'bg-rose-700 hover:bg-rose-800 text-white border-rose-700 animate-pulse'
                : 'bg-transparent text-stone-700 border-stone-400 hover:bg-stone-350 hover:text-stone-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
            <span>{isDeleting ? 'Confirm Delete?' : 'Delete Coffee'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
