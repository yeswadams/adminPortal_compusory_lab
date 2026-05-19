import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCoffee } from "../../hooks/useCoffee";
import Input from "../../components/ui/Input";

export default function AdminPortal() {
  const { addCoffee, loading } = useCoffee();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      origin: "",
      price: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required("Coffee Name is required"),
      description: Yup.string().trim().required("Description is required"),
      origin: Yup.string().trim().required("Error message informing me of a problem"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be a valid positive number")
        .typeError("Price must be a valid positive number"),
    }),
    onSubmit: async (values, { setErrors, resetForm }) => {
      const result = await addCoffee({
        ...values,
        price: parseFloat(values.price),
      });

      if (result && result.success) {
        setSuccessMessage("Coffee added successfully!");
        resetForm();
        setTimeout(() => {
          navigate("/shop");
        }, 1200);
      } else {
        setErrors({
          form:
            result?.error ||
            "Failed to submit form. Please check if server is active.",
        });
      }
    },
  });

  return (
    <div className="flex-1 flex justify-center items-center p-4 md:p-12 select-none">
      <div className="bg-black w-full max-w-lg rounded-3xl p-6 md:p-10 shadow-2xl border border-white/100 flex flex-col items-center text-center gap-6 animate-[fade-in-up_0.5s_ease-out]">
        <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
          <h2 className="font-extrabold text-xl">Add A New Coffee Brand</h2>
        </div>

        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-5">
          <Input
            label="Coffee Name:"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Type here"
            assistiveText="Assistive Text"
            error={formik.touched.name && formik.errors.name}
          />
          <Input
            label="Description:"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Type here"
            assistiveText="Assistive Text"
            error={formik.touched.description && formik.errors.description}
          />

          <Input
            label="Origin:"
            id="origin"
            name="origin"
            value={formik.values.origin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Type here"
            assistiveText="Assistive Text"
            error={formik.touched.origin && formik.errors.origin}
          />
          <Input
            label="Price:"
            id="price"
            name="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Type here"
            assistiveText="Assistive Text"
            error={formik.touched.price && formik.errors.price}
          />

          {formik.errors.form && (
            <p className="text-xs text-red-200 font-extrabold bg-red-950/20 py-2 px-3 rounded-lg border border-red-500/20 animate-pulse text-left">
              {formik.errors.form}
            </p>
          )}

          {successMessage && (
            <p className="text-sm text-emerald-250 font-bold bg-emerald-950/30 py-3 px-4 rounded-xl border border-emerald-500/20 text-center animate-[scale-in_0.3s_ease-out]">
              {successMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-max mx-auto bg-white hover:bg-stone-100 disabled:bg-stone-600 disabled:cursor-not-allowed text-black font-bold text-sm px-10 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
