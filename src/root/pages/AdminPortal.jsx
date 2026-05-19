import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoffee } from '../../hooks/useCoffee';
import Input from '../../components/ui/Input';

export default function AdminPortal() {
  const { addCoffee, loading } = useCoffee();
  const navigate = useNavigate();

  // Form Field States
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState('');

  // Field Level Error States
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Form Validation Logic
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Coffee Name is required';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    // High fidelity error message matching the exact string from mockup 1!
    if (!origin.trim()) {
      newErrors.origin = 'Error message informing me of a problem';
    }
    
    const parsedPrice = parseFloat(price);
    if (!price.trim()) {
      newErrors.price = 'Price is required';
    } else if (isNaN(parsedPrice) || parsedPrice <= 0) {
      newErrors.price = 'Price must be a valid positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const newCoffee = {
      name: name.trim(),
      description: description.trim(),
      origin: origin.trim(),
      price: parseFloat(price),
    };

    const result = await addCoffee(newCoffee);
    if (result && result.success) {
      setSuccessMessage('🎉 Product added successfully! Redirecting...');
      // Clear form
      setName('');
      setDescription('');
      setOrigin('');
      setPrice('');
      setErrors({});

      // Redirect to Shop page after 1.5 seconds so they can see their added item
      setTimeout(() => {
        navigate('/shop');
      }, 1500);
    } else {
      setErrors({ form: result?.error || 'Failed to submit form. Please check if server is active.' });
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center p-6 md:p-12 select-none">
      {/* Outer Card Container matched to mockup 1 theme */}
      <div className="bg-[#826e63] w-full max-w-lg rounded-3xl p-8 md:p-10 shadow-2xl border border-white/5 flex flex-col items-center text-center gap-6 animate-[fade-in-up_0.5s_ease-out]">
        
        {/* Mockup Figma "❖ Component" Indicator */}
        <div className="flex items-center gap-1.5 text-[#b07be2] font-semibold text-sm">
          <span className="text-base font-extrabold">❖</span>
          <span>Component</span>
        </div>

        {/* Form Element */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          {/* Coffee Name Input */}
          <Input
            label="Coffee Name:"
            id="coffeeName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here"
            assistiveText="Assistive Text"
            error={errors.name}
          />

          {/* Description Input */}
          <Input
            label="Description:"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type here"
            assistiveText="Assistive Text"
            error={errors.description}
          />

          {/* Origin Input */}
          <Input
            label="Origin:"
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="Type here"
            assistiveText="Assistive Text"
            error={errors.origin}
          />

          {/* Price Input */}
          <Input
            label="Price:"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Type here"
            assistiveText="Assistive Text"
            error={errors.price}
          />

          {/* Mockup Figma "❖ Text In..." Indicator */}
          <div className="flex items-center justify-center gap-1 text-[#b07be2] font-semibold text-xs py-1">
            <span className="text-sm font-extrabold">❖</span>
            <span>Text In...</span>
          </div>

          {/* General Submit Error Alert */}
          {errors.form && (
            <p className="text-xs text-red-200 font-extrabold bg-red-950/20 py-2 px-3 rounded-lg border border-red-500/20 animate-pulse text-left">
              ⚠️ {errors.form}
            </p>
          )}

          {/* Success Banner */}
          {successMessage && (
            <p className="text-sm text-emerald-250 font-bold bg-emerald-950/30 py-3 px-4 rounded-xl border border-emerald-500/20 text-center animate-[scale-in_0.3s_ease-out]">
              {successMessage}
            </p>
          )}

          {/* Submit Button matched to mockup 1 reddish color */}
          <button
            type="submit"
            disabled={loading}
            className="w-max mx-auto bg-[#6a2c20] hover:bg-[#803628] disabled:bg-stone-600 disabled:cursor-not-allowed text-white font-bold text-sm px-10 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
