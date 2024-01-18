"use client";
import {
  ReadonlyURLSearchParams,
  useSearchParams,
  useRouter,
} from "next/navigation";
import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useState,
} from "react";

const categories = ["Inicial", "Primaria", "Secundaria"];
const sizes = ["S", "M", "L", "XL"];

const filterOptions = [
  {
    id: "categories",
    title: "Categoria",
    options: categories,
    type: "radio",
  },
  // {
  //   id: "sizes",
  //   title: "Talla",
  //   options: sizes,
  //   type: "checkbox",
  // },
];

function checkValidQuery(queries: string[]) {
  return queries.filter((query) => query !== "").length > 0;
}

export function convertStringToQueriesObject(
  searchParams: ReadonlyURLSearchParams
) {
  let selectedQueries: Record<string, string[]> = {};
  searchParams.forEach((values, key) => {
    const queries = values.split(",");
    if (selectedQueries[key]) {
      selectedQueries[key].push(...queries);
    } else {
      selectedQueries[key] = queries;
    }
  });
  return selectedQueries;
}

function convertValidStringQueries(queries: Record<string, string[]>) {
  let q = "";
  for (let [key, value] of Object.entries(queries)) {
    q = q + `${q === "" ? "" : "&"}${key}=${value}`;
  }
  return q;
}

const FilterSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilterQueries, setSelectedFilterQueries] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);
  }, [searchParams]);

  function handleSelectFilterOptions(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    let selectedQueries = selectedFilterQueries;

    if (selectedQueries[name]) {
      if (type === "radio") {
        selectedQueries[name] = [value];
      } else if (selectedQueries[name].includes(value)) {
        selectedQueries[name] = selectedQueries[name].filter(
          (query) => query !== value
        );
        if (!checkValidQuery(selectedQueries[name])) {
          delete selectedQueries[name];
        }
      } else {
        selectedQueries[name].push(value);
      }
    } else if (selectedQueries) {
      selectedQueries[name] = [value];
    }

    router.push(`products/?${convertValidStringQueries(selectedQueries)}`, {
      scroll: false,
    });
  }

  function isChecked(id: string, option: string) {
    return (
      Boolean(selectedFilterQueries[id]) &&
      selectedFilterQueries[id].includes(option.toLocaleLowerCase())
    );
  }

  return (
    <div className="col-span-2 space-y-6 sticky top-12 h-fit">
      {filterOptions.map(({ id, title, type, options }) => {
        return (
          <div className="border-b pb-4" key={id}>
            <p className="font-medium mb-4">{title}</p>
            <div className="space-y-2">
              {options.map((value) => {
                return (
                  <CheckboxAndRadioGroup key={value}>
                    <CheckboxAndRadioItem
                      type={type}
                      name={id}
                      id={value.toLowerCase().trim()}
                      label={value}
                      value={value.toLocaleLowerCase().trim()}
                      checked={isChecked(id, value)}
                      onChange={handleSelectFilterOptions}
                    />
                  </CheckboxAndRadioGroup>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface ICheckboxAndRadioGroup {
  children: React.ReactNode;
}
function CheckboxAndRadioGroup({ children }: ICheckboxAndRadioGroup) {
  return <div className="flex items-center gap-4">{children}</div>;
}

interface CheckboxAndRadioItem extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

function CheckboxAndRadioItem({ id, label, ...props }: CheckboxAndRadioItem) {
  return (
    <>
      <input id={id} className="w-4 h-4 shrink-0" {...props} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </>
  );
}

export default FilterSection;
