import { useEffect, useState } from "react";

export const useValidateTable = (headers: string[], data: string[]) => {
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (headers.length === data.length) {
      setValidate(true);
    }
  }, [validate, headers.length, data.length]);

  return validate;
};