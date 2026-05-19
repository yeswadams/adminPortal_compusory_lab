import { useState, useEffect, useCallback } from 'react';

const API_URL = 'http://localhost:3000/coffee';

export function useCoffee() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all coffees (READ)
  const fetchCoffees = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCoffees(data);
      setError(null);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Could not retrieve coffee list. Is the JSON server running on port 3000?');
    } finally {
      setLoading(false);
    }
  }, []);

  // Add a new coffee (CREATE)
  const addCoffee = useCallback(async (newCoffee) => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newCoffee,
          price: parseFloat(newCoffee.price) || 0,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const created = await response.json();
      setCoffees((prev) => [...prev, created]);
      setError(null);
      return { success: true, data: created };
    } catch (err) {
      console.error('Create error:', err);
      const errMsg = 'Failed to create new coffee product.';
      setError(errMsg);
      return { success: false, error: errMsg };
    } finally {
      setLoading(false);
    }
  }, []);

  // Update a coffee's details (UPDATE/PATCH)
  const updateCoffee = useCallback(async (id, updatedFields) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...updatedFields,
          price: updatedFields.price !== undefined ? parseFloat(updatedFields.price) || 0 : undefined,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updated = await response.json();
      setCoffees((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...updated } : c))
      );
      setError(null);
      return { success: true, data: updated };
    } catch (err) {
      console.error('Update error:', err);
      const errMsg = 'Failed to update coffee details.';
      setError(errMsg);
      return { success: false, error: errMsg };
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete a coffee (DELETE)
  const deleteCoffee = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setCoffees((prev) => prev.filter((c) => c.id !== id));
      setError(null);
      return { success: true };
    } catch (err) {
      console.error('Delete error:', err);
      const errMsg = 'Failed to delete coffee product.';
      setError(errMsg);
      return { success: false, error: errMsg };
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch data on mount
  useEffect(() => {
    fetchCoffees();
  }, [fetchCoffees]);

  return {
    coffees,
    loading,
    error,
    refetch: fetchCoffees,
    addCoffee,
    updateCoffee,
    deleteCoffee,
  };
}
