// This custom hook was created by Audrey
import { useState } from "react";

 export function useForm(initialValues) {
   const [values, setValues] = useState(initialValues);

  const updateField = (event) => {
     const { name, id, value } = event.target;
     const field = name || id;
     setValues((values) => ({ ...values, [field]: value }));
   };

   return [values, updateField];
 }