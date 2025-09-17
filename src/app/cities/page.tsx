"use client";

import { BackButton } from "@/components/back-button";
import { ICity } from "@/interfaces/ICity";
import { IResponse } from "@/interfaces/IResponse";
import { getAllCities } from "@/services/cities";
import { useEffect, useState } from "react";
import City from "./components/city";

export default function Page() {
  const [cities, setCities] = useState<IResponse<ICity[]>>();

  useEffect(() => {
    (async () => {
      const request = await getAllCities();

      setCities(request);
    })();
  }, []);

  return (
    <>
      <div className="px-4 m-2">
        <BackButton />
      </div>

      {cities ? <City initialData={cities} /> : null}
    </>
  );
}
