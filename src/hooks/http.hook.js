/* eslint-disable */
import { useCallback, useState } from "react";
import config from "../../config/default.json";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      setError("");
      try {
        if (body) {
          // eslint-disable-next-line no-param-reassign
          body = JSON.stringify(body);
          // eslint-disable-next-line no-param-reassign
          headers["Content-Type"] = "application/json";
        }
        const str1 = `${config.get("baseUrl")}`;
        const baseUrl = str1.concat(`${url}`);
        console.log("baseUrl", baseUrl);

        const response = await fetch(`http://localhost:5000${url}`, {
          method,
          body,
          headers,
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        return undefined;
      }
    },
    []
  );

  return {
    loading,
    request,
    error,
  };
};

export default useHttp;
