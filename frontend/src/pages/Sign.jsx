import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
const Sign = (nume) => {
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [mesaj, setMesaj] = useState("");

  const auth = (email, parola) => {
    if (email === "moraru@eneadrian.com" && parola === "test123") {
      setMesaj("Autentificat cu succes!");
      localStorage.setItem("nume", "Moraru Sorin");
      window.location.reload(false);
    } else if (email === "ene@eneadrian.com" && parola === "test123") {
      setMesaj("Autentificat cu succes!");
      localStorage.setItem("nume", "Ene Adrian");
      window.location.reload(false);
    } else {
      setMesaj("Datele sunt incorecte");
    }
  };
  console.log(nume);

  return (
    <div className="w-full h-full mx-auto bg-[#F1F3F5] dots">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo className="h-10 mx-auto" />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {mesaj}
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div class="space-y-6">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Adresa de email
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#54a75e]"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Parola
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setParola(e.target.value)}
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#54a75e]"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => auth(email, parola)}
                class="flex w-full justify-center rounded-md bg-[#89E894] text-black px-3 py-1.5 text-base font-semibold leading-6 shadow-sm hover:bg-[#54a75e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#54a75e]"
              >
                Autentifica-te
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
